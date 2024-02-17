# Backend Dockerfile
FROM node:21.5.0-alpine3.18 as builder

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn
COPY . .

EXPOSE 5000

