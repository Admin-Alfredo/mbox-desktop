import styled from "styled-components";

export const Container = styled.ul`
  list-style:none;
`

export const SubList = styled.ul`
  position: relative;
  overflow: hidden;
  list-style:none;
  margin-left: 30px;
`
export const SubListContent = styled.div`
  position: relative;
  left:0;
  transition: top ease .19s;
  /* top: 200px; */
`
export const ListHeader = styled.li`
  padding: 10px 7px;
  font-family:Roboto-Bold;
  border-radius: 11px;
  cursor: pointer;
  /* height: 40px; */
  display: flex;
  align-items: center;
  &:hover{
    background-color: ${({theme}) => theme.dropdownList.backgroundColorHoverListHeader};
  }
`

export const ListHeaderLabel = styled.span`
  margin-left: 10px;
`
export const SubListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 5px;
  cursor: pointer;
  border-radius: 11px;
  background-color: ${props => props.isActived == true? 'var(--color-primary)' : 'transparent'};
  color:  ${props => props.isActived == true? props.theme.dropdownList.textColorHover : 'auto'};
  &:hover{
    background-color: var(--color-primary);
    color: ${({theme}) => theme.dropdownList.textColorHover}
  }

`
export const SubListItemLabel = styled.span`

`
