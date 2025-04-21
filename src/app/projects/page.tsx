"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Personal Portfolio Website",
    date: "April 2025",
    description:
      "A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring dark mode support and smooth animations.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    githubUrl: "https://github.com/doyleyeh/doyleyeh.github.io",
    achievements: [
      "Implemented responsive design with mobile-first approach",
      "Added dark mode support with system preference detection",
      "Integrated smooth page transitions and animations",
      "Optimized performance with Next.js Image component and code splitting",
    ],
  },
  {
    title: "Active Retrieval-Augmented Generation with Small Language Models",
    date: "Dec 2024",
    description:
      "A research-driven framework designed to improve factual accuracy in multi-hop question answering using small language models (SLMs) like Llama, Gemma, and Qwen. It integrates confidence-based triggers to retrieve relevant documents only when needed, enhancing efficiency while reducing hallucinations.",
    techStack: [
      "PyTorch",
      "Hugging Face Transformers",
      "Llama",
      "Gemma",
      "Qwen",
      "BM25",
      "2WikiMultihopQA",
    ],
    githubUrl: "https://github.com/doyleyeh/FLARE-SLM",
    achievements: [
      "Developed a token-level confidence monitoring system to dynamically trigger external retrieval",
      "Boosted Exact Match accuracy by 15–20% on 2WikiMultihopQA compared to baseline SLMs",
      "Demonstrated that cost-efficient SLMs can match or outperform larger LLMs with targeted retrieval",
      "Achieved near-GPT-3.5 performance using local, open-source models under adaptive retrieval settings",
    ],
  },
  {
    title: "Defense Technique Against Inference Attacks in Federated Learning",
    date: "Jul 2023",
    description:
      "A novel privacy-preserving technique designed to defend against Membership Inference Attacks (MIAs) in federated learning (FL). The method adds adversarial noise to local model outputs, effectively confusing attackers without compromising prediction accuracy.",
    techStack: [
      "Federated Learning",
      "Privacy Preservation",
      "PyTorch",
      "AlexNet",
      "Membership Inference Attack",
      "Adversarial Examples",
    ],
    githubUrl: "https://github.com/doyleyeh/MembershipWhiteboxAttacks",
    achievements: [
      "Proposed a noise-based defense that reduces MIA accuracy to near-random guessing (↓ from ~72% to ~50%)",
      "Maintained prediction label integrity while injecting noise into confidence scores",
      "Implemented dynamic distortion control to balance between defense strength and model utility",
      "Validated effectiveness on CIFAR-10 and CIFAR-100 datasets under both single and multi-epoch attacks",
    ],
  },
];

export default function Projects() {
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
              >
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                  Featured Projects
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                  A collection of my recent work in web development, machine
                  learning, and software engineering.
                </p>

                <div className="mt-16 space-y-8">
                  {projects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                  ))}
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
