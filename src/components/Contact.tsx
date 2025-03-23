"use client";
import React, { useState } from "react";

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
    <div className="h-screen flex flex-col items-center justify-center p-6">
      <div className="bg-[#1f2833] shadow-lg rounded-2xl p-10 w-[30vw] h-[67vh]">
        <h2 className="text-[3rem] font-semibold text-center mb-10">Contact Us</h2>
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
            <label className="block text-[1.3rem] mt-7">Email</label>
            <input
              type="email"
              name="email"
              className="text-black w-full p-2 border-4 rounded-lg focus:outline-none focus:border-[#2fffe5]"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-[1.3rem] mt-7">Message</label>
            <textarea
              name="message"
              className="text-black w-full p-2 border-4 rounded-lg focus:outline-none focus:border-[#2fffe5]"
              rows={4}
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full h-14 bg-[#5ee6dd] text-[#0b0c10] p-2 rounded-lg hover:bg-[#2fffe5] transition mt-10"
          >
            Send Message
          </button>
        </form>
      </div>
      {submitted && (
        <div className="mt-4 bg-green-500 text-white p-3 rounded-lg text-center w-[30vw]">
          Submitted Successfully
        </div>
      )}
    </div>
  );
};

export default Contact;
