"use client";

import { motion } from "framer-motion";
import { IconCircle, IconSchool, IconCalendar, IconAward } from '@tabler/icons-react'; // Added IconAward
import { Button } from "@/components/ui/button"; // Assuming this exists
import Link from "next/link"; // Keep if needed later
import { cn } from "@/lib/utils"; // Assuming this exists

// --- Data ---
const certifications = [
  {
    title: "Diploma in Coding and Technology",
    issuer: "Upskillist",
    year: "2024",
    description: "Focused on Software Engineering principles and modern web tech stacks.",
    skills: ["Software Engineering", "Web Development", "React", "Node.js", "Databases"]
  },
  {
    title: "CISSP® Certification Prep", // Assuming it's prep unless fully certified
    issuer: "Simplilearn",
    year: "2024",
    description: "Covered key domains in IT security, risk management, and enterprise security architecture.",
    skills: ["IT Security", "Risk Management", "Security Architecture", "Compliance"]
  },
  {
    title: "Cybercrime Fundamentals", // Renamed for clarity
    issuer: "Simplilearn",
    year: "2024",
    description: "Studied cybercrime typologies, prevention techniques, and digital forensics basics.",
    skills: ["Cybercrime Prevention", "Digital Security", "Threat Analysis", "Forensics Basics"]
  },
  {
    title: "ReactJS Components Mastery", // Renamed for impact
    issuer: "Simplilearn",
    year: "2024",
    description: "In-depth exploration of React component patterns, state management, and hooks.",
    skills: ["React.js", "Component Design", "State Management", "Hooks", "Testing"] // Added Testing
  }
];

// Type for certification data (good practice)
type Certification = typeof certifications[0];

// --- Certification Card Component ---
function CertificationCard({ certification, index }: { certification: Certification, index: number }) {
  // Animation Variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, delay: index * 0.15, ease: "easeOut" }
    }
  };

  const skillVariants = {
     hidden: { opacity: 0, y: 10 },
     visible: (i: number) => ({
         opacity: 1,
         y: 0,
         transition: { duration: 0.3, delay: (index * 0.15) + 0.3 + (i * 0.05), ease: "easeOut" }
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
        "transition-all duration-300 ease-out hover:border-indigo-400/50 hover:shadow-indigo-500/10 hover:scale-[1.03]" // Indigo accent for education?
      )}
    >
      {/* Header */}
      <div className="flex items-start mb-4">
        <div className="w-10 h-10 mr-4 mt-1 rounded-lg bg-gradient-to-br from-indigo-500/20 to-rose-500/20 flex items-center justify-center border border-white/10 flex-shrink-0">
          {/* Use IconAward or IconSchool */}
          <IconAward className="w-5 h-5 text-indigo-400" /> 
        </div>
        <div>
           <h3 className="text-lg sm:text-xl font-semibold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-rose-300">
             {certification.title}
           </h3>
           <div className="flex items-center text-xs sm:text-sm text-white/60">
             <IconCalendar className="w-3.5 h-3.5 mr-1.5 flex-shrink-0" />
             <span>{certification.year} • {certification.issuer}</span>
           </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-white/70 mb-5 flex-grow leading-relaxed"> {/* Added flex-grow */}
        {certification.description}
      </p>

      {/* Skills Tags */}
      <div className="flex flex-wrap gap-1.5 mt-auto pt-2"> {/* mt-auto pushes tags down */}
        {certification.skills.map((skill, i) => (
          <motion.span
            key={skill}
            custom={i}
            variants={skillVariants}
             // Initial/whileInView handled by parent card, variant handles entry
            className="px-2.5 py-0.5 text-[11px] sm:text-xs rounded-full bg-white/5 border border-white/10 text-white/60"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

// --- Main Certifications Section Component ---
export function CertificationsSection() {
  return (
    <div className="relative w-full bg-[#0a0a0f] py-24 sm:py-32 overflow-hidden"> {/* Adjusted padding */}
       {/* Consistent Background pattern & glow */}
       <div className="absolute inset-0 -z-10 h-full w-full bg-[#0a0a0f] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:3rem_3rem]">
            {/* Different glow position/color for variety */}
            <div className="absolute top-[20%] left-[-20%] h-[60%] w-[80%] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(167,139,250,0.08),rgba(255,255,255,0))]"></div>
            <div className="absolute bottom-[-10%] right-[5%] h-[40%] w-[50%] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(99,102,241,0.1),rgba(255,255,255,0))]"></div>
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
            {/* Use IconSchool or IconAward here */}
            <IconSchool className="h-3 w-3 text-indigo-400/80" /> 
            <span className="text-sm text-white/70 tracking-wide font-medium">Education & Learning</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white/95 to-white/70"
          >
            Certifications & Skills
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-white/50 leading-relaxed"
          >
             Continuous learning and professional development in software engineering and cybersecurity domains.
          </motion.p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 mx-auto max-w-5xl"> {/* Max-width for content area */}
          {certifications.map((certification, index) => (
            <CertificationCard key={certification.title + index} certification={certification} index={index} />
          ))}
        </div>

        {/* Optional: Add a button here if needed later */}
        {/* <div className="text-center mt-16">
          <Button size="lg" variant="outline" asChild className="...">
            <Link href="/resume">View Full Resume</Link>
          </Button>
        </div> */}
      </div>
    </div>
  );
}
