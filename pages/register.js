import Head from 'next/head'
import Link from 'next/link'
import { PrismaClient } from '@prisma/client'

import LoginContainer from '../src/components/Login/index'


export default function Index(props) {
    return(
        <>
        <Head>
            <title>Flashcard</title>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700&display=swap" rel="stylesheet"></link>
        </Head>
        <body>
            <LoginContainer.Background>
            <img className="Circle1" src="./circle.png" />
            <img className="Circle2" src="./circle.png" />
            </LoginContainer.Background>

            <LoginContainer>
                    <h1>Register</h1>
                    <form>
                        <input type="text" placeholder="Username" /><br></br>
                        <input type="password" placeholder="Password" /><br></br>

                        <button type="submit">Submit</button><br></br>
                        <p>Are you already an User? <Link href="./login"><a>Click here to log in!</a></Link></p>
                    </form>
            </LoginContainer>
        </body>
    </>

)}