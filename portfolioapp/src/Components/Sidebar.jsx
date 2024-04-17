import {Drawer,Fab,Box} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {blueGrey, grey} from "@mui/material/colors";
import {useState} from "react";
import DrawerContent from "./DrawerContent";
import {MenuRounded} from "@mui/icons-material";

const Sidebar = ({value,handleChange}) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    return(
        <Grid xs={0} sm={0} md={3} lg={2} xl={2} sx={{backgroundColor: grey[900]}}>
            <Box
            sx={{display: {
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
                    onClick={() => setDrawerOpen(true)}
                    sx={{ backgroundColor: grey[500], m: 2 }}
                >
                    <MenuRounded/>
                </Fab>
            </Box>
            <DrawerContent value={value} handleChange={handleChange} />
            <Drawer
                open={drawerOpen}
                variant="temporary"
                onClose={() => setDrawerOpen(false)}
                anchor="right"
                sx={{
                    "& .MuiDrawer-paper":{
                    width:300
                        },
                    display:{
                        xs:"block",
                        sm:"block",
                        md:"none",
                        lg:"none",
                    }
            }}
            >
             <DrawerContent value={value} handleChange={handleChange}  setDrawerOpen={setDrawerOpen}/>
            </Drawer>
         </Grid>
    );
}

export default Sidebar;

/*label={
                            <div>
                                <Typography variant="subtitle2" color="white" >
                                    <HomeRounded sx={{verticalAlign:"middle",mx:2}} />
                                    خانه
                                </Typography>
                            </div>
                        }*/