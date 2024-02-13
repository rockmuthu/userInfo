# Backend Dockerfile
FROM node:latest as build

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

CMD ["sh", "yarn start"]
