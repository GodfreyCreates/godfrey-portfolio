"use client";

import { motion } from "framer-motion";
import { IconCircle, IconSchool, IconCalendar } from '@tabler/icons-react';
// Assuming Button and Link components are correctly imported if uncommented later
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
import { cn } from "@/lib/utils"; // Import cn if not already globally available

const certifications = [
    {
      title: "Diploma in Coding and Technology",
      issuer: "Upskillist",
      year: "2024",
      description: "Specialized in Software Engineering and Web Technologies with focus on modern development practices.",
      skills: [
        "Software Engineering",
        "Web Development",
        "Modern Technologies",
        "Best Practices"
      ]
    },
    {
      title: "CISSP® Certification",
      issuer: "Simplilearn",
      year: "2024",
      description: "Gained expertise in IT security and risk management strategies for enterprise systems.",
      skills: [
        "IT Security",
        "Risk Management",
        "Enterprise Systems",
        "Security Protocols"
      ]
    },
    {
      title: "Cybercrime Certification",
      issuer: "Simplilearn",
      year: "2024",
      description: "Comprehensive study of cybercrime prevention and digital security measures.",
      skills: [
        "Cybercrime Prevention",
        "Digital Security",
        "Threat Analysis",
        "Security Measures"
      ]
    },
    {
      title: "ReactJS Components",
      issuer: "Simplilearn",
      year: "2024",
      description: "Advanced study of React component architecture and modern web development.",
      skills: [
        "React.js",
        "Component Architecture",
        "Modern Web Dev",
        "State Management"
      ]
    }
  ];

function CertificationCard({ certification, index }: { certification: typeof certifications[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }} // Use Framer Motion for smoother hover lift
      transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }} // Adjusted delay slightly, added ease
      viewport={{ once: true, amount: 0.2 }}
      className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-6 h-full flex flex-col" // Added h-full & flex for consistent height if needed
      // Removed Tailwind hover classes for transform/shadow, rely on motion/base shadow
    >
      <div className="flex items-center mb-4">
        <IconSchool className="w-5 h-5 text-rose-500/80 mr-2 flex-shrink-0" /> {/* Added flex-shrink-0 */}
        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-rose-300">
          {certification.title}
        </h3>
      </div>

      <div className="flex items-center text-white/60 mb-4 text-sm"> {/* Made text slightly smaller */}
        <IconCalendar className="w-4 h-4 mr-2 flex-shrink-0" /> {/* Added flex-shrink-0 */}
        <span>{certification.year} • {certification.issuer}</span>
      </div>

      <p className="text-white/60 mb-4 text-sm flex-grow"> {/* Added flex-grow to push skills down */}
        {certification.description}
      </p>

      {/* Skills section pushed to bottom */}
      <div className="flex flex-wrap gap-2 mt-auto"> {/* Added mt-auto */}
        {certification.skills.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, x: 15 }} // Simplified slide-in
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: (index * 0.15) + 0.2 + (i * 0.05), ease: "easeOut" }} // Adjusted timing
            viewport={{ once: true }}
            className="px-3 py-1 text-xs rounded-full bg-white/[0.05] border border-white/[0.08] text-white/70" // Adjusted style slightly
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export function CertificationsSection() {
  return (
    <div className="relative w-full bg-[#030303] py-24 md:py-32"> {/* Increased padding */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      <div className="mx-auto max-w-5xl px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-4"
          >
            <IconCircle className="h-2 w-2 fill-rose-500/80" />
            <span className="text-sm text-white/60 tracking-wide">Education</span>
          </motion.div>

          {/* Added Animation & Removed Gradient */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 text-neutral-100" // Solid color, removed gradient
          >
            Certifications
          </motion.h2>

           {/* Added Animation */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-white/60 md:text-lg" // Consistent secondary text style
          >
            My academic journey and professional certifications in software development and cybersecurity.
          </motion.p>
        </div>

        {/* Grid for Certification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mx-auto mb-12"> {/* Added lg:gap-8 */}
          {certifications.map((certification, index) => (
            <CertificationCard key={index} certification={certification} index={index} />
          ))}
        </div>

        {/* Commented out button section remains */}
        {/* <div className="text-center">
          <Button className="bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 text-background" size="lg" asChild>
            <Link href="/resume">
              View Full Resume
            </Link>
          </Button>
        </div> */}
      </div>
    </div>
  );
}
