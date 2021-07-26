import styled from "styled-components";

const MessageBox = styled.div`

    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 99;

    /* Display if there is a true message props parameter */
    display: ${({display}) => display};
        
    padding: 20px;    

    max-width: fit-content;
    max-height: fit-content;
    background-color: #${ ( {theme} ) => theme.messages.error.background};
    border: 2px solid #${( {theme} ) => theme.messages.error.border};
    border-radius: 10px;

    animation: slide 4s forwards;

    flex-direction: column;
    align-items: center;
    justify-content: center;

    @keyframes slide {
        0%{
            top: -100%;
        }
        15%{
            top: 50px;
        }
        75%{
            top: 50px;
        }
        100%{
            top: -100%;
        }
    }
`

export default MessageBox