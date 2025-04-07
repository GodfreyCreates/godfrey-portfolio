"use client";

import React from "react"; // Import React for Tooltip customization
import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // Assuming you have this utility function
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { TechCards } from "./TechCards"; // Assuming this component exists
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
  IconBrandAdobe, // Keep if used elsewhere, else remove
  IconPalette,
  IconBrandAdobePhotoshop,
  IconBrandAdobeIllustrator,
  IconBrandAdobeAfterEffect,
  IconCircle,
  IconDatabase, // Example: Using a more specific icon for PostgreSQL
  IconBrandGithub, // Example: Using a more specific icon for Git
  IconBrandVercel, // Example: Placeholder if you add Vercel/Deployment
  // Add other icons as needed
} from '@tabler/icons-react';

// --- Data (Consider refining icons) ---
const technologies = [
  {
    category: "Frontend",
    icon: IconCode,
    description: "Building responsive, interactive, and performant user interfaces with modern technologies.",
    items: [
      { name: "React", icon: IconBrandReact, description: "A JavaScript library for building user interfaces based on components." },
      { name: "Next.js", icon: IconBrandNextjs, description: "The React Framework for Production. Features SSR, SSG, ISR, and more." },
      { name: "TypeScript", icon: IconBrandTypescript, description: "Strongly typed programming language that builds on JavaScript." },
      { name: "Tailwind CSS", icon: IconBrandTailwind, description: "A utility-first CSS framework for rapid UI development." },
    ]
  },
  {
    category: "Backend",
    icon: IconServer,
    description: "Developing robust and scalable server-side logic, APIs, and database interactions.",
    items: [
      { name: "Node.js", icon: IconBrandNodejs, description: "JavaScript runtime built on Chrome's V8 engine for server-side development." },
      { name: "Express", icon: IconGitMerge, description: "Minimalist web framework for Node.js, simplifying API and web app creation." }, // Consider IconApi?
      { name: "MongoDB", icon: IconBrandMongodb, description: "Source-available cross-platform document-oriented NoSQL database program." },
      { name: "PostgreSQL", icon: IconDatabase, description: "A powerful, open source object-relational database system." }, // Changed icon
    ]
  },
  {
    category: "Tools & Platforms", // Renamed for clarity
    icon: IconTools,
    description: "Essential ecosystem tools for version control, containerization, and cloud services.",
    items: [
      { name: "Git", icon: IconBrandGithub, description: "Distributed version control system for tracking changes in source code." }, // Changed icon
      { name: "Docker", icon: IconBrandDocker, description: "Platform for developing, shipping, and running applications in containers." },
      { name: "Supabase", icon: IconBrandSupabase, description: "Open-source Firebase alternative providing database, auth, storage, and more." },
      { name: "Firebase", icon: IconBrandFirebase, description: "Google's platform for creating mobile and web applications." },
      // { name: "Vercel", icon: IconBrandVercel, description: "Platform for frontend frameworks and static sites, built to integrate with Git." }, // Example addition
    ]
  },
  {
    category: "Design",
    icon: IconPalette,
    description: "Utilizing creative software for UI/UX, visual design, and motion graphics.",
    items: [
      { name: "Figma", icon: IconBrandFigma, description: "Collaborative web-based interface design tool for vector graphics and prototyping." },
      { name: "Photoshop", icon: IconBrandAdobePhotoshop, description: "Raster graphics editor for image manipulation and digital art." },
      { name: "Illustrator", icon: IconBrandAdobeIllustrator, description: "Vector graphics editor for logos, icons, and complex illustrations." },
      { name: "After Effects", icon: IconBrandAdobeAfterEffect, description: "Application for motion graphics, visual effects, and compositing." },
    ]
  }
];

// --- Styled Tooltip Components ---
const TooltipProvider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;

// ForwardRef for Radix compatibility with framer-motion
const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-md border border-slate-700/50 bg-slate-800/95 px-3 py-1.5 text-xs text-slate-200 shadow-md backdrop-blur-sm animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

const TooltipArrow = () => <TooltipPrimitive.Arrow className="fill-slate-800/95" />;


// --- Tech Category Card ---
function TechCategory({ category, items, description, index, Icon }: { 
  category: string; 
  items: { name: string; icon: React.ElementType; description: string }[]; // Use React.ElementType for icon components
  description: string;
  index: number;
  Icon: React.ElementType; // Use React.ElementType
}) {
  // Animation Variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5, delay: index * 0.1, ease: "easeOut" }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: (i: number) => ({ // Custom prop 'i' for delay calculation
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, delay: (index * 0.1) + 0.2 + (i * 0.08), ease: "easeOut" }
    })
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={cn(
        "p-6 rounded-xl shadow-lg h-full flex flex-col", // Added h-full and flex flex-col
        "bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10",
        "transition-all duration-300 ease-out hover:border-rose-400/50 hover:shadow-rose-500/10 hover:scale-[1.03]"
      )}
    >
      {/* Icon and Title */}
      <div className="flex items-center mb-4">
          <div className="w-10 h-10 mr-4 rounded-lg bg-gradient-to-br from-indigo-500/20 to-rose-500/20 flex items-center justify-center border border-white/10">
             <Icon className="w-5 h-5 text-rose-400" />
          </div>
          <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-rose-300">
             {category}
          </h3>
      </div>

      {/* Description */}
      <p className="text-sm text-white/60 mb-6 flex-grow"> {/* Added flex-grow */}
        {description}
      </p>

      {/* Tech Items Grid */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-3">
        {items.map((tech, techIndex) => (
          <Tooltip key={tech.name}>
            <TooltipTrigger asChild>
              <motion.div
                custom={techIndex} // Pass index for staggered delay
                variants={itemVariants}
                // Initial/whileInView handled by parent card, variant handles entry
                className="group flex items-center gap-2.5 p-2 rounded-md cursor-pointer transition-colors duration-200 hover:bg-white/5"
              >
                <div className="flex-shrink-0 p-1.5 rounded-md bg-white/[0.05] group-hover:bg-rose-500/10 border border-transparent group-hover:border-rose-500/30 transition-all duration-200">
                  <tech.icon className="h-4 w-4 text-rose-400 group-hover:text-rose-300 transition-colors duration-200" />
                </div>
                <span className="text-xs font-medium text-white/70 group-hover:text-white/90 transition-colors duration-200 truncate">
                  {tech.name}
                </span>
              </motion.div>
            </TooltipTrigger>
            {/* Use Customized Tooltip Content */}
            <TooltipContent side="top" align="center">
              <p>{tech.description}</p>
              <TooltipArrow />
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </motion.div>
  );
}

// --- Main Section Component ---
export function TechStackSection() {
  return (
    // Added skipDelayDuration for faster tooltip appearance on quick mouse moves
    <TooltipProvider delayDuration={100} skipDelayDuration={0}> 
      <div className="relative w-full bg-[#0a0a0f] py-24 sm:py-32 overflow-hidden">
         {/* Consistent Background pattern & glow */}
         <div className="absolute inset-0 -z-10 h-full w-full bg-[#0a0a0f] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:3rem_3rem]">
            <div className="absolute bottom-[-40%] right-[-20%] h-[70%] w-[70%] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(192,132,252,0.12),rgba(255,255,255,0))]"></div>
            <div className="absolute top-[-30%] left-[-30%] h-[60%] w-[80%] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(251,113,133,0.08),rgba(255,255,255,0))]"></div>
         </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10"> {/* Use max-w-7xl for wider layout */}
          {/* --- Section Header --- */}
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 shadow-sm"
            >
              <IconCircle className="h-2.5 w-2.5 fill-rose-500/80" />
              <span className="text-sm text-white/70 tracking-wide font-medium">Technologies</span>
            </motion.div>
            <motion.h2
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.1 }}
               viewport={{ once: true }}
               className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white/95 to-white/70"
            >
              My Tech Stack & Tools
            </motion.h2>
            <motion.p
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.2 }}
               viewport={{ once: true }}
               className="text-base sm:text-lg text-white/50 leading-relaxed"
            >
              Leveraging a modern toolkit to craft efficient, scalable, and user-friendly digital experiences.
            </motion.p>
          </div>

          {/* --- Grid Layout --- */}
           {/* Adjusted grid columns for potentially better large screen layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> {/* Changed lg to 4 cols */}
            
            {/* Category 1 */}
            <TechCategory
              key={technologies[0].category}
              category={technologies[0].category}
              items={technologies[0].items}
              description={technologies[0].description}
              index={0} // Animation index
              Icon={technologies[0].icon}
            />
            
            {/* TechCards Component - Spanning 2 columns on lg+ */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.1 }} // Animation delay matching second item
              className={cn(
                "p-6 rounded-xl",
                "md:col-span-2 lg:col-span-2", // Span 2 on md and lg+
                "bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-white/10", // Slightly different bg?
                 "transition-all duration-300 ease-out hover:border-indigo-400/50 hover:shadow-indigo-500/10 hover:scale-[1.03]"
                 // Assuming TechCards might have its own internal styling, provide a basic container
              )}
            >
              {/* Add a title or context for TechCards if needed */}
               {/* <h3 className="text-lg font-semibold mb-4 text-white/80">Featured Skills</h3> */}
              <TechCards />
            </motion.div>

             {/* Category 2 (Backend) - Will now appear on the second row on lg */}
             <TechCategory
              key={technologies[1].category}
              category={technologies[1].category}
              items={technologies[1].items}
              description={technologies[1].description}
              index={1} // Animation index (consider adjusting if layout changes flow significantly)
              Icon={technologies[1].icon}
            />
            
            {/* Remaining Categories - starting from index 2 of the data array */}
            {/* Using index + 2 for animation delay assumes TechCards takes the '1' slot */}
            {technologies.slice(2).map((tech, loopIndex) => ( 
              <TechCategory
                key={tech.category}
                category={tech.category}
                items={tech.items}
                description={tech.description}
                index={loopIndex + 2} // Adjust index based on visual order (0, 1 (TechCards span), 2, 3)
                Icon={tech.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
