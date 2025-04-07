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
    side: "right"
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
    side: "left"
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
    side: "right"
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
    side: "left"
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
    // Add padding-top on mobile ONLY to push content below the absolute dot
    // Ensure relative positioning for stacking context if needed, though parent handles absolute positioning now.
    <div className={cn(
      "relative mb-8 flex w-full", // Added relative just in case, mb-8 for spacing
      "pt-12 md:pt-0", // Crucial: Add space at the top on mobile for the absolute dot
      "flex-col md:flex-row", // Mobile column, Desktop row
      isRight ? "" : "md:flex-row-reverse", // Desktop: reverse for left items
      "md:items-start" // Align items to the start on desktop row
    )}>

      {/* Desktop spacer (pushes content left/right) */}
      <div className="hidden md:block w-5/12"></div>

      {/* Desktop central spacer (space between content and center line) */}
      <div className="hidden md:block w-12"></div> {/* Adjust width as needed */}

      {/* Content Block */}
      <motion.div
        initial={{ opacity: 0, x: isRight ? 50 : -50 }} // Reduced initial x offset
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }} // Slightly faster delay
        viewport={{ once: true }}
        className={cn(
          "md:w-5/12 w-full px-6 py-4 rounded-lg", // Desktop takes half, mobile takes full
          "bg-white/[0.03] border border-white/[0.08]",
          "transform transition-all hover:-translate-y-1 hover:shadow-xl"
          // No order needed now
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
              transition={{ duration: 0.3, delay: (index * 0.1) + (i * 0.05) }} // Faster delay
              viewport={{ once: true }}
              className="text-sm text-white/40 flex items-start gap-2"
            >
              <IconCircle className="w-2 h-2 mt-1.5 fill-rose-500/80 flex-shrink-0" />
              <span>{highlight}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Mobile-only dot REMOVED - Handled by the single absolute dot */}

    </div>
  );
}


export function ExperienceTimeline() {
  return (
    <div className="relative w-full bg-[#030303] py-24 overflow-hidden"> {/* Added overflow-hidden */}
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
        <div className="relative wrap"> {/* Removed overflow-hidden from here */}
          {/* Central Timeline Line - NOW VISIBLE ON ALL SIZES */}
          {/* Ensure it's behind the dots (z-0 vs z-20) */}
          <div className="absolute left-1/2 h-full w-0.5 bg-white/[0.08] transform -translate-x-1/2 z-0"></div>

          {/* Map through experiences */}
          {experiences.map((experience, index) => (
            // This wrapper helps group the absolute dot with its corresponding TimelineItem logically
            <div key={index} className="relative">
               {/* SINGLE ABSOLUTE DOT for Mobile & Desktop */}
               <div className={cn(
                 "absolute left-1/2", // Center horizontally using left-1/2 and transform
                 "transform -translate-x-1/2",
                 // Adjust vertical position: higher on mobile, slightly lower on desktop
                 "top-4 md:top-6", // e.g., 1rem on mobile, 1.5rem on desktop
                 "flex items-center justify-center", // Center the icon inside the dot div
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
