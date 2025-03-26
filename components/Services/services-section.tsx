"use client";

import { motion } from "framer-motion";
import { IconCode, IconPalette, IconWorld, IconBulb, IconRocket, IconDiamond, IconCircle } from '@tabler/icons-react';
import { cn } from "@/lib/utils";

const services = [
  {
    icon: IconCode,
    title: "Full Stack Development",
    description: "End-to-end web application development using modern technologies and best practices.",
    features: [
      "Custom Web Applications",
      "API Development & Integration",
      "Database Architecture",
      "Performance Optimization"
    ]
  },
  {
    icon: IconPalette,
    title: "UI/UX Design",
    description: "Creating intuitive and visually stunning user interfaces that drive engagement.",
    features: [
      "User Interface Design",
      "Design Systems",
      "Prototyping",
      "User Experience Research"
    ]
  },
  {
    icon: IconWorld,
    title: "Web Solutions",
    description: "Comprehensive web solutions that help businesses thrive in the digital space.",
    features: [
      "Responsive Websites",
      "E-commerce Solutions",
      "CMS Development",
      "SEO Optimization"
    ]
  },
  {
    icon: IconBulb,
    title: "Digital Strategy",
    description: "Strategic planning and consultation for digital transformation initiatives.",
    features: [
      "Technical Consultation",
      "Architecture Planning",
      "Technology Stack Selection",
      "Digital Transformation"
    ]
  },
  {
    icon: IconRocket,
    title: "Project Management",
    description: "Efficient project management ensuring timely delivery and quality results.",
    features: [
      "Agile Development",
      "Sprint Planning",
      "Resource Allocation",
      "Risk Management"
    ]
  },
  {
    icon: IconDiamond,
    title: "Quality Assurance",
    description: "Comprehensive testing and quality assurance for robust applications.",
    features: [
      "Automated Testing",
      "Performance Testing",
      "Security Audits",
      "Code Reviews"
    ]
  }
];

function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
  const Icon = service.icon;
  
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
        {service.title}
      </h3>
      
      <p className="text-white/60 mb-6">
        {service.description}
      </p>
      
      <ul className="space-y-2">
        {service.features.map((feature, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: (index * 0.1) + (i * 0.1) }}
            viewport={{ once: true }}
            className="flex items-start gap-2 text-sm text-white/40"
          >
            <IconCircle className="w-2 h-2 mt-1.5 fill-rose-500/80 flex-shrink-0" />
            <span>{feature}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export function ServicesSection() {
  return (
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
            <span className="text-sm text-white/60 tracking-wide">Services</span>
          </motion.div>
          
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
            What I Offer
          </h2>
          
          <p className="text-white/40">
            Comprehensive solutions tailored to your digital needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}