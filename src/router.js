import { Route, BrowserRouter as Router } from 'react-router-dom'
import React from 'react';

import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { theme, GlobalCss } from './theme';

import CTab from './components/tab';
import Game from './components/game';


import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { TabPanel } from './components/tab';

const useStyles = makeStyles(theme => ({
  page: {
    flexGrow: 1,
    backgroundColor: 'transparent',
    display: 'table',
    height: '100%',
    width: '100%',
  },
  tabs: {
    minWidth: 120,
    width: 'auto',
    height: '100%',
    display: 'table-cell'
  },
  tab: {
    '&:active,&:hover': {
      outline: 'none',
    },
    '&.Mui-selected': {
      outline: 'none',
      border: 0,
    },
  },
  tabPanel: {
    width: '100%',
    height: '100%',
    display: 'table-cell',
    verticalAlign: 'top',
  },
}));

export default function() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalCss/>

        <div className={classes.page}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
          >
            <Tab className={classes.tab} disableRipple="true" label="Game" value="game" />
            <Tab className={classes.tab} disableRipple="true" label="Compete" value="compete" />
          </Tabs>
          <TabPanel className={classes.tabPanel}>
            <Route exact path="/game" component={Game} />
            <Route path="/compete" component={() => {return 1}} />
          </TabPanel>
        </div>
      </Router>
    </ThemeProvider>
  );
}
