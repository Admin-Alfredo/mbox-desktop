// let ext = path.extname(filename)
// let name = path.basename(filename, ext)
// let source = path.join(musicDir, filename)
// let size = statSync(source).size
// let fullDirname = path.dirname(source)
// let splitedDirname = fullDirname.split(path.sep)
// let dirname = splitedDirname[splitedDirname.length - 1]
// return { File: { ext, name, size }, source, fullDirname, dirname }
const { statSync } = require('fs')
const path = require('path')
class Track{
  constructor(directory, filename){
    const ext = path.extname(filename)
    const name = path.basename(filename, ext)
    this.source = path.join(directory, filename)
    const size = statSync(this.source)
    this.File = { name, ext, size }
    const directorySplited = path.dirname(source).split(path.sep)
    this.dirname = directorySplited[directorySplited.length - 1]
  }
}