import styled, { createGlobalStyle } from "styled-components/macro";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
  }
`;

export const SButton = styled.button`
  background: rebeccapurple;
  color: white;
  border: none;
  outline: none;
  display: inline-block;
  padding: 1em 2em;
  width: 20em;
  max-width: 100%;
  &:not(:only-child) {
    margin: 0 0.25em;
    width: 12em;
  }
`;

export const SPopup = styled.div`
  background: white;
  padding: 2em;
  margin: auto;
  max-width: 400px;
  transform: translateY(0);
  transition-property: opacity, transform;
  transition-duration: ${props => props.duration || "0.2s"};
  opacity: ${props => (props.changing ? 0 : 1)};
  transform: ${props =>
    props.changing ? "translateY(-2em)" : "translateY(0)"};
  z-index: 1001;
  height: auto;
`;

export const SPopupWrap = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 2em 2em 4em;
  display: flex;
`;

export const SOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.25);
  transition-property: opacity, transform;
  transition-duration: ${props => props.duration || "0.2s"};
  opacity: ${props => (props.changing ? 0 : 1)};
`;

export const SPopupHeader = styled.header`
  display: block;
  border-bottom: 1px solid lightgray;
  padding: 0 0 0.5em;
  h3,
  h4 {
    margin: 0;
  }
  button {
    float: right;
  }
`;

export const SPopupBody = styled.section`
  max-height: 35vh;
  overflow: auto;
`;

export const SPopupFooter = styled.footer`
  display: block;
  text-align: center;
  padding-top: 1em;
`;
