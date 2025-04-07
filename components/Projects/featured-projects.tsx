"use client";

import { motion } from "framer-motion";
import { IconCircle, IconExternalLink, IconBrandGithub } from '@tabler/icons-react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import Link from "next/link";
import Image from "next/image";
import { projects, Project } from "@/data/projects";
import { useState } from "react";

// Select featured projects: 2 web and 1 graphic
const featuredProjects = [
  ...projects.web.slice(0, 2),
  projects.graphic[0]
];

function ProjectCard({ project }: { project: Project }) {
  const [showImageModal, setShowImageModal] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group"
      >
        <div 
          className="relative overflow-hidden rounded-xl bg-white/[0.03] border border-white/[0.08] cursor-pointer"
          onClick={() => setShowImageModal(true)}
        >
          <div className="relative h-64 overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transform transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-white/90">{project.title}</h3>
            <div className="text-white/60 mb-2 text-sm">{project.Client}</div>
            <p className="text-white/60 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm rounded-full bg-white/[0.03] border border-white/[0.08] text-white/60"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              {project.liveDemo && (
                <Button size="sm" asChild>
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                    <IconExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              )}
              {project.type === 'web' && project.github && (
                <Button size="sm" variant="outline" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <IconBrandGithub className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      <Dialog open={showImageModal} onOpenChange={setShowImageModal}>
        <DialogContent className="max-w-4xl bg-zinc-900/95 border-white/[0.08] shadow-2xl">
          <DialogTitle className="sr-only">
            {project.title} Project Details
          </DialogTitle>
          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-white/90">{project.title}</h3>
            <p className="text-white/60 mt-2">{project.description}</p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export function FeaturedProjects() {
  return (
    <section className="relative w-full bg-[#030303] py-24">
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
            <span className="text-sm text-white/60 tracking-wide">Featured Work</span>
          </motion.div>
          
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
            Featured Projects
          </h2>
          
          <p className="text-white/40">
            A selection of my recent work in web development and design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto mb-12">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 text-background" size="lg" asChild>
            <Link href="/portfolio">
              View All Projects
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
} 