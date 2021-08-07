import MessageBox from "../styled-components/Messages"

function Message({message}) {
    return(
        <MessageBox>
            <p>{message}</p>
        </MessageBox>
    )
}

export default Message