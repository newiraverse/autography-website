"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Users } from 'lucide-react';

const teamMembers = [
  {
    name: 'Raghav',
    role: 'CEO & Co-Founder',
    bio: 'Visionary leader passionate about transforming personal growth through technology.',
    expertise: ['Product Strategy', 'AI Integration', 'User Experience'],
  },
  {
    name: 'Ashish',
    role: 'CTO & Co-Founder',
    bio: 'Technical architect building scalable solutions for modern journaling.',
    expertise: ['Backend Systems', 'AI/ML', 'Cloud Architecture'],
  },
  {
    name: 'Harhmeet',
    role: 'Head of Product',
    bio: 'Product innovator focused on creating meaningful user experiences.',
    expertise: ['Product Design', 'User Research', 'Growth Strategy'],
  },
];

const companyValues = [
  {
    title: 'Privacy First',
    description: 'Your personal thoughts deserve the highest level of protection and privacy.',
  },
  {
    title: 'Human-Centered',
    description: 'Technology should enhance human connection, not replace it.',
  },
  {
    title: 'Innovation',
    description: 'Continuously pushing boundaries to create breakthrough experiences.',
  },
  {
    title: 'Accessibility',
    description: 'Making personal growth tools available to everyone, everywhere.',
  },
];

const milestones = [
  { year: '2023', event: 'Founded Autography with a vision to revolutionize journaling' },
  { year: '2024', event: 'Launched AI-powered insights and community features' },
  { year: 'Late 2024', event: 'Reached 10,000+ active users worldwide' },
  { year: '2025', event: 'Expanding globally with advanced AI capabilities' },
];

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-background"
    >
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 1, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-100 dark:bg-blue-900/30 rounded-full blur-3xl opacity-30"
          />
          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              rotate: [0, -1, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
              delay: 5
            }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-100 dark:bg-purple-900/30 rounded-full blur-3xl opacity-20"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-4xl mx-auto"
          >
            {/* Back Navigation */}
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
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4, type: "spring", bounce: 0.3 }}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-background rounded-full border border-gray-200 dark:border-gray-700 shadow-sm"
              >
                <Users className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-medium text-muted-foreground">
                  Meet the Team
                </span>
              </motion.div>

              {/* Main Title */}
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Building the Future of
                <motion.span 
                  className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent block"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  Personal Growth
                </motion.span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p 
                className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                We're a passionate team of innovators dedicated to transforming how people connect with themselves and others through technology.
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex justify-center items-center space-x-8 pt-8"
              >
                {[
                  { number: "3", label: "Team Members" },
                  { number: "2024", label: "Founded" },
                  { number: "10K+", label: "Users" }
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 1.4 + index * 0.1,
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
      </section>

      {/* Team Section */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            
            {/* Section Header */}
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
                  Our Team
                </span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
                Meet the Makers
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                The passionate individuals building the future of personal growth and digital wellness
              </p>
            </motion.div>

            {/* Team Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
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
                  <div className="relative bg-gray-50 dark:bg-gray-900/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-500 h-full">
                    
                    {/* Simple Avatar */}
                    <motion.div 
                      className="w-20 h-20 bg-gray-200 dark:bg-gray-700 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md transition-all duration-500"
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <span className="text-2xl font-bold text-gray-600 dark:text-gray-300">
                        {member.name.charAt(0)}
                      </span>
                    </motion.div>
                    
                    {/* Content */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      className="space-y-4"
                    >
                      <div>
                        <h3 className="text-2xl font-bold text-foreground leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {member.name}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">
                          {member.role}
                        </p>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {member.bio}
                      </p>

                      {/* Expertise Tags */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {member.expertise.map((skill, skillIndex) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 0.4, 
                              delay: 0.6 + index * 0.1 + skillIndex * 0.05 
                            }}
                            className="px-3 py-1 bg-background rounded-full text-xs font-medium text-muted-foreground border border-gray-200 dark:border-gray-700"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-100/50 dark:via-gray-800/50 to-transparent"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-8"
                >
                  <span className="inline-block w-2 h-2 bg-foreground rounded-full mr-3"></span>
                  <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    Our Mission
                  </span>
                </motion.div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
                  Empowering Personal Growth Through Technology
                </h2>
                
                <div className="bg-background rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                    To revolutionize personal growth by creating intelligent, empathetic technology that helps people understand themselves better and connect more meaningfully with others.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-foreground mb-2">Self-Discovery</div>
                      <p className="text-sm text-muted-foreground">Unlock deeper insights about yourself</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-foreground mb-2">Connection</div>
                      <p className="text-sm text-muted-foreground">Build meaningful relationships</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-foreground mb-2">Growth</div>
                      <p className="text-sm text-muted-foreground">Achieve your full potential</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Values Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-20"
            >
              <div className="text-center mb-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-6"
                >
                  <span className="inline-block w-2 h-2 bg-foreground rounded-full mr-3"></span>
                  <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    Our Values
                  </span>
                </motion.div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                  What Drives Us Forward
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {companyValues.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-20px" }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      ease: "easeOut"
                    }}
                    whileHover={{ 
                      y: -4,
                      transition: { duration: 0.2 }
                    }}
                    className="bg-background rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-lg transition-all duration-400 text-center group"
                  >
                    <div className="w-8 h-8 mx-auto mb-4 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors duration-300">
                      <div className="w-3 h-3 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
                    </div>
                    
                    <h4 className="text-lg font-bold text-foreground mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="mb-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-6"
                >
                  <span className="inline-block w-2 h-2 bg-foreground rounded-full mr-3"></span>
                  <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    Our Journey
                  </span>
                </motion.div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  The Story So Far
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  From a simple idea to a growing platform, here's how we've evolved
                </p>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                  
                  <div className="space-y-12">
                    {milestones.map((milestone, index) => (
                      <motion.div
                        key={milestone.year}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8`}
                      >
                        {/* Content Card */}
                        <div className="flex-1">
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                            className={`bg-background rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 ${
                              index % 2 === 0 ? 'text-right' : 'text-left'
                            }`}
                          >
                            <div className="text-2xl font-bold text-foreground mb-2">
                              {milestone.year}
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                              {milestone.event}
                            </p>
                          </motion.div>
                        </div>
                        
                        {/* Timeline Node */}
                        <div className="relative z-10">
                          <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                            className="w-4 h-4 bg-foreground rounded-full border-4 border-background shadow-lg"
                          />
                        </div>
                        
                        {/* Spacer */}
                        <div className="flex-1"></div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your Journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join thousands of users who are already experiencing the power of AI-enhanced personal growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/signup"
                className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-background font-semibold rounded-xl hover:opacity-90 transition-all duration-300 hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 dark:border-gray-600 text-foreground font-semibold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
