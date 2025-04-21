"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/doyleyeh",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/doyle980216/",
    icon: FaLinkedin,
  },
  {
    name: "Email",
    href: "mailto:doyleyeh.job@gmail.com",
    icon: FaEnvelope,
  },
];

export default function Footer() {
  return (
    <footer className="mt-auto w-full bg-white py-6 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="flex space-x-6">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <Icon className="h-6 w-6" />
                </a>
              );
            })}
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Doyle Yeh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
