export default class Folder {
  #files = []
  constructor(name, fulldirname) {
    this.dirname = name
    this.fulldirname = fulldirname
  }
  addTrack(track) {
    if (!this.existTrack(track)) {
      this.#files.push(track)
    }
  }
  deleteTrack(track) {
    if (this.existTrack(track)) {
      this.#files = this.#files.filter(_track => {
        _track.File.name !== track.File.name  
        //&& _track.dirname !== track.dirname &&
      })
    }
  }
  getFiles(){
    return this.#files
  }
  existTrack(track) {
    const [hasTrack] = this.#files.filter(_track => _track.File.name == track.File.name)
    if (!hasTrack)
      return false
    else
      return true
  }
}