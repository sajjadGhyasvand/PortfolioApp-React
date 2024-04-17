import {Avatar, Box, Divider, Tab, Tabs, Typography} from "@mui/material";
import {grey} from "@mui/material/colors";
import {
    ConnectWithoutContactRounded, CopyrightRounded,
    FaceRounded, FavoriteRounded,
    HomeRounded,
    MessageRounded,
    TerminalRounded,
    TextSnippetRounded
} from "@mui/icons-material";

const DrawerContent = ({value, handleChange, setDrawerOpen}) => {
    const tabProps = (index) => {
        return {
            id: `sidebar-tab-${index}`,
            "aria-controls": `tabpanel-${index}`,
        };
    };
    return(
        <Box
            sx={{
                justifyContent:"center",
                textAlign:"center",
                mt:2,
            }}>
                <Avatar
                    src={require("../assets/avatar.jpg")}
                    variant="rounded"
                    sx={{height:200,width:200,margin:"0 auto",display:{
                        xl:"block",
                        lg:"block",
                        md:"block",
                        sm:"none",
                        xs:"none",
                        }}}
                >
                    SG
                </Avatar>
            <Typography variant="h6" color="whitesmoke">سجاد غیاثوند</Typography>
            <Typography variant="caption" color="whitesmoke">برنامه نویس دات نت</Typography>

            <Divider variant="middle" color={grey[900]} sx={{mt:2}}/>

            <Tabs
                orientation="vertical"
                variant="scrollable"
                scrollButton="auto"
                allowScrollButtonsMobile
                value={value}
                onChange={handleChange}
            >
                <Tab
                    label="صفحه اصلی"
                    icon={<HomeRounded />}
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
                    {...tabProps(0)}
                />
                <Tab
                    label="درباره من"
                    icon={<FaceRounded />}
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
                    {...tabProps(1)}
                />
                <Tab
                    label="رزومه من"
                    icon={<TextSnippetRounded />}
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
                    {...tabProps(2)}
                />
                <Tab
                    label="نمونه کارها"
                    icon={<TerminalRounded />}
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
                    {...tabProps(3)}
                />
                <Tab
                    label="نظرات"
                    icon={<MessageRounded />}
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
                    {...tabProps(4)}
                />
                <Tab
                    label="ارتباط با من"
                    icon={<ConnectWithoutContactRounded />}
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
                    {...tabProps(5)}
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
    )
}

export default DrawerContent;