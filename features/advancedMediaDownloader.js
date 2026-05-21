const axios = require('axios');

class AdvancedMediaDownloader {
  /**
   * Get YouTube video info and download link
   */
  static async downloadYouTube(url) {
    try {
      // Using a free YouTube API service
      const videoId = this.extractYouTubeId(url);
      if (!videoId) {
        return {
          success: false,
          message: '❌ Invalid YouTube URL',
        };
      }

      // Get video info from yt-ssr API (free service)
      const apiUrl = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`;

      try {
        const response = await axios.get(apiUrl, { timeout: 5000 });
        const data = response.data;

        return {
          success: true,
          title: data.title,
          author: data.author_name,
          thumbnail: data.thumbnail_url,
          message: `📹 **${data.title}** by ${data.author_name}\n\n⚠️ To download, use a dedicated YouTube downloader service or install FFmpeg locally.`,
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
      // Extract TikTok video ID
      const videoId = this.extractTikTokId(url);
      if (!videoId) {
        return {
          success: false,
          message: '❌ Invalid TikTok URL',
        };
      }

      // Note: TikTok API requires authentication
      return {
        success: false,
        message: '⚠️ TikTok downloads require API authentication. Please use a dedicated TikTok downloader service.',
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
      // Instagram requires authentication for downloads
      return {
        success: false,
        message: '⚠️ Instagram downloads require authentication. Please use a dedicated Instagram downloader service.',
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
      // SoundCloud requires API key
      return {
        success: false,
        message: '⚠️ SoundCloud downloads require API authentication. Please use a dedicated SoundCloud downloader service.',
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
      // Extract Spotify track ID
      const trackId = this.extractSpotifyId(url);
      if (!trackId) {
        return {
          success: false,
          message: '❌ Invalid Spotify URL',
        };
      }

      // Spotify requires authentication
      return {
        success: false,
        message: '⚠️ Spotify downloads require authentication. Please use a dedicated Spotify downloader service.',
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
        message: '⚠️ Facebook downloads require authentication. Please use a dedicated Facebook downloader service.',
      };
    } else if (url.includes('twitter.com') || url.includes('x.com')) {
      return {
        success: false,
        message: '⚠️ Twitter/X downloads require authentication. Please use a dedicated Twitter downloader service.',
      };
    } else {
      return {
        success: false,
        message: '❌ Platform not supported. Supported: YouTube, TikTok, Instagram, Facebook, Twitter, SoundCloud, Spotify',
      };
    }
  }
}

module.exports = AdvancedMediaDownloader;
