import Navbar from "@/components/navbar"
import PortfolioGallery from "@/utilities/yagligures/Gallery"
import React from "react"
import Head from 'next/head';

export default function Portfolio() {
  return (
    <div>
      <Head>
        <title>Yağlı Güreş</title>
        <meta property="og:title" content="Yağlı Güreş | Dilara Tan" />
        <meta property="og:image" content="/assets/og-images/og-yagligures.jpg" />
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <div>
        <div><Navbar/></div>
        <div><PortfolioGallery/></div>
      </div>
    </div>
  )
};