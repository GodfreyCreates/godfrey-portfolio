"use client";

import { motion } from "framer-motion";
import { IconCircle, IconSchool, IconCalendar } from '@tabler/icons-react';
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-6 transform transition-all hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="flex items-center mb-4">
        <IconSchool className="w-5 h-5 text-rose-500/80 mr-2" />
        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-rose-300">
          {certification.title}
        </h3>
      </div>

      <div className="flex items-center text-white/60 mb-4">
        <IconCalendar className="w-4 h-4 mr-2" />
        <span>{certification.year} • {certification.issuer}</span>
      </div>

      <p className="text-white/60 mb-4">{certification.description}</p>

      <div className="flex flex-wrap gap-2">
        {certification.skills.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: (index * 0.2) + (i * 0.1) }}
            viewport={{ once: true }}
            className="px-3 py-1 text-sm rounded-full bg-white/[0.03] border border-white/[0.08] text-white/60"
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
    <div className="relative w-full  bg-[#030303] py-16">
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
            <span className="text-sm text-white/60 tracking-wide">Education</span>
          </motion.div>
          
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
            Certifications
          </h2>
          
          <p className="text-white/40">
            My academic journey and professional certifications in software development and cybersecurity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto mb-12">
          {certifications.map((certification, index) => (
            <CertificationCard key={index} certification={certification} index={index} />
          ))}
        </div>

        <div className="text-center">
          {/* <Button className="bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 text-background" size="lg" asChild>
            <Link href="/resume">
              View Full Resume
            </Link>
          </Button> */}
        </div>
      </div>
    </div>
  );
} 