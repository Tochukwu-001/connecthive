"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'Connect', href: '/connect' },
        { label: 'About Us', href: '/about' },
        { label: 'Contact', href: '/contact' },
        { label: 'Sign Up', href: '/auth/signin' }
    ]
  return (
    <nav className='px-8 py-3 shadow-md flex items-center justify-between sticky top-0 w-full bg-white'>
        <div className='flex items-center gap-1 z-50'>
            <Image 
                src={"/logo.png"}
                alt="logo"
                width={800}
                height={800}
                className='w-10 h-10'
            />
            <p className='font-bold text-lg max-md:hidden'>ConnectHive</p>
            
        </div>

        <div className='flex items-center gap-7 max-lg:hidden'> 
            {navItems.map((item, index) => (
                <Link 
                    key={index} 
                    href={item.href} 
                    className='text-lg text-gray-700 hover:text-blue-500 transition-colors duration-300'
                >
                    {item.label}
                </Link>
            ))}
        </div>

        {/*Tablet and Mobile*/}
        <div className={`lg:hidden transition-tranform duration-300 ${navOpen ? "translate-x-0" : "translate-x-full"} items-center flex flex-col justify-center gap-16 bg-white h-dvh w-full fixed top-0 left-0`}> 
            {navItems.map((item, index) => (
                <Link 
                    key={index} 
                    href={item.href} 
                    className='text-lg text-gray-700 hover:text-blue-500 transition-colors duration-300'
                >
                    {item.label}
                </Link>
            ))}
        </div>

        <button onClick={() => setNavOpen(!navOpen)} className='lg:hidden z-50 transition-all duration-200'> 
            {navOpen ? (
                <MdClose className='text-2xl lg:hidden' />
            ) : (
                <HiMenuAlt3 className='text-2xl lg:hidden' />
            )}    
        </button>
    
    </nav>
  )
}

export default Navbar