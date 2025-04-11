"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

// Custom particle system component
const ParticleField = ({ density = 30 }) => {
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    const newParticles = Array.from({ length: density }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 5 + 1,
      speedX: (Math.random() - 0.5) * 0.2,
      speedY: (Math.random() - 0.5) * 0.2,
      opacity: Math.random() * 0.5 + 0.1,
      color: [
        "indigo", "rose", "violet", "amber", "cyan"
      ][Math.floor(Math.random() * 5)]
    }));
    
    setParticles(newParticles);
  }, [density]);
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full bg-${particle.color}-500/[0.15] backdrop-blur-[1px] border border-white/[0.08]`}
          initial={{
            x: `${particle.x}%`,
            y: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            opacity: 0,
          }}
          animate={{
            x: [`${particle.x}%`, `${particle.x + particle.speedX * 100}%`],
            y: [`${particle.y}%`, `${particle.y + particle.speedY * 100}%`],
            opacity: [0, particle.opacity, 0],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Decorative floating circles component
const FloatingCircle = ({ size, x, y, delay, color }) => {
  return (
    <motion.div
      className={`absolute rounded-full bg-gradient-to-r from-${color}-500/[0.15] to-transparent backdrop-blur-[2px] border border-white/[0.1]`}
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        top: `${y}%`,
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        x: [0, 15, -10, 0],
        y: [0, -10, 15, 0],
      }}
      transition={{
        delay: delay,
        duration: 20,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        opacity: { duration: 3 },
        scale: { duration: 3 },
      }}
    >
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]" />
    </motion.div>
  );
};

// Animated text outline component
const TextOutline = ({ text, className }) => {
  return (
    <div className={cn("relative inline-block", className)}>
      <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
        {text}
      </span>
      <motion.span 
        className="absolute inset-0 text-transparent bg-clip-text [-webkit-text-stroke:1px_rgba(255,255,255,0.2)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        {text}
      </motion.span>
    </div>
  );
};

// Animated background gradient
const AnimatedBackground = () => {
  return (
    <motion.div 
      className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05]"
      animate={{
        background: [
          "linear-gradient(to bottom right, rgba(99, 102, 241, 0.05), transparent, rgba(244, 114, 182, 0.05))",
          "linear-gradient(to bottom right, rgba(139, 92, 246, 0.05), transparent, rgba(249, 168, 212, 0.05))",
          "linear-gradient(to bottom right, rgba(99, 102, 241, 0.05), transparent, rgba(244, 114, 182, 0.05))",
        ]
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

// Animated grid lines component
const GridLines = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
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

// 3D Parallax container
const ParallaxContainer = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full perspective-[1000px]"
    >
      <motion.div
        className="w-full h-full"
        animate={{
          rotateX: mousePosition.y * -5,
          rotateY: mousePosition.x * 5,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

// Main redesigned hero component
function HeroGeometric({
  badge = "Design Collective",
  title1 = "Elevate Your Digital Vision",
  title2 = "Crafting Exceptional Websites",
}) {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
      {/* Background elements */}
      <AnimatedBackground />
      <GridLines />
      <ParticleField density={40} />
      
      {/* Decorative elements */}
      <FloatingCircle size={300} x={-5} y={20} delay={0.2} color="indigo" />
      <FloatingCircle size={200} x={85} y={65} delay={0.5} color="rose" />
      <FloatingCircle size={150} x={70} y={15} delay={0.8} color="violet" />
      <FloatingCircle size={100} x={25} y={75} delay={1.1} color="amber" />
      <FloatingCircle size={120} x={15} y={10} delay={1.4} color="cyan" />
      
      {/* Content container */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        <ParallaxContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left column: Text content */}
            <div className="text-left space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08]"
              >
                <motion.div 
                  className="h-2 w-2 rounded-full bg-rose-500/80"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <span className="text-sm text-white/60 tracking-wider font-light">
                  {badge}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.5 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight space-y-4"
              >
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                  {title1}
                </span>
                <TextOutline text={title2} className="mt-2" />
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.7 }}
                className="text-base md:text-lg text-white/40 leading-relaxed font-light tracking-wide max-w-xl"
              >
                Crafting exceptional digital experiences through
                innovative design and cutting-edge technology.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.9 }}
                className="flex flex-wrap gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 rounded-md bg-gradient-to-r from-indigo-500/20 to-rose-500/20 backdrop-blur-sm border border-white/10 text-white font-medium relative overflow-hidden group"
                >
                  <span className="relative z-10">Get Started</span>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-indigo-500/40 to-rose-500/40 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 rounded-md border border-white/10 text-white/70 font-medium hover:text-white/90 transition-colors"
                >
                  Learn More
                </motion.button>
              </motion.div>
            </div>
            
            {/* Right column: Geometric visual element */}
            <div className="hidden md:block relative h-[500px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotateZ: -10 }}
                animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
                transition={{ duration: 1.5, delay: 0.8 }}
                className="absolute inset-0"
              >
                <div className="relative w-full h-full">
                  {/* Abstract geometric elements */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-8 border-indigo-500/10"
                    animate={{ 
                      rotate: [0, 360],
                    }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  />
                  
                  <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border-4 border-dashed border-rose-500/10"
                    animate={{ 
                      rotate: [360, 0],
                    }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* Geometric shapes */}
                  {Array.from({ length: 5 }).map((_, i) => {
                    const size = 120 - i * 20;
                    const delay = i * 0.2;
                    const angle = (i * 72) * (Math.PI / 180);
                    const radius = 150;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;
                    
                    return (
                      <motion.div
                        key={i}
                        className={`absolute top-1/2 left-1/2 w-${size} h-${size} bg-gradient-to-br from-${['indigo', 'rose', 'violet', 'amber', 'cyan'][i % 5]}-500/[0.15] to-transparent rounded-lg backdrop-blur-[1px] border-2 border-white/[0.1]`}
                        style={{ width: size, height: size }}
                        initial={{ 
                          opacity: 0,
                          x: 0,
                          y: 0,
                          rotate: i * 30,
                        }}
                        animate={{ 
                          opacity: 0.8,
                          x: x,
                          y: y,
                          rotate: [i * 30, i * 30 + 360],
                        }}
                        transition={{
                          duration: 20 + i * 5,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut",
                          delay: delay,
                          opacity: { duration: 2, delay: delay + 0.5 },
                        }}
                      >
                        <div className="absolute inset-0 rounded-lg bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]" />
                      </motion.div>
                    );
                  })}
                  
                  {/* Central element */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-gradient-to-r from-indigo-500/20 to-rose-500/20 backdrop-blur-md border border-white/20"
                    animate={{ 
                      boxShadow: [
                        "0 0 20px 0 rgba(255,255,255,0.1)",
                        "0 0 30px 10px rgba(255,255,255,0.2)",
                        "0 0 20px 0 rgba(255,255,255,0.1)",
                      ]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3),transparent_70%)]" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </ParallaxContainer>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#030303] to-transparent pointer-events-none" />
    </div>
  );
}

export { HeroGeometric };