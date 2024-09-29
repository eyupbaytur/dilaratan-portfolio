import React from "react";
import Image from "next/image";


  export default function C1({ imagePath }) {

    const imagesC1 = require.context(`../../public/${imagePath}`, true);

    const sortedKeys = imagesC1.keys().sort((a, b) => {
      const numA = parseInt(a.match(/(\d+)/)?.[0] ?? '0');
      const numB = parseInt(b.match(/(\d+)/)?.[0] ?? '0');
      return numA - numB;
    });
    
    // Map over the sorted keys to import images
    const imageList = sortedKeys.map((key) => imagesC1(key));

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