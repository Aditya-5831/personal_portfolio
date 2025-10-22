import { Briefcase, Code, User } from "lucide-react";
import Link from "next/link";
import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Full stack developer
            </h3>

            <p className="text-muted-foreground">
              I’m a Full Stack Developer who loves building modern web
              applications. I work across the full stack, creating clean
              front-end interfaces with React and Next.js, and scalable back-end
              systems with Node.js and databases like MongoDB.
            </p>

            <p className="text-muted-foreground">
              I enjoy solving problems, learning new technologies, and turning
              ideas into functional, user-friendly digital experiences. My goal
              is to build apps that are both efficient and visually appealing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <Link href="#contact" className="cosmic-button">
                Get In Touch
              </Link>

              <Link
                href="#contact"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Full Stack Development
                  </h4>
                  <p className="text-muted-foreground">
                    Building modern, responsive web applications with React,
                    Next.js, and Node.js..
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    UI & Front-End Design
                  </h4>
                  <p className="text-muted-foreground">
                    Crafting intuitive, user-friendly interfaces that enhance
                    the overall experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Agile Project Delivery
                  </h4>
                  <p className="text-muted-foreground">
                    Managing and delivering projects efficiently using agile
                    practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
