import React,{ PureComponent, useContext, useState, useEffect} from 'react';
import {ThemeContext} from '../../contexts/theme.context'
import {Link} from 'react-router-dom'
import {
	HomeDiv,
	LinksDiv
} from './home.styles'
import {ReactComponent as East} from '../../icons/east.svg'


const Home = () => {

	const { currentTheme } = useContext(ThemeContext)
	const [loading , setLoading ] = useState(false)

	return(
		<HomeDiv>
            <h1>Hey, I'm Kelvin Gothman</h1>
            <p>I am a Software Developer</p>
			<LinksDiv>
				<Link to='/Projects'><East width='30' fill={currentTheme.fontSecond}/>My Projects</Link>
				<Link to='/About'><East width='30' fill={currentTheme.fontSecond}/>About Me</Link>
			</LinksDiv>
        </HomeDiv>
	);
}


export default Home;