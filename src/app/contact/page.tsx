"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/doyleyeh",
    icon: FaGithub,
    color: "hover:text-gray-900 dark:hover:text-white",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/doyle980216/",
    icon: FaLinkedin,
    color: "hover:text-blue-600 dark:hover:text-blue-400",
  },
  {
    name: "Email",
    href: "mailto:doyleyeh.job@gmail.com",
    icon: FaEnvelope,
    color: "hover:text-red-600 dark:hover:text-red-400",
  },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>();

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        "service_ubrzf7l",
        "template_xhvat5l",
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        "fH7CbQFqhoCkn0XHe"
      );
      setSubmitStatus("success");
      reset();
    } catch (error) {
      setSubmitStatus("error");
    }

    setIsSubmitting(false);
  };

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
                  Get in Touch
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                  Have a question or want to work together? Feel free to reach
                  out through the form below or connect with me on social media.
                </p>

                <div className="mt-16 grid gap-16 sm:grid-cols-2">
                  {/* Contact Form */}
                  <div className="space-y-8">
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          {...register("name", {
                            required: "Name is required",
                          })}
                          className="mt-2 block w-full rounded-md border border-gray-200 px-4 py-2 text-gray-900 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.name.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address",
                            },
                          })}
                          className="mt-2 block w-full rounded-md border border-gray-200 px-4 py-2 text-gray-900 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.email.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          {...register("message", {
                            required: "Message is required",
                          })}
                          className="mt-2 block w-full rounded-md border border-gray-200 px-4 py-2 text-gray-900 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                        />
                        {errors.message && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.message.message}
                          </p>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 disabled:opacity-50 dark:bg-blue-500 dark:hover:bg-blue-400"
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </button>

                      {submitStatus === "success" && (
                        <p className="text-sm text-green-600 dark:text-green-400">
                          Message sent successfully!
                        </p>
                      )}
                      {submitStatus === "error" && (
                        <p className="text-sm text-red-600 dark:text-red-400">
                          Failed to send message. Please try again.
                        </p>
                      )}
                    </form>
                  </div>

                  {/* Social Links */}
                  <div className="space-y-8">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Connect with Me
                    </h2>
                    <div className="flex space-x-8">
                      {socialLinks.map((item) => {
                        const Icon = item.icon;
                        return (
                          <a
                            key={item.name}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-gray-600 transition-colors dark:text-gray-400 ${item.color}`}
                          >
                            <span className="sr-only">{item.name}</span>
                            <Icon className="h-8 w-8" />
                          </a>
                        );
                      })}
                    </div>
                    <div className="prose dark:prose-invert">
                      <p>
                        You can also reach me directly at{" "}
                        <a href="mailto:doyleyeh.job@gmail.com">
                          doyleyeh.job@gmail.com
                        </a>
                      </p>
                      <p>Available for remote opportunities worldwide</p>
                    </div>
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
