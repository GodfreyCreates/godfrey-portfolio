"use client";

import { motion } from "framer-motion";
import { IconCircle, IconBriefcase, IconCalendar, IconMapPin } from '@tabler/icons-react';
import { cn } from "@/lib/utils";

// Experience Data (using the sky/neutral theme implicitly)
const experiences = [
    {
        title: "Fullstack Developer",
        company: "Hlengwe Research and Training Experts (PTY) LTD",
        location: "On Site",
        period: "Jan 2024 - Present", // More specific period
        description: "Spearheaded the development and maintenance of a comprehensive online Guest House Booking web application, focusing on performance, user experience, and secure payment processing.",
        highlights: [
            "Led front-end development using Next.js, TypeScript, and Tailwind CSS.",
            "Implemented state management with Redux Toolkit.",
            "Designed UI components with ShadCN UI.",
            "Integrated secure payment gateways (e.g., Paystack/Yoco).",
            "Managed backend services and MySQL database interactions.",
            "Integrated with WordPress CMS for content management."
        ],
        side: "right" // Determines which side of the timeline on desktop
    },
    {
        title: "Graphic Designer & Web Developer",
        company: "Shidumo Transport Solutions (PTY) LTD",
        location: "Remote",
        period: "Feb 2022 - Dec 2023", // More specific period
        description: "Developed a custom Invoice Generator web application enhancing business efficiency. Also provided graphic design services.",
        highlights: [
            "Built interactive UI using React, TypeScript, and Tailwind CSS.",
            "Utilized Redux for application state.",
            "Developed features for dynamic PDF invoice generation.",
            "Created marketing materials using Adobe Photoshop & Illustrator.",
            "Contributed to full-stack development tasks."
        ],
        side: "left"
    },
    {
        title: "WordPress Designer & Graphic Designer",
        company: "Moon Wealth FX PTY (LTD)",
        location: "Remote",
        period: "Mar 2020 - Jan 2022", // More specific period
        description: "Designed and developed the company website using WordPress and WooCommerce, alongside creating digital marketing assets.",
        highlights: [
            "Built and managed an e-commerce site selling online courses.",
            "Customized WordPress themes and plugins (PHP).",
            "Managed MySQL database for user and course data.",
            "Designed social media graphics, banners, and YouTube intros.",
            "Utilized Adobe Creative Suite (Photoshop, Illustrator)."
        ],
        side: "right"
    },
    {
        title: "Graphic Designer (Volunteer)",
        company: "Fullness of Christ Ministry",
        location: "Limpopo, Elim",
        period: "2016 - 2022",
        description: "Volunteered graphic design skills to support ministry outreach and communication efforts, enhancing visual identity and online engagement.",
        highlights: [
            "Created posters, flyers, and social media content.",
            "Managed and curated visual content for online platforms.",
            "Utilized Adobe Photoshop and Illustrator.",
            "Contributed to event photography."
        ],
        side: "left"
    }
];

// Smoother animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" // Smoother easing
    }
  }
};

const highlightVariants = {
  hidden: { opacity: 0, x: -15 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};


function TimelineItem({
  experience,
  index,
  isLast // New prop to know if it's the last item
}: {
  experience: typeof experiences[0];
  index: number;
  isLast: boolean;
}) {
  const isRight = experience.side === "right";

  return (
    // Use grid for desktop layout, flex for mobile stacking backup
    <div className={cn(
      "relative flex md:grid md:grid-cols-[1fr_auto_1fr] md:gap-x-8 items-start mb-12", // Added mb-12 for spacing
      isRight ? "justify-start" : "justify-end md:grid-flow-row-dense" // Control flow for left items
    )}>
      {/* Mobile Connector Line (Only visible below md breakpoint) */}
      {!isLast && (
         <div className="absolute left-5 top-12 bottom-0 w-0.5 bg-neutral-700/60 block md:hidden" aria-hidden="true" />
      )}

      {/* Dot and Icon Container */}
      <div className={cn(
        "relative z-10 flex-shrink-0 order-1",
        "md:col-start-2 md:mx-0 mx-auto" // Center column on desktop, auto margin on mobile (relative to flex)
      )}>
        {/* Position dot carefully on mobile relative to line */}
        <div className="ml-5 md:ml-0 w-10 h-10 rounded-full bg-neutral-800 border border-neutral-700/80 flex items-center justify-center shadow-md">
           {/* Using Briefcase icon inside the dot */}
           <IconBriefcase className="w-5 h-5 text-sky-400" />
        </div>
      </div>

      {/* Content Card */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% is visible
        className={cn(
          "order-2 w-full md:w-auto p-6 rounded-lg mt-4 md:mt-0", // Added padding, adjusted margin
          "bg-neutral-900/50 border border-neutral-700/50 shadow-lg", // Using refined colors
          "transform transition-colors duration-300 hover:border-sky-600/60", // Subtle border hover
          isRight ? "md:col-start-3" : "md:col-start-1 md:row-start-1" // Place card in correct grid column/row
        )}
      >
        {/* Card Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
           <h3 className="text-lg font-semibold mb-1 sm:mb-0 bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-sky-400">
             {experience.title}
           </h3>
           <div className="text-xs text-neutral-400 flex items-center">
             <IconCalendar className="w-3.5 h-3.5 mr-1.5 flex-shrink-0" />
             <span>{experience.period}</span>
           </div>
        </div>

        {/* Company and Location */}
        <div className="flex items-center text-sm text-neutral-300 mb-4">
           <IconMapPin className="w-4 h-4 mr-2 flex-shrink-0 text-sky-400/80" />
           <span className="break-words font-medium">{experience.company}</span>
           <span className="mx-1.5 text-neutral-500">•</span>
           <span className="text-neutral-400">{experience.location}</span>
        </div>

        {/* Description */}
        <p className="text-sm text-neutral-400 mb-5">{experience.description}</p>

        {/* Highlights */}
        <ul className="space-y-2.5">
           {experience.highlights.map((highlight, i) => (
             <motion.li
               key={i}
               variants={highlightVariants}
               // Stagger children slightly after parent animation starts
               custom={index + i * 0.1} // Custom prop not directly used here, but useful pattern
               initial="hidden" // Ensure highlights also animate in
               whileInView="visible"
               viewport={{ once: true, amount: 0.2 }}
               transition={{ delay: 0.2 + i * 0.05, duration: 0.4, ease: "easeOut" }} // Delay after card + stagger
               className="text-xs text-neutral-400 flex items-start gap-2.5" // Adjusted gap/size
             >
               <IconCircle className="w-1.5 h-1.5 mt-[5px] fill-sky-500/70 flex-shrink-0" />
               <span>{highlight}</span>
             </motion.li>
           ))}
        </ul>
      </motion.div>
    </div>
  );
}

export function ExperienceTimeline() {
  const totalExperiences = experiences.length;

  return (
    <div className="relative w-full bg-[#050505] py-24 md:py-32 overflow-hidden"> {/* Match bg from TechStack */}
       {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-800/[0.02] via-neutral-900/[0.01] to-neutral-900/[0.01] blur-3xl" />
         <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:36px_36px]"></div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, ease: "easeOut" }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800/60 border border-neutral-700 mb-4"
           >
             <IconCircle className="h-2.5 w-2.5 fill-sky-500" />
             <span className="text-sm text-neutral-300 tracking-wide">Experience</span>
           </motion.div>
           <motion.h2
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
             viewport={{ once: true }}
             className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300"
           >
             Professional Journey
           </motion.h2>
           <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
             viewport={{ once: true }}
             className="text-neutral-400 md:text-lg"
           >
             A timeline of my career milestones and key contributions.
           </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
           {/* Desktop Timeline Line */}
           <div className="absolute left-1/2 top-5 bottom-5 w-0.5 bg-neutral-700/60 transform -translate-x-1/2 hidden md:block" aria-hidden="true"></div>

           {/* Map through experiences */}
           {experiences.map((experience, index) => (
             <TimelineItem
               key={index}
               experience={experience}
               index={index}
               isLast={index === totalExperiences - 1} // Pass isLast prop
             />
           ))}
        </div>
      </div>
    </div>
  );
}
