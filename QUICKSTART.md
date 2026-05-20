# ⚡ NelsonFxBot - Quick Start Guide

Get your NelsonFxBot up and running in 5 minutes!

## Prerequisites

- Node.js 16+ ([Download](https://nodejs.org/))
- npm (comes with Node.js)
- WhatsApp account
- Git (optional)

## 5-Minute Setup

### Step 1: Get the Code

**Option A: Clone from GitHub**
```bash
git clone https://github.com/yourusername/NelsonFxBot.git
cd NelsonFxBot
```

**Option B: Download ZIP**
- Download from GitHub
- Extract to a folder
- Open terminal in that folder

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages (takes ~2-3 minutes).

### Step 3: Configure Bot

```bash
cp .env.example .env
```

Edit `.env` file with your details:

```env
SESSION_ID=MyBot123
PREFIX=-
OWNER_NAME=NelsonFx
OWNER_NUMBER=1234567890
BOT_NAME=NelsonFxBot
BOT_MODE=public
```

**Important**: 
- `OWNER_NUMBER`: Your WhatsApp number without `+` or spaces
- `SESSION_ID`: Any unique string
- `PREFIX`: Command prefix (e.g., `-`, `.`, `!`)

### Step 4: Start Bot

```bash
npm start
```

You should see:
```
🤖 Initializing NelsonFxBot...
📱 Scan this QR code with your WhatsApp:

[QR CODE APPEARS HERE]
```

### Step 5: Scan QR Code

1. Open WhatsApp on your phone
2. Go to **Settings → Linked Devices → Link a Device**
3. Point your camera at the QR code in terminal
4. Confirm on your phone

**Done!** Your bot is now running! 🎉

---

## Test Your Bot

Send these commands in WhatsApp to test:

```
-ping          # Check if bot is online
-menu          # See all commands
-hello         # Say hello
-joke          # Get a joke
-info          # Bot information
-time          # Current time
```

---

## Common Issues

### QR Code Not Appearing?

```bash
# Try restarting
npm start

# If still not working, change SESSION_ID
# Edit .env and change SESSION_ID to something new
# Then run: npm start
```

### Bot Not Responding?

1. Check internet connection
2. Verify WhatsApp is active on your phone
3. Check bot is still running in terminal
4. Look for error messages in terminal

### "Cannot find module" Error?

```bash
# Reinstall dependencies
rm -rf node_modules
npm install
npm start
```

---

## Next Steps

### Add API Keys (Optional)

For AI features, add these to `.env`:

```env
OPENAI_API_KEY=sk-your-key-here
GEMINI_API_KEY=your-gemini-key-here
```

Then use: `-ai What is AI?`

### Deploy to Server

For 24/7 uptime, deploy to:
- **VPS** (DigitalOcean, Linode, Hetzner)
- **Render** (free tier available)
- **Heroku** (free tier ended, but still available)
- **Pterodactyl Panel** (game server hosting)

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed instructions.

### Customize Bot

Edit commands in `commands/list/` folder to customize responses.

---

## Useful Commands

### During Development

```bash
npm start              # Start bot
Ctrl + C              # Stop bot
npm install <pkg>     # Install new package
```

### For 24/7 Hosting

```bash
# Install PM2
sudo npm install -g pm2

# Start with PM2
pm2 start index.js --name "NelsonFxBot"

# View logs
pm2 logs NelsonFxBot

# Restart
pm2 restart NelsonFxBot
```

---

## File Structure

```
NelsonFxBot/
├── index.js                    # Main bot file
├── .env                        # Your configuration (don't share!)
├── .env.example               # Configuration template
├── package.json               # Dependencies
├── README.md                  # Full documentation
├── DEPLOYMENT_GUIDE.md        # Hosting guides
├── FEATURES.md                # All commands
├── commands/
│   ├── commandHandler.js      # Command routing
│   └── list/                  # Individual commands
├── features/                  # Bot features
├── utils/                     # Helper functions
└── auth_info/                 # WhatsApp session (auto-created)
```

---

## Available Commands

| Command | Description |
|---------|-------------|
| `-ping` | Check bot status |
| `-menu` | Show all commands |
| `-hello` | Say hello |
| `-joke` | Get a joke |
| `-info` | Bot information |
| `-time` | Current time |
| `-ai <prompt>` | Chat with AI |
| `-echo <text>` | Echo text |
| `-promote @user` | Promote in group |
| `-demote @user` | Demote in group |
| `-groupinfo` | Group details |
| `-grouplink` | Group invite link |

See [FEATURES.md](./FEATURES.md) for complete list.

---

## Tips

1. **Save your `.env` file** - Don't lose your SESSION_ID
2. **Use strong SESSION_ID** - Make it unique
3. **Keep bot running** - Use PM2 or Docker for 24/7
4. **Monitor logs** - Check for errors regularly
5. **Update regularly** - Pull latest code from GitHub

---

## Need Help?

- 📖 Read [README.md](./README.md)
- 🚀 Check [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)
- 📝 See [FEATURES.md](./FEATURES.md)
- 🐛 Check terminal logs for errors
- 💬 Ask in WhatsApp bot communities

---

## What's Next?

1. ✅ Bot is running locally
2. 🔑 Add API keys for AI features
3. 🌐 Deploy to server for 24/7 uptime
4. 🎮 Add custom commands
5. 👥 Invite to groups and test

---

Made with ❤️ by NelsonFx

**Happy botting!** 🤖
