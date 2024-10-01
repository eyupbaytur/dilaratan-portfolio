import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Gallery() {
    return (
            <div className='grid items-center gap-3 md:gap-10 py-10 md:py-10 px-10 md:px-20'>
                        <Link className='' href='projects/fanzin1'>
                            <Image className="" src="/assets/project-images/fanzin1.png" placeholder='blur' blurDataURL='/assets/abkhazia/c1/4.jpg' style={{ width: '100%', height: 'auto' }} sizes="30vw" width={0} height={0} quality={50} alt=""/>
                        </Link>
                        <Link className='' href='projects/fanzin2'>
                            <Image className="" src="/assets/project-images/fanzin2.png" placeholder='blur' blurDataURL='/assets/alanyurt/c1/2.jpg' style={{ width: '100%', height: 'auto' }} sizes="30vw" width={0} height={0} quality={50} alt=""/>
                        </Link>
            </div>
    )
};