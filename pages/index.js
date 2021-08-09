import Link from 'next/link'
import axios from 'axios'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import HomeIndex from '../src/components/HomeIndex'
import Background from '../src/components/Background'
import CardStyled from '../src/styled-components/CardStyled'
import Card from '../src/components/Card'
import HeadPattern from '../src/components/HeadPattern'
import Message from '../src/components/Message'

export default function Index() {
    const api = process.env.NEXT_PUBLIC_API_URL

    const [user, setUser] = useState('')
    const [cards, setCards] = useState([])
    const [salutationDisplay, setSalutationDisplay] = useState(true)
    const [message, setMessage] = useState('')

    const router = useRouter()

    
    useEffect(() => {
        const token = sessionStorage.getItem('token')
        
        !token ? router.push('login') : findUsername(token)
    })
    
    function findUsername(token) {
        axios.get(`${api}/user`, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
        .catch((err) => {
            const {message} = err.toJSON()
            console.log(message)
            // err.message json returns an error explanation, since there is no http status handler that was the best option I had

            if(message === "Request failed with status code 401") {

                const urlMessage = new URLSearchParams({
                    "error" : "You need to log in at first!"
                })

                return router.push(`/login?${urlMessage}`)
            }

            setMessage(message)
        })
        .then((res) => {
            setUser(res.data.username)
        })
    }
    
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

 
    return(
        <>
                <HeadPattern/>
            <body>
                <Background />

                { message ? <Message message={message} /> : <></> }
            
                {salutationDisplay ? <HomeIndex user={user} getCards={getCards} /> : <></>}
            
                <CardStyled.Grid>
                    { cards.map((e) => <Card card={e} />) }
                </CardStyled.Grid>
            </body>
        </>

)}