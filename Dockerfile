# Dockerfile for Next.js project

# Stage 1: Builder
FROM node:20-slim AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the Next.js application
RUN npm run build

# Stage 2: Runner
FROM node:20-slim AS runner

# Set working directory
WORKDIR /app

# Copy the standalone output
COPY --from=builder /app/.next/standalone ./

# Copy the public and static folders
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Expose the port the app runs on
EXPOSE 3000

# Set the command to start the server
CMD ["node", "server.js"]
