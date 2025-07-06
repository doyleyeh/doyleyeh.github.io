"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    id: "spam-api",
    title: "Spam Classification API",
    date: "Jul 2025",
    description:
      "A machine learning API for classifying text messages as spam or ham using DistilBERT. The project features a FastAPI backend, supports both traditional server and AWS Lambda serverless deployment, and includes a full model training pipeline, Docker support, and comprehensive testing.",
    techStack: [
      "DistilBERT",
      "FastAPI",
      "Python",
      "Docker",
      "AWS Lambda",
      "Hugging Face",
      "Jupyter Notebook",
    ],
    githubUrl: "https://github.com/doyleyeh/spam_api",
    achievements: [
      "Built a REST API for spam/ham classification using DistilBERT and FastAPI",
      "Enabled both server and serverless (AWS Lambda) deployment with Docker support",
      "Developed a complete model training and evaluation pipeline",
      "Provided batch and single-message prediction endpoints with confidence scores",
      "Included interactive API documentation via Swagger and ReDoc",
      "Supported easy local and cloud deployment with clear instructions",
    ],
  },
  {
    id: "portfolio",
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
    id: "flare-slm",
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
    id: "llm-classifier",
    title: "LLM Text Completion Classifier",
    date: "Oct 2024",
    description:
      "A deep learning classifier to identify which Large Language Model (LLM) generated a given text completion. Built a dataset of 25,000 prompt-completion pairs, fine-tuned multiple transformer models, and performed comprehensive evaluation and error analysis.",
    techStack: [
      "ALBERT",
      "DistilBERT",
      "RoBERTa",
      "LoRA",
      "PyTorch",
      "Hugging Face",
      "Jupyter Notebook",
      "Data Augmentation",
    ],
    githubUrl: "https://github.com/a-shah1200/MidTerm-Project/",
    achievements: [
      "Constructed a dataset of 25,000 prompt-completion pairs from five LLMs through an automated pipeline for text extraction, truncation, and labeling.",
      "Fine-tuned ALBERT, DistilBERT, and RoBERTa (with LoRA adaptation), achieving 67.6% accuracy and a 0.68 macro-F1 score.",
      "Conducted comprehensive ROC-AUC evaluation and detailed error analysis to identify model-specific confusion patterns, guiding future data augmentation strategies.",
      "Developed a multi-step dataset pipeline: text extraction, cleaning, LLM completions, and final dataset aggregation.",
      "Implemented and compared three transformer-based classifiers, each with dedicated training and evaluation notebooks.",
      "Provided detailed results, visualizations, and a project report for reproducibility and transparency.",
    ],
  },
  {
    id: "fed-learn-defense",
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
                    <ProjectCard key={project.id} {...project} />
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
