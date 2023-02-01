import React, { useEffect, useRef, useState } from "react";
import { ThemeProvider } from "styled-components";

import Logo from "../../../components/Logo/logo.component";
import PowerButton from "../../../components/Power-Button/power-button.component";
import SocialIcons from "../../../components/Social-Icon/social-icons.component";
import Card from "../../../components/Card/card.component";
import { darkTheme } from "../../../components/Themes/themes.component";
import Title from "../../../components/Title/title.component";

import { WorkData } from "../../../data/WorkData";
import { Box, Main, container } from "../work.styles";

const Frontend = () => {
  const ref = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const slide = () => {
      return (element.style.transform = `translateX(${
        -window.pageYOffset - window.pageYOffset
      }px)`);
    };
    window.addEventListener("scroll", slide);
    return () => {
      window.removeEventListener("scroll", slide);
    };
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <Box height={'300vh'}>
        <Logo theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <Main ref={ref} variants={container} initial="hidden" animate="show">
          {WorkData.map((work) => (
            <Card key={work.id} data={work} />
          ))}
        </Main>

        <Title text="FRONTEND" top="10%" right="20%" />
      </Box>
    </ThemeProvider>
  );
};

export default Frontend;
