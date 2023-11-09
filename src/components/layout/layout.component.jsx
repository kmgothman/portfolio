import React, { useState, useContext, useEffect } from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom"
import {Outlet} from "react-router-dom"
import Navigation from "../../components/navigation/navigation"
import { 
    LayoutContainer,
    LogoDiv,
    MenuDiv,
    ContentDiv,
    StatickyBackground,
    SolidBackground,
    MobileLayoutContainer
 } from './layout.styles';

 import {ReactComponent as Light} from "../../icons/light.svg"
 import {ReactComponent as Dark} from "../../icons/dark.svg"
 import {ReactComponent as Menu} from "../../icons/menu.svg"
 import {ReactComponent as MenuOpen} from "../../icons/menuopen.svg"
 import Logo from "../../icons/logo-no-background.png"
 import LogoLight from "../../icons/logo-white.png"
 import { ThemeContext } from '../../contexts/theme.context';
 import { MediaContext } from '../../contexts/media.context';
const Layout = () => {

    const [ navToggle, setNavToggle ] = useState(false)
    const {currentTheme, setCurrentTheme} = useContext(ThemeContext)
    const {currentMedia, setCurrentMedia} = useContext(MediaContext)

    const navClick =()=> {
        setNavToggle(!navToggle)
    }
    const themeClick = () => {
        if (currentTheme.mode == "light") {
            setCurrentTheme({
                mode: "dark",
                backgroundMain: "#393a3b",
                backgroundSecond: "#595c5e",
                fontMain: "#b6babf",
                fontSecond: "#e1eaf2",
                fifth: "white",
                sixth: "#F2F6FC",
                seventh: "#c9c9c9",
                eighth: "#0B57D0",
                ninth: "#C2E7FF",
                tenth: "#3793de"
            })
        } else {
            setCurrentTheme({
                mode: "light",
                backgroundMain: "#f7f7f7",
                backgroundSecond: "#adadad",
                fontMain: "#8c8c8c",
                fontSecond: "#616161",
                fifth: "white",
                sixth: "#F2F6FC",
                seventh: "#c9c9c9",
                eighth: "#0B57D0",
                ninth: "#C2E7FF",
                tenth: "#3793de"
            })
        }
    }

    useEffect(()=>{
        if (window.innerWidth<1000) {
            setCurrentMedia({isMobile:true})
        } else {
            setCurrentMedia({isMobile:false})
        }

        const handleResize = () => {
        if (window.innerWidth<1000) {
            setCurrentMedia({isMobile:true})
        } else {
            setCurrentMedia({isMobile:false})
        }
        }
        
        window.addEventListener('resize', handleResize);
        
        return () => {
        window.removeEventListener('resize', handleResize);
        };

    },[])

    if (currentMedia.isMobile) {
        return(
            <MobileLayoutContainer>
                {navToggle ? <MenuOpen onClick= {navClick} width='50' height='50' fill={currentTheme.fontSecond} />
                :<Menu onClick={navClick} width='50' height='50' fill={currentTheme.fontSecond} />}
                <ContentDiv>
                    {navToggle ? <Navigation navClick={navClick}/> : <Outlet /> }
                </ContentDiv> 
                <StatickyBackground></StatickyBackground>
                <SolidBackground></SolidBackground>
            </MobileLayoutContainer>
        )
    } else {
        return(
        <LayoutContainer>
            
            <LogoDiv>
                <Link to='/'><img width="60" alt="Logo" src={currentTheme.mode == "light" ? Logo : LogoLight} /></Link>
            </LogoDiv>
            <ContentDiv>
                {navToggle ? <Navigation navClick={navClick}/> : <Outlet /> }
            </ContentDiv>        
            <MenuDiv>
                {currentTheme.mode =="light" ? <Light onClick={themeClick} width='50' height='50' fill={currentTheme.fontSecond} /> 
                :<Dark onClick={themeClick} width='50' height='50' fill={currentTheme.fontSecond} />}
                {navToggle ? <MenuOpen onClick= {navClick} width='50' height='50' fill={currentTheme.fontSecond} />
                :<Menu onClick={navClick} width='50' height='50' fill={currentTheme.fontSecond} />}
                
            </MenuDiv>
            <StatickyBackground></StatickyBackground>
            <SolidBackground></SolidBackground>
        
        </LayoutContainer>
        );
    }
  
}


export default Layout;