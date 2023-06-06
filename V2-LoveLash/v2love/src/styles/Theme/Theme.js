'use client'
import { createTheme, ThemeOptions } from "@mui/material/styles";


const theme = createTheme({
  palette: {
    primary: {
      main: "#e98ec6",
      light: "#e9c0a0",
    },
    secondary: {
      main: "#000000",
      light: "#28282B",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#000000",
    },
    warning: {
      main: "#F2CD5C",
    },
    error: {
      main: "#F16767",
    },
  },
  // list colors
  // #e98ec6 , #e9c0a0 , #000000 , #28282B , #FFFFFF , #F2CD5C , #F16767

  typography: {
    fontFamily: [
      "Poppins",
      "Bebas Neue",
      "brilliant",
      "Roboto",
      "Arial",
      "sans-serif",
    ].join(","),
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [
          {
            fontFamily: 'brilliant',
            fontStyle: 'normal',
            fontWeight: 700,
            src: `url('src/Theme/Font/brilliant/brilliant.ttf') format('truetype')`,
          },
          {
            fontFamily: 'Bebas Neue',
            fontStyle: 'normal',
            fontWeight: 400,
            src: `url('src/Theme/Font/BebasNeue/BebasNeue-Regular.ttf') format('truetype')`,
          },
          {
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 400,
            src: `url('src/Theme/Font/Poppins/Poppins-Regular.ttf') format('truetype')`,
          },
        ],
      },
    },

    h1: {
      fontFamily: "Bebas Neue",
      fontSize: "3rem",
      fontWeight: 700,
      lineHeight: 1.167,
      letterSpacing: "0em",
    },
    h2: {
      fontFamily: "Bebas Neue",
      fontSize: "2.5rem",
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: "0em",
    },
    h3: {
      fontFamily: "Poppins",
      fontSize: "2rem",
      fontWeight: 700,
      lineHeight: 1.167,
      letterSpacing: "0em",
    },
    h4: {
      fontFamily: "Poppins",
      fontSize: "1.5rem",
      fontWeight: 700,
      lineHeight: 1.235,
      letterSpacing: "0em",
    },
    h5: {
      fontFamily: "Poppins",
      fontSize: "1.25rem",
      fontWeight: 700,
      lineHeight: 1.6,
      letterSpacing: "0em",
    },
    h6: {
      fontFamily: "Poppins",
      fontSize: "1rem",
      fontWeight: 700,
      lineHeight: 1.75,
      letterSpacing: "0em",
    },
    subtitle1: {
      fontFamily: "Poppins",
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.75,
      letterSpacing: "0em",
    },
    subtitle2: {
      fontFamily: "Poppins",
      fontSize: "0.875rem",
      fontWeight: 500,
      lineHeight: 1.57,
      letterSpacing: "0.00735em",
    },
    body1: {
      fontFamily: "Poppins",
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
    },
    button: {
      fontFamily: "Poppins",
      fontSize: "0.875rem",
      fontWeight: 500,
      lineHeight: 1.75,
      letterSpacing: "0.02857em",
      textTransform: "uppercase",
    },
  },
} );

export default theme;
