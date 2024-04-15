import {CacheProvider} from "@emotion/react";
import {ThemeProvider} from "@mui/material/styles";
import {theme} from "../ui/theme";
import {Helmet, HelmetProvider} from "react-helmet-async";
import createCache from "@emotion/cache";
import {prefixer} from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import Grid from "@mui/material/Unstable_Grid2";
import Sidebar from "../Sidebar";
import ContentContainer from "../ContentContainer";

const cacheRTL = createCache({
    key:"muirtl",
    stylisPlugins:[prefixer, rtlPlugin],
});
const MainLayout = ({children}) => {
    return(
        <CacheProvider value={cacheRTL}>
            <ThemeProvider theme={theme}>
                <HelmetProvider>
                    <Helmet>
                        <title>وب سایت شخصی سجاد غیاثوند</title>
                    </Helmet>
                    {/*Grid System*/}
                    <Grid container sx={{height:"100vh"}}>
                        {children}
                    </Grid>
                </HelmetProvider>
            </ThemeProvider>
        </CacheProvider>
    )
}

export default MainLayout;