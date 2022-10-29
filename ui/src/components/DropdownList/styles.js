import styled from "styled-components";

export const Container = styled.ul`
  list-style:none;
`

export const SubContainer = styled.ul`
   list-style:none;
   margin-left: 30px;
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
export const SubContainerItem = styled.li`
  padding: 10px 5px;
  cursor: pointer;
  border-radius: 11px;
  &:hover{
    background-color: var(--color-primary);
    color: ${({theme}) => theme.dropdownList.textColorHover}
  }
`
