import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LogoContainer = styled.div`
    display : flex;
    align-content : center;
    justify-content: flex-start;
    padding-left: 45px;
    padding-top: 20px;
    padding-bottom: 50px;
 
`
export const NavigationContainer = styled.div`
    background-color: ${props => props.theme.main};
    min-height: 100vh;
    width : 255px;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 6;
    font-size: calc(10px + 2vmin);
    color: white;
    display: flex;
    flex-direction: column;
`


export const SideBarContainer = styled.div`
    display : flex;
    flex-direction: column;
    align-content : center;
    text-decoration : none;
    color : ${props => props.theme.second};
  `

export const StyledLink = styled(Link)`
  font-family: "Google Sans",Roboto,RobotoDraft,Helvetica,Arial,sans-serif;
  color: ${props => props.theme.third};
  text-decoration: none;
  font-size: 1.1rem;
  padding-left: 20px;
`;

export const LinkContainer = styled.div`
  display : flex;
  flex-direction: row;
  align-content : left;
  padding : 5px;
  padding-left : 20px;
  margin-left: 15px;
  margin-right: 15px;
  border-radius: 20px;
  &:hover {
    background-color: ${props => props.theme.second};
  }
`;

export const DropBoxContainer = styled.div`
  display : flex;
  flex-direction: row;
  align-content : left;
  padding : 5px;
  padding-left : 35px;
  margin-left: 15px;
  margin-right: 15px;
  border-radius: 20px;
  &:hover {
    background-color: ${props => props.theme.second};
  }
  `

  
  // <{ $selected ?: boolean; }>`
  // background: ${props => props.$selected ? "blue" : "white"};
  // color: ${props => props.$selected ? "white" : "blue"};