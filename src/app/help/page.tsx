'use client';

import { motion } from 'framer-motion';
import { Search, Book, MessageCircle, Video, FileText, ArrowRight, Clock, Star, ArrowLeft, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

const helpCategories = [
  {
    title: "Getting Started",
    description: "Learn the basics of using Autography",
    icon: Book,
    articles: 12
  },
  {
    title: "AI Features",
    description: "Understanding AI insights and analysis",
    icon: Star,
    articles: 8
  },
  {
    title: "Account & Billing",
    description: "Manage your subscription and payments",
    icon: FileText,
    articles: 6
  },
  {
    title: "Privacy & Security",
    description: "Keep your journal safe and secure",
    icon: MessageCircle,
    articles: 5
  }
];

const popularArticles = [
  {
    title: "How to get started with Autography",
    category: "Getting Started",
    readTime: "3 min read",
    views: "2.1k views"
  },
  {
    title: "Understanding AI insights in your journal",
    category: "AI Features", 
    readTime: "5 min read",
    views: "1.8k views"
  },
  {
    title: "Setting up your daily journaling routine",
    category: "Getting Started",
    readTime: "4 min read", 
    views: "1.5k views"
  },
  {
    title: "Managing your privacy settings",
    category: "Privacy & Security",
    readTime: "2 min read",
    views: "1.2k views"
  }
];

const videoTutorials = [
  {
    title: "Complete Autography Walkthrough",
    duration: "12:30",
    description: "A comprehensive guide to all Autography features"
  },
  {
    title: "AI Insights Deep Dive",
    duration: "8:45",
    description: "How to interpret and use AI-generated insights"
  },
  {
    title: "Customizing Your Experience",
    duration: "6:20",
    description: "Personalizing themes, prompts, and settings"
  }
];

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Link 
              href="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 mb-6 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Homepage
            </Link>
            
            <div className="text-center">
              <HelpCircle className="w-16 h-16 text-blue-600 dark:text-blue-400 mx-auto mb-6" />
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
                Help Center
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Find answers to your questions and learn how to get the most out of Autography.
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <Input
                  type="text"
                  placeholder="Search for help articles..."
                  className="pl-12 pr-24 py-3 text-lg"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                  Search
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-16"
            >
              {/* Section Header */}
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold text-foreground">Browse by Category</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Find help articles organized by topic.
                </p>
              </div>

              {/* Categories Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {helpCategories.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8 hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                      <category.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">{category.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{category.description}</p>
                    <p className="text-xs text-muted-foreground">{category.articles} articles</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-16"
            >
              {/* Section Header */}
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold text-foreground">Popular Articles</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  The most viewed help articles from our community.
                </p>
              </div>

              {/* Articles List */}
              <div className="space-y-4">
                {popularArticles.map((article, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-background rounded-2xl p-6 hover:shadow-md transition-shadow cursor-pointer border border-border"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                          <h3 className="font-semibold text-lg text-foreground">{article.title}</h3>
                          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-full w-fit">
                            {article.category}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{article.readTime}</span>
                          </div>
                          <span>{article.views}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground ml-4" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Tutorials */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-16"
            >
              {/* Section Header */}
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold text-foreground">Video Tutorials</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Learn visually with our step-by-step video guides.
                </p>
              </div>

              {/* Videos Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                {videoTutorials.map((video, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <div className="aspect-video bg-blue-600 flex items-center justify-center relative">
                      <Video className="w-12 h-12 text-white" />
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-semibold text-foreground mb-2">{video.title}</h3>
                      <p className="text-muted-foreground text-sm">{video.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="bg-background rounded-2xl p-8 text-center border border-border">
                <HelpCircle className="w-12 h-12 text-foreground mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-foreground mb-4">Still Need Help?</h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Can't find what you're looking for? Our support team is here to help you get the most out of Autography.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Contact Support
                  </Button>
                  <Button size="lg" variant="outline">
                    Join Community
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
