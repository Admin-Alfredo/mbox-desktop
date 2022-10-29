import React from 'react'
import { Container } from './styles'

export default function WrapperIcon(props) {
  return (
   <Container {...props}>
      {props.children}
   </Container>
  )
}
