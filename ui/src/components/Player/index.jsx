import React from 'react'
import {
  Container,
  WrapperProgressBar,
  WrapperControlls,
  ControlMain,
  Chevron,
  Play
} from './styles'
import { MdPlayArrow } from 'react-icons/md'
import {
  BsChevronRight,
  BsChevronLeft
} from 'react-icons/bs'
export default function Player() {
  return (
    <Container
      width="100%"
      height="110px"
      borderTop
      modifyDimention="width">
      <WrapperProgressBar>

      </WrapperProgressBar>
      <WrapperControlls>
        <ControlMain>
          <Chevron><BsChevronLeft size={50} /></Chevron>
          <Play > <MdPlayArrow size={70} /></Play>
          <Chevron><BsChevronRight size={50} /></Chevron>
        </ControlMain>
      </WrapperControlls>
    </Container>
  )
}
