const AIChat = require('../../features/aiChat');

module.exports = {
  name: 'ai',
  description: 'Chat with AI (ChatGPT or Gemini)',
  category: 'AI',
  execute: async (sock, message, args, config) => {
    const sender = message.key.remoteJid;

    if (args.length === 0) {
      await sock.sendMessage(sender, {
        text: `❌ Usage: ${config.prefix}ai <your question or prompt>`,
      });
      return;
    }

    const userMessage = args.join(' ');

    // Show typing indicator
    await sock.sendPresenceUpdate('typing', sender);

    try {
      const aiChat = new AIChat(config);
      const response = await aiChat.getResponse(userMessage);

      // Truncate response if too long (WhatsApp has message limits)
      const maxLength = 4096;
      const finalResponse = response.length > maxLength 
        ? response.substring(0, maxLength) + '...' 
        : response;

      await sock.sendMessage(sender, {
        text: `🤖 *AI Response:*\n\n${finalResponse}`,
      });
    } catch (error) {
      console.error('AI Command Error:', error);
      await sock.sendMessage(sender, {
        text: '❌ Error processing your request. Please try again.',
      });
    }
  },
};
