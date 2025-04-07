"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import {
  // Existing Icons...
  IconBrandReact,
  IconBrandNextjs,
  IconBrandTypescript,
  IconBrandTailwind,
  IconBrandNodejs,
  IconBrandMongodb,
  IconBrandDocker,
  IconBrandFirebase,
  IconTools,
  IconServer,
  IconCode,
  IconGitMerge,
  IconBrandSupabase,
  IconBrandFigma,
  IconPalette,
  IconBrandAdobePhotoshop,
  IconBrandAdobeIllustrator,
  IconBrandAdobeAfterEffect,
  IconCircle,

  // Corrected/Alternative Icons:
  IconDatabase,   // Use for PostgreSQL
  IconWebhook     // Use for Express.js

} from '@tabler/icons-react';

// Define Technology Data (Using corrected icons)
const technologies = [
  {
    category: "Frontend",
    icon: IconCode,
    description: "Modern frontend technologies for building responsive and interactive user interfaces.",
    items: [
      { name: "React", icon: IconBrandReact, description: "Component-based UI library for interactive web apps." },
      { name: "Next.js", icon: IconBrandNextjs, description: "React framework with SSR, SSG, and performance optimizations." },
      { name: "TypeScript", icon: IconBrandTypescript, description: "JavaScript superset adding static types for better tooling." },
      { name: "Tailwind CSS", icon: IconBrandTailwind, description: "Utility-first CSS framework for rapid UI development." },
    ]
  },
  {
    category: "Backend",
    icon: IconServer,
    description: "Robust backend technologies for scalable and efficient server-side solutions.",
    items: [
      { name: "Node.js", icon: IconBrandNodejs, description: "JavaScript runtime for building scalable server applications." },
      { name: "Express", icon: IconWebhook, description: "Fast, unopinionated, minimalist web framework for Node.js." }, // Changed icon
      { name: "MongoDB", icon: IconBrandMongodb, description: "NoSQL database known for flexibility and scalability." },
      { name: "PostgreSQL", icon: IconDatabase, description: "Powerful, open-source object-relational database system." }, // Changed icon
    ]
  },
  {
    category: "Tools & Platforms",
    icon: IconTools,
    description: "Essential tools and platforms for development, deployment, and collaboration.",
    items: [
      { name: "Git", icon: IconGitMerge, description: "Distributed version control system for tracking code changes." },
      { name: "Docker", icon: IconBrandDocker, description: "Platform for building, shipping, and running applications in containers." },
      { name: "Supabase", icon: IconBrandSupabase, description: "Open-source Firebase alternative with a PostgreSQL backend." },
      { name: "Firebase", icon: IconBrandFirebase, description: "Google's platform for building mobile and web applications." },
    ]
  },
  {
    category: "Design",
    icon: IconPalette,
    description: "Creative tools for UI/UX design, graphics, and visual content creation.",
    items: [
      { name: "Figma", icon: IconBrandFigma, description: "Collaborative interface design tool for web and mobile." },
      { name: "Photoshop", icon: IconBrandAdobePhotoshop, description: "Industry-standard raster graphics editor." },
      { name: "Illustrator", icon: IconBrandAdobeIllustrator, description: "Leading vector graphics editor for illustrations and logos." },
      { name: "After Effects", icon: IconBrandAdobeAfterEffect, description: "Digital visual effects, motion graphics, and compositing." },
    ]
  }
];

// Radix UI Tooltip Components
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;
const TooltipContent = TooltipPrimitive.Content;

// Tech Category Card Component (Accepts className for grid control)
function TechCategory({ category, items, description, index, Icon, className }: {
  category: string;
  items: { name: string; icon: any; description: string }[];
  description: string;
  index: number; // Used for animation delay staggering
  Icon: any;
  className?: string; // Added className prop
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }} // Stagger animation based on index
      viewport={{ once: true }}
      className={cn(
        "p-6 rounded-xl",
        "bg-neutral-900/50 border border-neutral-700/50",
        "transform transition-all hover:-translate-y-1 hover:shadow-xl hover:border-sky-600/50",
        className
      )}
    >
      {/* Icon and Title Section */}
      <div className="flex items-start justify-between mb-6">
        <div>
           <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-sky-400">
             {category}
           </h3>
           <p className="text-neutral-400 text-sm">
             {description}
           </p>
        </div>
        <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-gradient-to-br from-sky-600/20 to-sky-800/20 flex items-center justify-center border border-sky-700/30 ml-4">
          <Icon className="w-6 h-6 text-sky-400" />
        </div>
      </div>

      {/* Technology Items Grid */}
      <div className="grid grid-cols-2 gap-4">
        {items.map((tech, techIndex) => (
          <Tooltip key={tech.name}>
            <TooltipTrigger asChild>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: (index * 0.1) + 0.2 + (techIndex * 0.05) }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-3 rounded-lg bg-neutral-800/40 border border-neutral-700/30 hover:border-sky-500/50 hover:bg-sky-900/20 transition-all group cursor-pointer"
              >
                <div className="p-1.5 rounded-md bg-neutral-700/50 group-hover:bg-sky-700/30 transition-colors">
                  <tech.icon className="h-5 w-5 text-sky-300 group-hover:text-sky-200 transition-colors" />
                </div>
                <span className="text-sm font-medium text-neutral-300 group-hover:text-neutral-100 transition-colors">
                  {tech.name}
                </span>
              </motion.div>
            </TooltipTrigger>
            {/* Tooltip Content Styling */}
            <TooltipContent
              side="top"
              sideOffset={6}
              align="center"
              avoidCollisions={true}
              collisionPadding={10}
              className="max-w-[220px] px-3 py-2 rounded-md bg-neutral-950 border border-neutral-700 text-sm text-neutral-200 shadow-xl select-none touch-none z-50"
            >
              {tech.description}
              <TooltipPrimitive.Arrow className="fill-neutral-950" />
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </motion.div>
  );
}

// Main Section Component with Bento Grid Layout
export function TechStackSection() {
  return (
    <TooltipPrimitive.Provider
      delayDuration={100}
      skipDelayDuration={0}
      disableHoverableContent={false}
    >
      <div className="relative w-full bg-[#050505] py-24 md:py-32 overflow-hidden">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-800/[0.03] via-neutral-900/[0.02] to-neutral-900/[0.01] blur-3xl" />

         {/* Grid lines effect */}
        <div className="absolute inset-0 z-0 opacity-10">
            <div
              className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px]"></div>
        </div>


        <div className="mx-auto max-w-6xl px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800/60 border border-neutral-700 mb-4"
            >
              <IconCircle className="h-2.5 w-2.5 fill-sky-500" />
              <span className="text-sm text-neutral-300 tracking-wide">Technologies</span>
            </motion.div>

            <motion.h2
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.1 }}
             viewport={{ once: true }}
             className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300"
            >
              Tech Stack & Tools
            </motion.h2>

            <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.2 }}
             viewport={{ once: true }}
             className="text-neutral-400 md:text-lg"
            >
              A curated selection of modern technologies and tools I leverage to build robust, scalable, and engaging applications.
            </motion.p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Frontend */}
            <TechCategory
              key={technologies[0].category}
              category={technologies[0].category}
              items={technologies[0].items}
              description={technologies[0].description}
              index={0}
              Icon={technologies[0].icon}
              className="md:col-span-1 lg:col-span-2"
            />
            {/* Backend */}
            <TechCategory
              key={technologies[1].category}
              category={technologies[1].category}
              items={technologies[1].items}
              description={technologies[1].description}
              index={1}
              Icon={technologies[1].icon}
              className="md:col-span-1 lg:col-span-1"
            />
            {/* Tools */}
            <TechCategory
              key={technologies[2].category}
              category={technologies[2].category}
              items={technologies[2].items}
              description={technologies[2].description}
              index={2}
              Icon={technologies[2].icon}
              className="md:col-span-1 lg:col-span-1"
            />
            {/* Design */}
            <TechCategory
              key={technologies[3].category}
              category={technologies[3].category}
              items={technologies[3].items}
              description={technologies[3].description}
              index={3}
              Icon={technologies[3].icon}
              className="md:col-span-1 lg:col-span-2"
            />
          </div>
        </div>
      </div>
    </TooltipPrimitive.Provider>
  );
}

