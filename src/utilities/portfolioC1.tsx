import React from "react";
import Image from "next/image";

// Ensure correct path based on your project structure
const imagesC1 = require.context("../../public/assets/portfolio-images/column1", true);

const sortedKeys = imagesC1.keys().sort((a, b) => {
  const numA = parseInt(a.match(/(\d+)/)?.[0] ?? '0');
  const numB = parseInt(b.match(/(\d+)/)?.[0] ?? '0');
  return numA - numB;
});

// Map over the sorted keys to import images
const imageList = sortedKeys.map((key) => imagesC1(key));

export default function PortfolioC1() {
  return (
    <div className="">
      {imageList.map((image, index) => {
        if (index < 2) {
          return (
            <Image
              key={index}
              className="h-auto max-w-full mb-3 md:mb-14"
              placeholder="blur"
              src={image.default}
              style={{ width: '100%', height: 'auto' }}
              sizes="30vw"
              width={0}
              height={0}
              quality={100}
              alt=""
            />
          );
        } else {
          return (
            <Image
              key={index}
              className="h-auto max-w-full mb-3 md:mb-14"
              placeholder="blur"
              loading="lazy"
              src={image.default}
              style={{ width: '100%', height: 'auto' }}
              sizes="30vw"
              width={0}
              height={0}
              quality={100}
              alt=""
            />
          );
        }
      })}
    </div>
  );
}