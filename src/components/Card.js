import CardStyled from '../styled-components/CardStyled'
import EditCardInput from './EditCardInput'

function Card({card, methods, states}) {

    const [deleteCard, modifyCard] = methods
    const [editCardDisplay, setEditCardDisplay, title, setTitle, description, setDescription] = states

    return(
        <CardStyled>
            { editCardDisplay===true ? <EditCardInput states={[title, setTitle, description, setDescription, editCardDisplay, setEditCardDisplay]} card_id={card._id} modifyCard={modifyCard()} /> : null }

            <div className="tools">
                <svg className="edit" onClick={(e) => setEditCardDisplay(!editCardDisplay)} width=".8rem" height=".8rem" viewBox="0 0 24 24"><path d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"/></svg>
                <span className="remove" onClick={(e) => deleteCard(card._id)} >x</span>
            </div>
            <h1>{card.title}</h1>
            <p>{card.content}</p>
        </CardStyled>
    )
}

export default Card