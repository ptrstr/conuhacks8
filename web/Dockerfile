FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm ci

RUN npm run build

USER node:node

RUN ls -la

CMD [ "node", "build" ]