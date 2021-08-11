import AddCardStyled from "../styled-components/AddCardStyled"
import AddCardInput from "./AddCardInput"


function AddCard({addCardDisplay, setAddCardDisplay}) {
    return(
        <>
            { addCardDisplay===true ? <AddCardInput /> : null }

            <AddCardStyled.Button onClick={() => setAddCardDisplay(!addCardDisplay)}>
                <span>+</span>
            </AddCardStyled.Button>
        </>
    )
}

export default AddCard