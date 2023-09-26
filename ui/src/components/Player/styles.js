import styled from "styled-components";
import Pane from "../Pane";
import WrapperIcon from "../WrapperIcon";

export const Container = styled(Pane)`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
`
export const WrapperProgressBar = styled.div`
  margin-top: 10px;
  height: 8px;
  width: 100%;
  background-color: ${({ theme }) =>  theme.pane.backgroundPrimary };
  display: flex;
  align-items: center;
` 
export const ProgressBar = styled.div`
  /* align-items: center; */
 width: 45%;
 height: 4px;
 background-color: ${({ theme }) =>  theme.colorPrimary };
 /* margin: 0px auto; */
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