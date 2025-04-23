import React from "react";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <>
      <main className="bg-[#0b0c10] text-white pt-32 pb-10">
        <About />
        <Projects />
        <Skills />
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </main>
    </>
  );
}
