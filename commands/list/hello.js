module.exports = {
  name: 'hello',
  description: 'Say hello to the user',
  category: 'Fun',
  execute: async (sock, message, args, config) => {
    const sender = message.key.remoteJid;
    const greetings = [
      'Hey there! 👋',
      'Hello! How are you? 😊',
      'Hi! Welcome to NelsonFxBot! 🤖',
      'Greetings! 🙌',
      'Hey! What\'s up? 🎉',
      'Hello friend! 💙',
    ];

    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];

    await sock.sendMessage(sender, { text: randomGreeting });
  },
};
