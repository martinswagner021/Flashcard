import MessageStyled from "../styled-components/MessageStyled"

function Message({message}) {
    return(
        <MessageStyled>
            <p>{message}</p>
        </MessageStyled>
    )
}

export default Message