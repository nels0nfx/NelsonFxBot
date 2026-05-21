const LightweightMediaDownloader = require('../../features/lightweightMediaDownloader');

module.exports = {
  name: 'download',
  description: 'Download media from various platforms',
  category: 'Media',
  execute: async (sock, message, args, config) => {
    const sender = message.key.remoteJid;

    if (args.length === 0) {
      await sock.sendMessage(sender, {
        text: `❌ Usage: ${config.prefix}download <URL>\n\nSupported platforms:\n✅ YouTube\n✅ TikTok\n✅ Instagram\n✅ Facebook\n✅ Twitter/X\n✅ SoundCloud\n✅ Spotify`,
      });
      return;
    }

    const url = args[0];

    // Validate URL
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      await sock.sendMessage(sender, {
        text: '❌ Please provide a valid URL starting with http:// or https://',
      });
      return;
    }

    // Show processing message
    await sock.sendPresenceUpdate('typing', sender);

    try {
      const result = await LightweightMediaDownloader.getDownloadInfo(url);

      if (result.success) {
        let responseText = `✅ Download Info:\n\n`;
        if (result.title) responseText += `📝 Title: ${result.title}\n`;
        if (result.author) responseText += `👤 Author: ${result.author}\n`;
        responseText += `\n${result.message}`;

        await sock.sendMessage(sender, {
          text: responseText,
        });

        // Send thumbnail if available
        if (result.thumbnail) {
          try {
            await sock.sendMessage(sender, {
              image: { url: result.thumbnail },
              caption: '📸 Thumbnail',
            });
          } catch (error) {
            console.error('Error sending thumbnail:', error);
          }
        }
      } else {
        await sock.sendMessage(sender, {
          text: result.message,
        });
      }
    } catch (error) {
      console.error('Download Error:', error);
      await sock.sendMessage(sender, {
        text: '❌ Error processing download. Please try again.',
      });
    }
  },
};
