import React, {useState, useContext} from 'react';
import {
	NavigationContainer, 
	StyledLink,
	LinkContainer
} from './navigation.styles'
import { useLocation} from "react-router-dom"
import { ThemeContext } from '../../contexts/theme.context';

const Navigation = (props) => {

const location = useLocation()
const nav = location.pathname
const {currentTheme } = useContext(ThemeContext)






	return (
	<NavigationContainer>
		
		<LinkContainer ><b>01</b><StyledLink onClick={props.navClick} to="/">HOME</StyledLink></LinkContainer>
		<LinkContainer ><b>02</b><StyledLink onClick={props.navClick} to="/Projects">PROJECTS</StyledLink></LinkContainer>
		<LinkContainer ><b>03</b><StyledLink onClick={props.navClick} to="/About">ABOUT</StyledLink></LinkContainer>
		<LinkContainer ><b>04</b><StyledLink onClick={props.navClick} to="/Contact">CONTACT</StyledLink></LinkContainer>
	</NavigationContainer>
	)
	
}


export default Navigation;