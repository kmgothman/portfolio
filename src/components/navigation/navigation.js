import React, {useState, useContext} from 'react';
import {
	NavigationContainer, 
	LogoContainer, 
	SideBarContainer, 
	DropBoxContainer,
	StyledLink,
	LinkContainer
} from './navigation.styles'
import './navigation.css';
import Logo from './Logo/Logo.png'
import { useLocation} from "react-router-dom"
import { ThemeContext } from '../../contexts/theme.context';

const Navigation = () => {

const location = useLocation()
const nav = location.pathname
const {currentTheme } = useContext(ThemeContext)






	return (
	<NavigationContainer>
		<LogoContainer >
			<img width="60" alt="Logo" src={Logo}/>
		</LogoContainer>
		<SideBarContainer className={currentTheme.mode}>
			<LinkContainer className={nav == '/' ? 'selected':'unselected'}><StyledLink to="/">Home</StyledLink></LinkContainer>
			<LinkContainer className={nav == '/Donations' ? 'selected':'unselected'}><StyledLink to="/Donations">Projects</StyledLink></LinkContainer>
			<LinkContainer className={nav == '/Contacts' ? 'selected':'unselected'}><StyledLink to="/Contacts">Contact</StyledLink></LinkContainer>
			<LinkContainer className={nav == '/Contacts' ? 'selected':'unselected'}><StyledLink to="/Contacts">About</StyledLink></LinkContainer>
		</SideBarContainer>
	</NavigationContainer>
	)
	
}


export default Navigation;