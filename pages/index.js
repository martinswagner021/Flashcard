// Libraries Imports
import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios'


// Hooks Imports
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'


// Components Imports
import { Background } from '../src/components/Home'
import Container from '../src/components/Container'

// Index Component
export default function Index(props) {

    const [user, setUser] = useState('')

    const router = useRouter()

    function findUsername(token) {
        const api = process.env.NEXT_PUBLIC_API_URL

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
                <p>Welcome {user}!</p>
                <img src='./flashcard.png'></img>
                <button>Get started with Flashcards!</button>
            </Container>
        </body>
    </>

)}