import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/navbar';
import Hero from '../components/hero';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dilara Tan Portfolio</title>
        <meta property="og:title" content="PORTFOLIO | Dilara Tan" />
        <meta property="og:image" content="/assets/og-image.png" />
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <div>
        <Hero />
      </div>
    </div>
  )
};