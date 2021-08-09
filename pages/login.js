import axios from 'axios'
import Link from 'next/link'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import Container from '../src/styled-components/Container/index'
import Message from '../src/components/Message'
import Background from '../src/components/Background'
import HeadPattern from '../src/components/HeadPattern'
import Loading from '../src/components/Loading'

export default function Index() {
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    
    const router = useRouter()

    const reqLogin = () => {
        setLoading(true)
        setMessage('')

        const api = process.env.NEXT_PUBLIC_API_URL
        axios.post(`${api}/login`
        ,{
            username: username,
            password: password
        })
        .then(res => {

            if(res.data.error) setMessage(res.data.error)

            if(res.data.token){
                sessionStorage.setItem('token', res.data.token)
                router.push('/')
            }

            setLoading(false)
        })
    }

    // It shows the error message if the user was not logged in (message sent from index page through URL)
    useEffect(() => {
        const { error } = router.query
        setMessage(error)
    },[])


    return(
        <>
                <HeadPattern />
            <body>
                <Background />
                {message ? <Message message={message} /> : <></>}

                {loading ? <Loading /> : <> </>}
                
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