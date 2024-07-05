import Navbar from "@/components/navbar"
import Gallery from "@/components/gallery"
import React from "react"

export default function Portfolio() {
  return (
    <div>
      <div className="">
        <div className="pb-[15%] md:pb-[5%]"><Navbar/></div>
        <div><Gallery/></div>
      </div>
    </div>
  )
};