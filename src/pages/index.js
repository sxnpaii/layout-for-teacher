import Head from 'next/head'
import { useEffect } from 'react';
// styles
import hero from "@/next-app/styles/sections/HomePage/Hero.module.scss";
// components
import Header from "@/next-app/components/Header";
import Hero from '../sections/HomePage/Hero';
import About from "../sections/HomePage/About";
import Gallery from '../sections/HomePage/Gallery';
import Blogs from '../sections/HomePage/RecentPosts';
// aos
import AOS from "aos";
import "aos/dist/aos.css";
import MainLayout from '../components/MainLayout';

export const getStaticProps = async () => {
  const resp = await fetch(`${process.env.LOCAL_API}/handler`);
  const data = await resp.json();
  return {
    props: {
      data: data
    }
  }
}

export default function Home({ data }) {
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


  return (
    <>
      <Head>
        <title>Отдуши устоз </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <MainLayout className=''>

        <section className={hero.mainHero}>
          <Hero />
        </section>
        <section>
          <About />
        </section>
        <section>
          <Gallery />
        </section>
        <section>
          <Blogs data={data} />
        </section>
      </MainLayout>
    </>
  )
}