import {grey} from "@mui/material/colors";
import Grid from "@mui/material/Unstable_Grid2";

const SideBarContainer = ({children}) => {
    return(
        <Grid xs={0} sm={0} md={3} lg={2} xl={2} sx={{backgroundColor: grey[900],height:"100vh",overflowY:"auto",overflowX:"hidden"}}>
            {children}
        </Grid>
    )
}

export default SideBarContainer;
