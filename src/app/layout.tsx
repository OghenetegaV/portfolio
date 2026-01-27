import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Scene from "../components/Scene";
import Cursor from "../components/Cursor";
import AvailabilityBadge from "../components/AvailabilityBadge";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Victoria Omonigho | Web Developer & Automation Engineer",
  description: "Advanced Portfolio with Next.js and Three.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#020205] text-white selection:bg-purple-500/30`}>
        <Scene />
        <Cursor />
        
        {/* Floating Availability Status */}
        <AvailabilityBadge />
        
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}