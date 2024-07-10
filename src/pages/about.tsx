import React from "react"
import Head from 'next/head';
import Navbar from "@/components/navbar";

export default function About() {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta property="og:title" content="PORTFOLIO | Dilara Tan" />
        <meta property="og:image" content="/assets/og-image.png" />
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <div>
        <div><Navbar/></div>
      </div>
    </div>
  )
};