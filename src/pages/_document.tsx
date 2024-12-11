import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/Menu_Logo.svg" />
        <link href="https://fonts.googleapis.com/css2?family=Lora&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Overpass&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          defer
          src="https://kit.fontawesome.com/f014affbeb.js"
          crossOrigin="anonymous"
        ></script>
      </body>
    </Html>
  );
}
