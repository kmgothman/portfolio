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
    DemoContainer,
    ResearchContainer,
    AboutContainer,
    StatContainer
} from './indivprojects.styles'
import { ReactComponent as East} from '../../icons/east.svg'
import {Link} from 'react-router-dom'
import fmp from '../../icons/fmp.png'
import { ReactComponent as GitHub} from '../../icons/github.svg'
import logInDemo from './gifs/fmp/login-demo.gif'
import uploadDemo from './gifs/fmp/upload-demo.gif'
import tasksDemo from './gifs/fmp/tasks-demo.gif'
import visualization from './gifs/fmp/data-visualization.gif'
import infographic from '../../icons/fmp-infographic.jpg'
import percentage from '../../icons/75img.png'
import people from '../../icons/people.png'
import consolodation from '../../icons/consolodation.png'
import features from '../../icons/features.png'


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
                    <p>A web app to help missionaries and non-profits with their fundraising 
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
            <AboutContainer>
                <h2>About</h2>
                <p>FMP is a specialized web application designed to empower missionaries in
                     their fundraising endeavors. From its inception, I undertook extensive market 
                     research to ensure its relevance and effectiveness, shaping user-centric design 
                     decisions. Building upon this foundation, I crafted robust APIs to seamlessly 
                     integrate FMP with external services, fostering a dynamic and interconnected 
                     user experience. My commitment to excellence is further reflected in the 
                     implementation of CI/CD practices, guaranteeing a streamlined and continually
                      evolving platform for missionaries to navigate their fundraising journeys with
                       ease.</p>
            </AboutContainer>
            <ResearchContainer>
                <h2>KEY INSIGHTS:</h2>
                <h1>Market Research</h1>
                <p>To better understand the problem, I conducted research by surveying and interviewing
                     missionaries about their experience fundraising and their frustrations with their
                      current software. Here is what we found.</p>
                
                <StatContainer>
                    <div>
                        <h3>DISCONTENT:</h3>
                        <p>Of the Missionaries that we surveyed, 75% were using 3 or more applications for
                             their fundraising work flow</p>
                    </div>
                    <img width="25%" src={percentage}/>
                </StatContainer>
                <StatContainer>
                    <img width="50%" src={people}/>
                    <p>Only one out of ten missionaries are satisfied with their fundraising software</p>
                </StatContainer>
            </ResearchContainer>
            <ResearchContainer>
                <h3>CONSOLODATION:</h3>
                <p>When asked what features in a web app would be worth paying for, the majority of 
                    missionaries vocalized the need to consolidate and have one app that has all the 
                    features they want.</p>
                <img width="80%" src={consolodation} />
                <h3>KEY FEATURES:</h3>
                <p>Based on market feedback, I was able to identify the 4 most important features that
                     users would find most helpful for their fundraising needs</p>
                <img width="100%" src={features}/>
            </ResearchContainer>
            <DemoContainer>
                <h2>User Friendly Interface</h2>
                <p>I designed a modern visually appealing web app. I considered the work flow of a missionary
                     as described during our interviews. I then implemented their work flow into the app.</p>
                <img src={logInDemo} width="100%"  alt="demo" />
            </DemoContainer>
            <DemoContainer>
                <h2>Task Management System</h2>
                <p>Built into the app is a feature that allows users to add and complete tasks. To further
                     streamline the process, tasks will be autogenerated based on data and other information
                      that is uploaded. This helps the user keep track of interactions with their benefactors 
                      make sure that nothing gets lost in the shuffle.</p>
                <img src={tasksDemo}  width="100%"  alt="demo" />
            </DemoContainer>
            <DemoContainer>
                <h2>Seamless Data Uplad and Integration</h2>
                <p>Donation data can be easily uploaded with the data dump feature. When the file is uploaded
                    the app generates new contacts and gives the option to sync contact info with existing contacts. 
                    This removes the headache of having to manually update contact info. </p>
                <img src={uploadDemo} width="100%"  alt="demo" />
            </DemoContainer>
            <DemoContainer>
                <h2>Data Visualization</h2>
                <p>To help with data analytics, we built several vizualization tools. The first one, located
                     on the dashboard, shows progress of donations over time. The second shows the distribution
                      of donations by state. The last one gives a report of which reoccuring donations have dropped off.</p>
                <img src={visualization} width="100%"  alt="demo" />
            </DemoContainer>
        </ContentDiv>
        
      
	);
}


export default FMP;