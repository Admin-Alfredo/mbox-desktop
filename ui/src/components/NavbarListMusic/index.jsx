import React, { useContext, useEffect, useRef, useState } from 'react'
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
import TrackContext from '../../context/trackContext'

export default function NavbarMusicList(props) {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false)
  const { state, dispatch } = useContext(TrackContext)
  // console.log(state)
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
          {state && state.folders?.map((folder, index) =>
            <DropdownList
              key={index}
              isOpen={isOpenDropdown}
              OnClickHeader={() => { }}
              IconHeader={isOpenDropdown ? MdFolderOpen : MdFolder}
              labelHeader={folder.dirname}
              dataItems={[...folder.getFiles()]}
              renderItem={(track, key) => {
                // const dropdownItemDOM = useRef(null)
                // useEffect(() => {
                //   console.log(dropdownItemDOM.current)
                // }, [])
                return (
                  <DropdownItem
                    // ref={dropdownItemDOM}
                    key={key}
                    onClick={() => console.log("once clicked")}
                    onDoubleClick={() => void dispatch({ type: "setPlayingTrack", payload: track })}
                    className={track.isPlay && 'active'}>
                    <WrapperIcon>
                      <MdAudiotrack size={20} />
                    </WrapperIcon>
                    <DropdownLabelItem> {track.File.name}</DropdownLabelItem>
                  </DropdownItem>
                )
              }} />
          )}
        </div>
      </Body>
    </Container>
  )
}
