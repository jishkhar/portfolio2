"use client";
import React, { useState } from "react";
import { MdOutlineEmail } from 'react-icons/md';
import Link from "next/link";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "a9a5d84f-cd99-4bb5-88e3-450d2d771f65",
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    });

    const result = await response.json();
    if (result.success) {
      form.reset();
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  }

  return (
    <div className="flex items-center justify-center p-6 min-h-screen">
      <div className="flex flex-col md:flex-row shadow-lg rounded-2xl w-full max-w-[70vw] space-x-36 overflow-hidden">
        {/* Left Div */}
        <div className="flex flex-col items-center justify-center p-6 md:p-10 md:w-1/2 bg-[#0b0c10] text-white text-center md:text-left">
          <div className="text-[#54ccc4] text-xl md:text-[1.5rem]">Liked my work?</div>
          <div className="text-2xl md:text-[2.4rem] font-bold mt-2 mb-5">Reach Out to Me!</div>
          <p className="text-[#C2C2C3] mt-4 text-sm md:text-[1.1rem] text-center">
            I am always looking for new opportunities to work with professionals and companies.
          </p>
          <div className="mt-6 border border-[#54ccc4] p-3 rounded-lg cursor-pointer transition-all duration-300 hover:text-[#5fe9df] hover:scale-105">
            <Link href="mailto:jishnukhargharia11@gmail.com" className="flex items-center justify-center">
              <h1 className="mr-5 text-[1.2rem]">Contact Me:</h1>
              <MdOutlineEmail className="text-3xl" />
            </Link>
          </div>
        </div>
        {/* Right Div */}
        <div className="p-6 md:p-10 md:w-1/2 border border-[#54ccc4]">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 underline decoration-wavy decoration-[#5ee6dd] underline-offset-8">Contact</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-lg">Name</label>
              <input
                type="text"
                name="name"
                className="w-full p-2 border-2 rounded-lg focus:outline-none focus:border-[#2fffe5] text-black"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block text-lg">Email</label>
              <input
                type="email"
                name="email"
                className="w-full p-2 border-2 rounded-lg focus:outline-none focus:border-[#2fffe5] text-black"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label className="block text-lg">Message</label>
              <textarea
                name="message"
                className="w-full p-2 border-2 rounded-lg focus:outline-none focus:border-[#2fffe5] text-black"
                rows={4}
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#5ee6dd] text-[#0b0c10] p-3 rounded-lg hover:bg-[#2fffe5] transition"
            >
              Send Message
            </button>
          </form>
          {submitted && (
            <div className="mt-4 bg-green-500 text-white p-3 rounded-lg text-center">
              Submitted Successfully
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
