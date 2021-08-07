import Container from "../styled-components/Container"

function HomeIndex({user, getCards}) {
        return (
            <Container>
                <Container.Salutation>
                    <p>Welcome <span>{user}</span>!</p><br/>
                    
                    <p className="Description">What are <span>Flashcards</span>?<br/><br/>
                    Flashcards are a way to learn new things!<br/>
                    With them you write a title and add a short description, so that later on if you want to remember something. You can check its value here in our Flashcard app!</p>
                    
                    <img className="FlashcardIcon" src='./flashcard.png'></img>
                    <button onClick={getCards}>Get started with Flashcards!</button>
                </Container.Salutation>
            </Container>
        )
}

export default HomeIndex