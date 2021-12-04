import React from 'react';
import { Route, Switch, useLocation } from 'react-router';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './globalStyle';
import { lightTheme } from './components/Themes/themes.component';
import MainDirectory from './pages/Main-Directory/main-directory.component';
import About from './pages/About/about.component';
import MySkills from './pages/My-Skills/my-skills.component';
import Work from './pages/Work/work.component';
import { AnimatePresence } from 'framer-motion';
import SoundBar from './components/SoundBar/sound-bar.component';


const App = () => {

  const location = useLocation()
  return (
    <React.Fragment>
      <GlobalStyle/>
      <ThemeProvider theme={lightTheme}>
        <SoundBar />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={MainDirectory} />
            <Route exact path="/about" component={About} />
            <Route exact path="/skills" component={MySkills} />
            <Route exact path="/work" component={Work} />
          </Switch>
        </AnimatePresence>
        
      </ThemeProvider>
    </React.Fragment>
      
  )
    
}

export default App
