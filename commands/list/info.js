module.exports = {
  name: 'info',
  description: 'Display bot information',
  category: 'General',
  execute: async (sock, message, args, config) => {
    const sender = message.key.remoteJid;

    const infoText = `
╔═══════════════════════════════════╗
║   ℹ️ Bot Information ℹ️   ║
╚═══════════════════════════════════╝

🤖 *Bot Name:* ${config.botName}
👤 *Owner:* ${config.ownerName}
⚙️ *Prefix:* ${config.prefix}
📱 *Mode:* ${config.botMode}
📦 *Version:* 1.0.0
🔧 *Status:* Online ✅

*Features:*
✨ Multi-Device Support
🤖 AI Integration Ready
📥 Media Tools
👥 Group Management
🎮 Fun Commands
🔌 Plugin System Ready

═══════════════════════════════════

For help, use: ${config.prefix}help
    `;

    await sock.sendMessage(sender, { text: infoText });
  },
};
