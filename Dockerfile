FROM node:lts-alpine

WORKDIR /usr/src/app

RUN npm install -g fluent-ffmpeg

COPY . .

RUN npm install

RUN npm run build-scss

RUN apk add ffmpeg

EXPOSE 3000

CMD [ "npm", "start" ]
