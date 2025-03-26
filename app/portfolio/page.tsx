"use client";

import { motion } from "framer-motion";
import { IconExternalLink, IconBrandGithub, IconCircle } from '@tabler/icons-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";
import { projects, Project } from "@/data/projects";
import { ProjectsNavbar } from "@/components/Projects/projects-navbar";
import { useState } from "react";

function ProjectCard({ project, type }: { project: Project; type: 'web' | 'graphic' }) {
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
              {type === 'web' && project.github && (
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
        <DialogContent className="max-w-4xl bg-zinc-900/90 border-white/[0.08]">
          <DialogTitle className="sr-only">
            {project.title} Project Details
          </DialogTitle>
          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain"
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

export default function ProjectsPage() {
  return (
    <>
      <ProjectsNavbar />
      <div className="relative w-full bg-[#030303] pt-32 pb-24">
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
              <span className="text-sm text-white/60 tracking-wide">Portfolio</span>
            </motion.div>
            
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              My Projects
            </h2>
            
            <p className="text-white/40">
              A showcase of my web development and graphic design work.
            </p>
          </div>

          <Tabs defaultValue="web" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 max-w-[400px] mx-auto mb-12">
              <TabsTrigger value="web">Web Development</TabsTrigger>
              <TabsTrigger value="graphic">Graphic Design</TabsTrigger>
            </TabsList>
            
            <TabsContent value="web">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.web.map((project) => (
                  <ProjectCard key={project.id} project={project} type="web" />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="graphic">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.graphic.map((project) => (
                  <ProjectCard key={project.id} project={project} type="graphic" />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}