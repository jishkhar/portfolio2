import React from "react";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Aboutme from "@/components/Aboutme";

export default function Home() {
  return (
    <>
      <main className="bg-[#0b0c10] text-white pt-32 pb-10">
        <About />
        <Aboutme />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
