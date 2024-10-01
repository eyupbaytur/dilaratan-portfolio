import Hero from '@/components/hero';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dilara Tan Portfolio</title>
        <meta property="og:title" content="PORTFOLIO | Dilara Tan" />
        <meta property="og:image" content="/assets/og-images/og-home.png" />
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <div>
        <Hero />
      </div>
    </div>
  )
};