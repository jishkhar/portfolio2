"use client";
import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";
import { SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiVuedotjs, SiNodedotjs, SiExpress, SiDjango, SiGraphql, SiPostgresql, SiMongodb, SiRedis, SiFirebase, SiMysql, SiGit, SiDocker, SiGitlab, SiJira, SiPython, SiCplusplus, SiGo } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaJava } from "react-icons/fa6";

const Skills = () => {
  const categories = [
    { id: "frontend", label: "Frontend", techs: ["React", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js", "Vue.js"] },
    { id: "backend", label: "Backend", techs: ["Node.js", "Express", "Django", "GraphQL", "REST API"] },
    { id: "databases", label: "Databases", techs: ["PostgreSQL", "MongoDB", "Redis", "Firebase", "MySQL"] },
    { id: "tools", label: "Tools", techs: ["Git", "Docker", "VS Code", "CI/CD", "Jira"] },
    { id: "languages", label: "Languages", techs: ["JavaScript", "Python", "Java", "C++", "Go"] }
  ];

  const techIcons = {
    "React": SiReact,
    "Next.js": SiNextdotjs,
    "TypeScript": SiTypescript,
    "JavaScript": SiJavascript,
    "HTML5": SiHtml5,
    "CSS3": SiCss3,
    "Tailwind CSS": SiTailwindcss,
    "Vue.js": SiVuedotjs,
    "Node.js": SiNodedotjs,
    "Express": SiExpress,
    "Django": SiDjango,
    "GraphQL": SiGraphql,
    "PostgreSQL": SiPostgresql,
    "MongoDB": SiMongodb,
    "Redis": SiRedis,
    "Firebase": SiFirebase,
    "MySQL": SiMysql,
    "Git": SiGit,
    "Docker": SiDocker,
    "VS Code": VscVscode,
    "CI/CD": SiGitlab,
    "Jira": SiJira,
    "Python": SiPython,
    "Java": FaJava,
    "C++": SiCplusplus,
    "Go": SiGo
  };

  const techLinks = {
    "React": "https://react.dev/",
    "Next.js": "https://nextjs.org/",
    "TypeScript": "https://www.typescriptlang.org/",
    "JavaScript": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    "HTML5": "https://developer.mozilla.org/en-US/docs/Web/HTML",
    "CSS3": "https://developer.mozilla.org/en-US/docs/Web/CSS",
    "Tailwind CSS": "https://tailwindcss.com/",
    "Vue.js": "https://vuejs.org/",
    "Node.js": "https://nodejs.org/en",
    "Express": "https://expressjs.com/",
    "Django": "https://www.djangoproject.com/",
    "GraphQL": "https://graphql.org/",
    "PostgreSQL": "https://www.postgresql.org/",
    "MongoDB": "https://www.mongodb.com/",
    "Redis": "https://redis.io/",
    "Firebase": "https://firebase.google.com/",
    "MySQL": "https://www.mysql.com/",
    "Git": "https://git-scm.com/",
    "Docker": "https://www.docker.com/",
    "VS Code": "https://code.visualstudio.com/",
    "CI/CD": "https://about.gitlab.com/topics/ci-cd/",
    "Jira": "https://www.atlassian.com/software/jira",
    "Python": "https://www.python.org/",
    "Java": "https://www.java.com/",
    "C++": "https://cplusplus.com/",
    "Go": "https://go.dev/"
  };

  return (
    <>
      <div className="mb-20 px-2 sm:px-4">
        {/* Heading Section */}
        <div className="pl-3 w-full max-w-full sm:max-w-[80vw] mx-auto pt-16 sm:pt-20 pb-12 sm:pb-12 sm:pl-20">
          <h1 className="text-2xl sm:text-4xl md:text-[3.2rem] mt-10 sm:mt-20 mb-8 sm:mb-10 underline decoration-wavy decoration-[#5ee6dd] underline-offset-8">
            Tech Stack
          </h1>
        </div>

        {/* Grid Section */}
        <div className="mx-auto w-full max-w-full sm:max-w-[95vw] md:max-w-[80vw] lg:max-w-[70vw] px-2 sm:px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-gray-900">
          {categories.map((category) => (
            <div key={category.id} className="relative">
              {/* Background Glow Layer */}
              <div className="bg-[#5ee6dd] rounded-lg absolute inset-0"></div>

              {/* Card Content */}
              <div className="relative min-h-[300px] sm:min-h-[320px] p-4 sm:p-6 rounded-lg border shadow-md hover:-translate-y-2 hover:-translate-x-2 transition-transform bg-[#0d0e13]">
                <h3 className="text-lg sm:text-xl md:text-2xl text-[#5ee6dd] text-center font-semibold mb-4 sm:mb-6">
                  {category.label}
                </h3>

                <div className="flex flex-wrap gap-x-3 gap-y-3 justify-center">
                  {category.techs.map((tech) => {
                    const Icon = techIcons[tech as keyof typeof techIcons];
                    return (
                      <LinkPreview
                        key={tech}
                        url={techLinks[tech as keyof typeof techLinks]}
                        className="flex items-center gap-2 px-3 py-2 border bg-[#3a4544] border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 text-white hover:text-black transition-all text-xs sm:text-sm md:text-base"
                      >
                        {Icon && <Icon className="text-base sm:text-lg md:text-xl" />}
                        <span>{tech}</span>
                      </LinkPreview>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  );
};

export default Skills;