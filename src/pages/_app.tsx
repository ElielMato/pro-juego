import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import Head from 'next/head'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
 
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pro juegos de Salón</title>

        <link href="https://fonts.googleapis.com/css2?family=Lora&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Overpass&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>

      
    </>
  )
    
}