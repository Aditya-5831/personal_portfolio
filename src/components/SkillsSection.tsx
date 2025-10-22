"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiAmazon,
  SiGithub,
  SiFigma,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skills = [
  // Frontend
  {
    name: "HTML/CSS",
    level: 95,
    category: "frontend",
    icon: <SiHtml5 className="w-6 h-6 text-orange-500" />,
  },
  {
    name: "JavaScript",
    level: 90,
    category: "frontend",
    icon: <SiJavascript className="w-6 h-6 text-yellow-400" />,
  },
  {
    name: "TypeScript",
    level: 85,
    category: "frontend",
    icon: <SiTypescript className="w-6 h-6 text-blue-500" />,
  },
  {
    name: "React",
    level: 90,
    category: "frontend",
    icon: <SiReact className="w-6 h-6 text-cyan-400" />,
  },
  {
    name: "Next.js",
    level: 85,
    category: "frontend",
    icon: <SiNextdotjs className="w-6 h-6 text-white" />,
  },
  {
    name: "React Native",
    level: 80,
    category: "frontend",
    icon: <SiReact className="w-6 h-6 text-cyan-400" />,
  },
  {
    name: "Tailwind CSS",
    level: 80,
    category: "frontend",
    icon: <SiTailwindcss className="w-6 h-6 text-teal-400" />,
  },

  // Backend
  {
    name: "Node.js",
    level: 85,
    category: "backend",
    icon: <SiNodedotjs className="w-6 h-6 text-green-600" />,
  },
  {
    name: "Express.js",
    level: 80,
    category: "backend",
    icon: <SiExpress className="w-6 h-6 text-gray-700" />,
  },
  {
    name: "MongoDB",
    level: 80,
    category: "backend",
    icon: <SiMongodb className="w-6 h-6 text-green-500" />,
  },
  {
    name: "PostgreSQL",
    level: 75,
    category: "backend",
    icon: <SiPostgresql className="w-6 h-6 text-blue-700" />,
  },
  {
    name: "Redis",
    level: 70,
    category: "backend",
    icon: <SiRedis className="w-6 h-6 text-red-600" />,
  },

  // DevOps / Tools
  {
    name: "Docker",
    level: 75,
    category: "tools",
    icon: <SiDocker className="w-6 h-6 text-blue-500" />,
  },
  {
    name: "AWS",
    level: 75,
    category: "tools",
    icon: <SiAmazon className="w-6 h-6 text-orange-500" />,
  },
  {
    name: "Git & GitHub",
    level: 90,
    category: "tools",
    icon: <SiGithub className="w-6 h-6 text-gray-800" />,
  },
  {
    name: "VS Code",
    level: 95,
    category: "tools",
    icon: <VscVscode className="w-6 h-6 text-blue-600" />,
  },
  {
    name: "Figma",
    level: 70,
    category: "tools",
    icon: <SiFigma className="w-6 h-6 text-pink-500" />,
  },
];

const categories = ["all", "frontend", "backend", "tools"];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="flex items-center mb-4 gap-3">
                {skill.icon}
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>

              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
