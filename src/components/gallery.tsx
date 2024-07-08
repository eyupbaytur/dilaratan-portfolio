import React from 'react';
import Image from 'next/image';

export default function Gallery() {
    return (
            <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-14 p-10 md:p-20">
                <div className="grid-flow-row ">
                    <Image className="h-auto max-w-full mb-3 md:mb-14" src="/assets/portfolio-images/1.jpg"loading='lazy' style={{ width: '100%', height: 'auto' }} sizes="100vw" width={0} height={0} quality={75} alt=""/>

                    <Image className="h-auto max-w-full mb-3 md:mb-14" src="/assets/portfolio-images/2.jpg"loading='lazy' style={{ width: '100%', height: 'auto' }} sizes="100vw" width={0} height={0} quality={75} alt=""/>

                    <Image className="h-auto max-w-full mb-3 md:mb-14" src="/assets/portfolio-images/3.jpg"loading='lazy' style={{ width: '100%', height: 'auto' }} sizes="100vw" width={0} height={0} quality={75} alt=""/>

                    <Image className="h-auto max-w-full mb-3 md:mb-14" src="/assets/portfolio-images/4.jpg"loading='lazy' style={{ width: '100%', height: 'auto' }} sizes="100vw" width={0} height={0} quality={75} alt=""/>

                    <Image className="h-auto max-w-full mb-3 md:mb-14" src="/assets/portfolio-images/5.jpg"loading='lazy' style={{ width: '100%', height: 'auto' }} sizes="100vw" width={0} height={0} quality={75} alt=""/>

                    <Image className="h-auto max-w-full mb-3 md:mb-14" src="/assets/portfolio-images/6.jpg"loading='lazy' style={{ width: '100%', height: 'auto' }} sizes="100vw" width={0} height={0} quality={75} alt=""/>
                </div>
                <div className="grid-flow-row gap-3 md:gap-14">
                    <Image className="h-auto max-w-full mb-3 md:mb-14" src="/assets/portfolio-images/7.jpg"loading='lazy' style={{ width: '100%', height: 'auto' }} sizes="100vw" width={0} height={0} quality={75} alt=""/>

                    <Image className="h-auto max-w-full mb-3 md:mb-14" src="/assets/portfolio-images/8.jpg"loading='lazy' style={{ width: '100%', height: 'auto' }} sizes="100vw" width={0} height={0} quality={75} alt=""/>

                    <Image className="h-auto max-w-full mb-3 md:mb-14" src="/assets/portfolio-images/9.jpg"loading='lazy' style={{ width: '100%', height: 'auto' }} sizes="100vw" width={0} height={0} quality={75} alt=""/>

                    <Image className="h-auto max-w-full mb-3 md:mb-14" src="/assets/portfolio-images/10.jpg"loading='lazy' style={{ width: '100%', height: 'auto' }} sizes="100vw" width={0} height={0} quality={75} alt=""/>
                    
                    <Image className="h-auto max-w-full mb-3 md:mb-14" src="/assets/portfolio-images/11.jpg"loading='lazy' style={{ width: '100%', height: 'auto' }} sizes="100vw" width={0} height={0} quality={75} alt=""/>
                    
                    <Image className="h-auto max-w-full mb-3 md:mb-14" src="/assets/portfolio-images/12.jpg"loading='lazy' style={{ width: '100%', height: 'auto' }} sizes="100vw" width={0} height={0} quality={75} alt=""/>
                </div>
            </div>
    )
};