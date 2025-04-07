"use client";

import { 
  IconCode, 
  IconServer, 
  IconPalette 
} from '@tabler/icons-react';
import React from 'react';

// --- Card Data (Remains the same structure) ---
const cardData = [
  {
    id: "backend", 
    icon: <IconCode className="size-5 text-rose-400" />, // Icon size reduced
    title: "Backend Development",
    description: "Robust server-side solutions using Node.js, databases, and APIs.",
    experience: "2+ Years Experience",
    accentColor: "border-rose-500/50", 
    iconBg: "bg-rose-900/30", 
  },
  {
    id: "frontend",
    icon: <IconServer className="size-5 text-indigo-400" />, // Icon size reduced
    title: "Frontend Development",
    description: "Modern, interactive UIs built with React, Next.js, and TypeScript.",
    experience: "3+ Years Experience",
    accentColor: "border-indigo-500/50",
    iconBg: "bg-indigo-900/30",
  },
  {
    id: "design",
    icon: <IconPalette className="size-5 text-purple-400" />, // Icon size reduced
    title: "UI/UX & Design",
    description: "User-centric and visually appealing interfaces crafted with Figma & Adobe Suite.",
    experience: "6+ Years Experience",
    accentColor: "border-purple-500/50",
    iconBg: "bg-purple-900/30",
  },
];

// --- TechCards Component with Smaller Cards ---
function TechCards() {
  return (
    // Section Container: Provides background and vertical padding (Unchanged)
    <section className="bg-gradient-to-b from-slate-900 to-slate-950 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Optional Section Header (Unchanged) */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            My Expertise
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            Bringing ideas to life with modern technology and design principles.
          </p>
        </div>

        {/* Responsive Grid Container (Unchanged) */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Map over cardData to render each smaller card */}
          {cardData.map((card) => (
            <div 
              key={card.id}
              // --- Blistered Card Styling (Adjusted for smaller size) ---
              className={`
                relative group overflow-hidden            
                rounded-xl bg-slate-800/60               # Reduced rounding slightly (optional)
                backdrop-blur-md                         
                p-4                                      # Padding reduced from p-6
                border border-slate-700/80                
                shadow-lg                                
                transition-all duration-300 ease-in-out  
                hover:shadow-xl hover:shadow-black/40     
                hover:border-slate-600/90                
                hover:scale-[1.03]                      
              `}
            >
              {/* Optional: Accent Border Highlight (Unchanged) */}
              <div className={`absolute inset-x-0 top-0 h-1 ${card.accentColor.replace('border-', 'bg-').replace('/50', '/70')} opacity-50 group-hover:opacity-100 transition-opacity duration-300`}></div>

              {/* Icon Container (Size reduced) */}
              <div className={`mb-3 inline-flex items-center justify-center size-10 rounded-md ${card.iconBg}`}> 
                {/* size-10 (was 12), rounded-md (was lg), mb-3 (was 4) */}
                {card.icon} 
              </div>

              {/* Card Content (Font sizes and margins reduced) */}
              <h3 className="text-lg font-semibold leading-6 text-white"> 
                {/* text-lg (was xl), leading-6 (was 7) */}
                {card.title}
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-300"> 
                {/* text-sm (was base), mt-1 (was 2), leading-6 (was 7) */}
                {card.description}
              </p>
              <p className={`mt-3 text-xs font-medium ${card.accentColor.replace('border-', 'text-').replace('/50', '/90')} `}> 
                {/* text-xs (was sm), mt-3 (was 4) */}
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
