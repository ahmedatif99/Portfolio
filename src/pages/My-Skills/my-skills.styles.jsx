import styled from "styled-components";
import { device } from "../../media";

export const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  top: 10px;

  @media ${device.tablet} {
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 65vh;
  overflow-y: scroll;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;
  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};

    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: ${(props) => props.theme.text};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.body};
      outline: 1px solid slategrey;
    }
  }

  &::-webkit-scrollbar {
    width: 0.4rem;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: ${(props) => props.theme.body};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.text};
    outline: 1px solid slategrey;
  }

  @media ${device.tablet} {
    margin-top: 20%;
    height: auto;
  }
`;

export const InnerTitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);
  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }
  & > *:first-child {
    margin-right: 1rem;
  }
`;

export const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;
  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }
  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
`;
