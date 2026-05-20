const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, isJidGroup } = require('@whiskeysockets/baileys');
const QRCode = require('qrcode-terminal');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Import command handler
const commandHandler = require('./commands/commandHandler');

// Configuration
const config = {
  sessionId: process.env.SESSION_ID || 'NelsonFxBot',
  prefix: process.env.PREFIX || '-',
  ownerName: process.env.OWNER_NAME || 'NelsonFx',
  ownerNumber: process.env.OWNER_NUMBER || '',
  botName: process.env.BOT_NAME || 'NelsonFxBot',
  botMode: process.env.BOT_MODE || 'public',
};

// Store for bot state
let sock;
let isConnected = false;

// Initialize bot
async function startBot() {
  try {
    console.log('🤖 Initializing NelsonFxBot...');

    // Create auth directory
    const authDir = path.join(__dirname, 'auth_info');
    if (!fs.existsSync(authDir)) {
      fs.mkdirSync(authDir, { recursive: true });
    }

    // Setup authentication
    const { state, saveCreds } = await useMultiFileAuthState(authDir);

    // Create socket connection
    sock = makeWASocket({
      auth: state,
      printQRInTerminal: false,
      browser: ['NelsonFxBot', 'Chrome', '1.0.0'],
      syncFullHistory: false,
      markOnlineOnConnect: true,
      generateHighQualityLinkPreview: true,
    });

    // Handle QR Code
    sock.ev.on('connection.update', async (update) => {
      const { connection, lastDisconnect, qr } = update;

      if (qr) {
        console.log('\n📱 Scan this QR code with your WhatsApp:\n');
        QRCode.generate(qr, { small: true });
      }

      if (connection === 'connecting') {
        console.log('⏳ Connecting to WhatsApp...');
      }

      if (connection === 'open') {
        console.log('✅ Bot connected successfully!');
        isConnected = true;
        console.log(`🎯 Bot Name: ${config.botName}`);
        console.log(`👤 Owner: ${config.ownerName}`);
        console.log(`⚙️  Prefix: ${config.prefix}`);
      }

      if (connection === 'close') {
        isConnected = false;
        if (lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut) {
          console.log('❌ Connection closed. Reconnecting...');
          startBot();
        } else {
          console.log('🚪 Bot logged out.');
        }
      }
    });

    // Save credentials
    sock.ev.on('creds.update', saveCreds);

    // Handle incoming messages
    sock.ev.on('messages.upsert', async (m) => {
      const message = m.messages[0];

      if (!message.message) return;
      if (message.key.fromMe) return;

      try {
        await commandHandler(sock, message, config);
      } catch (error) {
        console.error('❌ Error handling message:', error);
      }
    });

    console.log('✨ NelsonFxBot started successfully!');
  } catch (error) {
    console.error('❌ Error starting bot:', error);
    process.exit(1);
  }
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n👋 Shutting down NelsonFxBot...');
  process.exit(0);
});

// Start the bot
startBot();
