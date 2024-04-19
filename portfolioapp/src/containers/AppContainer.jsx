
import {useState} from "react";
import {Typography,Box} from "@mui/material"
import MainLayout from "../layouts/MainLayout";
import Sidebar from "../Components/sidebar/Sidebar";
import PagesContainer from "./PagesContainer";
import Page from "../pages/components/Page";
import SidebarContainer from "./SidebarContainer";
import MainContext from "../context"
import DrawerActionButton from "../Components/drawer/DrawerActionButton";
function AppContainer() {
    const [pageNumber,setPageNumber] = useState(0);
    const [drawerOpen,setDrawerOpen] = useState(false);
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
                    {/*  */}
                      <Box sx={{
                          backgroundImage: `url(${require("../assets/bg01.jpeg")})`,
                          backgroundPosition:"center",
                          backgroundRepeat:"no-repeat",
                          height:"100vh",
                          backgroundSize:"Cover"
                      }}>
                          <Typography variant="h5" sx={{textAlign:'center'}} color='whitesmoke'>
                              صفحه اصلی
                          </Typography>
                      </Box>
                  </Page>
                  <Page pageNumber={pageNumber} index={1}>
                      <Typography variant="h5" sx={{textAlign:'center'}}>
                          درباره من
                      </Typography>
                  </Page>
                  <Page pageNumber={pageNumber} index={2}>
                      <Typography variant="h5" sx={{textAlign:'center'}}>
                          رزومه من
                      </Typography>
                  </Page>
                  <Page pageNumber={pageNumber} index={3}>
                      <Typography variant="h5" sx={{textAlign:'center'}}>
                          نمونه کارها
                      </Typography>
                  </Page>
                  <Page pageNumber={pageNumber} index={4}>
                      <Typography variant="h5" sx={{textAlign:'center'}}>
                          نظرات دانشجویان
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
