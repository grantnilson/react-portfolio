import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { DarkTheme } from "./Theme";

import LogoComponent from "./util/LogoComponent";
import SocialIcons from "./util/SocialIcons";
import ActivateButton from "./util/ActivateButton";
import ParticleComponent from "./util/ParticleComponent";

import astronaut from "../assets/Images/spaceman.png"

const Main = styled.div`
    border: 2px solid ${props => props.theme.text};
    color: ${props => props.theme.text};
    padding: 2rem; 
    width: 50vw; 
    height: 60vh; 
    z-index: 3;

    line-height: 1.5;
    display: flex;
    justify-content: center;
    align-items: center; 
    font-size: calc(0.6rem + 1vw);
    backdrop-filter: blur(4px);

    position:absolute; 
    left: calc(5rem + 5vw); 
    top: 10rem; 

    font-family: 'Ubuntu Mono', monospace;
    font-style: italic;
    
`

const Box = styled.div`
    background-color: ${props => props.theme.body};
    width:100vw; 
    height: 100vh;
    position: relative;
    overflow: hidden;
`
const float = keyframes`
    0% {transform: translateY(-10px)}
    50% {transform: translateY(15px) translateX(15px)}
    100% {transform: translateY(-10px)}
`
const Spaceman = styled.div`
    position: absolute; 
    top: 10%; 
    right: 5%;
    width: 20vw; 
    animation: ${float} 4s ease infinite; 
    img {
        width: 100%; 
        height: auto; 

    }
`


const AboutPage = () => {
    return (
        <ThemeProvider
            theme = {DarkTheme}
        >
            <Box>
                <LogoComponent theme = {'dark'}/>
                <SocialIcons theme = {'dark'}/>
                <ActivateButton />
                <ParticleComponent theme = {'dark'} />
                <Spaceman >
                    <img src = {astronaut} alt = "spaceman" />
                </Spaceman>
                <Main>
                    Hello! My name is Grant. I'm a full-stack developer from San José, California! 
                    <br /><br />
                    I'm passionate about building cool web applications for all sorts of use cases, from start-ups to eneterprise.
                    <br /><br />
                    You can contact me via the email link on the main page. Looking forward to connecting!
                </Main>
               
            </Box>
            
        </ThemeProvider>
        
    )
}

export default AboutPage; 