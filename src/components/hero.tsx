import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
    return (
        <div className='absolute flex justify-center items-center'>
            <Image className='object-scale-down md:object-cover ' src="/assets/landing-bg1.jpg" alt="" quality={100} width={0} height={0} sizes="500vw" style={{ width: 'auto', height: 'auto' }}/>
        </div>
    )
};

export default Hero