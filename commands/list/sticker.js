const StickerMaker = require('../../features/stickerMaker');
const axios = require('axios');

module.exports = {
  name: 'sticker',
  description: 'Create a sticker from an image',
  category: 'Media',
  execute: async (sock, message, args, config) => {
    const sender = message.key.remoteJid;

    try {
      // Check if message has an image
      const messageType = Object.keys(message.message)[0];
      let imageBuffer = null;

      if (messageType === 'imageMessage') {
        // Get image from message
        const imageMessage = message.message.imageMessage;
        imageBuffer = await sock.downloadMediaMessage(message);
      } else if (args.length > 0 && args[0].startsWith('http')) {
        // Download image from URL
        const url = args[0];
        await sock.sendPresenceUpdate('typing', sender);

        try {
          const response = await axios.get(url, { responseType: 'arraybuffer' });
          imageBuffer = Buffer.from(response.data);
        } catch (error) {
          await sock.sendMessage(sender, {
            text: '❌ Error downloading image from URL. Please check the URL and try again.',
          });
          return;
        }
      } else {
        await sock.sendMessage(sender, {
          text: `❌ Usage: Reply to an image with ${config.prefix}sticker or ${config.prefix}sticker <image_url>`,
        });
        return;
      }

      if (!imageBuffer) {
        await sock.sendMessage(sender, {
          text: '❌ Could not process image. Please try again.',
        });
        return;
      }

      // Show processing message
      await sock.sendPresenceUpdate('typing', sender);

      // Get sticker type from args
      let stickerType = 'full';
      if (args.length > 0) {
        if (args[0].includes('circle')) stickerType = 'circle';
        else if (args[0].includes('crop')) stickerType = 'crop';
        else if (args[0].includes('full')) stickerType = 'full';
      }

      // Create sticker
      let stickerBuffer;

      if (stickerType === 'circle') {
        stickerBuffer = await StickerMaker.createCircularSticker(imageBuffer, {
          pack: config.botName,
          author: config.ownerName,
        });
      } else if (stickerType === 'crop') {
        stickerBuffer = await StickerMaker.createCroppedSticker(imageBuffer, {
          pack: config.botName,
          author: config.ownerName,
        });
      } else {
        stickerBuffer = await StickerMaker.createFullSticker(imageBuffer, {
          pack: config.botName,
          author: config.ownerName,
        });
      }

      // Send sticker
      await sock.sendMessage(sender, {
        sticker: stickerBuffer,
      });

      await sock.sendMessage(sender, {
        text: `✅ Sticker created!\n\n📝 Pack: ${config.botName}\n👤 Author: ${config.ownerName}`,
      });
    } catch (error) {
      console.error('Sticker command error:', error);
      await sock.sendMessage(sender, {
        text: '❌ Error creating sticker. Please try again with a different image.',
      });
    }
  },
};
