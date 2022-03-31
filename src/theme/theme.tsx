import { createMuiTheme } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

export default createMuiTheme({
  typography: {
    fontFamily: `"Montserrat", "Arial", sans-serif`,
    fontSize: 12,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  palette: {
    primary: {
      dark: '#127b84',
      main: '#1BB1BD',
      light: '#48c0ca',
    },
    secondary: {
      dark: '#a74d76',
      main: '#EF6EAA',
      light: '#f28bbb',
    },
    background: {
      default: grey[200],
    },
    chatBubble: {
      default: '#F3F3F3',
      opposite: '#FFEDED',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '::-webkit-scrollbar': {
          width: 6,
        },
        '::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(0,0,0,0.2)',
        },
        '::-webkit-scrollbar-track': {
          backgroundColor: 'hsla(0,0%,100%,.1)',
        },
      },
    },
  },
});
