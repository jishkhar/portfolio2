import React from 'react';
import Image from "next/image";

const AboutMe = () => {
    return (
        <>
            <div className='bg-[#0b0c10] h-[120vh] py-10'>
                <div className='mb-32'>
                    <div className="pl-44 pt-40 pb-10 text-xl font-semibold my-4">
                        <p className='text-[2.5rem] text-white'>
                            Little Bit About Me
                        </p>
                    </div>

                    <div className="flex max-w-[70vw] mx-auto relative">
                        <div id='left' className="w-1/2 flex flex-col items-center relative">
                            <div
                                className="w-[300px] h-[300px] absolute shadow-lg rounded-xl overflow-hidden 
                                    transform rotate-[-10deg]"
                                style={{ top: "60px", left: "-70px", zIndex: 3 }}
                            >
                                <Image
                                    src="/images/me2.jpeg"
                                    alt="Profile_Photo"
                                    layout="fill"
                                    objectFit="cover"
                                    objectPosition="center"
                                    className="scale-125"
                                />
                            </div>
                            <div
                                className="w-[300px] h-[300px] absolute shadow-lg rounded-xl overflow-hidden 
                                    transform rotate-[12deg]"
                                style={{ top: "130px", left: "190px", zIndex: 2 }}
                            >
                                <Image
                                    src="/images/me3.jpeg"
                                    alt="Profile_Photo"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div
                                className="w-[300px] h-[300px] absolute shadow-lg rounded-xl overflow-hidden 
                                    transform rotate-[-4deg]"
                                style={{ top: "370px", left: "0px", zIndex: 1 }}
                            >
                                <Image
                                    src="/images/me4.jpeg"
                                    alt="Profile_Photo"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                        </div>
                        <div id='right' className="w-1/2 pt-24 text-[#ffffffac] text-[1.3rem]">
                            <p>
                                <span>Hey there!</span><br /><br /> I'm <span className='text-[#5ee6dd] text-[1.5rem]'>Jishnu Khargharia</span>, a passionate full-stack developer with a strong interest in AI, ML, and Web3. Currently pursuing Computer Science and Engineering (AI & ML), I thrive on building impactful digital experiences that blend innovation with functionality.
                            </p>
                            <br />
                            <br />
                            <p>
                                Me and my friends founded a tech community in our college to bring together tech enthusiasts and foster a culture of learning. We organize sessions for our batchmates and juniors on essential technologies like Git, GitHub, web development, AI, and more. Our goal is to create a collaborative space where students can explore, build, and grow together.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMe;