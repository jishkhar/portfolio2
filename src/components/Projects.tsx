import Image from "next/image";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { TbExternalLink } from "react-icons/tb";

const project_data = [
  {
    image: "/images/FinTalk.jpeg",
    type: "AI",
    project_title: "FinTalk",
    description:
      "Fintalk: An intelligent AI advisor that simplifies legal complexities with precise, reliable insights.",
    tech_stack: ["Python", "SarvamAI", "Streamlit", "Gemini"],
    github: "https://github.com/jishkhar/fintalk",
    website: "https://fintalk.streamlit.app/",
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
  {
    image: "/images/quiz.png",
    type: "Web App",
    project_title: "Quizzify",
    description:
      "Developed an interactive quizzing web app leveraging JavaScript and real-time API integration for seamless data retrieval.",
    tech_stack: ["JavaScript", "APIs", "Tone.js"],
    github: "https://github.com/jishkhar/Quiz-App",
    website: "https://quiz-app-self-zeta.vercel.app/",
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

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const isReversed = index % 2 === 1;

  return (
    <div className={`flex flex-col md:flex-row ${isReversed ? "md:flex-row-reverse right-10" : "left-10"} items-center max-w-7xl mx-auto overflow-hidden relative mb-40`}>
      {/* Project Screenshot */}
      <div className="md:w-2/3 relative">
        <Image
          src={project.image}
          alt={`${project.project_title} Screenshot`}
          width={1200}
          height={500}
          className="w-[800px] h-[430px] object-cover"
        />
      </div>

      {/* Project Details */}
      <div className="md:w-[40%] flex flex-col justify-between h-full pl-6 py-16 relative">
        {/* Project Info Top Right */}
        <div className={`absolute top-0 ${isReversed ? "left-10 text-left" : "right-10 text-right"}`}>
          <div className="text-teal-400 font-mono text-[1.3rem]">{project.type}</div>
          <h2 className="text-[2.3rem] font-bold text-white mb-4">{project.project_title}</h2>
        </div>

        {/* Description */}
        <p className={`text-gray-200 text-[1.15rem] mb-4 mt-16 w-[110%] absolute top-10 ${isReversed ? "left-9" : "-left-20"} bg-[#15171F] p-10 rounded-lg backdrop-blur-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-black`}>
          {project.description}
        </p>

        {/* Tech Stack & Links */}
        <div className={`flex flex-col ${isReversed ? "items-start" : "items-end"} mt-40`}>
          <div className={`font-mono text-[1rem] text-gray-400 mt-20 ${isReversed ? "ml-3" : "mr-8"}`}>
            | {project.tech_stack.join(" | ")}
          </div>
          <div className={`flex space-x-4 pt-10 absolute bottom-1 ${isReversed ? "ml-3" : "mr-8"}`}>
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
    <div className="bg-[#0b0c10] text-white min-h-screen p-8 max-w-[70vw] mx-auto">
      <h1 className="text-[3.2rem] font-bold pt-12 pb-24 underline decoration-wavy decoration-[#5ee6dd] underline-offset-8">Projects</h1>
      {project_data.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}
      <Link href="/projects" className="flex text-center justify-center">
        <div className="text-[#5ee6dd] border border-[#5ee6dd] h-fit w-fit p-5 rounded-lg cursor-pointer">
          View All Projects
        </div>
      </Link>
    </div>
  );
}
