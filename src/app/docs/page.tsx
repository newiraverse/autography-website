'use client';

import { motion } from 'framer-motion';
import { Book, Code, Zap, ArrowRight, ExternalLink, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function DocsPage() {
  const docSections = [
    {
      icon: Book,
      title: "Getting Started",
      description: "Everything you need to know to start using Autography",
      articles: [
        { title: "Quick Start Guide", url: "#quick-start" },
        { title: "Setting Up Your First Journal", url: "#first-journal" },
        { title: "Understanding AI Insights", url: "#ai-insights" },
        { title: "Mobile App Setup", url: "#mobile-setup" }
      ]
    },
    {
      icon: Zap,
      title: "Features & Usage",
      description: "Detailed guides on all Autography features",
      articles: [
        { title: "Advanced Writing Features", url: "#writing-features" },
        { title: "Data Export & Import", url: "#data-management" },
        { title: "Privacy & Security Settings", url: "#privacy-settings" },
        { title: "Customization Options", url: "#customization" }
      ]
    },
    {
      icon: Code,
      title: "API Documentation",
      description: "For developers building integrations with Autography",
      articles: [
        { title: "Authentication", url: "#api-auth" },
        { title: "Journal Entries API", url: "#entries-api" },
        { title: "Insights API", url: "#insights-api" },
        { title: "Webhooks", url: "#webhooks" }
      ]
    }
  ];

  const popularArticles = [
    {
      title: "How to Get the Most Out of AI Insights",
      description: "Learn how to interpret and use AI-generated insights about your journaling patterns",
      readTime: "5 min read",
      category: "Features"
    },
    {
      title: "Securing Your Journal Data",
      description: "Best practices for keeping your personal journal entries safe and private",
      readTime: "3 min read",
      category: "Security"
    },
    {
      title: "Exporting Your Journal",
      description: "Complete guide to backing up and exporting your journal entries",
      readTime: "4 min read",
      category: "Data Management"
    },
    {
      title: "API Rate Limits and Best Practices",
      description: "Understanding API limits and how to build efficient integrations",
      readTime: "6 min read",
      category: "API"
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
              <Book className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Documentation
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Everything you need to know about using Autography, from basic features to advanced integrations.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-lg mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full px-4 py-3 pl-12 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {docSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-card rounded-2xl p-8 border border-border hover:border-blue-200 dark:hover:border-blue-800 transition-colors"
              >
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg w-fit mb-6">
                  <section.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {section.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {section.description}
                </p>
                
                <ul className="space-y-3">
                  {section.articles.map((article, articleIndex) => (
                    <li key={articleIndex}>
                      <Link
                        href={article.url}
                        className="flex items-center justify-between text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 group"
                      >
                        <span>{article.title}</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Popular Articles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Most viewed and helpful documentation articles
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {popularArticles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-card rounded-lg p-6 border border-border hover:border-blue-200 dark:hover:border-blue-800 transition-colors group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">
                    {article.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {article.readTime}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {article.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Quick References
              </h2>
              <p className="text-lg text-muted-foreground">
                Jump to commonly needed information
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Keyboard Shortcuts", description: "Speed up your journaling", icon: "⌨️" },
                { title: "API Reference", description: "Complete API documentation", icon: "🔗" },
                { title: "Troubleshooting", description: "Common issues and solutions", icon: "🔧" },
                { title: "System Status", description: "Service availability", icon: "🟢" }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="text-center p-6 bg-card rounded-lg border border-border hover:border-blue-200 dark:hover:border-blue-800 transition-colors cursor-pointer group"
                >
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Help & Support */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Still Need Help?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
              >
                Contact Support
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/community"
                className="inline-flex items-center justify-center px-6 py-3 border border-border hover:border-blue-200 dark:hover:border-blue-800 text-foreground rounded-lg font-medium transition-colors"
              >
                Join Community
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
