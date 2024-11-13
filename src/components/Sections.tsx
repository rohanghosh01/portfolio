import { GlassCard } from "./GlassCard";
import {
  Download,
  Mail,
  Github,
  Linkedin,
  Database,
  Server,
  Code,
  ExternalLink,
} from "lucide-react";
import portfolioData from "../data/portfolio.json";
import Hero3D from "./Hero3D";
import { motion } from "framer-motion";

const GradientButton = ({
  children,
  href,
  className = "",
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) => (
  <a
    href={href}
    className={`group relative rounded-full p-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 animate-gradient
    hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 ${className}`}
    target="_blank"
  >
    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />
    <div className="relative flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 group-hover:bg-gray-800 transition-colors duration-300">
      {children}
    </div>
  </a>
);

export const Hero = () => (
  <section className="min-h-screen relative overflow-hidden">
    <div className="absolute inset-0 w-full h-full opacity-30">
      <Hero3D isDark={true} />
    </div>
    <div className="relative z-10 container mx-auto px-6 py-32 flex items-center justify-between min-h-screen">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl"
      >
        <div className="backdrop-blur-sm bg-white/30 dark:bg-black/30 p-8 rounded-2xl">
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4 max-sm:text-center">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-gradient relative">
              Rohan Ghosh
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50 blur-lg -z-10"></span>
            </span>
          </h1>
          <h2 className="text-3xl text-gray-700 dark:text-gray-300 mb-6">
            Full Stack Developer
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Passionate full-stack developer with 2+ years of experience building
            scalable web applications using Node.js, React, and Next.js.
          </p>
          <div className="flex gap-4 max-sm:flex-col items-center">
            <GradientButton href="/Resume.pdf">
              <Download size={20} /> Download Resume
            </GradientButton>
            <div className="flex gap-4 ">
              <a
                href="https://github.com/rohanghosh01"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 dark:bg-gray-800/50 dark:hover:bg-gray-800/80 transition-colors"
              >
                <Github
                  size={24}
                  className="text-gray-700 dark:text-gray-300"
                />
              </a>
              <a
                href="https://linkedin.com/in/rohan-g11"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 dark:bg-gray-800/50 dark:hover:bg-gray-800/80 transition-colors"
              >
                <Linkedin
                  size={24}
                  className="text-gray-700 dark:text-gray-300"
                />
              </a>
              <a
                href="mailto:rohanghosh204@gmail.com"
                className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 dark:bg-gray-800/50 dark:hover:bg-gray-800/80 transition-colors"
              >
                <Mail size={24} className="text-gray-700 dark:text-gray-300" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hidden lg:block"
      >
        <div className="relative w-96 h-96">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
          <img
            src="/mypic.jpg"
            alt="Rohan Ghosh"
            className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-2xl"
          />
        </div>
      </motion.div>
    </div>
  </section>
);

export const Skills = () => (
  <div className="container mx-auto px-4 h-screen flex items-center justify-center max-sm:my-40">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
        Skills & Expertise
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-sm:grid-flow-row h-screen">
        <GlassCard className="max-w-4xl w-full h-96 max-sm:h-[20rem] ">
          <Code className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
            Frontend Development
          </h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>React.js & Next.js</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>Redux & Context API</li>
          </ul>
        </GlassCard>
        <GlassCard className=" w-full h-96 max-sm:h-[20rem]">
          <Server className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
            Backend Development
          </h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>Node.js & Express</li>
            <li>RESTful APIs</li>
            <li>GraphQL</li>
            <li>Authentication & Security</li>
          </ul>
        </GlassCard>

        <GlassCard className=" w-full h-96 max-sm:h-[20rem]">
          <Database className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
            Database & DevOps
          </h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>MongoDB</li>
            <li>PostgreSQL</li>
            <li>Docker</li>
            <li>AWS & Vercel</li>
          </ul>
        </GlassCard>
      </div>
    </div>
  </div>
);

export const Projects = () => (
  <div className="container mx-auto px-4 min-h-screen max- flex items-center justify-center py-20 max-sm:mb-20 max-w-[80rem]">
    <div className="w-full max-sm:mt-20">
      <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[100rem] mx-auto">
        {portfolioData.projects.map((project) => (
          <GlassCard
            key={project.title}
            className="group w-full h-[35rem] max-sm:h-[36rem] max-w-[40rem]"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-cover rounded-lg mb-4
              group-hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm rounded-full
                  bg-blue-500/20 text-blue-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Github size={20} /> Code
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <ExternalLink size={20} /> Live
                </a>
              )}
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  </div>
);

export const Experience = () => (
  <div className="container mx-auto px-4 h-screen flex items-center justify-center">
    <GlassCard className="max-w-4xl w-full h-[36rem] max-sm:h-[70rem]">
      <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Experience
      </h2>
      <div className="space-y-8">
        {portfolioData.experience.map((exp) => (
          <div
            key={exp.company}
            className="relative pl-8 border-l-2 border-blue-500/30
            hover:border-blue-500 transition-colors duration-300"
          >
            <div
              className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px]
              bg-gradient-to-r from-blue-500 to-purple-500 rounded-full
              group-hover:animate-pulse"
            />
            <h3 className="text-xl font-bold">{exp.company}</h3>
            <p className="text-gray-400">{exp.role}</p>
            <p className="text-sm text-gray-500">{exp.period}</p>
            <p className="mt-2 text-gray-300">{exp.description}</p>
          </div>
        ))}
      </div>
    </GlassCard>
  </div>
);

export const Contact = () => (
  <div className="container mx-auto px-4 h-screen flex items-center justify-center">
    <GlassCard className="max-w-4xl w-full text-center h-60">
      <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Get in Touch
      </h2>
      <div className="flex justify-center gap-6">
        {[
          { href: `mailto:${portfolioData.profile.email}`, icon: Mail },
          { href: "https://github.com/rohanghosh01", icon: Github },
          { href: "https://linkedin.com/in/rohan-g11/", icon: Linkedin },
        ].map((link, index) => (
          <GradientButton key={index} href={link.href} className="p-[2px]">
            <link.icon className="w-6 h-6" />
          </GradientButton>
        ))}
      </div>
    </GlassCard>
  </div>
);
