import {Box,Typography,Card,CardContent, Divider, Chip, Avatar,Tooltip} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {Skill} from "../Components/pages";
import avatar from "../assets/avatar.jpg";
import {CodeRounded, SelfImprovementRounded} from "@mui/icons-material";
import {devSkills} from "../constants/skills";
import {useEffect, useState} from "react";
import {Helmet} from "react-helmet-async";
import {devWorkInfo} from "../constants/details";
import CountUp from  "react-countup"
import {CustomAvatar} from "../Components/common";
import Devinfo from "../Components/pages/Devinfo";
const  About = ({helmetTitle}) => {
    const [javascript,setJavascript] = useState(0);
    const [html,setHtml] = useState(0);
    const [css,setCss] = useState(0);
    const [node,setNode] = useState(0);
    const [reactjs,setReactjs] = useState(0);
    const [git,setGit] = useState(0);
    useEffect(() => {
       const timer = setInterval(() => {
        setJavascript(oldProgress => {
            const diff = Math.random() * 10;
            return Math.min(oldProgress + diff , 82);
        });
           setHtml(oldProgress => {
               const diff = Math.random() * 10;
               return Math.min(oldProgress + diff , 90);
           });
           setReactjs(oldProgress => {
               const diff = Math.random() * 10;
               return Math.min(oldProgress + diff , 30);
           });
           setCss(oldProgress => {
               const diff = Math.random() * 10;
               return Math.min(oldProgress + diff , 70);
           });
           setGit(oldProgress => {
               const diff = Math.random() * 10;
               return Math.min(oldProgress + diff , 40);
           });
           setNode(oldProgress => {
               const diff = Math.random() * 10;
               return Math.min(oldProgress + diff , 5);
           });
       },100);
       return ()=>{
           clearInterval(timer);
       }
    });
    const  {htmlSkill,cssSkill,gitSkill,nodeSkill,reactSkill,jsSkill} = devSkills;
    return(
        <Card sx={{height:"100vh",backgroundColor:"whitesmoke",overflowY:"scroll"}}>
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
            <CardContent>
                <Grid container sx={{mx:3}}>
                    <Grid xs={12} sm={12} md={8} lg={8} xl={8}>
                        <Divider textAlign="right" sx={{
                                 "&::before, &::after" : {
                                     borderColor: "primary.main",
                                 },
                                }}>
                            <Chip icon={<CodeRounded/>} color="primary" label={
                                <Typography variant="body1" color="black" sx={{textAlign:"center"}}>
                                    برنامه نویس .Net
                                </Typography>
                            } sx={{p:3}} />
                        </Divider>
                        <Grid container>
                            <Grid
                                xs={4}
                                sm={4}
                                md={3}
                                lg={3}
                                sx={{
                                    mt: 3,
                                    display: {
                                        xs: "none",
                                        sm: "block",
                                        md: "block",
                                    },
                                }}
                            >
                                {devWorkInfo.map((item, index) => (
                                    <Box
                                        key={index}
                                        component="div"
                                        sx={{ width: 1, mb: 1 }}
                                    >
                                        <Tooltip
                                            title={item.tooltipTitle}
                                            placement="right"
                                            arrow
                                        >
                                            <Chip
                                                icon={item.icon}
                                                label={
                                                    <Typography
                                                        variant="body1"
                                                        color="whitesmoke"
                                                    >
                                                        <CountUp
                                                            start={0}
                                                            end={item.total}
                                                            duration={2}
                                                        />
                                                    </Typography>
                                                }
                                                sx={{
                                                    p: 2,
                                                    backgroundColor: item.color,
                                                    width: 1,
                                                }}
                                            />
                                        </Tooltip>
                                    </Box>
                                ))}
                            </Grid>
                            <Grid xs={12} sm={8} md={9} lg={9}>
                                <Devinfo>نام و نام خانوادگی : سجاد غیاثوند</Devinfo>
                                <Devinfo>سن :29</Devinfo>
                                <Devinfo>شهر :قزوین</Devinfo>
                                <Devinfo>sajgh1995@hotmail.com:آدرس ایمیل</Devinfo>
                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid xs={0} sm={0} md={4} lg={4} xl={4}>
                        <CustomAvatar avatar={avatar} size={250} fallback="SG"/>
                    </Grid>
                    <Grid sx={{width:1,mt:1}}>
                        <Divider textAlign="center" sx={{
                            "&::before, &::after" : {
                                borderColor: "secondary.main",
                            },
                        }}>
                            <Chip icon={<SelfImprovementRounded/>} color="secondary" label={
                                <Typography variant="body1" color="black" sx={{textAlign:"center"}}>
                                    مهارت های من
                                </Typography>
                            } sx={{p:3}} />
                        </Divider>
                        <Skill name={htmlSkill.name} icon = {htmlSkill.icon} color={htmlSkill.color} value={html} />
                        <Skill name={cssSkill.name} icon = {cssSkill.icon} color={cssSkill.color} value={css} />
                        <Skill name={gitSkill.name} icon = {gitSkill.icon} color={gitSkill.color} value={git} />
                        <Skill name={jsSkill.name} icon = {jsSkill.icon} color={jsSkill.color} value={javascript} />
                        <Skill name={reactSkill.name} icon = {reactSkill.icon} color={reactSkill.color} value={reactjs} />
                        <Skill name={nodeSkill.name} icon = {nodeSkill.icon} color={nodeSkill.color} value={node} />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default About;