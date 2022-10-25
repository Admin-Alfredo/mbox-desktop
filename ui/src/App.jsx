import { useCallback, useEffect, useRef, useState } from 'react'
FileList.prototype.map = Array.prototype.map

function App() {
  const [isPlay, setIsPlay] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [fileLoaded, setFileLoaded] = useState(0)
  const [message, setMessage] = useState("Pressiona play para inicial a musica")
  const [isSearch, setIsSearch] = useState(false)
  const [playlist, setPlaylist] = useState([])
  const [playlistSearch, setPlaylistSearch] = useState([])
  const [dirhome, setDirhome] = useState('directory is empty!')
  const audio = useRef()

  useEffect(() => {

    audio.current.addEventListener('ended', (e) => handlerForwardTrackPlaylist())
    audio.current.addEventListener('play', () => setIsPlay(true))
    audio.current.addEventListener('play', () => setIsPlay(true))
    audio.current.addEventListener('emptied', (e) => console.log(e))
    window.addEventListener('keydown', function (e) {
      if (e.key === "Enter") {
        const [trackSelectedForPlayer] = playlist.filter(track => track.selected)
        if (!trackSelectedForPlayer) return;
        return addTrackToPlayer(trackSelectedForPlayer)
      }
    })

    async function fetchMusicas() {
      setIsLoading(true)
      const tracksOfUser = await window.electronAPI.getHomedir()
      setIsLoading(false)
      console.log(tracksOfUser)
      tracksOfUser.forEach(track => addTrackPlaylist(track))
    }
    fetchMusicas()
  }, [])
  const handlerAudioPlay = function () {
    if (!audio.current.paused) {
      audio.current.pause()
      setIsPlay(false)
    } else {
      audio.current.play()
        .then(() => setIsPlay(true))
        .catch((err) => console.error("Erro iniciar a música", err.message))
    }
  }
  const addTrackPlaylist = useCallback(function (track) {
    setPlaylist(items => {
      const [hasFile] = items.filter(item => item.File.name == track.File.name)
      if (!hasFile) {
        return [...items, track]
      }
      return [...items]
    })
  }, [setPlaylist])

  const addTrackToPlayer = useCallback(function (track) {
    setPlaylist(items => items.map(item => {
      if (track.File.name == item.File.name) {
        item.isPlay = true;
        audio.current.type = track.File.type
        audio.current.src = track.source
        return item
      }
      item.isPlay = false;
      return item
    }))
  }, [setPlaylist])
  const addTrackAsUrlToPlayer = function (url) {
    audio.current.src = url
  }
  const selectedTrack = useCallback(function (track, e) {
    setPlaylist(items => items.map(item => {
      if (item.File.name == track.File.name) {
        item.selected = true;
        return item
      }
      item.selected = false
      return item
    }))
  }, [setPlaylist])
  const getTrackPlayer = useCallback(function () {
    return playlist.find((track) => {
      if (track.isPlay) {
        return track
      }
    })
  }, [playlist])

  const handlerChangeAudioFile = function (e) {
    e.target.files.map((blob) => {
      const url = URL.createObjectURL(blob)
      addTrackPlaylist({
        File: blob,
        source: url,
        isPlay: false,
        selected: false
      })
    })
  }
  const handlerForwardTrackPlaylist = function (e) {
    if (!playlist.length)
      return;
    const [trackPlayer] = playlist.filter((track) => (track.isPlay))

    if (!trackPlayer)
      return addTrackToPlayer(playlist[0])

    const indexOfTrackPlayer = playlist.indexOf(trackPlayer)
    const nextTrackPlayer = playlist[indexOfTrackPlayer + 1] ?
      playlist[indexOfTrackPlayer + 1] :
      playlist[0]
    return addTrackToPlayer(nextTrackPlayer)
  }
  const handlerPreviuesTrackPlaylist = function (e) {
    if (!playlist.length)
      return;
    const [trackPlayer] = playlist.filter((track) => (track.isPlay))

    if (!trackPlayer)
      return addTrackToPlayer(playlist[0])

    const indexOfTrackPlayer = playlist.indexOf(trackPlayer)
    const nextTrackPlayer = playlist[indexOfTrackPlayer - 1] ?
      playlist[indexOfTrackPlayer - 1] :
      playlist[0]
    return addTrackToPlayer(nextTrackPlayer)
  }

  const handlerInputSearch = function (e) {
    console.log(e.target.value)
    console.log(playlist)
    setPlaylist(items => items.filter(item => item.File.name.includes(e.target.value)))
  }

  return (
    <div className="App">
      <audio
        autoPlay
        controls
        ref={audio}
        src="/audio/Henry_Jackman.mp3" type="audio/mpeg">
      </audio>
      <button onClick={handlerPreviuesTrackPlaylist}> previues track</button>
      <button onClick={handlerAudioPlay}>{isPlay ? "pause" : "play"}</button>
      <button onClick={handlerForwardTrackPlaylist}>forward track</button>

      {/* <button onClick={() =>{
       
      }}> show dir user - {dirhome}</button> */}

      <input onInput={handlerInputSearch}
        onFocus={() => setIsSearch(true)}
        onBlur={() => setIsSearch(false)} />
      <p>{isLoading ? "Loading" : "Completed"}</p>
      {(isSearch ? playlistSearch : playlist)?.map((track, index) => (
        <div key={index}
          style={{ cursor: "pointer" }}
          onDoubleClick={() => addTrackToPlayer(track)}
          onClick={(event) => selectedTrack(track, event)}>
          {index + 1} -
          {track.isPlay ?
            <span style={{ color: 'red' }}> {track.File.name}</span> :
            <span style={{ color: track.selected ? 'blue' : 'black' }}>{track.File.name}</span>}
        </div>
      ))}
      <input type="file" onChange={handlerChangeAudioFile} accept="audio/*" multiple />
    </div>
  )
}

export default App
