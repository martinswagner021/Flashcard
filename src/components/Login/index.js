import styled from 'styled-components';

const LoginContainer = styled.div`
    position: absolute;
    top: 50vh;
    left: 50%;
    width: 400px;
    height: 300px;
    transform: translate(-50%, -50%);

    background-color: #eeeeee;
    border: 2px solid ${ ( {theme} ) => theme.primary};
    border-radius: 20px;
    box-shadow: 1px 1px 10px black;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        
        margin-top: 30px;

        input{
            height: 30px;
            width: 200px;
            
            background-color: transparent;

            border: 0px;
            border-bottom: 2px solid ${ ( {theme} ) => theme.primary};
        }
        input:focus{
            outline: 0px;
            background-color: transparent;

            border: 2px solid ${ ( {theme} ) => theme.primary};
        }
        input::placeholder{
            text-align: center;
            margin-left: 5px;
        }

        button{
            background-color: ${ ( {theme} ) => theme.primary};
            border: 0px;
            border-radius: 50px;

            width: 130px;
            height: 40px;

            color: #ffffff;
        }

        *{
            margin-top: 10px;
        }
    }
`

LoginContainer.Background = styled.div`
    background-color: lightgray;
    
    position: fixed;
    top: 0;
    left: 0;
    z-index: -99;
    width: 100%;
    height: 100vh

`

export default LoginContainer;