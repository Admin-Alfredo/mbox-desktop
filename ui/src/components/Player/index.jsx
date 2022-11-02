import React, { useContext, useEffect, useRef, useState } from 'react'
import {
  Container,
  WrapperProgressBar,
  WrapperControlls,
  ControlMain,
  Chevron,
  Play
} from './styles'
import { MdPause, MdPlayArrow } from 'react-icons/md'
import {
  BsChevronRight,
  BsChevronLeft
} from 'react-icons/bs'
import TrackContext from '../../context/trackContext'
import WrapperIcon from '../WrapperIcon'

export default function Player() {

  const [isPlay, setIsPlay] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSearch, setIsSearch] = useState(false)
  const { state, dispatch } = useContext(TrackContext)
  const TagAudio = useRef(null)

  console.log(state)
  useEffect(() => {
    console.log(TagAudio.current)
    // TagAudio.current.addEventListener('ended', (e) => {
    //   handlerForwardTrackPlaylist(playlist)
    // })
    TagAudio.current.onplay = () => setIsPlay(true)
    TagAudio.current.onpause = () => setIsPlay(false)
    TagAudio.current.onemptied = (e) => console.log(e)//audio loaded

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


  return (
    <Container
      width="100%"
      height="80px"
      borderTop
      modifyDimention="width">
      <audio
        autoPlay
        ref={TagAudio}>
      </audio>
      <WrapperProgressBar>

      </WrapperProgressBar>
      <WrapperControlls>
        <ControlMain>
          <Chevron><BsChevronLeft size={30} /></Chevron>
          <WrapperIcon
            style={{ width: '60px', height: '60px', cursor: ' pointer' }}
            onClick={() => handlerAudioPlay()}>
            {isPlay ? <MdPause size={40} /> : <MdPlayArrow size={40} />}
          </WrapperIcon>
          <Chevron><BsChevronRight size={30} /></Chevron>
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