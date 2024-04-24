import {Avatar, IconButton, Typography,Box} from "@mui/material";
import avatar from "../../assets/avatar.jpg"
import  {RandomReveal} from "react-random-reveal";
import  {alphabetPersian} from  "../../constants/AlphabetPersian";
import  {GitHub, Telegram, Instagram, WhatsApp} from "@mui/icons-material";
import {IconBase} from "react-icons";
const SidebarHeader = () => {
    return(
        <>
            <Avatar
                src={avatar}
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
            <Typography variant="h6" color="#F93c92">
                <RandomReveal isPlaying characters="سجاد غیاثوند"  duration={4} characterSet={alphabetPersian} />
            </Typography>
            <Typography variant="caption" color="whitesmoke">برنامه نویس دات نت</Typography>
            <Box component="div" sx={{m:"0 auto", textAlign:"center",}}>
                <IconButton aria-label="Github">
                    <a href="http://github.com/sajjad-ghyasvand" target="_blank" rel="noopener noreferrer">
                        <GitHub sx={{color: "lightgray"}}/>
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <Telegram sx={{color: "blue"}}/>
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <WhatsApp sx={{color: "green"}}/>
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <Instagram sx={{color: "pink"}}/>
                    </a>
                </IconButton>
            </Box>
        </>
    );
};

export default SidebarHeader;