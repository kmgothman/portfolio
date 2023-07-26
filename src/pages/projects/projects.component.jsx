import React,{ PureComponent, useContext, useState, useEffect} from 'react';
import {ThemeContext} from '../contexts/theme.context'


const Projects = () => {

	const { currentTheme } = useContext(ThemeContext)
	const [loading , setLoading ] = useState(false)

	return(
		<div>
            <h1>welcome to the Projects page</h1>
            <b>Here are my projects</b>
            <b>FMP</b>
        </div>
		
      
	);
}


export default Projects;