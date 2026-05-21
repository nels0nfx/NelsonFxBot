const axios = require('axios');

/**
 * Lightweight Media Downloader - No Python Required!
 * Works on all hosting platforms including Pterodactyl panels
 */
class LightweightMediaDownloader {
  /**
   * Get YouTube video info using public API
   */
  static async downloadYouTube(url) {
    try {
      const videoId = this.extractYouTubeId(url);
      if (!videoId) {
        return {
          success: false,
          message: '❌ Invalid YouTube URL',
        };
      }

      try {
        // Use YouTube oEmbed API (no authentication needed)
        const apiUrl = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`;
        const response = await axios.get(apiUrl, { timeout: 5000 });
        const data = response.data;

        return {
          success: true,
          title: data.title,
          author: data.author_name,
          thumbnail: data.thumbnail_url,
          message: `📹 **${data.title}**\n👤 by ${data.author_name}\n\n✅ Video info retrieved successfully!`,
        };
      } catch (error) {
        return {
          success: false,
          message: '❌ Could not fetch YouTube video info. Please try again.',
        };
      }
    } catch (error) {
      console.error('YouTube download error:', error);
      return {
        success: false,
        message: '❌ Error downloading from YouTube',
      };
    }
  }

  /**
   * Get TikTok video info
   */
  static async downloadTikTok(url) {
    try {
      const videoId = this.extractTikTokId(url);
      if (!videoId) {
        return {
          success: false,
          message: '❌ Invalid TikTok URL',
        };
      }

      return {
        success: false,
        message: '⚠️ TikTok downloads require API authentication.\n\n💡 Try these free services:\n• TikTok Downloader (online)\n• SnapTik\n• TikMate',
      };
    } catch (error) {
      console.error('TikTok download error:', error);
      return {
        success: false,
        message: '❌ Error downloading from TikTok',
      };
    }
  }

  /**
   * Get Instagram media info
   */
  static async downloadInstagram(url) {
    try {
      return {
        success: false,
        message: '⚠️ Instagram downloads require authentication.\n\n💡 Try these free services:\n• Instagram Downloader (online)\n• Insta Downloader\n• SaveIG',
      };
    } catch (error) {
      console.error('Instagram download error:', error);
      return {
        success: false,
        message: '❌ Error downloading from Instagram',
      };
    }
  }

  /**
   * Get SoundCloud track info
   */
  static async downloadSoundCloud(url) {
    try {
      return {
        success: false,
        message: '⚠️ SoundCloud downloads require API authentication.\n\n💡 Try these free services:\n• SoundCloud Downloader (online)\n• SCDownloader',
      };
    } catch (error) {
      console.error('SoundCloud download error:', error);
      return {
        success: false,
        message: '❌ Error downloading from SoundCloud',
      };
    }
  }

  /**
   * Get Spotify track info
   */
  static async downloadSpotify(url) {
    try {
      const trackId = this.extractSpotifyId(url);
      if (!trackId) {
        return {
          success: false,
          message: '❌ Invalid Spotify URL',
        };
      }

      return {
        success: false,
        message: '⚠️ Spotify downloads require authentication.\n\n💡 Try these free services:\n• Spotify Downloader (online)\n• SpotifyDown',
      };
    } catch (error) {
      console.error('Spotify download error:', error);
      return {
        success: false,
        message: '❌ Error downloading from Spotify',
      };
    }
  }

  /**
   * Extract YouTube video ID
   */
  static extractYouTubeId(url) {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
      /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/,
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
    return null;
  }

  /**
   * Extract TikTok video ID
   */
  static extractTikTokId(url) {
    const pattern = /tiktok\.com\/@[\w.-]+\/video\/(\d+)/;
    const match = url.match(pattern);
    return match ? match[1] : null;
  }

  /**
   * Extract Spotify track ID
   */
  static extractSpotifyId(url) {
    const pattern = /spotify\.com\/track\/([a-zA-Z0-9]+)/;
    const match = url.match(pattern);
    return match ? match[1] : null;
  }

  /**
   * Detect platform and get download info
   */
  static async getDownloadInfo(url) {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      return await this.downloadYouTube(url);
    } else if (url.includes('tiktok.com')) {
      return await this.downloadTikTok(url);
    } else if (url.includes('instagram.com')) {
      return await this.downloadInstagram(url);
    } else if (url.includes('soundcloud.com')) {
      return await this.downloadSoundCloud(url);
    } else if (url.includes('spotify.com')) {
      return await this.downloadSpotify(url);
    } else if (url.includes('facebook.com')) {
      return {
        success: false,
        message: '⚠️ Facebook downloads require authentication.\n\n💡 Try these free services:\n• Facebook Video Downloader (online)\n• FBDown',
      };
    } else if (url.includes('twitter.com') || url.includes('x.com')) {
      return {
        success: false,
        message: '⚠️ Twitter/X downloads require authentication.\n\n💡 Try these free services:\n• Twitter Video Downloader (online)\n• TwDownload',
      };
    } else {
      return {
        success: false,
        message: '❌ Platform not supported.\n\nSupported: YouTube, TikTok, Instagram, Facebook, Twitter/X, SoundCloud, Spotify',
      };
    }
  }
}

module.exports = LightweightMediaDownloader;
