import { createTheme } from '@mui/material/styles';
import { blue, red, amber} from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[700],
    },
    secondary: {
      main: red[900],
    },
    tertiary: {
        main: amber[200],
    },
  },
});

export default theme 