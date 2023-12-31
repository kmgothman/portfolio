import styled, {keyframes} from 'styled-components'
import {Link} from 'react-router-dom'


export const NavigationContainer = styled.div`
    min-height: 100vh;
    font-size: calc(10px + 2vmin);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 25%;
    @media (max-width: 700px) {
      position: relative;
      left: auto;
    }

`
const shrink = keyframes`
  from {
    font-size: 3em;
  }
  to {
    font-size: 2.5em;
  }
`
const grow = keyframes`
  from {
    font-size: 2.5em;
  }
  to {
    font-size: 3em;
  }
`

export const StyledLink = styled(Link)`
  font-family: sans-serif, "Helvetica Neue", "Lucida Grande", Arial;
  font-weight: 700;
  color: ${props => props.theme.fontMain};
  text-decoration: none;
  font-size: 3em;
  
  animation: ${grow} 1s forwards;
  &:hover {
    animation: ${shrink} 1s forwards;
  }
  
`;

export const LinkContainer = styled.div`
  display : flex;
  flex-direction: row;
  align-items : center;
  
  height: 80px;
  &:hover {
    
  }
  b{
    color: ${props => props.theme.fontSecond};
    align-self: flex-end;
    margin: 13px;
    font-family: 'Montserrat', sans-serif;
  }
`;

