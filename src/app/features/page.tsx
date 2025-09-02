"use client";

import { motion } from "framer-motion";
import { useScrollProgress } from "@/lib/hooks";
import {
  Brain,
  Lock,
  BarChart,
  Calendar,
  Tags,
  Cloud,
  Sparkles,
  Search,
  ArrowLeft,
  Users,
  MessageCircle,
  Heart,
  UserCheck,
  Shield,
  Globe,
  BookOpen,
  Award,
} from "lucide-react";
import Link from 'next/link';

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description:
      "Get deep insights from your journal entries with our advanced AI that understands context, emotions, and patterns in your writing.",
    id: "ai-analysis",
  },
  {
    icon: BarChart,
    title: "Mood Tracking",
    description:
      "Track your emotional well-being over time with automatic mood detection and beautiful visualizations.",
    id: "mood-tracking",
  },
  {
    icon: Tags,
    title: "Smart Organization",
    description:
      "Automatically categorize and tag your entries for easy navigation and reflection. Find past entries instantly.",
    id: "organization",
  },
  {
    icon: Lock,
    title: "Secure Privacy",
    description:
      "Your thoughts are protected with enterprise-grade encryption. You have full control over your data.",
    id: "privacy",
  },
  {
    icon: Calendar,
    title: "Daily Prompts",
    description:
      "Never run out of inspiration with our AI-generated writing prompts tailored to your interests and goals.",
  },
  {
    icon: Cloud,
    title: "Seamless Sync",
    description:
      "Access your journal from any device with real-time synchronization and offline support.",
  },
  {
    icon: Search,
    title: "Smart Search",
    description:
      "Find any memory or reflection with our powerful semantic search that understands context and meaning.",
  },
  {
    icon: Sparkles,
    title: "Personal Growth Insights",
    description:
      "Discover patterns and insights in your personal growth journey with AI-powered analytics.",
  },
  {
    icon: Users,
    title: "Community Groups",
    description:
      "Join authentic communities of like-minded journalers. Share experiences and support each other's growth in safe, moderated spaces.",
  },
  {
    icon: MessageCircle,
    title: "Peer Support Circles",
    description:
      "Connect with small groups of verified community members for deeper conversations and accountability partnerships.",
  },
  {
    icon: Heart,
    title: "Anonymous Sharing",
    description:
      "Share meaningful insights anonymously with the community while maintaining complete privacy and control over your identity.",
  },
  {
    icon: UserCheck,
    title: "Verified Members",
    description:
      "Build trust with our verified member system that ensures authentic interactions and reduces spam or harassment.",
  },
  {
    icon: Shield,
    title: "Safe Spaces",
    description:
      "Participate in carefully moderated discussion spaces with clear community guidelines and active support from trained moderators.",
  },
  {
    icon: Globe,
    title: "Global Perspectives",
    description:
      "Connect with journalers from around the world and gain diverse perspectives on personal growth and life experiences.",
  },
  {
    icon: BookOpen,
    title: "Shared Learning",
    description:
      "Access community-curated resources, workshops, and learning materials created by experienced journalers and mental health professionals.",
  },
  {
    icon: Award,
    title: "Growth Milestones",
    description:
      "Celebrate personal achievements with the community through milestone sharing and positive reinforcement systems.",
  },
];

export default function FeaturesPage() {
  const scrollProgress = useScrollProgress();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-background"
    >
      {/* Floating Progress Indicator */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 3 }}
        className="fixed top-1/2 right-8 z-50 transform -translate-y-1/2 hidden lg:block"
      >
        <div className="relative">
          <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              className="text-gray-200 dark:text-gray-700"
            />
            <motion.circle
              cx="32"
              cy="32"
              r="28"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              className="text-blue-600 dark:text-blue-400"
              style={{
                pathLength: scrollProgress,
              }}
              strokeDasharray="175.93"
              strokeDashoffset="175.93"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-bold text-foreground">
              {Math.round(scrollProgress * 100)}%
            </span>
          </div>
        </div>
      </motion.div>
      {/* Enhanced Hero Section */}
      <section className="relative pt-24 pb-20 bg-gray-50 dark:bg-black overflow-hidden">
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-gray-200 dark:bg-gray-700 rounded-full blur-3xl opacity-20"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-300 dark:bg-gray-600 rounded-full blur-3xl opacity-15"
          />
          <motion.div
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 right-1/3 w-4 h-4 bg-gray-400 dark:bg-gray-500 rounded-full blur-sm opacity-40"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-4xl mx-auto"
          >
            {/* Enhanced Back Navigation */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <Link 
                href="/"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 group relative"
              >
                <motion.div
                  whileHover={{ x: -4 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  <span className="font-medium">Back to Homepage</span>
                </motion.div>
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
            
            <div className="text-center space-y-8">
              {/* Animated Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4, type: "spring", bounce: 0.3 }}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-background rounded-full border border-gray-200 dark:border-gray-700 shadow-sm"
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-2 h-2 bg-green-500 rounded-full"
                />
                <span className="text-sm font-medium text-muted-foreground">
                  Advanced AI Features
                </span>
              </motion.div>

              {/* Main Title - Simple Text with Gradient */}
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Powerful{" "}
                <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
                  Features
                </span>
              </motion.h1>

              {/* Enhanced Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="relative"
              >
                <motion.p 
                  className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
                >
                  Discover how Autography combines AI technology with thoughtful design to enhance your journaling experience and support your personal growth journey.
                </motion.p>
              </motion.div>

              {/* Interactive Feature Count */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
                className="flex justify-center items-center space-x-8 pt-8"
              >
                {[
                  { number: "16", label: "Features", icon: "⚡" },
                  { number: "100%", label: "Secure", icon: "🔒" },
                  { number: "AI", label: "Powered", icon: "🧠" }
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 2 + index * 0.1,
                      type: "spring",
                      bounce: 0.4
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      y: -5,
                    }}
                    className="text-center cursor-pointer group"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {item.number}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium mt-1">
                      {item.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ 
              y: [0, 8, 0],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="flex flex-col items-center space-y-2 cursor-pointer group"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <div className="text-xs text-muted-foreground font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Explore Features
            </div>
            <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center group-hover:border-blue-500 transition-colors duration-300">
              <motion.div
                animate={{
                  y: [0, 12, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-0.5 h-2 bg-muted-foreground rounded-full mt-2 group-hover:bg-blue-500 transition-colors duration-300"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Grid - Advanced Layout */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-transparent dark:from-gray-900/50 dark:to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gray-100 dark:bg-gray-800 rounded-full blur-3xl opacity-20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            
            {/* Section Header with Staggered Animation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center mb-20"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block"
              >
                <span className="inline-block w-2 h-2 bg-foreground rounded-full mr-3"></span>
                <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  Everything You Need
                </span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
                Advanced Features
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                A complete ecosystem designed for deep personal growth and authentic community connections
              </p>
            </motion.div>

            {/* Core Features - Hero Grid */}
            <motion.div 
              className="grid lg:grid-cols-2 gap-8 mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {features.slice(0, 2).map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.7, 
                    delay: index * 0.15,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative bg-gray-50 dark:bg-gray-900/60 backdrop-blur-sm rounded-3xl p-10 border border-gray-200/50 dark:border-gray-700/50 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-500 h-full">
                    
                    {/* Floating Icon */}
                    <motion.div 
                      className="w-20 h-20 bg-background rounded-2xl flex items-center justify-center mb-8 shadow-lg border border-gray-200 dark:border-gray-700 group-hover:shadow-xl transition-all duration-500"
                      whileHover={{ 
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.6 }
                      }}
                    >
                      <feature.icon className="w-10 h-10 text-foreground" />
                    </motion.div>
                    
                    {/* Content with Staggered Animation */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      className="space-y-6"
                    >
                      <h3 className="text-2xl font-bold text-foreground leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {feature.description}
                      </p>
                    </motion.div>

                    {/* Hover Indicator */}
                    <motion.div 
                      className="absolute bottom-6 right-6 w-8 h-8 bg-foreground rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ArrowLeft className="w-4 h-4 text-background rotate-180" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Regular Features - Masonry-style Grid */}
            <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8">
              {features.slice(2).map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ 
                    duration: 0.6, 
                    delay: (index % 4) * 0.1,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    y: -4,
                    transition: { duration: 0.2 }
                  }}
                  className="break-inside-avoid mb-8 group cursor-pointer"
                >
                  <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-lg transition-all duration-400 backdrop-blur-sm">
                    
                    {/* Icon with Pulse Effect */}
                    <motion.div 
                      className="w-14 h-14 bg-background rounded-xl flex items-center justify-center mb-6 shadow-sm border border-gray-200 dark:border-gray-700 group-hover:shadow-md transition-all duration-300 relative overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-gray-100 to-transparent dark:from-gray-800 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={false}
                        animate={{ 
                          background: [
                            "linear-gradient(45deg, transparent, transparent)",
                            "linear-gradient(45deg, rgba(0,0,0,0.05), transparent)",
                            "linear-gradient(45deg, transparent, transparent)"
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <feature.icon className="w-7 h-7 text-foreground relative z-10" />
                    </motion.div>
                    
                    {/* Content with Slide-up Animation */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="space-y-4"
                    >
                      <h3 className="text-xl font-bold text-foreground leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {feature.description}
                      </p>
                    </motion.div>

                    {/* Subtle Bottom Border */}
                    <motion.div 
                      className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Floating Action Indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1 }}
              className="text-center mt-16"
            >
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="inline-block"
              >
                <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center">
                  <ArrowLeft className="w-5 h-5 text-background rotate-90" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-8"
            >
              <div className="bg-background rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Ready to Transform Your Journaling?
                </h2>
                <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
                  Experience the power of AI-enhanced journaling with all these features working together to support your personal growth and self-reflection.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/signup"
                    className="inline-flex items-center justify-center px-6 py-3 bg-foreground text-background font-semibold rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Start Your Journey
                  </Link>
                  <Link 
                    href="/pricing"
                    className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-foreground font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    View Pricing
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
