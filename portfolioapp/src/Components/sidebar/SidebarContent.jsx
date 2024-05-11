import { Box, Divider, Tab, Tabs} from "@mui/material";
import {grey} from "@mui/material/colors";
import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";
import SidebarTabs from "./SidebarTabs";
const SidebarContent = () => {

    return(
        <Box
            sx={{
                justifyContent:"center",
                textAlign:"center",
                mt:2,
            }}>
            <SidebarHeader/>
            <Divider variant="middle" sx={{mt:1}}/>
            <SidebarTabs/>
            <Divider variant="middle"  sx={{mt:1}}/>
            <SidebarFooter/>
        </Box>
    )
}

export default SidebarContent;