const { isJidGroup } = require('@whiskeysockets/baileys');
const GroupManager = require('../../features/groupManager');

module.exports = {
  name: 'groupinfo',
  description: 'Get group information',
  category: 'Group',
  groupOnly: true,
  execute: async (sock, message, args, config) => {
    const sender = message.key.remoteJid;

    try {
      const result = await GroupManager.getGroupInfo(sock, sender);

      if (result.success) {
        const data = result.data;
        const infoText = `
╔═══════════════════════════════════╗
║   📊 Group Information 📊   ║
╚═══════════════════════════════════╝

*Group Name:* ${data.name}
*Members:* ${data.participants}
*Owner:* ${data.owner || 'Unknown'}
*Created:* ${data.created.toLocaleDateString()}

*Description:*
${data.description}

═══════════════════════════════════

Use ${config.prefix}grouplink to get invite link
        `;

        await sock.sendMessage(sender, { text: infoText });
      } else {
        await sock.sendMessage(sender, {
          text: `❌ ${result.message}`,
        });
      }
    } catch (error) {
      console.error('Group Info Error:', error);
      await sock.sendMessage(sender, {
        text: '❌ Error getting group information',
      });
    }
  },
};
