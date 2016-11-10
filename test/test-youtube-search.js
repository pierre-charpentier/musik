var chai = require('chai');
var expect = chai.expect;
var ytSearch = require('../src/youtube-search');

describe('youtube-search.js', () => {
    describe('#search', () => {
        var savedResult;
        it('should return given number of results', done => {
            ytSearch.search('Eminem', 3, (err, result) => {
                try {
                    savedResult = result;
                    expect(result.length).to.equal(3);
                    done();
                } catch (e) {
                    done(e);
                }
            });
        });
        it('should contain video id', () => {
            expect(savedResult[0].hasOwnProperty('id')).to.be.true;
        });

        it('should contain video title', () => {
            expect(savedResult[0].hasOwnProperty('title')).to.be.true;
        });

        it('should contain video thumbnails', () => {
            expect(savedResult[0].hasOwnProperty('thumbnail')).to.be.true;
        });
    });
});