import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Doyle Yeh - Portfolio",
  description:
    "Graduate Student in Information Management | Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-screen bg-white dark:bg-gray-900 relative`}
      >
        <ThemeProvider>
          <div
            className="fixed inset-0 z-[-1] bg-cover bg-center bg-no-repeat opacity-15 dark:opacity-5"
            style={{
              backgroundImage: 'url("/bg.png")',
              backgroundSize: "120%",
              backgroundPosition: "center -100px",
              backgroundRepeat: "no-repeat",
            }}
          />
          <main className="relative z-0 flex min-h-screen flex-col">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
