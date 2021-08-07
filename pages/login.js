import axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'

import { useState } from 'react'
import { useRouter } from 'next/router'

import Container from '../src/styled-components/Container/index'
import Message from '../src/components/Message'
import Background from '../src/components/Background'

export default function Index(props) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const router = useRouter()    
    
    const reqLogin = () => {
        setMessage('')
        const api = process.env.NEXT_PUBLIC_API_URL
        axios.post(`${api}/login`
        ,{
            username: username,
            password: password
        })
        .then(res => {
            if(res.data.error) {
                setMessage(res.data.error)
            }

            if(res.data.token){
                sessionStorage.setItem('token', res.data.token)
                router.push('/')
            }
        })
    }

    return(
        <>
        <Head>
            <title>Flashcard</title>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700&display=swap" rel="stylesheet"></link>
        </Head>
        <body>
            
            {message ? <Message message={message} /> : <></>}

            <Background />

            <Container>
                    <h1>Login</h1>
                    
                    <form onSubmit={e => {
                            e.preventDefault()
                            reqLogin()
                        }}>

                        <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} /><br></br>
                        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/><br></br>

                        <button type="submit">Submit</button><br></br>
                        <p>Aren't you an User yet? <Link href="./register"><a>Click here to register!</a></Link></p>

                    </form>
            </Container>
        </body>
    </>

)}