"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { TechCards } from "./TechCards";
import { 
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
  IconBrandAdobe,
  IconPalette,
  IconBrandAdobePhotoshop,
  IconBrandAdobeIllustrator,
  IconBrandAdobeAfterEffect,
  IconCircle,
} from '@tabler/icons-react';

const technologies = [
  {
    category: "Frontend",
    icon: IconCode,
    description: "Modern frontend technologies for building responsive and interactive user interfaces.",
    items: [
      { 
        name: "React", 
        icon: IconBrandReact,
        description: "Component-based UI library for building interactive web applications."
      },
      { 
        name: "Next.js", 
        icon: IconBrandNextjs,
        description: "React framework with SSR, static generation, and optimized performance."
      },
      { 
        name: "TypeScript", 
        icon: IconBrandTypescript,
        description: "JavaScript with added type safety and enhanced tooling."
      },
      { 
        name: "Tailwind CSS", 
        icon: IconBrandTailwind,
        description: "Utility-first CSS framework for rapid UI development."
      },
    ]
  },
  {
    category: "Backend",
    icon: IconServer,
    description: "Robust backend technologies for scalable and efficient server-side solutions.",
    items: [
      { 
        name: "Node.js", 
        icon: IconBrandNodejs,
        description: "JavaScript runtime for building scalable server-side applications."
      },
      { 
        name: "Express", 
        icon: IconGitMerge,
        description: "Fast and minimal web framework for Node.js."
      },
      { 
        name: "MongoDB", 
        icon: IconBrandMongodb,
        description: "NoSQL database with high performance and scalability."
      },
      { 
        name: "PostgreSQL", 
        icon: IconBrandMongodb,
        description: "Powerful open-source relational database system."
      },
    ]
  },
  {
    category: "Tools & Others",
    icon: IconTools,
    description: "Essential tools and platforms for development, deployment, and maintenance.",
    items: [
      { 
        name: "Git", 
        icon: IconGitMerge,
        description: "Version control system for tracking code changes."
      },
      { 
        name: "Docker", 
        icon: IconBrandDocker,
        description: "Container platform for consistent development environments."
      },
      { 
        name: "Supabase", 
        icon: IconBrandSupabase,
        description: "Open-source alternative to Firebase with real-time features."
      },
      { 
        name: "Firebase", 
        icon: IconBrandFirebase,
        description: "Platform for building web apps with real-time capabilities."
      },
    ]
  },
  {
    category: "Design",
    icon: IconPalette,
    description: "Creative tools for UI/UX design, graphics, and visual content creation.",
    items: [
      { 
        name: "Figma", 
        icon: IconBrandFigma,
        description: "Collaborative interface design tool for creating web and mobile designs."
      },
      { 
        name: "Photoshop", 
        icon: IconBrandAdobePhotoshop,
        description: "Industry-standard tool for image editing and manipulation."
      },
      { 
        name: "Illustrator", 
        icon: IconBrandAdobeIllustrator,
        description: "Vector graphics editor for logos and illustrations."
      },
      { 
        name: "After Effects", 
        icon: IconBrandAdobeAfterEffect,
        description: "Motion graphics and visual effects software."
      },
    ]
  }
];

const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;
const TooltipContent = TooltipPrimitive.Content;

function TechCategory({ category, items, description, index, Icon }: { 
  category: string; 
  items: { name: string; icon: any; description: string }[];
  description: string;
  index: number;
  Icon: any;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={cn(
        "p-6 rounded-xl",
        "bg-white/[0.03] border border-white/[0.08]",
        "transform transition-all hover:-translate-y-2 hover:shadow-xl"
      )}
    >
      <div className="w-12 h-12 mb-6 rounded-lg bg-gradient-to-br from-indigo-500/10 to-rose-500/10 flex items-center justify-center">
        <Icon className="w-6 h-6 text-rose-500/80" />
      </div>

      <h3 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-rose-300">
        {category}
      </h3>

      <p className="text-white/60 mb-6">
        {description}
      </p>

      <div className="grid grid-cols-2 gap-4">
        {items.map((tech, techIndex) => (
          <Tooltip key={tech.name}>
            <TooltipTrigger asChild>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: (index * 0.1) + (techIndex * 0.1) }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] hover:border-rose-500/30 hover:bg-rose-500/5 transition-all group cursor-pointer"
              >
                <div className="p-2 rounded-lg bg-white/[0.03] group-hover:bg-rose-500/10 transition-colors">
                  <tech.icon className="h-5 w-5 text-rose-400 group-hover:text-rose-300 transition-colors" />
                </div>
                <span className="text-sm font-medium text-white/60 group-hover:text-white/80 transition-colors">
                  {tech.name}
                </span>
              </motion.div>
            </TooltipTrigger>
            <TooltipContent 
              side="top" 
              sideOffset={5}
              align="center"
              avoidCollisions={true}
              collisionPadding={10}
              className="max-w-[200px] px-3 py-2 rounded-lg bg-zinc-900/90 border border-zinc-700/50 text-sm text-white/80 shadow-xl select-none touch-none z-50"
            >
              {tech.description}
              <TooltipPrimitive.Arrow className="fill-zinc-900/90" />
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </motion.div>
  );
}

export function TechStackSection() {
  return (
    <TooltipPrimitive.Provider 
      delayDuration={0} 
      skipDelayDuration={0}
      disableHoverableContent={true}
    >
      <div className="relative w-full bg-[#030303] py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />
        
        <div className="mx-auto max-w-5xl px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-4"
            >
              <IconCircle className="h-2 w-2 fill-rose-500/80" />
              <span className="text-sm text-white/60 tracking-wide">Technologies</span>
            </motion.div>
            
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              Tech Stack & Tools
            </h2>
            
            <p className="text-white/40">
              A curated selection of modern technologies and tools I use to build robust and scalable applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TechCategory
              key={technologies[0].category}
              category={technologies[0].category}
              items={technologies[0].items}
              description={technologies[0].description}
              index={0}
              Icon={technologies[0].icon}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={cn(
                "p-6 rounded-xl col-span-full lg:col-span-2",
                "bg-white/[0.03] border border-white/[0.08]",
                "transform transition-all hover:-translate-y-2 hover:shadow-xl"
              )}
            >
              <TechCards />
            </motion.div>
            {technologies.slice(1).map((tech, index) => (
              <TechCategory
                key={tech.category}
                category={tech.category}
                items={tech.items}
                description={tech.description}
                index={index + 2}
                Icon={tech.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </TooltipPrimitive.Provider>
  );
}