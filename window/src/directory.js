const { existsSync, readdir, statSync } = require('fs')
const { homedir, } = require('os')
const path = require('path')
const Track = require('./track/index')

exports.getDirMusic = async function () {
  return new Promise((res, rej) => {
    const musicDir = path.join(homedir(), `Music`)

    if (existsSync(musicDir)) {
      readdir(musicDir, function (err, dirsOrFiles) {
        if (err) return rej(new Error("[Erro] " + err.message))
        const userDirs = dirsOrFiles
          .filter(dir => statSync(path.join(musicDir, dir)).isFile())
          .filter(filename => /(?:\.mp3|\.m4a|\.ogg)/.test(filename))
          .map(filename => new Track(musicDir, filename))
        return res(userDirs)
      })
    } else {
      return rej(new Error("Directorio Music não existe"))
    }

  })

}
// getDirMusic().then(console.log)