import React from 'react'
import { Container, Overlap } from './styles'

export default function WrapperIcon(props) {

  return (
    <Container {...props} >
      <Overlap  />
      {props.children}
    </Container>
  )
}
