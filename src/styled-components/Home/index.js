import styled from "styled-components";

export const Background = styled.div`
    position: fixed;
    z-index: -99;
    width: 100%;
    height: 100vh;
    background-color: ${( {theme} ) => theme.primary};
`

