import React, { useContext, useEffect, useState } from 'react'
import TrackContext from '../../context/trackContext'
import Button from '../Button'
import { Container, Content, WrapperPoster } from './styles'

export default function PlayerActivity() {
  const { state } = useContext(TrackContext)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (state.playing) {
      console.log(state.playing.posters)
    }
  }, [state.playing])
  useEffect(()=> {

  }, [])
  return (
    <Container>
      <WrapperPoster>
      {state.playing &&
        state.playing.posters.map(poster =>
          <img src={poster}  width="100%" height="100%"/>
        )}
        <Content>
           {state.playing && (
              <div style={{textAlign:'center', marginTop: 100}}>
                <img src={state.playing.posters[0]} width={300}/>
                 <h3 style={{color:'#FFF'}}>{state.playing.File.name}</h3>
              </div>
            )}
        </Content>
      </WrapperPoster>
    </Container>
  )
}
