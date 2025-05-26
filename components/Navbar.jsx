"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  console.log(navOpen);

  const navItems = [
    { label: "Home", url: "/" },
    { label: "Connect", url: "/connect" },
    { label: "About Us", url: "/about" },
    { label: "Contact", url: "/contact" },
    { label: "Sign Up", url: "#" },
  ];
  return (
    <nav className="px-8 py-2 shadow-md flex items-center justify-between">
      <div className="flex items-center gap-1">
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

      <button
        onClick={() => {
          setNavOpen(!navOpen);
        }}
      >
        {navOpen ? (
          <MdClose className="text-2xl lg:hidden" />
        ) : (
          <HiOutlineMenuAlt3 className="text-2xl lg:hidden" />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
