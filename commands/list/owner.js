module.exports = {
  name: 'owner',
  description: 'Display owner information',
  category: 'General',
  execute: async (sock, message, args, config) => {
    const sender = message.key.remoteJid;

    const ownerText = `
╔═══════════════════════════════════╗
║   👤 Owner Information 👤   ║
╚═══════════════════════════════════╝

*Owner Name:* ${config.ownerName}
*Bot Name:* ${config.botName}
*Mode:* ${config.botMode}

📝 *About:*
This bot was created by ${config.ownerName} to provide
advanced WhatsApp automation features including:

✨ AI-powered chatbot
📥 Media downloader
🎮 Fun commands
👥 Group management
🔌 Plugin system

═══════════════════════════════════

For more info: ${config.prefix}info
    `;

    await sock.sendMessage(sender, { text: ownerText });
  },
};
