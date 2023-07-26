import React,{ PureComponent, useContext, useState, useEffect} from 'react';
import {ThemeContext} from '../contexts/theme.context'


const Contact = () => {

	const { currentTheme } = useContext(ThemeContext)
	const [loading , setLoading ] = useState(false)

	return(
		<div>
            <h1>welcome to the Contact Page</h1>
            <b>my name is Kelvin Gothman</b>
            <b>Here is my email and phone number</b>
        </div>
		
      
	);
}


export default Contact;