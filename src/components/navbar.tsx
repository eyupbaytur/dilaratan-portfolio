import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Hamburger from '@/components/hamburger';
import { useState } from 'react';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleNav = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <div className='sticky w-full h-20 z-[100] text-base text-gray-800 font-oswaldfont px-10 md:px-20 py-10 md:py-14'>
            <div>
                <div className='flex justify-between items-center w-full h-full'>
                    <Link href='/#Home'>
                        <ul className=' md:left-auto left-10 text-base uppercase '>DILARA TAN</ul>
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
                            <li className=''><Image src="/assets/instagram-logo.png" alt="" loading="eager" objectPosition='bottom' fill/></li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className='md:hidden cursor-pointer'>
                        <Hamburger/>
                    </div>
                </div>
            </div>
            <div className={
                menuOpen
                ? 'fixed m:hidden left-0 top-0 w-full h-screen'
                : 'hidden'
                }>
                <div className='fixed md:hidden left-0 top-0 w-[100%] sm:w-[100%] md:w-[45%] h-screen bg-[#ffffff] p-10 ease-in duration-500'>
                    <div className=''>
                        <div className='flex w-full items-center justify-between'>
                            <div>
                                <Link href='/#Home'>
                                    <ul className='text-gray-800 text-base uppercase '>DILARA TAN</ul>
                                </Link>
                            </div>
                            <div onClick={handleNav} className='cursor-pointer'>
                                <Hamburger/>
                            </div>
                        </div>
                        <div className='justify-center top-[25%] bottom-[25%] left-[25%] right-[25%] fixed text-gray-800'>
                            <ul className='text-4xl text-center uppercase'>
                                <Link href='/portfolio'>
                                    <li className='mb-3'>PORTFOLIO</li>
                                </Link>
                                <Link href='/projects'>
                                    <li className='mb-3'>PROJECTS</li>
                                </Link>
                                <Link href='/about'>
                                    <li className='mb-3'>ABOUT</li>
                                </Link>
                                <Link href='/contact'>
                                    <li className=''>CONTACT</li>
                                </Link>
                            </ul>
                        </div>
                        <div className='fixed left-0 bottom-10 w-full'>
                            <Link className='justify-center flex' target="_blank" href='https://www.instagram.com/dilaratan0/'>
                                <Image src="/assets/instagram-logo.png" alt="" height={30} width={30}/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
};