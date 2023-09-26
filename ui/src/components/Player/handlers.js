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
export const handlerForwardTrackPlaylist = function (playlist = [], dispatch) {
  if (!playlist.length)
    return;
  const [trackPlayer] = playlist.filter((track) => (track.isPlay))

  if (!trackPlayer)
    return dispatch({ type: "setPlayingTrack", payload: playlist[0] })

  const indexOfTrackPlayer = playlist.indexOf(trackPlayer)
  const nextTrackPlayer = playlist[indexOfTrackPlayer + 1] ? playlist[indexOfTrackPlayer + 1] : playlist[0];
  dispatch({ type: "setPlayingTrack", payload: nextTrackPlayer })
}

export const handlerPreviuesTrackPlaylist = function (playlist, dispatch) {
  if (!playlist.length)
    return;
  const [trackPlayer] = playlist.filter((track) => (track.isPlay))

  if (!trackPlayer)
    return dispatch({ type: "setPlayingTrack", payload: playlist[0] })

  const indexOfTrackPlayer = playlist.indexOf(trackPlayer)
  const prevTrackPlayer = playlist[indexOfTrackPlayer - 1] ? playlist[indexOfTrackPlayer - 1] : playlist[indexOfTrackPlayer]
  
  dispatch({ type: "setPlayingTrack", payload: prevTrackPlayer })
}

export const addTrackForPlayeing = async function (track, tagAudio, dispatch) {
  tagAudio.src = track.source
  void await dispatch({ type: "setPlayingTrack", payload: track })

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