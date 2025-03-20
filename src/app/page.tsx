import React from "react";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <main className="bg-[#0b0c10] text-white py-32">
        <About />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
