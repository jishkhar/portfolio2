import React from 'react';
import Image from "next/image";

const AboutMe = () => {
    return (
        <>
            <div className='mb-32'>
            <div className="pl-72 pt-40 pb-20 text-xl font-semibold my-4">
                <p className='text-[2.5rem]'>
                    Little bit About Me
                </p>
            </div>

            <div className="flex max-w-[70vw] mx-auto relative">
                <div id='left' className="w-1/2 flex flex-col items-center relative">
                    <div 
                        className="w-[400px] h-[400px] absolute shadow-lg rounded-xl overflow-hidden 
                                    transform rotate-[-10deg]" 
                        style={{ top: "60px", left: "-70px", zIndex: 3 }}
                    >
                        <Image
                            src="/images/me2.jpeg"
                            alt="Profile_Photo"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div 
                        className="w-[400px] h-[400px] absolute shadow-lg rounded-xl overflow-hidden 
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
                        className="w-[400px] h-[400px] absolute shadow-lg rounded-xl overflow-hidden 
                                    transform rotate-[-3deg]" 
                        style={{ top: "400px", left: "0px", zIndex: 1 }}
                    >
                        <Image
                            src="/images/me4.jpeg"
                            alt="Profile_Photo"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </div>
                <div id='right' className="w-1/2 p-4 text-[#ffffffac] text-[1.3rem]">
                    <p>
                        Hey there! I'm Jishnu Khargharia, a passionate full-stack developer with a strong interest in AI, ML, and Web3. Currently pursuing Computer Science and Engineering (AI & ML), I thrive on building impactful digital experiences that blend innovation with functionality.
                    </p>
                    <br />
                    <p>
                        <span className='text-[2rem] underline decoration-[#5ee6dd] underline-offset-4'>What I Do:</span>
                        <br />
                        <span className='underline'>Front-End Development:</span> Crafting sleek, responsive UIs using React, Tailwind CSS, and Framer Motion.
                        <br /><br />
                        <span className='underline'>Back-End Development:</span> Developing robust server-side solutions with Node.js, Express, and MongoDB.
                        <br /><br />
                        <span className='underline'>AI & ML:</span> Exploring machine learning applications and integrating AI into real-world projects.
                    </p>
                    <br />
                    <p>
                        Also, Me and my friends founded a tech community in our college to bring together tech enthusiasts and foster a culture of learning. We organize sessions for our batchmates and juniors on essential technologies like Git, GitHub, web development, AI, and more. Our goal is to create a collaborative space where students can explore, build, and grow together.
                    </p>
                </div>
            </div>
            </div>
        </>
    )
}

export default AboutMe;