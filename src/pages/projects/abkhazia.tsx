import Navbar from "@/components/navbar"
import Gallery from "@/utilities/abkhazia/Gallery";
import React from "react"
import Head from 'next/head';

export default function Abkhazia() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta property="og:title" content="Abkhazia | Dilara Tan" />
        <meta property="og:image" content="/assets/og-images/og-abkhazia.jpg" />
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <div>
        <div><Navbar/></div>
        <div><Gallery/></div>
      </div>
    </div>
  )
};