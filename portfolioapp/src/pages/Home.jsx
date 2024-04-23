import bg02 from "../assets/bg02.jpeg";
import {Box, Typography} from "@mui/material";
import Typed from "typed.js";
import {useCallback, useEffect, useRef} from "react";
import {loadFull} from "tsparticles";
import Particles from "react-particles";
import {links,firefly} from "../constants/particles";
import TextTransition,{presets} from "react-text-transition";
const Home = () => {
    const particlesInit = useCallback(async (engine) => {
        await  loadFull(engine);
    },[]);
    const particlesLoaded = useCallback(async container => {
        await  console.log(container);
    },[]);
    const strings = [
        "برنامه نویس هستم",
        "عاشق کد هستم",
    ];
    const  nameEl = useRef(null);
    const infoEl = useRef(null);
    useEffect(() => {
        const typedName = new Typed(nameEl.current,{
           strings: ["[[سجاد غیاثوند]]"] ,
            typeSpeed: 50,
            backSpeed: 20,
            backDelay:10,
            showCursor:false,
        });
        /*const typedInfo = new Typed(infoEl.current, {
           strings:strings,
            startDelay:1500,
            typeSpeed:80,
            backSpeed:50,
            backDelay:50,
            loop:true,
            showCursor:false,
        });*/

        return () => {
            typedName.destroy();
            typedInfo.destroy();
        }
    }, []);

    return(
        <Box sx={{
            backgroundImage: `url(${bg02})`,
            backgroundPosition:"center",
            backgroundRepeat:"no-repeat",
            height:"100vh",
            backgroundSize:"Cover",
            display : "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems:"center",
        }}>
           {/* <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={firefly}
            />*/}
            <Typography ref={nameEl} variant="h3" color='tomato'></Typography>
            <Typography ref={infoEl} variant="h4" color='whitesmoke' sx={{textDecoration:"underline",textDecorationColor:"#"}}>
                من برنامه نویس هستم
            </Typography>
        </Box>
    )
}

export default Home;