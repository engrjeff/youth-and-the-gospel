"use client";

import { site } from "@/config/site";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function Header() {
  const [onTop, setOnTop] = useState(true);

  useEffect(() => {
    const scrollCallback = () => {
      const scrolledFromTop = window.scrollY;
      setOnTop(scrolledFromTop <= 80);
    };
    window.addEventListener("scroll", scrollCallback);
    return () => {
      window.removeEventListener("scroll", scrollCallback);
    };
  }, []);

  return (
    <header
      className={cn(
        "border-b border-zinc-800 z-20 h-16 w-full fixed top-0 bg-transparent transition-transform",
        {
          "fixed -top-20 translate-y-20 bg-zinc-900/70 backdrop-blur-lg":
            !onTop,
        }
      )}
    >
      <div className='container flex items-center h-full px-4'>
        <Link href='/' className='flex items-center'>
          <Image
            src='/gcc-logo-no-bg.png'
            alt='Grace City Church'
            width={40}
            height={40}
          />
          <span className='font-bold ml-3 lg:text-lg'>Grace City Church</span>
        </Link>
        <div className='ml-auto'>
          <a
            href={site.registrationLink}
            target='_blank'
            rel='noopener noreferrer'
            className='bg-amber-500 text-gray-900 px-2 py-2 text-xs font-semibold rounded-full hover:bg-amber-600 transition-colors text-center'
          >
            Register
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
