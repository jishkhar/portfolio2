"use client";
import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";

const Skills = () => {
  const categories = [
    { id: "frontend", label: "Frontend", color: "bg-blue-100", techs: ["React", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js", "Vue.js"] },
    { id: "backend", label: "Backend", color: "bg-green-100", techs: ["Node.js", "Express", "Django", "GraphQL", "REST API"] },
    { id: "databases", label: "Databases", color: "bg-purple-100", techs: ["PostgreSQL", "MongoDB", "Redis", "Firebase", "MySQL"] },
    { id: "tools", label: "Tools", color: "bg-yellow-100", techs: ["Git", "Docker", "VS Code", "CI/CD", "Jira"] },
    { id: "languages", label: "Languages", color: "bg-red-100", techs: ["JavaScript", "Python", "Java", "C++", "Go"] }
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
    <div className="mx-auto max-w-[70vw] p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-gray-900">
      {categories.map((category) => (
        <div key={category.id} className={`p-6 rounded-lg shadow-md ${category.color}`}>
          <h3 className="text-xl font-semibold mb-3">{category.label}</h3>
          <div className="flex flex-wrap gap-4">
            {category.techs.map((tech) => (
              <LinkPreview
                key={tech}
                url={techLinks[tech as keyof typeof techLinks]}
                className="px-3 py-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 text-gray-800 transition-all"
              >
                {tech}
              </LinkPreview>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;