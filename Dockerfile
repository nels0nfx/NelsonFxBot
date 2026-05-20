FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
RUN apk add --no-cache ffmpeg libwebp

# Copy package files
COPY package*.json ./

# Install npm dependencies
RUN npm install

# Copy bot files
COPY . .

# Expose port (optional, for future web interface)
EXPOSE 3000

# Start the bot
CMD ["npm", "start"]
