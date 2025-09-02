'use client';

import { motion } from 'framer-motion';
import { FileText, Clock, Mail, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function TermsPage() {
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
              <FileText className="w-16 h-16 text-blue-600 dark:text-blue-400 mx-auto mb-6" />
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
                Terms of Service
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                These terms govern your use of Autography. Please read them carefully.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Last updated: September 1, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>Questions? legal@autography.ai</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-16"
            >
            
            {/* Acceptance of Terms */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">1. Acceptance of Terms</h2>
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8">
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using Autography ("Service"), you agree to be bound by these Terms of Service ("Terms"). 
                  If you disagree with any part of these terms, you may not access the Service.
                </p>
              </div>
            </div>

            {/* Description of Service */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">2. Description of Service</h2>
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8">
                <p className="text-muted-foreground mb-4">Autography is an AI-powered digital journaling platform that provides:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <div>Digital journaling tools and interfaces</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <div>AI-powered insights and analysis of your journal entries</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <div>Data visualization and pattern recognition</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <div>Community features for connecting with other users</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <div>Export and backup capabilities</div>
                  </li>
                </ul>
              </div>
            </div>

            {/* User Accounts */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">3. User Accounts</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">Account Creation</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <div>You must provide accurate and complete information when creating an account</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <div>You are responsible for maintaining the security of your account</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <div>You must be at least 13 years old to use our Service</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <div>One person may not maintain multiple accounts</div>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">Account Responsibilities</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <div>You are responsible for all activities under your account</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <div>Notify us immediately of any unauthorized use</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <div>Keep your login credentials secure and confidential</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Acceptable Use */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">4. Acceptable Use</h2>
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8">
                <p className="text-muted-foreground mb-4">You agree not to use the Service to:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <div>Violate any laws or regulations</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <div>Infringe on others' rights or privacy</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <div>Transmit harmful, threatening, or offensive content</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <div>Attempt to gain unauthorized access to our systems</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <div>Interfere with the Service's operation</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <div>Use the Service for commercial purposes without permission</div>
                  </li>
                </ul>
              </div>
            </div>

            {/* AI Processing and Content */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">5. AI Processing and Content</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">Your Content</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <div>You retain ownership of your journal entries and personal content</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <div>You grant us license to process your content to provide AI insights</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <div>Your content will not be shared with other users without your consent</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <div>You can export or delete your content at any time</div>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">AI Analysis</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <div>AI insights are provided for informational purposes only</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <div>Results should not be considered professional advice</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <div>We do not guarantee the accuracy of AI-generated insights</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Subscription and Payment */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">6. Subscription and Payment</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">Billing</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <div>Subscription fees are billed in advance on a recurring basis</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <div>All fees are non-refundable except as required by law</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <div>We may change our pricing with 30 days' notice</div>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">Cancellation</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <div>You may cancel your subscription at any time</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <div>Cancellation takes effect at the end of your billing period</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <div>No refunds for partial billing periods</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Privacy and Data Protection */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">7. Privacy and Data Protection</h2>
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8">
                <p className="text-muted-foreground leading-relaxed">
                  Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information. 
                  By using our Service, you agree to our Privacy Policy.
                </p>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">8. Intellectual Property</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">Our Rights</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <div>Autography owns all rights to the Service and its technology</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <div>Our trademarks, logos, and branding are protected</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <div>You may not copy, modify, or reverse engineer our Service</div>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">Your Rights</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <div>You retain all rights to your original content</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <div>You may export your data at any time</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <div>We do not claim ownership of your journal entries</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service Availability */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">9. Service Availability</h2>
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8">
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <div>We strive for 99.9% uptime but cannot guarantee uninterrupted service</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <div>We may perform maintenance that temporarily affects availability</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <div>We are not liable for service interruptions beyond our control</div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Legal Disclaimers */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">10. Important Legal Information</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">Disclaimers</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND. 
                    WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY 
                    AND FITNESS FOR A PARTICULAR PURPOSE.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">Limitation of Liability</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    IN NO EVENT SHALL AUTOGRAPHY BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, 
                    OR CONSEQUENTIAL DAMAGES, INCLUDING LOSS OF DATA, REVENUE, OR PROFITS.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">Indemnification</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You agree to indemnify and hold harmless Autography from any claims, damages, 
                    or expenses arising from your use of the Service or violation of these Terms.
                  </p>
                </div>
              </div>
            </div>

            {/* Termination */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">11. Termination</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">By You</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <div>You may terminate your account at any time</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <div>Data export is available for 30 days after termination</div>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">By Us</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <div>We may terminate accounts that violate these Terms</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <div>We may discontinue the Service with 30 days' notice</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Final Terms */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">12. Final Terms</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">Governing Law</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    These Terms are governed by the laws of India. Any disputes will be resolved 
                    in the courts of Himachal Pradesh, India.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">Changes to Terms</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We may modify these Terms at any time. Material changes will be communicated via email 
                    or in-app notification. Continued use of the Service constitutes acceptance of modified Terms.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8 text-center">
              <FileText className="w-12 h-12 text-foreground mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Questions About These Terms?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                We're here to help clarify any questions you have about these Terms of Service. 
                Our goal is to provide a transparent and fair service that respects your rights while protecting our platform.
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p><strong className="text-foreground">Email:</strong> legal@autography.ai</p>
                <p><strong className="text-foreground">Address:</strong> Himachal Pradesh, India</p>
                <p><strong className="text-foreground">Phone:</strong> +91 8286666066</p>
              </div>
            </div>

            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
