import styled from "styled-components";
import Pane from "../Pane";

export const Container = styled(Pane)`
  display: flex ;
  flex-direction: column;
`
export const Header = styled.header`
  margin-top: var(--height-toolbar);
  padding: 0px 10px;
`
export const Body = styled.header`
  padding: 0px 10px;
  overflow-y: auto;

  &::-webkit-scrollbar{
    width: 8px;
  }

  &::-webkit-scrollbar-thumb{
    background: #54545627;
    border-radius: 6px;
    transition:all ease .49s;
  }
  &::-webkit-scrollbar-thumb:hover{
    background: red;
    background: #545456de;
    border-radius: 6px;
  }
 
`