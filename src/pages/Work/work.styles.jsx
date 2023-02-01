import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../media";

export const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  height: ${(props) => props.height};
  position: relative;
  display: flex;
  align-items: center;
`;

export const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  color: white;
  @media ${device.tablet} {
    width: 220%;
    left: calc(5rem + 12vw);
  }
`;

export const MainWork = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 80vh;
  flex-direction: row;
`;

export const Item = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  margin: 2rem;
  z-index: 1;
`;

// Framer-motion Configuration
export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};
