import React,{ PureComponent, useContext, useState, useEffect} from 'react';
import {ThemeContext} from '../../contexts/theme.context'
import {Link} from 'react-router-dom'
import {
	AboutDiv,
	LinksDiv,
	IconContainer
} from './about.styles'
import {ReactComponent as East} from '../../icons/east.svg'
import ReactIcon from '../../icons/react.png'
import node from '../../icons/node.png'
import firebase from '../../icons/firebase.png'
import python from '../../icons/python.png'
import postgres from '../../icons/postgresql.png'
import tensor from '../../icons/tensorflow.png'

const About = () => {

	const { currentTheme } = useContext(ThemeContext)
	const [loading , setLoading ] = useState(false)
	

	return(
		<AboutDiv>
            <h1>About</h1>
            <h2>Hey, my name is Kelvin Gothman. I am Web Developer proficient in
				 both front-end and back-end technologies. Always ready to embrace 
				  new challenges and leverage cutting-edge tools to bring innovative
				   digital solutions to life.
				
			</h2>
			<IconContainer>
				<img width="40" height="40" alt="Logo" src={ReactIcon}/>
				<img width="50" height="30" alt="Logo" src={node}/>
				<img width="30" height="40" alt="Logo" src={firebase}/>
				<img width="40" height="40" alt="Logo" src={python}/>
				<img width="40" height="40" alt="Logo" src={postgres}/>
				<img width="40" height="40" alt="Logo" src={tensor}/>
			</IconContainer>
			<LinksDiv>
				<Link><East width='30' fill={currentTheme.fontSecond}/>Resume</Link>
				<Link to='https://www.linkedin.com/in/kelvin-gothman-137b97113/' target="_blank" rel="noopener noreferrer"><East width='30' fill={currentTheme.fontSecond}/>Linked In</Link>
			</LinksDiv>
        </AboutDiv>
		
      
	);
}


export default About;