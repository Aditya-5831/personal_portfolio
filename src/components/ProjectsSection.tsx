"use client";

import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiSupabase,
  SiNodedotjs,
  SiMongodb,
  SiTypescript,
  SiDocker,
} from "react-icons/si";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "SaaS Landing Page",
    description:
      "A modern landing page built with React, Next.js, and TailwindCSS.",
    image: "/projects/project1.png",
    skills: [
      { name: "React", icon: <SiReact className="w-4 h-4 text-cyan-400" /> },
      {
        name: "TailwindCSS",
        icon: <SiTailwindcss className="w-4 h-4 text-teal-400" />,
      },
      {
        name: "Supabase",
        icon: <SiSupabase className="w-4 h-4 text-green-500" />,
      },
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description:
      "A scalable e-commerce app with Next.js, Node.js, and MongoDB.",
    image: "/projects/project2.png",
    skills: [
      { name: "Next.js", icon: <SiNextdotjs className="w-4 h-4 text-white" /> },
      {
        name: "Node.js",
        icon: <SiNodedotjs className="w-4 h-4 text-green-600" />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="w-4 h-4 text-green-500" />,
      },
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal portfolio showcasing projects and skills using TypeScript and TailwindCSS.",
    image: "/projects/project3.png",
    skills: [
      {
        name: "TypeScript",
        icon: <SiTypescript className="w-4 h-4 text-blue-500" />,
      },
      {
        name: "TailwindCSS",
        icon: <SiTailwindcss className="w-4 h-4 text-teal-400" />,
      },
      { name: "Docker", icon: <SiDocker className="w-4 h-4 text-blue-600" /> },
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl mb-4 font-bold text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here’s a collection of projects I’ve built across web and mobile
          platforms. Each project showcases my skills in Full Stack development,
          from creating responsive front-end interfaces to building scalable
          back-end systems. These works reflect my focus on clean code,
          user-friendly design, and practical problem-solving.
        </p>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-md flex flex-col"
            >
              {/* Project Image */}
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110 cursor-pointer"
                />
              </div>

              {/* Project Content */}
              <div className="p-4 flex-1 flex flex-col pb-5">
                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border flex items-center gap-1"
                    >
                      {skill.icon}
                      {skill.name}
                    </span>
                  ))}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm flex-1">
                  {project.description}
                </p>

                {/* Action Buttons */}
                <div className="flex justify-start items-center mt-5 gap-2">
                  {project.demoUrl && (
                    <Link
                      href={project.demoUrl}
                      target="_blank"
                      className="px-3 py-1 rounded-full bg-primary/10 border border-primary text-primary flex items-center gap-1 text-xs hover:bg-primary/20 transition"
                    >
                      <FiExternalLink className="w-4 h-4" />
                      Demo
                    </Link>
                  )}
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      className="px-3 py-1 rounded-full bg-primary/10 border border-primary text-primary flex items-center gap-1 text-xs hover:bg-primary/20 transition"
                    >
                      <FaGithub className="w-4 h-4" />
                      Code
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href={"https://github.com/Aditya-5831"}
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My Github <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
