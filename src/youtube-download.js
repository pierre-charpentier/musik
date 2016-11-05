var CONFIG = require('../config.json'),
    ytdl = require('ytdl-core'),
    fs = require('fs'),
    ffmpeg = require('fluent-ffmpeg');

module.exports = exports = {};

exports.getSoundStream = (videoId, callback) => {
    var stream = ytdl(CONFIG.youtubeBaseUrl + videoId);

    proc = new ffmpeg({ source: stream });
    proc.noVideo()
        .format('mp3')
        .on('end', function () {
            console.log(Math.floor(Date.now() / 1000), videoId + ' - ' + fileName + ' SUCCESS');
        })
        .on('error', function (err) {
            console.log('youtube-download.js #download -> ffmpeg "error" event: ' + err.message);
        });

    callback(proc);
};