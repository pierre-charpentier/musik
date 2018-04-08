FROM node:carbon

WORKDIR /usr/src/app

RUN npm install -g fluent-ffmpeg

COPY . .

RUN npm install

RUN npm run build-scss

EXPOSE 3000

CMD [ "npm", "start" ]