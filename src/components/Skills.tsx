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
    <div className="h-fit mx-72 py-20 text-gray-100">
      <div className="text-[2.4rem] mb-10 font-semibold">Technologies that I've worked with...</div>
      <div className="flex space-x-4 my-7 text-[1.2rem]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-6 py-3 rounded-lg transition-all duration-200 font-medium shadow-lg ${
              activeTab === tab.id
                ? "bg-[#45a29e] text-[#0b0c10]"
                : "bg-[#1f2833] text-gray-300 hover:bg-[#66fcf1] hover:text-[#0b0c10]"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-6 py-10 bg-[#0b0c10] rounded-lg shadow-md text-[1.2rem] flex flex-wrap gap-4">
        {categorizedTech[activeTab as keyof typeof categorizedTech]?.map((tech, index) => (
          <div
            key={index}
            className="bg-[#66fcf1] text-[#66fcf1] px-10 py-4 rounded-full shadow-md hover:bg-[#45a29e] hover:text-[#0b0c10] transition-all duration-200"
          >
            <LinkPreview url={techLinks[tech as keyof typeof techLinks]}>{tech}</LinkPreview>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
