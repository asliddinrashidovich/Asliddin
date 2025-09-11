"use client"

import Link from 'next/link'
import { useEffect, useState } from 'react';
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        
        return () => {
        window.removeEventListener("scroll", handleScroll);
      };
  }, []);
  return (
    <header className={`top-0 fixed w-full px-5 md:px-10 z-999  ${ scrolled ? "bg-[#353a40] bg-white/10 backdrop-blur-md" : "bg-transparent"}`}  id="header">
      <div className="max-w-[1200px] mx-auto  flex justify-between items-center">
        <button id="btn" className="flex lg:hidden border-none bg-transparent   text-[30px] hover:text-[#21c998] transition-all duration-300 cursor-pointer">
          <IoMenu />
        </button>
        <Link href="/" className="select-none cursor-pointer">
          <img src="/images/header/header.svg" className="pointer-events-none" alt="header logo" />
        </Link>
        <ul className="hidden gap-7 items-center lg:flex">
          <li>
            <Link href={'#home'} className="relative text-[#999] inline-block group text-xl font-semibold hover:text-[#21c998] transition-all duration-300">
              Home
              <span
                className="absolute left-0 -bottom-1 rounded-[2px] h-[3px] w-0 bg-[#21c998] transition-all duration-300 group-hover:w-full"
              ></span>
            </Link>
          </li>
          <li>
            <Link href={'#about'} className="relative text-[#999] inline-block group text-xl font-semibold hover:text-[#21c998] transition-all duration-300">
              About
              <span
                className="absolute left-0 -bottom-1 rounded-[2px] h-[3px] w-0 bg-[#21c998] transition-all duration-300 group-hover:w-full"
              ></span>
            </Link>
          </li>
          <li>
            <Link href={'#resume'} className="relative text-[#999] inline-block group text-xl font-semibold hover:text-[#21c998] transition-all duration-300">
              Resume
              <span
                className="absolute left-0 -bottom-1 rounded-[2px] h-[3px] w-0 bg-[#21c998] transition-all duration-300 group-hover:w-full"
              ></span>
            </Link>
          </li>
          <li>
            <Link href={'#portfolio'} className="relative text-[#999] inline-block group text-xl font-semibold hover:text-[#21c998] transition-all duration-300">
              Portfolio
              <span
                className="absolute left-0 -bottom-1 rounded-[2px] h-[3px] w-0 bg-[#21c998] transition-all duration-300 group-hover:w-full"
              ></span>
            </Link>
          </li>
          <li>
            <Link href={'#contact'} className="relative text-[#999] inline-block group text-xl font-semibold hover:text-[#21c998] transition-all duration-300">
              Contact
              <span
                className="absolute left-0 -bottom-1 rounded-[2px] h-[3px] w-0 bg-[#21c998] transition-all duration-300 group-hover:w-full"
              ></span>
            </Link>
          </li>
        </ul>
        <Link href="tel:+998946092401" className='text-[30px] text-[#999] hover:text-[#21c998] transition-all duration-300'>
          <BsFillTelephoneFill />
        </Link>
      </div>
    </header>
  )
}

export default Header