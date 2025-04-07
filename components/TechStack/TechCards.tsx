"use client";

import DisplayCards from "@/components/ui/display-cards"; // Assuming path
import {
  IconCode,
  IconServer,
  IconPalette
} from '@tabler/icons-react';

// --- Card Data with Responsive Layout Classes ---
const responsiveCards = [
  // Card 1: Backend
  {
    icon: <IconCode className="size-4 text-rose-500/80" />,
    title: "Backend",
    description: "Solutions with Node.js & Databases",
    date: "2+ Years Experience",
    iconClassName: "text-rose-500",
    titleClassName: "text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-rose-300",
    className: `
      w-full max-w-sm md:max-w-[280px] lg:max-w-[300px]  // Responsive width control
      relative md:absolute md:left-1/2 // Base positioning for desktop stack
      md:transform md:-translate-x-[70%] md:translate-y-10 md:z-10 // Desktop: Back, left position & Z
      md:hover:-translate-y-2 md:hover:z-40 // Desktop: Subtle hover lift & bring to front
      transition-all duration-300 ease-out // Ensure transitions apply
      before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0 // Original styling kept
    `,
  },
  // Card 2: Frontend
  {
    icon: <IconServer className="size-4 text-rose-500/80" />,
    title: "Frontend",
    description: "Modern web dev with React & Next.js",
    date: "3+ Years Experience",
    iconClassName: "text-indigo-500",
    titleClassName: "text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-rose-300",
    className: `
      w-full max-w-sm md:max-w-[280px] lg:max-w-[300px]
      relative md:absolute md:left-1/2
      md:transform md:-translate-x-[50%] md:translate-y-5 md:z-20 // Desktop: Middle position & Z
      md:hover:-translate-y-2 md:hover:z-40
      transition-all duration-300 ease-out
      before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0
    `,
  },
  // Card 3: Graphic Design
  {
    icon: <IconPalette className="size-4 text-rose-500/80" />,
    title: "Graphic Design",
    description: "Creative UI/UX with design tools",
    date: "6+ Years Experience",
    iconClassName: "text-purple-500",
    titleClassName: "text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-rose-300",
    className: `
      w-full max-w-sm md:max-w-[280px] lg:max-w-[300px]
      relative md:absolute md:left-1/2
      md:transform md:-translate-x-[30%] md:z-30 // Desktop: Front, right position & Z
      md:hover:-translate-y-2 md:hover:z-40
      transition-all duration-300 ease-out
      // Note: Removed original translate-x-24 translate-y-20 hover:translate-y-10 here
      // Kept other original styles if needed, adding grayscale/overlay like others for consistency:
      before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0
    `,
  },
];

function TechCards() {
  return (
    // Container: Added padding, adjusted min-height for stack space on desktop
    <div className="flex min-h-[auto] md:min-h-[350px] w-full items-center justify-center py-10 md:py-16">
      {/* Inner Wrapper: Controls layout */}
      <div className="
        w-full max-w-lg px-4 // Limit width slightly on mobile, add padding
        flex flex-col items-center gap-6 // Mobile: Vertical stack
        md:max-w-none md:px-0 // Desktop: Remove max-width, padding
        md:relative md:h-[300px] md:w-[400px] // Desktop: Set relative context, height, and width for the stack
      ">
        {/* DisplayCards receives data with responsive classes already embedded */}
        <DisplayCards cards={responsiveCards} />
      </div>
    </div>
  );
}

export { TechCards };
