FROM node:18-alpine

WORKDIR /app

COPY backend/package.json ./backend/
RUN npm install

COPY backend ./backend

EXPOSE 3000

CMD ["node", "backend/server.js"]
