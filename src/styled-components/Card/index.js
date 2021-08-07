import styled from "styled-components";

const Card = styled.div`
    background-color: ${({theme}) => theme.secondary.white};

    border: 2px solid ${({theme}) => theme.primary};
    border-radius: 20px;

    padding: 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    h1{
        font-size: 1.5rem;
    }
`
Card.Grid = styled.div`
    padding: 2rem;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: max-content;
    grid-gap: 1rem;
`

export default Card