import { Typography} from "@mui/material";
import avatar from "../../assets/avatar.jpg"
import  {RandomReveal} from "react-random-reveal";
import  {alphabetPersian} from  "../../constants/AlphabetPersian";
import {CustomAvatar} from "../common/index";
import SocialMediaIcons from "./SocialMediaIcons";
const SidebarHeader = () => {
    return(
        <>
            <CustomAvatar avatar={avatar} size={200} fallback="SG"/>
            <Typography variant="h6" color="#F93c92">
                <RandomReveal isPlaying characters="سجاد غیاثوند"  duration={4} characterSet={alphabetPersian} />
            </Typography>
            <Typography variant="caption" color="whitesmoke">برنامه نویس دات نت</Typography>
           {/* Social Media ICons */}
            <SocialMediaIcons/>
        </>
    );
};

export default SidebarHeader;