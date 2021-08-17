import Container from "../styled-components/Container";

function AddCardInput({states, createCard}) {
    const [title, setTitle, description, setDescription, addCardDisplay, setAddCardDisplay] = states

    return(
        <Container>
            <form onSubmit={(e) => {
                e.preventDefault()
                createCard()
            }}>

                <h1>Add Card</h1><br/>
                <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)}/><br/>
                <textarea  rows="5" placeholder="Description" onChange={(e) => setDescription(e.target.value)}></textarea><br/>
                
                <div className="tools">
                    <button type="submit" >Send</button>
                    <button className="close-window" onClick={e => setAddCardDisplay(!addCardDisplay)} >Cancel</button>
                </div>        
            </form>
        </Container>
    )
}

export default AddCardInput