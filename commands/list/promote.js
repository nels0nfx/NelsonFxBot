const { isJidGroup } = require('@whiskeysockets/baileys');
const GroupManager = require('../../features/groupManager');

module.exports = {
  name: 'promote',
  description: 'Promote a user to admin in group',
  category: 'Group',
  groupOnly: true,
  execute: async (sock, message, args, config) => {
    const sender = message.key.remoteJid;
    const senderNumber = message.key.participant;

    // Check if user is admin
    const isAdmin = await GroupManager.isUserAdmin(sock, sender, senderNumber);
    if (!isAdmin) {
      await sock.sendMessage(sender, {
        text: '❌ You must be a group admin to use this command',
      });
      return;
    }

    if (args.length === 0) {
      await sock.sendMessage(sender, {
        text: `❌ Usage: ${config.prefix}promote @user or ${config.prefix}promote <phone_number>`,
      });
      return;
    }

    try {
      // Extract user ID from mention or phone number
      let userId = args[0];
      if (userId.includes('@')) {
        userId = userId.replace('@', '') + '@s.whatsapp.net';
      } else {
        userId = userId.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
      }

      const result = await GroupManager.promoteUser(sock, sender, userId);

      if (result.success) {
        await sock.sendMessage(sender, {
          text: `✅ ${result.message}`,
        });
      } else {
        await sock.sendMessage(sender, {
          text: `❌ ${result.message}`,
        });
      }
    } catch (error) {
      console.error('Promote Error:', error);
      await sock.sendMessage(sender, {
        text: '❌ Error promoting user',
      });
    }
  },
};
