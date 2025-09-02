'use client';

import { motion } from 'framer-motion';
import { 
  Download, 
  FileText, 
  Camera, 
  Video, 
  ExternalLink, 
  ArrowLeft,
  ArrowRight,
  Mail,
  Phone,
  Calendar,
  Users,
  Award,
  TrendingUp,
  Globe,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

const pressResources = [
  {
    title: "Brand Guidelines",
    description: "Complete brand guidelines including logos, colors, typography, and voice guidelines for consistent brand representation",
    type: "PDF",
    size: "2.3 MB",
    icon: FileText,
    category: "Brand Assets"
  },
  {
    title: "Logo Package",
    description: "High-resolution logos in multiple formats including PNG, SVG, EPS with light and dark variants",
    type: "ZIP",
    size: "1.8 MB", 
    icon: Camera,
    category: "Brand Assets"
  },
  {
    title: "Product Screenshots",
    description: "Professional screenshots showcasing key features of the Autography platform interface",
    type: "ZIP",
    size: "12.4 MB",
    icon: Camera,
    category: "Product Media"
  },
  {
    title: "Demo Video Kit",
    description: "Product demonstration videos, feature walkthroughs, and promotional content for media use",
    type: "ZIP",
    size: "85.2 MB",
    icon: Video,
    category: "Product Media"
  },
  {
    title: "Company Fact Sheet",
    description: "Key statistics, milestones, and company information for quick reference",
    type: "PDF",
    size: "890 KB",
    icon: FileText,
    category: "Company Info"
  },
  {
    title: "Executive Photos",
    description: "Professional headshots of leadership team and founder photos in high resolution",
    type: "ZIP",
    size: "15.6 MB",
    icon: Camera,
    category: "Team Assets"
  }
];

const pressReleases = [
  {
    title: "Autography Launches Revolutionary AI-Powered Journaling Platform",
    date: "September 1, 2024",
    category: "Product Launch",
    excerpt: "Revolutionary platform combines artificial intelligence with personal reflection to help users discover insights from their daily thoughts and experiences, marking a new era in digital wellness."
  },
  {
    title: "Autography Raises $12M Series A to Expand AI Capabilities and Global Reach",
    date: "July 15, 2024", 
    category: "Funding",
    excerpt: "Company secures funding led by prominent venture capital firms to enhance machine learning models, expand engineering team, and accelerate international expansion."
  },
  {
    title: "Clinical Study: Autography Users Show 40% Improvement in Mental Wellbeing",
    date: "June 3, 2024",
    category: "Research",
    excerpt: "Independent research conducted by Stanford University validates the positive impact of AI-guided journaling on user mental health, self-awareness, and emotional regulation."
  },
  {
    title: "Autography Partners with Leading Mental Health Organizations",
    date: "April 18, 2024",
    category: "Partnership",
    excerpt: "Strategic partnerships with mental health nonprofits and therapeutic practices to integrate journaling into wellness programs and clinical settings."
  }
];

const companyStats = [
  {
    icon: Users,
    number: "50K+",
    label: "Active Users",
    description: "Trusted by individuals worldwide"
  },
  {
    icon: Globe,
    number: "25+",
    label: "Countries",
    description: "Global reach and impact"
  },
  {
    icon: Award,
    number: "15+",
    label: "Awards",
    description: "Industry recognition received"
  },
  {
    icon: TrendingUp,
    number: "95%",
    label: "User Satisfaction",
    description: "Highly rated by our community"
  }
];

const teamMembers = [
  {
    name: "Raghav Newira",
    role: "CEO & Founder",
    bio: "Visionary entrepreneur with a passion for mental wellness technology. Previously founded successful startups in the health tech space.",
    image: "/team/raghav.jpg",
    linkedin: "https://linkedin.com/in/raghav-newira"
  },
  {
    name: "Dr. Priya Sharma",
    role: "Chief Technology Officer",
    bio: "PhD in Machine Learning from IIT Delhi. Former AI research lead with expertise in natural language processing and mental health applications.",
    image: "/team/priya.jpg",
    linkedin: "https://linkedin.com/in/priya-sharma"
  },
  {
    name: "Amit Patel",
    role: "Head of Product Design",
    bio: "Award-winning designer with 8+ years creating user-centered digital experiences. Previously led design at prominent Indian startups.",
    image: "/team/amit.jpg",
    linkedin: "https://linkedin.com/in/amit-patel"
  },
  {
    name: "Dr. Kavya Reddy",
    role: "Chief Psychology Officer",
    bio: "Licensed clinical psychologist and researcher specializing in digital therapeutics and AI-assisted mental health interventions.",
    image: "/team/kavya.jpg",
    linkedin: "https://linkedin.com/in/kavya-reddy"
  }
];

export default function PressPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background to-muted/20">
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
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6">
                <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
                Press & Media
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                Media resources, company information, and press materials for journalists, 
                bloggers, and content creators covering Autography and the future of AI-powered wellness.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:press@autography.ai"
                  className="inline-flex items-center gap-2 text-base font-normal text-blue-400 hover:text-blue-500 transition-colors group"
                >
                  Media Contact
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 -rotate-45 text-blue-400" />
                </a>
                <a 
                  href="#"
                  className="inline-flex items-center gap-2 text-base font-normal text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors group"
                >
                  Download Press Kit
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 -rotate-45 text-black dark:text-white" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Autography by the Numbers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key metrics and achievements that define our impact
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Resources */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Media Resources
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Download our brand assets, product images, and other resources for your stories
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pressResources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border hover:shadow-md hover:scale-[1.02] transition-all duration-300 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:bg-gray-100 dark:group-hover:bg-gray-800 transition-colors">
                    <resource.icon className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-foreground">{resource.title}</h3>
                      <span className="text-xs text-blue-400 font-medium">
                        {resource.category}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{resource.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{resource.type} • {resource.size}</span>
                      <a 
                        href="#" 
                        className="inline-flex items-center gap-2 text-sm font-normal text-blue-400 hover:text-blue-500 transition-colors group"
                      >
                        Download
                        <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1 -rotate-45 text-blue-400" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Recent News & Announcements
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Latest press releases and company announcements from Autography
            </p>
          </motion.div>

          <div className="space-y-6">
            {pressReleases.map((release, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 border border-border hover:shadow-md hover:scale-[1.02] transition-all duration-300 group cursor-pointer"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                      <span className="inline-flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                        {release.category}
                      </span>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {release.date}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                      {release.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{release.excerpt}</p>
                  </div>
                  <Button variant="outline" className="self-start">
                    Read More
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the visionaries and experts driving Autography's mission to transform digital wellness
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border hover:shadow-md hover:scale-[1.02] transition-all duration-300 text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-600 dark:text-gray-400">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-1">{member.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{member.bio}</p>
                <Button variant="outline" size="sm" className="w-full">
                  <ExternalLink className="w-3 h-3 mr-2" />
                  LinkedIn
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Media Inquiries
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                For press inquiries, interview requests, or additional information, 
                please contact our media relations team
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card rounded-2xl p-8 border border-border"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <a href="mailto:press@autography.ai" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
                          press@autography.ai
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      <div>
                        <p className="font-medium text-foreground">Phone</p>
                        <a href="tel:+918286666066" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
                          +91 8286666066
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      <div>
                        <p className="font-medium text-foreground">Response Time</p>
                        <p className="text-muted-foreground">Within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Press Kit Access</h3>
                  
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Get instant access to our complete press kit including high-resolution images, 
                      brand assets, executive bios, and company fact sheets.
                    </p>
                    
                    <div className="flex flex-col gap-3">
                      <Button className="bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-black w-full">
                        <Download className="w-4 h-4 mr-2" />
                        Download Complete Press Kit
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Mail className="w-4 h-4 mr-2" />
                        Request Interview
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
