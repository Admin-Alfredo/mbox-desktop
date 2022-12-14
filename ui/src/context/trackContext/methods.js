import Folder from "../../classes/Folder";

export const orderTrackRelativeFolder = function (playlist) {
  return playlist.reduce((acumulador, track) => {
    const [hasFolder] = acumulador.filter((folder) => folder.fulldirname == track.fulldirname)
    if (!hasFolder) {
      const newFolder = new Folder(track.dirname, track.fulldirname);
      newFolder.addTrack(track)
      acumulador.push(newFolder)
      return acumulador
    }
    hasFolder.addTrack(track)
    return acumulador
  }, [])
}

export const getPosterTrack = function (blob) {
  const defaultPoster = "/audio/default-poster.jpg"
  return new Promise((resolve) => {
    if (!blob instanceof Blob)
      return resolve([defaultPoster])

    let reader = new FileReader()
    reader.readAsArrayBuffer(blob)
    
    reader.onerror = () => resolve([defaultPoster])
    reader.onloadend = function () {
      let picturesIndex = [];
      let buffer = reader.result;
      void new Uint8Array(buffer).forEach((v, i, a) => {
        if ((a[i] == 0xFF || a[i] == 0x89) &&
          (a[i + 1] == 0xD8 || a[i + 1] == 0x50) &&
          (a[i + 2] == 0xFF || a[i + 2] == 0x4E) &&
          (a[i + 2] == 0xFF || a[i + 2] == 0x4E) &&
          (a[i + 3] == 0xE0 || a[i + 3] == 0xEE || a[i + 3] == 0xE1 || a[i + 3] == 0x47)) {
          picturesIndex.push(i)
        }
      })
      let picturesCollection = picturesIndex.map(v =>
        URL.createObjectURL(new Blob([buffer.slice(v)]))
      )
      const result = picturesCollection[0] ? picturesCollection : [defaultPoster]
      resolve(result)
    }
  })
}