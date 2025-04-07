"use client";

import { motion } from "framer-motion";
import { IconCircle, IconBriefcase, IconCalendar, IconMapPin } from '@tabler/icons-react';
import { cn } from "@/lib/utils";

// --- experiences array remains the same ---
const experiences = [
  {
    title: "Fullstack Developer",
    company: "Hlengwe Research and Training Experts (PTY) LTD",
    location: "On Site",
    period: "2024",
    description: "Built and maintained an online Guest house Booking web application, ensuring high performance and responsiveness.",
    highlights: [
      "Next.js, TypeScript, Tailwind CSS",
      "Redux, ShadCN, MySQL",
      "Payment Gateway Integration",
      "WordPress CMS Integration"
    ],
    side: "right" // Content on the right
  },
  {
    title: "Graphic Designer & Web Developer",
    company: "Shidumo Transport Solutions (PTY) LTD",
    location: "Remote",
    period: "2022 - 2024",
    description: "Built and maintained an Invoice Generator web application, ensuring high performance, PDF generation and responsiveness.",
    highlights: [
      "React, TypeScript, Tailwind CSS",
      "Redux, ShadCN UI Components",
      "Adobe Photoshop & Illustrator",
      "Full-stack Development"
    ],
    side: "left" // Content on the left
  },
  {
    title: "WordPress Designer & Graphic Designer",
    company: "Moon Wealth FX PTY (LTD)",
    location: "Remote",
    period: "2020 - 2022",
    description: "Created posters for social media advertising, YouTube Intros, Created their website using WordPress with woocommerce for selling Courses online.",
    highlights: [
      "WordPress & WooCommerce Development",
      "PHP & MySQL Integration",
      "Adobe Photoshop & Illustrator",
      "Social Media Content Creation"
    ],
    side: "right" // Content on the right
  },
  {
    title: "Graphic Designer",
    company: "Fullness of Christ Ministry",
    location: "Limpopo, Elim",
    period: "2016 - 2022",
    description: "Created visually appealing graphics and managed social media content for the church, resulting in an increase in online engagement.",
    highlights: [
      "Social Media Content Design",
      "Adobe Photoshop & Illustrator",
      "Photography",
      "Volunteer Position"
    ],
    side: "left" // Content on the left
  }
];


function TimelineItem({
  experience,
  index
}: {
  experience: typeof experiences[0];
  index: number;
}) {
  const isRight = experience.side === "right";

  return (
    // Add 'relative' here to be the positioning context for the absolute dot on desktop
    <div className={cn(
      "mb-8 flex justify-between items-start w-full", // Use items-start for better alignment
      "md:flex-row", // Use standard flex-row on desktop
      isRight ? "" : "md:flex-row-reverse", // Reverse layout for left-side items
      "flex-col" // Mobile: stack vertically
    )}>

      {/* Empty space div - This pushes the content block to the correct side on desktop */}
      {/* It takes up the other half of the space */}
      <div className="hidden md:block w-5/12"></div>

      {/* Spacer for the center line width - prevents content overlap */}
      <div className="hidden md:block w-12"></div>

      {/* Content Block */}
      <motion.div
        initial={{ opacity: 0, x: isRight ? 100 : -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        viewport={{ once: true }}
        className={cn(
          "md:w-5/12 w-full px-6 py-4 rounded-lg", // Desktop takes half, mobile takes full
          "bg-white/[0.03] border border-white/[0.08]",
          "transform transition-all hover:-translate-y-1 hover:shadow-xl",
          "order-last md:order-none" // Ensure content is last on mobile stack
        )}
      >
        {/* -- Content structure remains the same -- */}
        <div className="flex items-center mb-4">
          <IconBriefcase className="w-5 h-5 text-rose-500/80 mr-2" />
          <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-rose-300">
            {experience.title}
          </h3>
        </div>
        
        <div className="mb-4">
          <div className="flex items-center text-white/60 mb-2">
            <IconCalendar className="w-4 h-4 mr-2" />
            <span>{experience.period}</span>
          </div>
          <div className="flex items-center text-white/60 mb-2">
            <IconMapPin className="w-4 h-4 mr-2" />
            <span className="break-words">{experience.company} • {experience.location}</span>
          </div>
        </div>
        
        <p className="text-white/60 mb-4">{experience.description}</p>
        
        <ul className="space-y-2">
          {experience.highlights.map((highlight, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: (index * 0.2) + (i * 0.1) }}
              viewport={{ once: true }}
              className="text-sm text-white/40 flex items-start gap-2"
            >
              <IconCircle className="w-2 h-2 mt-1.5 fill-rose-500/80 flex-shrink-0" />
              <span>{highlight}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

       {/* Mobile Timeline Dot - Displayed above content */}
       <div className={cn(
          "md:hidden", // Show only on mobile
          "flex items-center justify-center",
          "z-10 w-8 h-8 rounded-full mx-auto my-4", // Centered, with margin
          "border border-white/[0.08] shadow-xl",
          "bg-gradient-to-br from-indigo-500/10 to-rose-500/10",
          "order-first" // Ensure dot is first in mobile column layout
       )}>
         <IconCircle className="w-3 h-3 fill-rose-500/80" />
       </div>

    </div>
  );
}


export function ExperienceTimeline() {
  return (
    <div className="relative w-full bg-[#030303] py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      <div className="mx-auto max-w-5xl px-4 relative z-10">
         {/* -- Heading structure remains the same -- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-4"
           >
             <IconCircle className="h-2 w-2 fill-rose-500/80" />
             <span className="text-sm text-white/60 tracking-wide">Experience</span>
           </motion.div>
           <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
             Professional Journey
           </h2>
           <p className="text-white/40">
             A timeline of my career milestones and achievements
           </p>
         </div>

        {/* Container for timeline items and the central line */}
        {/* Added 'relative' here as the main positioning context */}
        <div className="relative wrap overflow-hidden">
          {/* Central Timeline Line - visible on desktop */}
          <div className="absolute left-1/2 h-full w-0.5 bg-white/[0.08] transform -translate-x-1/2 hidden md:block z-0"></div>

          {/* Map through experiences */}
          {experiences.map((experience, index) => (
            <div key={index} className="relative"> {/* Add a relative wrapper for each item + dot */}
               {/* Desktop Timeline Dot - Absolutely positioned */}
               <div className={cn(
                 "hidden md:flex", // Show only on desktop
                 "absolute left-1/2 top-6", // Position top-left corner at center line, offset down
                 "transform -translate-x-1/2", // Center horizontally
                 "items-center justify-center",
                 "z-20 w-8 h-8 rounded-full", // z-20 to be above line (z-0)
                 "border border-white/[0.08] shadow-xl",
                 "bg-gradient-to-br from-indigo-500/10 to-rose-500/10"
               )}>
                 <IconCircle className="w-3 h-3 fill-rose-500/80" />
               </div>

              {/* Render the TimelineItem component */}
              <TimelineItem experience={experience} index={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
