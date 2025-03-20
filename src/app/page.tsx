import React from "react";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="bg-[#0b0c10] text-white pt-32 pb-10">
        <About />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
