module.exports = {
  name: 'joke',
  description: 'Get a random joke',
  category: 'Fun',
  execute: async (sock, message, args, config) => {
    const sender = message.key.remoteJid;

    const jokes = [
      '😂 Why don\'t scientists trust atoms? Because they make up everything!',
      '😂 What do you call a fake noodle? An impasta!',
      '😂 Why did the scarecrow win an award? He was outstanding in his field!',
      '😂 What do you call a bear with no teeth? A gummy bear!',
      '😂 Why don\'t eggs tell jokes? They\'d crack each other up!',
      '😂 What did the ocean say to the beach? Nothing, it just waved!',
      '😂 Why don\'t skeletons fight each other? They don\'t have the guts!',
      '😂 What do you call a sleeping bull? A dozer!',
      '😂 Why did the coffee file a police report? It got mugged!',
      '😂 What do you call a fish wearing a bowtie? Sofishticated!',
    ];

    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];

    await sock.sendMessage(sender, { text: randomJoke });
  },
};
