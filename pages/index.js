// Libraries Imports
import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios'


// Hooks Imports
import { useState, useEffect } from 'react'


// Components Imports


// Index Component
export default function Index(props) {


    // Hooks to process the cards from API
    const [cards, setCards] = useState([])
    
    // Functions used in return function

    //  Get all cards of the user

    useEffect(() => {

        const token = sessionStorage.getItem('token')
        console.log(token)
    
        axios.get(`http://localhost:5000/card`, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
        .then(res => {
            console.log(res.data)
            })
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
            <div><Link href="./login"><a>Click here to Log in!</a></Link></div>

            <div>
                
            </div>
        </body>
    </>

)}