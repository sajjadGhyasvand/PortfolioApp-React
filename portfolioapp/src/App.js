import {ThemeProvider,createTheme} from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import {CacheProvider} from "@emotion/react";
import {HelmetProvider,Helmet} from "react-helmet-async";
import createCache from "@emotion/cache";
import {IMPORT, prefixer} from "stylis";
import './App.css';
import {Button} from "@mui/material";
import Header from  "./Components/ui/Header"
//create custom theme
const theme = createTheme({
    direction: "rtl",
    typography:{
        fontFamily : "Vazir , roboto",
    }
});
const cacheRTL = createCache({
    key:"muirtl",
    stylisPlugins:[prefixer, rtlPlugin],
});
function App() {
  return (
      <CacheProvider value={cacheRTL}>
          <ThemeProvider theme={theme}>
              <HelmetProvider>
                  <Helmet>
                      <title>وب سایت شخصی سجاد غیاثوند</title>
                  </Helmet>
                 <Header />
              </HelmetProvider>
          </ThemeProvider>
      </CacheProvider>


  );
}

export default App;
