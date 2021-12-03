import React from 'react';
import { Route, Switch } from 'react-router';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './globalStyle';
import { lightTheme } from './components/Themes/themes.component';
import MainDirectory from './pages/Main-Directory/main-directory.component';
import About from './pages/About/about.component';
import MySkills from './pages/My-Skills/my-skills.component';
import Work from './pages/Work/work.component';


const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle/>
      <ThemeProvider theme={lightTheme}>

        <Switch>
          <Route exact path="/" component={MainDirectory} />
          <Route exact path="/about" component={About} />
          <Route exact path="/skills" component={MySkills} />
          <Route exact path="/work" component={Work} />
        </Switch>
        
      </ThemeProvider>
    </React.Fragment>
      
  )
    
}

export default App
