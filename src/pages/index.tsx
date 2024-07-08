import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/navbar';
import Hero from '../components/hero';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dilara Tan Portfolio</title>
        <meta property="og:title" content="Dilara Tan | Portfolio" />
        <meta name="description" content="Connect with me!" />
        <meta property="og:image" content="/assets/landing-bg3.jpg" />
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <div>
        <Hero />
      </div>
    </div>
  )
};