import Container from "../styled-components/Container";

function EditCardInput({card_id, states, modifyCard}) {
    const [title, setTitle, description, setDescription, editCardDisplay, setEditCardDisplay] = states

    return(
        <Container>
            <form onSubmit={(e) => {
                e.preventDefault()
                modifyCard(card_id)
            }}>
                {console.log(card_id)}

                <h1>Edit Card</h1><br/>
                <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)}/><br/>
                <textarea  rows="5" placeholder="Description" onChange={(e) => setDescription(e.target.value)}></textarea><br/>
                
                <div className="tools">
                    <button>Send</button>
                    <button className="close-window" onClick={e => setEditCardDisplay(!editCardDisplay)} >Cancel</button>
                </div>        
            </form>
        </Container>
    )
}

export default EditCardInput