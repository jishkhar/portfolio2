"use client";
import React, { useState } from "react";
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
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
    <div className="h-screen flex items-center justify-center p-6">
      <div className="flex shadow-lg rounded-2xl w-[70vw] h-[67vh] overflow-hidden">
        {/* Left Div */}
        <div className="flex flex-col items-center mt-20 pr-16 w-1/2 bg-[#0b0c10] text-white text-2xl font-semibold gap-y-4">
          <div className="text-[#54ccc4] text-center">Liked my work&#63;</div>
          <div className="text-[2.2rem] text-center">Reach Out to Me!</div>
          <p className="text-center text-[#C2C2C3] pt-4">
            I am always looking for new opportunities to work with professionals and companies. I would also like to contribute to open-source projects providing real-world value.
          </p>
          <div id="icons" className="p-5 mt-10 text-[1.8rem] border rounded-lg border-[#54ccc4] flex justify-center items-center cursor-pointer transition-all duration-300 hover:text-[#5fe9df] hover:scale-105">
            <Link href="mailto:jishnukhargharia11@gmail.com" className="flex items-center">
              <h1>Contact Me : &nbsp;</h1>
              <MdOutlineEmail className="text-4xl" />
            </Link>
          </div>
        </div>
        {/* Right Div */}
        <div className="w-1/2 p-10 border rounded-lg border-[#54ccc4]">
          <h2 className="text-[2.5rem] font-semibold text-center mb-6 underline decoration-wavy decoration-[#5ee6dd] underline-offset-8">Contact Us</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-[1.3rem]">Name</label>
              <input
                type="text"
                name="name"
                className="text-black w-full p-2 border-4 rounded-lg focus:outline-none focus:border-[#2fffe5]"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-[1.3rem] mt-4">Email</label>
              <input
                type="email"
                name="email"
                className="text-black w-full p-2 border-4 rounded-lg focus:outline-none focus:border-[#2fffe5]"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-[1.3rem] mt-4">Message</label>
              <textarea
                name="message"
                className="text-black w-full p-2 border-4 rounded-lg focus:outline-none focus:border-[#2fffe5]"
                rows={4}
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full h-14 bg-[#5ee6dd] text-[#0b0c10] p-2 rounded-lg hover:bg-[#2fffe5] transition mt-6"
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
