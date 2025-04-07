"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import {
  // Icons remain the same
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
  IconDatabase,
  IconWebhook
} from '@tabler/icons-react';

// Technology Data remains the same
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
        { name: "Express", icon: IconWebhook, description: "Fast, unopinionated, minimalist web framework for Node.js." },
        { name: "MongoDB", icon: IconBrandMongodb, description: "NoSQL database known for flexibility and scalability." },
        { name: "PostgreSQL", icon: IconDatabase, description: "Powerful, open-source object-relational database system." },
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

// Radix UI Tooltip Components (Themed)
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;
const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 6, align = "center", ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    align={align}
    avoidCollisions={true}
    collisionPadding={10}
    className={cn(
      "z-50 max-w-[240px] overflow-hidden rounded-md border border-white/[0.08] bg-black/80 backdrop-blur-sm px-3 py-2 text-sm text-white/90 shadow-xl select-none touch-none",
      className
    )}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;


// Tech Category Card Component (Themed & Simple Smooth Animation)
function TechCategory({ category, items, description, index, Icon, className }: {
  category: string;
  items: { name: string; icon: any; description: string }[];
  description: string;
  index: number;
  Icon: any;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }} // Simpler initial state (removed scale)
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }} // Simpler hover (removed scale)
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }} // Slightly longer duration
      viewport={{ once: true, amount: 0.2 }}
      className={cn(
        "p-6 rounded-xl relative overflow-hidden",
        "bg-white/[0.03] border border-white/[0.08]",
        "transition-all duration-300 ease-out", // Keep for non-motion CSS transitions like border-color
        "hover:shadow-xl hover:border-rose-500/30",
        className,
        "group" // Add group class for inner hover states if needed
      )}
    >
       {/* Subtle background glow on hover (optional - keep if liked) */}
       <div // Changed to simple div as motion not strictly needed here
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" // ensure it doesn't block interactions
          style={{
             background: 'radial-gradient(circle at center, rgba(225, 29, 72, 0.08), transparent 65%)', // Rose glow, slightly adjusted
          }}
        />

      <div className="relative z-10">
        {/* Icon and Title Section */}
        <div className="flex items-start justify-between mb-6">
          <div>
             <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-rose-300"> {/* Title Gradient remains as per theme */}
               {category}
             </h3>
             <p className="text-white/60 text-sm">
               {description}
             </p>
          </div>
          <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-gradient-to-br from-indigo-500/10 to-rose-500/10 flex items-center justify-center border border-white/[0.08] ml-4">
            <Icon className="w-6 h-6 text-rose-400" />
          </div>
        </div>

        {/* Technology Items Grid */}
        <div className="grid grid-cols-2 gap-4">
          {items.map((tech, techIndex) => (
            <Tooltip key={tech.name}>
              <TooltipTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, x: -10 }} // Simple slide-in
                  whileInView={{ opacity: 1, x: 0 }}
                  // Slightly longer duration for smoother feel on small items
                  transition={{ duration: 0.4, delay: (index * 0.1) + 0.2 + (techIndex * 0.05), ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.05] border border-white/[0.08] hover:border-rose-500/40 hover:bg-rose-500/5 transition-all group cursor-pointer"
                >
                  <div className="p-1.5 rounded-md bg-white/[0.03] group-hover:bg-rose-500/10 transition-colors">
                    <tech.icon className="h-5 w-5 text-rose-300 group-hover:text-rose-200 transition-colors" />
                  </div>
                  <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                    {tech.name}
                  </span>
                </motion.div>
              </TooltipTrigger>
              <TooltipContent>
                {tech.description}
                <TooltipPrimitive.Arrow className="fill-black/80" width={11} height={5} />
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Main Section Component (Themed & Simple Smooth Animation)
export function TechStackSection() {
  return (
    <TooltipPrimitive.Provider
      delayDuration={100}
      skipDelayDuration={0}
      disableHoverableContent={false}
    >
      <div className="relative w-full bg-[#030303] py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />
         <div className="absolute inset-0 z-0 opacity-[0.06]">
            <div
              className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px]"></div>
        </div>

        <div className="mx-auto max-w-6xl px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-4"
            >
              <IconCircle className="h-2.5 w-2.5 fill-rose-500/80" />
              <span className="text-sm text-white/60 tracking-wide">Technologies</span>
            </motion.div>

            <motion.h2
             initial={{ opacity: 0, y: 20 }} // Simplified initial state
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
             viewport={{ once: true }}
             // Removed gradient classes, added solid text color
             className="text-4xl md:text-5xl font-bold mb-4 text-neutral-100" // Using neutral-100 for bright white
            >
              Tech Stack & Tools
            </motion.h2>

            <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
             viewport={{ once: true }}
             className="text-white/60 md:text-lg"
            >
              A curated selection of modern technologies and tools I leverage to build robust, scalable, and engaging applications.
            </motion.p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((techGroup, index) => (
              <TechCategory
                key={techGroup.category}
                category={techGroup.category}
                items={techGroup.items}
                description={techGroup.description}
                index={index}
                Icon={techGroup.icon}
                className={cn(
                   index === 0 ? "md:col-span-1 lg:col-span-2" : "", // Frontend
                   index === 1 ? "md:col-span-1 lg:col-span-1" : "", // Backend
                   index === 2 ? "md:col-span-1 lg:col-span-1" : "", // Tools
                   index === 3 ? "md:col-span-1 lg:col-span-2" : ""  // Design
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </TooltipPrimitive.Provider>
  );
}
