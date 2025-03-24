import React from 'react';
import Image from "next/image";

const AboutMe = () => {
    return (
        <div className='bg-[#0b0c10] min-h-screen py-10 px-6 md:px-0'>
            <div className='mb-32'>
                <div className="md:pl-44 pt-20 pb-10 text-xl font-semibold text-center md:text-left">
                    <p className='text-[2.5rem] text-white'>
                        Little Bit About Me
                    </p>
                </div>

                <div className="flex flex-col md:flex-row max-w-[90vw] md:max-w-[70vw] mx-auto relative items-center md:items-start">
                    <div id='left' className="w-full md:w-1/2 flex flex-col items-center md:items-start relative mt-10 md:mt-0">
                        <div className="relative w-[250px] h-[250px] md:w-[300px] md:h-[300px] shadow-lg rounded-xl overflow-hidden transform rotate-[-10deg] z-3">
                            <Image src="/images/me2.jpeg" alt="Profile_Photo" layout="fill" objectFit="cover" className="scale-125" />
                        </div>
                        <div className="relative w-[250px] h-[250px] md:w-[300px] md:h-[300px] shadow-lg rounded-xl overflow-hidden transform rotate-[12deg] z-2 mt-6">
                            <Image src="/images/me3.jpeg" alt="Profile_Photo" layout="fill" objectFit="cover" />
                        </div>
                        <div className="relative w-[250px] h-[250px] md:w-[300px] md:h-[300px] shadow-lg rounded-xl overflow-hidden transform rotate-[-4deg] z-1 mt-6">
                            <Image src="/images/me4.jpeg" alt="Profile_Photo" layout="fill" objectFit="cover" />
                        </div>
                    </div>
                    
                    <div id='right' className="w-full md:w-1/2 text-[#ffffffac] text-[1.3rem] text-center md:text-left pt-10 md:pt-24">
                        <p>
                            <span>Hey there!</span><br /><br /> I'm <span className='text-[#5ee6dd] text-[1.5rem]'>Jishnu Khargharia</span>, a passionate full-stack developer with a strong interest in AI, ML, and Web3. Currently pursuing Computer Science and Engineering (AI & ML), I thrive on building impactful digital experiences that blend innovation with functionality.
                        </p>
                        <br />
                        <p>
                            Me and my friends founded a tech community in our college to bring together tech enthusiasts and foster a culture of learning. We organize sessions for our batchmates and juniors on essential technologies like Git, GitHub, web development, AI, and more. Our goal is to create a collaborative space where students can explore, build, and grow together.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;