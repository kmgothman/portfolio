
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

export const DisplayContainer = styled.div`
    flex-grow: 3;
    background: ${props => props.theme.fontSecond};
    border-top-right-radius: 30px;
    margin-right: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

`
export const ImageContainer = styled.div`

`
export const StyledLink = styled(Link)`
    text-decoration: none;
`

export const ListContainer = styled.div`
    flex-grow: 2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    h1 {
        color: ${props => props.theme.fontMain};
    }
    h2 {
        color: ${props => props.theme.fontMain};
    }
    
`
export const ItemContainer = styled.div`
        display: flex;
        width: 325px;
        border-bottom: 2px solid ${props => props.theme.fontMain};
        justify-content: space-between;
        text-decoration: none;
    `


export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    img {
        margin-left: 5px;
    }

`

