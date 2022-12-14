import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
// import { Container } from "tsparticles";
import ActivateButton from "../components/util/ActivateButton";
import { YinYang } from "./allSVG";
import LogoComponent from "./util/LogoComponent";
import SocialIcons from "./util/SocialIcons";
import Intro from "./Intro";
import { motion } from "framer-motion";


const MainContainer = styled.div`
    background: ${props => props.theme.body};
    width: 100vw;
    height: 100vh; 
    overflow: hidden; 
    position: relative;  

    h2, h3,h4,h5,h6 {
        font-family:'Karla', sans-serif; 
        font-weight: 500;  
    }

`

const Container = styled.div`
    padding: 2rem;
`

const Contact = styled(NavLink)`
    color: ${props => props.theme.text};
    position: absolute; 
    top:2rem; 
    right: calc(1rem + 2vw);
    text-decoration: none; 
    z-index: 3;
`
const MyWork = styled(NavLink)`
    color: ${props => props.theme.text};
    position: absolute; 
    top: 50%;
    justify-content: center;
    right: calc(1rem + 2vw);
    text-decoration: none; 
    z-index: 1;
`
const MySkills = styled(NavLink)`
    color: ${props => props.theme.text};
    text-decoration: none; 
    z-index: 1;
`
const AboutMe = styled(NavLink)`
    color: ${props => props.click ? props.theme.body : props.theme.text};
    text-decoration: none; 
    z-index: 1;
`

const BottomBar = styled.div`
    position: absolute; 
    bottom: 1rem; 
    left: 0;
    right: 0;
    width: 100%;

    display: flex;
    justify-content: space-evenly;

`
const rotate = keyframes`
    from {
        transform: rotate(0) ;
    }
    to{
        transform: rotate(360deg);
    }
`

const Center = styled.button`
    position: absolute;
    top: ${props => props.click ? '85%' : '50%'}; 
    left:${props => props.click ? '92%' : '50%'}; 
    transform: translate(-50%, -50%);

    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 1s ease ;

    &>:first-child {
        animation: ${rotate} infinite 1.5s linear;
    }

    &>:last-child {
        padding-top: 1.5rem;
        display: ${props => props.click ? 'none' : 'inline-block'}; 
    }

`
const DarkDiv = styled.div`
    position: absolute;
    background-color: #000;
    top: 0;
    bottom: 0;
    right: 50%;
    width: ${props => props.click ? '50%' : '0%'};
    height: ${props => props.click ? '100%' : '0%'};;
    z-index: 1;
    transition: height 0.5s ease, width 1s ease 0.5s;
`
const Main = () => {

    const [click, setClick] = useState(false); 

    const handleClick = () => setClick(!click)
    return (
        <MainContainer>
            <DarkDiv click = {click} />
                <Container>
                    <ActivateButton />
                    <LogoComponent theme ={click ? 'dark' : 'light'}/>
                    <SocialIcons theme ={click ? 'dark' : 'light'} />
                    
                    <Center click = {click}>
                        <YinYang onClick = {()=>handleClick()} width = {click ? 120 : 200} height = {click ? 120 : 200} fill = 'currentColor' />
                        <span>
                            Click Here!
                        </span>
                    </Center>
                    <Contact target ="_blank" to={{pathname:"mailto:gnilson314gmail.com"}} >
                        <motion.h3
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9 }}
                        >
                            Contact Me! 
                        </motion.h3>
                    </Contact>
                    <MyWork click = {click} to="/work" >
                        <motion.h3
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9 }}
                        >
                                My Work 
                        </motion.h3>
                    </MyWork>
                    <BottomBar>
                        <AboutMe click = {click} to="/about" >
                            <motion.h3
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.9 }}
                            >
                                    About Me 
                            </motion.h3>
                        </AboutMe>
                        
                        <MySkills click = {click} to="/skills" >
                        <motion.h3
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9 }}
                        >
                                My Skills 
                        </motion.h3>
                        </MySkills>
                    </BottomBar>
                </Container>
                {click ? <Intro click = {click} /> : null}
        </MainContainer>
    )
}

export default Main; 