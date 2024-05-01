import {Box, Fab} from "@mui/material";
import {grey} from "@mui/material/colors";
import {MenuRounded} from "@mui/icons-material";
import {useContext} from "react";
import MainContext from "../context";
import {useTheme} from "@mui/material/styles";
import {WbSunnyOutlined,NightlightOutlined} from "@mui/icons-material";

const ThemeActionbutton = ({}) => {
    const theme = useTheme();
    const {handleThemeChange} = useContext(MainContext);
    return(
        <Box
            sx={{
                position:"absolute",
                display: {
                    xs:"block",
                    sm:"block",
                    md:"none",
                    lg:"none",
                    xl:"none",
                }
            }}
        >
            <Fab
                aria-label="Sidebar"
                size="small"
                variant="extended"
                color="secondary"
                onClick={handleThemeChange}
                sx={{ color:"whitesmoke", m: 2 }}
            >
                {theme.palette.mode === "dark" ? <WbSunnyOutlined sx={{mr:1}} /> : <NightlightOutlined sx={{mr:1}} />}
                {theme.palette.mode === "dark" ? "تم روز" : "تم شب"}
            </Fab>
        </Box>
    )
}
export default ThemeActionbutton;