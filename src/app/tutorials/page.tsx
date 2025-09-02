'use client';

import { motion } from 'framer-motion';
import { Play, Clock, Star, Book, Video, FileText, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const tutorialCategories = [
  {
    title: "Getting Started",
    description: "Learn the basics of Autography",
    icon: Book,
    tutorials: 8,
    difficulty: "Beginner",
    color: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
  },
  {
    title: "AI Features",
    description: "Master AI insights and analysis",
    icon: Star,
    tutorials: 12,
    difficulty: "Intermediate",
    color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
  },
  {
    title: "Advanced Techniques",
    description: "Power user tips and tricks",
    icon: Video,
    tutorials: 6,
    difficulty: "Advanced",
    color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
  }
];

const featuredTutorials = [
  {
    title: "Complete Autography Walkthrough",
    category: "Getting Started",
    duration: "12:30",
    difficulty: "Beginner",
    rating: 4.9,
    completions: "12.5k",
    description: "A comprehensive introduction to all Autography features and how to use them effectively.",
    type: "video"
  },
  {
    title: "Understanding AI Insights",
    category: "AI Features", 
    duration: "8:45",
    difficulty: "Intermediate",
    rating: 4.8,
    completions: "8.2k",
    description: "Deep dive into how AI analyzes your writing and generates meaningful insights.",
    type: "video"
  },
  {
    title: "Setting Up Your Perfect Workflow",
    category: "Advanced Techniques",
    duration: "15:20",
    difficulty: "Advanced", 
    rating: 4.7,
    completions: "5.1k",
    description: "Learn to customize Autography for maximum productivity and personal growth.",
    type: "video"
  }
];

const quickGuides = [
  {
    title: "How to Write Your First Entry",
    readTime: "3 min read",
    completions: "15.2k",
    steps: 5
  },
  {
    title: "Interpreting Your Mood Patterns",
    readTime: "4 min read", 
    completions: "9.8k",
    steps: 4
  },
  {
    title: "Using Daily Prompts Effectively",
    readTime: "2 min read",
    completions: "11.3k", 
    steps: 3
  },
  {
    title: "Exporting and Backing Up Your Journal",
    readTime: "5 min read",
    completions: "6.7k",
    steps: 6
  }
];

const learningPaths = [
  {
    title: "Beginner's Journey",
    description: "Complete path from first entry to advanced journaling",
    tutorials: 12,
    estimatedTime: "2-3 weeks",
    enrolled: "3.2k students"
  },
  {
    title: "AI Mastery Track",
    description: "Become an expert at using AI insights for personal growth",
    tutorials: 8,
    estimatedTime: "1-2 weeks", 
    enrolled: "1.8k students"
  },
  {
    title: "Mental Wellness Path",
    description: "Use journaling techniques for improved mental health",
    tutorials: 10,
    estimatedTime: "3-4 weeks",
    enrolled: "2.1k students"
  }
];

export default function TutorialsPage() {
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
              Learn Autography
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Master the art of AI-powered journaling with our comprehensive tutorials, 
              guides, and learning paths designed for all skill levels.
            </p>
            <Button size="lg">
              Start Learning
              <Play className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Tutorial Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Browse by Category</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose your learning path based on your experience level and goals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {tutorialCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-md transition-shadow cursor-pointer h-full">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${category.color}`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{category.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{category.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{category.tutorials} tutorials</span>
                    <span className={`px-2 py-1 rounded-full text-xs ${category.color}`}>
                      {category.difficulty}
                    </span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tutorials */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Featured Tutorials</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our most popular and highly-rated video tutorials.
            </p>
          </motion.div>

          <div className="space-y-6">
            {featuredTutorials.map((tutorial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="lg:w-64 aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center relative flex-shrink-0">
                      <Play className="w-12 h-12 text-white" />
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {tutorial.duration}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <h3 className="font-semibold text-xl">{tutorial.title}</h3>
                        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded">
                          {tutorial.category}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-4">{tutorial.description}</p>
                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{tutorial.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span>{tutorial.rating}</span>
                        </div>
                        <span>{tutorial.completions} completed</span>
                        <span className="capitalize">{tutorial.difficulty}</span>
                      </div>
                    </div>
                    <Button>
                      Watch Now
                      <Play className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Guides */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Quick Guides</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Step-by-step written guides for quick learning.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {quickGuides.map((guide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                      <FileText className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-xs text-muted-foreground">{guide.steps} steps</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{guide.title}</h3>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{guide.readTime}</span>
                    <span>{guide.completions} completed</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Learning Paths</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Structured learning journeys to master specific aspects of Autography.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {learningPaths.map((path, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-md transition-shadow h-full">
                  <div className="mb-4">
                    <h3 className="font-semibold text-lg mb-2">{path.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{path.description}</p>
                  </div>
                  <div className="space-y-2 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center justify-between">
                      <span>Tutorials:</span>
                      <span>{path.tutorials}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Est. Time:</span>
                      <span>{path.estimatedTime}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Enrolled:</span>
                      <span>{path.enrolled}</span>
                    </div>
                  </div>
                  <Button className="w-full">
                    Start Path
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Master Autography?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start with our beginner's guide and work your way up to becoming an Autography power user.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Play className="w-4 h-4 mr-2" />
                Start Tutorial
              </Button>
              <Button size="lg" variant="outline">
                Browse All Guides
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
