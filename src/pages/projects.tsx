import React from "react"
import Head from 'next/head';
import Navbar from "@/components/navbar";
import ProjectsGallery from "@/components/projectsGallery";

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
        <div><Navbar/></div>
        <div><ProjectsGallery/></div>
      </div>
    </div>
  )
};