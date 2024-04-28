import bg02 from "../assets/bg02.jpeg";
import {Box, Typography} from "@mui/material";
import Typed from "typed.js";
import {useCallback, useEffect, useRef, useState} from "react";
import {loadFull} from "tsparticles";
import Particles from "react-particles";
import {links,firefly} from "../constants/particles";
import TextTransition,{presets} from "react-text-transition";
import {Helmet} from "react-helmet-async";

const Home = ({helmetTitle}) => {
    const [index,setIndex] = useState(0);
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
           strings: ["سجاد غیاثوند"] ,
            typeSpeed: 110,
            backSpeed: 80,
            backDelay:50,
            showCursor:false,
        });
        const  stringTransition = setInterval(() => {setIndex(index => index +1)},3000);
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
            /*typedInfo.destroy();*/
            clearInterval(stringTransition)
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
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
           {/* <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={firefly}
            />*/}
            <Box component="div" sx={{display:"flex"}}>
            <Typography variant="h3" color='#F93c92'>
                {"  </"}
            </Typography>
            <Typography ref={nameEl} variant="h3" color='tomato'></Typography>
                <Typography variant="h3" color='#F93c92'>
                    {"  >"}
                </Typography>
            </Box>
            <Box component="div" sx={{display:"flex"}}>
                <TextTransition springConfig={presets.wobbly }>
                    <Typography ref={infoEl} variant="h4" color='whitesmoke' sx={{mt:4,textDecoration:"underline",textDecorationColor:"#F93c92"}}>
                        {strings[index % strings.length ]}
                    </Typography>
                </TextTransition>
                <Typography variant="h4" color="whitesmoke" sx={{mt:4, mr:1}}>من یک</Typography>
            </Box>

        </Box>
    )
}

export default Home;