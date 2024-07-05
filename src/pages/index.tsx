import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/navbar';
import Hero from '../components/hero';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dilara Tan Portfolio</title>
        <meta name="description" content="Ben bağımsız bir fotoğrafçıyım." />
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <div>
        <Navbar />
        <Hero />
      </div>
    </div>
  )
};