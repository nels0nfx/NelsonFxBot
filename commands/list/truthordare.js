module.exports = {
  name: 'truthordare',
  description: 'Play Truth or Dare game',
  category: 'Fun',
  execute: async (sock, message, args, config) => {
    const sender = message.key.remoteJid;

    const truths = [
      'What is your biggest fear?',
      'What is your most embarrassing moment?',
      'What is something you have never told anyone?',
      'If you could change one thing about yourself, what would it be?',
      'What is your biggest secret?',
      'What do you think about me?',
      'Have you ever lied to me?',
      'What is your biggest regret?',
      'What is something you wish you could do?',
      'If you could be anyone, who would you be?',
      'What is your most unpopular opinion?',
      'What do you think is your worst quality?',
      'What is something you are ashamed of?',
      'Have you ever cheated on someone?',
      'What is your biggest insecurity?',
    ];

    const dares = [
      'Do 10 push-ups and send a photo',
      'Sing a song and send an audio message',
      'Call someone and tell them a joke',
      'Dance for 30 seconds and send a video',
      'Imitate your favorite celebrity',
      'Send a funny selfie',
      'Text your crush and tell them something nice',
      'Do your best impression of someone and describe it',
      'Speak in a funny accent for the next 5 messages',
      'Send a voice message saying something silly',
      'Do a handstand and send a photo',
      'Eat something spicy and send a reaction video',
      'Compliment 3 people in your contacts',
      'Change your profile picture to something funny',
      'Send a message in a different language',
    ];

    if (args.length === 0) {
      await sock.sendMessage(sender, {
        text: `❌ Usage: ${config.prefix}truthordare <truth/dare>\n\nExample: ${config.prefix}truthordare truth`,
      });
      return;
    }

    const choice = args[0].toLowerCase();

    if (choice === 'truth') {
      const randomTruth = truths[Math.floor(Math.random() * truths.length)];
      await sock.sendMessage(sender, {
        text: `🎯 *Truth Question:*\n\n${randomTruth}`,
      });
    } else if (choice === 'dare') {
      const randomDare = dares[Math.floor(Math.random() * dares.length)];
      await sock.sendMessage(sender, {
        text: `🎯 *Dare Challenge:*\n\n${randomDare}`,
      });
    } else {
      await sock.sendMessage(sender, {
        text: `❌ Invalid choice. Use: ${config.prefix}truthordare truth or ${config.prefix}truthordare dare`,
      });
    }
  },
};
