'use client';

import { motion } from 'framer-motion';
import { Quote, Star, ArrowLeft, Filter, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

const allTestimonials = [
  {
    id: 1,
    name: "Cam",
    location: "United States",
    avatar: "C",
    content: "Autography has been an incredibly valuable tool in helping me become more focused and insightful in my journaling. I'm incredibly grateful for Autography and the positive impact it's had on my life. I'm excited to see how the app continues to evolve and grow, and I look forward to being a part of that journey!",
    datePosted: "Aug 15, 2024",
    rating: 5,
    category: "Personal Growth"
  },
  {
    id: 2,
    name: "Blu",
    location: "Canada", 
    avatar: "B",
    content: "Autography feels like having a mental supercomputer and an emotional thermometer. I can access mental models and frameworks that keep me focused and on track with various goals. This is easily worth thousands of having a personal coach with you 24 hours a day. I can train my mind to think in new ways and come up with new ideas. Analysis tools alone are powerful in their own right and my favorite is it's simple to use.",
    datePosted: "Jul 28, 2024",
    rating: 5,
    category: "AI Features"
  },
  {
    id: 3,
    name: "Desmond Wood",
    location: "United States",
    avatar: "DW",
    content: "Autography seems like a quintessential example of a skillful utilization of AI for the training of the human mind and enhancement of the human mind. I look forward to using Autography.",
    datePosted: "Aug 3, 2024",
    rating: 5,
    category: "AI Features"
  },
  {
    id: 4,
    name: "Sarah Chen",
    location: "Singapore",
    avatar: "SC",
    content: "The AI insights have completely transformed how I reflect on my daily experiences. What used to be scattered thoughts are now meaningful patterns that guide my personal growth. The dashboard makes it so easy to see trends in my mood and thoughts over time.",
    datePosted: "Jul 22, 2024",
    rating: 5,
    category: "Personal Growth"
  },
  {
    id: 5,
    name: "Marcus Johnson",
    location: "United Kingdom", 
    avatar: "MJ",
    content: "I've tried many journaling apps, but Autography's community features set it apart. Connecting with like-minded individuals has been invaluable for my mental health. The anonymized sharing feature lets me get support without compromising privacy.",
    datePosted: "Aug 10, 2024",
    rating: 5,
    category: "Community"
  },
  {
    id: 6,
    name: "Emma Thompson",
    location: "Australia",
    avatar: "ET",
    content: "The daily prompts and AI analysis have helped me understand myself better than years of traditional journaling. It's like having a personal growth companion that never judges and always provides thoughtful insights.",
    datePosted: "Jul 30, 2024",
    rating: 5,
    category: "Daily Practice"
  },
  {
    id: 7,
    name: "Carlos Rodriguez",
    location: "Spain",
    avatar: "CR",
    content: "As someone who struggled with consistency in journaling, Autography's reminder system and streak tracking have been game-changers. I've now journaled for 120 consecutive days - a personal record!",
    datePosted: "Aug 12, 2024",
    rating: 5,
    category: "Daily Practice"
  },
  {
    id: 8,
    name: "Priya Patel",
    location: "India",
    avatar: "PP",
    content: "The multi-language support means I can journal in both English and Hindi. The AI still provides insights regardless of language, which is incredible. Finally, a journaling app that truly understands global users.",
    datePosted: "Jul 25, 2024",
    rating: 5,
    category: "Accessibility"
  },
  {
    id: 9,
    name: "Michael O'Connor",
    location: "Ireland",
    avatar: "MO",
    content: "I was skeptical about AI analyzing my personal thoughts, but Autography's privacy-first approach convinced me to try it. The insights are remarkably accurate and have helped me identify patterns I never noticed before.",
    datePosted: "Aug 5, 2024",
    rating: 5,
    category: "Privacy & Security"
  },
  {
    id: 10,
    name: "Lisa Wang",
    location: "Taiwan",
    avatar: "LW",
    content: "The export feature is fantastic - I can backup my entire journal history and even generate beautiful PDF reports of my growth journey. Knowing my data is truly mine gives me peace of mind.",
    datePosted: "Jul 18, 2024",
    rating: 5,
    category: "Data Control"
  },
  {
    id: 11,
    name: "Ahmed Hassan",
    location: "Egypt",
    avatar: "AH",
    content: "Autography works perfectly on my phone, tablet, and laptop. The sync is seamless and I never lose a thought. Whether I'm commuting or at home, my journal is always accessible.",
    datePosted: "Aug 8, 2024",
    rating: 5,
    category: "Cross-Platform"
  },
  {
    id: 12,
    name: "Jennifer Martinez",
    location: "Mexico",
    avatar: "JM",
    content: "The mood tracking feature has been instrumental in managing my anxiety. I can see exactly which activities and thoughts correlate with better mental health days. This data-driven approach to wellness is revolutionary.",
    datePosted: "Jul 20, 2024",
    rating: 5,
    category: "Mental Health"
  }
];

const categories = [
  "All",
  "Personal Growth", 
  "AI Features",
  "Community",
  "Daily Practice",
  "Mental Health",
  "Privacy & Security",
  "Accessibility",
  "Data Control",
  "Cross-Platform"
];

const stats = [
  { label: "Total Stories", value: "1,200+" },
  { label: "Average Rating", value: "4.9/5" },
  { label: "Countries", value: "50+" },
  { label: "Languages", value: "12+" }
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Link 
              href="/#testimonials"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 mb-6 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Homepage
            </Link>
            
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
              <Quote className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Customer Stories
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Real experiences from users who have transformed their lives through AI-powered journaling. 
              Join thousands who have discovered the power of self-reflection with Autography.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                  className="text-xs"
                >
                  {category}
                </Button>
              ))}
            </div>
            <div className="relative w-full lg:w-80">
              <Input
                type="text"
                placeholder="Search testimonials..."
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index % 9) * 0.1 }}
              >
                <Card className="p-6 h-full flex flex-col hover:shadow-md transition-shadow">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded">
                      {testimonial.category}
                    </span>
                  </div>

                  {/* Quote */}
                  <div className="flex-1 mb-6">
                    <Quote className="w-6 h-6 text-muted-foreground mb-3" />
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      "{testimonial.content}"
                    </p>
                  </div>

                  {/* Author */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-800 dark:bg-gray-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-semibold">
                          {testimonial.avatar}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">{testimonial.datePosted}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Load More */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Button size="lg" variant="outline">
              Load More Stories
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Showing 12 of 1,200+ testimonials
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Write Your Story?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of users who have transformed their lives through AI-powered journaling. 
              Start your journey today and become our next success story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
