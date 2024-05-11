import {Typography} from "@mui/material";
import {KeyboardArrowLeftRounded} from "@mui/icons-material";

const devinfo = ({children}) =>{
    return(
        <Typography variant="body1" color="black" textAlign="left" sx={{mt:2}}>
            {children}
            <KeyboardArrowLeftRounded sx={{verticalAlign:"bottom", color:"primary.main"}}/>
        </Typography>
    );
}
export default devinfo;