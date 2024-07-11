import React from 'react';
import Image from 'next/image';
import Me from "../../public/assets/about/about-image.jpg";

export default function AboutImage() {
    return (
            <div className="">
                <Image
                    className=""
                    placeholder="blur"
                    src={Me}
                    sizes="50vw"
                    width={0}
                    height={0}
                    quality={100}
                    alt=""
                />
            </div>
    )
};