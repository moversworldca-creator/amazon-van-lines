FROM node:20-slim

# Create app directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
# Using npm ci for faster, more reliable builds in Docker
RUN npm ci --omit=dev

# Copy the rest of the application code
# .dockerignore will handle excluding node_modules, etc.
COPY . .

# Set environment to production
ENV NODE_ENV=production

# Expose the port the app runs on
EXPOSE 5000

# Start the application
CMD ["node", "server.js"]
