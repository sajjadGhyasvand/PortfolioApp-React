import {Box, IconButton} from "@mui/material";
import {GitHub, Instagram, Telegram, WhatsApp} from "@mui/icons-material";

const SocialMediaIcons = () => {
    return(
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
    )
}
export default  SocialMediaIcons;