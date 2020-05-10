require('dotenv').config()
const ytdl = require('ytdl-core')
const Ffmpeg = require('fluent-ffmpeg')

const getSoundStream = (videoId, callback) => {
  const stream = ytdl(`http://youtube.com/watch?v=${videoId}`)

  stream.on('info', (infos) => {
    const proc = new Ffmpeg({ source: stream })

    proc.noVideo()
      .format('mp3')
      .on('error', (err) => {
        console.log(`youtube-download.js #download -> ffmpeg "error" event: ${err.message}`)
      })

    callback(proc, infos.title)
  })
}

module.exports = { getSoundStream }
