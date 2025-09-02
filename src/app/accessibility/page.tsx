'use client';

import { motion } from 'framer-motion';
import { Accessibility, Eye, Ear, Hand, Brain, Heart, ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function AccessibilityPage() {
  const accessibilityFeatures = [
    {
      icon: Eye,
      title: "Visual Accessibility",
      description: "Features for users with visual impairments",
      features: [
        "High contrast mode support",
        "Screen reader compatibility",
        "Keyboard navigation support",
        "Alt text for all images",
        "Scalable text and UI elements",
        "Color-blind friendly design"
      ]
    },
    {
      icon: Ear,
      title: "Auditory Accessibility",
      description: "Features for users with hearing impairments",
      features: [
        "Visual feedback for audio cues",
        "Captions for video content",
        "Text alternatives for audio",
        "Vibration alerts on mobile",
        "Visual notification system",
        "Sign language support resources"
      ]
    },
    {
      icon: Hand,
      title: "Motor Accessibility",
      description: "Features for users with motor impairments",
      features: [
        "Voice input support",
        "Large click targets",
        "Sticky keys compatibility",
        "Gesture customization",
        "Switch control support",
        "Reduced motion options"
      ]
    },
    {
      icon: Brain,
      title: "Cognitive Accessibility",
      description: "Features for users with cognitive differences",
      features: [
        "Simple, clear language",
        "Consistent navigation",
        "Focus indicators",
        "Error prevention and correction",
        "Progress indicators",
        "Customizable interface complexity"
      ]
    }
  ];

  const wcagCompliance = [
    {
      level: "A",
      status: "compliant",
      description: "Basic accessibility features",
      items: [
        "Non-text content has alternatives",
        "Captions for multimedia",
        "Content is keyboard accessible",
        "No seizure-inducing content",
        "Pages have titles",
        "Links have meaningful text"
      ]
    },
    {
      level: "AA",
      status: "compliant",
      description: "Enhanced accessibility features",
      items: [
        "Color contrast ratio of 4.5:1",
        "Text can be resized to 200%",
        "Keyboard focus is visible",
        "Consistent navigation",
        "Error identification and suggestions",
        "Headings and labels are descriptive"
      ]
    },
    {
      level: "AAA",
      status: "partial",
      description: "Advanced accessibility features",
      items: [
        "Color contrast ratio of 7:1",
        "Context-sensitive help",
        "Error prevention for critical data",
        "Sign language interpretation",
        "Extended audio descriptions",
        "Reading level assistance"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Link 
              href="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 mb-6 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Homepage
            </Link>
            
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
              <Accessibility className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Accessibility Statement
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              We're committed to making Autography accessible to everyone. 
              Our journaling platform is designed to be inclusive and usable by people of all abilities.
            </p>
            
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>WCAG 2.1 AA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-red-500" />
                <span>Built with care</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Commitment to Accessibility
              </h2>
              <div className="prose prose-lg dark:prose-invert mx-auto">
                <p>
                  At Autography, we believe that everyone deserves access to powerful journaling tools, 
                  regardless of their abilities or disabilities. We're committed to providing an inclusive 
                  digital experience that enables all users to capture, reflect on, and gain insights 
                  from their personal thoughts and experiences.
                </p>
                <p>
                  Our accessibility efforts are guided by the Web Content Accessibility Guidelines (WCAG) 2.1 
                  and we continuously work to exceed these standards. We view accessibility not as a 
                  compliance checkbox, but as a fundamental aspect of good design that benefits everyone.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Accessibility Features */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Accessibility Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We've built comprehensive accessibility features into every aspect of Autography
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {accessibilityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-card rounded-2xl p-8 border border-border"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WCAG Compliance */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              WCAG 2.1 Compliance
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our compliance status with Web Content Accessibility Guidelines
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              {wcagCompliance.map((level, index) => (
                <motion.div
                  key={level.level}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-card rounded-lg p-6 border border-border"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                        level.status === 'compliant' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                      }`}>
                        {level.level}
                      </div>
                      <div className="flex items-center gap-2">
                        {level.status === 'compliant' ? (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        ) : (
                          <AlertCircle className="w-5 h-5 text-yellow-600" />
                        )}
                        <span className={`font-medium text-sm ${
                          level.status === 'compliant' 
                            ? 'text-green-700 dark:text-green-400' 
                            : 'text-yellow-700 dark:text-yellow-400'
                        }`}>
                          {level.status === 'compliant' ? 'Compliant' : 'Partially Compliant'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        Level {level.level} - {level.description}
                      </h3>
                      <div className="grid md:grid-cols-2 gap-2">
                        {level.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testing & Tools */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Testing & Compatibility
              </h2>
              <p className="text-lg text-muted-foreground">
                We regularly test our platform with assistive technologies
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card rounded-lg p-6 border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Assistive Technologies Tested
                </h3>
                <ul className="space-y-2">
                  {[
                    "NVDA (Windows)",
                    "JAWS (Windows)",
                    "VoiceOver (macOS/iOS)",
                    "TalkBack (Android)",
                    "Dragon NaturallySpeaking",
                    "Switch Control",
                    "Voice Control"
                  ].map((tool, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-muted-foreground">{tool}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Browser Support
                </h3>
                <ul className="space-y-2">
                  {[
                    "Chrome (latest)",
                    "Firefox (latest)",
                    "Safari (latest)",
                    "Edge (latest)",
                    "Chrome Mobile",
                    "Safari Mobile",
                    "Firefox Mobile"
                  ].map((browser, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-muted-foreground">{browser}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback & Contact */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Help Us Improve
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're always working to improve our accessibility. If you encounter any barriers 
              or have suggestions, please let us know.
            </p>
            
            <div className="bg-blue-50 dark:bg-blue-950/30 p-6 rounded-lg border border-blue-200 dark:border-blue-800 mb-8">
              <h3 className="text-blue-800 dark:text-blue-200 font-semibold mb-2">
                Accessibility Feedback
              </h3>
              <p className="text-blue-700 dark:text-blue-300 text-sm mb-4">
                We welcome feedback about the accessibility of Autography. 
                Please contact us if you encounter accessibility barriers:
              </p>
              <div className="space-y-2 text-sm">
                <div><strong>Email:</strong> accessibility@autography.ai</div>
                <div><strong>Response Time:</strong> Within 48 hours</div>
                <div><strong>Subject Line:</strong> "Accessibility Feedback"</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/help"
                className="inline-flex items-center justify-center px-6 py-3 border border-border hover:border-blue-200 dark:hover:border-blue-800 text-foreground rounded-lg font-medium transition-colors"
              >
                Visit Help Center
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
