"use client";
import { useState, useEffect } from "react";
import Particles from "../components/TechParticlesBackground";
import { SiGithub } from "react-icons/si";
import { FiSearch, FiChevronDown } from "react-icons/fi";
import Link from "next/link";

export default function Projects() {
  const [navbarHeight, setNavbarHeight] = useState(80);
  const [searchTerm, setSearchTerm] = useState("");
  const [projectTypeFilter, setProjectTypeFilter] = useState("all");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const navbar =
      document.querySelector("nav") || document.querySelector("header");
    if (navbar) {
      const height = navbar.offsetHeight;
      setNavbarHeight(height > 0 ? height : 80);
    }
  }, []);

  const projects = [
    {
      id: 1,
      title: "Sign Language Recognition System",
      description: "A robust sign language recognition system with real-time gesture detection, language translation, and communication support for enhanced accessibility and interaction.",
      technologies: ["ML", "Python", "Computer Vision", "React"],
      type: "Machine Learning",
      color: "bg-black",
      github: "https://github.com/bejjipuram/sign_translator",
      image: "/images/projects/rentopia.jpg"
    },
    {
      id: 2,
      title: "Startup Radar",
      description: "ML-powered platform to analyze and predict startup growth and success rates using funding data and market trends.",
      technologies: ["Python", "Streamlit", "XGBoost", "Linear Regression"],
      type: "Machine Learning",
      color: "bg-black",
      github: "https://github.com/DANNE-SANDEEP/StartupRadar",
      image: "/images/projects/startup-radar.jpg"
    },
    {
      id: 3,
      title: "Legal ChatBot",
      description: "AI-assisted chatbot that provides preliminary legal information and document preparation guidance.",
      technologies: ["OnDemand API", "React"],
      type: "AI",
      color: "bg-black",
      github: "https://github.com/DANNE-SANDEEP/legal-chatbot",
      image: "/images/projects/legal-chatbot.jpg"
    },
    // You can add more projects here
  ];

  // Get unique project types for the filter dropdown
  const projectTypes = ["all", ...new Set(projects.map(project => project.type))];

  // Filter projects based on search term and project type
  const filteredProjects = projects.filter(project => {
    const matchesSearch = searchTerm === "" || 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) || 
      project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesType = projectTypeFilter === "all" || project.type === projectTypeFilter;
    
    return matchesSearch && matchesType;
  });

  // Project card component without hover animation
  const ProjectCard = ({ project }) => {
    return (
      <div 
        className="bg-transparent shadow-md p-6 relative overflow-hidden transition-all duration-300 hover:shadow-xl backdrop-blur-md border border-black animate-[fadeIn_0.8s_ease-in]"
      >
        {/* Colored border on the left side */}
        <div className={`absolute left-0 top-0 bottom-0 w-1 ${project.color}`}></div>
        
        {/* Project type badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="text-xs font-medium bg-gray-300 backdrop-blur-sm px-2 py-1 rounded-full">
            {project.type}
          </span>
        </div>
        
        {/* GitHub link */}
        <div className="absolute top-4 right-4 z-20">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-black transition-colors hover:text-gray-600"
            aria-label={`GitHub repository for ${project.title}`}
          >
            <SiGithub className="text-2xl" />
          </a>
        </div>

        {/* Project title */}
        <h2 className="text-xl md:text-2xl text-black font-bold mb-4 pl-4 mt-6">
          {project.title}
        </h2>

        {/* Project content */}
        <div className="pl-4">
          <p className="text-gray-700 mb-6">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span key={index} className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Custom dropdown component matching the theme
  const CustomDropdown = () => {
    return (
      <div className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center justify-between w-full px-4 py-2 bg-transparent text-black backdrop-blur-md border border-black shadow-md transition-all hover:shadow-lg"
        >
          <span>
            {projectTypeFilter === "all" ? "All Project Types" : projectTypeFilter}
          </span>
          <FiChevronDown className={`ml-2 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
        </button>
        
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-full bg-white/90 text-black backdrop-blur-md border border-black shadow-md z-30">
            {projectTypes.map((type) => (
              <button
                key={type}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors"
                onClick={() => {
                  setProjectTypeFilter(type);
                  setIsDropdownOpen(false);
                }}
              >
                {type === "all" ? "All Project Types" : type}
              </button>
            ))}
          </div>
        )}
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
        <h1 className="text-3xl font-bold mb-6 text-black animate-[fadeIn_0.6s_ease-in]">Projects</h1>
        <p className="text-lg text-black font-bold mb-6 animate-[fadeIn_0.7s_ease-in]">
          Explore my Projects of Full-Stack and Machine Learning.
        </p>
        
        {/* Search and Filter controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-10 animate-[fadeIn_0.8s_ease-in]">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search projects by title, description or technology..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-transparent backdrop-blur-md border text-black border-black shadow-md focus:outline-none focus:shadow-lg transition-all"
            />
            <FiSearch className="absolute left-3 top-3 text-gray-700" />
          </div>
          <div className="md:w-48">
            <CustomDropdown />
          </div>
        </div>
        
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-black animate-[fadeIn_0.8s_ease-in]">
            <p className="text-xl">No projects match your search criteria</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setProjectTypeFilter("all");
              }}
              className="mt-4 px-4 py-2 bg-transparent backdrop-blur-md border border-black shadow-md hover:shadow-lg transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
}