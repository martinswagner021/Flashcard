// Libraries Imports
import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios'


// Hooks Imports
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'


// Components Imports
import Container from '../src/styled-components/Container'
import DisplayCards from '../src/components/DisplayCards'
import Card from '../src/styled-components/Card'
import HomeIndex from '../src/components/HomeIndex'

// Index Component
export default function Index(props) {
    const api = process.env.NEXT_PUBLIC_API_URL

    const [user, setUser] = useState('')
    const [cards, setCards] = useState([])
    const [salutationDisplay, setSalutationDisplay] = useState(true)

    const router = useRouter()


    function findUsername(token) {
        axios.get(`${api}/user`, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
        .catch((error) => {
            const {message} = error.toJSON()
            message === "Request failed with status code 401" ? router.push('/login') : console.log(message)
        })
        .then((res) => {
            setUser(res.data.username)
        })
    }

    useEffect(() => {
        const token = sessionStorage.getItem('token')
        
        !token ? router.push('login') : findUsername(token)
    })


    function getCards() {
        const token = sessionStorage.getItem('token')

        axios.get(`${api}/card`, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        }).then((res) => {
            setSalutationDisplay(false)
            setCards(res.data.result)
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
            
            {salutationDisplay ? <HomeIndex user={user} getCards={getCards} /> : <></>}
            
            <Card.Grid>
                {
                    cards.map((e) => 
                        <DisplayCards card={e} />
                    )
                }
            </Card.Grid>
        </body>
    </>

)}