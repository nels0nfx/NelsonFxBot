const { OpenAI } = require('openai');
const { GoogleGenerativeAI } = require('@google/generative-ai');

class AIChat {
  constructor(config) {
    this.config = config;
    this.openaiClient = null;
    this.geminiClient = null;

    // Initialize OpenAI if API key is provided
    if (process.env.OPENAI_API_KEY) {
      this.openaiClient = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
      });
    }

    // Initialize Gemini if API key is provided
    if (process.env.GEMINI_API_KEY) {
      this.geminiClient = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    }
  }

  /**
   * Chat with ChatGPT
   */
  async chatWithGPT(message) {
    if (!this.openaiClient) {
      return 'OpenAI API key not configured.';
    }

    try {
      const response = await this.openaiClient.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: message }],
        max_tokens: 500,
      });

      return response.choices[0].message.content;
    } catch (error) {
      console.error('ChatGPT Error:', error);
      return '❌ Error communicating with ChatGPT. Please try again.';
    }
  }

  /**
   * Chat with Google Gemini
   */
  async chatWithGemini(message) {
    if (!this.geminiClient) {
      return 'Gemini API key not configured.';
    }

    try {
      const model = this.geminiClient.getGenerativeModel({ model: 'gemini-pro' });
      const result = await model.generateContent(message);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error('Gemini Error:', error);
      return '❌ Error communicating with Gemini. Please try again.';
    }
  }

  /**
   * Get response from available AI
   */
  async getResponse(message, aiType = 'auto') {
    if (aiType === 'gpt' || (aiType === 'auto' && this.openaiClient)) {
      return await this.chatWithGPT(message);
    } else if (aiType === 'gemini' || (aiType === 'auto' && this.geminiClient)) {
      return await this.chatWithGemini(message);
    } else {
      return '❌ No AI service configured. Please add API keys to .env file.';
    }
  }
}

module.exports = AIChat;
