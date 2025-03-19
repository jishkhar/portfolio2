import { Dot } from 'lucide-react';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';
import Image from "next/image";
import Link from "next/link";

const About = () => {
    return (
        <div className="h-fit my-40 mx-72 flex flex-col md:flex-row items-center text-white">
            <div id="left" className="max-w-2xl md:text-left">
                <div className="text-[3.8rem] font-bold">Jishnu Khargharia</div>
                <div className='flex justify-center md:justify-start items-center text-gray-500 text-[1.2rem] ml-1'>
                    <span>FullStack Developer</span>
                    <Dot />
                    <span>Competitive Programmer</span>
                    <Dot />
                    <span>AI & ML</span>
                </div>
                <div className="text-[#ffffffac] ml-1 mt-10 text-[1.4rem]">
                    <p>
                        I’m a full-stack developer passionate about AI, building scalable solutions with clean, maintainable code. I ship fast, break nothing, and optimize performance with solid DevOps practices and AI-driven innovation.
                    </p>
                </div>
                <div id="icons" className="flex space-x-8 pt-12 text-[1.8rem]">
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

            <div id="right" className="mt-6 md:mt-0 md:w-1/2 flex justify-center md:justify-end relative">
                <Image
                    src="/images/me1.jpg"
                    alt="Profile_Photo"
                    width={450}
                    height={450}
                    className="shadow-lg relative rounded-xl"
                />
            </div>
        </div>
    );
};

export default About;