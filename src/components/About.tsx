import { Dot } from 'lucide-react';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';
import Image from "next/image";
import Link from "next/link";

const About = () => {
    return (
        <div className="h-fit my-36 mx-6 md:mx-20 lg:mx-40 flex flex-col md:flex-row items-center justify-center text-white gap-60">
            <div id="right" className="md:order-2 flex justify-center md:justify-end mb-10 md:mb-0">
                <Image
                    src="/images/me1.jpg"
                    alt="Profile_Photo"
                    width={350}
                    height={350}
                    className="shadow-lg rounded-xl w-60 sm:w-72 md:w-[450px]"
                />
            </div>

            <div id="left" className="max-w-[30vw] text-center md:text-left md:order-1">
                <div className="text-4xl sm:text-5xl font-bold">Jishnu Khargharia</div>
                <div className='flex flex-wrap justify-center md:justify-start items-center text-gray-500 text-lg mt-2'>
                    <span>FullStack Developer</span>
                    <Dot className="hidden sm:inline" />
                    <span>Competitive Programmer</span>
                    <Dot className="hidden sm:inline" />
                    <span>AI & ML</span>
                </div>
                <div className="text-[#ffffffac] mt-6 text-lg sm:text-xl px-2 md:px-0">
                    <p>
                        I’m a <span className='text-white'>full-stack developer</span> passionate about AI, building scalable solutions with clean, maintainable code. I ship fast, break nothing, and optimize performance with solid DevOps practices and AI-driven innovation.
                    </p>
                </div>
                <div className='flex flex-col sm:flex-row items-center mt-8 space-y-4 sm:space-y-0 sm:space-x-7 text-lg'>
                    <div className='text-black rounded-lg border border-black bg-[#5ee6dd] px-6 py-3 cursor-pointer hover:scale-105'>
                        <Link href="/#contact">
                            Contact Me
                        </Link>
                    </div>
                    <div className='rounded-lg border-2 border-[#5ee6dd] px-6 py-3 cursor-pointer hover:scale-105'>
                        <Link href="https://drive.google.com/file/d/123nyjqWX_lWHTLJMj_sp-fpKrogdJcrK/view?usp=sharing">
                            Resume
                        </Link>
                    </div>
                </div>
                <div id="icons" className="flex justify-center md:justify-start space-x-6 sm:space-x-8 pt-8 pl-1 text-[1.8rem]">
                    <Link href="https://github.com/jishkhar" target="_blank" rel="noopener noreferrer">
                        <FiGithub className="cursor-pointer transition-all duration-300 hover:text-[#5fe9df] hover:scale-125" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/jishnukhargharia" target="_blank" rel="noopener noreferrer">
                        <FiLinkedin className="cursor-pointer transition-all duration-300 hover:text-[#5fe9df] hover:scale-125" />
                    </Link>
                    <Link href="https://x.com/JishKhar_" target="_blank" rel="noopener noreferrer">
                        <FiTwitter className="cursor-pointer transition-all duration-300 hover:text-[#5fe9df] hover:scale-125" />
                    </Link>
                    <Link href="mailto:jishnukhargharia11@gmail.com">
                        <MdOutlineEmail className="cursor-pointer transition-all duration-300 hover:text-[#5fe9df] hover:scale-125" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;