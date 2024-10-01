import React from "react"
import Head from 'next/head';
import Navbar from "@/components/navbar";
import AboutImage from "@/components/aboutImage";
import AboutInfo from "@/components/aboutInfo";
import Adress from "@/components/adress";

export default function About() {
  return (
    <div className="lg:overflow-hidden h-screen">
      <Head>
        <title>About</title>
        <meta property="og:title" content="PORTFOLIO | Dilara Tan" />
        <meta property="og:image" content="/assets/og-images/og-home.png" />
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <div className="">
        <div><Navbar/></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-14 py-10 lg:py-10 px-10 lg:px-28">
          <div className="sm:px-20 lg:px-0">
            <div className=""><AboutInfo/></div>
            <div className=""><Adress/></div>
          </div>
          <div className="order-first lg:order-none sm:px-20 lg:px-0">
            <div className=""><AboutImage/></div>
          </div>
        </div>
      </div>
    </div>
  )
};