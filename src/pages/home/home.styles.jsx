import styled from 'styled-components'

export const HomeDiv = styled.div`
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
        color: ${props => props.theme.fontSecond}
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