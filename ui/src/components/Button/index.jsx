import React from 'react'
import { Container } from './styles'

export default function Button(props) {
  return (
    <Container {...props}>
      {/* <div style={{display:'flex', flexDirection: 'row'}}> */}
        {props.children} 
       
      {/* </div> */}
    </Container>
  )
}
