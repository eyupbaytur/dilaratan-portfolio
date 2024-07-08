import React from "react"
import Link from "next/link"
import Image from "next/image"

export default function Adress() {
  return (
    <div className="text-center flex justify-center py-20 md:py-20">
        <ul className="font-sans">
          <h2 className="mb-2 text-lg">Based in Istanbul</h2>
          <p className="mb-2 text-lg">For prints and acquisitions contact me via:</p>
          <a className="mb-1 text-lg" href="mailto:info@dilaratan.com.tr">info@dilaratan.com.tr</a>
          <p className="mb-1 text-lg">or</p>
          <Link className='flex justify-center justify-items-center' target="_blank" href='https://www.instagram.com/dilaratan0/'>
                <p className="">Instagram</p>
                <li className='px-1 py-0.5'><Image src="/assets/instagram-logo.png" alt="" height={20} width={20}/></li>
          </Link>
        </ul>
    </div>
  )
};