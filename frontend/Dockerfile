FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

RUN npm install -g serve

COPY . .

RUN npm run build --verbose

EXPOSE 3000

CMD ["serve", "-s", "dist"]