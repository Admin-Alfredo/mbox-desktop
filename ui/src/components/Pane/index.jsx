
import React, { useEffect, useState } from 'react'
import { Container, WrapperContent } from './styles'

export default function Pane(props) {
  return (
    <Container
      borderAll={props.borderAll}
      borderLeft={props.borderLeft}
      borderRight={props.borderRight}
      borderTop={props.borderTop}
      borderBottom={props.borderBottom}
      main={props.main}
      style={props.modifyDimention == 'height' ?
        { height: props.isOpen === true ? props.height : props.isOpen === undefined ? props.height : '0' } :
        { width: props.isOpen === true ? props.width : props.isOpen === undefined ? props.width : '0' }}>
      <WrapperContent {...props}>
        {props.children}
      </WrapperContent>
    </Container>
  )
}
