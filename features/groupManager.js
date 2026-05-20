const { isJidGroup } = require('@whiskeysockets/baileys');

class GroupManager {
  /**
   * Promote user to admin
   */
  static async promoteUser(sock, groupId, userId) {
    try {
      await sock.groupParticipantsUpdate(groupId, [userId], 'promote');
      return { success: true, message: 'User promoted to admin' };
    } catch (error) {
      console.error('Promote Error:', error);
      return { success: false, message: 'Error promoting user' };
    }
  }

  /**
   * Demote user from admin
   */
  static async demoteUser(sock, groupId, userId) {
    try {
      await sock.groupParticipantsUpdate(groupId, [userId], 'demote');
      return { success: true, message: 'User demoted from admin' };
    } catch (error) {
      console.error('Demote Error:', error);
      return { success: false, message: 'Error demoting user' };
    }
  }

  /**
   * Remove user from group
   */
  static async removeUser(sock, groupId, userId) {
    try {
      await sock.groupParticipantsUpdate(groupId, [userId], 'remove');
      return { success: true, message: 'User removed from group' };
    } catch (error) {
      console.error('Remove Error:', error);
      return { success: false, message: 'Error removing user' };
    }
  }

  /**
   * Add user to group
   */
  static async addUser(sock, groupId, userId) {
    try {
      await sock.groupParticipantsUpdate(groupId, [userId], 'add');
      return { success: true, message: 'User added to group' };
    } catch (error) {
      console.error('Add Error:', error);
      return { success: false, message: 'Error adding user' };
    }
  }

  /**
   * Get group info
   */
  static async getGroupInfo(sock, groupId) {
    try {
      const groupMetadata = await sock.groupMetadata(groupId);
      return {
        success: true,
        data: {
          name: groupMetadata.subject,
          description: groupMetadata.desc || 'No description',
          participants: groupMetadata.participants.length,
          owner: groupMetadata.owner,
          created: new Date(groupMetadata.creation * 1000),
        },
      };
    } catch (error) {
      console.error('Group Info Error:', error);
      return { success: false, message: 'Error getting group info' };
    }
  }

  /**
   * Get group link
   */
  static async getGroupLink(sock, groupId) {
    try {
      const code = await sock.groupInviteCode(groupId);
      return {
        success: true,
        link: `https://chat.whatsapp.com/${code}`,
      };
    } catch (error) {
      console.error('Group Link Error:', error);
      return { success: false, message: 'Error getting group link' };
    }
  }

  /**
   * Set group description
   */
  static async setGroupDescription(sock, groupId, description) {
    try {
      await sock.groupUpdateDescription(groupId, description);
      return { success: true, message: 'Group description updated' };
    } catch (error) {
      console.error('Description Error:', error);
      return { success: false, message: 'Error updating description' };
    }
  }

  /**
   * Set group subject (name)
   */
  static async setGroupSubject(sock, groupId, subject) {
    try {
      await sock.groupUpdateSubject(groupId, subject);
      return { success: true, message: 'Group name updated' };
    } catch (error) {
      console.error('Subject Error:', error);
      return { success: false, message: 'Error updating group name' };
    }
  }

  /**
   * Check if user is admin
   */
  static async isUserAdmin(sock, groupId, userId) {
    try {
      const groupMetadata = await sock.groupMetadata(groupId);
      const admins = groupMetadata.participants
        .filter(p => p.admin)
        .map(p => p.id);
      return admins.includes(userId);
    } catch (error) {
      console.error('Admin Check Error:', error);
      return false;
    }
  }
}

module.exports = GroupManager;
