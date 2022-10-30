import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  background-color: ${({theme}) => theme.inputText.backgroundColor};
  border-radius: 11px;
  transition:ease .15s;
  &:has(> input:focus){
    background-color: ${({theme}) => theme.inputText.backgroundColorFocus};
  }
  & input {
    width: 100%;
    background-color: transparent;
    border: ${({theme}) => `${theme.inputText.borderWidth} solid ${theme.inputText.borderColor}`};
    color: ${({theme}) => theme.inputText.textColor};
    border-radius: 11px;
    outline: none;
    height: 35px;
    font-size: 15pt;
    padding: 5px 10px;
    box-shadow: 0px 1px 0.001rem ${({theme}) => theme.inputText.boxShadowColor};
    transition:outline ease .15s;
  } 
  & input:focus{
    background-color: transparent;
    border: ${({theme}) => `${theme.inputText.borderWidth} solid ${theme.inputText.borderColorFocus}`};
    border-width: 0;
    color: ${({theme}) => theme.inputText.textColor};
    outline-width: ${({theme}) => theme.inputText.borderWidthFocus};
    outline-style: solid;
    outline-color: ${({theme}) => theme.inputText.outlineColorFocus};
    box-shadow: none;
  } 
  & input::placeholder{
    color: ${({theme}) => theme.inputText.textColorPlaceholder};
  }
`