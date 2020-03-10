import { Route, BrowserRouter as Router } from 'react-router-dom'
import React from 'react';

import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { theme, GlobalCss } from './theme';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { TabPanel } from './components/tab';
import Game from './components/game';

const useStyles = makeStyles(theme => ({
  page: {
    flexGrow: 1,
    backgroundColor: 'transparent',
    display: 'inline-block',
    height: '100%',
    width: '100%',
  },
  fill: {
    height: '100%',
    width: '100%',
  },
  cell: {
    border: '2px solid black',
    verticalAlign: 'top',
    padding: 0,
  },
  tabs: {
    minWidth: 120,
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
      <table className={classes.fill}>
          <td className={classes.cell}>
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
          </td>
          <td className={classes.cell}>
                    <TabPanel className={classes.fill}>


          <Route exact path="/game" component={Game} />
          <Route path="/compete" component={() => {return 1}} />


                    </TabPanel>
          </td>
      </table>
    </div>


      </Router>
    </ThemeProvider>
  );
}
     //   <Tab>
     //     This is routing
     //     <Route exact path="/game" component={Game} />
     //     <Route path="/compete" component={() => {return 1}} />
     //   </Tab>
