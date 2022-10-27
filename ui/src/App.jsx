import { useCallback, useEffect, useRef, useState } from 'react'
import Folder from './class/Folder'
FileList.prototype.map = Array.prototype.map

function App() {
  const [isPlay, setIsPlay] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [fileLoaded, setFileLoaded] = useState(0)
  const [message, setMessage] = useState("Pressiona play para inicial a musica")
  const [isSearch, setIsSearch] = useState(false)
  const [playlist, setPlaylist] = useState([])
  const [folders, setFolders] = useState([])
  // {
  //   dirname:
  //   fulldirname:
  //   files: [

  //   ]
  // }
  const [playlistSearch, setPlaylistSearch] = useState([])
  const audio = useRef()
  useEffect(() => {
    console.log(folders)
  }, [folders])
  useEffect(() => {
    async function fetchMusicas() {
      setIsLoading(true)
      const tracksOfUser = await window.electronAPI.getTrackForUpdatePlaylist()
      setIsLoading(false)
      console.log(tracksOfUser)
      tracksOfUser.forEach(track => addTrackPlaylist(track))
     
    }
    fetchMusicas()
  }, [])

  useEffect(() => {
    audio.current.addEventListener('ended', (e) => {
      handlerForwardTrackPlaylist(playlist)
    })
    audio.current.onplay = () => setIsPlay(true)
    audio.current.onemptied = (e) => console.log(e)//audio loaded

    window.onkeydown = function (e) {
      if (e.key === "Enter") {
        const [trackSelectedForPlayer] = playlist.filter(track => track.selected)
        if (!trackSelectedForPlayer) return;
        return addTrackToPlayer(trackSelectedForPlayer)
      }
    }
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
  const addNewFolder = useCallback(function (folder) {
    setFolders(items => {
      const [hasFolder] = items.filter(item => (
        item.fulldirname == folder.fulldirname &&
        item.dirname == folder.dirname
      ))
      if (!hasFolder) {
        console.log(items, folder)
        return [...items, folder]
      }
      return [...items]
    })
  }, [setFolders])

  const orderTrackRelativeFolder = function () {
    const listForder = playlist.reduce((acumulador, track) => {
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
    setFolders([...listForder])
  }

  const addTrackPlaylist = useCallback(function (track) {
    setPlaylist(items => {
      const [hasFile] = items.filter(item => item.File.name == track.File.name)
      if (!hasFile)
        return [...items, track]
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
      console.log(blob)
      const url = URL.createObjectURL(blob)
      addTrackPlaylist({
        File: blob,
        source: url,
        isPlay: false,
        selected: false
      })
    })
  }
  const handlerForwardTrackPlaylist = function (_playlist = []) {
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

  const handlerPreviuesTrackPlaylist = function (_playlist) {
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
      <button onClick={() => handlerPreviuesTrackPlaylist(playlist)}> previues track</button>
      <button onClick={handlerAudioPlay}>{isPlay ? "pause" : "play"}</button>
      <button onClick={() => handlerForwardTrackPlaylist(playlist)}>forward track</button>
      <button onClick={() => orderTrackRelativeFolder()}>order Folder</button>
      {/* <button onClick={() =>{
       
      }}> show dir user - {dirhome}</button> */}

      <input onInput={handlerInputSearch}
        onFocus={() => setIsSearch(true)}
        onBlur={() => setIsSearch(false)} />
      <p>{isLoading ? "Loading" : "Completed"}</p>
      {/* {(isSearch ? playlistSearch : playlist)?.map((track, index) => (
        <div key={index}
          title={track.source}
          style={{ cursor: "pointer" }}
          onDoubleClick={() => addTrackToPlayer(track)}
          onClick={(event) => selectedTrack(track, event)}>
          {index + 1} -
          {track.isPlay ?
            <span style={{ color: 'red' }}> {track.File.name}</span> :
            <span style={{ color: track.selected ? 'blue' : 'black' }}>{track.File.name}</span>}
        </div>
      ))} */}
      {folders.map(folder => (
        <div>
          <h2>{folder.dirname}</h2>
          <div style={{ padding: '0px 0px 0px 15px' }}>
            {folder.getFiles().map((track, index) => (
              <div key={index}
                title={track.source}
                style={{ cursor: "pointer" }}
                onDoubleClick={() => addTrackToPlayer(track)}
                onClick={(event) => selectedTrack(track, event)}>
                {index + 1} -
                {track.isPlay ?
                  <span style={{ color: 'red' }}> {track.File.name}</span> :
                  <span style={{ color: track.selected ? 'blue' : 'black' }}>{track.File.name}</span>}
              </div>
            ))}
          </div>
        </div>
      ))}
      <input type="file" onChange={handlerChangeAudioFile} accept="audio/*" multiple />
    </div>
  )
}

export default App
