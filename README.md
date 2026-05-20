# 🤖 NelsonFxBot - Advanced WhatsApp Multi-Device Bot

A powerful, feature-rich WhatsApp bot built with Node.js and Baileys library. NelsonFxBot provides automation, AI integration, media tools, and group management features.

## ✨ Features

- **Multi-Device Support**: Works across multiple linked WhatsApp devices
- **AI Integration**: Ready for ChatGPT, Claude, and Gemini integration
- **Command System**: Easy-to-use modular command structure
- **Group Management**: Moderation tools and group utilities
- **Media Tools**: Download and convert media from various platforms
- **Fun Commands**: Interactive and engaging commands
- **Owner Management**: Secure owner-only commands
- **Plugin System**: Extensible architecture for custom features

## 📋 Prerequisites

- Node.js 16+ or higher
- npm or yarn package manager
- MongoDB (optional, for persistent storage)
- WhatsApp account

## 🚀 Quick Start

### Local Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/NelsonFxBot.git
   cd NelsonFxBot
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment**
   ```bash
   cp .env.example .env
   # Edit .env with your settings
   nano .env
   ```

4. **Start the bot**
   ```bash
   npm start
   ```

5. **Scan QR Code**
   - A QR code will appear in your terminal
   - Open WhatsApp on your phone
   - Go to Settings → Linked Devices → Link a Device
   - Scan the QR code with your phone

## 📦 Deployment Guides

### Deploy on VPS (Ubuntu 22.04)

```bash
# SSH into your VPS
ssh user@your_vps_ip

# Update system
sudo apt update && sudo apt upgrade -y

# Install dependencies
sudo apt install -y nodejs npm git ffmpeg

# Clone and setup
git clone https://github.com/yourusername/NelsonFxBot.git
cd NelsonFxBot
npm install

# Configure
cp .env.example .env
nano .env

# Install PM2 for process management
sudo npm install -g pm2

# Start bot
pm2 start index.js --name "NelsonFxBot"
pm2 startup
pm2 save
```

### Deploy on Render

1. Push your code to GitHub
2. Go to [Render Dashboard](https://dashboard.render.com)
3. Click "New" → "Web Service"
4. Connect your GitHub repository
5. Set build command: `npm install`
6. Set start command: `npm start`
7. Add environment variables from `.env`
8. Deploy

### Deploy on Heroku

```bash
# Install Heroku CLI
curl https://cli.heroku.com/install.sh | sh

# Login
heroku login

# Create app
heroku create your-bot-name

# Set environment variables
heroku config:set SESSION_ID=your_session_id
heroku config:set OWNER_NUMBER=your_number

# Deploy
git push heroku main
```

### Deploy on Pterodactyl Panel

1. Access your Pterodactyl panel
2. Create a new server with Node.js Egg
3. Upload bot files via file manager
4. Configure `.env` file
5. Start the server from the panel

### Deploy with Docker

```bash
# Build image
docker build -t nelsonfxbot .

# Run container
docker run -d --name nelsonfxbot \
  --env-file .env \
  -v $(pwd)/auth_info:/app/auth_info \
  nelsonfxbot
```

## ⚙️ Configuration

Edit `.env` file with your settings:

```env
SESSION_ID=your_session_id
PREFIX=-
OWNER_NAME=NelsonFx
OWNER_NUMBER=your_phone_number
BOT_NAME=NelsonFxBot
BOT_MODE=public
MONGODB_URI=your_mongodb_uri (optional)
OPENAI_API_KEY=your_openai_key (optional)
GEMINI_API_KEY=your_gemini_key (optional)
```

## 📝 Available Commands

### General Commands
- `-ping` - Check bot status
- `-menu` - Show all commands
- `-info` - Bot information
- `-owner` - Owner information
- `-alive` - Check if bot is alive
- `-help` - Get help

### Fun Commands
- `-hello` - Say hello
- `-joke` - Get a random joke

### Utility Commands
- `-echo <text>` - Echo text back
- `-time` - Get current time

### Owner Commands
- `-setprefix <prefix>` - Change command prefix
- `-setname <name>` - Change bot name
- `-status` - Get bot status

## 🔧 Project Structure

```
NelsonFxBot/
├── index.js                 # Main bot file
├── commands/
│   ├── commandHandler.js   # Command routing
│   └── list/               # Individual commands
├── features/               # Feature modules
├── utils/                  # Utility functions
├── .env.example           # Environment template
├── Dockerfile             # Docker configuration
├── Procfile              # Heroku configuration
├── package.json          # Dependencies
└── README.md             # This file
```

## 🛠️ Development

### Adding New Commands

Create a new file in `commands/list/`:

```javascript
module.exports = {
  name: 'commandname',
  description: 'Command description',
  category: 'Category',
  ownerOnly: false,
  groupOnly: false,
  privateOnly: false,
  execute: async (sock, message, args, config) => {
    const sender = message.key.remoteJid;
    await sock.sendMessage(sender, { text: 'Response' });
  },
};
```

### Adding Features

Create modules in `features/` directory and import them in `index.js`.

## 📚 Dependencies

- `@whiskeysockets/baileys` - WhatsApp Web API
- `qrcode-terminal` - QR code display
- `dotenv` - Environment variables
- `axios` - HTTP requests
- `express` - Web framework (optional)
- `cors` - CORS middleware (optional)

## 🔐 Security Tips

1. Never commit `.env` file to repository
2. Use strong session IDs
3. Keep API keys private
4. Regularly update dependencies
5. Use owner-only commands for sensitive operations
6. Monitor bot activity

## 🐛 Troubleshooting

### Bot won't connect
- Check internet connection
- Verify WhatsApp account is active
- Try changing SESSION_ID in `.env`
- Check if WhatsApp has logged you out

### QR code not appearing
- Check terminal output
- Ensure terminal supports Unicode
- Try running with `npm start` instead of node directly

### Commands not working
- Verify prefix is correct
- Check command name spelling
- Ensure bot has permission to send messages
- Check `.env` configuration

## 📞 Support

For issues and questions:
- Check existing GitHub issues
- Create a new issue with details
- Include error logs and configuration (without sensitive data)

## 📄 License

This project is licensed under the MIT License - see LICENSE file for details.

## 👤 Author

**NelsonFx** - Creator and Maintainer

## 🙏 Acknowledgments

- Built with [Baileys](https://github.com/WhiskeySockets/Baileys)
- Inspired by community WhatsApp bots
- Thanks to all contributors

## ⚠️ Disclaimer

This bot is for educational purposes. Use responsibly and comply with WhatsApp's Terms of Service. The author is not responsible for misuse.

---

Made with ❤️ by NelsonFx
