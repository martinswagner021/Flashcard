import styled from "styled-components";

const AddCardStyled = styled.div`
    
    min-width: 10rem;
    width: fit-content;
    
    padding: 3.5rem;

    background-color: #ffffff;
    border: 2px solid ${ ( {theme} ) => theme.primary};
    border-radius: 20px;

`

AddCardStyled.Button = styled.div`
    position: fixed;
    bottom: 3rem;
    left: 50%;
    transform: translate(-50%);
    z-index: 1;

    width: 3rem;
    height: 3rem;

    background-color: ${({theme}) => theme.primary};
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    box-shadow: 0.1rem 0.1rem 0.5rem black;

    :hover, span {
        cursor: pointer;
    }

    span{
        position: absolute;

        font-size: 2.8rem;
        font-weight: bold;

        color: ${({theme}) => theme.secondary.white};
        
        ::selection{
            background-color: transparent;
        }
    }

    animation: appearAddCardButton 0.8s ease;
    @keyframes appearAddCardButton{
        0%{
            opacity: 0;
            transform: translate(-50%,200%);
        }
        100%{
            opacity: 1;
            transform: translate(-50%,0%);
        }
    }
`

export default AddCardStyled