"use client";

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, MessageCircle, Clock, Users, Navigation } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { Card, CardContent } from '@/components/ui/card';

// Animation variants for staggered children
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

// Contact information data
const contactInfo = [
  {
    icon: Mail,
    title: 'Email Support',
    primary: 'newiraverse@outlook.com',
    secondary: 'We typically respond within 24 hours',
    action: 'mailto:newiraverse@outlook.com',
  },
  {
    icon: Phone,
    title: 'Phone Support',
    primary: '+91 8286666066',
    secondary: 'Mon-Fri, 9AM-6PM IST',
    action: 'tel:+918286666066',
  },
  {
    icon: MapPin,
    title: 'Office Address',
    primary: 'Himachal Pradesh',
    secondary: 'India',
    action: 'https://maps.google.com',
  },
];

// FAQ data
const faqs = [
  {
    question: 'How secure is my data?',
    answer: 'We use enterprise-grade encryption to protect your personal thoughts and entries.',
  },
  {
    question: 'Can I export my journal entries?',
    answer: 'Yes, you can export your data in multiple formats including PDF and JSON.',
  },
  {
    question: 'Is there a mobile app?',
    answer: 'Our mobile apps for iOS and Android are coming soon. Sign up for updates!',
  },
];

// Google Maps component
const GoogleMapEmbed = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="relative"
  >
    <Card className="overflow-hidden shadow-2xl border-0 ring-1 ring-border">
      <CardContent className="p-0">
        <div className="relative h-[400px] w-full">
          {/* Google Maps Embed */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456789.123456789!2d77.5!3d32.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390334e5c8d9c5b3%3A0x1234567890abcdef!2sHimachal%20Pradesh%2C%20India!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
          
          {/* Map overlay with location info */}
          <div className="absolute bottom-4 left-4 right-4">
            <Card className="bg-background/95 backdrop-blur-sm border-border">
              <CardContent className="p-3">
                <div className="flex items-start gap-2">
                  <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center">
                    <Navigation className="w-4 h-4 text-background" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground text-sm">
                      Our Location
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Himachal Pradesh, India
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Beautiful mountains, innovative solutions
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

// Contact method card component
const ContactCard = ({ 
  icon: Icon, 
  title, 
  primary, 
  secondary, 
  action 
}: { 
  icon: any; 
  title: string; 
  primary: string; 
  secondary: string; 
  action: string; 
}) => (
  <motion.div variants={itemVariants}>
    <Card className="group h-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 border-border hover:border-blue-400/50 cursor-pointer max-w-xs mx-auto">
      <CardContent className="p-2">
        <a 
          href={action}
          className="block space-y-1"
          target={action.startsWith('http') ? '_blank' : undefined}
          rel={action.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          <div className="w-6 h-6 rounded-lg bg-muted/50 dark:bg-muted/30 flex items-center justify-center group-hover:bg-muted transition-colors duration-300 mx-auto">
            <Icon className="w-3 h-3 text-foreground" />
          </div>
          
          <div className="space-y-0.5 text-center">
            <h3 className="text-xs font-semibold text-foreground group-hover:text-foreground transition-colors duration-300">
              {title}
            </h3>
            <p className="text-xs font-medium text-foreground">
              {primary}
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {secondary}
            </p>
          </div>
        </a>
      </CardContent>
    </Card>
  </motion.div>
);

// FAQ item component
const FAQItem = ({ question, answer }: { question: string; answer: string }) => (
  <motion.div variants={itemVariants}>
    <Card className="border-border">
      <CardContent className="p-4">
        <h4 className="text-base font-semibold text-foreground mb-2">
          {question}
        </h4>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {answer}
        </p>
      </CardContent>
    </Card>
  </motion.div>
);

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="max-w-4xl mx-auto space-y-6">
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-foreground">
                Get in <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Touch</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Have questions about Autography? Our team is here to help you on your journaling journey. 
                Reach out through any of the channels below.
              </p>
              
              {/* Quick stats */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex flex-wrap justify-center gap-8 mt-12"
              >
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-5 h-5 text-foreground" />
                  <span className="text-sm font-medium">24h Response Time</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MessageCircle className="w-5 h-5 text-foreground" />
                  <span className="text-sm font-medium">Expert Support</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="w-5 h-5 text-foreground" />
                  <span className="text-sm font-medium">10k+ Happy Users</span>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Contact Methods */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-20"
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Choose Your Preferred Way
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Whether you prefer email, phone, or want to visit us in person, we're ready to help.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-4xl mx-auto">
              {contactInfo.map((info, index) => (
                <ContactCard key={index} {...info} />
              ))}
            </div>
          </motion.section>

          {/* Contact Form Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Form intro */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <h2 className="text-3xl font-bold text-foreground">
                    Send us a Message
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Tell us about your experience, ask questions, or share feedback. 
                    We read every message and respond personally.
                  </p>
                </div>
                
                {/* Response time indicator */}
                <div className="p-6 bg-muted/30 rounded-2xl border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        Quick Response Guarantee
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        We typically respond to all inquiries within 24 hours during business days. 
                        For urgent matters, please call us directly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-background">
                <ContactForm />
              </div>
            </div>
          </motion.section>

          {/* Google Maps Location Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Visit Our Location
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Located in the beautiful state of Himachal Pradesh, India. 
                Experience the perfect blend of nature and innovation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
              {/* Map */}
              <div className="lg:col-span-2">
                <GoogleMapEmbed />
              </div>
              
              {/* Location details */}
              <div className="space-y-4">
                <Card className="border-border">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground text-sm mb-1">
                          Office Address
                        </h3>
                        <p className="text-muted-foreground text-sm mb-2">
                          Himachal Pradesh<br />
                          India
                        </p>
                        <a 
                          href="https://maps.google.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-medium text-foreground hover:text-muted-foreground transition-colors"
                        >
                          <Navigation className="w-3 h-3" />
                          Get Directions
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-border">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                        <Clock className="w-5 h-5 text-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground text-sm mb-1">
                          Business Hours
                        </h3>
                        <div className="space-y-0.5 text-xs text-muted-foreground">
                          <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                          <p>Saturday: 10:00 AM - 4:00 PM</p>
                          <p>Sunday: Closed</p>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          All times in Indian Standard Time (IST)
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.section>

          {/* FAQ Section */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-16"
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Quick answers to common questions about Autography.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {faqs.map((faq, index) => (
                <FAQItem key={index} {...faq} />
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
