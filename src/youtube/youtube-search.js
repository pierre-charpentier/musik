require('dotenv').config()
const Youtube = require('youtube-node')

const youtube = new Youtube()

youtube.setKey(process.env.MUSIK_YT_API_KEY)

const search = (keywords, maxResults, callback) => {
  youtube.addParam('type', 'video')

  youtube.search(keywords, maxResults, (error, result) => {
    if (error) {
      callback(error)
    } else {
      const items = result.items.map((item) => {
        return {
          'id': item.id.videoId,
          'title': item.snippet.title,
          'thumbnail': item.snippet.thumbnails.high || item.snippet.thumbnails.medium || item.snippet.thumbnails.default
        }
      })

      callback(null, items)
    }
  })
}

module.exports = { search }
