"use client";

import { motion } from "framer-motion";
// Using original icons and adding Briefcase which was used in the dot
import { IconCircle, IconBriefcase, IconCalendar, IconMapPin } from '@tabler/icons-react';
import { cn } from "@/lib/utils";

// Original Experience Data structure
const experiences = [
    {
        title: "Fullstack Developer",
        company: "Hlengwe Research and Training Experts (PTY) LTD",
        location: "On Site",
        // Using original period format, you can adjust if needed
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


// Smoother animation variants (keeping these improvements)
const cardVariants = {
  hidden: { opacity: 0, y: 30 }, // Changed from x to y for smoother feel
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6, // Slightly adjusted duration
      ease: "easeOut" // Smoother easing
    }
  }
};

const highlightVariants = {
  hidden: { opacity: 0, x: -15 }, // Keep subtle x animation for list items
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
  isLast // Keep this prop for line logic
}: {
  experience: typeof experiences[0];
  index: number;
  isLast: boolean;
}) {
  const isRight = experience.side === "right";

  return (
    // Applying the improved layout structure (Grid for desktop, flex for mobile)
    <div className={cn(
      "relative flex md:grid md:grid-cols-[1fr_auto_1fr] md:gap-x-8 items-start mb-12", // Use grid layout on desktop
      isRight ? "justify-start" : "justify-end md:grid-flow-row-dense"
    )}>

      {/* Mobile Connector Line - Using original colors */}
      {!isLast && (
         <div className="absolute left-5 top-12 bottom-0 w-0.5 bg-white/[0.08] block md:hidden" aria-hidden="true" /> // Reverted color
      )}

      {/* Dot Container - Centered in grid on desktop, positioned relative to mobile line */}
      <div className={cn(
        "relative z-10 flex-shrink-0 order-1",
        "md:col-start-2 md:mx-0 mx-auto"
      )}>
         {/* Position dot carefully on mobile (ml-5 matches line's left offset) */}
        <div className="ml-5 md:ml-0 w-10 h-10 rounded-full border border-white/[0.08] shadow-xl flex items-center justify-center bg-gradient-to-br from-indigo-500/10 to-rose-500/10"> {/* Reverted bg & border */}
            {/* You can choose IconCircle or IconBriefcase here */}
           {/* <IconCircle className="w-3 h-3 fill-rose-500/80" /> */}
           <IconBriefcase className="w-5 h-5 text-rose-400" /> {/* Using Briefcase, reverted color */}
        </div>
      </div>

      {/* Content Card - Applying original colors and improved animations */}
      <motion.div
        // Using improved animation variants
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Trigger animation earlier
        className={cn(
          "order-2 w-full md:w-auto p-6 rounded-lg mt-4 md:mt-0", // Keep padding
          "bg-white/[0.03] border border-white/[0.08]", // Reverted card bg/border
          "transform transition-all hover:-translate-y-1 hover:shadow-xl hover:border-rose-400/50", // Original hover + subtle border hint
          isRight ? "md:col-start-3" : "md:col-start-1 md:row-start-1" // Grid positioning
        )}
      >
         {/* Card Header - Title using original gradient */}
        <div className="flex items-center mb-4">
           <IconBriefcase className="w-5 h-5 text-rose-500/80 mr-2 flex-shrink-0" /> {/* Original icon color */}
           <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-rose-300"> {/* Original gradient */}
             {experience.title}
           </h3>
        </div>

        {/* Date / Location - using original text colors */}
        <div className="mb-4">
           <div className="flex items-center text-white/60 mb-2 text-sm"> {/* Original color, added text-sm */}
             <IconCalendar className="w-4 h-4 mr-2 flex-shrink-0" />
             <span>{experience.period}</span>
           </div>
           <div className="flex items-center text-white/60 mb-2 text-sm"> {/* Original color, added text-sm */}
             <IconMapPin className="w-4 h-4 mr-2 flex-shrink-0" />
             {/* Using span for better word break control if needed */}
             <span className="break-words">{experience.company} <span className="mx-1">•</span> {experience.location}</span>
           </div>
        </div>

        {/* Description - using original text color */}
        <p className="text-sm text-white/60 mb-5">{experience.description}</p> {/* Added text-sm */}

        {/* Highlights - using original colors and improved animations */}
        <ul className="space-y-2">
           {experience.highlights.map((highlight, i) => (
             <motion.li
               key={i}
               // Using improved animation variants
               variants={highlightVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.2 }}
               transition={{ delay: 0.2 + i * 0.05, duration: 0.4, ease: "easeOut" }} // Stagger delay
               className="text-sm text-white/40 flex items-start gap-2" // Original text color
             >
               <IconCircle className="w-2 h-2 mt-1.5 fill-rose-500/80 flex-shrink-0" /> {/* Original fill color */}
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
    // Using original background and overlay colors
    <div className="relative w-full bg-[#030303] py-24 md:py-32 overflow-hidden"> {/* Reverted bg */}
       <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" /> {/* Reverted overlay */}

      <div className="mx-auto max-w-5xl px-4 relative z-10">
        {/* Section Header - using original colors */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
           <motion.div
             // Keeping animations
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, ease: "easeOut" }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-4" // Original tag style
           >
             <IconCircle className="h-2 w-2 fill-rose-500/80" /> {/* Original icon fill */}
             <span className="text-sm text-white/60 tracking-wide">Experience</span> {/* Original text color */}
           </motion.div>
           <motion.h2
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
             viewport={{ once: true }}
             className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80" // Original title gradient
           >
             Professional Journey
           </motion.h2>
           <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
             viewport={{ once: true }}
             className="text-neutral-400 md:text-lg" // You might want text-white/40 here from original
             // className="text-white/40 md:text-lg" // Uncomment this line to match original subtitle color exactly
           >
             A timeline of my career milestones and key contributions.
           </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
           {/* Desktop Timeline Line - using original color */}
           <div className="absolute left-1/2 top-5 bottom-5 w-0.5 bg-white/[0.08] transform -translate-x-1/2 hidden md:block" aria-hidden="true"></div> {/* Reverted color */}

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
