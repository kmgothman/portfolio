import styled from 'styled-components'

export const AboutDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-self: center;
    flex-grow: 1;
    h1 {
        color: ${props => props.theme.fontSecond};
    }
    h2 {
        color: ${props => props.theme.fontSecond};
        max-width: 500px;
        border-top: 2px solid ${props => props.theme.fontSecond};
        padding-top: 20px;
    }
`
export const LinksDiv = styled.div`
    display: flex;
    justify-content: center;
    a {
        color: ${props => props.theme.fontSecond};
        text-decoration: none;
        margin: 10px;
    }

`
export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    img {
       margin: 10px;
    }

`