import React from "react";
import Image from "next/image";
import Link from "next/link";

const images = require.context("../../public/assets/test-images/", true);

// Get the keys (filenames) and sort them numerically
const sortedKeys = images.keys().sort((a, b) => {
  const numA = parseInt(a.match(/(\d+)/)?.[0] ?? '0');
  const numB = parseInt(b.match(/(\d+)/)?.[0] ?? '0');
  return numA - numB;
});

// Map over the sorted keys to import images
const imageList = sortedKeys.map((key) => images(key));

export default function ProjectsGallery() { 
  return (
    <div className="">
          <Link className='grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-14 py-10 md:py-14 px-10 md:px-20'href='/abkhazia'>
            {imageList.map((image, index) => (
                <Image key={index} className="h-auto max-w-full mb-3 md:mb-14" src={image.default} loading="lazy" placeholder="blur" style={{ width: '100%', height: 'auto' }} sizes="30vw" width={0} height={0} quality={100} alt=""/>
            ))}
          </Link>
    </div>
  );
}