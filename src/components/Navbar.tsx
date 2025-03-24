"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, Moon } from "lucide-react";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[#0d0e13] px-8 md:px-40 h-24 flex items-center text-[1.1rem] text-white shadow-lg">
      <Link href="/">
        <div className="flex justify-start">Jishnu Khargharia</div>
      </Link>
      <div className="ml-auto flex items-center gap-6 md:gap-16">
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-16">
          {["/", "/projects", "/about", "/blog"].map((path, index) => (
            <Link key={index} href={path}>
              <div
                className={`${
                  pathname === path ? "text-[#5ee6dd]" : "text-white"
                } transition-colors duration-200`}
              >
                {path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              </div>
            </Link>
          ))}
        </div>
        <button onClick={() => setIsDarkMode(!isDarkMode)} className="focus:outline-none">
          {isDarkMode ? <Moon /> : <Sun />}
        </button>
        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-24 left-0 w-full bg-[#0d0e13] flex flex-col items-center gap-6 py-6 md:hidden">
          {["/", "/projects", "/about", "/blog"].map((path, index) => (
            <Link key={index} href={path}>
              <div
                className={`${
                  pathname === path ? "text-[#5ee6dd]" : "text-white"
                } transition-colors duration-200`}
                onClick={() => setIsMenuOpen(false)}
              >
                {path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;