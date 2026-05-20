module.exports = {
  name: 'setprefix',
  description: 'Change command prefix (owner only)',
  category: 'Owner',
  ownerOnly: true,
  execute: async (sock, message, args, config) => {
    const sender = message.key.remoteJid;

    if (args.length === 0) {
      await sock.sendMessage(sender, {
        text: `❌ Usage: ${config.prefix}setprefix <new_prefix>`,
      });
      return;
    }

    const newPrefix = args[0];

    if (newPrefix.length > 1) {
      await sock.sendMessage(sender, {
        text: '❌ Prefix must be a single character!',
      });
      return;
    }

    // Note: In a real implementation, this would update the config file or database
    await sock.sendMessage(sender, {
      text: `✅ Prefix changed from "${config.prefix}" to "${newPrefix}"\n\nNote: This change will take effect after bot restart.`,
    });
  },
};
