# Web app
FROM node:lts-alpine AS webapp

WORKDIR /tmp/webapp

COPY src/frontend .

RUN npm install
RUN npm run build

# Server
FROM node:lts-alpine AS server

WORKDIR /tmp/server

RUN npm install -g fluent-ffmpeg
RUN apk add ffmpeg

COPY src/backend .
COPY --from=webapp /tmp/webapp/build public

RUN ls public

RUN npm install

ARG MUSIK_YT_API_KEY
ENV MUSIK_YT_API_KEY=$MUSIK_YT_API_KEY

CMD [ "npm", "start" ]
