module.exports = {
  name: 'time',
  description: 'Get current time',
  category: 'Utility',
  execute: async (sock, message, args, config) => {
    const sender = message.key.remoteJid;
    const now = new Date();

    const timeText = `
⏰ *Current Time*

🕐 Time: ${now.toLocaleTimeString()}
📅 Date: ${now.toLocaleDateString()}
🌍 Timezone: ${Intl.DateTimeFormat().resolvedOptions().timeZone}

Timestamp: ${now.getTime()}
    `;

    await sock.sendMessage(sender, { text: timeText });
  },
};
