
import React, { useEffect, useState } from 'react'
import { Container, WrapperContent } from './styles'

export default function Pane(props) {
  return (
    <Container
      borderAll={props.borderAll}
      borderLeft={props.borderLeft}
      borderRight={props.borderRight}
      borderBottom={props.borderBottom}
      main={props.main}
      style={props.modifyDimention == 'height' ? { height: props.isOpen ? props.height : '0' } :
        { width: props.isOpen ? props.width : '0' }}>
        
      <WrapperContent {...props}  >
        <h1>Hello, World</h1>
      </WrapperContent>
    </Container>
  )
}
