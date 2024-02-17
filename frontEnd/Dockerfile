# Frontend Dockerfile
FROM node:21.5.0-alpine3.18 as builder

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .
RUN yarn build
# CMD ["yarn", "dev"]

# Final stage
FROM nginx:1.19.0

WORKDIR /usr/share/nginx/html

RUN apt-get update && apt-get install -y yarn

# Copy built files from builder stage
COPY --from=builder /app/dist .
