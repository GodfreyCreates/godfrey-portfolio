"use client";

// Assuming DisplayCards simply maps the cards array and renders each card
// with its respective data and className. It should NOT impose its own layout now.
import DisplayCards from "@/components/ui/display-cards"; 
import { 
  IconCode, 
  IconServer, 
  IconPalette 
} from '@tabler/icons-react';

// --- New "Blistered" Card Styles ---

// Base styles for the blistered card effect
const baseCardStyles = [
  "relative", // Position relative for potential pseudo-elements if needed later
  "bg-gradient-to-br from-neutral-800/80 to-neutral-900/90", // Dark gradient background with some transparency
  "backdrop-blur-sm", // Subtle blur effect if behind other elements or on a textured background
  "p-6", // Padding inside the card
  "rounded-2xl", // Softer, more rounded corners
  "border border-neutral-700/60", // A slightly visible border
  "shadow-lg hover:shadow-xl", // Prominent shadow, increasing on hover
  "transition-all duration-300 ease-in-out", // Smooth transitions for hover effects
  "hover:border-neutral-600/80", // Slightly change border on hover
  "hover:-translate-y-1", // Subtle lift effect on hover
  // Optional: Add a subtle inner glow/highlight effect
  // "before:absolute before:inset-0 before:rounded-2xl before:border before:border-white/10 before:opacity-50 before:content-['']", 
].join(" "); // Join the array of classes into a string

// Title styles can remain similar, adjust if needed for the new design
const baseTitleStyles = "text-lg md:text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-rose-300"; 

// Icon styles can remain similar
const baseIconContainerStyles = "mb-3 inline-flex items-center justify-center size-8 rounded-full"; 

const defaultCards = [
  {
    icon: <IconCode className="size-4 text-rose-500" />,
    title: "Backend",
    description: "Solutions with Node.js & Databases", 
    date: "2+ Years Experience",
    iconClassName: `${baseIconContainerStyles} bg-rose-950/70`, // Adjusted background darkness/opacity
    titleClassName: baseTitleStyles,
    className: baseCardStyles, // Apply the new base styles directly to each card
  },
  {
    icon: <IconServer className="size-4 text-indigo-500" />,
    title: "Frontend",
    description: "Modern web dev with React & Next.js",
    date: "3+ Years Experience",
    iconClassName: `${baseIconContainerStyles} bg-indigo-950/70`, // Adjusted background darkness/opacity
    titleClassName: baseTitleStyles,
    className: baseCardStyles, // Apply the new base styles directly to each card
  },
  {
    icon: <IconPalette className="size-4 text-purple-500" />,
    title: "Graphic Design",
    description: "Creative UI/UX with design tools",
    date: "6+ Years Experience",
    iconClassName: `${baseIconContainerStyles} bg-purple-950/70`, // Adjusted background darkness/opacity
    titleClassName: baseTitleStyles,
    className: baseCardStyles, // Apply the new base styles directly to each card
  },
];

function TechCards() {
  return (
    // Container: Provide standard padding for spacing from screen edges
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8"> 
      {/* Grid Layout Container:
        - `mx-auto max-w-7xl`: Centers the grid and limits max width on large screens.
        - `grid grid-cols-1`: Default to 1 column (mobile).
        - `sm:grid-cols-2`: Switch to 2 columns on small screens (tablets) and up.
        - `lg:grid-cols-3`: Switch to 3 columns on large screens (desktops) and up.
        - `gap-6 md:gap-8`: Defines the spacing between grid items.
      */}
      <div className="mx-auto max-w-7xl grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8"> 
        {/* DisplayCards Component Responsibility:
          Now, DisplayCards should simply iterate through the 'cards' prop
          and render each card's structure using the provided data (icon, title, etc.)
          and applying the 'className' string from the card object to the outermost
          element of each individual card. It should NOT implement grid or flex itself.
          
          Example of what DisplayCards might do internally (simplified):
          cards.map((card, index) => (
            <div key={index} className={card.className}> // Applies the baseCardStyles
               // Render icon using card.iconClassName and card.icon
               // Render title using card.titleClassName and card.title
               // Render description, date etc.
            </div>
          ))
        */}
        <DisplayCards cards={defaultCards} />
      </div>
    </div>
  );
}

export { TechCards };
