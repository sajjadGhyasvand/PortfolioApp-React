import {Avatar, Typography} from "@mui/material";

const SidebarHeader = () => {
    return(
        <>
            <Avatar
                src={require("../../assets/avatar.jpg")}
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
        </>
    )
}

export default SidebarHeader;