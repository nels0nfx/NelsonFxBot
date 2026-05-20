# 🚀 NelsonFxBot - Deployment Guide

This guide provides step-by-step instructions for deploying NelsonFxBot on various hosting platforms.

## Table of Contents

1. [Local Development](#local-development)
2. [VPS Deployment (Ubuntu/Debian)](#vps-deployment)
3. [Render Deployment](#render-deployment)
4. [Heroku Deployment](#heroku-deployment)
5. [Pterodactyl Panel Deployment](#pterodactyl-panel-deployment)
6. [Docker Deployment](#docker-deployment)
7. [Troubleshooting](#troubleshooting)

---

## Local Development

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager
- Git installed
- WhatsApp account

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/NelsonFxBot.git
   cd NelsonFxBot
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment file**
   ```bash
   cp .env.example .env
   ```

4. **Edit .env with your configuration**
   ```bash
   nano .env
   ```
   
   Required variables:
   - `SESSION_ID`: Any unique string
   - `OWNER_NUMBER`: Your WhatsApp number (without +)
   - `PREFIX`: Command prefix (e.g., `-`)

5. **Start the bot**
   ```bash
   npm start
   ```

6. **Scan QR Code**
   - A QR code will appear in your terminal
   - Open WhatsApp on your phone
   - Go to Settings → Linked Devices → Link a Device
   - Scan the QR code

---

## VPS Deployment

### Recommended VPS Providers

- **DigitalOcean** - $5/month (1GB RAM, 1 vCPU)
- **Linode** - $5/month (1GB RAM, 1 vCPU)
- **Hetzner** - €2.49/month (1GB RAM, 1 vCPU)
- **Google Cloud** - Free tier available
- **AWS** - Free tier available

### Prerequisites

- VPS with Ubuntu 22.04 or Debian 11
- SSH access to your VPS
- Domain (optional)

### Step-by-Step Installation

1. **Connect to your VPS**
   ```bash
   ssh root@your_vps_ip
   ```

2. **Update system packages**
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

3. **Install required dependencies**
   ```bash
   sudo apt install -y nodejs npm git curl ffmpeg libwebp
   ```

4. **Create bot directory**
   ```bash
   mkdir -p /home/nelsonfxbot
   cd /home/nelsonfxbot
   ```

5. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/NelsonFxBot.git
   cd NelsonFxBot
   ```

6. **Install npm dependencies**
   ```bash
   npm install
   ```

7. **Configure environment**
   ```bash
   cp .env.example .env
   nano .env
   ```

8. **Install PM2 for process management**
   ```bash
   sudo npm install -g pm2
   ```

9. **Start the bot with PM2**
   ```bash
   pm2 start index.js --name "NelsonFxBot"
   ```

10. **Make PM2 startup on reboot**
    ```bash
    pm2 startup
    pm2 save
    ```

11. **Check bot status**
    ```bash
    pm2 status
    pm2 logs NelsonFxBot
    ```

### Useful PM2 Commands

```bash
pm2 start index.js --name "NelsonFxBot"    # Start bot
pm2 stop NelsonFxBot                        # Stop bot
pm2 restart NelsonFxBot                     # Restart bot
pm2 logs NelsonFxBot                        # View logs
pm2 delete NelsonFxBot                      # Remove bot
pm2 monit                                   # Monitor resources
```

---

## Render Deployment

### Prerequisites

- Render account (free tier available)
- GitHub account with your bot repository

### Step-by-Step Deployment

1. **Push code to GitHub**
   ```bash
   git push origin master
   ```

2. **Go to [Render Dashboard](https://dashboard.render.com)**

3. **Create new Web Service**
   - Click "New" → "Web Service"
   - Connect your GitHub account
   - Select NelsonFxBot repository

4. **Configure Service**
   - **Name**: `NelsonFxBot`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free (or Starter for better uptime)

5. **Add Environment Variables**
   - Click "Environment" tab
   - Add variables from your `.env` file:
     - `SESSION_ID`
     - `OWNER_NUMBER`
     - `PREFIX`
     - `OWNER_NAME`
     - API keys (optional)

6. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment to complete

7. **View Logs**
   - Go to "Logs" section
   - Look for QR code to scan

### Keep Bot Running 24/7

- Upgrade to Starter plan ($7/month) for better uptime
- Or use cron job to restart if needed

---

## Heroku Deployment

### Prerequisites

- Heroku account
- Heroku CLI installed
- GitHub repository

### Step-by-Step Deployment

1. **Install Heroku CLI**
   ```bash
   curl https://cli.heroku.com/install.sh | sh
   ```

2. **Login to Heroku**
   ```bash
   heroku login
   ```

3. **Create Heroku app**
   ```bash
   heroku create nelsonfxbot
   ```

4. **Set environment variables**
   ```bash
   heroku config:set SESSION_ID=your_session_id
   heroku config:set OWNER_NUMBER=your_number
   heroku config:set PREFIX=-
   heroku config:set OWNER_NAME=NelsonFx
   ```

5. **Deploy code**
   ```bash
   git push heroku master
   ```

6. **Scale worker process**
   ```bash
   heroku ps:scale worker=1
   ```

7. **View logs**
   ```bash
   heroku logs --tail
   ```

### Useful Heroku Commands

```bash
heroku config              # View all config variables
heroku config:set KEY=VAL  # Set variable
heroku config:unset KEY    # Remove variable
heroku logs --tail         # View live logs
heroku ps                  # View running processes
heroku restart             # Restart app
```

---

## Pterodactyl Panel Deployment

### Prerequisites

- Access to Pterodactyl panel
- Server with Node.js Egg
- Panel admin to create server (if needed)

### Step-by-Step Deployment

1. **Create Server (if not exists)**
   - Go to Admin Panel → Servers → Create New
   - Select Node.js Egg
   - Configure resources (512MB RAM minimum)

2. **Upload Files**
   - Go to your server's File Manager
   - Upload bot files or use Git Pull feature
   - Or use SFTP to upload files

3. **Install Dependencies**
   - Go to Console tab
   - Start the server
   - Node.js Egg will auto-run `npm install`

4. **Configure Environment**
   - Edit `.env` file in File Manager
   - Set your configuration

5. **Start Server**
   - Click "Start" button in Console
   - Monitor logs for QR code

6. **Link WhatsApp**
   - Scan QR code from console output
   - Bot will be running 24/7

---

## Docker Deployment

### Prerequisites

- Docker installed
- Docker Compose (optional)

### Using Docker

1. **Build Docker image**
   ```bash
   docker build -t nelsonfxbot .
   ```

2. **Create .env file**
   ```bash
   cp .env.example .env
   nano .env
   ```

3. **Run container**
   ```bash
   docker run -d \
     --name nelsonfxbot \
     --env-file .env \
     -v $(pwd)/auth_info:/app/auth_info \
     nelsonfxbot
   ```

4. **View logs**
   ```bash
   docker logs -f nelsonfxbot
   ```

### Using Docker Compose

1. **Create docker-compose.yml**
   ```yaml
   version: '3.8'
   
   services:
     nelsonfxbot:
       build: .
       container_name: nelsonfxbot
       env_file: .env
       volumes:
         - ./auth_info:/app/auth_info
       restart: unless-stopped
   ```

2. **Start with Docker Compose**
   ```bash
   docker-compose up -d
   ```

3. **View logs**
   ```bash
   docker-compose logs -f
   ```

### Useful Docker Commands

```bash
docker ps                           # List running containers
docker logs -f nelsonfxbot         # View live logs
docker stop nelsonfxbot            # Stop container
docker start nelsonfxbot           # Start container
docker restart nelsonfxbot         # Restart container
docker rm nelsonfxbot              # Remove container
```

---

## Troubleshooting

### Bot won't connect

**Problem**: QR code not appearing or bot can't connect

**Solutions**:
1. Check internet connection
2. Verify WhatsApp account is active
3. Change `SESSION_ID` to a new random string
4. Check if WhatsApp has logged you out
5. Ensure phone number is correct

```bash
# Change session ID
sed -i 's/SESSION_ID=.*/SESSION_ID=new_random_string/' .env
npm start
```

### Port already in use

**Problem**: Error about port already in use

**Solution**:
```bash
# Find process using port
lsof -i :3000

# Kill process
kill -9 <PID>
```

### Memory issues

**Problem**: Bot crashes due to memory

**Solutions**:
1. Increase VPS RAM
2. Use PM2 with memory limit:
   ```bash
   pm2 start index.js --name "NelsonFxBot" --max-memory-restart 512M
   ```

### Commands not working

**Problem**: Commands not responding

**Solutions**:
1. Check prefix is correct
2. Verify bot has permissions
3. Check logs for errors:
   ```bash
   pm2 logs NelsonFxBot
   ```

### QR code scanning issues

**Problem**: Can't scan QR code

**Solutions**:
1. Ensure terminal supports Unicode
2. Try copying QR code URL from logs
3. Restart bot and try again
4. Check phone camera is working

---

## Performance Optimization

### For VPS

```bash
# Increase file descriptors
echo "* soft nofile 65535" | sudo tee -a /etc/security/limits.conf
echo "* hard nofile 65535" | sudo tee -a /etc/security/limits.conf

# Enable swap (if needed)
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
```

### For PM2

```bash
# Monitor resources
pm2 monit

# Use cluster mode (for multi-core)
pm2 start index.js -i max --name "NelsonFxBot"
```

---

## Monitoring & Maintenance

### Monitor Bot Status

```bash
# Check if running
pm2 status

# View resource usage
pm2 monit

# View logs
pm2 logs NelsonFxBot --lines 100
```

### Update Bot

```bash
cd /path/to/NelsonFxBot
git pull origin master
npm install
pm2 restart NelsonFxBot
```

### Backup Configuration

```bash
# Backup .env
cp .env .env.backup

# Backup auth info
tar -czf auth_backup.tar.gz auth_info/
```

---

## Support & Resources

- **GitHub Issues**: Report bugs on GitHub
- **Documentation**: Check README.md
- **Logs**: Always check logs for errors
- **Community**: Join WhatsApp bot communities

---

Made with ❤️ by NelsonFx
