import styled from "styled-components";

const CardStyled = styled.div`

    background-color: ${({theme}) => theme.secondary.white};

    border: 2px solid ${({theme}) => theme.secondary.bright};
    border-radius: 1rem;

    display: flex;
    flex-direction: column;

    padding: .5rem;
    margin-top: .5rem;

    h1{
        font-size: 1rem;
        border-bottom: 2px solid ${({theme}) => theme.primary};
    }
    h1, p{
        word-wrap: break-word;
    }
    p{
        margin-top: 1rem;
    }

    .edit, .remove{

        margin: 0rem 0.5rem;
        :hover{
            cursor: pointer;
        }
    }
    .remove{
        color: ${({theme}) => theme.secondary.black};
        font-size: 1.2rem;
        :hover{
            color: ${({theme}) => theme.primary};
            cursor: pointer;
        }
    }
    .tools{
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
`
CardStyled.Grid = styled.div`
    height: 100vh;

    padding: 1rem;

    display: flex;
    flex-direction: column;    
    
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto;
        grid-column-gap: 1rem;
    }
`

export default CardStyled