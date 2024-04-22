import {Box,Typography,Card,CardContent, Divider, Chip, Avatar} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Devinfo from "./components/Devinfo";
import avatar from "../assets/avatar.jpg";
import {CodeRounded, KeyboardArrowLeftRounded, SelfImprovementRounded} from "@mui/icons-material";
import Skill from "./components/Skill";
import {devSkills} from "../constants/skills";
const  About = () => {
    const  {htmlSkill,cssSkill,gitSkill,nodeSkill,reactSkill,jsSkill} = devSkills;
    return(
        <Card sx={{height:"100vh",backgroundColor:"whitesmoke"}}>
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
                        <Skill name={htmlSkill.name} icon = {htmlSkill.icon} color={htmlSkill.color} value={95} />
                        <Skill name={cssSkill.name} icon = {cssSkill.icon} color={cssSkill.color} value={95} />
                        <Skill name={gitSkill.name} icon = {gitSkill.icon} color={gitSkill.color} value={95} />
                        <Skill name={jsSkill.name} icon = {jsSkill.icon} color={jsSkill.color} value={95} />
                        <Skill name={reactSkill.name} icon = {reactSkill.icon} color={reactSkill.color} value={95} />
                        <Skill name={nodeSkill.name} icon = {nodeSkill.icon} color={nodeSkill.color} value={95} />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default About;