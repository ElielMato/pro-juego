import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import Head from 'next/head'
import Navbar from '@/components/navbar'
 
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>SurGE | Desarrollo Web</title>
      </Head>
      <Navbar/>
      <Component {...pageProps} />
      {/* <Footer/> */}
    </>
  )
    
}