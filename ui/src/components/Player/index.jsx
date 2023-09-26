import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import {
  Container,
  WrapperProgressBar,
  WrapperControlls,
  ControlMain,
  Chevron,
  Play,
  ProgressBar
} from './styles'
import { MdPause, MdPlayArrow } from 'react-icons/md'
import {
  BsChevronRight,
  BsChevronLeft
} from 'react-icons/bs'
import TrackContext from '../../context/trackContext'
import WrapperIcon from '../WrapperIcon'
import { handlerForwardTrackPlaylist, handlerPreviuesTrackPlaylist } from './handlers'

export default function Player() {

  const [isPlay, setIsPlay] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSearch, setIsSearch] = useState(false)
  const { state, dispatch } = useContext(TrackContext)
  const TagAudio = useRef(null)

  useEffect(() => {
    console.log(TagAudio.current)
    // TagAudio.current.addEventListener('ended', (e) => {
    //   handlerForwardTrackPlaylist(playlist)
    // })
    TagAudio.current.onplay = () => setIsPlay(true)
    TagAudio.current.onpause = () => setIsPlay(false)
    TagAudio.current.onemptied = (e) => console.log(e)//audio loaded
    TagAudio.current.onended = function () {
      this.play().then(() => console.log("Repeat music."))
    }
    // window.onkeydown = function (e) {
    //   if (e.key === "Enter") {
    //     const [trackSelectedForPlayer] = playlist.filter(track => track.selected)
    //     if (!trackSelectedForPlayer) return;
    //     return addTrackToPlayer(trackSelectedForPlayer)
    //   }
    // }
  }, [])
  useEffect(() => {
    if (state.playing) {
      TagAudio.current.src = state.playing.source
    }
  }, [state.playing])

  const handlerAudioPlay = async function () {
    if (!TagAudio.current.paused) {
      TagAudio.current.pause()
      setIsPlay(false)
    } else {
      TagAudio.current.play()
        .then(() => setIsPlay(true))
        .catch((err) => console.error("Erro iniciar a música", err.message))
    }
  }
  const handlerChangeProgress = (e) => {
    const currentSelectedArea = e.clientX - e.currentTarget.getBoundingClientRect().x;// area selecionado em pixa
    const currentSelectedArea_p = Math.round((currentSelectedArea * 100) / e.currentTarget.getBoundingClientRect().width)
    console.log(e.currentTarget.children[0])
    e.currentTarget.children[0].style.width = ` ${currentSelectedArea_p}%`
  }
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

  return (
    <Container
      width="100%"
      height="80px"
      minHeight="80px"
      borderTop
      modifyDimention="width">
      <audio autoPlay ref={TagAudio} ></audio>
      <WrapperProgressBar onClick={handlerChangeProgress}>
        <ProgressBar />
      </WrapperProgressBar>
      <WrapperControlls>
        <ControlMain>
          <Chevron onClick={() => handlerPreviuesTrackPlaylist(state.playlist, dispatch)}>
            <BsChevronLeft size={30} />
          </Chevron>
          <WrapperIcon
            style={{ width: '60px', height: '60px', cursor: ' pointer' }}
            onClick={() => handlerAudioPlay()}>
            {isPlay ? <MdPause size={40} /> : <MdPlayArrow size={40} />}
          </WrapperIcon>
          <Chevron onClick={() => handlerForwardTrackPlaylist(state.playlist, dispatch)} >
            <BsChevronRight size={30} />
          </Chevron>
        </ControlMain>
      </WrapperControlls>
    </Container>
  )
}


export const TagAudio = (props) => {
  return (
    <audio {...props}></audio>
  )
} 