/* global it, describe */

const youtubeDownload = require('../src/youtube/youtube-download')
const chai = require('chai')

const assert = chai.assert

describe('youtube-download.js', () => {
  describe('#getSoundStream', () => {
    var videoId = 'lgT1AidzRWM'
    it('should return a stream', done => {
      youtubeDownload.getSoundStream(videoId, (stream) => {
        try {
          assert.isOk(typeof stream.on === 'function', 'stream.on is not a function')
          done()
        } catch (e) {
          done(e)
        }
      })
    })
  })
})
