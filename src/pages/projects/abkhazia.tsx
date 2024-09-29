import Navbar from "@/components/navbar"
import PortfolioGallery from "@/components/portfolioGallery"
import React from "react"
import Head from 'next/head';

export default function Portfolio() {
  const imagePathway = "/public/assets/projects/abkhazia/c1/";

  return (
    <div>
      <Head>
        <title>Abkhazia</title>
        <meta property="og:title" content="Abkhazia | Dilara Tan" />
        <meta property="og:image" content="/assets/projects/abkhazia/c1/4.png" />
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <div>
        <div><Navbar/></div>
        <div><PortfolioGallery imagePath={imagePathway} /></div>
      </div>
    </div>
  )
};