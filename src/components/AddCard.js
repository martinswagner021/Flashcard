import AddCardStyled from "../styled-components/AddCardStyled"
import AddCardInput from "./AddCardInput"


function AddCard({addCardDisplay, setAddCardDisplay}) {
    return(
        <>
            { !addCardDisplay === true ? <AddCardInput /> : <></> }
            <AddCardStyled onClick={() => {
                if(addCardDisplay === true) setAddCardDisplay=false
                else setAddCardDisplay=true
            }}>
                <span>+</span>
            </AddCardStyled>
        </>
    )
}

export default AddCard