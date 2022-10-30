import React, { useEffect, useRef, useState } from 'react'
import {
  Container,
  ListHeader,
  ListHeaderLabel,
  List,
  ListContent,

} from './styles'
import { MdChevronRight } from 'react-icons/md'
import WrapperIcon from '../WrapperIcon'

export default function DropdownList(props) {

  const SubListContentDOM = useRef({})
  const [heightSubListContent, setHeightSubListContent] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(function () {
    setHeightSubListContent(SubListContentDOM.current.getBoundingClientRect().height)
  }, [])
 
  return (
    <Container {...props}>
      <ListHeader
        isOpen={isOpen}
        onClick={(e) => {
          setIsOpen(!isOpen)
          props.OnClickHeader && typeof props.OnClickHeader == 'function' ?
            props.OnClickHeader(e) : false
        }}>
        <WrapperIcon style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'all ease .23s' }}>
          <MdChevronRight size={20} />
        </WrapperIcon>
        {props.IconHeader &&
          <WrapperIcon>
            <props.IconHeader size={35} color="#007aff" />
          </WrapperIcon>}
        <ListHeaderLabel>{props.labelHeader && props.labelHeader}</ListHeaderLabel>
      </ListHeader>
      <List style={{ height: isOpen ?  `${heightSubListContent}px` : '0px' }}>
        <ListContent ref={SubListContentDOM} style={{ top: isOpen ? '0px' : `${-heightSubListContent}px` }}>
          {props.dataItems?.map(item => props.renderItem && props.renderItem(item))}
        </ListContent>
      </List>
    </Container>
  )
}
