import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className="flex flex-col items-center justify-center py-4 text-center">
            <div className="mb-2">Built by Jishnu Khargharia</div>
            <div className="flex space-x-4">
                <Link href="https://github.com/jishkhar" target="_blank">
                    <FiGithub className="w-6 h-6 hover:text-[#5ee6dd] hover:scale-125 transition hover:rotate-[5deg]" />
                </Link>
                <Link href="https://www.linkedin.com/in/jishnukhargharia" target="_blank">
                    <FiLinkedin className="w-6 h-6 hover:text-[#5ee6dd] hover:scale-125 transition hover:rotate-[5deg]" />
                </Link>
                <Link href="https://x.com/k__jish" target="_blank">
                    <FiTwitter className="w-6 h-6 hover:text-[#5ee6dd] hover:scale-125 transition hover:rotate-[5deg]" />
                </Link>
                <Link href="mailto:jishnukhargharia11@gmail.com">
                    <MdOutlineEmail className="w-6 h-6 hover:text-[#5ee6dd] hover:scale-125 transition hover:rotate-[5deg]" />
                </Link>

            </div>
        </div>
    );
};

export default Footer;
