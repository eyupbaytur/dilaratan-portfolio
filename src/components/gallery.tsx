import React from 'react';
import Image from 'next/image';

export default function Gallery() {
    return (
        <div>
            <div className=" grid grid-cols-2 md:grid-cols-3 gap-[1%] p-[5%]">
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src="/assets/portfolio-images/1.jpg" style={{ width: '100%', height: 'auto' }} sizes="100vw" width={0} height={0} quality={75} alt=""/>
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src="/assets/portfolio-images/2.jpg" style={{ width: '100%', height: 'auto' }} sizes="100vw" width={0} height={0} quality={75} alt=""/>
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src="/assets/portfolio-images/3.jpg" style={{ width: '100%', height: 'auto' }} sizes="100vw" width={0} height={0} quality={75} alt=""/>
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src="/assets/portfolio-images/4.jpg"style={{ width: '100%', height: 'auto' }} sizes="100vw" width={0} height={0} quality={75} alt=""/>
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src="/assets/portfolio-images/5.jpg"style={{ width: '100%', height: 'auto' }} sizes="100vw" width={0} height={0} quality={75} alt=""/>
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src="/assets/portfolio-images/6.jpg"style={{ width: '100%', height: 'auto' }} sizes="100vw" width={0} height={0} quality={75} alt=""/>
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src="/assets/portfolio-images/6.jpg"style={{ width: '100%', height: 'auto' }} sizes="100vw" width={0} height={0} quality={75} alt=""/>
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src="/assets/portfolio-images/7.jpg"style={{ width: '100%', height: 'auto' }} sizes="100vw" width={0} height={0} quality={75} alt=""/>
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src="/assets/portfolio-images/8.jpg"style={{ width: '100%', height: 'auto' }} sizes="100vw" width={0} height={0} quality={75} alt=""/>
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src="/assets/portfolio-images/9.jpg"style={{ width: '100%', height: 'auto' }} sizes="100vw" width={0} height={0} quality={75} alt=""/>
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src="/assets/portfolio-images/10.jpg"style={{ width: '100%', height: 'auto' }} sizes="100vw" width={0} height={0} quality={75} alt=""/>
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src="/assets/portfolio-images/11.jpg"style={{ width: '100%', height: 'auto' }} sizes="100vw" width={0} height={0} quality={75} alt=""/>
                </div>
        </div>
{/*
        <div className='p-20'>--------------AYRIM------------</div>
        <div className=" grid grid-cols-3 md:grid-cols-3 gap-[1%] p-[5%]">
            <div className="grid gap-4">
                <div className='position: "fixed"'>
                    <Image className="h-auto max-w-full rounded-lg" src="/assets/portfolio-images/1.jpg" style={{ width: '100%', height: 'auto' }} sizes="100vw" width={0} height={0} quality={75} alt=""/>
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src="/assets/portfolio-images/2.jpg" style={{ width: '100%', height: 'auto' }} sizes="100vw" width={0} height={0} quality={75} alt=""/>
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src="/assets/portfolio-images/3.jpg" style={{ width: '100%', height: 'auto' }} sizes="100vw" width={0} height={0} quality={75} alt=""/>
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src="/assets/portfolio-images/4.jpg"style={{ width: '100%', height: 'auto' }} sizes="100vw" width={0} height={0} quality={75} alt=""/>
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src="/assets/portfolio-images/5.jpg" style={{ width: '100%', height: 'auto' }} sizes="100vw" width={0} height={0} quality={75} alt=""/>
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src="/assets/portfolio-images/6.jpg"style={{ width: '100%', height: 'auto' }} sizes="100vw" width={0} height={0} quality={75}  alt=""/>
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src="/assets/portfolio-images/7.jpg"style={{ width: '100%', height: 'auto' }} sizes="100vw" width={0} height={0} quality={75}  alt=""/>
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src="/assets/portfolio-images/8.jpg"style={{ width: '100%', height: 'auto' }} sizes="100vw" width={0} height={0} quality={75}  alt=""/>
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src="/assets/portfolio-images/9.jpg"style={{ width: '100%', height: 'auto' }} sizes="100vw" width={0} height={0} quality={75}  alt=""/>
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src="/assets/portfolio-images/10.jpg"style={{ width: '100%', height: 'auto' }} sizes="100vw" width={0} height={0} quality={75}  alt=""/>
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src="/assets/portfolio-images/11.jpg"style={{ width: '100%', height: 'auto' }} sizes="100vw" width={0} height={0} quality={75}  alt=""/>
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src="/assets/landing-bg3.jpg"style={{ width: '100%', height: 'auto' }} sizes="100vw" width={0} height={0} quality={75} alt=""/>
                </div>
            </div>
        </div>
*/}
    </div>
    )
};