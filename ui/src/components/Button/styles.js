import styled from "styled-components";

export const Container = styled.button`
  border: none;
  outline: none;
  height: ${props => props.large ? '30px' : '26px'};
  padding: 4px 5px;
  margin: 0px 2px;
  border-radius: 4px;
  background-color: ${props => props.segundary ? props.theme.colorSegundary : props.theme.colorPrimary};
  color:${props => props.segundary ? '#000' :' #FFF'};
  &:active{
    background-color: ${props => props.segundary ? 'var(--color-dismiss-segundary)' : 'var(--color-dismiss-primary)'};
    color: ${props => props.segundary && '#bbb'}
  }
`