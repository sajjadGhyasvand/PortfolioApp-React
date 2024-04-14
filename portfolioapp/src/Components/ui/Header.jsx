import {AppBar, Button, Toolbar,Typography} from "@mui/material";
import  {styled} from "@mui/material/styles";

const  CustomizedButton = styled(Button)`
 color: lime;
`

const Header = () => {
    return(
        <>
            <AppBar>
              <Toolbar>
                  <Typography variant="h4" sx={{marginLeft:10}}>
                      وب سایت شخصی
                  </Typography>
                   <CustomizedButton variant="dashed" color="secondary">کلیک کنید</CustomizedButton>
                    <Button variant="dashed" color="secondary">  دکمه دوم</Button>
                </Toolbar>
          </AppBar>
        </>
    )
}
export default Header;