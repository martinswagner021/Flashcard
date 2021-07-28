// Libraries Imports
import axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'

// Hooks Imports
import { useState } from 'react'

// Components Imports
import LoginContainer from '../src/components/Login/index'
import MessageBox from '../src/components/Messages'

// Index component
export default function Index(props) {

    // Hooks to get the user input data
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    
    // Functions used in return function
    
    // onClick function that will make the login request
    const reqLogin = () => {
        setMessage('')
        const result = axios.post('http://localhost:5000/login'
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
                console.log(res.data.token)
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

            <LoginContainer.Background>
            <img className="Circle1" src="./circle.png" />
            <img className="Circle2" src="./circle.png" />
            </LoginContainer.Background>

            <LoginContainer>
                    <h1>Login</h1>
                    
                    <form>
                    
                        <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} /><br></br>
                        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/><br></br>

                        <button type="button" onClick={reqLogin}>Submit</button><br></br>
                        <p>Aren't you an User yet? <Link href="./register"><a>Click here to register!</a></Link></p>

                    </form>
            </LoginContainer>
        </body>
    </>

)}