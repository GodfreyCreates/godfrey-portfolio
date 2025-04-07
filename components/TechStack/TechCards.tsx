"use client";

import { 
  IconCode, 
  IconServer, 
  IconPalette 
} from '@tabler/icons-react';
import React from 'react'; // Import React for potential fragments or hooks later

// --- Card Data (Remains the same structure) ---
const cardData = [
  {
    id: "backend", // Added unique ID for key prop
    icon: <IconCode className="size-6 text-rose-400" />, // Slightly larger icon
    title: "Backend Development",
    description: "Robust server-side solutions using Node.js, databases, and APIs.",
    experience: "2+ Years Experience",
    accentColor: "border-rose-500/50", // Accent color for border/highlight
    iconBg: "bg-rose-900/30", // Subtle icon background
  },
  {
    id: "frontend",
    icon: <IconServer className="size-6 text-indigo-400" />,
    title: "Frontend Development",
    description: "Modern, interactive UIs built with React, Next.js, and TypeScript.",
    experience: "3+ Years Experience",
    accentColor: "border-indigo-500/50",
    iconBg: "bg-indigo-900/30",
  },
  {
    id: "design",
    icon: <IconPalette className="size-6 text-purple-400" />,
    title: "UI/UX & Design",
    description: "User-centric and visually appealing interfaces crafted with Figma & Adobe Suite.",
    experience: "6+ Years Experience",
    accentColor: "border-purple-500/50",
    iconBg: "bg-purple-900/30",
  },
];

// --- New TechCards Component ---
function TechCards() {
  return (
    // Section Container: Provides background and vertical padding
    <section className="bg-gradient-to-b from-slate-900 to-slate-950 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Optional Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            My Expertise
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            Bringing ideas to life with modern technology and design principles.
          </p>
        </div>

        {/* Responsive Grid Container */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Map over cardData to render each card */}
          {cardData.map((card) => (
            <div 
              key={card.id}
              // --- Blistered Card Styling ---
              className={`
                relative group overflow-hidden            # Base positioning and group for hover states
                rounded-2xl bg-slate-800/60               # Slightly transparent background, soft corners
                backdrop-blur-md                         # Blur effect for depth
                p-6                                      # Inner padding
                border border-slate-700/80                # Base border
                shadow-lg                                # Base shadow for elevation
                transition-all duration-300 ease-in-out  # Smooth transitions
                hover:shadow-xl hover:shadow-black/40     # Increase shadow intensity on hover
                hover:border-slate-600/90                # Change border slightly on hover
                hover:scale-[1.03]                      # Scale up slightly on hover
              `}
            >
              {/* Optional: Accent Border Highlight */}
              <div className={`absolute inset-x-0 top-0 h-1 ${card.accentColor.replace('border-', 'bg-').replace('/50', '/70')} opacity-50 group-hover:opacity-100 transition-opacity duration-300`}></div>

              {/* Icon Container */}
              <div className={`mb-4 inline-flex items-center justify-center size-12 rounded-lg ${card.iconBg}`}>
                {card.icon}
              </div>

              {/* Card Content */}
              <h3 className="text-xl font-semibold leading-7 text-white">
                {card.title}
              </h3>
              <p className="mt-2 text-base leading-7 text-slate-300">
                {card.description}
              </p>
              <p className={`mt-4 text-sm font-medium ${card.accentColor.replace('border-', 'text-').replace('/50', '/90')} `}> 
                {/* Using accent color for experience text */}
                {card.experience}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { TechCards };

