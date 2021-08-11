import AddCardStyled from "../styled-components/AddCardStyled"
import AddCardInput from "./AddCardInput"


function AddCard({states, createCard}) {
    const [addCardDisplay, setAddCardDisplay, title, setTitle, description, setDescription] = states

    return(
        <>
            { addCardDisplay===true ? <AddCardInput states={[title, setTitle, description, setDescription]} createCard={createCard} /> : null }

            <AddCardStyled.Button onClick={() => setAddCardDisplay(!addCardDisplay)}>
                <span>+</span>
            </AddCardStyled.Button>
        </>
    )
}

export default AddCard