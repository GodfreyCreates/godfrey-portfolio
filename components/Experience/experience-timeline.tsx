"use client";

import { motion } from "framer-motion";
import { IconCircle, IconBriefcase, IconCalendar, IconMapPin, IconPointFilled } from '@tabler/icons-react';
import { cn } from "@/lib/utils"; // Assuming you have this utility function

// Your experience data remains the same
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
    // Side is now primarily for desktop layout control
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

// Type definition for experience data (good practice)
type Experience = typeof experiences[0];

function TimelineItem({
  experience,
  index,
  isLast,
}: {
  experience: Experience;
  index: number;
  isLast: boolean;
}) {
  const isRight = experience.side === "right";

  // Animation variants for the content card
  const cardVariants = {
    hidden: { opacity: 0, y: 50, x: isRight ? 50 : -50 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.6, delay: index * 0.2, ease: "easeOut" },
    },
  };

  // Animation variants for the list items
  const listItemVariants = {
     hidden: { opacity: 0, x: 20 },
     visible: (i: number) => ({ // Custom property 'i' for delay calculation
         opacity: 1,
         x: 0,
         transition: { duration: 0.4, delay: (index * 0.2) + 0.3 + (i * 0.1), ease: "easeOut" }
     })
  };

  return (
    <div className="flex md:justify-between md:items-start w-full mb-10 md:mb-16 last:mb-0">

      {/* --- DESKTOP: Left Content / Spacer --- */}
      <div className={cn(
        "hidden md:block w-5/12",
        !isRight ? "order-1" : "order-3" // Place content or leave empty
      )}>
        {!isRight && (
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} // Trigger when 30% is visible
            className={cn(
              "p-6 rounded-xl shadow-lg transition-all duration-300 ease-out",
              "bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10",
              "hover:shadow-rose-500/10 hover:border-white/20 hover:scale-[1.02]"
            )}
          >
            <ExperienceCardContent experience={experience} listItemVariants={listItemVariants} />
          </motion.div>
        )}
      </div>

      {/* --- Center Dot and Line --- */}
      <div className={cn(
          "order-2 flex-shrink-0 w-16 md:w-auto flex justify-center items-start relative",
          // Add padding top to align dot with card content baseline visually
          "pt-1"
      )}>
        <div className="relative z-10">
           {/* The Dot */}
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-indigo-500 to-rose-500 shadow-md flex items-center justify-center">
            <IconPointFilled className="w-3 h-3 text-white/80" />
          </div>

          {/* Vertical Line - using pseudo-elements */}
          <div className={cn(
            "absolute top-5 left-1/2 transform -translate-x-1/2 w-0.5 h-[calc(100%+2.5rem)] md:h-[calc(100%+4rem)]", // Adjust height to connect items
            "bg-gradient-to-b from-rose-500/50 via-indigo-500/30 to-slate-700/30",
            isLast ? "h-0" : "" // Hide line below the last item
          )}></div>
        </div>
      </div>


      {/* --- MOBILE Content / DESKTOP: Right Content/Spacer --- */}
      <div className={cn(
        "w-full md:w-5/12",
        isRight ? "order-3" : "order-1 md:order-3" // Mobile always order 3, Desktop alternates
      )}>
        {/* --- MOBILE Card --- */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className={cn(
             "md:hidden p-5 rounded-xl shadow-lg transition-all duration-300 ease-out",
             "bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10",
             "hover:shadow-rose-500/10 hover:border-white/20 hover:scale-[1.02]",
             "mb-6" // Margin bottom for mobile spacing
          )}
        >
          <ExperienceCardContent experience={experience} listItemVariants={listItemVariants}/>
        </motion.div>

        {/* --- DESKTOP Right Card --- */}
        {isRight && (
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className={cn(
              "hidden md:block p-6 rounded-xl shadow-lg transition-all duration-300 ease-out",
              "bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10",
              "hover:shadow-rose-500/10 hover:border-white/20 hover:scale-[1.02]"
            )}
          >
            <ExperienceCardContent experience={experience} listItemVariants={listItemVariants}/>
          </motion.div>
        )}
      </div>

    </div>
  );
}

// Separate component for card content to avoid repetition
function ExperienceCardContent({ experience, listItemVariants }: { experience: Experience, listItemVariants: any }) {
  return (
    <>
      <div className="flex items-center mb-3">
        <IconBriefcase className="w-6 h-6 text-rose-400 mr-3 flex-shrink-0" />
        <h3 className="text-lg md:text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-rose-300">
          {experience.title}
        </h3>
      </div>

      <div className="mb-4 space-y-1.5 text-sm">
        <div className="flex items-center text-white/70">
          <IconCalendar className="w-4 h-4 mr-2 flex-shrink-0" />
          <span>{experience.period}</span>
        </div>
        <div className="flex items-center text-white/70">
          <IconMapPin className="w-4 h-4 mr-2 flex-shrink-0" />
          <span className="break-words">{experience.company} • {experience.location}</span>
        </div>
      </div>

      <p className="text-white/60 text-sm md:text-base mb-5 leading-relaxed">{experience.description}</p>

      <ul className="space-y-2">
        {experience.highlights.map((highlight, i) => (
          <motion.li
            key={i}
            custom={i} // Pass index 'i' to variants for staggered delay
            variants={listItemVariants}
            // No need for initial/whileInView here if parent card handles it
            className="text-xs md:text-sm text-white/50 flex items-start gap-2.5"
          >
            <IconPointFilled className="w-2.5 h-2.5 mt-[3px] text-rose-500/70 flex-shrink-0" />
            <span>{highlight}</span>
          </motion.li>
        ))}
      </ul>
    </>
  );
}


export function ExperienceTimeline() {
  return (
    // Changed background for better contrast with cards
    <div className="relative w-full bg-[#0a0a0f] py-24 sm:py-32 overflow-hidden">
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[#0a0a0f] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:3rem_3rem]">
         {/* Radial Gradient Glow */}
         <div className="absolute bottom-[-50%] left-[-20%] h-[80%] w-[80%] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(192,132,252,0.15),rgba(255,255,255,0))]"></div>
         <div className="absolute top-[-40%] right-[-30%] h-[70%] w-[90%] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(251,113,133,0.1),rgba(255,255,255,0))]"></div>
      </div>


      <div className="mx-auto max-w-5xl px-6 lg:px-8 relative z-10">
        {/* --- Section Header --- */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 shadow-sm"
          >
            <IconCircle className="h-2.5 w-2.5 fill-rose-500/80" />
            <span className="text-sm text-white/70 tracking-wide font-medium">Experience</span>
          </motion.div>
          <motion.h2
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.1 }}
             viewport={{ once: true }}
             className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white/90 to-white/70"
          >
            My Professional Journey
          </motion.h2>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.2 }}
             viewport={{ once: true }}
             className="text-base sm:text-lg text-white/50 leading-relaxed"
          >
            Tracing the path of my career, highlighting key roles, projects, and skills acquired along the way.
          </motion.p>
        </div>

        {/* --- Timeline Items Container --- */}
        <div className="relative">
           {/*
              The connecting line is now handled *within* each TimelineItem
              using pseudo-elements for better alignment control across screen sizes.
            */}
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.company + index} // Use a more stable key
              experience={experience}
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
