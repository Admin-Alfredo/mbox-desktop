import styled from "styled-components";

export const Container = styled.aside`
  /*
  minHeight
  minWidth
  maxWidth
  maxHeight

  borderAll
  borderLeft
  borderTop
  borderRight
  borderBottom
  */
  background: ${(props) => props.main ? props.theme.pane.backgroundPrimary : props.theme.pane.backgroundSegundary};
  border:${props => props.borderAll ?
    props.main ? `${props.theme.pane.borderWidth} solid ${props.theme.pane.borderColorPrimary}` : `${props.theme.pane.borderWidth} solid ${props.theme.pane.borderColorPrimary}` :
    'none'};
  border-left: ${props => props.borderLeft ?
    props.main ? `${props.theme.pane.borderWidth} solid ${props.theme.pane.borderColorPrimary}` : `${props.theme.pane.borderWidth} solid ${props.theme.pane.borderColorPrimary}` :
    'none'};
  border-right: ${props => props.borderRight ?
    props.main ? `${props.theme.pane.borderWidth} solid ${props.theme.pane.borderColorPrimary}` : `${props.theme.pane.borderWidth} solid ${props.theme.pane.borderColorPrimary}` :
    'none'};
  border-top: ${props => props.borderTop ?
    props.main ? `${props.theme.pane.borderWidth} solid ${props.theme.pane.borderColorPrimary}` : `${props.theme.pane.borderWidth} solid ${props.theme.pane.borderColorPrimary}` :
    'none'};
  border-bottom: ${props => props.borderBottom ?
    props.main ? `${props.theme.pane.borderWidth} solid ${props.theme.pane.borderColorPrimary}` : `${props.theme.pane.borderWidth} solid ${props.theme.pane.borderColorPrimary}` :
    'none'};
  border-width: ${props => props.borderWidth ? props.borderWidth : props.theme.pane.borderWidth};
  overflow: hidden;
  transition: all ease .25s;
  position: relative;
  `
export const WrapperContent = styled.div`
   width: ${props => props.width ?
      props.minWidth ? props.width < props.minWidth ? props.minWidth : props.width : props.width :
      props.minWidth ? props.minWidth : '0px'
    };
  height: ${props => props.height ?
      props.minHeight ? props.height < props.minHeight ? props.minHeight : props.height : props.height :
      props.minHeight ? props.minHeight : '0px'
    };
  min-width: ${props => props.minWidth ? props.minWidth : 'auto'};
  min-height: ${props => props.minHeight ? props.minHeight : 'auto'};
  max-width: ${props => props.maxWidth ? props.maxWidth : 'auto'};
  max-height: ${props => props.maxHeight ? props.maxHeight : 'auto'};
`