import React from "react"
import Head from 'next/head';
import Navi from '@/components/hamburger'

export default function Projects() {
  return (
    <div>
      <Head>
        <title>Projects</title>
        <meta property="og:title" content="PORTFOLIO | Dilara Tan" />
        <meta property="og:image" content="/assets/og-image.png" />
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <div>
        projects
      </div>
    </div>
  )
};