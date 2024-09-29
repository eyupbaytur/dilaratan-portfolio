import Navbar from "@/components/navbar"
import PortfolioGallery from "@/components/portfolioGallery"
import React from "react"
import Head from 'next/head';

export default function Portfolio() {
  return (
    <div>
      <Head>
        <title>Yağlı Güreş</title>
        <meta property="og:title" content="Kestane Mevsimi | Dilara Tan" />
        <meta property="og:image" content="/assets/projects/yagligures/c1/3.png" />
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <div>
        <div><Navbar/></div>
        <div><PortfolioGallery/></div>
      </div>
    </div>
  )
};