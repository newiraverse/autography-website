'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface GrowthCard {
  title: string;
  description: string;
}

const growthCards: GrowthCard[] = [
  {
    title: "AI-Powered Self-Discovery",
    description: "Transform your journal entries into meaningful insights with advanced AI analysis. Discover patterns in your thoughts and emotions that guide personal growth."
  },
  {
    title: "Authentic Community Connection", 
    description: "Connect with like-minded individuals who share your passion for self-reflection. Build meaningful relationships through genuine storytelling and shared experiences."
  },
  {
    title: "Mindful Digital Balance",
    description: "Practice intentional journaling while staying aware of your digital wellbeing. Balance self-expression with mindful technology use for a healthier lifestyle."
  }
];

export default function PersonalGrowthSection() {
  const [currentOrder, setCurrentOrder] = useState([0, 1, 2]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOrder(prev => {
        // Move the first card to the end
        const newOrder = [...prev];
        const firstCard = newOrder.shift();
        newOrder.push(firstCard!);
        return newOrder;
      });
    }, 4000); // Slower rotation (4 seconds) to see the movement clearly

    return () => clearInterval(interval);
  }, []);

  const getCardPosition = (index: number) => {
    switch (index) {
      case 0: return { zIndex: 30, top: 0, rotate: -3, scale: 1, opacity: 1 };
      case 1: return { zIndex: 20, top: 80, rotate: 2, scale: 0.95, opacity: 0.8 };
      case 2: return { zIndex: 10, top: 160, rotate: -1, scale: 0.9, opacity: 0.6 };
      default: return { zIndex: 10, top: 160, rotate: 0, scale: 0.9, opacity: 0.6 };
    }
  };

  return (
    <section className="py-4 sm:py-6 bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start min-h-[280px]">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 mt-20 lg:mt-24"
          >
            <div className="space-y-2">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-400 leading-tight">
                Personal growth
              </h2>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-tight">
                on autopilot
              </h2>
            </div>
            
            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-lg">
              Get tailored improvement tips, customized to your unique journey.
            </p>
          </motion.div>

          {/* Right Side - Stacked Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col items-center justify-start pt-16"
          >
            <div className="relative w-full max-w-md">
              {currentOrder.map((cardIndex, positionIndex) => {
                const card = growthCards[cardIndex];
                const position = getCardPosition(positionIndex);
                
                return (
                  <motion.div
                    key={cardIndex}
                    layout
                    initial={false}
                    animate={{
                      zIndex: position.zIndex,
                      y: position.top,
                      rotate: position.rotate,
                      scale: position.scale,
                      opacity: position.opacity,
                    }}
                    transition={{
                      duration: 1.2,
                      type: "spring",
                      stiffness: 80,
                      damping: 15,
                      delay: positionIndex * 0.1
                    }}
                    className="absolute w-full bg-white rounded-3xl p-6 shadow-2xl border border-gray-200 transform-gpu"
                    style={{
                      transformOrigin: 'center bottom',
                      willChange: 'transform, opacity'
                    }}
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {card.description}
                    </p>
                  </motion.div>
                );
              })}
              {/* Spacer to maintain container height */}
              <div className="h-[320px] w-full"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
