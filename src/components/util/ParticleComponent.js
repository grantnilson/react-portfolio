import React from "react";
import styled from "styled-components";
import Particles from "react-particles-js";

//particle config

import configDark from "../../config/particlesjs-config.json";
import configLight from "../../config/particlesjs-config-light.json"; 

const Box = styled.div`
    position: absolute;
    top:0; 
    right:0; 
    bottom: 0;
    z-index: 0;
`

const ParticleComponent = (props) => {
    return (
        <Box>
            <Particles params = {props.theme === "light" ? configLight : configDark}/>
        </Box>
    )
}

export default ParticleComponent; 