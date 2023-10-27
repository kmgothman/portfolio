import React,{ PureComponent, useContext, useState, useEffect} from 'react';
import {ThemeContext} from '../../contexts/theme.context'
import {
	ContactDiv,
	LinksDiv
} from './contact.styles'
import { ReactComponent as East} from '../../icons/east.svg'
import {Link} from 'react-router-dom'


const Contact = () => {

	const { currentTheme } = useContext(ThemeContext)
	const [loading , setLoading ] = useState(false)

	const openPdfInNewTab = () => {
    		const pdfUrl = '/resume.pdf';
    		window.open(pdfUrl, '_blank');
  	};

	return(
		<ContactDiv>
            <h1>Contact</h1>
            <h2>Email - kmgothman@gmail.com
			</h2>
			
			<LinksDiv>
				<Link onClick={openPdfInNewTab}><East width='30' fill={currentTheme.fontSecond}/>Resume</Link>
				<Link to='https://www.linkedin.com/in/kelvin-gothman-137b97113/' target="_blank" rel="noopener noreferrer"><East width='30' fill={currentTheme.fontSecond}/>Linked In</Link>
			</LinksDiv>
        </ContactDiv>
		
      
	);
}


export default Contact;
