import Head from 'next/head';
import Script from 'next/script';
import '@/next-app/styles/globals.scss'

export default function App({ Component, pageProps }) {

  return (
    <>
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
