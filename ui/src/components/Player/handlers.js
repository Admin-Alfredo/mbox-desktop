export const handlerForwardTrackPlaylist = function (_playlist = []) {
  console.log(_playlist)
  if (!_playlist.length)
    return;
  const [trackPlayer] = _playlist.filter((track) => (track.isPlay))

  if (!trackPlayer)
    return addTrackToPlayer(playlist[0])

  const indexOfTrackPlayer = _playlist.indexOf(trackPlayer)
  const nextTrackPlayer = _playlist[indexOfTrackPlayer + 1] ?
    _playlist[indexOfTrackPlayer + 1] :
    _playlist[0]
  return addTrackToPlayer(nextTrackPlayer)
}

export const handlerPreviuesTrackPlaylist = function (_playlist) {
  if (!_playlist.length)
    return;
  const [trackPlayer] = _playlist.filter((track) => (track.isPlay))

  if (!trackPlayer)
    return addTrackToPlayer(playlist[0])

  const indexOfTrackPlayer = _playlist.indexOf(trackPlayer)
  const nextTrackPlayer = _playlist[indexOfTrackPlayer - 1] ?
    _playlist[indexOfTrackPlayer - 1] :
    _playlist[0]
  return addTrackToPlayer(nextTrackPlayer)
}
export const addTrackForPlayeing = function(track, tagAudio, dispatch){
  tagAudio.src = track.source
  await dispatch({ type: "setPlayingTrack", payload: track})
  
  // const addTrackToPlayer = useCallback(function (track) {
  //   setPlaylist(items => items.map(item => {
  //     if (track.File.name == item.File.name) {
  //       item.isPlay = true;
  //       audio.current.type = track.File.type
  //       audio.current.src = track.source
  //       return item
  //     }
  //     item.isPlay = false;
  //     return item
  //   }))
  // }, [setPlaylist])
  
}