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
    background: ${props => props.theme.fontMain};
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
    color: #3793de;
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
            
            color: #3793de;
        }
        h3 {
            margin-left: 50px;
            margin-bottom: 0px;
            margin-top: 10px;
            color: ${props => props.theme.fontSecond};
        }
    }
`
export const LeftDiv = styled.div`
    display: flex;
    flex-direction: column;
    div {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
    }
    h2 {
        color: ${props => props.theme.fontSecond};
        margin: 10px;
        margin-right 15px;
    }
    h3 {
        color: ${props => props.theme.fontSecond};
        margin: 10px;
        
    }
`

export const RightDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px;
    max-width: 500px;
    h3{
        color: ${props => props.theme.fontSecond};
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
    h3 {
        margin: 40px;
        color: ${props => props.theme.fontSecond};
    }
    padding-bottom: 40px;
    border-bottom: 2px solid ${props => props.theme.fontSecond};
`