import { getPosterTrack, orderTrackRelativeFolder } from "./methods"
export default {
  loadInitialState: async function (state) {
    const payload = await window.electronAPI.getTrackForUpdatePlaylist()
    const folders = orderTrackRelativeFolder(payload)
    if (!Array.isArray(payload))
      return state
    return { ...state, playlist: payload, folders }
  },
  setPlayingTrack: async function (state, track) {
    if (track.isPlay)
      return state
    const playlist = state.playlist?.map((_track) => {
      if (_track.source == track.source) {
        _track.isPlay = true
        return _track
      }
      _track.isPlay = false
      return _track
    })
    let response;
    try{
      response = await fetch(track.source, {'Content-Type':'audio/*', 'accept': 'blob'})
      const blob = await response.blob()
      const posters = await getPosterTrack(blob)
      track.posters = posters
      return { ...state, playlist, playing: track }
    }catch(err){
      //ERRO AO PEGAR IMAGEN
      track.posters = ["/audio/default-poster.jpg"]
      return { ...state, playlist, playing: track }
    }
  }
}