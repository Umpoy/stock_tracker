FROM node:18

WORKDIR /app

COPY server/package.json server/package-lock.json ./
RUN npm install

COPY server/ ./

EXPOSE 5005

CMD ["node", "app.js"]
