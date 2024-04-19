import SidebarContent from "./SidebarContent";
import SidebarDrawer from "../drawer/SidebarDrawer";

const Sidebar = () => {

    return(
            <>
              <SidebarContent />
              <SidebarDrawer />
            </>
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