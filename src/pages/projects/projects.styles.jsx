
import styled, {keyframes} from 'styled-components'
import {Link} from 'react-router-dom'


export const ProjectsContainer = styled.div`
    position: fixed;
    display: flex;
    width: 100vw;
    height: 75vh;
    bottom: 0;
    left: 0;
    z-index: 6;
`
export const MobileProjectsContainer = styled.div`
    position: fixed;
    display: flex;
    width: 100vw;
    height: 75vh;
    bottom: 0;
    left: 0;
    z-index: 6;
`

export const DisplayContainer = styled.div`
    width: 50%;
    background: ${props => props.backgroundColor};
    border-top-right-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background 0.5s ease;

`
export const ImageContainer = styled.div`

`
export const StyledImage = styled.img`
    width: ${props => props.width};
    transition: opacity 0.5s ease;
    opacity: ${props => props.isVisible ? 1 : 0};
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
`

export const ListContainer = styled.div`
    width: 50%;
    padding-left: 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    h1 {
        color: ${props => props.theme.fontMain};
    }
    h2 {
        color: ${props => props.theme.fontMain};
    }
    @media (max-width: 700px) {
        padding-left: 0px;
    }
    
`
export const ItemContainer = styled.div`
        display: flex;
        width: 325px;
        border-bottom: 2px solid ${props => props.theme.fontMain};
        justify-content: space-between;
        text-decoration: none;
        margin-left: 20px;
    `


export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    img {
        margin-left: 5px;
    }

`

