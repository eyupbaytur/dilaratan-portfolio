import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Gallery() {
    return (
            <div className='grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-14 py-10 md:py-14 px-10 md:px-20'>
                    <Link className='' href='projects/abkhazia'>
                        <Image className="h-auto max-w-full mb-3 md:mb-14" src="/assets/abkhazia/c1/4.jpg" placeholder='blur' blurDataURL='/assets/abkhazia/c1/4.jpg' style={{ width: '100%', height: 'auto' }} sizes="30vw" width={0} height={0} quality={100} alt=""/>
                    </Link>
                    <Link className='' href='projects/alanyurt'>
                        <Image className="h-auto max-w-full mb-3 md:mb-14" src="/assets/alanyurt/c1/2.jpg" placeholder='blur' blurDataURL='/assets/alanyurt/c1/2.jpg' style={{ width: '100%', height: 'auto' }} sizes="30vw" width={0} height={0} quality={100} alt=""/>
                    </Link>
                    <Link className='' href='projects/kestanemevsimi'>
                        <Image className="h-auto max-w-full mb-3 md:mb-14" src="/assets/kestanemevsimi/c1/2.jpg" placeholder='blur' blurDataURL='/assets/kestanemevsimi/c1/2.jpg' style={{ width: '100%', height: 'auto' }} sizes="30vw" width={0} height={0} quality={100} alt=""/>
                    </Link>
                    <Link className='' href='projects/yagligures'>
                        <Image className="h-auto max-w-full mb-3 md:mb-14" src="/assets/yagligures/c1/3.jpg" placeholder='blur' blurDataURL='/assets/yagligures/c1/3.jpg' style={{ width: '100%', height: 'auto' }} sizes="30vw" width={0} height={0} quality={100} alt=""/>
                    </Link>
            </div>
    )
};