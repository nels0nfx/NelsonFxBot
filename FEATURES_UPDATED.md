# 🎯 NelsonFxBot - Features & Commands (Updated v1.1.0)

Complete documentation of all features and commands available in NelsonFxBot v1.1.0

## New in v1.1.0

✨ **Sticker Maker** - Create stickers from images
✨ **Advanced Media Downloader** - Get info from YouTube, TikTok, Instagram, etc.
✨ **Fun Games** - Truth or Dare, Dice, Coin Flip, Meme Generator
✨ **5 New Commands** - sticker, truthordare, dice, coin, meme

---

## Table of Contents

1. [General Commands](#general-commands)
2. [Fun Commands](#fun-commands)
3. [Utility Commands](#utility-commands)
4. [AI Commands](#ai-commands)
5. [Media Commands](#media-commands)
6. [Game Commands](#game-commands)
7. [Group Commands](#group-commands)
8. [Owner Commands](#owner-commands)

---

## General Commands

### `-ping`
Check bot status and latency.

**Usage**: `-ping`

**Response**: Shows bot online status and response time in milliseconds.

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

## Fun Commands

### `-hello`
Say hello to the bot.

**Usage**: `-hello`

**Response**: Random greeting message.

---

### `-joke`
Get a random joke.

**Usage**: `-joke`

**Response**: Random joke message.

---

### `-meme` ⭐ NEW
Get a random meme from Reddit.

**Usage**: `-meme`

**Response**: Random meme image with title and upvotes.

**Features**:
- Fetches from Reddit
- Shows title, upvotes, and subreddit
- Auto-downloads and sends image

---

## Utility Commands

### `-echo <text>`
Echo text back to user.

**Usage**: `-echo Hello World`

**Response**: 
```
🔊 Hello World
```

---

### `-time`
Get current time and date.

**Usage**: `-time`

**Response**: Shows current time, date, and timezone.

---

## AI Commands

### `-ai <prompt>`
Chat with AI (ChatGPT or Gemini).

**Usage**: `-ai What is the capital of France?`

**Response**: AI-generated response.

**Requirements**:
- OpenAI API key OR Gemini API key configured in `.env`

---

## Media Commands

### `-download <URL>`
Download media from various platforms.

**Usage**: `-download https://www.youtube.com/watch?v=...`

**Supported Platforms**:
- ✅ YouTube (with video info)
- ✅ TikTok
- ✅ Instagram
- ✅ Facebook
- ✅ Twitter/X
- ✅ SoundCloud
- ✅ Spotify

**Features**:
- Gets video title and author
- Shows thumbnail
- Provides platform-specific info

---

### `-sticker` ⭐ NEW
Create a sticker from an image.

**Usage**: 
- Reply to an image with `-sticker`
- `-sticker <image_url>`
- `-sticker circle` (circular sticker)
- `-sticker crop` (cropped sticker)
- `-sticker full` (full sticker)

**Response**: Sends sticker to chat.

**Features**:
- Multiple sticker types (full, circle, crop)
- Custom pack name
- Custom author name
- Supports image URLs

**Example**:
```
Reply to image: -sticker
Send URL: -sticker https://example.com/image.jpg
Circular: -sticker circle
```

---

## Game Commands

### `-truthordare <truth/dare>` ⭐ NEW
Play Truth or Dare game.

**Usage**: 
- `-truthordare truth` - Get a truth question
- `-truthordare dare` - Get a dare challenge

**Response**: Random truth question or dare challenge.

**Features**:
- 15 truth questions
- 15 dare challenges
- Perfect for groups and friends

**Examples**:
```
-truthordare truth
🎯 Truth Question: What is your biggest fear?

-truthordare dare
🎯 Dare Challenge: Do 10 push-ups and send a photo
```

---

### `-dice [number] [sides]` ⭐ NEW
Roll a dice.

**Usage**: 
- `-dice` - Roll 1d6
- `-dice 2` - Roll 2d6
- `-dice 3 20` - Roll 3d20

**Response**: Shows all rolls and total.

**Features**:
- Multiple dice support (1-10)
- Custom sides (default 6)
- Shows individual rolls and total
- Lucky/unlucky indicators

**Examples**:
```
-dice
🎲 Dice Roll Result
Dice: 1d6
Results: 4
Total: 4

-dice 2 6
🎲 Dice Roll Result
Dice: 2d6
Results: 3, 5
Total: 8
```

---

### `-coin` ⭐ NEW
Flip a coin.

**Usage**: `-coin`

**Response**: Heads or Tails.

**Features**:
- 50/50 chance
- Simple and fun
- Perfect for decisions

**Example**:
```
🪙 Coin Flip
Result: Heads
```

---

## Group Commands

### `-promote @user`
Promote a user to admin in group.

**Usage**: `-promote @john` or `-promote 1234567890`

**Requirements**:
- Must be group admin
- User must be in group

---

### `-demote @user`
Demote a user from admin in group.

**Usage**: `-demote @john` or `-demote 1234567890`

**Requirements**:
- Must be group admin
- User must be admin

---

### `-groupinfo`
Get group information.

**Usage**: `-groupinfo`

**Response**: Shows group name, members, owner, created date, and description.

---

### `-grouplink`
Get group invite link.

**Usage**: `-grouplink`

**Response**: Shows group invite link.

---

## Owner Commands

### `-setprefix <prefix>`
Change command prefix (owner only).

**Usage**: `-setprefix !`

**Requirements**:
- Must be bot owner

---

### `-status`
Get bot status report (owner only).

**Usage**: `-status`

**Requirements**:
- Must be bot owner

**Response**: Shows connection status, uptime, memory usage, and features.

---

## Command Summary

| Category | Commands | Count |
|----------|----------|-------|
| General | ping, menu, info, owner, alive, help | 6 |
| Fun | hello, joke, meme | 3 |
| Utility | echo, time | 2 |
| AI | ai | 1 |
| Media | download, sticker | 2 |
| Games | truthordare, dice, coin | 3 |
| Group | promote, demote, groupinfo, grouplink | 4 |
| Owner | setprefix, status | 2 |
| **Total** | | **23** |

---

## Version History

### v1.1.0 (Current)
- ✅ Added Sticker Maker
- ✅ Enhanced Media Downloader
- ✅ Added 5 new commands
- ✅ Added game commands
- ✅ Improved documentation

### v1.0.0 (Initial)
- ✅ Core bot engine
- ✅ 18 basic commands
- ✅ AI integration
- ✅ Group management
- ✅ Complete documentation

---

## Tips & Tricks

### Sticker Making
- Use high-quality images for best results
- Try different sticker types (full, circle, crop)
- Custom pack names make stickers unique

### Games
- Perfect for group chats
- Use Truth or Dare for icebreakers
- Dice and Coin for making decisions

### Media Downloading
- YouTube links show video info and thumbnail
- Always check platform support
- Some platforms need external services

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Sticker creation fails | Use a different image format |
| Meme won't load | Check internet connection |
| Dice shows error | Use valid number (1-10) |
| Download shows warning | Platform requires external service |

---

## Future Features (Planned)

- 🎵 Music player
- 🎨 Image filters
- 📊 Statistics
- 🎬 Video editing
- 🌐 Translation
- 📱 Multi-language support

---

Made with ❤️ by NelsonFx

**Version**: 1.1.0
**Last Updated**: May 21, 2026
