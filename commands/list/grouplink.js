const { isJidGroup } = require('@whiskeysockets/baileys');
const GroupManager = require('../../features/groupManager');

module.exports = {
  name: 'grouplink',
  description: 'Get group invite link',
  category: 'Group',
  groupOnly: true,
  execute: async (sock, message, args, config) => {
    const sender = message.key.remoteJid;

    try {
      const result = await GroupManager.getGroupLink(sock, sender);

      if (result.success) {
        const linkText = `
╔═══════════════════════════════════╗
║   🔗 Group Invite Link 🔗   ║
╚═══════════════════════════════════╝

📱 *Link:*
${result.link}

⚠️ *Note:* Share this link carefully!
Anyone with this link can join the group.

═══════════════════════════════════
        `;

        await sock.sendMessage(sender, { text: linkText });
      } else {
        await sock.sendMessage(sender, {
          text: `❌ ${result.message}`,
        });
      }
    } catch (error) {
      console.error('Group Link Error:', error);
      await sock.sendMessage(sender, {
        text: '❌ Error getting group link',
      });
    }
  },
};
