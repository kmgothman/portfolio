import React,{ PureComponent, useContext, useState, useEffect} from 'react';
import {ThemeContext} from '../contexts/theme.context'


const About = () => {

	const { currentTheme } = useContext(ThemeContext)
	const [loading , setLoading ] = useState(false)

	return(
		<div>
            <h1>welcome to the About page</h1>
            <b>my name is Kelvin Gothman</b>
            <b>I am a Software Developer</b>
        </div>
		
      
	);
}


export default About;