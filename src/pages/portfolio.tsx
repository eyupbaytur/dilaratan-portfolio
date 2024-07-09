import Navbar from "@/components/navbar"
import Gallery from "@/components/gallery"
import React from "react"
import Head from 'next/head';

export default function Portfolio() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta property="og:title" content="PORTFOLIO | Dilara Tan" />
        <meta property="og:image" content="/assets/og-image.png" />
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <div>
        <div><Navbar/></div>
        <div><Gallery/></div>
      </div>
    </div>
  )
};