import React from "react";
import Image from "next/image";

// Ensure correct path based on your project structure
const imagesC2 = require.context("../../public/assets/projects/kestane-mevsimi/c2", true);

const sortedKeys = imagesC2.keys().sort((a, b) => {
  const numA = parseInt(a.match(/(\d+)/)?.[0] ?? '0');
  const numB = parseInt(b.match(/(\d+)/)?.[0] ?? '0');
  return numA - numB;
});

// Map over the sorted keys to import images
const imageList = sortedKeys.map((key) => imagesC2(key));

export default function PortfolioC2() {
  return (
    <div className="">
      {imageList.map((image, index) => {
          return (
            <Image
              key={index}
              className="h-auto max-w-full mb-3 md:mb-14"
              placeholder="blur"
              loading={index < 2 ? 'eager' : 'lazy'}
              src={image.default}
              style={{ width: '100%', height: 'auto' }}
              sizes="30vw"
              quality={100}
              alt=""
            />
          );
          
      })}
    </div>
  );
}