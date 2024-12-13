FROM node:18-alpine
WORKDIR /usr/src/app
COPY package*.json ./
COPY .env .env
RUN npm install
RUN npm install -g typescript
COPY . .
RUN tsc
EXPOSE 5001
CMD ["node", "dist/app.js"]