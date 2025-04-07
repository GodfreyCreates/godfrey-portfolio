"use client";

import React from "react"; // Import React for Tooltip Primitive Provider context
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import {
  // Icons remain the same as your provided list
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

// Radix UI Tooltip Components
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
      // Removed specific animation classes, Framer Motion handles it if wrapped
      className
    )}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName; // Assign display name


// Tech Category Card Component (THEMED & ENHANCED ANIMATION)
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
      initial={{ opacity: 0, y: 20, scale: 0.98 }} // Added scale
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -4, scale: 1.01 }} // Enhanced hover effect
      transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }} // Slightly adjusted duration/ease
      viewport={{ once: true, amount: 0.2 }} // Trigger animation earlier
      className={cn(
        "p-6 rounded-xl relative overflow-hidden", // Added relative overflow-hidden
        "bg-white/[0.03] border border-white/[0.08]", // Timeline theme background/border
        "transition-all duration-300 ease-out", // Smooth transition for non-motion properties
        "hover:shadow-xl hover:border-rose-500/30", // Subtle rose hover border
        className
      )}
    >
       {/* Subtle background glow on hover */}
       <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
             background: 'radial-gradient(circle at center, rgba(225, 29, 72, 0.1), transparent 60%)', // Rose glow
          }}
        />

      <div className="relative z-10"> {/* Ensure content is above glow */}
        {/* Icon and Title Section */}
        <div className="flex items-start justify-between mb-6">
          <div>
             <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-rose-300"> {/* Timeline title gradient */}
               {category}
             </h3>
             <p className="text-white/60 text-sm"> {/* Timeline secondary text */}
               {description}
             </p>
          </div>
          {/* Use Timeline theme for icon background */}
          <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-gradient-to-br from-indigo-500/10 to-rose-500/10 flex items-center justify-center border border-white/[0.08] ml-4">
            <Icon className="w-6 h-6 text-rose-400" /> {/* Rose icon color */}
          </div>
        </div>

        {/* Technology Items Grid */}
        <div className="grid grid-cols-2 gap-4">
          {items.map((tech, techIndex) => (
            <Tooltip key={tech.name}>
              <TooltipTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, x: -10, scale: 0.95 }} // Added scale
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.3, delay: (index * 0.1) + 0.15 + (techIndex * 0.05), ease: "easeOut" }} // Adjusted base delay slightly
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.05] border border-white/[0.08] hover:border-rose-500/40 hover:bg-rose-500/5 transition-all group cursor-pointer" // Timeline item theme
                >
                  {/* Timeline theme for icon container */}
                  <div className="p-1.5 rounded-md bg-white/[0.03] group-hover:bg-rose-500/10 transition-colors">
                    <tech.icon className="h-5 w-5 text-rose-300 group-hover:text-rose-200 transition-colors" /> {/* Rose icon */}
                  </div>
                  <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors"> {/* Timeline primary text */}
                    {tech.name}
                  </span>
                </motion.div>
              </TooltipTrigger>
              {/* Use themed TooltipContent */}
              <TooltipContent>
                {tech.description}
                 {/* Arrow color matches the tooltip background */}
                <TooltipPrimitive.Arrow className="fill-black/80" width={11} height={5} />
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Main Section Component (THEMED & ENHANCED ANIMATION)
export function TechStackSection() {
  return (
    // Provider needs React Context
    <TooltipPrimitive.Provider
      delayDuration={100}
      skipDelayDuration={0}
      disableHoverableContent={false}
    >
      {/* Use timeline base background */}
      <div className="relative w-full bg-[#030303] py-24 md:py-32 overflow-hidden">
        {/* Timeline theme background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

         {/* Grid lines effect - Keep as is, subtle */}
        <div className="absolute inset-0 z-0 opacity-[0.06]"> {/* Slightly reduced opacity */}
            <div
              className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px]"></div>
        </div>


        <div className="mx-auto max-w-6xl px-4 relative z-10">
          {/* Section Header - Apply Timeline Theme */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
               // Timeline theme for badge
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-4"
            >
              <IconCircle className="h-2.5 w-2.5 fill-rose-500/80" /> {/* Rose icon */}
              <span className="text-sm text-white/60 tracking-wide">Technologies</span> {/* Timeline secondary text */}
            </motion.div>

            <motion.h2
             initial={{ opacity: 0, y: 20, scale: 0.95 }} // Added scale
             whileInView={{ opacity: 1, y: 0, scale: 1 }}
             transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
             viewport={{ once: true }}
             // Timeline theme title gradient
             className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-indigo-200 to-rose-300" // Adjusted gradient slightly
            >
              Tech Stack & Tools
            </motion.h2>

            <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
             viewport={{ once: true }}
             className="text-white/60 md:text-lg" // Timeline secondary text
            >
              A curated selection of modern technologies and tools I leverage to build robust, scalable, and engaging applications.
            </motion.p>
          </div>

          {/* Bento Grid Layout - Uses themed TechCategory */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((techGroup, index) => (
              <TechCategory
                key={techGroup.category}
                category={techGroup.category}
                items={techGroup.items}
                description={techGroup.description}
                index={index} // Pass index for staggering
                Icon={techGroup.icon}
                // Apply specific grid spans based on original layout intention
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
