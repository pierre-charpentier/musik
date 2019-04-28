require('dotenv').config()
const express = require('express')
const app = express()

const youtubeDownload = require('./src/youtube/youtube-download')
const youtubeSearch = require('./src/youtube/youtube-search')

app.set('port', process.env.MUSIK_PORT)

app.use(express.static('public'))

app.get('/download/:videoId', (req, res) => {
  youtubeDownload.getSoundStream(req.params.videoId, (soundStream, videoTitle) => {
    res.attachment(`${videoTitle}.mp3`)

    soundStream.writeToStream(res, {
      end: true
    })
  })
})

app.get('/search/:keywords', (req, res) => {
  youtubeSearch.search(req.params.keywords, 9, (error, items) => {
    if (error) {
      res.end('Couldn\'t retrieve items.')
    } else {
      res.type('json')
      res.end(JSON.stringify(items))
    }
  })
})

app.listen(3000, () => {
  console.log('Listening!')
})
