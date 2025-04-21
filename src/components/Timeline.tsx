"use client";

import { motion } from "framer-motion";

interface TimelineItem {
  period: string;
  degree: string;
  institution: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="mt-8 space-y-8">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="relative pl-8 md:pl-12"
        >
          {/* Timeline line */}
          <div className="absolute left-0 top-0 h-full w-px bg-gray-200 dark:bg-gray-700" />

          {/* Timeline dot */}
          <div className="absolute left-[-4px] top-1.5 h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400" />

          {/* Content */}
          <div className="space-y-2">
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
              {item.period}
            </span>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {item.degree}
            </h3>
            <p className="text-base font-medium text-gray-700 dark:text-gray-300">
              {item.institution}
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              {item.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
