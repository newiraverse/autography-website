"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Hero } from '@/components/Hero';
import FAQSection from '@/components/FAQSection';
import PersonalGrowthSection from '@/components/PersonalGrowthSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Hero />
      
      {/* Video and Content Section */}
      <section className="-mt-48 bg-background relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Video Section - Left Side (Green Box Area) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-white -ml-8 lg:-ml-16 z-30"
            >
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/hero_section_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>

            {/* Content Section - Right Side (Red Box Area) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4 text-center flex flex-col justify-center aspect-video h-full bg-gradient-to-b from-background to-muted/20 backdrop-blur-sm rounded-2xl p-6 relative z-30"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-black dark:text-white">
                Write what your mind whisper
              </h2>
              
              <p className="text-base sm:text-lg text-black dark:text-white leading-relaxed max-w-md mx-auto">
                Capture fleeting thoughts and transform them into meaningful expressions. 
                Let your subconscious speak through words that flow naturally from heart to paper.
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex justify-start -mt-2 max-w-md mx-auto"
              >
                <Link 
                  href="/blog/write-what-you-whisper" 
                  className="inline-flex items-center gap-2 text-base font-normal text-blue-400 hover:text-blue-500 transition-colors group"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 -rotate-45 text-blue-400" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Second Video and Content Section */}
      <section className="py-16 bg-background relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content Section - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4 text-center flex flex-col justify-center aspect-video h-full bg-gradient-to-b from-background to-muted/20 backdrop-blur-sm rounded-2xl p-6 relative z-30"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-black dark:text-white">
                Authentic social circle
              </h2>
              
              <p className="text-base sm:text-lg text-black dark:text-white leading-relaxed max-w-md mx-auto">
                Connect with like-minded individuals who share your passion for self-reflection and personal growth. 
                Build meaningful relationships through authentic storytelling and shared experiences.
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex justify-start -mt-2 max-w-md mx-auto"
              >
                <Link 
                  href="/blog/authentic-social-circle" 
                  className="inline-flex items-center gap-2 text-base font-normal text-blue-400 hover:text-blue-500 transition-colors group"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 -rotate-45 text-blue-400" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Image Section - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-white -mr-8 lg:-mr-16 z-30"
            >
              <img
                src="/1.jpg"
                alt="Authentic social circle"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Third Video and Content Section */}
      <section className="py-16 bg-background relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Section - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-white -ml-8 lg:-ml-16 z-30"
            >
              <img
                src="/2.png"
                alt="Stay connected, stay aware"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Content Section - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4 text-center flex flex-col justify-center aspect-video h-full bg-gradient-to-b from-background to-muted/20 backdrop-blur-sm rounded-2xl p-6 relative z-30"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-black dark:text-white">
                Stay connected, stay aware
              </h2>
              
              <p className="text-base sm:text-lg text-black dark:text-white leading-relaxed max-w-md mx-auto">
                Maintain meaningful connections while staying mindful of your digital wellbeing. 
                Balance social engagement with personal reflection for a healthier, more intentional lifestyle.
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex justify-start -mt-2 max-w-md mx-auto"
              >
                <Link 
                  href="/blog/stay-connected-stay-aware" 
                  className="inline-flex items-center gap-2 text-base font-normal text-blue-400 hover:text-blue-500 transition-colors group"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 -rotate-45 text-blue-400" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Personal Growth Section */}
      <PersonalGrowthSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Testimonials Section */}
      <TestimonialsSection />
    </div>
  );
}
