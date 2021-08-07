import Card from '../styled-components/Card'

function DisplayCards({card}) {
    return(
        <Card>
            <h1>{card.title}</h1>
            <p>{card.content}</p>
        </Card>
    )
}

export default DisplayCards