"use client";

import React, { useState } from "react"; // Import React for forwardRef if needed later, good practice
import { motion } from "framer-motion";
import { IconCircle, IconExternalLink, IconBrandGithub } from '@tabler/icons-react';
import { Button } from "@/components/ui/button"; // Assuming this exists and is styled
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"; // Assuming these exist
import Link from "next/link";
import Image from "next/image";
import { projects, Project } from "@/data/projects"; // Assuming this data structure exists
import { cn } from "@/lib/utils"; // Assuming this exists

// Select featured projects (adjust logic as needed)
const featuredProjects = [
  ...projects.web.slice(0, 2),
  projects.graphic.length > 0 ? projects.graphic[0] : null // Handle empty graphic projects
].filter(Boolean) as Project[]; // Filter out null if graphic array was empty

// --- Project Card Component ---
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, delay: index * 0.15, ease: "easeOut" }
    }
  };

  const tagVariants = {
     hidden: { opacity: 0, y: 10 },
     visible: (i: number) => ({
         opacity: 1,
         y: 0,
         transition: { duration: 0.3, delay: (index * 0.15) + 0.3 + (i * 0.05), ease: "easeOut" }
     })
  };

  return (
    <>
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className={cn(
          "group relative flex flex-col h-full rounded-xl overflow-hidden shadow-lg", // Added flex flex-col h-full
          "bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-white/10",
          "transition-all duration-300 ease-out hover:border-rose-400/60 hover:shadow-rose-500/10 hover:scale-[1.03]"
        )}
      >
        {/* Image Section */}
        <DialogTrigger asChild onClick={() => setIsImageModalOpen(true)}>
           <div className="relative h-52 sm:h-60 overflow-hidden cursor-pointer">
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Optimize image loading
                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
              {/* Optional: Overlay on hover */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-sm bg-black/50 px-3 py-1 rounded">View Image</span>
              </div>
           </div>
        </DialogTrigger>

        {/* Content Section */}
        <div className="p-5 sm:p-6 flex flex-col flex-grow"> {/* Added flex-grow */}
          <h3 className="text-lg sm:text-xl font-semibold mb-1 text-white/95 group-hover:text-rose-300 transition-colors duration-200">
            {project.title}
          </h3>
          {project.Client && ( // Conditionally render Client
             <div className="text-xs sm:text-sm text-indigo-300/80 mb-3">{project.Client}</div>
          )}
          <p className="text-sm text-white/60 mb-4 flex-grow leading-relaxed"> {/* Added flex-grow */}
             {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.map((tag: string, tagIndex: number) => (
              <motion.span
                key={tag}
                custom={tagIndex}
                variants={tagVariants}
                // Initial/whileInView handled by parent card, variant handles entry
                className="px-2.5 py-0.5 text-[11px] sm:text-xs rounded-full bg-white/5 border border-white/10 text-white/60"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3 mt-auto pt-2"> {/* mt-auto pushes buttons down */}
            {project.liveDemo && (
              <Button size="sm" variant="default" asChild className="bg-rose-600/90 hover:bg-rose-500/90 text-white">
                 {/* Use variant="default" or your primary style */}
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" aria-label={`View live demo of ${project.title}`}>
                  <IconExternalLink className="w-4 h-4 mr-1.5" />
                  Demo
                </a>
              </Button>
            )}
            {project.type === 'web' && project.github && (
              <Button size="sm" variant="outline" asChild className="border-white/20 hover:bg-white/5 hover:text-white text-white/70">
                 {/* Customize outline style */}
                <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View source code of ${project.title} on Github`}>
                  <IconBrandGithub className="w-4 h-4 mr-1.5" />
                  Code
                </a>
              </Button>
            )}
             {/* Add a details button if no external links */}
             {!project.liveDemo && !(project.type === 'web' && project.github) && project.type === 'graphic' && (
                <Button size="sm" variant="outline" onClick={() => setIsImageModalOpen(true)} className="border-white/20 hover:bg-white/5 hover:text-white text-white/70">
                   View Details
                </Button>
             )}
          </div>
        </div>
      </motion.div>

      {/* --- Image Modal Dialog --- */}
      <Dialog open={isImageModalOpen} onOpenChange={setIsImageModalOpen}>
        <DialogContent className="max-w-3xl p-4 sm:p-6 bg-slate-900/90 border-slate-700/50 shadow-2xl backdrop-blur-md">
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl font-semibold text-white/95 mb-2">{project.title}</DialogTitle>
            <DialogDescription className="text-sm text-white/60">
              {project.description}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 relative aspect-video w-full overflow-hidden rounded-lg border border-slate-700/50">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 90vw, 70vw" // Adjust sizes for modal
              className="object-contain" // Use contain to show the whole image
              priority // Load high priority as it's user-initiated
            />
          </div>
           {/* Optional: Add links inside modal too */}
           <div className="flex items-center gap-3 mt-6">
               {project.liveDemo && (
                 <Button size="sm" variant="default" asChild className="bg-rose-600/90 hover:bg-rose-500/90 text-white">
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                      <IconExternalLink className="w-4 h-4 mr-1.5" />
                      Live Demo
                    </a>
                 </Button>
               )}
               {project.type === 'web' && project.github && (
                 <Button size="sm" variant="outline" asChild className="border-white/20 hover:bg-white/5 hover:text-white text-white/70">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <IconBrandGithub className="w-4 h-4 mr-1.5" />
                      Code
                    </a>
                 </Button>
               )}
           </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

// --- Main Featured Projects Section ---
export function FeaturedProjects() {
  return (
    <section className="relative w-full bg-[#0a0a0f] py-24 sm:py-32 overflow-hidden">
        {/* Consistent Background pattern & glow */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-[#0a0a0f] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:3rem_3rem]">
            <div className="absolute bottom-[10%] left-[-10%] h-[60%] w-[70%] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(192,132,252,0.1),rgba(255,255,255,0))]"></div>
            <div className="absolute top-[5%] right-[-15%] h-[50%] w-[60%] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(251,113,133,0.07),rgba(255,255,255,0))]"></div>
        </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10"> {/* Use max-w-7xl */}
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 shadow-sm"
          >
            <IconCircle className="h-2.5 w-2.5 fill-rose-500/80" />
            <span className="text-sm text-white/70 tracking-wide font-medium">Featured Work</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white/95 to-white/70"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-white/50 leading-relaxed"
          >
            A curated showcase of projects demonstrating my skills in development and design.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mx-auto mb-16 md:mb-20">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }} // Adjust delay based on number of projects
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
             size="lg"
             asChild
             className={cn( // Use cn for potentially dynamic classes
                "bg-gradient-to-r from-indigo-500 to-rose-500 text-white font-semibold",
                "hover:from-indigo-600 hover:to-rose-600 hover:shadow-lg",
                "transition-all duration-300 ease-out transform hover:scale-105"
             )}
           >
            <Link href="/portfolio">
              View All Projects
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
