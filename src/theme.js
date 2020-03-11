import { createMuiTheme, withStyles } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    board: '#EEEEEE',
    gamePrimary: '#000000',
    gameSecondary: '#EE1111',
    gameTertiary: '#777777',
  },
  status: {
    danger: 'orange',
  },
  typography: {
    fontFamily: [
      '"IBM Plex Mono"'
    ].join(','),
  },
  overrides: {
    MuiTab: {
      root: {
        textTransform: 'lowercase',
      },
    },
  },
});

export const GlobalCss = withStyles({
  '@global': {
    'html, body': {
      height: '100%',
      margin: 0,
      padding: '20px 0 0 10px',
    },
    '#root': {
      height: '100%',
    },
    '.MuiBox-root': {
      height: '100%',
      paddingBottom: '0 !important',
    },
  },
})(() => null);
