"use client";

import React, { useRef } from 'react';
import {
  IconCode,      // Backend
  IconBrowser,   // Frontend (more specific than IconServer)
  IconPalette    // Design
} from '@tabler/icons-react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

// --- Skill Data ---
const skillsData = [
  {
    id: 'design',
    icon: IconPalette,
    title: "Graphic & UI/UX Design",
    description: "Crafting beautiful interfaces & brand identities (Figma, Adobe Suite).",
    experience: "7+ Years Experience",
    color: "purple", // Theme color for this card
    gradientFrom: "from-purple-400",
    gradientTo: "to-pink-400",
  },
  {
    id: 'frontend',
    icon: IconBrowser,
    title: "Frontend Development",
    description: "Building responsive, interactive web experiences (React, Next.js, TS).",
    experience: "4+ Years Experience",
    color: "blue",
    gradientFrom: "from-blue-400",
    gradientTo: "to-cyan-400",
  },
    {
    id: 'backend',
    icon: IconCode,
    title: "Backend Development",
    description: "Developing scalable APIs and database solutions (Node.js, Express, SQL/NoSQL).",
    experience: "3+ Years Experience",
    color: "green",
    gradientFrom: "from-emerald-400", // Using emerald instead of generic green
    gradientTo: "to-teal-400",
  },
];

// --- Main Component ---
function TechCards() {
  const containerRef = useRef(null);

  // Mouse tracking for 3D rotation
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      // Calculate mouse position relative to the center of the element
      const width = rect.width;
      const height = rect.height;
      const offsetX = event.clientX - rect.left - width / 2;
      const offsetY = event.clientY - rect.top - height / 2;
      mouseX.set(offsetX);
      mouseY.set(offsetY);
    }
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Map mouse position to rotation values (adjust sensitivity here)
  const rotateX = useTransform(mouseY, [-150, 150], [10, -10]); // Max rotation angle
  const rotateY = useTransform(mouseX, [-200, 200], [-12, 12]);

  // Add spring physics for smoother rotation transitions
  const springConfig = { stiffness: 150, damping: 20, mass: 1 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  // --- Card Variants ---
  const cardWrapperVariants = {
    hover: { scale: 1.0 }, // Prevent scaling the wrapper itself
  };

  // Function to get individual card animation variants based on index
  const getCardVariants = (index: number, total: number) => ({
    initial: {
      opacity: 0,
      y: 50,
      rotateX: 0,
      rotateY: 0,
      translateZ: 0,
    },
    animate: {
        opacity: 1,
        y: 0,
        // Base position in the stack (adjust Z for depth)
        translateZ: -index * 40, // Pushes cards back in Z-space
        rotateX: 0,
        rotateY: 0,
        transition: { delay: 0.5 + index * 0.1, duration: 0.6, ease: "easeOut" }
    },
    // Animation when hovering the *entire stack*
    stackHover: {
      // Fan out effect (adjust values for desired look)
      x: (index - (total - 1) / 2) * 30, // Spread horizontally
      z: -index * 20 + 20, // Bring forward slightly, reduce depth difference
      rotateZ: (index - (total - 1) / 2) * 5, // Slight fan rotation
      scale: 1.05, // Scale up slightly
      transition: { type: 'spring', stiffness: 200, damping: 15 }
    },
  });

  // --- Render ---
  return (
    <div className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My Spectrum of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">Expertise</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            From pixel-perfect designs to robust backend systems, I bring ideas to life across the full stack. Based in Soweto, Gauteng.
          </p>
        </div>

        {/* --- 3D Stack Container (Desktop) / Flex Container (Mobile) --- */}
        {/* `group` class enables group-hover variants */}
        <motion.div
          ref={containerRef}
          className="
            flex flex-col items-center gap-8  // Mobile: Vertical stack, gap
            md:min-h-[450px] md:relative md:flex-row md:justify-center md:items-center // Desktop: Prepare for 3D
          "
          style={{ perspective: '1200px' }} // Apply perspective for 3D only on desktop effectively via md:min-h trigger
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Stack Wrapper - Applies rotation, preserves 3D */}
          {/* On Mobile (below md): This div doesn't do much */}
          {/* On Desktop (md+): Applies 3D transforms */}
          <motion.div
            className="relative md:group w-full max-w-xs md:max-w-none" // Add group class for group-hover
            style={{
              transformStyle: "preserve-3d", // Essential for 3D children
              rotateX: springRotateX, // Apply smoothed rotation
              rotateY: springRotateY,
            }}
            variants={cardWrapperVariants}
            whileHover="stackHover" // Trigger 'stackHover' variant on children
          >
            {skillsData.map((skill, index) => {
               const totalCards = skillsData.length;
               const cardVariants = getCardVariants(index, totalCards);

              return (
                <motion.div
                  key={skill.id}
                  className={`
                    w-full md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 // Center absolutely on desktop
                    origin-center // Ensure transforms originate from the center
                    cursor-pointer
                    ${index < totalCards -1 ? 'mb-[-180px] md:mb-0' : ''} // Mobile: Negative margin for stacking preview
                  `}
                  variants={cardVariants}
                  initial="initial" // Start hidden
                  whileInView="animate" // Animate in when visible
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {/* --- Individual Card Styling --- */}
                  <div
                    className={`
                      w-full max-w-xs mx-auto md:w-[300px] lg:w-[320px] h-[220px] // Card dimensions
                      rounded-xl border border-${skill.color}-500/30
                      bg-gray-800/60 backdrop-blur-md shadow-2xl shadow-${skill.color}-900/30
                      p-6 flex flex-col justify-between relative overflow-hidden
                      transition-all duration-300 // Smooth fallback transitions
                      md:group-hover:opacity-90 md:hover:!opacity-100 // Dim others on stack hover, highlight self on card hover
                      md:hover:scale-[1.03] md:hover:border-${skill.color}-500/70 // Individual card hover scale & border highlight
                    `}
                  >
                    {/* Optional: Subtle background gradient element */}
                    <div className={`absolute -inset-4 opacity-10 group-hover/card:opacity-20 blur-xl ${skill.gradientFrom} ${skill.gradientTo} bg-gradient-to-br rounded-full transition-opacity duration-500`}></div>

                    <div className="relative z-10"> {/* Content above background element */}
                      <div className={`mb-3 inline-flex items-center justify-center p-2 rounded-lg bg-${skill.color}-500/20`}>
                         <skill.icon className={`w-6 h-6 text-${skill.color}-400`} />
                      </div>
                      <h3 className={`text-xl font-bold mb-1 text-white`}>{skill.title}</h3>
                      <p className="text-sm text-gray-300 leading-snug mb-3">{skill.description}</p>
                    </div>
                    <p className="relative z-10 text-xs font-medium text-${skill.color}-300/80 self-start">{skill.experience}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default TechCards;

