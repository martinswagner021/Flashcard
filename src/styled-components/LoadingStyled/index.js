import styled from "styled-components";

const LoadingStyled = styled.div`
    position: fixed;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${({theme}) => theme.secondary.white};
    width: 100%;
    height: 100vh;
    z-index: 2;
    `

LoadingStyled.Spinner = styled.div`
    position: absolute;

    width: 3rem;
    height: 3rem;
    z-index: 4;

    border-radius: 50%;
    border: .5rem solid #f3f3f3;
    border-top: .5rem solid ${({theme}) => theme.secondary.bright};
    border-left: .5rem solid ${({theme}) => theme.secondary.bright};

    animation: spin 1s linear infinite;

    @keyframes spin{
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
`

export default LoadingStyled