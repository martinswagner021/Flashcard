import styled from 'styled-components';

const Container = styled.div`
    position: absolute;
    top: 50vh;
    left: 50%;
    width: 12rem;
    transform: translate(-50%, -50%);

    background-color: #ffffff;
    border: 2px solid ${ ( {theme} ) => theme.primary};
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3.5rem;

    span{
        color: ${({theme}) => theme.primary};
    }

    button{
            background-color: ${ ( {theme} ) => theme.primary};
            border: 0px;
            border-radius: 50px;

            width: 130px;
            height: 40px;

            color: #ffffff;
            transition: background-color 0.3s ease-in-out;
        }
    button:hover{
        background-color: ${ ( {theme} ) => theme.secondary.dark};
        cursor: pointer;
    }

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        
        margin-top: 30px;

        p{
            text-align: center;
        }

        input{
            height: 30px;
            width: 200px;
            
            background-color: transparent;

            
            border: 2px solid transparent;
            border-bottom: 2px solid ${ ( {theme} ) => theme.primary};
            transition: border 0.3s ease-in-out;
        }
        input:focus{
            outline: 0px;
            background-color: transparent;

            border-bottom: 2px solid ${ ( {theme} ) => theme.secondary.dark};
        }
        input::placeholder{
            text-align: center;
            margin-left: 5px;
        }

        *{
            margin-top: 10px;
        }
    }
`

Container.Salutation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    
    .Description {
        text-align: center;
    }

    .FlashcardIcon {
        width: 5rem;

        margin-top: 1rem;
    }
`

export default Container;