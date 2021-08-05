// Libraries Imports
import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios'


// Hooks Imports
import { useState, useEffect, createElement } from 'react'
import { useRouter } from 'next/router'


// Components Imports
import Container from '../src/components/Container'

// Index Component
export default function Index(props) {
    const api = process.env.NEXT_PUBLIC_API_URL

    const [user, setUser] = useState('')

    const router = useRouter()


    function findUsername(token) {
        axios.get(`${api}/user`, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        }).then((res) => {
            setUser(res.data.username)
        })
    }
    useEffect(() => {
        const token = sessionStorage.getItem('token')
        
        if(!token) {
            return router.push('/login')
        }

        findUsername(token)
    })


    function getStarted() {
        const token = sessionStorage.getItem('token')

        axios.get(`${api}/card`, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        }).then((res) => {
            
        })
    }

 
    // HTML Return Function
    return(
        <>
        <Head>
            <title>Flashcard</title>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700&display=swap" rel="stylesheet"></link>
        </Head>
        <body>
            <Container.Background>
                <img className="Circle1" src="./circle.png" />
                <img className="Circle2" src="./circle.png" />
            </Container.Background>

            <Container>
                <Container.Salutation>
                    <p>Welcome <span>{user}</span>!</p><br/>
                    
                    <p className="Description">What are <span>Flashcards</span>?<br/><br/>
                    Flashcards are a way to learn new things!<br/>
                    With them you write a title and add a short description, so that later on if you want to remember something. You can check its value here in our Flashcard app!</p>
                    
                    <img className="FlashcardIcon" src='./flashcard.png'></img>
                    <button onClick={getStarted}>Get started with Flashcards!</button>
                </Container.Salutation>

                <Container.DisplayCards cards={props.cards}>
                    {}
                </Container.DisplayCards>
            </Container>
        </body>
    </>

)}