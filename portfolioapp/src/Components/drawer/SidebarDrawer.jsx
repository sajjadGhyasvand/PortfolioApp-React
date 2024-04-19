import {Drawer} from "@mui/material";
import SidebarContent from "../sidebar/SidebarContent";
import {useState,useContext} from "react";
import MainContext from "../../context"

const SidebarDrawer = () =>{
    const {drawerOpen, setDrawerOpen} = useContext(MainContext);
    return(
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
            <SidebarContent/>
        </Drawer>
    )
}
export default SidebarDrawer;