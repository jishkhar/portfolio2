"use client";
import React, { useState } from 'react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  const tabs = [
    { id: 'frontend', label: 'Frontend', content: 'React, Tailwind CSS, JavaScript, HTML, CSS' },
    { id: 'backend', label: 'Backend', content: 'Node.js, Express.js, Django, Flask' },
    { id: 'tools', label: 'Tools', content: 'Git, Postman, Docker, Bash, Linux' },
    { id: 'languages', label: 'Languages', content: 'JavaScript, Python, C++, Java' },
    { id: 'databases', label: 'Databases', content: 'MongoDB, PostgreSQL, MySQL' }
  ];

  return (
    <div className='h-fit mx-72 py-20 text-gray-200'>
        <div className='text-[2.4rem] mb-10'>
            Technologies that I've worked with...
        </div>
      <div className='flex space-x-4 my-7 text-[1.2rem]'>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 rounded-lg transition-all duration-200 ${
              activeTab === tab.id 
                ? 'bg-[#66fcf1] text-[#0b0c10]' 
                : 'bg-[#1f2833] text-[#c5c6c7] hover:bg-[#45a29e]'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className='p-5 bg-[#1f2833] rounded-lg shadow-md'>{tabs.find(tab => tab.id === activeTab)?.content}</div>
    </div>
  );
};

export default Skills;
