import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width:30px;
  height: 30px;
  background: transparent;
  justify-content: center;
  align-items: center;
  position: relative;
`
export const Overlap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: transparent;
  width: 100%;
  height: 100%;
  /* z-index: 10; */
`