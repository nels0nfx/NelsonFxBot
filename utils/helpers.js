/**
 * Helper functions for NelsonFxBot
 */

/**
 * Format bytes to human readable format
 */
function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

/**
 * Get uptime in human readable format
 */
function getUptime(uptimeSeconds) {
  const days = Math.floor(uptimeSeconds / 86400);
  const hours = Math.floor((uptimeSeconds % 86400) / 3600);
  const minutes = Math.floor((uptimeSeconds % 3600) / 60);
  const seconds = Math.floor(uptimeSeconds % 60);

  let uptime = '';
  if (days > 0) uptime += `${days}d `;
  if (hours > 0) uptime += `${hours}h `;
  if (minutes > 0) uptime += `${minutes}m `;
  uptime += `${seconds}s`;

  return uptime;
}

/**
 * Check if user is owner
 */
function isOwner(senderNumber, ownerNumber) {
  return senderNumber === ownerNumber;
}

/**
 * Generate random string
 */
function generateRandomString(length = 10) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * Delay execution
 */
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Parse phone number
 */
function parsePhoneNumber(phoneNumber) {
  return phoneNumber.replace(/[^0-9]/g, '');
}

module.exports = {
  formatBytes,
  getUptime,
  isOwner,
  generateRandomString,
  delay,
  parsePhoneNumber,
};
