'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Why should I use Autography instead of a regular diary or notes app?",
    answer: "Autography isn't just about recording events. It's a companion for your mind — combining AI-powered prompts, emotional insights, and community connection to make journaling more engaging, personal, and rewarding."
  },
  {
    question: "How does Autography help with stress and anxiety?",
    answer: "Our guided journaling and mood check-ins help you process thoughts clearly. By writing and reflecting, users often experience reduced stress and a greater sense of control over emotions."
  },
  {
    question: "Can I connect with others on Autography?",
    answer: "Yes! While your private journal is secure, you can choose to share selective reflections, join themed discussions, or connect with like-minded individuals for authentic social interactions."
  },
  {
    question: "What makes Autography different from social media?",
    answer: "Unlike social platforms that thrive on comparisons and noise, Autography encourages mindful sharing, authentic conversations, and personal growth without judgment or endless scrolling."
  },
  {
    question: "I'm worried about privacy. How safe is my data?",
    answer: "Your privacy is our priority. Journals are encrypted and never sold or analyzed for ads. You're always in control of what you keep private or share with others."
  }
];

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-left mb-12">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-muted-foreground/60 mb-2">
              Over-
            </h2>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-foreground -mt-2">
              thinking?
            </h2>
          </div>

          {/* FAQ Items */}
          <div className="space-y-1">
            {faqData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="border-b border-border/50"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full py-6 px-2 flex items-center justify-between text-left hover:bg-muted/30 transition-colors duration-200 group"
                >
                  <span className="text-lg sm:text-xl text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openItems.has(index) ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="ml-4 flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors duration-200" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openItems.has(index) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-2 pb-6">
                        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Action Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-end mt-12 space-x-8"
          >
            <Link 
              href="/about" 
              className="inline-flex items-center gap-2 text-base font-normal text-blue-400 hover:text-blue-500 transition-colors group"
            >
              Learn more
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 -rotate-45 text-blue-400" />
            </Link>
            
            <Link 
              href="/discussions" 
              className="inline-flex items-center gap-2 text-base font-normal text-blue-400 hover:text-blue-500 transition-colors group"
            >
              Open form discussion
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 -rotate-45 text-blue-400" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
