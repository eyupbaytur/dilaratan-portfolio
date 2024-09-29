import Navbar from "@/components/navbar"
import PortfolioGallery from "@/components/portfolioGallery"
import React from "react"
import Head from 'next/head';

export default function Portfolio() {
  return (
    <div>
      <Head>
        <title>Alanyurt</title>
        <meta property="og:title" content="Alanyurt | Dilara Tan" />
        <meta property="og:image" content="/assets/projects/alanyurt/c1/2.png" />
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <div>
        <div><Navbar/></div>
        <div><PortfolioGallery/></div>
      </div>
    </div>
  )
};