'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Eye, Shield, AlertTriangle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function SecurityPage() {
  const securityFeatures = [
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "Your journal entries are encrypted before leaving your device and remain encrypted in our database.",
      details: "We use AES-256 encryption with unique keys for each user account."
    },
    {
      icon: Shield,
      title: "Zero-Knowledge Architecture",
      description: "We cannot read your journal entries even if we wanted to. Only you have the decryption keys.",
      details: "Your encryption keys are derived from your password and never stored on our servers."
    },
    {
      icon: Eye,
      title: "Privacy by Design",
      description: "Our AI processes your data locally or in encrypted form, ensuring maximum privacy.",
      details: "AI insights are generated without exposing your raw journal content to our systems."
    },
    {
      icon: ShieldCheck,
      title: "SOC 2 Type II Compliant",
      description: "We undergo regular third-party security audits to ensure the highest standards.",
      details: "Annual audits verify our security controls and data protection practices."
    }
  ];

  const securityMeasures = [
    {
      category: "Data Protection",
      measures: [
        "Military-grade AES-256 encryption for all data",
        "Encrypted backups stored in geographically distributed locations",
        "Regular penetration testing by security experts",
        "GDPR and CCPA compliance for data rights"
      ]
    },
    {
      category: "Infrastructure Security",
      measures: [
        "Multi-factor authentication for all team members",
        "Zero-trust network architecture",
        "Automated security monitoring and alerting",
        "Regular security patches and updates"
      ]
    },
    {
      category: "Access Controls",
      measures: [
        "Role-based access control (RBAC)",
        "Principle of least privilege",
        "Regular access reviews and deprovisioning",
        "Secure development lifecycle practices"
      ]
    },
    {
      category: "Incident Response",
      measures: [
        "24/7 security monitoring",
        "Incident response team on standby",
        "Automated threat detection and response",
        "Regular disaster recovery testing"
      ]
    }
  ];

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
              <ShieldCheck className="w-16 h-16 text-blue-600 dark:text-blue-400 mx-auto mb-6" />
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
                Security & Privacy
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                Your journal is deeply personal. We've built Autography with security and privacy as our top priorities, 
                ensuring your thoughts remain yours alone.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-16"
            >
              {/* Section Header */}
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Built-in Security Features
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Every aspect of Autography is designed with your privacy and security in mind.
                </p>
              </div>

              {/* Security Features Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {securityFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                        <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground mb-3">
                          {feature.description}
                        </p>
                        <p className="text-sm text-muted-foreground/80">
                          {feature.details}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-16"
            >
              {/* Section Header */}
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Comprehensive Security Measures
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Our multi-layered approach to security protects your data at every level.
                </p>
              </div>

              {/* Security Measures Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {securityMeasures.map((category, index) => (
                  <motion.div
                    key={category.category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-background rounded-2xl p-8 border border-border"
                  >
                    <h3 className="text-xl font-semibold text-foreground mb-6">
                      {category.category}
                    </h3>
                    <ul className="space-y-3">
                      {category.measures.map((measure, measureIndex) => (
                        <li key={measureIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{measure}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Compliance & Certifications */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-16"
            >
              {/* Section Header */}
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Compliance & Certifications
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  We adhere to international security standards and privacy regulations.
                </p>
              </div>

              {/* Certifications Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8 text-center">
                  <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">SOC 2 Type II</h3>
                  <p className="text-muted-foreground text-sm">
                    Independently audited security controls and practices
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8 text-center">
                  <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">GDPR Compliant</h3>
                  <p className="text-muted-foreground text-sm">
                    Full compliance with European data protection regulations
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8 text-center">
                  <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">ISO 27001</h3>
                  <p className="text-muted-foreground text-sm">
                    International standard for information security management
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security Best Practices */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Your Security Best Practices
                </h2>
              </div>
              
              <div className="bg-background rounded-2xl p-8 border border-border">
                <div className="flex items-start gap-4 mb-6">
                  <AlertTriangle className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Help Us Keep Your Account Secure
                    </h3>
                    <p className="text-muted-foreground">
                      While we handle the technical security, here's how you can protect your account:
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Password Security</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Use a unique, strong password</li>
                      <li>• Enable two-factor authentication</li>
                      <li>• Consider using a password manager</li>
                      <li>• Never share your login credentials</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Account Hygiene</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Log out on shared devices</li>
                      <li>• Review active sessions regularly</li>
                      <li>• Report suspicious activity immediately</li>
                      <li>• Keep your email address secure</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Security Team */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold text-foreground">
                  Security Concerns?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  If you discover a security vulnerability or have concerns about your account security, 
                  please contact our security team immediately.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8 text-center">
                <Shield className="w-12 h-12 text-red-600 dark:text-red-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Security Contact Information
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  For security-related issues, please email us directly. We take all security reports seriously 
                  and respond promptly to protect our users.
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong className="text-foreground">Email:</strong> security@autography.ai</p>
                  <p><strong className="text-foreground">PGP Key:</strong> Available upon request</p>
                  <p><strong className="text-foreground">Response Time:</strong> Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
