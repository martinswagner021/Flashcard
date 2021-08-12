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
import Loading from '../src/components/Loading'
import AddCard from '../src/components/AddCard'

export default function Index() {
    const api = process.env.NEXT_PUBLIC_API_URL

    const [user, setUser] = useState('')
    const [cards, setCards] = useState([])
    const [salutationDisplay, setSalutationDisplay] = useState(true)
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(true)
    const [addCardDisplay, setAddCardDisplay] = useState(false)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    

    const router = useRouter()

    
    useEffect(() => {
        const token = sessionStorage.getItem('token')
        
        !token ? router.push('login') : findUsername(token)
    }, [])
    
    function findUsername(token) {
        setLoading(true)

        axios.get(`${api}/user`, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
        .catch(err => errorHandler(err))
        .then((res) => {
            setUser(res.data.username)

            setLoading(false)
        })
    }
    
    function getCards() {
        setLoading(true)

        const token = sessionStorage.getItem('token')
        console.log(token)

        axios.get(`${api}/card`, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        }).then((res) => {
            setSalutationDisplay(false)
            setCards(res.data.result)

            setLoading(false)
        })
    }

    function createCard() {
        setLoading(true)
    
        const token = sessionStorage.getItem('token')
    
        axios.post(`${api}/card`, {
            title: title,
            content: description
        }, {
            headers: {
                "authorization": `Bearer ${token}`
            }
        })
        .catch(err => errorHandler(err))
        .then((res) => {
            getCards()
            setAddCardDisplay(false)    
            setLoading(false)
        })
    }

    function errorHandler(err) {
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
    }

 
    return(
        <>
                <HeadPattern/>
            <body>
                <Background />
                { message ? <Message message={message} /> : null }
            
                { loading ? <Loading /> : null }

                {salutationDisplay ? <HomeIndex user={user} getCards={getCards} /> : null}
            
                <CardStyled.Grid>
                    { cards.map((e) => <Card card={e} />) }
                </CardStyled.Grid>

                { !salutationDisplay ? <AddCard states={[
                    addCardDisplay, setAddCardDisplay, title, setTitle, description, setDescription
                ]}
                
                createCard={createCard} /> : null}
                

            </body>
        </>

)}