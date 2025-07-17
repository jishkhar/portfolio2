import Image from "next/image";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { TbExternalLink } from "react-icons/tb";

const project_data = [
  {
    image: "/images/similar.png",
    type: "FullStack & AI",
    project_title: "Similar.Dev",
    description:
      "Full-stack collaborative platform built with Next.js 14, TypeScript, and OpenAI integration, featuring real-time editing and enterprise-grade security.",
    tech_stack: ["React", "TailwindCSS", "Node.js", "Express", "FFmpeg"],
    github: "https://github.com/jishkhar/Vibe",
    website: "",
  },
  {
    image: "/images/transcodex.png",
    type: "FullStack",
    project_title: "TransCodeX",
    description:
      "A privacy-focused media converter built with React and Node.js that processes audio/video files locally without uploads.",
    tech_stack: ["React", "TailwindCSS", "Node.js", "Express", "FFmpeg"],
    github: "https://github.com/jishkhar/TransCodeX",
    website: "https://transcode-x.vercel.app/",
  },
  {
    image: "/images/FinTalk.jpeg",
    type: "AI",
    project_title: "FinTalk",
    description:
      "An intelligent AI advisor that simplifies legal complexities with precise, reliable insights.",
    tech_stack: ["Python", "SarvamAI", "Streamlit", "Gemini"],
    github: "https://github.com/jishkhar/fintalk",
    website: "https://fintalk.streamlit.app/",
  },
  {
    image: "/images/aisummarizer.png",
    type: "AI Tool",
    project_title: "AI Summarizer",
    description:
      "A Chrome extension that generates AI-powered summaries of web articles in multiple formats using Google's Gemini API with secure local key storage.",
    tech_stack: [
      "JavaScript (ES6+)",
      "Chrome Extension APIs",
      "Google Gemini API",
      "Chrome Storage API",
      "DOM Manipulation",
    ],
    github: "https://github.com/jishkhar/AI-Summarizer",
    website: "",
  },
  {
    image: "/images/corsit.png",
    type: "FullStack Website",
    project_title: "Corsit.in",
    description:
      "A dynamic full-stack robotics club website with login, project management, and interactive showcases for projects, events, and innovations.",
    tech_stack: ["ReactJS", "JavaScript", "NodeJS", "Express"],
    github: "https://github.com/Dhruva-D/Corsit",
    website: "https://www.corsit.in/",
  },
];

type Project = {
  image: string;
  type: string;
  project_title: string;
  description: string;
  tech_stack: string[];
  github: string;
  website: string;
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center max-w-7xl mx-auto overflow-hidden relative mb-10 p-4 lg:p-0">
      {/* Project Screenshot (Visible on large screens) */}
      <div className="lg:w-2/3 w-full relative hidden lg:block">
        <Image
          src={project.image}
          alt={`${project.project_title} Screenshot`}
          width={1200}
          height={500}
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>

      {/* Project Details */}
      <div className="w-full lg:w-[40%] flex flex-col justify-between h-full lg:pl-6 py-4 relative text-center lg:text-left">
        <div className="lg:absolute top-0 right-0 lg:right-10">
          <div className="text-teal-400 font-mono text-[1.3rem]">{project.type}</div>
          <h2 className="text-[2rem] font-bold text-white mb-4">{project.project_title}</h2>
        </div>

        {/* Description */}
        <p className="text-gray-200 text-[1rem] lg:text-[1.15rem] mb-4 lg:mt-20 bg-[#15171F] p-6 rounded-lg shadow-lg backdrop-blur-sm transition-shadow duration-300 hover:shadow-black">
          {project.description}
        </p>

        {/* Tech Stack & Links */}
        <div className="flex flex-col items-center lg:items-end mt-4 lg:mt-10">
          <div className="font-mono text-[1rem] text-gray-400 mb-4 lg:mr-8">
            | {project.tech_stack.join(" | ")}
          </div>
          <div className="flex space-x-4 pt-4">
            <Link href={project.github} className="text-white hover:text-gray-400 transition" target="_blank">
              <FiGithub className="w-7 h-7" />
            </Link>
            <Link href={project.website} className="text-white hover:text-gray-400 transition" target="_blank">
              <TbExternalLink className="w-8 h-8" />
            </Link>
          </div>
        </div>
      </div>
    </div>

  );
};

export default function PortfolioShowcase() {
  return (
    <div className="bg-[#0b0c10] text-white min-h-screen px-4 md:px-8 py-8 max-w-[90vw] md:max-w-[70vw] mx-auto">
      <h1 className="text-[2.5rem] md:text-[3.2rem] font-bold pt-44 pb-16 underline decoration-wavy decoration-[#5ee6dd] underline-offset-8 text-center md:text-left">
        Projects
      </h1>
      {project_data.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
      <div className="flex justify-center mt-10">
        <Link href="/projects" className="text-[#5ee6dd] border border-[#5ee6dd] px-6 py-3 rounded-lg cursor-pointer hover:bg-[#5ee6dd] hover:text-black transition">
          View All Projects
        </Link>
      </div>
    </div>
  );
}
