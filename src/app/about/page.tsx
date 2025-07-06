"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Timeline from "@/components/Timeline";

const skills = {
  "Programming Languages": ["Python", "JavaScript/TypeScript", "C/C++", "SQL"],
  "Web Development": [
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "HTML/CSS",
    "Tailwind CSS",
    "RESTful APIs",
  ],
  "Machine Learning": [
    "PyTorch",
    "TensorFlow",
    "Scikit-learn",
    "Pandas",
    "NumPy",
  ],
  "Database & Cloud": ["PostgreSQL", "MongoDB", "AWS", "Docker", "Git"],
  "Security & Networking": [
    "Network Security",
    "Wireshark",
    "FortiClient",
    "System Administration",
    "Cybersecurity Analytics",
  ],
};

const experience = [
  {
    period: "August 2023 - May 2025",
    degree: "Master of Science in Informatics",
    institution: "The Pennsylvania State University",
    description:
      "Coursework: Computer Security, Software Security, Cybersecurity Analytics, Network Management, Cloud Security, Data Mining, Machine Learning",
  },
  {
    period: "September 2021 - July 2023",
    degree: "Master of Science in Computer Science",
    institution: "National Taipei University of Technology",
    description:
      "Coursework: Pattern-oriented Software Design, Design and Analysis of Algorithms, Cloud Computing, Data Science, Operating Systems, Network Security and Penetration Testing",
  },
  {
    period: "September 2018 - June 2019",
    degree: "IT Intern",
    institution: "SYSTEX Corporation",
    description:
      "Maintained company workstations, configured network settings, performed security updates, and conducted network analysis using Wireshark",
  },
  {
    period: "September 2016 - July 2020",
    degree: "Bachelor of Science in Electrical Engineering",
    institution: "National Taipei University of Technology",
    description:
      "Coursework: Object-Oriented Programming, Computer Networks, Image Processing, Python Programming",
  },
];

export default function About() {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen flex-col">
        <main className="flex-grow">
          <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-12"
              >
                <div>
                  <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                    About Me
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                    I'm an aspiring full-stack developer and AI researcher
                    currently finishing my Master's in Informatics at Penn State
                    University, with prior degrees in Computer Science and
                    Electrical Engineering from National Taipei University of
                    Technology.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Research Focus
                  </h2>
                  <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
                    My academic and project work has focused on:
                  </p>
                  <ul className="mt-4 list-disc pl-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                    <li>
                      Retrieval-augmented generation systems for small language
                      models
                    </li>
                    <li>Attribution models for evaluating LLM outputs</li>
                    <li>
                      Defense techniques for securing federated learning systems
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Professional Experience
                  </h2>
                  <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
                    Before grad school, I worked as an IT intern at SYSTEX
                    Corporation, where I managed enterprise hardware, performed
                    network diagnostics, and maintained secure server
                    environments.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Career Interests
                  </h2>
                  <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
                    Now, I'm excited to bring my skills into a professional
                    environment where I can contribute to innovative,
                    user-centered, and secure technology solutions. I'm
                    currently open to full-time roles in:
                  </p>
                  <ul className="mt-4 list-disc pl-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                    <li>Full-stack or backend development</li>
                    <li>AI/ML research engineering</li>
                    <li>Cybersecurity and infrastructure</li>
                  </ul>
                </div>

                {/* Experience Timeline */}
                <div className="mt-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Experience & Education
                  </h2>
                  <Timeline items={experience} />
                </div>

                {/* Skills Section */}
                <div className="mt-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Technical Skills
                  </h2>
                  <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {Object.entries(skills).map(([category, items]) => (
                      <div
                        key={category}
                        className="group relative overflow-hidden rounded-xl border-2 border-gray-300 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-blue-400 hover:shadow-md dark:border-gray-600 dark:bg-white/20 dark:hover:border-blue-500"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-gray-50/[0.02] opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-blue-500/[0.02] dark:to-purple-500/[0.02]" />
                        <div className="relative">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {category}
                          </h3>
                          <div className="mt-4 space-y-2">
                            {items.map((skill) => (
                              <div
                                key={skill}
                                className="flex items-center space-x-2"
                              >
                                <span className="h-1.5 w-1.5 rounded-full bg-blue-500/70 dark:bg-blue-400/70" />
                                <span className="text-gray-600 dark:text-gray-300">
                                  {skill}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
