import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    // secondary #FFB4B4
    // BackGround #000000
    // Text #FFFFFF
    // tertiary #F2CD5C

    palette: {
        primary: {
            main: "#FFB4B4",
        
        },
        secondary: {
            main: "#000400",
            light: "#28282B",
            
        },
        text: {
            primary: "#FFFFFF",
        },
        warning: {
            main: "#F2CD5C",
        },
        error: {
            main: "#F16767",
        },


    },
});


export default theme;

