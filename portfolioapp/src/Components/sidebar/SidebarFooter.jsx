import {Box, Typography} from "@mui/material";
import {CopyrightRounded, FavoriteRounded} from "@mui/icons-material";

const SidebarFooter = () => {
    return(
        <Box
            sx={{
                flexGrow:1,
                display:"flex",
                flexDirection:"column",
                justifyContent:"end",
                alignItems :"center",
                height:100
            }}
        >
            <Typography variant="subtitle2" color="whitesmoke">
                <FavoriteRounded sx={{verticalAlign:"middle",color:"tomato",height:20}} />
                طراحی شده با {" "}
            </Typography>
            <Typography variant="caption" color="whitesmoke" sx={{mt:2}}>
                <CopyrightRounded sx={{verticalAlign:"middle",height:16}}  />
                کپی رایت 1403
            </Typography>
        </Box>
    )
}
export default SidebarFooter;