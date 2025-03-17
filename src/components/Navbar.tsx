"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, Moon } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const pathname = usePathname();

  return (
    <div className="grid grid-cols-2 bg-[#09090b] px-40 h-24 items-center text-[1.3rem] text-white">
      <Link href="/">
        <div className="flex justify-start">Jishnu Khargharia</div>
      </Link>
      <div className="flex justify-end gap-16">
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
