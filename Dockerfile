FROM node:lts-alpine

WORKDIR /usr/src/app

ARG MUSIK_YT_API_KEY

ENV MUSIK_YT_API_KEY=$MUSIK_YT_API_KEY

RUN npm install -g fluent-ffmpeg

COPY . .

RUN npm install

RUN npm run build-scss

RUN apk add ffmpeg

EXPOSE 8080/tcp

CMD [ "npm", "start" ]
