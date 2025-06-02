"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiAlignJustify } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
    // console.log(navOpen);
    
    const navItems =[
        {label: "Home", url:"/"},
        {label: "Connect", url:"/connect"},
        {label: "About Us", url:"/about"},
        {label: "Contact", url:"/contact"},
        {label: "Sign Up", url:"/auth/signin"},
    ]
  return (
   <nav className='px-8 py-3 shadow-md justify-between flex items-center sticky top-0 w-full bg-white'>
    <div className='flex items-center gap-1 z-50'>
        <Image
        src={"/logo.png"}
        alt='logo'
        width={800}
        height={800}
        className='w-10 h-10'
         />
         <p className='font-bold text-lg text-gray-800 max-md:hidden'>ConnectHive</p>
    </div>
     <div className='flex items-center gap-7 max-lg:hidden'>
        {
            navItems.map((item,index) =>(
                 <Link 
                 key={index}
                 href={item.url}
                  className='text-lg hover:text-blue-500 transition-all'>
                    {item.label}
                    </Link>
            ))
        }
         </div>
         {/* tablet and mobile*/}
         <div className={`lg:hidden transition-transform duration-300 ${navOpen ? "translate-x-0" : "translate-x-full"} flex flex-col items-center gap-7 border h-dvh w-full fixed gap-16 bg-white top-0 left-0 justify-center`}>
        {
            navItems.map((item,index) =>(
                 <Link 
                 key={index}
                 href={item.url}
                  className='text-lg hover:text-blue-500 transition-all'>
                    {item.label}
                    </Link>
            ))
        }
         </div>
        <button onClick={() =>{
            setNavOpen(!navOpen)
        }}  className="z-50 lg:hidden">
            {navOpen ? (
                <MdClose className="text-2xl "/>
                ) : (
                     <FiAlignJustify  className="text-2xl lg:hidden"/>
                ) }
        </button>
   </nav>
  )
}


export default Navbar
