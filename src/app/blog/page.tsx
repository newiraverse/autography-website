"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const blogPosts = [
  {
    title: "Write What You Whisper",
    date: "March 20, 2024",
    description: "Discover the art of capturing your inner voice through mindful journaling and authentic self-expression.",
    category: "Personal Growth",
    slug: "write-what-you-whisper",
    featured: true,
  },
  {
    title: "Building an Authentic Social Circle",
    date: "March 22, 2024",
    description: "Learn how to connect with like-minded individuals through genuine storytelling and shared growth experiences.",
    category: "Relationships",
    slug: "authentic-social-circle",
    featured: true,
  },
  {
    title: "Getting Started with AI-Powered Journaling",
    date: "March 15, 2024",
    description: "Learn how to make the most of Autography's AI features for deeper self-reflection.",
    category: "Tips & Tricks",
    slug: "getting-started-ai-journaling",
  },
  {
    title: "The Science Behind Journaling and Mental Health",
    date: "March 10, 2024",
    description: "Exploring the psychological benefits of regular journaling practice.",
    category: "Research",
    slug: "science-behind-journaling",
  },
  {
    title: "How AI is Transforming Personal Development",
    date: "March 5, 2024",
    description: "Understanding the role of artificial intelligence in modern self-improvement.",
    category: "Technology",
    slug: "ai-transforming-personal-development",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 relative"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Our Blog</h1>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
            Insights, updates, and stories about journaling, personal growth, and AI technology.
          </p>
          
          {/* Write Blog Button - Top Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute top-0 right-0"
          >
            <Link 
              href="/blog/write"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-500 transition-all duration-300 font-medium group cursor-pointer"
            >
              Write blog
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Featured Posts Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12 relative"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Featured Articles</h2>
          
          {/* Left Arrow */}
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 hidden lg:block">
            <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-blue-400 hover:text-blue-500 transition-all duration-300 backdrop-blur-sm">
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          
          {/* Right Arrow */}
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 hidden lg:block">
            <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-blue-400 hover:text-blue-500 transition-all duration-300 backdrop-blur-sm">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 place-items-center lg:px-16">
            {blogPosts.filter(post => post.featured).map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="w-full max-w-md"
              >
                <Link href={`/blog/${post.slug}`}>
                  <Card className="h-full min-h-[220px] transition-all duration-300 hover:bg-muted/50 hover:shadow-lg cursor-pointer ring-2 ring-blue-400/20 flex flex-col">
                    <CardHeader className="flex-shrink-0 pb-3">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm text-blue-400 font-medium">
                          {post.category}
                        </div>
                        <div className="text-xs bg-blue-400/10 text-blue-400 px-2 py-1 rounded-full">
                          Featured
                        </div>
                      </div>
                      <CardTitle className="line-clamp-2 text-lg leading-tight">{post.title}</CardTitle>
                      <CardDescription className="text-sm">{post.date}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow pt-0">
                      <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed">{post.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other Posts Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="relative"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Latest Articles</h2>
          
          {/* Left Arrow */}
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 hidden lg:block">
            <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-blue-400 hover:text-blue-500 transition-all duration-300 backdrop-blur-sm">
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          
          {/* Right Arrow */}
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 hidden lg:block">
            <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-blue-400 hover:text-blue-500 transition-all duration-300 backdrop-blur-sm">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 place-items-center lg:px-16">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index + 0.3 }}
              >
                {post.slug ? (
                  <Link href={`/blog/${post.slug}`}>
                    <Card className="h-full transition-all duration-300 hover:bg-muted/50 hover:shadow-lg cursor-pointer">
                      <CardHeader>
                        <div className="text-sm text-blue-500">{post.category}</div>
                        <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                        <CardDescription>{post.date}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{post.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ) : (
                  <Card className="h-full transition-colors hover:bg-muted/50">
                    <CardHeader>
                      <div className="text-sm text-blue-500">{post.category}</div>
                      <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                      <CardDescription>{post.date}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{post.description}</p>
                    </CardContent>
                  </Card>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground">More articles coming soon...</p>
        </motion.div>
      </div>
    </div>
  );
}
