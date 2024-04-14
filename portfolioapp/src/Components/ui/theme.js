import{createTheme} from "@mui/material/styles";
import {blue,red} from "@mui/material/colors";

export const theme = createTheme({
    direction: "rtl",
    palette:{
        mode:"dark",
        primary:{
            main:"#80ed99"
        },
        secondary:{
            main:"#00b4d8"
        },
    },
    typography:{
        fontFamily : "Vazir , roboto",
    },
    components:{
        MuiButtonBase:{
            defaultProps:{
                disableRipple: true,
            }
        },
        MuiButton:{
      variants:[
          {
              props: {variant: "dashed"},
              style: {
                  textTransform:"none",
                  border: `2px dashed ${blue[500]}`
              },
          },
          {
              props:{variant: "dashed",color:"secondary"},
              style:{
                  border: `2px dashed ${red[500]}`
              },
          },
        ],
      },
    },
});