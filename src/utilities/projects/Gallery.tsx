import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Abkhazia from "../../../public/assets/project-images/abkhazia.jpg";
import Alanyurt from "../../../public/assets/project-images/alanyurt.jpg";
import Kestane from "../../../public/assets/project-images/kestanemevsimi.jpg";
import Yagli from "../../../public/assets/project-images/yagligures.jpg";
import Fanzin1 from "../../../public/assets/project-images/fanzin1.png";
import Fanzin2 from "../../../public/assets/project-images/fanzin2.png";

export default function Gallery() {
    return (
        <div className='grid grid-cols-1 md:grid md:justify-center'>
            <div className=''>
                <div className=''>
                    <p className='text-center text-lg lowercase font-sans underline'>Albums</p>
                </div>
                <div className='grid grid-cols-2 gap-3 md:gap-14 py-10 md:py-14 px-10 md:px-20'>
                        <Link className='' href='projects/abkhazia'>
                            <Image className="h-auto max-w-full " src={Abkhazia} placeholder='blur' style={{ width: '100%', height: 'auto' }} sizes="30vw" width={0} height={0} quality={50} alt=""/>
                        </Link>
                        <Link className='' href='projects/alanyurt'>
                            <Image className="h-auto max-w-full " src={Alanyurt} placeholder='blur' style={{ width: '100%', height: 'auto' }} sizes="30vw" width={0} height={0} quality={50} alt=""/>
                        </Link>
                        <Link className='' href='projects/kestanemevsimi'>
                            <Image className="h-auto max-w-full " src={Kestane} placeholder='blur' style={{ width: '100%', height: 'auto' }} sizes="30vw" width={0} height={0} quality={50} alt=""/>
                        </Link>
                        <Link className='' href='projects/yagligures'>
                            <Image className="h-auto max-w-full " src={Yagli} placeholder='blur' style={{ width: '100%', height: 'auto' }} sizes="30vw" width={0} height={0} quality={50} alt=""/>
                        </Link>
                </div>
            </div>
            <div>
                <div className=''>
                    <p className='text-center text-lg lowercase font-sans underline'>Fanzins</p>
                </div>
                <div className='justify-center flex gap-3 md:gap-10 py-10 md:py-14 px-10 md:px-20'>
                        <Link className='' href='projects/abkhazia'>
                            <Image className="h-auto max-w-full " src={Fanzin1} placeholder='blur' blurDataURL='/assets/abkhazia/c1/4.jpg' style={{ width: '100%', height: 'auto' }} sizes="30vw" width={0} height={0} quality={50} alt=""/>
                        </Link>
                        <Link className='' href='projects/alanyurt'>
                            <Image className="h-auto max-w-full " src={Fanzin2} placeholder='blur' blurDataURL='/assets/alanyurt/c1/2.jpg' style={{ width: '100%', height: 'auto' }} sizes="30vw" width={0} height={0} quality={50} alt=""/>
                        </Link>
                </div>
            </div>
        </div>
    )
};