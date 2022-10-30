import styled from "styled-components";
import Pane from "../Pane";
import WrapperIcon from "../WrapperIcon";

export const Container = styled(Pane)`

`
export const WrapperProgressBar = styled.div`

` 
export const WrapperControlls = styled.div`
  display: flex;
  justify-content: center;
`

export const ControlMain = styled.div`
  display:flex ;
  align-items: center;
`
export const Chevron = styled(WrapperIcon)`
  width: 50px;
  height: 50px;
  cursor: pointer;
`
export const Play = styled(WrapperIcon)`
  width: 60px;
  height:60px;
  cursor: pointer;
`