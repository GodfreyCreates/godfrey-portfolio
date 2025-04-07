"use client";

import React from 'react';
import DisplayCards from "@/components/ui/display-cards"; // Assuming this component renders individual card data
import {
  IconCode,
  IconServer, // Assuming this is meant for Frontend, maybe IconBrowser or similar? Using IconServer for now.
  IconPalette
} from '@tabler/icons-react';
import { motion } from 'framer-motion'; // Add motion for subtle animations

// --- Refined Card Data ---
// Removed layout classes (translate, grid-area) - these will be handled by the container
// Standardized icon color approach
// Added unique 'id' for React keys
// Simplified hover effects will be applied via CSS in the container
const defaultCardsData = [
  {
    id: 'backend',
    icon: <IconCode className="size-5" />, // Slightly larger icon
    title: "Backend Dev", // Slightly clearer title
    description: "Building robust solutions with Node.js, APIs & Databases.",
    date: "2+ Years Experience",
    iconClassName: "text-rose-500", // Use this for specific icon color
    titleClassName: "text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-rose-300", // Reduced margin-bottom
    // Base card styling (kept generic layout/appearance styles)
    baseClassName: "border border-border/20 bg-card/60 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 ease-out shadow-md",
    // Desktop-specific overlay/grayscale (applied conditionally via container)
    desktopEffectClassName: "grayscale hover:grayscale-0",
    // Mobile will likely ignore the desktopEffectClassName
  },
  {
    id: 'frontend',
    icon: <IconServer className="size-5" />, // Or IconBrowser, etc.
    title: "Frontend Dev",
    description: "Crafting modern interfaces with React, Next.js & TypeScript.",
    date: "3+ Years Experience",
    iconClassName: "text-indigo-500",
    titleClassName: "text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-rose-300",
    baseClassName: "border border-border/20 bg-card/60 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 ease-out shadow-md",
    desktopEffectClassName: "grayscale hover:grayscale-0",
  },
  {
    id: 'design',
    icon: <IconPalette className="size-5" />,
    title: "Graphic & UI/UX", // Combined title
    description: "Designing intuitive experiences & visuals with Figma & Adobe Suite.",
    date: "6+ Years Experience",
    iconClassName: "text-purple-500",
    titleClassName: "text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-rose-300",
    baseClassName: "border border-border/20 bg-card/60 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 ease-out shadow-md",
    desktopEffectClassName: "grayscale hover:grayscale-0",
  },
];

// Animation variants for cards appearing
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15, // Stagger animation slightly
      duration: 0.5,
      ease: "easeOut"
    }
  })
};


function TechCards() {
  return (
    // Section container with padding
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header (Optional but recommended) */}
        <div className="text-center mb-12 md:mb-16">
           <h2 className="text-3xl md:text-4xl font-bold mb-3">My Core Skills</h2>
           <p className="text-muted-foreground max-w-xl mx-auto">
             Blending design expertise with full-stack development capabilities to create comprehensive digital solutions.
           </p>
        </div>

        {/* Cards Container - Handles responsive layout */}
        <div className="
          flex flex-col items-center gap-6 // Mobile: Vertical stack with gap
          md:relative md:flex-row md:justify-center md:items-center md:min-h-[350px] // Desktop: Prepare for overlap
        ">
          {defaultCardsData.map((card, index) => (
            <motion.div
              key={card.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }} // Trigger when 30% visible
              variants={cardVariants}
              className={`
                w-full max-w-sm // Constrain width on mobile/desktop
                md:absolute md:w-[300px] // Desktop: Absolute positioning, fixed width
                md:transition-all md:duration-500 md:ease-out // Smooth transitions for hover/positioning
                ${
                  // --- Desktop Positioning & Z-index ---
                  index === 0 ? 'md:translate-x-[-80px] md:translate-y-[0px] md:rotate-[-3deg] md:z-10 md:hover:z-40 md:hover:translate-y-[-10px] md:hover:rotate-[-1deg] md:hover:scale-105' :
                  index === 1 ? 'md:translate-x-[0px]  md:translate-y-[-20px] md:rotate-[0deg]  md:z-20 md:hover:z-40 md:hover:translate-y-[-30px] md:hover:rotate-[0deg]  md:hover:scale-105' :
                  index === 2 ? 'md:translate-x-[80px] md:translate-y-[0px] md:rotate-[3deg]  md:z-30 md:hover:z-40 md:hover:translate-y-[-10px] md:hover:rotate-[1deg]  md:hover:scale-105' : ''
                  // Explanation:
                  // - `md:absolute`: Enables overlap relative to the container.
                  // - `md:w-[300px]`: Fixed width for consistency in stack.
                  // - `md:translate-*`, `md:rotate-*`: Creates the fanned/stacked look.
                  // - `md:z-*`: Controls stacking order (card 2 on top initially, card 3 highest z for balance).
                  // - `md:hover:z-40`: Brings hovered card to the very front.
                  // - `md:hover:translate-y-*`, `md:hover:rotate-*`, `md:hover:scale-105`: Subtle hover animation.
                }
              `}
            >
              {/* Pass combined classes to DisplayCards */}
              <DisplayCards
                 cards={[ // DisplayCards likely expects an array, pass only the current card
                   {
                     ...card,
                     // Combine base styles with conditional desktop effects
                     className: `${card.baseClassName} ${card.desktopEffectClassName}`
                   }
                 ]}
               />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { TechCards };
