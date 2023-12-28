import React,{ PureComponent, useContext, useState, useEffect} from 'react';
import { MediaContext } from '../../contexts/media.context';
import { ThemeContext } from '../../contexts/theme.context'

import {
	ProjectsContainer,
	DisplayContainer,
	ListContainer,
	IconContainer,
	ItemContainer,
	ImageContainer,
	StyledLink,
	MobileProjectsContainer,
	StyledImage
} from './projects.styles'
import {ReactComponent as Next} from '../../icons/nextjs.svg'
import ReactIcon from '../../icons/react.png'
import node from '../../icons/node.png'
import firebase from '../../icons/firebase.png'
import fmp from '../../icons/fmp.png'
import KG from '../../icons/logo-no-background.png'
import sundayLead from '../../icons/sunday-lead.png'
import Nextjs from '../../icons/nextjs.svg'


const Projects = () => {

	const { currentMedia } = useContext(MediaContext)

	const [img, setImg ] = useState({
		src : KG,
		background: "#e1eaf2",
		width: "250px"
	})
	const [isImageVisible, setIsImageVisible] = useState(true);
	
	const handleHover = (src,color,width) => {
		setIsImageVisible(false);
        setTimeout(() => {
            setImg({
				src: src,
				background: color,
				width : width
			})
            setIsImageVisible(true);
        }, 500); 
	}
	const handleLeave = () => {
		setIsImageVisible(false);
        setTimeout(() => {
            setImg({
				src: KG,
				background: "#e1eaf2",
				width : "250px"
			})
            setIsImageVisible(true);
        }, 500); 
	}


	if (currentMedia.isMobile) {
		return(
			<MobileProjectsContainer>
				<ListContainer>
					<ItemContainer><h1>Projects</h1></ItemContainer>
					<StyledLink to="/fmp"><ItemContainer>
						
						<h2>FMP</h2>
						<IconContainer>
							<img width="40" height="40" alt="Logo" src={ReactIcon}/>
							<img width="50" height="30" alt="Logo" src={node}/>
							<img width="30" height="40" alt="Logo" src={firebase}/>
						</IconContainer>
					</ItemContainer></StyledLink>
					<StyledLink to="/sunday-lead"><ItemContainer>
						
						<h2>Sunday Lead</h2>
						<IconContainer>
							<img width="40" height="40" alt="Logo" src={Nextjs}/>
							<img width="40" height="40" alt="Logo" src={ReactIcon}/>
						</IconContainer>
					</ItemContainer></StyledLink>
					
				</ListContainer>
			</MobileProjectsContainer>
		)
	} else {
	return(
		<ProjectsContainer>
			<DisplayContainer backgroundColor={img.background}>
				<StyledImage 
					src={img.src}
					width={img.width} 
					isVisible={isImageVisible}
					alt="Dynamic Content"
				/>
				
			</DisplayContainer>
		
			<ListContainer>
				<ItemContainer ><h1>Projects</h1></ItemContainer>
				<StyledLink to="/fmp" onMouseOver={()=>handleHover(fmp,"#f7f7f7","250px")} onMouseLeave={()=>handleLeave()}><ItemContainer>
					
					<h2>FMP</h2>
					<IconContainer>
						<img width="40" height="40" alt="Logo" src={ReactIcon}/>
						<img width="50" height="30" alt="Logo" src={node}/>
						<img width="30" height="40" alt="Logo" src={firebase}/>
					</IconContainer>
				</ItemContainer></StyledLink>
				<StyledLink to="/sunday-lead" onMouseOver={()=>handleHover(sundayLead,"#6cb0e1","400px")} onMouseLeave={()=>handleLeave()}><ItemContainer>
					
					<h2>Sunday Lead</h2>
					<IconContainer>
						<img width="40" height="40" alt="Logo" src={Nextjs}/>
						<img width="40" height="40" alt="Logo" src={ReactIcon}/>
						
					</IconContainer>
				</ItemContainer></StyledLink>
				
			</ListContainer>
		</ProjectsContainer>
	);
	}
}


export default Projects;

