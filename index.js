var ytDownload = require('./src/youtube-download');
var ytSearch = require('./src/youtube-search');
var express = require('express');
var app = express();
var fs = require ('fs')
var ffmpeg = require('fluent-ffmpeg');
var cors = require('cors');

app.use(cors());

app.get('/download/:videoId', (req, res) => {
    ytDownload.getSoundStream(req.params.videoId, (soundStream, videoTitle) => {
        res.attachment(videoTitle + '.mp3');
        soundStream.writeToStream(res, {end: true});
    });
});

app.get('/search/:keywords', (req, res) => {
    ytSearch.search(req.params.keywords, 9, (error, items) => {
        if(error) {
            res.end("Couldn't retrieve items.");
        } else {
            res.type("json");
            res.end(JSON.stringify(items));
        }
    });
});

app.listen(3000, () => {
    console.log("Listening!");
});