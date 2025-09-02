'use client';

import { motion } from 'framer-motion';
import { Search, FileText, ExternalLink, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function SitemapPage() {
  const siteStructure = [
    {
      category: "Main Pages",
      pages: [
        { title: "Home", url: "/", description: "Welcome to Autography - AI-powered journaling" },
        { title: "About", url: "/about", description: "Learn about our mission and team" },
        { title: "Pricing", url: "/pricing", description: "Choose the perfect plan for you" },
        { title: "Contact", url: "/contact", description: "Get in touch with our team" },
        { title: "Blog", url: "/blog", description: "Latest news and insights" }
      ]
    },
    {
      category: "Product",
      pages: [
        { title: "Features", url: "/#features", description: "Explore Autography's capabilities" },
        { title: "Testimonials", url: "/testimonials", description: "What our users are saying" },
        { title: "Tutorials", url: "/tutorials", description: "Learn how to use Autography" },
        { title: "Documentation", url: "/docs", description: "Complete user and developer guides" }
      ]
    },
    {
      category: "Company",
      pages: [
        { title: "Careers", url: "/careers", description: "Join our growing team" },
        { title: "Press", url: "/press", description: "Media resources and news" },
        { title: "Community", url: "/community", description: "Connect with other users" }
      ]
    },
    {
      category: "Support",
      pages: [
        { title: "Help Center", url: "/help", description: "Find answers to common questions" },
        { title: "API Documentation", url: "/docs#api-auth", description: "Developer resources" },
        { title: "System Status", url: "#status", description: "Service availability" }
      ]
    },
    {
      category: "Legal",
      pages: [
        { title: "Privacy Policy", url: "/privacy", description: "How we protect your data" },
        { title: "Terms of Service", url: "/terms", description: "User agreement and terms" },
        { title: "Cookie Policy", url: "/cookies", description: "How we use cookies" },
        { title: "Security", url: "/security", description: "Our security practices" }
      ]
    },
    {
      category: "Resources",
      pages: [
        { title: "Sitemap", url: "/sitemap", description: "Complete site navigation" },
        { title: "Accessibility", url: "/accessibility", description: "Accessibility statement" }
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
              <Search className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Sitemap
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Navigate through all pages and sections of the Autography website. 
              Find exactly what you're looking for with our complete site structure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Statistics */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="max-w-lg mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search sitemap..."
                  className="w-full px-4 py-3 pl-12 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="w-5 h-5 text-muted-foreground" />
                </div>
              </div>
            </div>

            {/* Site Statistics */}
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-card rounded-lg p-6 border border-border">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {siteStructure.reduce((total, category) => total + category.pages.length, 0)}
                </div>
                <div className="text-sm text-muted-foreground">Total Pages</div>
              </div>
              <div className="bg-card rounded-lg p-6 border border-border">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {siteStructure.length}
                </div>
                <div className="text-sm text-muted-foreground">Categories</div>
              </div>
              <div className="bg-card rounded-lg p-6 border border-border">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">
                  100%
                </div>
                <div className="text-sm text-muted-foreground">Pages Indexed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {siteStructure.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * categoryIndex }}
                  className="bg-card rounded-2xl p-8 border border-border"
                >
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <div className="w-2 h-8 bg-blue-600 dark:bg-blue-400 rounded" />
                    {category.category}
                  </h2>
                  
                  <div className="space-y-4">
                    {category.pages.map((page, pageIndex) => (
                      <motion.div
                        key={page.title}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.05 * pageIndex }}
                        className="border-l-2 border-muted pl-4 hover:border-blue-500 transition-colors group"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <Link
                              href={page.url}
                              className="text-lg font-medium text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400"
                            >
                              {page.title}
                            </Link>
                            <p className="text-sm text-muted-foreground mt-1">
                              {page.description}
                            </p>
                            <code className="text-xs text-muted-foreground/70 mt-2 block">
                              {page.url}
                            </code>
                          </div>
                          <Link
                            href={page.url}
                            className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <ExternalLink className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                          </Link>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Additional Resources
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card rounded-lg p-6 border border-border hover:border-blue-200 dark:hover:border-blue-800 transition-colors">
                <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">XML Sitemap</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Machine-readable sitemap for search engines
                </p>
                <Link
                  href="/sitemap.xml"
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium inline-flex items-center gap-1"
                >
                  View XML Sitemap
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
              
              <div className="bg-card rounded-lg p-6 border border-border hover:border-blue-200 dark:hover:border-blue-800 transition-colors">
                <Search className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Site Search</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Search across all pages and content
                </p>
                <Link
                  href="/#search"
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium inline-flex items-center gap-1"
                >
                  Search Site
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
              
              <div className="bg-card rounded-lg p-6 border border-border hover:border-blue-200 dark:hover:border-blue-800 transition-colors">
                <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Documentation</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Complete guides and API reference
                </p>
                <Link
                  href="/docs"
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium inline-flex items-center gap-1"
                >
                  View Docs
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Website Structure Note */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 dark:bg-blue-950/30 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="text-blue-800 dark:text-blue-200 font-semibold mb-2">
                About This Sitemap
              </h3>
              <p className="text-blue-700 dark:text-blue-300 text-sm">
                This sitemap is automatically updated when new pages are added to our website. 
                It includes all publicly accessible pages and provides a comprehensive overview of our site structure. 
                For technical integrations, please refer to our XML sitemap.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
