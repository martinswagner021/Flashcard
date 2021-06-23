import Head from 'next/head'
import Link from 'next/link'


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