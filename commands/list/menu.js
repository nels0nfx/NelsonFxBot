module.exports = {
  name: 'menu',
  description: 'Show all available commands',
  category: 'General',
  execute: async (sock, message, args, config) => {
    const sender = message.key.remoteJid;

    const menuText = `
╔════════════════════════════════════════╗
║   🤖 ${config.botName} - Command Menu 🤖   ║
╚════════════════════════════════════════╝

📌 *General Commands:*
${config.prefix}ping - Check bot status & latency
${config.prefix}menu - Show this menu
${config.prefix}info - Bot information
${config.prefix}owner - Owner information
${config.prefix}alive - Check if bot is alive
${config.prefix}help - Get help

🎮 *Fun Commands:*
${config.prefix}hello - Say hello
${config.prefix}joke - Get a random joke

👤 *Owner Commands:*
${config.prefix}setprefix <prefix> - Change command prefix
${config.prefix}setname <name> - Change bot name
${config.prefix}status - Get bot status

📱 *Utility Commands:*
${config.prefix}echo <text> - Echo text back
${config.prefix}time - Get current time

═══════════════════════════════════════

💡 *Tip:* Use ${config.prefix}help for more information

Made with ❤️ by ${config.ownerName}
    `;

    await sock.sendMessage(sender, { text: menuText });
  },
};
