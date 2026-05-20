module.exports = {
  name: 'alive',
  description: 'Check if bot is alive',
  category: 'General',
  execute: async (sock, message, args, config) => {
    const sender = message.key.remoteJid;

    const aliveText = `
╔═══════════════════════════════════╗
║   ✅ Bot is Alive! ✅   ║
╚═══════════════════════════════════╝

🤖 *Bot:* ${config.botName}
👤 *Owner:* ${config.ownerName}
📱 *Status:* Online ✅
⏱️ *Uptime:* Running
🔌 *Connection:* Stable

*Features Available:*
✨ AI Chatbot
📥 Media Tools
🎮 Fun Commands
👥 Group Management
🔧 Admin Tools

═══════════════════════════════════

Made with ❤️ by ${config.ownerName}
    `;

    await sock.sendMessage(sender, { text: aliveText });
  },
};
