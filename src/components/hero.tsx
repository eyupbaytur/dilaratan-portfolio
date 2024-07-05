import React from 'react';
import Image from 'next/image';

export default function Hero() {
    return (
        <div className='absolute flex justify-center items-center'>
            <Image className='object-scale-down md:object-cover ' src="/assets/landing-bg1.jpg" alt="" quality={75} width={0} height={0} sizes="500vw" style={{ width: 'auto', height: 'auto' }}/>
        </div>
    )
};