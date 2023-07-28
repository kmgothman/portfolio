import React, { useState, useContext } from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom"
import {Outlet} from "react-router-dom"
import Navigation from "../../components/navigation/navigation"
import { 
    LayoutContainer,
    LogoDiv,
    MenuDiv,
    ContentDiv,
    StatickyBackground,
    SolidBackground
 } from './layout.styles';

 import {ReactComponent as Light} from "../../icons/light.svg"
 import {ReactComponent as Dark} from "../../icons/dark.svg"
 import {ReactComponent as Menu} from "../../icons/menu.svg"
 import {ReactComponent as MenuOpen} from "../../icons/menuopen.svg"
 import Logo from "../../icons/logo-no-background.png"
 import LogoLight from "../../icons/logo-white.png"
 import { ThemeContext } from '../../contexts/theme.context';
const Layout = () => {

    const [ navToggle, setNavToggle ] = useState(false)
    const {currentTheme, setCurrentTheme} = useContext(ThemeContext)

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


export default Layout;