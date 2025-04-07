"use client";

import DisplayCards from "@/components/ui/display-cards"; // Assuming this component exists and works
import { 
  IconCode, 
  IconServer, 
  IconPalette 
} from '@tabler/icons-react';

// --- Style Adjustments for Mobile ---
// Mobile: Use max-w-xs (narrower), p-4 (less padding). 
// Desktop (md+): Can optionally revert to larger size, e.g., md:max-w-sm md:p-6
const baseCardStyles = "w-full max-w-xs p-4 border border-neutral-700 rounded-xl bg-neutral-900 shadow-lg transition-transform duration-500 ease-out md:max-w-sm"; // Mobile: max-w-xs, p-4. Desktop: max-w-sm

// Mobile: text-base (smaller). Desktop (md+): text-xl (original size)
const baseTitleStyles = "text-base md:text-xl font-bold mb-2 md:mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-rose-300"; // Adjusted mb too

// Smaller icon container might be suitable too, using size-7
const baseIconContainerStyles = "mb-2 md:mb-3 inline-flex items-center justify-center size-7 md:size-8 rounded-full"; // Adjusted mb and size

const defaultCards = [
  {
    icon: <IconCode className="size-3.5 md:size-4 text-rose-500" />, // Slightly smaller icon on mobile
    title: "Backend",
    description: "Solutions with Node.js & Databases", // Consider text-sm for description on mobile if needed
    date: "2+ Years Experience",
    iconClassName: `${baseIconContainerStyles} bg-rose-900/50`,
    titleClassName: baseTitleStyles,
    className:
      `${baseCardStyles} mb-4 ` + 
      // Desktop styles remain largely the same, ensure they apply from 'md:' breakpoint
      "md:mb-0 md:[grid-area:stack] md:hover:-translate-y-10 md:before:absolute md:before:w-full md:before:h-full md:before:outline-1 md:before:rounded-xl md:before:outline-border md:before:content-[''] md:before:bg-blend-overlay md:before:bg-background/50 md:grayscale md:hover:before:opacity-0 md:before:transition-opacity md:before:duration-700 md:hover:grayscale-0 md:before:left-0 md:before:top-0",
  },
  {
    icon: <IconServer className="size-3.5 md:size-4 text-indigo-500" />, // Slightly smaller icon on mobile
    title: "Frontend",
    description: "Modern web dev with React & Next.js",
    date: "3+ Years Experience",
    iconClassName: `${baseIconContainerStyles} bg-indigo-900/50`,
    titleClassName: baseTitleStyles,
    className:
      `${baseCardStyles} mb-4 ` + 
      "md:mb-0 md:[grid-area:stack] md:translate-x-12 md:translate-y-10 md:hover:-translate-y-1 md:before:absolute md:before:w-full md:before:h-full md:before:outline-1 md:before:rounded-xl md:before:outline-border md:before:content-[''] md:before:bg-blend-overlay md:before:bg-background/50 md:grayscale md:hover:before:opacity-0 md:before:transition-opacity md:before:duration-700 md:hover:grayscale-0 md:before:left-0 md:before:top-0",
  },
  {
    icon: <IconPalette className="size-3.5 md:size-4 text-purple-500" />, // Slightly smaller icon on mobile
    title: "Graphic Design",
    description: "Creative UI/UX with design tools",
    date: "6+ Years Experience",
    iconClassName: `${baseIconContainerStyles} bg-purple-900/50`,
    titleClassName: baseTitleStyles,
    className:
      `${baseCardStyles} ` + // Base mobile styles (no mb-4 for last item)
      // Desktop styles
      "md:[grid-area:stack] md:translate-x-24 md:translate-y-20 md:hover:translate-y-10",
  },
];

function TechCards() {
  return (
    <div className="flex w-full items-center justify-center py-10 px-4 md:min-h-[400px] md:p-0">
      {/* Inner Wrapper: Constrain width on mobile (max-w-xs), allow expansion on desktop */}
      {/* Ensures the container doesn't force cards wider than max-w-xs on mobile */}
      <div className="w-full max-w-xs md:max-w-none"> 
         {/* DisplayCards needs to handle layout internally */}
        <DisplayCards cards={defaultCards} />
      </div>
    </div>
  );
}

export { TechCards };
