import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="logo.svg"/>
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="https://kit.fontawesome.com/f014affbeb.js" crossOrigin="anonymous"></script>
      </body>
    </Html>
  )
}