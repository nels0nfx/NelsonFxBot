module.exports = {
  name: 'ping',
  description: 'Check bot status and latency',
  category: 'General',
  execute: async (sock, message, args, config) => {
    const sender = message.key.remoteJid;
    const startTime = Date.now();

    const response = await sock.sendMessage(sender, {
      text: '🏓 Pong!',
    });

    const latency = Date.now() - startTime;

    await sock.sendMessage(sender, {
      text: `✅ Bot is online!\n⏱️ Latency: ${latency}ms`,
    });
  },
};
