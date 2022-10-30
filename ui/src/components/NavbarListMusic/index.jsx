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
import {
  DropdownItem,
  DropdownLabelItem
} from '../DropdownList/styles'
import WrapperIcon from '../WrapperIcon'

export default function NavbarMusicList(props) {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false)
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
      <Body style={{ marginTop: '25px' }}>
        <div>
          {[1, 2, 3, 4, 5, 6, 1, 2].map(() =>
            <DropdownList
              isOpen={isOpenDropdown}
              OnClickHeader={() => { }}
              IconHeader={isOpenDropdown ? MdFolderOpen : MdFolder}
              // renderHeader={}
              labelHeader="opções"
              dataItems={["editar", "selectiona", "cortar", "encontrar"]}
              renderItem={(item) => (
                <DropdownItem
                  onClick={() => console.log("once clicked")}
                  onDoubleClick={()=> console.log("double cliked")}>
                  <WrapperIcon>
                    <MdAudiotrack size={20} />
                  </WrapperIcon>
                  <DropdownLabelItem> {item}</DropdownLabelItem>
                </DropdownItem>
              )} />
          )}
        </div>
      </Body>
    </Container>
  )
}
const styles = {

}
