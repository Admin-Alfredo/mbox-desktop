import { createGlobalStyle } from "styled-components"



export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: Roboto;
    src: url(/fontes/Roboto-Regular.ttf);
  }
  @font-face {
    font-family: Roboto-Bold;
    src: url(/fontes/Roboto-Bold.ttf);
  }
  @font-face {
    font-family: Roboto-Light;
    src: url(/fontes/Roboto-Light.ttf);
  }
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    user-select: none;
  }
  html, body {
    width: 100%;
    height: 100%;
    font-family: Roboto;
  }
  body {
    background-color: ${({ theme }) => theme.body.backgroundColor};
    color: ${({ theme }) => theme.body.textColor};
  }
`
const borderWidth = '1px'
export const LightTheme = {
  body: {
    backgroundColor: '#FFFFFF',
    textColor: '#C5C5C7'
  },
  pane: {
    backgroundPrimary: '#F2F2F7',
    backgroundSegundary: '#FFFFFF',
    borderColorPrimary : '#D5D5D9',
    borderColorSegundary: '#E0E0E0',
    borderWidth
  }
}
export const DarkTheme = {
  body: {
    backgroundColor: '#1C1C1E',
    textColor: '#5A5A5E'
  },
  pane: {
    backgroundPrimary: '#2C2C2E',
    backgroundSegundary: '#1C1C1E',
    borderColorPrimary : '#464647',
    borderColorSegundary: '#383839',
    borderWidth
  }
}