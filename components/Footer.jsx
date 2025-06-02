import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
   <main className='border-t border-gray-300 p-3'>
    <div className='flex items-center justify-between max-lg:flex-col'>
     <div className='flex items-center gap-1'>
            <Image
            src={"/logo.png"}
            alt='logo'
            width={800}
            height={800}
            className='w-10 h-10'
             />
             <p className='font-bold text-lg text-gray-800 max-md:hidden'>ConnectHive</p>
        </div>

        <div className='flex items-center text-sm  gap-5 text-gray-600 max-lg:py-5 max-md:flex-col'>
            <Link href={"#"} className='hover:underline  hover:text-gray-900'>FAQs</Link>
            <Link href={"#"} className='hover:underline  hover:text-gray-900'>Blog</Link>
            <Link href={"#"} className='hover:underline  hover:text-gray-900'>Terms of Use</Link>
            <Link href={"#"} className='hover:underline  hover:text-gray-900'>Privacy Policy</Link>
        </div>
        <div className='text-gray-600 flex items-center gap-5'> 
            <Link href={"#"} className='hover:text-black'><FaInstagram/></Link>
             <Link href={"#"}className='hover:text-black'> <RiTwitterXFill/></Link>
           <Link href={"#"} className='hover:text-black'><FaGithub /></Link>
        </div>
    </div>
   </main>
  )
}

export default Footer
