import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import Head from 'next/head'
<<<<<<< HEAD
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
 
=======
import { Navbar, Footer } from '@/components'

>>>>>>> 823f01dfea142ea847c703c0c05f4f4156a515bd
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pro juegos de Salón</title>

<<<<<<< HEAD
        <link href="https://fonts.googleapis.com/css2?family=Lora&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Overpass&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
=======
        <link href="https://fonts.googleapis.com/css2?family=Lora&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Overpass&display=swap" rel="stylesheet" />
>>>>>>> 823f01dfea142ea847c703c0c05f4f4156a515bd
      </Head>
      
      <Navbar/>
      <Component {...pageProps} />
<<<<<<< HEAD
      <Footer/>

      
=======
      <Footer/> 
>>>>>>> 823f01dfea142ea847c703c0c05f4f4156a515bd
    </>
  )
    
}