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

`

Container.Form = styled.form`
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

Container.Background = styled.div`
    background-color: #ffffff;
    
    position: fixed;
    top: 0;
    left: 0;
    z-index: -99;
    width: 100%;
    height: 100vh;

    .Circle1{
        width: 900px;

        position: absolute;

        top:-480px;
        left:-480px;
        animation: appear 0.8s forwards;

        @keyframes appear{
            0%{
                top:-780px;
                left:-680px;
            }
            100%{
                top:-480px;
                left:-480px;
            }
        }
    }
    .Circle2{
        width: 500px;

        position: absolute;

        bottom:-250px;
        right:-250px;
        
        animation: appear2 0.8s forwards;
        
        @keyframes appear2{
            0%{
                bottom:-450px;
                right:-450px;
            }
            100%{
                bottom:-250px;
                right:-250px;
            }
        }
    }
`

export default Container;