"use client";

import DisplayCards from "@/components/ui/display-cards";
import { 
  IconCode, 
  IconServer, 
  IconPalette 
} from '@tabler/icons-react';

const defaultCards = [
  {
    icon: <IconCode className="size-4 text-rose-500/80" />,
    title: "Backend",
    description: "Solutions with Node.js & Databases",
    date: "2+ Years Experience",
    iconClassName: "text-rose-500",
    titleClassName: "text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-rose-300",
    className:
      "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <IconServer className="size-4 text-rose-500/80" />,
    title: "Frontend",
    description: "Modern web dev with React & Next.js",
    date: "3+ Years Experience",
    iconClassName: "text-indigo-500",
    titleClassName: "text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-rose-300",
    className:
      "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <IconPalette className="size-4 text-rose-500/80" />,
    title: "Graphic Design",
    description: "Creative UI/UX with design tools",
    date: "6+ Years Experience",
    iconClassName: "text-purple-500",
    titleClassName: "text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-rose-300",
    className:
      "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10",
  },
];

function TechCards() {
  return (
    <div className="flex min-h-[250px] w-full items-center justify-center">
      <div className="w-full">
        <DisplayCards cards={defaultCards} />
      </div>
    </div>
  );
}

export { TechCards };
