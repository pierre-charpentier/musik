/* global it, describe */

const chai = require('chai')
const assert = chai.assert
const ytSearch = require('../src/youtube/youtube-search')

describe('youtube-search.js', () => {
  describe('#search', () => {
    var savedResult
    it('should return given number of results', done => {
      ytSearch.search('Eminem', 3, (err, result) => {
        if (err) {
          done(err)
        }

        savedResult = result
        assert(result.length === 3, `returned ${result.length} results (3 wanted)`)
        done()
      })
    })
    it('should contain video id', () => {
      assert.isOk(savedResult[0].hasOwnProperty('id'), 'no video id in result')
    })

    it('should contain video title', () => {
      assert.isOk(savedResult[0].hasOwnProperty('title'), 'no title in result')
    })

    it('should contain video thumbnails', () => {
      assert.isOk(savedResult[0].hasOwnProperty('thumbnail'), 'no video thumbnails in result')
    })
  })
})
