import React from 'react';
import { useHistory, useLocation } from "react-router-dom";

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Router from '../router'
import theme from '../theme'

const useStyles = makeStyles(theme => ({
  page: {
    flexGrow: 1,
    backgroundColor: 'transparent',
    display: 'inline-block',
    height: '100%',
    width: '100%',
  },
  table: {
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
  fill: {
    width: '100%',
    height: '100%',
  },
}));

export function TabPanel(props) {
  const { children, ...other } = props;
  const classes = useStyles();

  return (
    <Typography
      component="div"
          role="tabpanel"
      className={classes.fill}
      {...other}
    >
      {<Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
};



export default function VerticalTabs(props) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    history.push(newValue);
  };

  return (
    <div className={classes.page}>
      <table className={classes.table}>
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
                    <TabPanel className={classes.tabPanel}>
                      {props.children} 
                    </TabPanel>
          </td>
      </table>
    </div>
  );
}

