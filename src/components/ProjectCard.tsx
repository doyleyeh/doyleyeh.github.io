"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  date: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  achievements: string[];
}

export default function ProjectCard({
  title,
  date,
  description,
  techStack,
  githubUrl,
  demoUrl,
  achievements,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-xl border-2 border-gray-300 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-blue-400 hover:shadow-md dark:border-gray-600 dark:bg-white/20 dark:hover:border-blue-500"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-gray-50/[0.02] opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-blue-500/[0.02] dark:to-purple-500/[0.02]" />
      <div className="relative space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {title}
            </h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              {date}
            </p>
          </div>
          <div className="flex space-x-4">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
              >
                <FaGithub className="h-5 w-5" />
              </a>
            )}
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
              >
                <FaExternalLinkAlt className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-300">{description}</p>

        <div>
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
            Key Achievements
          </h4>
          <ul className="mt-2 space-y-2">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500/70 dark:bg-blue-400/70" />
                <span className="text-gray-600 dark:text-gray-300">
                  {achievement}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-blue-100/80 px-3 py-1 text-sm font-medium text-blue-800 backdrop-blur-sm transition-colors hover:bg-blue-200/80 dark:bg-blue-900/30 dark:text-blue-400 dark:hover:bg-blue-800/40"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
