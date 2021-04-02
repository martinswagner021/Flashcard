import Head from 'next/head'
import { PrismaClient } from '@prisma/client'

import LoginContainer from '../src/components/Login/index'


export default function Index(props) {
    return(
        <>
        <Head>
            <title>Flashcard</title>
        </Head>
        <body>
            <LoginContainer.Background />

            <LoginContainer>
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder="Username" /><br></br>
                        <input type="password" placeholder="Password" /><br></br>

                        <button type="submit">Submit</button>
                    </form>
            </LoginContainer>
        </body>
    </>

)}