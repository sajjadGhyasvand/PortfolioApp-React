
import {useEffect, useState} from "react";
import {Typography,useMediaQuery} from "@mui/material";
import  {useTheme} from "@mui/material/styles";
import MainLayout from "../layouts/MainLayout";
import Sidebar from "../Components/sidebar/Sidebar";
import PagesContainer from "./PagesContainer";
import Page from "../pages/components/Page";
import SidebarContainer from "./SidebarContainer";
import MainContext from "../context"
import DrawerActionButton from "../Components/drawer/DrawerActionButton";
import {Home, About, Resume, Course,Comment} from "../pages";
function AppContainer() {
    const [pageNumber,setPageNumber] = useState(0);
    const [drawerOpen,setDrawerOpen] = useState(false);
    const  theme = useTheme();
    const  isMdUp = useMediaQuery(theme.breakpoints.up("md"));
    useEffect(() => {
        if (isMdUp){
            setDrawerOpen(false);
        }
    }, [isMdUp]);
    const handlePageNumber = (event, newValue) => {
        setPageNumber(newValue);
    };
  return (
      <MainContext.Provider value={{ pageNumber, handlePageNumber, drawerOpen, setDrawerOpen }}>
          <MainLayout>
              <SidebarContainer>
                  <Sidebar />
              </SidebarContainer>
              <DrawerActionButton />
              <PagesContainer>

                      <Page pageNumber={pageNumber} index={0}>
                         <Home helmetTitle={"وب سایت شخصی سجاد غیاثوند "}/>
                      </Page>
                      <Page pageNumber={pageNumber} index={1}>
                          <Typography variant="h5" sx={{textAlign:'center'}}>
                              <About helmetTitle={"وب سایت شخصی | درباره من "}/>
                          </Typography>
                      </Page>
                      <Page pageNumber={pageNumber} index={2}>
                         <Resume helmetTitle={"وب سایت شخصی | روزومه من "}/>
                      </Page>
                      <Page pageNumber={pageNumber} index={3}>
                          <Typography variant="h5" sx={{textAlign:'center'}}>
                              <Course helmetTitle={"وب سایت شخصی | نمونه کار من "}/>
                          </Typography>
                      </Page>
                      <Page pageNumber={pageNumber} index={4}>
                          <Typography variant="h5" sx={{textAlign:'center'}}>
                              <Comment helmetTitle={"وب سایت شخصی | نظرات   "}/>
                          </Typography>
                      </Page>
                      <Page pageNumber={pageNumber} index={5}>
                          <Typography variant="h5" sx={{textAlign:'center'}}>
                              ارتباط با من
                          </Typography>
                      </Page>


              </PagesContainer>
          </MainLayout>
      </MainContext.Provider>
  );
}

export default AppContainer;
