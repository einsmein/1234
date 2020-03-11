import { Route, BrowserRouter as Router } from 'react-router-dom'
import React from 'react';

import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { theme, GlobalCss } from './theme';

import Tab from './components/tab';
import Game from './components/game';


const useStyles = makeStyles(theme => ({
  fillH: {
    height: '100%',
  },
}));

export default function() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalCss/>
        <Tab>
          This is routing
          <Route exact path="/game" component={Game} />
          <Route path="/compete" component={() => {return 1}} />
        </Tab>
      </Router>
    </ThemeProvider>
  );
}
