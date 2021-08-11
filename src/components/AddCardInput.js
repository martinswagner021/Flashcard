import AddCardStyled from "../styled-components/AddCardStyled";
import Container from "../styled-components/Container";

function AddCardInput() {
    return(
        <Container>
            <form onSubmit={(e) => {
                e.preventDefault()
            }}>

                <h1>Add Card</h1><br/>
                <input type="text" placeholder="Title"/><br/>
                <textarea  rows="5" placeholder="Description"></textarea><br/>
                
                <button>Send</button>
            </form>
        </Container>
    )
}

export default AddCardInput