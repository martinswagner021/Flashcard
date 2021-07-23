import styled from "styled-components";

const MessageBox = styled.div`

    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 99;

    display: flex;
    padding: 20px;

    max-width: fit-content;
    max-height: fit-content;
    background-color: #FFD6D6;
    border: 2px solid #7A0000;
    border-radius: 10px;

    animation: .8s slide forwards;

    flex-direction: column;
    align-items: center;
    justify-content: center;

    @keyframes slide {
        0%{
            right: 0%;
        }
        100%{
            left: 50%;
        }
    }
`

export default MessageBox