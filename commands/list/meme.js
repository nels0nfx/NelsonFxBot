const axios = require('axios');

module.exports = {
  name: 'meme',
  description: 'Get a random meme',
  category: 'Fun',
  execute: async (sock, message, args, config) => {
    const sender = message.key.remoteJid;

    try {
      // Show typing indicator
      await sock.sendPresenceUpdate('typing', sender);

      // Fetch random meme from Reddit
      const response = await axios.get('https://meme-api.com/gimme', {
        timeout: 10000,
      });

      const meme = response.data;

      if (meme.success) {
        // Send meme image
        await sock.sendMessage(sender, {
          image: { url: meme.url },
          caption: `😂 *${meme.title}*\n\n👍 Upvotes: ${meme.ups}\n📝 Subreddit: r/${meme.subreddit}`,
        });
      } else {
        await sock.sendMessage(sender, {
          text: '❌ Could not fetch meme. Please try again.',
        });
      }
    } catch (error) {
      console.error('Meme command error:', error);
      await sock.sendMessage(sender, {
        text: '❌ Error fetching meme. Please try again later.',
      });
    }
  },
};
