import React,{ PureComponent, useContext, useState, useEffect} from 'react';
import {ThemeContext} from '../../contexts/theme.context'
import {
	ProjectsContainer,
	DisplayContainer,
	ListContainer,
	IconContainer,
	ItemContainer,
	ImageContainer,
	StyledLink
} from './projects.styles'
import ReactIcon from '../../icons/react.png'
import node from '../../icons/node.png'
import firebase from '../../icons/firebase.png'
import fmp from '../../icons/fmp.png'
import {Link} from 'react-router-dom'


const Projects = () => {

	const { currentTheme } = useContext(ThemeContext)
	const [loading , setLoading ] = useState(false)

	return(
		<ProjectsContainer>
			<DisplayContainer>
					<img width="250" height="250" alt="Logo" src={fmp}/>
				
			</DisplayContainer>
		
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
				
			</ListContainer>
		</ProjectsContainer>
	);
}


export default Projects;

{/* <ProjectsContainer>
            <ImageContainer><h1>Image!</h1></ImageContainer>
			<ListContainer><h1>List!</h1></ListContainer>
        </ProjectsContainer> */}
