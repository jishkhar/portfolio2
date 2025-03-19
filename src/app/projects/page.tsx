import Image from "next/image";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { TbExternalLink } from "react-icons/tb";

const project_data = [
  {
    image: "https://as1.ftcdn.net/v2/jpg/02/90/34/56/1000_F_290345698_p1Q14Obl6ywf5n0WdrHii2mmtWq97Y6n.jpg",
    type: "DeFi",
    project_title: "NexusFi",
    description:
      "NexusFi is a Decentralized Finance Platform where users can create indexes of their favorite tokens and trade them.",
    tech_stack: ["Rust", "TypeScript", "ReactJS", "TailwindCSS"],
    github: "https://github.com/example",
    website: "https://example.com",
  }
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
    <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto mb-8 border border-gray-800 rounded-lg overflow-hidden relative">
      {/* Project Screenshot */}
      <div className="md:w-2/3 relative">
        <Image
          src={project.image}
          alt={`${project.project_title} Screenshot`}
          width={1400}
          height={500}
          className="w-full h-[400px] object-cover"
        />
      </div>

      {/* Project Details */}
      <div className="md:w-1/4 flex flex-col justify-between h-full p-6 relative">
        {/* Project Info Top Right */}
        <div className="absolute top-4 right-4 text-right">
          <div className="text-teal-400 font-mono text-lg">{project.type}</div>
          <h2 className="text-3xl font-bold text-white mb-4">{project.project_title}</h2>
        </div>
        <p className="text-gray-200 text-lg mb-4 mt-12 w-[120%] absolute -left-12 bg-gray-900 p-4 rounded-lg backdrop-blur-sm">{project.description}</p>
        <div className="flex flex-col items-end mt-40">
          <div className="font-mono text-md text-gray-400 mt-4 mb-6">
            | {project.tech_stack.join(" | ")}
          </div>
          <div className="flex space-x-4">
            <Link href={project.github} className="text-white hover:text-gray-300 transition" target="_blank">
              <FiGithub className="w-7 h-7" />
            </Link>
            <Link href={project.website} className="text-white hover:text-gray-300 transition" target="_blank">
              <TbExternalLink className="w-7 h-7" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function PortfolioShowcase() {
  return (
    <div className="bg-black text-white min-h-screen p-8">
      <h1 className="text-6xl font-bold mb-16">Things I've Built</h1>
      {project_data.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
}
