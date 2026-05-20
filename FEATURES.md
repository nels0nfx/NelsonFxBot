# 🎯 NelsonFxBot - Features & Commands

Complete documentation of all features and commands available in NelsonFxBot.

## Table of Contents

1. [General Commands](#general-commands)
2. [Fun Commands](#fun-commands)
3. [Utility Commands](#utility-commands)
4. [AI Commands](#ai-commands)
5. [Media Commands](#media-commands)
6. [Group Commands](#group-commands)
7. [Owner Commands](#owner-commands)
8. [Features Overview](#features-overview)

---

## General Commands

### `-ping`
Check bot status and latency.

**Usage**: `-ping`

**Response**: Shows bot online status and response time in milliseconds.

**Example**:
```
✅ Bot is online!
⏱️ Latency: 245ms
```

---

### `-menu`
Display all available commands with descriptions.

**Usage**: `-menu`

**Response**: Shows categorized list of all commands.

---

### `-info`
Display bot information and features.

**Usage**: `-info`

**Response**: Shows bot name, owner, version, and available features.

---

### `-owner`
Display owner information.

**Usage**: `-owner`

**Response**: Shows owner name and bot details.

---

### `-alive`
Check if bot is alive and running.

**Usage**: `-alive`

**Response**: Shows bot status, uptime, and features.

---

### `-help`
Get help about bot commands.

**Usage**: `-help`

**Response**: Shows help menu with command usage.

---

## Fun Commands

### `-hello`
Say hello to the bot.

**Usage**: `-hello`

**Response**: Random greeting message.

**Examples**:
- "Hey there! 👋"
- "Hello! How are you? 😊"
- "Hi! Welcome to NelsonFxBot! 🤖"

---

### `-joke`
Get a random joke.

**Usage**: `-joke`

**Response**: Random joke message.

**Examples**:
- "😂 Why don't scientists trust atoms? Because they make up everything!"
- "😂 What do you call a fake noodle? An impasta!"

---

## Utility Commands

### `-echo <text>`
Echo text back to user.

**Usage**: `-echo Hello World`

**Response**: 
```
🔊 Hello World
```

**Parameters**:
- `<text>`: Text to echo (required)

---

### `-time`
Get current time and date.

**Usage**: `-time`

**Response**: Shows current time, date, and timezone.

**Example**:
```
⏰ Current Time

🕐 Time: 2:30:45 PM
📅 Date: 5/20/2026
🌍 Timezone: UTC
```

---

## AI Commands

### `-ai <prompt>`
Chat with AI (ChatGPT or Gemini).

**Usage**: `-ai What is the capital of France?`

**Response**: AI-generated response.

**Requirements**:
- OpenAI API key OR Gemini API key configured in `.env`

**Example**:
```
🤖 AI Response:

The capital of France is Paris. It is the largest city in France 
and serves as the country's political, cultural, and economic center.
```

**Features**:
- Supports multiple AI models
- Automatic failover if one service is unavailable
- Contextual responses
- Message truncation for WhatsApp limits

---

## Media Commands

### `-download <URL>`
Download media from various platforms.

**Usage**: `-download https://www.youtube.com/watch?v=...`

**Supported Platforms**:
- ✅ YouTube
- ✅ TikTok
- ✅ Instagram
- ✅ Facebook
- ✅ Twitter/X
- ✅ Pinterest
- ✅ SoundCloud
- ✅ Spotify

**Requirements**:
- Valid URL starting with `http://` or `https://`

**Example**:
```
❌ Platform "youtube" is not yet supported. 
Supported: YouTube, TikTok, Instagram, Facebook, Twitter, Pinterest, SoundCloud, Spotify
```

**Note**: Full media download functionality requires additional API setup.

---

## Group Commands

### `-promote @user`
Promote a user to admin in group.

**Usage**: `-promote @john` or `-promote 1234567890`

**Requirements**:
- Must be group admin
- User must be in group

**Response**:
```
✅ User promoted to admin
```

**Parameters**:
- `@user`: User mention or phone number (required)

---

### `-demote @user`
Demote a user from admin in group.

**Usage**: `-demote @john` or `-demote 1234567890`

**Requirements**:
- Must be group admin
- User must be admin

**Response**:
```
✅ User demoted from admin
```

**Parameters**:
- `@user`: User mention or phone number (required)

---

### `-groupinfo`
Get group information.

**Usage**: `-groupinfo`

**Requirements**:
- Must be used in a group

**Response**:
```
╔═══════════════════════════════════╗
║   📊 Group Information 📊   ║
╚═══════════════════════════════════╝

Group Name: My Group
Members: 25
Owner: +1234567890
Created: 5/15/2026

Description: This is my awesome group!
```

---

### `-grouplink`
Get group invite link.

**Usage**: `-grouplink`

**Requirements**:
- Must be used in a group
- Must be group admin

**Response**:
```
╔═══════════════════════════════════╗
║   🔗 Group Invite Link 🔗   ║
╚═══════════════════════════════════╝

📱 Link:
https://chat.whatsapp.com/XXXXXXXXXX

⚠️ Note: Share this link carefully!
```

---

## Owner Commands

### `-setprefix <prefix>`
Change command prefix (owner only).

**Usage**: `-setprefix !`

**Requirements**:
- Must be bot owner

**Response**:
```
✅ Prefix changed from "-" to "!"

Note: This change will take effect after bot restart.
```

**Parameters**:
- `<prefix>`: New prefix character (required, single character)

---

### `-status`
Get bot status report (owner only).

**Usage**: `-status`

**Requirements**:
- Must be bot owner

**Response**:
```
╔═══════════════════════════════════╗
║   📊 Bot Status Report 📊   ║
╚═══════════════════════════════════╝

Bot Name: NelsonFxBot
Owner: NelsonFx
Prefix: -
Mode: public

System Status:
✅ Connection: Online
⏱️ Uptime: 2h 30m 45s
💾 Memory: 125MB
🔌 Node Version: v18.0.0

Features:
✨ AI Ready
📥 Media Tools
🎮 Fun Commands
👥 Group Management
🔧 Admin Tools
```

---

## Features Overview

### 🤖 Core Features

**Multi-Device Support**
- Seamless operation across multiple linked WhatsApp devices
- Automatic reconnection on disconnect
- Session persistence

**Command System**
- Modular command architecture
- Easy to add new commands
- Command categorization
- Owner-only command support
- Group-only command support
- Private-only command support

**User Management**
- Owner identification
- Moderator support
- User privilege levels
- Session management

### 🎯 AI Integration

**Multiple AI Models**
- ChatGPT (OpenAI)
- Google Gemini
- Automatic failover
- Rate limit handling

**Conversational AI**
- Context-aware responses
- Natural language processing
- Message truncation for WhatsApp

### 📥 Media Tools

**Universal Downloader**
- YouTube support (setup required)
- TikTok support (setup required)
- Instagram support (setup required)
- Facebook support (setup required)
- Twitter/X support (setup required)
- Pinterest support (setup required)
- SoundCloud support (setup required)
- Spotify support (setup required)

### 👥 Group Management

**Admin Tools**
- Promote/demote users
- Remove users
- Add users
- Get group info
- Get group link
- Update group description
- Update group name

**Moderation**
- Admin detection
- Permission checking
- Group-only commands

### 🎮 Fun & Engagement

**Entertainment**
- Random jokes
- Greetings
- Interactive responses
- Emoji support

**Customization**
- Customizable prefix
- Bot name configuration
- Owner name configuration
- Bot mode settings

### 🔧 Utility Features

**System Information**
- Uptime tracking
- Memory monitoring
- Latency measurement
- Status reporting

**Text Processing**
- Echo command
- Time display
- Message formatting

---

## Command Categories

### By Difficulty Level

**Beginner**
- `-ping`
- `-hello`
- `-joke`
- `-time`
- `-echo`

**Intermediate**
- `-menu`
- `-info`
- `-owner`
- `-alive`
- `-ai`

**Advanced**
- `-promote`
- `-demote`
- `-groupinfo`
- `-grouplink`
- `-setprefix` (owner only)
- `-status` (owner only)

### By Use Case

**Personal Use**
- `-ping`
- `-hello`
- `-joke`
- `-time`
- `-ai`

**Group Management**
- `-promote`
- `-demote`
- `-groupinfo`
- `-grouplink`

**Bot Administration**
- `-setprefix`
- `-status`
- `-menu`
- `-info`

---

## Future Features (Planned)

- ✨ Sticker creation and conversion
- 📥 Advanced media downloading
- 🎵 Audio processing
- 🖼️ Image manipulation
- 📊 Group statistics
- 🎮 Mini-games
- 🔔 Scheduled messages
- 📝 Note taking
- 🌐 Translation
- 📱 Multi-language support

---

## Tips & Tricks

### Using Commands Effectively

1. **Always use the correct prefix**
   - Default prefix is `-`
   - Check with `-menu` if unsure

2. **Group commands require admin**
   - Most group commands need admin privileges
   - Check with `-groupinfo` for group details

3. **AI commands need API keys**
   - Configure in `.env` file
   - Restart bot after adding keys

4. **Owner commands are restricted**
   - Only the owner can use certain commands
   - Owner number must be set in `.env`

### Performance Tips

1. **Reduce command frequency**
   - Don't spam commands
   - Wait for response before sending next command

2. **Use appropriate commands**
   - Use `-ping` to check connection
   - Use `-status` to monitor bot health

3. **Monitor logs**
   - Check logs for errors
   - Use PM2 or Docker logs

---

## Error Messages & Solutions

| Error | Cause | Solution |
|-------|-------|----------|
| ❌ This command is only for the owner | Not owner | Use owner account or ask owner |
| ❌ This command can only be used in groups | Used in DM | Use command in group chat |
| ❌ This command can only be used in private messages | Used in group | Use command in private chat |
| ❌ You must be a group admin | Not admin | Ask group admin or get promoted |
| ❌ No AI service configured | API keys missing | Add API keys to `.env` |
| ❌ Platform not supported | Unsupported URL | Use supported platform |

---

Made with ❤️ by NelsonFx
