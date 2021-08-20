import CardStyled from '../styled-components/CardStyled'

function Card({card, methods, states}) {

    const [deleteCard, modifyCard] = methods
    const [title, setTitle, description, setDescription] = states

    return(
        <CardStyled>

            <div className="tools">
                <span>Edit</span>
                <span className="remove" onClick={(e) => deleteCard(card._id)} >X</span>
            </div>
            <h3>{card.title}</h3>
            <p>{card.content}</p>
        </CardStyled>
    )
}

export default Card