import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { LightTheme } from "./Theme";
import { Design, Develope } from "./allSVG";
import LogoComponent from "./util/LogoComponent";
import SocialIcons from "./util/SocialIcons";
import ActivateButton from "./util/ActivateButton";
import ParticleComponent from "./util/ParticleComponent";


const Box = styled.div`
    background-color: ${props => props.theme.body};
    width:100vw; 
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

const Main = styled.div`
    border: 2px solid ${props => props.theme.text}; 
    color:  ${props => props.theme.text}; 
    background-color: ${props => props.theme.body};
    padding: 2rem;
    width: 30vw;
    height: 60vh;
    z-index: 3;
    line-height: 1.5;
    cursor: pointer; 

    font-family: 'Ubuntu Mono', monospace;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:hover{
        color: ${props => props.theme.body};
        background-color: ${props => props.theme.text};
    }

`

const Title = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(1em + 1vw);

    ${Main}:hover &{
        &>*{
        fill:${props => props.theme.body};
    }    }

    &>*:first-child{
        margin-right: 1rem;  
    }

`

const Description = styled.div`
    color: ${props => props.theme.text};
    font-size: calc(0.6em + 1vw);
    padding: 0.5rem 0;

    ${Main}:hover &{
        color:${props => props.theme.body};
    }

    strong {
        margin-bottom: 1rem;
        text-transform: uppercase;
    }

    ul,p {
        margin-left: 2rem;

    }
`


const MySkillsPage = () => {
    return (
        <ThemeProvider
            theme = {LightTheme}
        >
            <Box>
                <LogoComponent theme = {'light'}/>
                <SocialIcons theme = {'light'}/>
                <ActivateButton />
                
                <Main>
                    <Title>
                        <Develope width= {40} height = {40} />
                            Back End   
                    </Title>
                    <Description>
                        <strong>
                            What I work with: 
                        </strong>
                        <p>
                            Github, VSCode, Codepen
                        </p>
                    </Description>
                    <Description>
                        <strong> My Back End Frameworks and Languages: </strong>
                        <ul>
                            <li>
                                Python
                            </li>
                            <li>
                                Java
                            </li>
                            <li>
                                Django
                            </li>
                            <li>
                                Supabase
                            </li>
                            <li>
                                Spring Framework
                            </li>
                        </ul>
                    </Description>
                </Main>
                <Main>
                    <Title>
                        <Design width= {40} height = {40} />
                            Front End    
                    </Title>
                    <Description>
                        <strong>
                            My Front End Design Tools : 
                        </strong>
                        <ul>
                            <li>
                                React JS
                            </li>
                            <li>
                                Next JS
                            </li>
                            <li>
                                Tailwind CSS
                            </li>
                            <li>
                                Material UI
                            </li>
                            <li>
                                Redux
                            </li>
                            <li>
                                HTML and CSS
                            </li>
                            <li>
                                Styled Components
                            </li>
                            <li>
                                Framer-Motion
                            </li>
                        </ul>
                    </Description>
                </Main>
            </Box>
            
        </ThemeProvider>
        
    )
}

export default MySkillsPage; 