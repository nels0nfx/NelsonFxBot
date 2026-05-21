module.exports = {
  name: 'coin',
  description: 'Flip a coin',
  category: 'Fun',
  execute: async (sock, message, args, config) => {
    const sender = message.key.remoteJid;

    // Flip coin
    const flip = Math.random() < 0.5;
    const result = flip ? 'Heads' : 'Tails';
    const emoji = flip ? '🪙' : '🪙';

    const response = `${emoji} *Coin Flip*\n\nResult: **${result}**`;

    await sock.sendMessage(sender, { text: response });
  },
};
