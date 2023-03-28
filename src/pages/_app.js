// next modules
import Head from 'next/head';
import '@/next-app/styles/globals.scss';
// react modules
import { useEffect } from 'react';
// aos
import AOS from "aos";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }) {
  // aos
  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: 'scroll',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      delay: 0,
      duration: 400,
      easing: 'ease',
      once: false,
      mirror: true,
      anchorPlacement: 'top-bottom',
    });
  }, []);
  // jsx
  return (
    <>
      <Head>
        <link rel="icon" href="/logo.svg" />
        <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
