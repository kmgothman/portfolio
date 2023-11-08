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
		<div>
			<LinkContainer ><b>01</b><StyledLink onClick={props.navClick} to="/">HOME</StyledLink></LinkContainer>
			<LinkContainer ><b>02</b><StyledLink onClick={props.navClick} to="/projects">PROJECTS</StyledLink></LinkContainer>
			<LinkContainer ><b>03</b><StyledLink onClick={props.navClick} to="/about">ABOUT</StyledLink></LinkContainer>
			<LinkContainer ><b>04</b><StyledLink onClick={props.navClick} to="/contact">CONTACT</StyledLink></LinkContainer>
		</div>
	</NavigationContainer>
	)
	
}


export default Navigation;
