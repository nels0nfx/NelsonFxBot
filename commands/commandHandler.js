const { proto, isJidGroup } = require('@whiskeysockets/baileys');
const fs = require('fs');
const path = require('path');

// Import all command files
const commandsDir = path.join(__dirname, 'list');
const commandFiles = fs.readdirSync(commandsDir).filter(file => file.endsWith('.js'));

const commands = {};

commandFiles.forEach(file => {
  const command = require(path.join(commandsDir, file));
  if (command.name) {
    commands[command.name] = command;
  }
});

async function commandHandler(sock, message, config) {
  try {
    const messageType = Object.keys(message.message)[0];
    const messageContent = message.message[messageType];

    // Extract text from different message types
    let text = '';
    if (messageType === 'conversation') {
      text = messageContent;
    } else if (messageType === 'extendedTextMessage') {
      text = messageContent.text;
    }

    if (!text) return;

    // Check if message starts with prefix
    if (!text.startsWith(config.prefix)) return;

    // Extract command and arguments
    const args = text.slice(config.prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    // Get sender info
    const sender = message.key.remoteJid;
    const isGroup = isJidGroup(sender);
    const senderNumber = sender.split('@')[0];
    const isOwner = senderNumber === config.ownerNumber || text.includes(config.ownerName);

    // Get command
    const command = commands[commandName];

    if (!command) {
      // Send help message if command not found
      if (commandName === 'help') {
        await sendHelp(sock, sender, config);
      }
      return;
    }

    // Check if command is owner-only
    if (command.ownerOnly && !isOwner) {
      await sock.sendMessage(sender, {
        text: `❌ This command is only for the owner (${config.ownerName})`,
      });
      return;
    }

    // Check if command is group-only
    if (command.groupOnly && !isGroup) {
      await sock.sendMessage(sender, {
        text: '❌ This command can only be used in groups',
      });
      return;
    }

    // Check if command is private-only
    if (command.privateOnly && isGroup) {
      await sock.sendMessage(sender, {
        text: '❌ This command can only be used in private messages',
      });
      return;
    }

    // Execute command
    await command.execute(sock, message, args, config);
  } catch (error) {
    console.error('Error in command handler:', error);
  }
}

async function sendHelp(sock, sender, config) {
  const helpText = `
╔═══════════════════════════════════╗
║      🤖 ${config.botName} Help 🤖      ║
╚═══════════════════════════════════╝

📝 Available Commands:

${config.prefix}ping - Check bot status
${config.prefix}menu - Show all commands
${config.prefix}info - Bot information
${config.prefix}owner - Owner information
${config.prefix}alive - Check if bot is alive

🎮 Fun Commands:
${config.prefix}hello - Say hello
${config.prefix}joke - Get a random joke

👤 Owner Commands:
${config.prefix}setprefix <prefix> - Change command prefix
${config.prefix}setname <name> - Change bot name

For more info, use: ${config.prefix}menu
  `;

  await sock.sendMessage(sender, { text: helpText });
}

module.exports = commandHandler;
