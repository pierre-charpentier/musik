var ytDownload = require('../src/youtube-download');
var chai = require('chai');
var expect = chai.expect;
var fs = require('fs');

var assert = chai.assert;

describe('youtube-download.js', () => {
    describe('#getSoundStream', () => {
        var videoId = 'lgT1AidzRWM';
        it('should return a stream', done => {
            ytDownload.getSoundStream(videoId, (stream) => {
                try {
                    expect(typeof stream.on === 'function').to.be.true;
                    done();
                } catch (e) {
                    done(e);
                }
            });
        });
    });
});