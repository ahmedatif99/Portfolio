import React from "react";
import { ThemeProvider } from "styled-components";

import { motion } from "framer-motion";

import Logo from "../../components/Logo/logo.component";
import PowerButton from "../../components/Power-Button/power-button.component";
import SocialIcons from "../../components/Social-Icon/social-icons.component";
import { darkTheme } from "../../components/Themes/themes.component";
import Title from "../../components/Title/title.component";

import { Box, Item, MainWork } from "./work.styles";

const Work = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box height={'100vh'}>
        <Logo theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <MainWork initial="hidden" animate="show">
          <Item to="/work/frontend">
            <motion.h2
              initial={{
                y: 400,
                x: -400,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 70,
                x: 70,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.4 }}
              whileTap={{ scale: 1.3 }}
            >
              FRONTEND
            </motion.h2>
          </Item>
          <Item to="/work/backend">
            <motion.h2
              initial={{
                y: 400,
                x: 400,
                transition: { type: "spring", duration: 1.5, delay: 1.5 },
              }}
              animate={{
                y: 70,
                x: 70,
                transition: { type: "spring", duration: 1.5, delay: 1.5 },
              }}
              whileHover={{ scale: 1.4 }}
              whileTap={{ scale: 1.3 }}
            >
              BACKEND
            </motion.h2>
          </Item>
        </MainWork>

        <Title text="WORK" top="10%" right="20%" />
      </Box>
    </ThemeProvider>
  );
};

export default Work;
