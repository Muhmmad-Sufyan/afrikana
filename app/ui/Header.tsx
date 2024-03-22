import Link from 'next/link'
import React from 'react'
import { bebas } from './fonts'

const Header = () => {



    return (
        <header className="bg-gray-800 z-10 bg-[url('/header.png')]  w-full  xs:h-44 h-24 text-white fixed">


            <nav >

                <div className="flex items-center xs:justify-between mob:gap-x-5 h-full px-6">
                    <img src="/logo.png" alt="Logo" className="xs:h-20 h-16 lg:h-30 xl:h-32" />

                    <ul className={`lg:flex iteam-end hidden text-md space-x-4 lg:space-x-5 lg:text-lg xl:space-x-6 xl:text-xl 2xl:space-x-8 2xl:text-2xl ${bebas.className}`}>
                        <li><Link href="#" >Starter</Link></li>
                        <li><Link href="#" >Mains</Link></li>
                        <li><Link href="#" >specials</Link></li>
                        <li><Link href="#" >chicken</Link></li>
                        <li><Link href="#" >sharing</Link></li>
                        <li><Link href="#" >sides</Link></li>
                        <li><Link href="#" >drinks</Link></li>
                        <li><Link href="#" >desserts</Link></li>
                    </ul>
                    <svg className='w-10 h-10 mr-8' width="69" height="51" viewBox="0 0 69 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect opacity="0.45" width="69" height="50.1818" fill="#AC6A30" />
                        <rect x="12.5454" y="10.9773" width="43.9091" height="3.13636" fill="white" />
                        <rect x="12.5454" y="23.5227" width="43.9091" height="3.13636" fill="white" />
                        <rect x="12.5454" y="36.0682" width="43.9091" height="3.13636" fill="white" />
                    </svg>
                </div>


                <div className='mx-2 px-4 lg:hidden justify-center w-full'>
                    <ul className={`flex xs:justify-center  justify-start    overflow-x-auto  sm:space-x-4 space-x-3 text-base ${bebas.className}`}>
                        <li><Link href="#" >Starter</Link></li>
                        <li><Link href="#" >Mains</Link></li>
                        <li><Link href="#" >specials</Link></li>
                        <li><Link href="#" >chicken</Link></li>
                        <li><Link href="#" >sharing</Link></li>
                        <li><Link href="#" >sides</Link></li>
                        <li><Link href="#" >drinks</Link></li>
                        <li><Link href="#" >desserts</Link></li>
                    </ul>
                </div>
            </nav>

        </header>
    )
}

export default Header;
