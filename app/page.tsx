"use client"

import { HeroGeometric } from "@/components/Hero/shape-landing-hero"
import { ExperienceTimeline } from "@/components/Experience/experience-timeline"
import { ServicesSection } from "@/components/Services/services-section"
import { ContactSection } from "@/components/Contact/contact-section"
import { FeaturedProjects } from "@/components/Projects/featured-projects"
import { CertificationsSection } from "@/components/Certifications/certifications-section"
import { TechStackSection } from "@/components/TechStack/tech-stack-section"


export default function Home() {
  return (
    <>
      <section id="home">
        <HeroGeometric 
          badge="Full Stack Developer"
          title1="Innovative Full Stack"
          title2="Solutions & Design"
        />
      </section>
      <section id="projects">
        <FeaturedProjects />  
      </section>
      <section id="experience">
        <ExperienceTimeline />
      </section>
      <section id="tech-stack">
        <TechStackSection />
      </section>
      <section id="certifications">
        <CertificationsSection />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </>
  )
}