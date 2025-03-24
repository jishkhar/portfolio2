import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className="flex flex-col items-center justify-center pt-8 pb-4 text-center px-4 md:pt-12">
            <div className="mb-3 text-[1rem] md:text-[1.2rem]">Built by Jishnu Khargharia</div>
            <div className="flex space-x-3 md:space-x-4">
                <Link href="https://github.com/jishkhar" target="_blank">
                    <FiGithub className="w-5 h-5 md:w-6 md:h-6 hover:text-[#5ee6dd] hover:scale-110 transition hover:rotate-[5deg]" />
                </Link>
                <Link href="https://www.linkedin.com/in/jishnukhargharia" target="_blank">
                    <FiLinkedin className="w-5 h-5 md:w-6 md:h-6 hover:text-[#5ee6dd] hover:scale-110 transition hover:rotate-[5deg]" />
                </Link>
                <Link href="https://x.com/k__jish" target="_blank">
                    <FiTwitter className="w-5 h-5 md:w-6 md:h-6 hover:text-[#5ee6dd] hover:scale-110 transition hover:rotate-[5deg]" />
                </Link>
                <Link href="mailto:jishnukhargharia11@gmail.com">
                    <MdOutlineEmail className="w-5 h-5 md:w-6 md:h-6 hover:text-[#5ee6dd] hover:scale-110 transition hover:rotate-[5deg]" />
                </Link>
            </div>
        </div>
    );
};

export default Footer;