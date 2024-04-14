import {Typography, Avatar, Divider, Box, Hidden,Tab, Tabs} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {grey} from "@mui/material/colors";
import {
    Copyright,
    FavoriteRounded,
    HomeRounded,
    FaceRounded,
    TextSnippetRounded,
    TerminalRounded,
    MessageRounded,
    ConnectWithoutContactRounded,
    CopyrightRounded
} from "@mui/icons-material";

const Sidebar = () => {
    return(
        <Grid xs={0} sm={0} md={3} lg={2} xl={2} sx={{backgroundColor: grey[900]}}>
            <Box sx={{
                justifyContent:"center",
                textAlign:"center",
                mt:2,
            }}>
                <Hidden mdDown={true}>
                    <Avatar
                        src={require("../../assets/avatar.jpg")}
                        variant="rounded"
                        sx={{height:200,width:200,margin:"0 auto"}}
                    >
                        SG
                    </Avatar>
                </Hidden>
                <Typography variant="h6" color="whitesmoke">سجاد غیاثوند</Typography>
                <Typography variant="caption" color="whitesmoke">برنامه نویس دات نت</Typography>

                <Divider variant="middle" color={grey[900]} sx={{mt:2}}/>

                <Tabs
                orientation="vertical"
                variant="scrollable"
                 scrollButton="auto"
                allowScrollButtonsMobile
                >
                    <Tab
                        label="صفحه اصلی"
                        icon={<HomeRounded />}
                        iconPosition="start"
                    />
                    <Tab
                        label="درباره من"
                        icon={<FaceRounded />}
                        iconPosition="start"
                    />
                    <Tab
                        label="رزومه من"
                        icon={<TextSnippetRounded />}
                        iconPosition="start"
                    />
                    <Tab
                        label="نمونه کارها"
                        icon={<TerminalRounded />}
                        iconPosition="start"
                    />
                    <Tab
                        label="نظرات"
                        icon={<MessageRounded />}
                        iconPosition="start"
                    />
                    <Tab
                        label="ارتباط با من"
                        icon={<ConnectWithoutContactRounded />}
                        iconPosition="start"
                    />
                </Tabs>
                <Divider variant="middle" color={grey[900]} sx={{mt:2}}/>
                <Box
                sx={{
                    flexGrow:1,
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"end",
                    alignItems :"center",
                    height:100
                }}
                >
                    <Typography variant="subtitle2" color="whitesmoke">
                        <FavoriteRounded sx={{verticalAlign:"middle",color:"tomato",height:20}} />
                        طراحی شده با {" "}
                    </Typography>
                    <Typography variant="caption" color="whitesmoke" sx={{mt:2}}>
                        <CopyrightRounded sx={{verticalAlign:"middle",height:16}}  />
                        کپی رایت 1403
                    </Typography>
                </Box>
            </Box>
         </Grid>
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