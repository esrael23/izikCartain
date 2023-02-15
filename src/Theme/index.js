
import { ThemeProvider, createTheme } from '@mui/material/styles';


export const Colors ={
  primary: "#D29F22",
  secondary: "#B88C1D",
  success: '#916F17',
  info: "#FAEBE1",
  danger: "#523E0D",
  warning: '#ffc107',
  dark: '0e1b20',
  light: '#aaa',


  // grays

  dim_gray: '#696969',


  // solid color
  white: '#fff',
  black: '#000',
};

const theme = createTheme ({
  palette: {
    primary: {
      main: Colors.primary
    },
    secondary: {
      main: Colors.secondary
    },
    danger: {
      main: Colors.danger
    },
    success: {
      main: Colors.success
    },
    black: {
      main: Colors.black
    },
    info:{
      main: Colors.info
    }
  }

});

export default theme;