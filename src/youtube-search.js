var CONFIG = require('../config.json');
var YouTube = require('youtube-node');
var yt = new YouTube();

yt.setKey(CONFIG.youtubeApiKey);

module.exports = exports = {};

exports.search = (keywords, maxResults, callback) => {
    yt.search(keywords, maxResults, (error, result) => {
        if (error) {
            callback(error);
        } else {
            var items = result.items.map((item) => {
                return {
                    'id': item.id.videoId,
                    'title': item.snippet.title,
                    'thumbnails': item.snippet.thumbnails
                };
            });

            callback(items);
        }
    });
};