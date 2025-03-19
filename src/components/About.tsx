import { Dot } from 'lucide-react';
import Image from "next/image";

const About = () => {
    return (
        <div className=" h-fit py-40 px-60 flex flex-col md:flex-row items-center">
            <div id="left" className="max-w-2xl md:text-left">
                <div className="text-7xl font-bold">Jishnu Khargharia</div>
                <div className='flex justify-center md:justify-start items-center text-gray-500 text-2xl ml-1 mt-2'>
                    <span>FullStack Developer</span>
                    <Dot />
                    <span>Competitive Programmer</span>
                    <Dot />
                    <span>AI & ML</span>
                </div>
                <div className="text-gray-500 ml-1 mt-10 text-2xl">
                    <p>
                        I’m a full-stack developer passionate about AI, building scalable solutions with clean, maintainable code. I ship fast, break nothing, and optimize performance with solid DevOps practices and AI-driven innovation.
                    </p>
                </div>
            </div>
            <div id="right" className="mt-6 md:mt-0 md:w-1/2 flex justify-center md:justify-end relative">
            <div className="h-[470px] w-[500px] bg-cyan-400 absolute top-1/2 left-[28.7rem] -translate-x-1/2 -translate-y-1/2 -z-10 rounded-lg rotate-[-2.5deg]"></div>
                <Image
                    src="/images/me1.jpg"
                    alt="Profile_Photo"
                    width={500}
                    height={500}
                    className="shadow-lg relative rounded-xl"
                />
            </div>

        </div>
    );
};

export default About;