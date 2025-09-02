'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Quote, ArrowRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  content: string;
  datePosted: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Cam",
    location: "United States",
    content: "Autography has been an incredibly valuable tool in helping me become more focused and insightful in my journaling. I'm incredibly grateful for Autography and the positive impact it's had on my life. I'm excited to see how the app continues to evolve and grow, and I look forward to being a part of that journey!",
    datePosted: "Aug 15, 2024"
  },
  {
    id: 2,
    name: "Blu",
    location: "Canada", 
    content: "Autography feels like having a mental supercomputer and an emotional thermometer. I can access mental models and frameworks that keep me focused and on track with various goals. This is easily worth thousands of having a personal coach with you 24 hours a day. I can train my mind to think in new ways and come up with new ideas. Analysis tools alone are powerful in their own right and my favorite is it's simple to use.",
    datePosted: "Jul 28, 2024"
  },
  {
    id: 3,
    name: "Desmond Wood",
    location: "United States",
    content: "Autography seems like a quintessential example of a skillful utilization of AI for the training of the human mind and enhancement of the human mind. I look forward to using Autography.",
    datePosted: "Aug 3, 2024"
  },
  {
    id: 4,
    name: "Sarah Chen",
    location: "Singapore",
    content: "The AI insights have completely transformed how I reflect on my daily experiences. What used to be scattered thoughts are now meaningful patterns that guide my personal growth.",
    datePosted: "Jul 22, 2024"
  },
  {
    id: 5,
    name: "Marcus Johnson",
    location: "United Kingdom", 
    content: "I've tried many journaling apps, but Autography's community features set it apart. Connecting with like-minded individuals has been invaluable for my mental health.",
    datePosted: "Aug 10, 2024"
  },
  {
    id: 6,
    name: "Emma Thompson",
    location: "Australia",
    content: "The daily prompts and AI analysis have helped me understand myself better than years of traditional journaling. It's like having a personal growth companion.",
    datePosted: "Jul 30, 2024"
  }
];

export default function TestimonialsSection() {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Duplicate testimonials for seamless infinite scroll
  const allTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
            <Quote className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What our users say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Join thousands of users who have transformed their journaling experience with Autography
          </p>
        </div>

        {/* Infinite Scroll Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <motion.div
              ref={containerRef}
              className="flex gap-6"
              animate={{
                x: isPaused ? undefined : [0, -50 * testimonials.length + '%']
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: testimonials.length * 12, // 12 seconds per testimonial for slow movement
                  ease: "linear"
                }
              }}
              style={{ width: 'fit-content' }}
            >
              {allTestimonials.map((testimonial, index) => (
                <TestimonialCard 
                  key={`${testimonial.id}-${Math.floor(index / testimonials.length)}`}
                  testimonial={testimonial}
                />
              ))}
            </motion.div>
          </div>

          {/* Fade edges for smooth appearance */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-50 to-transparent dark:from-gray-900 pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-50 to-transparent dark:from-gray-900 pointer-events-none z-10" />
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <motion.a
            href="/testimonials"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors group cursor-pointer"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <ArrowRight className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
            <span>Read all customer stories</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}

// Separate TestimonialCard component for better organization
function TestimonialCard({ testimonial }: { testimonial: any }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldTruncate = testimonial.content.length > 180;
  const displayContent = isExpanded || !shouldTruncate 
    ? testimonial.content 
    : testimonial.content.substring(0, 180) + '...';

  return (
    <motion.div
      className="flex-shrink-0 w-80 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      {/* Quote Icon */}
      <div className="flex items-center mb-4">
        <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
          <Quote className="w-4 h-4 text-blue-600 dark:text-blue-400" />
        </div>
      </div>

      {/* Content */}
      <div className="mb-6">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
          "{displayContent}"
        </p>
        
        {shouldTruncate && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-xs font-medium transition-colors"
          >
            {isExpanded ? 'Show less' : 'Read more'}
          </button>
        )}
      </div>

      {/* Author */}
      <div className="flex items-center justify-between pt-4">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gray-900 dark:bg-gray-600 rounded-full flex items-center justify-center mr-3">
            <span className="text-white text-sm font-semibold">
              {testimonial.name.split(' ').map((n: string) => n[0]).join('')}
            </span>
          </div>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white text-sm">
              {testimonial.name}
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-xs">
              {testimonial.location}
            </p>
          </div>
        </div>
        <p className="text-gray-400 dark:text-gray-500 text-xs">
          {testimonial.datePosted}
        </p>
      </div>
    </motion.div>
  );
}
