"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Github, 
  Instagram,
  Send,
  ArrowRight,
  Heart,
  Shield,
  Zap
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useState } from 'react';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

// Footer data structure
const footerSections = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "/#features" },
      { name: "Pricing", href: "/pricing" },
      { name: "Blog", href: "/blog" },
      { name: "Write", href: "/blog/write" },
    ]
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Careers", href: "/careers" },
      { name: "Press Kit", href: "/press" },
    ]
  },
  {
    title: "Resources",
    links: [
      { name: "Help Center", href: "/help" },
      { name: "Community", href: "/community" },
      { name: "Tutorials", href: "/tutorials" },
      { name: "API Docs", href: "/docs" },
    ]
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "Security", href: "/security" },
    ]
  }
];

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/autography', color: 'hover:text-blue-400' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/autography', color: 'hover:text-blue-600' },
  { name: 'Github', icon: Github, href: 'https://github.com/autography', color: 'hover:text-gray-400' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/autography', color: 'hover:text-pink-400' },
];

const features = [
  { icon: Shield, text: "Enterprise-grade security" },
  { icon: Zap, text: "Lightning-fast performance" },
  { icon: Heart, text: "Built with love for journaling" },
];

export function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="relative bg-gradient-to-br from-background via-background to-muted/20 border-t border-border"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="pt-16 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Brand section */}
            <motion.div variants={itemVariants} className="lg:col-span-4 space-y-8">
              <div className="space-y-4">
                <Link href="/" className="inline-block group">
                  <h2 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-blue-600 transition-colors duration-300">
                    Autography
                  </h2>
                </Link>
                <p className="text-muted-foreground leading-relaxed max-w-md">
                  Transform your thoughts into meaningful insights with AI-powered journaling. 
                  Join thousands discovering the power of reflective writing.
                </p>
              </div>

              {/* Feature highlights */}
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <div className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-950 flex items-center justify-center">
                      <feature.icon className="w-3 h-3 text-blue-600" />
                    </div>
                    <span>{feature.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Contact info */}
              <div className="space-y-3">
                <motion.div variants={itemVariants} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4 text-foreground" />
                  <a href="mailto:newiraverse@gmail.com" className="hover:text-foreground transition-colors">
                    newiraverse@gmail.com
                  </a>
                </motion.div>
                <motion.div variants={itemVariants} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4 text-foreground" />
                  <a href="tel:+918286666066" className="hover:text-foreground transition-colors">
                    +91 8286666066
                  </a>
                </motion.div>
                <motion.div variants={itemVariants} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-foreground" />
                  <span>Himachal Pradesh, India</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Navigation sections */}
            <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-8">
              {footerSections.map((section, index) => (
                <motion.div key={index} variants={itemVariants} className="space-y-4">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          href={link.href}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 hover:translate-x-1 inline-block"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Newsletter signup */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                  Stay Updated
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Get the latest updates, tips, and insights delivered to your inbox.
                </p>
              </div>

              {isSubscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-xl border border-blue-200 dark:border-blue-800"
                >
                  <div className="flex items-center gap-2 text-sm text-blue-700 dark:text-blue-300">
                    <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                      <Send className="w-3 h-3 text-white" />
                    </div>
                    <span className="font-medium">Thanks for subscribing!</span>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <div className="relative">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pr-12 border-border focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                    <Button
                      type="submit"
                      size="sm"
                      className="absolute right-1 top-1 h-8 w-8 p-0 bg-blue-600 hover:bg-blue-700"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
              )}

              {/* Social links */}
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-foreground">Follow Us</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-9 h-9 rounded-xl bg-muted/50 hover:bg-muted flex items-center justify-center text-muted-foreground transition-all duration-300 ${social.color} hover:shadow-lg`}
                    >
                      <social.icon className="w-4 h-4" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom section */}
        <motion.div
          variants={itemVariants}
          className="py-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Autography. All rights reserved.</p>
            <div className="hidden sm:block w-1 h-1 bg-muted-foreground rounded-full" />
            <p>Made in India</p>
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <Link href="/sitemap" className="text-muted-foreground hover:text-foreground transition-colors">
              Sitemap
            </Link>
            <Link href="/accessibility" className="text-muted-foreground hover:text-foreground transition-colors">
              Accessibility
            </Link>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs">All systems operational</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
