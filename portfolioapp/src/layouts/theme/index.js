import{createTheme} from "@mui/material/styles";
import {blue,red} from "@mui/material/colors";
export const lightTheme = createTheme({
    direction: "rtl",
    palette:{
        mode:"light",
        primary:{
            main:"#80ed99"
        },
        secondary:{
            main:"#00b4d8"
        },
    },
    typography:{
        fontFamily : "tanha ,Vazir , roboto",
    }
});

export const darkTheme = createTheme({
    direction: "rtl",
    palette:{
        mode:"dark",
        primary:{
            main:"#8be9fd"
        },
        secondary:{
            main:"#bd93f9"
        },
    },
    typography:{
        fontFamily : "tanha ,Vazir , roboto",
    }
});