import Head from 'next/head'
import Link from 'next/link'
import { PrismaClient } from '@prisma/client'


export default function Index(props) {
    return(
        <>
        <Head>
            <title>Flashcard</title>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700&display=swap" rel="stylesheet"></link>
        </Head>
        <body>
            <div><Link href="./login"><a>Click here to Log in!</a></Link></div>
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