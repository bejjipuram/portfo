"use client";
import { useState, useEffect } from "react";
import Particles from "../components/TechParticlesBackground";
import {
  SiHtml5,
  SiCss3,
  SiReact,
  SiJavascript,
  SiGithub,
  SiNodedotjs,
  SiPython,
  SiAmazon,
  SiSalesforce,
  SiKubernetes,
  SiDocker,
  SiTerraform,
  SiCplusplus,
  SiMysql,
} from "react-icons/si";
import Link from "next/link";
import { FaMicrosoft } from "react-icons/fa";

export default function About() {
  const [navbarHeight, setNavbarHeight] = useState(80);

  useEffect(() => {
    const navbar =
      document.querySelector("nav") || document.querySelector("header");
    if (navbar) {
      const height = navbar.offsetHeight;
      setNavbarHeight(height > 0 ? height : 80);
    }
  }, []);

  // Grid item component with hover effect that fills div with black and centers heading
  const GridItem = ({ title, link, className, children }) => {
    return (
      <Link
        href={link || "#"}
        className={`bg-transparent shadow-md p-6 relative overflow-hidden group transition-all duration-300 hover:shadow-xl backdrop-blur-md border border-black ${className}`}
      >
        {/* Heading that's visible before hover */}
        <h2 className="text-xl md:text-2xl font-bold mb-4 transition-all duration-300 group-hover:translate-y-0 group-hover:absolute group-hover:top-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2 text-black hover:-translate-y-1/2 group-hover:text-white group-hover:text-center group-hover:w-full group-hover:z-20">
          {title}
        </h2>

        {/* Content that fades out on hover */}
        <div className="mt-4 transition-all duration-300 group-hover:opacity-0">
          {children}
        </div>

        {/* Black overlay that appears on hover */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-90 transition-opacity duration-300 z-10"></div>
      </Link>
    );
  };

  return (
    <main
      style={{ paddingTop: `${navbarHeight}px` }}
      className="relative min-h-screen w-full"
    >
      <Particles className="opacity-30" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        {/* Grid Layout matching the sketch and new reference image */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 animate-[fadeIn_0.8s_ease-in]">
          {/* Profile Picture */}
          <GridItem
            title="Profile"
            link="/profile"
            className="md:col-span-4 md:row-span-1"
          >
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-blue-300">
                <img
                  src="/profile.jpg"
                  alt="Sandeep Danne"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/300?text=SD";
                  }}
                />
              </div>
              <h3 className="mt-4 font-medium text-lg">Bejjipuram Indra Kumar</h3>
              <p className="text-gray-600 text-center">
                Cloud & DevOps Engineer
              </p>
            </div>
          </GridItem>

          {/* Tech Stack */}
          <GridItem
            title="Tech Stack"
            link="/tech-stack"
            className="md:col-span-8 md:row-span-1"
          >
            <div className="relative h-64 w-full bg-transparent overflow-hidden">
              {/* Scattered floating bubbles with more dynamic animations */}
              {[
                {
                  name: "HTML5",
                  icon: (
                    <SiHtml5 className="text-orange-600 text-2xl md:text-3xl" />
                  ),
                  position: "top-10 left-6",
                  animation: "animate-float-1",
                  bubbleColor: "bg-orange-50",
                },
                {
                  name: "CSS3",
                  icon: (
                    <SiCss3 className="text-blue-600 text-2xl md:text-3xl" />
                  ),
                  position: "top-32 left-24",
                  animation: "animate-float-2",
                  bubbleColor: "bg-blue-50",
                },
                {
                  name: "React",
                  icon: (
                    <SiReact className="text-cyan-500 text-2xl md:text-3xl" />
                  ),
                  position: "top-16 left-48",
                  animation: "animate-float-3",
                  bubbleColor: "bg-cyan-50",
                },
                {
                  name: "JavaScript",
                  icon: (
                    <SiJavascript className="text-yellow-400 text-2xl md:text-3xl" />
                  ),
                  position: "top-6 left-80",
                  animation: "animate-float-4",
                  bubbleColor: "bg-yellow-50",
                },
                {
                  name: "GitHub",
                  icon: (
                    <SiGithub className="text-black text-2xl md:text-3xl" />
                  ),
                  position: "top-40 left-33",
                  animation: "animate-float-5",
                  bubbleColor: "bg-gray-50",
                },
                {
                  name: "Node.js",
                  icon: (
                    <SiNodedotjs className="text-green-600 text-2xl md:text-3xl" />
                  ),
                  position: "top-24 left-60",
                  animation: "animate-float-3",
                  bubbleColor: "bg-green-50",
                },
                {
                  name: "Python",
                  icon: (
                    <SiPython className="text-yellow-500 text-2xl md:text-3xl" />
                  ),
                  position: "top-8 left-32",
                  animation: "animate-float-5",
                  bubbleColor: "bg-yellow-50",
                },
                {
                  name: "AWS",
                  icon: (
                    <SiAmazon className="text-orange-500 text-2xl md:text-3xl" />
                  ),
                  position: "top-36 left-72",
                  animation: "animate-float-3",
                  bubbleColor: "bg-orange-50",
                },
                {
                  name: "Kubernetes",
                  icon: (
                    <SiKubernetes className="text-blue-500 text-2xl md:text-3xl" />
                  ),
                  position: "top-10 left-110",
                  animation: "animate-float-3",
                  bubbleColor: "bg-blue-50",
                },
                {
                  name: "Salesforce",
                  icon: (
                    <SiSalesforce className="text-sky-400 text-2xl md:text-3xl" />
                  ),
                  position: "top-10 left-153",
                  animation: "animate-float-3",
                  bubbleColor: "bg-sky-50",
                },
                {
                  name: "Azure",
                  icon: (
                    <FaMicrosoft className="text-blue-600 text-2xl md:text-3xl" />
                  ),
                  position: "top-16 left-90",
                  animation: "animate-float-3",
                  bubbleColor: "bg-blue-100",
                },
                {
                  name: "Docker",
                  icon: (
                    <SiDocker className="text-blue-400 text-2xl md:text-3xl" />
                  ),
                  position: "top-28 left-124",
                  animation: "animate-float-4",
                  bubbleColor: "bg-blue-50",
                },
                {
                  name: "Terraform",
                  icon: (
                    <SiTerraform className="text-purple-500 text-2xl md:text-3xl" />
                  ),
                  position: "top-30 left-166",
                  animation: "animate-float-4",
                  bubbleColor: "bg-purple-50",
                },
                {
                  name: "C++",
                  icon: (
                    <SiCplusplus className="text-blue-700 text-2xl md:text-3xl" />
                  ),
                  position: "top-20 left-140",
                  animation: "animate-float-3",
                  bubbleColor: "bg-blue-50",
                },
                {
                  name: "SQL",
                  icon: (
                    <SiMysql className="text-blue-600 text-2xl md:text-3xl" />
                  ),
                  position: "top-25 left-100",
                  animation: "animate-float-3",
                  bubbleColor: "bg-blue-100",
                },
                
                
              ].map((tech) => (
                <div
                  key={tech.name}
                  className={`absolute ${tech.position} ${tech.animation} transform`}
                  title={tech.name}
                >
                  <div
                    className={`flex items-center justify-center ${tech.bubbleColor} w-16 h-16 rounded-full shadow-lg border border-opacity-20 border-white`}
                  >
                    {tech.icon}
                  </div>
                </div>
              ))}
            </div>
          </GridItem>

          {/* Projects */}
          <GridItem
            title="Projects"
            link="/projects"
            className="md:col-span-3 md:row-span-1"
          >
            <div className="space-y-3 text-black">
              <div className="border-l-4 border-blue-500 pl-3">
                <h4 className="font-medium">Sign Language Recognition System.</h4>
                <p className="text-sm text-gray-600">ML, Python, Computer Vision, React</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-3">
                <h4 className="font-medium">Startup Radar</h4>
                <p className="text-sm text-gray-600">
                  Python, Streamlit, XGBoost, Linear Regression
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-3">
                <h4 className="font-medium">Legal ChatBot</h4>
                <p className="text-sm text-gray-600">OnDemand API, React</p>
              </div>
            </div>
          </GridItem>

          {/* Full Stack */}
          <GridItem
            title="Cloud & DevOps Engineer"
            link="/career"
            className="md:col-span-6 md:row-span-1"
          >
            <div className="space-y-3">
              <p className="text-gray-700">
              Designing and automating scalable cloud infrastructure and CI/CD pipelines to power modern applications and intelligent systems.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">
                  AWS
                </span>
                <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">
                  Docker
                </span>
                <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">
                  Kubernetes
                </span>
                <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">
                  Terraform
                </span>
                <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">
                  DevOps
                </span>
              </div>
            </div>
          </GridItem>

          {/* Certifications */}
          <GridItem
            title="Certifications"
            link="/certifications"
            className="md:col-span-3 md:row-span-1"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-3 bg-gray-100 p-3 rounded">
                <img
                  src="/logos/microsoft-logo.webp"
                  alt="GeeksforGeeks"
                  className="w-8 h-8"
                />
                <div>
                  <div className=" text-black">
                    <h4 className="font-medium">Azure Administrator Associate</h4>
                    <p className="text-xs text-gray-600">Microsoft</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-gray-100 p-3 rounded">
                <img src="/logos/salesforce.png" alt="Udemy" className="h-8" />
                <div>
                  <div className=" text-black">
                    <h4 className="font-medium">AI Associate</h4>
                    <p className="text-xs text-gray-600">Salesforce</p>
                  </div>
                </div>
              </div>
            </div>
          </GridItem>

          {/* My Reads */}
          <GridItem
            title="My Reads"
            link="/reads"
            className="md:col-span-4 md:row-span-1"
          >
            <div className="flex flex-col items-center">
              <p className="text-gray-700 mb-4 text-center">
                Explore the books shaping my perspectives.
              </p>
              <div className="bg-gray-100 p-3 rounded w-32 h-40 flex items-center justify-center">
                <p className="text-center font-medium">Atomic Habits</p>
              </div>
            </div>
          </GridItem>

          {/* Beyond the Code */}
          <GridItem
            title="Beyond the Code"
            link="/hobbies"
            className="md:col-span-8 md:row-span-1"
          >
            <div>
              <p className="text-gray-700 mb-4">
                Interests and hobbies beyond the digital realm.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "Painting", icon: "🎨" },
                  { name: "Photography", icon: "📸" },
                  { name: "Gaming", icon: "🎮" },
                  { name: "Hiking", icon: "🥾" },
                  { name: "Music", icon: "🎵" },
                  { name: "Fitness", icon: "💪" },
                  { name: "Reading", icon: "📚" },
                ].map((hobby) => (
                  <span
                    key={hobby.name}
                    className="px-3 py-2 bg-green-100 text-green-800 rounded-full text-sm flex items-center gap-1"
                  >
                    <span>{hobby.icon}</span> {hobby.name}
                  </span>
                ))}
              </div>
            </div>
          </GridItem>
        </div>
      </div>
    </main>
  );
}
