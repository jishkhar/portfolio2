import React from 'react';

const Contact = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center p-6">
      <div className="bg-[#1f2833] shadow-lg rounded-2xl p-10 w-[30vw] h-[67vh]">
        <h2 className="text-[3rem] font-semibold text-center mb-10">Contact Us</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-[1.3rem]">Name</label>
            <input type="text" className="text-black w-full p-2 border-4 rounded-lg focus:outline-none focus:border-[#2fffe5]" placeholder="Your Name" />
          </div>
          <div>
            <label className="block text-[1.3rem] mt-7">Email</label>
            <input type="email" className="text-black w-full p-2 border-4 rounded-lg focus:outline-none focus:border-[#2fffe5]" placeholder="Your Email" />
          </div>
          <div>
            <label className="block text-[1.3rem] mt-7">Message</label>
            <textarea className="text-black w-full p-2 border-4 rounded-lg focus:outline-none focus:border-[#2fffe5]" rows={4} placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="w-full h-14 bg-[#5ee6dd] text-[#0b0c10] p-2 rounded-lg hover:bg-[#2fffe5] transition mt-10">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
