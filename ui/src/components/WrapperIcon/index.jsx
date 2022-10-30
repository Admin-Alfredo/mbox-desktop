import React from 'react'
import { Container, Overlap } from './styles'

export default function WrapperIcon(props) {

  return (
    <Container {...props} onClick={null}>
      <Overlap onClick={props.onClick && props.onClick} />
      {props.children}
    </Container>
  )
}
