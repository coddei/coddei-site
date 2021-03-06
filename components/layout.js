import Head from 'next/head'
import Navbar from './navbar'

function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Coddei</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#0073FF" />
                <link rel="shortcut icon" href="/icons/logo-icon.ico" />
                <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                <meta
                    name="description"
                    content="O Coddei é uma plataforma em desenvolvimento que cria soluções para
                    programadores, designers experientes e também para aqueles que estão começando nessas profissões."
                />
            </Head>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                {children}
            </main>
        </>
    );
}
  
export default Layout