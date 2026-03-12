FROM node:20-alpine

WORKDIR /app

# Copy only package.json and package-lock.json from backend
COPY backend/package*.json ./
RUN npm install

# Copy backend code
COPY backend/. .

EXPOSE 3000
CMD ["node", "server.js"]
