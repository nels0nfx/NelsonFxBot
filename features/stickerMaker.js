const { Sticker } = require('wa-sticker-formatter');
const fs = require('fs');
const path = require('path');

class StickerMaker {
  /**
   * Create sticker from image buffer
   */
  static async createFromBuffer(buffer, options = {}) {
    try {
      const sticker = new Sticker(buffer, {
        pack: options.pack || 'NelsonFxBot',
        author: options.author || 'by NelsonFx',
        type: 'full',
        quality: 100,
        background: options.background || 'transparent',
      });

      return await sticker.toBuffer();
    } catch (error) {
      console.error('Sticker creation error:', error);
      throw error;
    }
  }

  /**
   * Create sticker from URL
   */
  static async createFromURL(url, options = {}) {
    try {
      const axios = require('axios');
      const response = await axios.get(url, { responseType: 'arraybuffer' });
      const buffer = Buffer.from(response.data);

      return await this.createFromBuffer(buffer, options);
    } catch (error) {
      console.error('URL sticker creation error:', error);
      throw error;
    }
  }

  /**
   * Create sticker from file path
   */
  static async createFromFile(filePath, options = {}) {
    try {
      const buffer = fs.readFileSync(filePath);
      return await this.createFromBuffer(buffer, options);
    } catch (error) {
      console.error('File sticker creation error:', error);
      throw error;
    }
  }

  /**
   * Create circular sticker
   */
  static async createCircularSticker(buffer, options = {}) {
    try {
      const sticker = new Sticker(buffer, {
        pack: options.pack || 'NelsonFxBot',
        author: options.author || 'by NelsonFx',
        type: 'circle',
        quality: 100,
      });

      return await sticker.toBuffer();
    } catch (error) {
      console.error('Circular sticker error:', error);
      throw error;
    }
  }

  /**
   * Create full sticker (no crop)
   */
  static async createFullSticker(buffer, options = {}) {
    try {
      const sticker = new Sticker(buffer, {
        pack: options.pack || 'NelsonFxBot',
        author: options.author || 'by NelsonFx',
        type: 'full',
        quality: 100,
        background: options.background || 'transparent',
      });

      return await sticker.toBuffer();
    } catch (error) {
      console.error('Full sticker error:', error);
      throw error;
    }
  }

  /**
   * Create cropped sticker
   */
  static async createCroppedSticker(buffer, options = {}) {
    try {
      const sticker = new Sticker(buffer, {
        pack: options.pack || 'NelsonFxBot',
        author: options.author || 'by NelsonFx',
        type: 'crop',
        quality: 100,
      });

      return await sticker.toBuffer();
    } catch (error) {
      console.error('Cropped sticker error:', error);
      throw error;
    }
  }
}

module.exports = StickerMaker;
