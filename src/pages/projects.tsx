import React from "react"
import Head from 'next/head';
import Link from "next/link";
import Navbar from "@/components/navbar";
import Gallery from "@/utilities/projects/Gallery";

export default function Projects() {
  return (
    <div>
      <Head>
        <title>Projects</title>
        <meta property="og:title" content="PORTFOLIO | Dilara Tan" />
        <meta property="og:image" content="/assets/og-images/og-home.png" />
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <div>
        <div><Navbar/></div>
        <div><Gallery/></div>
      </div>
    </div>
  )
};