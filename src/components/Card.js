import CardStyled from '../styled-components/CardStyled'
import AddCard from './AddCard'

function Card({card}) {
    return(
        <CardStyled>
            <h1>{card.title}</h1>
            <p>{card.content}</p>
        </CardStyled>
    )
}

export default Card