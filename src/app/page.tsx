"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen flex-col">
        <main className="flex-grow">
          <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mt-8 sm:mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4 sm:space-y-6"
              >
                <div className="mx-auto h-32 w-32 sm:h-36 sm:w-36 overflow-hidden rounded-full">
                  <Image
                    src="/avatar.jpg"
                    alt="Profile"
                    width={144}
                    height={144}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                    Doyle Yeh
                  </h1>
                  <h2 className="mt-3 text-lg font-semibold text-blue-600 dark:text-blue-400 sm:text-xl">
                    Full-Stack Developer | AI Researcher | Cybersecurity
                    Enthusiast
                  </h2>
                  <p className="mt-3 text-base leading-7 text-gray-600 dark:text-gray-300 sm:text-lg sm:leading-8">
                    I'm a full-stack developer and machine learning researcher
                    with dual Master's degrees in Informatics from Penn State
                    University and Computer Science from National Taipei
                    University of Technology. I specialize in building secure,
                    scalable, and intelligent applications that bridge academic
                    insight and real-world impact. My interests lie in
                    retrieval-augmented generation, AI safety, and
                    privacy-preserving systems.
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-center gap-x-6">
                  <Link
                    href="/projects"
                    className="rounded-md bg-blue-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:bg-blue-500 dark:hover:bg-blue-400 sm:px-4 sm:py-2.5 sm:text-base"
                  >
                    See Projects
                  </Link>
                  <Link
                    href="/resume"
                    className="text-sm font-semibold leading-6 text-gray-900 dark:text-white sm:text-base"
                  >
                    View Resume <span aria-hidden="true">→</span>
                  </Link>
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
