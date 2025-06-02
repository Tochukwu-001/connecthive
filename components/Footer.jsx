import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
<main className='border-t border-gray-300 bg-white text-gray-700 py-2 px-8'>
    <div className='flex items-center justify-between mx-auto flex-wrap gap-4 max-lg:flex-col max-lg:items-center max-lg:text-center max-lg:gap-8 max-w-7xl'>
        <div className='flex items-center gap-1'>
                    <Image 
                        src={"/logo.png"}
                        alt="logo"
                        width={800}
                        height={800}
                        className='w-10 h-10'
                    />
                    <p className='font-bold text-lg max-md:hidden'>ConnectHive</p>
        </div>

        <div className='flex items-center gap-4 flex-wrap text-sm text-gray-600 max-md:flex-col max-lg:items-center max-lg:text-center'>
            <Link href={"#"} className='hover:underline hover:text-gray-900'>FAQs</Link>
            <Link href={"#"} className='hover:underline hover:text-gray-900'>Blog</Link>
            <Link href={"#"} className='hover:underline hover:text-gray-900'>Terms of Use</Link>
            <Link href={"#"} className='hover:underline hover:text-gray-900'>Privacy Policy</Link>
        </div>

        <div className='flex items-center gap-4 text-lg text-gray-600'>
           <Link href={"#"} className='hover:text-black'> <FaInstagram /> </Link>
           <Link href={"#"} className='hover:text-black'> <BsTwitterX /> </Link>
           <Link href={"#"} className='hover:text-black'> <FaGithub /> </Link>
        </div>
    </div>
</main>  
)
}

export default Footer