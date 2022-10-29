import React, { useState } from 'react'
import InputText from '../inputText'
import Pane from '../Pane'
import { Container, Header, Body } from './styles'
import {
  MdSearch,
  MdFolder,
  MdFolderOpen,
  MdAudiotrack,
  MdOutlineAudiotrack,
  MdChevronRight
} from 'react-icons/md'
import List from '../DropdownList'
import DropdownList from '../DropdownList'
export default function NavbarMusicList(props) {
  const [isOpenDropdown,setIsOpenDropdown ] = useState(false)
  return (
    <Container
      main
      width="350px"
      height="100%"
      borderRight
      modifyDimention="width"
      isOpen={props.isOpen}>
      <Header>
        <InputText Icon={MdSearch} />
      </Header>
      <Body>
        <DropdownList 
          style={{ marginTop: '25px' }} 
          isOpen={isOpenDropdown}
          OnClickHeader={() => setIsOpenDropdown(!isOpenDropdown)}
          IconHeader={MdFolder}
          IconItems={MdAudiotrack}
          OnDoubleClickItem={() => console.log("Double Click")}
          />
      </Body>
    </Container>
  )
}
const styles = {

}
