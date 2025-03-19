"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, Moon } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const pathname = usePathname();

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[#0b0c10] px-40 h-24 flex items-center text-[1.1rem] text-white shadow-lg">
      <Link href="/">
        <div className="flex justify-start">Jishnu Khargharia</div>
      </Link>
      <div className="ml-auto flex gap-16">
        {["/", "/projects", "/blog"].map((path, index) => (
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
        <button onClick={() => setIsDarkMode(!isDarkMode)} className="focus:outline-none">
          {isDarkMode ? <Moon /> : <Sun />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
