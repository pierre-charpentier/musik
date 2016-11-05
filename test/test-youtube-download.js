var ytDownload = require('../src/youtube-download');
var chai = require('chai');
var fs = require('fs');

var assert = chai.assert;

describe('youtube-download.js', () => {
    describe('#download', () => {
        var path = '../downloads/';
        var videoId = 'lgT1AidzRWM';
        it('should create a mp3 file named with the video id', done => {
            ytDownload.download(videoId, path, videoId, () => {
                fs.exists(path + videoId + '.mp3', (exists) => {
                    try {
                        expect(exists).to.be.true;
                        done();
                    } catch (e) {
                        done(e);
                    }
                });

            });
        });

        it('should create a non-empty file', done => {
            fs.stats(path + videoId + '.mp3', stats => {
                try {
                    expect(stats.size).to.be.above(0);
                } catch (e) {
                    done(e);
                }
            });
        });
    });
});