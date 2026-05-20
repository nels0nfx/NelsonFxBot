module.exports = {
  name: 'status',
  description: 'Check bot status (owner only)',
  category: 'Owner',
  ownerOnly: true,
  execute: async (sock, message, args, config) => {
    const sender = message.key.remoteJid;
    const uptime = process.uptime();
    const hours = Math.floor(uptime / 3600);
    const minutes = Math.floor((uptime % 3600) / 60);
    const seconds = Math.floor(uptime % 60);

    const statusText = `
╔═══════════════════════════════════╗
║   📊 Bot Status Report 📊   ║
╚═══════════════════════════════════╝

🤖 *Bot Name:* ${config.botName}
👤 *Owner:* ${config.ownerName}
⚙️ *Prefix:* ${config.prefix}
📱 *Mode:* ${config.botMode}

*System Status:*
✅ Connection: Online
⏱️ Uptime: ${hours}h ${minutes}m ${seconds}s
💾 Memory: ${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB
🔌 Node Version: ${process.version}

*Features:*
✨ AI Ready
📥 Media Tools
🎮 Fun Commands
👥 Group Management
🔧 Admin Tools

═══════════════════════════════════

Last Updated: ${new Date().toLocaleString()}
    `;

    await sock.sendMessage(sender, { text: statusText });
  },
};
