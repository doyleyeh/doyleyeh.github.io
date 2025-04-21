"use client";

import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Resume() {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen flex-col">
        <main className="flex-grow">
          <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-4xl px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div className="flex items-center justify-between">
                  <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                    Resume
                  </h1>
                  <a
                    href="/resume.pdf"
                    download
                    className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400"
                  >
                    <FaDownload className="h-4 w-4" />
                    Download PDF
                  </a>
                </div>

                {/* PDF Viewer */}
                <div className="mx-auto max-w-3xl">
                  <div className="relative aspect-[8.5/11] w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700">
                    <iframe
                      src="/resume.pdf"
                      className="absolute h-full w-full"
                      style={{ border: "none" }}
                    >
                      <div className="flex h-full w-full items-center justify-center">
                        <p className="text-gray-600 dark:text-gray-400">
                          Unable to display PDF. Please{" "}
                          <a
                            href="/resume.pdf"
                            download
                            className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                          >
                            download
                          </a>{" "}
                          instead.
                        </p>
                      </div>
                    </iframe>
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
