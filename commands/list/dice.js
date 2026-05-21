module.exports = {
  name: 'dice',
  description: 'Roll a dice',
  category: 'Fun',
  execute: async (sock, message, args, config) => {
    const sender = message.key.remoteJid;

    // Get number of dice (default 1)
    let numDice = 1;
    let sides = 6;

    if (args.length > 0) {
      const num = parseInt(args[0]);
      if (!isNaN(num) && num > 0 && num <= 10) {
        numDice = num;
      }
    }

    if (args.length > 1) {
      const s = parseInt(args[1]);
      if (!isNaN(s) && s > 0) {
        sides = s;
      }
    }

    // Roll dice
    const rolls = [];
    let total = 0;

    for (let i = 0; i < numDice; i++) {
      const roll = Math.floor(Math.random() * sides) + 1;
      rolls.push(roll);
      total += roll;
    }

    // Format response
    let response = `🎲 *Dice Roll Result*\n\n`;
    response += `Dice: ${numDice}d${sides}\n`;
    response += `Results: ${rolls.join(', ')}\n`;
    response += `Total: ${total}`;

    // Add emoji based on result
    if (numDice === 1) {
      if (rolls[0] === 1) response += ' 💔 (Bad luck!)';
      else if (rolls[0] === 6) response += ' 🎉 (Lucky!)';
    }

    await sock.sendMessage(sender, { text: response });
  },
};
