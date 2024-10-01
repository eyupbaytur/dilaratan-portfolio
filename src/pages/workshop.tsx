import Navbar from "@/components/navbar"
import Adress from "@/components/adress"
import React from "react"
import Head from 'next/head';

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact</title>
        <meta property="og:title" content="PORTFOLIO | Dilara Tan" />
        <meta property="og:image" content="/assets/og-images/og-home.png" />
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <div>
        <div><Navbar/></div>
        <div><Adress/></div>
      </div>
    </div>
  )
};