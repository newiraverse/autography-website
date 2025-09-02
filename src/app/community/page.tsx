'use client';

import { motion } from 'framer-motion';
import { Users, MessageSquare, Heart, Star, Award, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

const communityStats = [
  { label: "Active Members", value: "12,500+", icon: Users },
  { label: "Monthly Posts", value: "3,200+", icon: MessageSquare },
  { label: "Countries", value: "45+", icon: MapPin },
  { label: "Stories Shared", value: "25,000+", icon: Heart }
];

const communityGroups = [
  {
    title: "Daily Journalers",
    description: "Connect with people who journal every day and share tips for consistency",
    members: "2,400 members",
    category: "General",
    color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
  },
  {
    title: "Mental Health Support",
    description: "A supportive space for those using journaling for mental wellbeing",
    members: "1,800 members", 
    category: "Wellness",
    color: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
  },
  {
    title: "Creative Writers",
    description: "Share creative writing exercises and literary journaling techniques",
    members: "1,200 members",
    category: "Writing",
    color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
  },
  {
    title: "AI Insights Discussion",
    description: "Discuss how AI insights have impacted your self-discovery journey",
    members: "900 members",
    category: "Technology",
    color: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400"
  },
  {
    title: "Goal Setting & Growth",
    description: "Use journaling to track progress and achieve personal goals",
    members: "1,500 members",
    category: "Growth",
    color: "bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400"
  },
  {
    title: "Mindfulness & Reflection",
    description: "Combine meditation practices with reflective journaling",
    members: "1,100 members",
    category: "Mindfulness", 
    color: "bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400"
  }
];

const events = [
  {
    title: "Weekly Writing Circle",
    date: "Every Wednesday",
    time: "7:00 PM EST",
    description: "Join fellow journalers for guided writing prompts and discussion"
  },
  {
    title: "Monthly AI Insights Workshop",
    date: "First Saturday",
    time: "2:00 PM EST", 
    description: "Learn advanced techniques for interpreting AI-generated insights"
  },
  {
    title: "Beginner's Journaling Bootcamp",
    date: "September 15, 2024",
    time: "6:00 PM EST",
    description: "4-week program for those new to digital journaling"
  }
];

const testimonials = [
  {
    quote: "The Autography community has been incredible. I've learned so much from other members about different journaling techniques.",
    author: "Maria S.",
    role: "Community Member since 2023"
  },
  {
    quote: "Finding people who understand the value of daily reflection has been life-changing. This community gets it.",
    author: "David L.",
    role: "Daily Journaler Group Leader"
  }
];

export default function CommunityPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Join Our Community
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Connect with thousands of journalers worldwide. Share experiences, 
              get support, and grow together on your personal development journey.
            </p>
            <Link href="/signup">
              <Button size="lg">
                Join the waitlist
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {communityStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Groups */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Community Groups</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find your tribe and connect with like-minded journalers in specialized groups.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communityGroups.map((group, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-md transition-shadow cursor-pointer h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`px-2 py-1 text-xs rounded-full ${group.color}`}>
                      {group.category}
                    </div>
                    <Users className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{group.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">{group.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{group.members}</span>
                    <Button size="sm" variant="outline">Join</Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Upcoming Events</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join live events, workshops, and discussions with the community.
            </p>
          </motion.div>

          <div className="space-y-6">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        <h3 className="font-semibold text-lg">{event.title}</h3>
                      </div>
                      <p className="text-muted-foreground mb-2">{event.description}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{event.date}</span>
                        <span>•</span>
                        <span>{event.time}</span>
                      </div>
                    </div>
                    <Button>
                      Register
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">What Members Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from our community members about their experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-16 bg-blue-600 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-muted-foreground italic mb-4">"{testimonial.quote}"</p>
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Connect?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of journalers who are supporting each other on their personal growth journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg">
                  <Users className="w-4 h-4 mr-2" />
                  Join Community
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                Browse Groups
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
