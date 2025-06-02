"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  console.log(navOpen);


  
  const navItems = [
    { label: "Home", url: "/" },
    { label: "Connect", url: "/connect" },
    { label: "About Us", url: "/about" },
    { label: "Contact", url: "/contact" },
    { label: "Sign Up", url: "/#" },
  ];

  return (
    <nav className="px-8 py-2 flex items-center justify-between shadow-md sticky top-0 z-50 w-full bg-">
      <div className="flex items-center gap-1 ">
        <Image
          src={"/logo.png"}
          alt="logo"
          width={800}
          height={800}
          className="w-10 h-10"
        />

        <p className="font-bold text-lg text-gray-800 max-md:hidden">
          ConnectHive
        </p>
      </div>

      <div className="flex items-center gap-7 max-lg:hidden">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.url}
            className="text-lg hover:text-blue-500 transition-all"
          >
            {item.label}
          </Link>
        ))}
      </div>


        {/* for mobile and tablet */}

      <div className={`transition-transform duration-300 flex-col ${navOpen ? "translate-x-0" : "translate-x-full"}  flex items-center gap-7 lg:hidden justify-center gap-16 bg-white h-dvh w-full fixed top-0 left-0`} >
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.url}
            className="text-lg hover:text-blue-500 transition-all"
          >
            {item.label}
          </Link>
        ))}
      </div>

      <button
        className="lg:hidden z-50"
        onClick={() => {
          setNavOpen(!navOpen);
        }}
      >
        {navOpen ? <MdClose /> : <GiHamburgerMenu className="text-2xl" />}
      </button>
    </nav>
    
  );
};

export default Navbar;
