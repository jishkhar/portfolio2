"use client";
import React, { useState } from "react";
import { LinkPreview } from "@/components/ui/link-preview";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const tabs = [
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "tools", label: "Tools" },
    { id: "languages", label: "Languages" },
    { id: "databases", label: "Databases" }
  ];

  const techLinks = {
    "React": "https://react.dev/",
    "Next.js": "https://nextjs.org/",
    "TypeScript": "https://www.typescriptlang.org/",
    "JavaScript": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    "HTML5": "https://developer.mozilla.org/en-US/docs/Web/HTML",
    "CSS3": "https://developer.mozilla.org/en-US/docs/Web/CSS",
    "Tailwind CSS": "https://tailwindcss.com/",
    "React Native": "https://reactnative.dev/",
    "Expo": "https://expo.dev/",
    "Node.js": "https://nodejs.org/en",
    "Express": "https://expressjs.com/",
    "Nginx": "https://www.nginx.com/",
    "Prisma": "https://www.prisma.io/",
    "Git": "https://git-scm.com/",
    "Linux": "https://www.linux.org/",
    "AWS": "https://aws.amazon.com/",
    "CI/CD": "https://about.gitlab.com/topics/ci-cd/",
    "C++": "https://cplusplus.com/",
    "C": "https://en.cppreference.com/w/c",
    "Python": "https://www.python.org/",
    "MongoDB": "https://www.mongodb.com/",
    "MySQL": "https://www.mysql.com/",
    "PostgreSQL": "https://www.postgresql.org/",
    "Redis": "https://redis.io/"
  };

  const categorizedTech = {
    "frontend": ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "React Native", "Expo"],
    "backend": ["Node.js", "Express", "Nginx", "Prisma"],
    "tools": ["Git", "Linux", "AWS", "CI/CD"],
    "languages": ["C++", "C", "Python"],
    "databases": ["MongoDB", "MySQL", "PostgreSQL", "Redis"]
  };

  return (
    <div className="h-fit mx-72 pt-40 mb-40 text-gray-100">
      <div className="text-[2.4rem] mb-10 font-semibold">Technologies that I&apos;ve worked with...</div>
      <div className="flex space-x-4 my-7 text-[1.2rem]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-6 py-3 rounded-lg transition-all duration-200 font-medium shadow-lg ${activeTab === tab.id
              ? "bg-[#45a29e] text-[#0b0c10]"
              : "bg-[#1f2833] text-gray-300 hover:bg-[#66fcf1] hover:text-[#0b0c10]"
              }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-6 py-10 bg-[#0b0c10] rounded-lg shadow-md">
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-[#f8f9fa]">
          {categorizedTech[activeTab as keyof typeof categorizedTech]?.map((tech, index) => (
            <li key={index} className="flex items-center gap-3 bg-[#1f2833] p-3 rounded-lg shadow-md">
              <span className="w-2 h-2 border-4 border-[#66fcf1] rotate-45 inline-block"></span>
              <LinkPreview
                url={techLinks[tech as keyof typeof techLinks]}
                className="hover:text-[#66fcf1] text-white transition-colors duration-200"
              >
                {tech}
              </LinkPreview>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
