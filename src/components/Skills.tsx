"use client";
import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";

const Skills = () => {
  const categories = [
    { id: "frontend", label: "Frontend", techs: ["React", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js", "Vue.js"] },
    { id: "backend", label: "Backend", techs: ["Node.js", "Express", "Django", "GraphQL", "REST API"] },
    { id: "databases", label: "Databases", techs: ["PostgreSQL", "MongoDB", "Redis", "Firebase", "MySQL"] },
    { id: "tools", label: "Tools", techs: ["Git", "Docker", "VS Code", "CI/CD", "Jira"] },
    { id: "languages", label: "Languages", techs: ["JavaScript", "Python", "Java", "C++", "Go"] }
  ];

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
    "REST API": "https://restfulapi.net/",
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
      <div className="mb-40">
        <div className="max-w-[70vw] mx-auto">
          <h1 className="text-[3.2rem] ml-4 mt-52 my-10 underline decoration-wavy decoration-[#5ee6dd] underline-offset-8">Tech Stack</h1>
        </div>
        <div className="mx-auto max-w-[70vw] p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-gray-900">
          {categories.map((category) => (
            <div key={category.id} className="p-6 rounded-lg border shadow-md">
              <h3 className="text-xl text-[#5ee6dd] font-semibold mb-3">{category.label}</h3>
              <div className="flex flex-wrap gap-4">
                {category.techs.map((tech) => (
                  <LinkPreview
                    key={tech}
                    url={techLinks[tech as keyof typeof techLinks]}
                    className="px-3 py-2 border  bg-[#3a4544] border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 text-white hover:text-black transition-all"
                  >
                    {tech}
                  </LinkPreview>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
