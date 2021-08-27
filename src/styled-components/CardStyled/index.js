import styled from "styled-components";

const CardStyled = styled.div`

    display: flex;
    flex-direction: column;

    padding: .5rem;

    font-size: 1rem;

    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 1rem;
    border: 1px solid rgba(209, 213, 219, 0.3);

    h3{
        border-bottom: 2px solid ${({theme}) => theme.primary};
    }
    h3, p{
        word-wrap: break-word;
    }
    p{
        margin-top: 1rem;
    }

    .tools{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        
        span{
            margin: 0rem 0.5rem;
            color: ${({theme}) => theme.secondary.black};
            :hover{
                color: ${({theme}) => theme.secondary.dark};
                cursor: pointer;
            }
        }
        
        .remove{
            :hover{
                color: ${({theme}) => theme.secondary.darkred};
            }
        }
    }

    @media (min-width: 750px) {
        font-size: 1.5rem;
    }
`
CardStyled.Grid = styled.div`

    padding: 1rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export default CardStyled