import styled from "styled-components";

export const Container = styled.div`
  position:relative;
  flex: 200px 0 0;
`
export const WrapperPoster = styled.div`
  width: 100%;
  height: calc(100vh - (40px + 80px));
  position:relative;
  /* background-color:red; */
`
export const Content = styled.div`
  position:absolute;
  left: 0;
  top: 0;
  width: 100%;
  /* height: 100%; */
  height: calc(100vh - (40px + 80px));
  background-color:rgba(0, 0, 0, .5);
  backdrop-filter: blur(14px);
  width: 100%;
  /* background-color:red; */
`