import Navbar from "@/components/navbar"
import Gallery from "@/utilities/alanyurt/Gallery"
import React from "react"
import Head from 'next/head';

export default function Alanyurt() {
  return (
    <div>
      <Head>
        <title>Alanyurt</title>
        <meta property="og:title" content="Alanyurt | Dilara Tan" />
        <meta property="og:image" content="/assets/og-images/og-alanyurt.jpg" />
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <div>
        <div><Navbar/></div>
        <div><Gallery/></div>
      </div>
    </div>
  )
};