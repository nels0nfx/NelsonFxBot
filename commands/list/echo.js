module.exports = {
  name: 'echo',
  description: 'Echo text back to user',
  category: 'Utility',
  execute: async (sock, message, args, config) => {
    const sender = message.key.remoteJid;

    if (args.length === 0) {
      await sock.sendMessage(sender, {
        text: `❌ Usage: ${config.prefix}echo <text>`,
      });
      return;
    }

    const echoText = args.join(' ');

    await sock.sendMessage(sender, {
      text: `🔊 ${echoText}`,
    });
  },
};
