import React from 'react'
import {
  Container,
  ListHeader,
  ListHeaderLabel,
  SubContainer,
  SubContainerItem
} from './styles'
import {
  MdFolder,
  MdFolderOpen,
  MdAudiotrack,
  MdChevronRight
} from 'react-icons/md'
import WrapperIcon from '../WrapperIcon'

export default function DropdownList(props) {
  return (
    <Container {...props}>
      <ListHeader>
        <WrapperIcon style={{transform: 'rotate(0deg)'}}>
          <MdChevronRight size={20} />
        </WrapperIcon>
        <WrapperIcon >
          <MdFolder size={35} color="#007aff" />
        </WrapperIcon>
        <ListHeaderLabel>opções</ListHeaderLabel>
      </ListHeader>
      <SubContainer>
        <SubContainerItem>editar</SubContainerItem>
        <SubContainerItem>selectiona</SubContainerItem>
        <SubContainerItem>cortar</SubContainerItem>
        <SubContainerItem>encontrar</SubContainerItem>
      </SubContainer>
    </Container>
  )
}
