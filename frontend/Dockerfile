FROM node:18-alpine

WORKDIR /app
EXPOSE 80
EXPOSE 443
COPY package.json package-lock.json ./

RUN npm install

RUN npm install -g serve

COPY . .

RUN npm run build --verbose




CMD ["serve", "-s", "dist"]