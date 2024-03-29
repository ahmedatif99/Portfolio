import React from "react";
import { ThemeProvider } from "styled-components";

import Logo from "../../components/Logo/logo.component";
import PowerButton from "../../components/Power-Button/power-button.component";
import SocialIcons from "../../components/Social-Icon/social-icons.component";
import { lightTheme } from "../../components/Themes/themes.component";
import Title from "../../components/Title/title.component";
import Particle from "../../components/Particle/particle.component";

import { Design, Develope } from "../../components/SVGs/allSVGs";
import { Box, Description, Main, InnerTitle } from "./my-skills.styles";

const MySkills = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <Logo theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        <Particle theme="light" />

        <Main>
          <InnerTitle>
            <Design width={40} height={40} />
            Frontend Developer
          </InnerTitle>
          <Description>
            Meticulous web developer with a focus on the front-end and passion
            for responsive website design and a firm delivering the mobile-first
            approach. I also have experience working with React.js for +2 years.
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>
              Javascript, OOP, Functional Programming, Testing, Git, NodeJS,
              ReactJS, CSS & CSS-in-JS, Styled Components, Tailwind, Material
              UI, Ant Design, React Router, React Hooks,React Redux (Thunk &
              Saga), NextJs, GraphQL.
            </p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>VScode, Github, Postman etc.</p>
          </Description>
        </Main>

        <Main>
          <InnerTitle>
            <Develope width={40} height={40} /> Backend Developer
          </InnerTitle>
          <Description>
            Meticulous Backend web developer, I also have experience working with Django for +1 year.
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>Python, Django, REST-API, Django-rest-auth, Celery, Payment, Site-Translation</p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>VScode, Github, Postman etc.</p>
          </Description>
        </Main>
        <Title text="SKILLS" top="80%" right="30%" />
      </Box>
    </ThemeProvider>
  );
};

export default MySkills;
