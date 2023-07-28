import React,{ PureComponent, useContext, useState, useEffect} from 'react';
import {ThemeContext} from '../../contexts/theme.context'
import {
	LogoDiv,
    ContentDiv,
    DescriptionDiv,
    TitleDiv,
    LeftDiv,
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
	const [loading , setLoading ] = useState(false)

	return(
		<ContentDiv>
            <LogoDiv>
                <img src={fmp} width='250' height='250'/>
            </LogoDiv>
            <TitleDiv>
                <h1>FMP</h1>
            </TitleDiv>
            <DescriptionDiv>
                <div>
                    <h2>Technologies</h2>
                    <h3>React</h3>
                    <h3>Node</h3>
                    <h3>Firebase</h3>
                    <h3>Google Auth</h3>
                    <h3>Express</h3>
                    <h3>Styled Components</h3>
                </div>
                <div>
                    
                </div>
                <RightDiv>
                    <h3>A webapp to help missionaries with their fundraising 
                        process. Users can upload their contacts, log donations, 
                        and analyze data. Built with a task management system that 
                        generates new tasks based on the data uploaded.</h3>
                </RightDiv>
                
            </DescriptionDiv>
            <LinksDiv>
                <LinkButton to="https://fmp-demo.onrender.com/" target="_blank" rel="noopener noreferrer">Try Demo</LinkButton>
                <LinkButton to="https://fmp.onrender.com/" target="_blank" rel="noopener noreferrer" style={{background: 'none', color: currentTheme.fontSecond}}>Live Site</LinkButton>
                <IconLink to="https://github.com/kmgothman/FMP" target="_blank" rel="noopener noreferrer"><GitHub viewBox="0 0 100 100"width='50' height='50' fill={currentTheme.fontSecond} stroke={currentTheme.fontSecond} /></IconLink>
            </LinksDiv>
            <DemoContainer>
                <h3>Easy log in and authentication with Google popup</h3>
                <img src={logInDemo} alt="demo" />
            </DemoContainer>
            <DemoContainer>
                <h3>Upload donations and sync 'new donors' with existing contacts</h3>
                <img src={uploadDemo} alt="demo" />
            </DemoContainer>
            <DemoContainer>
                <h3>Add and complete tasks or they can be auto generated and synced with contacts when data is uploaded.</h3>
                <img src={tasksDemo} alt="demo" />
            </DemoContainer>
        </ContentDiv>
		
      
	);
}


export default FMP;