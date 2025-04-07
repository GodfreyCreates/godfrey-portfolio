"use client";
import DisplayCards from "@/components/ui/display-cards";
import { 
  IconCode, 
  IconServer, 
  IconPalette 
} from '@tabler/icons-react';

// Card data with improved styling and responsive positioning
const techCards = [
  {
    icon: <IconCode className="size-5 md:size-6" />,
    title: "Backend",
    description: "Solutions with Node.js & Databases",
    date: "2+ Years Experience",
    iconClassName: "text-rose-500 transition-colors duration-300",
    titleClassName: "text-lg md:text-xl font-bold mb-2 md:mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-rose-300",
    className: `
      [grid-area:stack] 
      hover:-translate-y-2 md:hover:-translate-y-6 
      transition-all duration-500 ease-out
      relative
      before:absolute before:inset-0 before:rounded-xl 
      before:outline-1 before:outline-border 
      before:content-[''] 
      before:bg-blend-overlay before:bg-background/50 
      before:z-10
      grayscale-[80%] hover:grayscale-0 
      before:transition-opacity before:duration-500 
      hover:before:opacity-0
      sm:translate-x-0 sm:translate-y-0
      md:translate-x-0 md:translate-y-0
      lg:translate-x-0 lg:translate-y-0
    `,
  },
  {
    icon: <IconServer className="size-5 md:size-6" />,
    title: "Frontend",
    description: "Modern web dev with React & Next.js",
    date: "3+ Years Experience",
    iconClassName: "text-indigo-500 transition-colors duration-300",
    titleClassName: "text-lg md:text-xl font-bold mb-2 md:mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-rose-300",
    className: `
      [grid-area:stack] 
      translate-x-0 translate-y-0
      md:translate-x-6 md:translate-y-4
      lg:translate-x-12 lg:translate-y-10
      hover:-translate-y-2 md:hover:-translate-y-1
      transition-all duration-500 ease-out
      relative
      before:absolute before:inset-0 before:rounded-xl 
      before:outline-1 before:outline-border 
      before:content-[''] 
      before:bg-blend-overlay before:bg-background/50 
      before:z-10
      grayscale-[80%] hover:grayscale-0 
      before:transition-opacity before:duration-500 
      hover:before:opacity-0
    `,
  },
  {
    icon: <IconPalette className="size-5 md:size-6" />,
    title: "Graphic Design",
    description: "Creative UI/UX with design tools",
    date: "6+ Years Experience",
    iconClassName: "text-purple-500 transition-colors duration-300",
    titleClassName: "text-lg md:text-xl font-bold mb-2 md:mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-rose-300",
    className: `
      [grid-area:stack] 
      translate-x-0 translate-y-0
      md:translate-x-12 md:translate-y-8
      lg:translate-x-24 lg:translate-y-20
      hover:translate-y-2 md:hover:translate-y-10
      transition-all duration-500 ease-out
      relative
      before:absolute before:inset-0 before:rounded-xl 
      before:outline-1 before:outline-border 
      before:content-[''] 
      before:bg-blend-overlay before:bg-background/50 
      before:z-10
      grayscale-[80%] hover:grayscale-0 
      before:transition-opacity before:duration-500 
      hover:before:opacity-0
    `,
  },
];

function TechCards() {
  return (
    <div className="flex min-h-[250px] w-full items-center justify-center px-4 sm:px-6 overflow-hidden">
      <div className="w-full max-w-5xl mx-auto">
        <DisplayCards 
          cards={techCards} 
          containerClassName="py-8 md:py-12"
        />
      </div>
    </div>
  );
}

export { TechCards };