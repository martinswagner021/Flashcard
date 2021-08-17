import styled from 'styled-components';

const Container = styled.div`
    position: absolute;
    top: 50vh;
    left: 50%;
    height: fit-content;
    min-width: 12rem;
    max-width: 50rem;
    width: fit-content;
    transform: translate(-50%, -50%);
    
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 1rem;
    
    background-color: #ffffff;
    border: 2px solid ${ ( {theme} ) => theme.primary};
    border-radius: 1rem;
    
    box-shadow: 0.3rem 0.3rem 2rem black;

    animation: appearContainer 0.3s ease;


    .tools{
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .close-window{
        background-color: ${({theme}) => theme.secondary.red};
        :hover{
            background-color: ${({theme}) => theme.secondary.darkred};
        }
    }

    span{
        color: ${({theme}) => theme.primary};
    }

    button{
            background-color: ${ ( {theme} ) => theme.primary};
            border: 0px;
            border-radius: 50px;

            padding: 0.6rem 0.8rem;

            width: fit-content;
            height: fit-content;

            color: #ffffff;
            transition: background-color 0.3s ease-in-out;
            
            :hover{
                background-color: ${ ( {theme} ) => theme.secondary.dark};
                cursor: pointer;
            }

            :focus{
                outline: 0px;
            }
        }

    form{
        display: flex;
        flex-direction: column;
        align-items: center;

        p{
            text-align: center;
        }

        textarea, input{
            height: 2rem;
            width: 12rem;
            
            background-color: transparent;
            
            border: 2px solid transparent;
            border-bottom: 2px solid ${ ( {theme} ) => theme.primary};
            transition: border 0.3s ease-in-out;
            
            :hover{
                cursor: text;
            }
            
            :focus{
                outline: 0px;
                background-color: transparent;
                
                border-bottom: 2px solid ${ ( {theme} ) => theme.secondary.dark};
            }
            
            ::placeholder{
                text-align: center;
            }
        }
        
        textarea{
            border: 2px solid ${ ( {theme} ) => theme.primary};
            border-radius: 1rem;

            height: 5rem;

            padding: 0.5rem;
            resize: none;

            ::placeholder{
                
                text-align: justify;
            }
            :focus{
                border: 2px solid ${ ( {theme} ) => theme.secondary.dark};
            }
        }
        
        *{
            margin-top: 0.3rem;
        }
        

        @keyframes appearContainer{
            0%{
                opacity: 0;
            }
            100%{
                opacity: 1;
            }
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