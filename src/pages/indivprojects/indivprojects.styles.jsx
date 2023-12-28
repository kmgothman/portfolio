import styled from 'styled-components'
import {Link, NavLink} from 'react-router-dom'

export const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
`

export const LogoDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.background};
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    flex-grow:1;
    min-height: 400px;
    
`
export const TitleDiv = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
h1{
    color: ${props => props.color};
    font-size: 2.5em;
    margin-left: 30px;
    
}
border-bottom: 2px solid ${props => props.theme.fontSecond};
`
export const DescriptionDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    div {
        margin-top: 10px;
        h2{
            margin-top: 20px;
            margin-left: 30px;
            
            color: ${props => props.color};
        }
        p {
           
            margin-bottom: 0px;
            margin-top: 10px;
            color: ${props => props.theme.fontSecond};
        }
        ul{
            list-style-type: none;
            font-weight: bold;
            font-size: 1.2em;
        }
    }
`
export const MobileDescriptionDiv = styled.div`
display: flex;
flex-direction: column;
align-items: stretch;
div {
    margin-top: 10px;
    h2{
        margin-top: 20px;
        margin-left: 30px;
        
        color: ${props => props.color};
    }
    p {
       
        margin-bottom: 0px;
        margin-top: 10px;
        color: ${props => props.theme.fontSecond};
    }
    ul{
        list-style-type: none;
        font-weight: bold;
        font-size: 1.2em;
    }
}
`

export const RightDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px;
    max-width: 500px;
    p{
        color: ${props => props.theme.fontSecond};
        font-size: 1.2em;
        font-weight: bold;
        margin-left: 2em;
    }
`

export const LinksDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    border-bottom: 2px solid ${props => props.theme.fontSecond};
    
`
export const LinkButton = styled(NavLink)`
    color: ${props => props.theme.backgroundMain};
    background-color: ${props => props.theme.fontSecond};
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    text-decoration: none;
    &:hover {
        background-color: ${props => props.theme.fontMain};
    }
`

export const IconLink = styled(Link)`
    color: ${props => props.theme.backgroundMain};
    background-color: none;
    padding: 0px;
    margin: 10px;
    margin-left: 30px;
    border-radius: 0px;
    text-decoration: none;
    overflow: visible;
    svg {
        overflow: visible;
    }
`
export const DemoContainer = styled.div`
    display: flex;
    flex-direction: column;
    h2{
        margin-top: 20px;
        margin-left: 20px;
        
        color: ${props => props.color};
    }
    p {
        margin: 20px;
        font-size: 1.2em;
        font-weight: bold;
        color: ${props => props.theme.fontSecond};
    }
    img {
        margin-top: 20px;
        align-self: center;
    }
    padding-bottom: 40px;
    border-bottom: 2px solid ${props => props.theme.fontSecond};
`

export const ResearchContainer = styled.div`
    display: flex;
    flex-direction: column;

    p {
        color: ${props => props.theme.fontSecond};
        margin: 20px;
        font-size: 1.2em;
        font-weight: bold;
        max-width: 800px;
        align-self: center;
    }
    h1 {
        color: ${props => props.theme.fontSecond};
        align-self: center;
        font-size: 3em;
        margin: 10px;
    }
    h2 {
        color: ${props => props.color};
        align-self: center;
        font-weight: normal;
        font-size: 2.5em;
        margin-top: 25px;
        margin-bottom: 0;
    }
    h3 {
        color: ${props => props.theme.fontSecond};
        margin-left: 70px;
        margin-top: 70px;
    }
    img {
        align-self: center;
    }
    padding-bottom: 30px;
    border-bottom: 2px solid ${props => props.theme.fontSecond};
`
export const StatContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding-left: 90px;
    padding-right: 90px;
    margin-top: 30px;
    margin-bottom: 30px;
    div {
        display: flex;
        flex-direction: column;

        p {
            margin: 0;
            margin-left: 3em;
            margin-right: 3em;
        }
 
    }
    h3 {
        margin-left: 50px;
        color: ${props => props.theme.fontSecond};
        //border-top: 2px solid ${props => props.theme.fontSecond};
    }
    p {
        margin: 0;
        margin-left: 50px;
        margin-right: 50px;
    }
    img {
        margin-left: 50px;
        margin-right: 50px;
    }
`

export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 50px;
    p {
        color: ${props => props.theme.fontSecond};
        margin: 20px;
        font-size: 1.2em;
        font-weight: bold;
        max-width: 800px;
        align-self: center;
    }
    h1 {
        color: ${props => props.theme.fontSecond};
        
    }
    h2 {
        color: ${props => props.color};
        margin-left: 30px;
    }
    border-bottom: 2px solid ${props => props.theme.fontSecond};
`