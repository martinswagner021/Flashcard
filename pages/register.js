// Libraries Imports
import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios'

// Hooks Imports
import { useState } from 'react'
import { useRouter } from 'next/router'

// Components Imports
import Container from '../src/components/Container/index'
import MessageBox from '../src/components/Messages'

// Index component
export default function Index(props) {

    // Hooks to get the user input data
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const router = useRouter()

    
    // Functions used in return function
    
    // onClick function that will make the register request
    const reqRegister = () => {
        setMessage('')
        const api = process.env.NEXT_PUBLIC_API_URL
        axios.post(`${api}/register`
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


    // HTML Return function
    return(
        <>
        <Head>
            <title>Flashcard</title>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700&display=swap" rel="stylesheet"></link>
        </Head>
        <body>

            <MessageBox display={message?'flex':'none'}>
                <p>{message}</p>
            </MessageBox>


            <Container.Background>
            <img className="Circle1" src="./circle.png" />
            <img className="Circle2" src="./circle.png" />
            </Container.Background>

            <Container>
                    <h1>Register</h1>

                    <Container.Form>

                        <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)}/><br></br>
                        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/><br></br>

                        <button type="button" onClick={reqRegister}>Submit</button><br></br>

                        <p>Are you already an User? <Link href="./login"><a>Click here to log in!</a></Link></p>
                    </Container.Form>

            </Container>
        </body>
    </>

)}