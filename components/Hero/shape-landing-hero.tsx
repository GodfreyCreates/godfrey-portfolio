"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
// Removed IconCircle import as it's not used
import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

// --- Define Props Interface for ElegantShape ---
interface ElegantShapeProps {
    className?: string; // Make optional if it might not be passed, required if it always should be
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
    animate?: boolean;
}

// --- Apply Props Interface to ElegantShape ---
function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
    animate = true,
}: ElegantShapeProps) { // <-- Type annotation added here
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)} // cn usually handles undefined className gracefully
        >
            <motion.div
                animate={animate ? {
                    y: [0, 15, 0],
                } : {}}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                style={{
                    width,
                    height,
                }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[2px] border-2 border-white/[0.15]",
                        "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
                    )}
                />
            </motion.div>
        </motion.div>
    );
}

// Animated grid lines component (no props, so no changes needed)
const GridLines = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      <div className="absolute inset-0 grid grid-cols-12 gap-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={`col-${i}`}
            className="h-full w-px bg-white/[0.03]"
            initial={{ opacity: 0, height: "0%" }}
            animate={{ opacity: 1, height: "100%" }}
            transition={{ duration: 2, delay: i * 0.1 }}
          />
        ))}
      </div>
      <div className="absolute inset-0 grid grid-rows-12 gap-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={`row-${i}`}
            className="w-full h-px bg-white/[0.03]"
            initial={{ opacity: 0, width: "0%" }}
            animate={{ opacity: 1, width: "100%" }}
            transition={{ duration: 2, delay: i * 0.1 }}
          />
        ))}
      </div>
    </div>
  );
};

// --- Define Props Interface for OrbitElement ---
interface OrbitElementProps {
    radius: number;
    speed: number;
    size: number;
    color: string; // Be mindful: Tailwind needs full class names, dynamic parts might need specific handling or safelisting
    delay: number;
    rotationOffset?: number;
}

// --- Apply Props Interface to OrbitElement ---
const OrbitElement = ({
    radius,
    speed,
    size,
    color,
    delay,
    rotationOffset = 0
}: OrbitElementProps) => { // <-- Type annotation added here
  // NOTE: Dynamically constructing Tailwind classes like `bg-${color}-500/40` might
  // not work reliably with purging unless you safelist potential color classes
  // or use inline styles for the color part.
  // Example using inline style for background (safer):
  // const backgroundColor = `${resolveConfig(tailwindConfig).theme.colors[color][500]}66`; // 66 is hex for 40% opacity
  // style={{ backgroundColor }}
  // For simplicity, leaving the class name as is, but be aware of potential issues.
  return (
    <motion.div
      className="absolute top-1/2 left-1/2"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        rotate: [rotationOffset, rotationOffset + 360],
      }}
      transition={{
        rotate: { duration: speed, repeat: Infinity, ease: "linear" },
        opacity: { duration: 1, delay }
      }}
    >
      <motion.div
        className={`absolute w-4 h-4 rounded-full bg-${color}-500/40`} // Potential Tailwind Purge Issue
        style={{
          width: size,
          height: size,
          top: -size/2,
          left: radius - size/2,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * 2,
        }}
      >
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3),transparent_70%)]" />
      </motion.div>
    </motion.div>
  );
};

// --- Define Props Interface for HeroGeometric ---
interface HeroGeometricProps {
    badge?: string;
    title1?: string;
    title2?: string;
}

// --- Apply Props Interface to HeroGeometric ---
function HeroGeometric({
    badge = "Design Collective",
    title1 = "Elevate Your Digital Vision",
    title2 = "Crafting Exceptional Websites",
}: HeroGeometricProps) { // <-- Type annotation added here
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({ // Add type for custom prop 'i'
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1],
            },
        }),
    };

    const containerRef = useRef<HTMLDivElement>(null); // Add type for useRef
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => { // Add type for event
            if (!containerRef.current) return;
            const { left, top, width, height } = containerRef.current.getBoundingClientRect();
            // Ensure division by zero is avoided if width/height could be 0
            const x = width ? (e.clientX - left) / width - 0.5 : 0;
            const y = height ? (e.clientY - top) / height - 0.5 : 0;
            setMousePosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []); // Empty dependency array is correct here

    return (
        <div
            ref={containerRef}
            className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]"
        >
            {/* ... rest of the JSX remains the same ... */}

             {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

            {/* Grid lines */}
            <GridLines />

            {/* Shapes and Orbital System */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Elegant Shapes */}
                <ElegantShape
                    delay={0.3} width={600} height={140} rotate={12} gradient="from-indigo-500/[0.15]"
                    className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]" />
                <ElegantShape
                    delay={0.5} width={500} height={120} rotate={-15} gradient="from-rose-500/[0.15]"
                    className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]" />
                <ElegantShape
                    delay={0.4} width={300} height={80} rotate={-8} gradient="from-violet-500/[0.15]"
                    className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]" />
                <ElegantShape
                    delay={0.6} width={200} height={60} rotate={20} gradient="from-amber-500/[0.15]"
                    className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]" />
                <ElegantShape
                    delay={0.7} width={150} height={40} rotate={-25} gradient="from-cyan-500/[0.15]"
                    className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]" />

                 {/* Orbital System */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-60">
                    <motion.div
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
                        animate={{ rotateX: mousePosition.y * -5, rotateY: mousePosition.x * 5 }}
                        transition={{ type: "spring", stiffness: 50, damping: 20 }}
                        style={{ perspective: "1000px" }}
                    >
                        {/* Rings */}
                        <motion.div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-indigo-500/20"
                            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 0.6, scale: 1, rotate: [0, 360] }}
                            transition={{ duration: 60, repeat: Infinity, ease: "linear", opacity: { duration: 2 }, scale: { duration: 2 }}} />
                        <motion.div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-rose-500/20"
                            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 0.5, scale: 1, rotate: [0, -360] }}
                            transition={{ duration: 50, repeat: Infinity, ease: "linear", opacity: { duration: 2, delay: 0.3 }, scale: { duration: 2, delay: 0.3 }}} />
                        <motion.div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-violet-500/20"
                             initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 0.4, scale: 1, rotate: [0, 360] }}
                             transition={{ duration: 40, repeat: Infinity, ease: "linear", opacity: { duration: 2, delay: 0.6 }, scale: { duration: 2, delay: 0.6 }}} />
                        {/* Elements */}
                        <OrbitElement radius={192} speed={30} size={24} color="indigo" delay={0.2} rotationOffset={0} />
                        <OrbitElement radius={192} speed={30} size={16} color="indigo" delay={0.5} rotationOffset={180} />
                        <OrbitElement radius={160} speed={25} size={20} color="rose" delay={0.3} rotationOffset={45} />
                        <OrbitElement radius={160} speed={25} size={14} color="rose" delay={0.6} rotationOffset={225} />
                        <OrbitElement radius={128} speed={20} size={18} color="violet" delay={0.4} rotationOffset={90} />
                        <OrbitElement radius={128} speed={20} size={12} color="violet" delay={0.7} rotationOffset={270} />
                    </motion.div>
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-5xl px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div custom={0} variants={fadeUpVariants} initial="hidden" animate="visible"
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12">
                        <motion.div className="h-2 w-2 rounded-full bg-rose-500/80"
                            animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity }} />
                        <span className="text-sm text-white/60 tracking-wide">{badge}</span>
                    </motion.div>

                    {/* Titles */}
                     <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
                        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
                            <motion.span className="block bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80"
                                animate={{ y: [0, -5, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
                                {title1}
                            </motion.span>
                            <motion.span className={cn("relative block bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300")}
                                animate={{ y: [0, -5, 0] }} transition={{ duration: 5, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}>
                                {title2}
                                <motion.span className="absolute inset-0 text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.1)]"
                                    animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                                    {title2}
                                </motion.span>
                            </motion.span>
                        </h1>
                    </motion.div>

                    {/* Description */}
                    <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
                        <p className="text-base sm:text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
                            Crafting exceptional digital experiences through
                            innovative design and cutting-edge technology.
                        </p>
                    </motion.div>

                    {/* Buttons */}
                    <motion.div custom={3} variants={fadeUpVariants} initial="hidden" animate="visible"
                        className="flex flex-wrap items-center justify-center gap-4">
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}
                            className="px-6 py-3 rounded-md bg-gradient-to-r from-indigo-500/20 to-rose-500/20 backdrop-blur-sm border border-white/10 text-white font-medium relative overflow-hidden group">
                            <span className="relative z-10">Get Started</span>
                            <motion.div className="absolute inset-0 bg-gradient-to-r from-indigo-500/40 to-rose-500/40 opacity-0 group-hover:opacity-100"
                                transition={{ duration: 0.3 }} />
                        </motion.button>
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}
                            className="px-6 py-3 rounded-md border border-white/10 text-white/70 font-medium hover:text-white/90 transition-colors">
                            Learn More
                        </motion.button>
                    </motion.div>
                </div>
            </div>

             {/* Bottom Fade */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
        </div>
    );
}

export { HeroGeometric }; // Keep the export name as is
