import { createGlobalStyle } from "styled-components"



export const GlobalStyles = createGlobalStyle`
  :root{
    --color-primary: #007aff;
    --color-segundary: #dadadf;
    --color-dismiss-primary: rgb(0, 123, 255, .5);
    --color-dismiss-segundary: rgb(217, 217, 222, .5);
    --height-toolbar: 40px;
  }
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
    font-size: 14pt;
  }
`
const PaneBorderWidth = '1px'

export const LightTheme = {
  colorPrimary: '#007aff',
  colorSegundary: '#8e8e93',

  body: {
    backgroundColor: '#FFFFFF',
    textColor: '#393839'
  },
  pane: {
    backgroundPrimary: '#F2F2F7',
    backgroundSegundary: '#FFFFFF',
    borderColorPrimary: '#D5D5D9',
    borderColorSegundary: '#E0E0E0',
    borderWidth: PaneBorderWidth
  },
  inputText: {
    backgroundColor: '#FFFFFF',
    backgroundColorFocus: 'transparent',
    borderColor: '#E0E0E0',
    borderColorFocus: '#C0D9FC',
    textColorPlaceholder: '#C5C5C7',
    textColor: '#000',
    textColorFocus: '#000',
    boxShadowColor: '#CECBCB',
    boxShadowColorFocus: 'none',
    borderWidth: '1px',
    borderWidthFocus: '3px',
    outlineColorFocus: '#C0D9FC',
  },
  dropdownList: {
    textColorHover: "#FFF",
    backgroundColorHoverListHeader: '#D5D5D9'
  }
}
export const DarkTheme = {
  colorPrimary: '#0a84ff',
  colorSegundary: '#dcdcdc',
  body: {
    backgroundColor: '#1C1C1E',
    textColor: '#FFF'
  },
  pane: {
    backgroundPrimary: '#2C2C2E',
    backgroundSegundary: '#1C1C1E',
    borderColorPrimary: '#464647',
    borderColorSegundary: '#383839',
    borderWidth: PaneBorderWidth
  },
  inputText: {
    backgroundColor: '#1E1E1E',
    backgroundColorFocus: 'transparent',
    borderColor: '#464444',
    borderColorFocus: '#C0D9FC',
    textColorPlaceholder: '#5A5A5E',
    textColor: '#FFF',
    textColorFocus: '#FFF',
    boxShadowColor: '#000',
    boxShadowColorFocus: 'none',
    borderWidth: '1px',
    borderWidthFocus: '3px',
    outlineColorFocus: '#1C4661'
  },
  dropdownList: {
    textColorHover: "#FFF",
    backgroundColorHoverListHeader: '#333'
  }
}