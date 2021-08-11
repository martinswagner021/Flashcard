import Container from "../styled-components/Container";

function AddCardInput({states, createCard}) {
    const [title, setTitle, description, setDescription] = states

    return(
        <Container>
            <form onSubmit={(e) => {
                e.preventDefault()
                createCard()
            }}>

                <h1>Add Card</h1><br/>
                <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)}/><br/>
                <textarea  rows="5" placeholder="Description" onChange={(e) => setDescription(e.target.value)}></textarea><br/>
                
                <button>Send</button>
            </form>
        </Container>
    )
}

export default AddCardInput