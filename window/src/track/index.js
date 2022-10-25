const { statSync } = require('fs')
const path = require('path')
class Track{
  constructor(directory, filename){
    const ext = path.extname(filename)
    const name = path.basename(filename, ext)
    this.source = path.join(directory, filename)
    const stat = statSync(this.source)
    this.File = { name, ext, stat }
    const directorySplited = path.dirname(this.source).split(path.sep)
    this.dirname = directorySplited[directorySplited.length - 1]
    this.fullDirname = path.dirname(this.source)
  }
}
module.exports = Track