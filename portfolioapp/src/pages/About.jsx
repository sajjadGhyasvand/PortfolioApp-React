import {Box,Typography,Card,CardContent, Divider, Chip, Avatar} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Devinfo from "./components/Devinfo";
import avatar from "../assets/avatar.jpg";
import { CodeRounded, KeyboardArrowLeftRounded} from "@mui/icons-material";

const  About = () => {
    return(
        <Card sx={{height:"100vh",backgroundColor:"whitesmoke"}}>
            <CardContent>
                <Grid container sx={{mx:3}}>
                    <Grid xs={12} sm={12} md={8} lg={8} xl={8}>
                        <Divider textAlign="right">
                            <Chip icon={<CodeRounded/>} color="primary" label={
                                <Typography variant="body1" color="black" sx={{textAlign:"center"}}>
                                    برنامه نویس .Net
                                </Typography>
                            } sx={{p:3}} />
                        </Divider>
                        <Devinfo>نام و نام خانوادگی : سجاد غیاثوند</Devinfo>
                        <Devinfo>سن :29</Devinfo>
                        <Devinfo>شهر :قزوین</Devinfo>
                        <Devinfo>sajgh1995@hotmail.com:آدرس ایمیل</Devinfo>
                    </Grid>
                    <Grid xs={0} sm={0} md={4} lg={4} xl={4}>
                        <Avatar src={avatar} variant="rounded" sx={{height:250,margin:"0 auto", width:250,display: {
                                xl: "block",
                                lg: "block",
                                md: "block",
                                sm: "none",
                                xs: "none",
                            }
                            }}>SG</Avatar>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default About;