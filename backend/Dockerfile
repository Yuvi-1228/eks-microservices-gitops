# Build Stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY backend/package*.json ./
RUN npm install --omit=dev

# Final Runtime Stage
FROM node:20-alpine
WORKDIR /app
USER node
COPY --chown=node:node --from=builder /app/node_modules ./node_modules
COPY --chown=node:node backend/server.js ./server.js
COPY --chown=node:node backend/package.json ./package.json

EXPOSE 5000
CMD ["node", "server.js"]
