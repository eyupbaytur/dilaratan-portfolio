import Navbar from "@/components/navbar"
import Gallery from "@/utilities/kestanemevsimi/Gallery"
import React from "react"
import Head from 'next/head';

export default function Portfolio() {
  return (
    <div>
      <Head>
        <title>Kestane Mevsimi</title>
        <meta property="og:title" content="Kestane Mevsimi | Dilara Tan" />
        <meta property="og:image" content="/assets/og-images/og-kestanemevsimi.jpg" />
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <div>
        <div><Navbar/></div>
        <div><Gallery/></div>
      </div>
    </div>
  )
};