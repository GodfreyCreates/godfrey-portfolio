"use client";

import DisplayCards from "@/components/ui/display-cards"; // Assuming this component exists and works
import { 
  IconCode, 
  IconServer, 
  IconPalette 
} from '@tabler/icons-react';

// Define base styles shared by cards for better maintainability
const baseCardStyles = "w-full max-w-md p-6 border border-neutral-700 rounded-xl bg-neutral-900 shadow-lg transition-transform duration-500 ease-out";
const baseTitleStyles = "text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-rose-300";
const baseIconContainerStyles = "mb-3 inline-flex items-center justify-center size-8 rounded-full"; // Added for better icon presentation

const defaultCards = [
  {
    icon: <IconCode className="size-4 text-rose-500" />,
    title: "Backend",
    description: "Solutions with Node.js & Databases",
    date: "2+ Years Experience",
    iconClassName: `${baseIconContainerStyles} bg-rose-900/50`, // Example background for icon
    titleClassName: baseTitleStyles,
    className:
      `${baseCardStyles} mb-4 ` + // Mobile: Stack vertically with margin-bottom
      // Desktop (md and up): Apply grid stacking, remove mb, add hover/grayscale effects
      "md:mb-0 md:[grid-area:stack] md:hover:-translate-y-10 md:before:absolute md:before:w-full md:before:h-full md:before:outline-1 md:before:rounded-xl md:before:outline-border md:before:content-[''] md:before:bg-blend-overlay md:before:bg-background/50 md:grayscale md:hover:before:opacity-0 md:before:transition-opacity md:before:duration-700 md:hover:grayscale-0 md:before:left-0 md:before:top-0",
  },
  {
    icon: <IconServer className="size-4 text-indigo-500" />,
    title: "Frontend",
    description: "Modern web dev with React & Next.js",
    date: "3+ Years Experience",
    iconClassName: `${baseIconContainerStyles} bg-indigo-900/50`, // Example background for icon
    titleClassName: baseTitleStyles,
    className:
      `${baseCardStyles} mb-4 ` + // Mobile: Stack vertically with margin-bottom
      // Desktop (md and up): Apply grid stacking, translations, remove mb, add hover/grayscale effects
      "md:mb-0 md:[grid-area:stack] md:translate-x-12 md:translate-y-10 md:hover:-translate-y-1 md:before:absolute md:before:w-full md:before:h-full md:before:outline-1 md:before:rounded-xl md:before:outline-border md:before:content-[''] md:before:bg-blend-overlay md:before:bg-background/50 md:grayscale md:hover:before:opacity-0 md:before:transition-opacity md:before:duration-700 md:hover:grayscale-0 md:before:left-0 md:before:top-0",
  },
  {
    icon: <IconPalette className="size-4 text-purple-500" />,
    title: "Graphic Design",
    description: "Creative UI/UX with design tools",
    date: "6+ Years Experience",
    iconClassName: `${baseIconContainerStyles} bg-purple-900/50`, // Example background for icon
    titleClassName: baseTitleStyles,
    className:
      `${baseCardStyles} ` + // Mobile: Last item, no margin-bottom needed
      // Desktop (md and up): Apply grid stacking, translations, hover effects
      "md:[grid-area:stack] md:translate-x-24 md:translate-y-20 md:hover:translate-y-10",
  },
];

function TechCards() {
  return (
    // Container: Adjust min-height for mobile vs desktop. Add padding on mobile.
    <div className="flex w-full items-center justify-center py-10 px-4 md:min-h-[400px] md:p-0">
      {/* Inner Wrapper: Controls max-width and layout changes */}
      {/* On mobile (<md): This wrapper isn't strictly necessary if DisplayCards handles flex-col */}
      {/* On desktop (>=md): We assume DisplayCards will use a grid layout */}
      <div className="w-full max-w-md md:max-w-none">
        {/* IMPORTANT: The `DisplayCards` component likely needs modification.
          - On mobile (< md), it should render cards in a column (e.g., using `flex flex-col items-center`).
          - On desktop (>= md), it should use a grid layout that supports `[grid-area:stack]` 
            (e.g., `grid grid-cols-1 grid-rows-1 place-items-center`).
        */}
        <DisplayCards cards={defaultCards} />
      </div>
    </div>
  );
}

export { TechCards };
