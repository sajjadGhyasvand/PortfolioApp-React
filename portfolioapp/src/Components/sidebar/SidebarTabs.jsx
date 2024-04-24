import {Tab, Tabs} from "@mui/material";
import {grey} from "@mui/material/colors";
import {useContext} from "react";
import MainContext from "../../context"
import {tabsData} from "../Data/TabsData.Sideber"


const SidebarTabs = () => {
const {pageNumber,handlePageNumber,setDrawerOpen} = useContext(MainContext);
const data = tabsData();
    return(

        <Tabs
            orientation="vertical"
            variant="scrollable"
            scrollButton="auto"
            allowScrollButtonsMobile
            value={pageNumber}
            indicatorColor="secondary"
            textColor="secondary"
            onChange={handlePageNumber}
        >
            { data.map((tab,index) => (
                <Tab
                key={index}
                label={tab.label}
                icon={tab.icon}
                iconPosition="start"
                sx={{
                backgroundColor:grey[800],
                borderRadius:2,
                my:0.5,
                mx:1,
                "&.MuiTab-root": {
                    minHeight:50,
                }
            }}
            onClick={() => setDrawerOpen(false)}
            {...tab}
             />
                ))}

        </Tabs>
    )
}
export default SidebarTabs;