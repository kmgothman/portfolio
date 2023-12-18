import styled, {keyframes} from 'styled-components'

const staticky = keyframes`
    0% { transform: translate(0,0) }
    10% { transform: translate(-5%,-5%) }
    20% { transform: translate(-10%,5%) }
    30% { transform: translate(5%,-10%) }
    40% { transform: translate(-5%,15%) }
    50% { transform: translate(-10%,5%) }
    60% { transform: translate(15%,0) }
    70% { transform: translate(0,10%) }
    80% { transform: translate(-15%,0) }
    90% { transform: translate(10%,5%) }
    100% { transform: translate(5%,0) }
`
export const StatickyBackground = styled.div`
    position: fixed;
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    width: 200%;
    height: 200vh;
    background: transparent url('http://assets.iceable.com/img/noise-transparent.png') repeat 0 0;
    background-repeat: repeat;
    animation: ${staticky} .2s infinite;
    
    visibility: visible;
    z-index: 1;
`
export const SolidBackground = styled.div`
    position: fixed;
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    width: 200%;
    height: 200vh;
    background: ${props => props.theme.backgroundMain};
    background-repeat: repeat;
    z-index: 0;
`

export const LayoutContainer = styled.div`
    display: flex;
    height: 100vh;
    justify-content: space-between;
   
`
export const MobileLayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
    svg {
        z-index: 2;
        margin: 1em;
    }
`
export const LogoDiv = styled.div`
    height: 100vh;
    width: 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 2;
    img {
        margin-top: 50px;
    }
`

export const MenuDiv = styled.div`
    height: 100vh;
    width: 15%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    z-index: 4;
    svg {
        margin: 30px;
        margin-top: 50px;
        &:hover {
            cursor: pointer;
        }
    }


`

export const ContentDiv = styled.div`
    height: 100vh;
    width: 70%;
    display: flex;
    flex-direction: column;
    // align-items: center;
    z-index:3;
    overflow-y: scroll;
    position: relative;
    .example::-webkit-scrollbar {
        display: none;
      }

      @media (max-width: 700px) {
        width: 100%;
      }


`