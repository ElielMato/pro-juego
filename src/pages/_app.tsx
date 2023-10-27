import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import Head from 'next/head'
import Navbar from '@/components/navbar'
 
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pro juegos de Salón</title>

        <link href="https://fonts.googleapis.com/css2?family=Lora&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Overpass&display=swap" rel="stylesheet"></link>
      </Head>
      <Navbar/>
      <Component {...pageProps} />
      {/* <Footer/> */}
    </>
  )
    
}