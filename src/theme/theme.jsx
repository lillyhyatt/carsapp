import { createTheme } from '@mui/material/styles';
import { green, purple, grey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
      contrastText: '#fff',
    },
    secondary: {
      main: green[500],
      contrastText: grey[900],
    },
  },
});

export default theme;