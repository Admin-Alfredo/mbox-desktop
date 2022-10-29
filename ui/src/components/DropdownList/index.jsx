import React, { useEffect, useRef, useState } from 'react'
import {
  Container,
  ListHeader,
  ListHeaderLabel,
  SubListItem,
  SubList,
  SubListContent,
  SubListItemLabel,

} from './styles'
import {
  MdFolder,
  MdFolderOpen,
  MdAudiotrack,
  MdOutlineAudiotrack,
  MdChevronRight
} from 'react-icons/md'
import WrapperIcon from '../WrapperIcon'

export default function DropdownList(props) {
  const listItems = [
    "editar",
    "selectiona",
    "cortar",
    "encontrar"
  ]
  const SubListContentDOM = useRef({})
  const [heightSubListContent, setHeightSubListContent] = useState(0)
  useEffect(function(){
    setHeightSubListContent(SubListContentDOM.current.getBoundingClientRect().height)
  }, [])
  return (
    <Container {...props}>
      <ListHeader isOpen={props.isOpen} onClick={props.OnClickHeader && props.OnClickHeader}>
        <WrapperIcon style={{ transform: props.isOpen ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'all ease .23s' }}>
          <MdChevronRight size={20} />
        </WrapperIcon>
        {props.IconHeader &&
          <WrapperIcon>
            <props.IconHeader size={35} color="#007aff" />
          </WrapperIcon>}
        <ListHeaderLabel>opções</ListHeaderLabel>
      </ListHeader>
      <SubList>
        <SubListContent ref={SubListContentDOM} style={{top: props.isOpen ? '0px' : `${-heightSubListContent}px`}}>
          {listItems.map(item =>
            <SubListItem
              onClick={props.OnClickItem && props.OnClickItem}
              onDoubleClick={props.OnDoubleClickItem && props.OnDoubleClickItem}>
              {props.IconItems &&
                <WrapperIcon>
                  <props.IconItems size={20}/>
                </WrapperIcon>}
              <SubListItemLabel> {item}</SubListItemLabel>
            </SubListItem>)}
        </SubListContent>
      </SubList>
    </Container>
  )
}
