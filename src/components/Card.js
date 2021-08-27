import CardStyled from '../styled-components/CardStyled'


function Card({card, methods}) {

    const [deleteCard, modifyCard] = methods

    return(
        <CardStyled>
            <div className="tools">
                <span className="remove" onClick={(e) => deleteCard(card._id)} >X</span>
            </div>
            <h3>{card.title}</h3>
            <p>{card.content}</p>
        </CardStyled>
        
    )
}

export default Card