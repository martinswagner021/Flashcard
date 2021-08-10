import styled from "styled-components";

const AddCardStyled = styled.div`
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

    :hover {
        cursor: pointer;
    }

    span{
        position: absolute;

        font-size: 3rem;
        font-weight: bold;

        color: ${({theme}) => theme.secondary.white}
    }

    animation: appearAddCard 0.8s ease;
    @keyframes appearAddCard{
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