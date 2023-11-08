import React,{ PureComponent, useContext, useState, useEffect} from 'react';
import {ThemeContext} from '../../contexts/theme.context'
import { MediaContext } from '../../contexts/media.context';
import {
	LogoDiv,
    ContentDiv,
    DescriptionDiv,
    MobileDescriptionDiv,
    TitleDiv,
    RightDiv,
    LinksDiv,
    IconLink,
    LinkButton,
    DemoContainer
} from './indivprojects.styles'
import { ReactComponent as East} from '../../icons/east.svg'
import {Link} from 'react-router-dom'
import fmp from '../../icons/fmp.png'
import { ReactComponent as GitHub} from '../../icons/github.svg'
import logInDemo from './gifs/fmp/login-demo.gif'
import uploadDemo from './gifs/fmp/upload-demo.gif'
import tasksDemo from './gifs/fmp/tasks-demo.gif'


const FMP = () => {

	const { currentTheme } = useContext(ThemeContext)
    const { currentMedia } = useContext(MediaContext)

	return(
       
		<ContentDiv>
            <LogoDiv>
                <img src={fmp} width='250' height='250'/>
            </LogoDiv>
            <TitleDiv>
                <h1>FMP</h1>
            </TitleDiv>
            {currentMedia.isMobile ? <MobileDescriptionDiv>
                <div>
                    <h2>Technologies</h2>
                    <ul>
                        <li><p>React</p></li>
                        <li><p>Node</p></li>
                        <li><p>Firebase</p></li>
                        <li><p>Google Auth</p></li>
                        <li><p>Express</p></li>
                        <li><p>Styled Components</p></li>
                    </ul>
                </div>
                
                <RightDiv>
                    <p>A web app to help missionaries with their fundraising 
                        process. Users can upload their contacts, log donations, 
                        and analyze data. Built with a task management system that 
                        generates new tasks based on the data uploaded.</p>
                </RightDiv>
            </MobileDescriptionDiv> : <DescriptionDiv>
                <div>
                    <h2>Technologies</h2>
                    <ul>
                        <li><p>React</p></li>
                        <li><p>Node</p></li>
                        <li><p>Firebase</p></li>
                        <li><p>Google Auth</p></li>
                        <li><p>Express</p></li>
                        <li><p>Styled Components</p></li>
                    </ul>
                </div>
                
                <RightDiv>
                    <p>A web app to help missionaries with their fundraising 
                        process. Users can upload their contacts, log donations, 
                        and analyze data. Built with a task management system that 
                        generates new tasks based on the data uploaded.</p>
                </RightDiv>
                </DescriptionDiv>}
            <LinksDiv>
                <LinkButton to="https://fmp-demo.onrender.com/" target="_blank" rel="noopener noreferrer">Try Demo</LinkButton>
                <LinkButton to="https://fmp.onrender.com/" target="_blank" rel="noopener noreferrer" style={{background: 'none', color: currentTheme.fontSecond}}>Live Site</LinkButton>
                <IconLink to="https://github.com/kmgothman/FMP" target="_blank" rel="noopener noreferrer"><GitHub viewBox="0 0 100 100"width='50' height='50' fill={currentTheme.fontSecond} stroke={currentTheme.fontSecond} /></IconLink>
            </LinksDiv>
            <DemoContainer>
                <p>Easy log in and authentication with Google popup</p>
                <img src={logInDemo} alt="demo" />
            </DemoContainer>
            <DemoContainer>
                <p>Upload donations and sync 'new donors' with existing contacts</p>
                <img src={uploadDemo} alt="demo" />
            </DemoContainer>
            <DemoContainer>
                <p>Add and complete tasks or they can be auto generated and synced with contacts when data is uploaded.</p>
                <img src={tasksDemo} alt="demo" />
            </DemoContainer>
        </ContentDiv>
        
		
      
	);
}


export default FMP;