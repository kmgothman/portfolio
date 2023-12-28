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
import logo from '../../icons/sunday-lead.png'
import { ReactComponent as GitHub} from '../../icons/github.svg'
import newsletterDemo from './gifs/sunday_lead/newsletter.gif'


const SundayLead = () => {

	const { currentTheme } = useContext(ThemeContext)
    const { currentMedia } = useContext(MediaContext)

    const color1 = "#6cb0e1"
    const color2 = "#239678"

	return(
       
		<ContentDiv>
            <LogoDiv background={color1}>
                <img src={logo} width='400'/>
            </LogoDiv>
            <TitleDiv color={color2}>
                <h1>FMP</h1>
            </TitleDiv>
            {currentMedia.isMobile ? <MobileDescriptionDiv color={color2}>
                <div>
                    <h2>Technologies</h2>
                    <ul>
                        <li><p>Next</p></li>
                        <li><p>React</p></li>
                        <li><p>Node</p></li>
                        <li><p>Apps Script</p></li>
                    </ul>
                </div>
                
                <RightDiv>
                    <p>A web application designed to streamline and enhance the marketing 
                        efforts of The Sunday Lead Podcast. Optimized for SEO performance 
                        built with technologies to automate marketing tasks efficiently.
                    </p>
                </RightDiv>
            </MobileDescriptionDiv> : <DescriptionDiv color={color2}>
                <div>
                    <h2>Technologies</h2>
                    <ul>
                        <li><p>Next</p></li>
                        <li><p>React</p></li>
                        <li><p>Node</p></li>
                        <li><p>Azure</p></li>
                        <li><p>Apps Script</p></li>
                    </ul>
                </div>
                
                    <RightDiv>
                        <p>A web application designed to streamline and enhance the marketing 
                            efforts of The Sunday Lead Podcast. Optimized for SEO performance 
                            built with technologies to automate marketing tasks efficiently.
                        </p>
                    </RightDiv>
                </DescriptionDiv>}
            <LinksDiv>
                <LinkButton to="https://www.sundayleadpodcast.com/" target="_blank" rel="noopener noreferrer">Live Site</LinkButton>
                <IconLink to="https://github.com/kmgothman/sunday_lead_azure" target="_blank" rel="noopener noreferrer"><GitHub viewBox="0 0 100 100"width='50' height='50' fill={currentTheme.fontSecond} stroke={currentTheme.fontSecond} /></IconLink>
            </LinksDiv>
            <AboutContainer color={color2}>
                <h2>About</h2>
                <p>The web app was built using Next.js to ensure rapid load times and enhanced 
                    SEO. The platform is engineered to streamline marketing processes and to 
                    boost online visibility. The app includes an integrated newsletter signup 
                    paired with automation to notify subscribers and update the website when a 
                    new episode is released.</p>
            </AboutContainer>
            <DemoContainer color={color2}>
                <h2>Newsletter Sign Up</h2>
                <p>Users can Sign up for the newsletter which will notify them every time a new episode is released</p>
                <img src={newsletterDemo} width="100%"  alt="demo" />
            </DemoContainer>
  
        </ContentDiv>
        
      
	);
}


export default SundayLead;