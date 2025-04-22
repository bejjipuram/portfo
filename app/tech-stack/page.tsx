"use client";
import { useState, useEffect } from "react";
import Particles from "../components/TechParticlesBackground";
import { FiCode, FiDatabase, FiLayers, FiCpu, FiBox } from "react-icons/fi";

export default function TechStack() {
  const [navbarHeight, setNavbarHeight] = useState(80);

  useEffect(() => {
    const navbar =
      document.querySelector("nav") || document.querySelector("header");
    if (navbar) {
      const height = navbar.offsetHeight;
      setNavbarHeight(height > 0 ? height : 80);
    }
  }, []);

  // Tech stack categories
  const categories = [
    {
      name: "Programming Languages",
      icon: <FiCode />,
      technologies: [
        { name: "Python", icon: "/tech-icons/python.svg" },
        { name: "C++", icon: "/tech-icons/cpp.svg" },
        { name: "Java", icon: "/tech-icons/java.svg" },
        { name: "JavaScript", icon: "/tech-icons/javascript.svg" },
        { name: "TypeScript", icon: "/tech-icons/typescript.svg" }
      ]
    },
    {
      name: "Frontend Development",
      icon: <FiLayers />,
      technologies: [
        { name: "HTML", icon: "/tech-icons/html5.svg" },
        { name: "CSS", icon: "/tech-icons/css3.svg" },
        { name: "React", icon: "/tech-icons/react.svg" },
        { name: "Next.js", icon: "/tech-icons/nextjs.svg" },
        { name: "Tailwind CSS", icon: "/tech-icons/tailwind.svg" }
      ]
    },
    {
      name: "DevOps",
      icon: <FiDatabase />,
      technologies: [
        { name: "Docker", icon: "/tech-icons/docker.svg" },
        { name: "CI/CD", icon: "/tech-icons/cicd.svg" },
        { name: "Terraform", icon: "/tech-icons/terraform.svg" },
        { name: "Kubernetes", icon: "/tech-icons/kubernet.svg" }
      ]
    },
    {
      name: "Development Tools",
      icon: <FiCpu />,
      technologies: [
        { name: "Git", icon: "/tech-icons/git.svg" },
        { name: "GitHub", icon: "/tech-icons/github.svg" },
        { name: "VS Code", icon: "/tech-icons/vscode.svg" }
      ]
    },
    {
      name: "Cloud Computing",
      icon: <FiBox />,
      technologies: [
        { name: "AWS", icon: "/tech-icons/aws.svg" },
        { name: "Azure", icon: "/tech-icons/azure.svg" },
        { name: "Sales Force", icon: "/tech-icons/salesforce.svg" }
      ]
    }
  ];

  // Section Card component
  const SectionCard = ({ category }) => {
    return (
      <div className="bg-transparent shadow-md relative overflow-hidden transition-all duration-300 hover:shadow-xl backdrop-blur-md border border-black mb-8 animate-[fadeIn_0.8s_ease-in]">
        {/* Colored border on the left side */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-black"></div>
        
        {/* Header */}
        <div className="flex items-center border-b border-black p-6">
          <div className="mr-4 text-2xl text-black">{category.icon}</div>
          <h2 className="text-xl md:text-2xl text-black font-bold">
            {category.name}
          </h2>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {category.technologies.map((tech, idx) => (
              <TechCard key={idx} tech={tech} />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  // Tech Card component - redesigned without progress bars
  const TechCard = ({ tech }) => {
    return (
      <div className="group">
        <div className="flex flex-col items-center p-4 bg-white/50 backdrop-blur-sm rounded-lg border border-transparent hover:border-black shadow-sm hover:shadow-md transition-all duration-300">
          <div className="w-16 h-16 mb-3 relative flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-full h-full object-contain"
            />
          </div>
          <h3 className="text-black font-medium text-center">{tech.name}</h3>
        </div>
      </div>
    );
  };

  return (
    <main
      style={{ paddingTop: `${navbarHeight}px` }}
      className="relative min-h-screen w-full"
    >
      <Particles />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <h1 className="text-3xl font-bold mb-6 text-black animate-[fadeIn_0.6s_ease-in]">
          Tech Stack
        </h1>
        <p className="text-lg text-black font-bold mb-10 animate-[fadeIn_0.7s_ease-in]">
          Technologies, frameworks, and tools I work with.
        </p>
        
        {/* Tech Stack Sections */}
        {categories.map((category, index) => (
          <SectionCard key={index} category={category} />
        ))}
      </div>
    </main>
  );
}