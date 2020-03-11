import React from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';

import { makeStyles, withStyles, withTheme} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { FixedSizeList } from 'react-window';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

import { theme } from '../theme'
import * as utils from './utils';
import * as hooks from './hooks';


const maxGuess = 30; 
const useStyles = theme => ({
  fillH: {
    height: '100%',
  },
  board: {
    display: 'flex',
    flexFlow: 'column',
    height: '100%',
    width: '100%',
    backgroundColor: theme.palette.board,
  },
  guess: {
    padding: 20,
    color: theme.palette.gamePrimary,
    height: '100%',
    fontSize: 30,
    letterSpacing: 3,
  },
  lastGuess: {
    display: 'inline',
    color: theme.palette.gameSecondary,
    fontSize: 30,
  },
  noGuess: {
    display: 'inline',
    color: theme.palette.gameTertiary,
    fontSize: 30,
  },
  move: {
    padding: 50,
  },
  match: {
  },
});


class Game extends React.Component {

  constructor(props) {
    super(props);
    this.bong = utils.generateBong();
    this.state = {
      history: [],
      step: 0,
      guess: "",
      done: false,
    }

  }

  handleKey (key) {
    const guess = this.state.guess;
    const history = this.state.history;
    switch (key) {
      case 'backspace':
        if (guess.length == 0) return; 
          this.setState({guess: guess.substring(0,guess.length-1)});
        break;

      case 'enter':
        try {
          const parsed = utils.checkSubmitGuess(guess, history);
          this.setState({
            history: history.concat([parsed]),
            guess: "",
            step: this.state.step + 1,
          });
        } catch (err) {
          console.log(err);
        }
        const correct = utils.isCorrectGuess(guess, this.bong);
        if (correct) {
          this.setState({done: true});
          console.log("DONE");
        }
        break;

      default:
        try {
          if (guess.length >= 4) return;
          utils.checkChangeGuess(guess + key, history);
          this.setState({guess: guess + key});
        }
        catch(err) {
          console.log(err); 
        }
    }
  }

  done () {
  }

  reset () {
    this.setState({
      history: [],
      step: 0,
      guess: "",
      done: false,
    });
  }

  render() {
    const { classes } = this.props;
    const history = this.state.history;
    const guess = this.state.guess;

    let moves = history.map((move, step) => {
      return (
        <Box className={classes.guess}>
          {move} 
        </Box>
      );
    });

    let current = 
      <Box className={classes.guess}>
        {guess.slice(0, guess.length-1)}
        <Typography className={classes.lastGuess}>{guess[guess.length-1]}</Typography>
        {"_".repeat(4 - guess.length)}
      </Box>

    return (
      <Grid container spacing={5} justify="flex-start" className={classes.fillH}>
        <KeyboardEventHandler
          handleKeys={['alphanumeric', 'backspace', 'enter']}
          onKeyEvent={(key, e) => this.handleKey(key)}
        />
        <Box clone order={{xs: 2, sm: 1}}>
          <Grid item xs={12} sm={5}>
            <Paper className={classes.board}>
              {moves}
              {current}
            </Paper>
          </Grid>
        </Box>
        <Box clone order={{xs: 1, sm: 2}}>
          <Grid item xs={12} sm={7}>
            Rules
          </Grid>
        </Box>
      </Grid>
    );
  }
}

export default withStyles(useStyles)(Game)
              //{AllMoves(history, guess, classes)}
