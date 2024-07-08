import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

export default function Navbar() {
    return (
        <div className='sticky w-full h-20 z-[100] text-base font-oswaldfont px-10 md:px-20'>
            <div className='flex justify-between items-center w-full h-full'>
                <Link href='/#Home'>
                    <ul className=' text-base uppercase '>DILARA TAN</ul>
                </Link>
            <div className='text-base uppercase flex justify-between items-center '>
                <ul className='hidden md:flex '>
                    <Link href='/portfolio'>
                        <li className=''>PORTFOLIO</li>
                    </Link>
                    <Link href='/projects'>
                        <li className='ml-10 '>PROJECTS</li>
                    </Link>
                    <Link href='/about'>
                        <li className='ml-10 '>ABOUT</li>
                    </Link>
                    <Link href='/contact'>
                        <li className='ml-10 '>CONTACT</li>
                    </Link>
                    <Link className='ml-10 relative h-6 w-6' target="_blank" href='https://www.instagram.com/dilaratan0/'>
                        <li className=''><Image src="/assets/instagram-logo.png" alt="" objectPosition='bottom' fill/></li>
                    </Link>
                </ul>
                <div className='md:hidden'>
                    <AiOutlineMenu size={25}/>
                </div>
            </div>
            <div className='hidden fixed left-0 top-0 w-full h-screen bg-black/70'>
                <div className='fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'>
                    <div>
                        <div className='felx w-full items-center justify-between'>
                            <div className='rounded-full p-3 cursor-pointer'>
                                <AiOutlineClose/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
};