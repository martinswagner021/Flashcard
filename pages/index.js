import Head from 'next/head'
import { PrismaClient } from '@prisma/client'


export default function Index(props) {
    return(
        <>
        <Head>
            <title>Flashcard</title>
        </Head>
        <body>
            Hier unter findet man die ganzen benutzern wir haben:<br></br>
            <div>"hier sollte ein props sein"</div>
            <div></div>
        </body>
    </>

)}

const prisma = new PrismaClient()

export async function getStaticProps() {
    const users = await prisma.benutzer.findMany()
    console.log(users)
    
    return{
        props: {
            users
        }
    }
}