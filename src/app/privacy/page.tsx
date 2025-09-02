'use client';

import { motion } from 'framer-motion';
import { Shield, Clock, Mail, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPage() {
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
              <Shield className="w-16 h-16 text-blue-600 dark:text-blue-400 mx-auto mb-6" />
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Your privacy is our top priority. Learn how we collect, use, and protect your personal information.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Last updated: September 1, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>Questions? privacy@autography.ai</span>
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
            
            {/* Information We Collect */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">1. Information We Collect</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">Information You Provide</h3>
                  <p className="text-muted-foreground mb-4">When you use Autography, you may provide us with:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <div><strong>Account Information:</strong> Email address, name, and password when you create an account</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <div><strong>Journal Content:</strong> Text entries, mood data, and other personal reflections you choose to share</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <div><strong>Profile Information:</strong> Optional profile details like timezone, preferences, and settings</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <div><strong>Communication Data:</strong> Messages you send to our support team or community features</div>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">Information We Collect Automatically</h3>
                  <p className="text-muted-foreground mb-4">When you use our service, we automatically collect:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <div><strong>Usage Data:</strong> How you interact with our app, features used, time spent, and navigation patterns</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <div><strong>Device Information:</strong> Device type, operating system, browser type, and IP address</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <div><strong>Log Data:</strong> Server logs, error reports, and performance metrics</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">2. How We Use Your Information</h2>
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8">
                <p className="text-muted-foreground mb-4">We use your information to:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <div><strong>Provide AI Insights:</strong> Analyze your journal entries to generate personalized insights and patterns</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <div><strong>Improve Our Service:</strong> Enhance features, fix bugs, and develop new capabilities</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <div><strong>Personalize Experience:</strong> Customize prompts, themes, and recommendations</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <div><strong>Ensure Security:</strong> Protect against fraud, abuse, and security threats</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <div><strong>Communicate:</strong> Send important updates, security alerts, and support responses</div>
                  </li>
                </ul>
              </div>
            </div>

            {/* AI Processing and Data Security */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">3. AI Processing and Data Security</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">How AI Analysis Works</h3>
                  <p className="text-muted-foreground mb-4">Our AI analyzes your journal entries to provide insights about:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <div>Emotional patterns and mood trends</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <div>Personal growth indicators</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <div>Writing style and communication patterns</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <div>Goal progress and achievement patterns</div>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">Data Protection Measures</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <div><strong>Encryption:</strong> All data is encrypted in transit and at rest using industry-standard AES-256 encryption</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <div><strong>Access Controls:</strong> Strict access controls ensure only authorized personnel can access systems</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <div><strong>Regular Audits:</strong> We conduct regular security audits and penetration testing</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <div><strong>Data Minimization:</strong> We only collect and process data necessary for our services</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Sharing and Disclosure */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">4. Data Sharing and Disclosure</h2>
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8 mb-6">
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell your personal information. We may share information in limited circumstances:
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">Service Providers</h3>
                  <p className="text-muted-foreground mb-4">We work with trusted third-party providers for:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <div>Cloud hosting and data storage</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <div>AI processing and analysis</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <div>Payment processing</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <div>Customer support tools</div>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">Legal Requirements</h3>
                  <p className="text-muted-foreground mb-4">We may disclose information if required by law or to:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <div>Comply with legal processes</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <div>Protect our rights and property</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <div>Ensure user safety and security</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <div>Investigate potential violations</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Your Rights and Choices */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">5. Your Rights and Choices</h2>
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8 mb-6">
                <p className="text-muted-foreground mb-4">You have the right to:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <div><strong>Access:</strong> Request a copy of your personal data</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <div><strong>Correct:</strong> Update or correct inaccurate information</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <div><strong>Delete:</strong> Request deletion of your account and data</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <div><strong>Export:</strong> Download your journal entries and data</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <div><strong>Opt-out:</strong> Disable certain data processing features</div>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">How to Exercise Your Rights</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To exercise these rights, contact us at privacy@autography.ai or use the settings in your account dashboard.
                </p>
              </div>
            </div>

            {/* Data Retention */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">6. Data Retention</h2>
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8">
                <p className="text-muted-foreground mb-4">We retain your information for as long as:</p>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <div>Your account is active</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <div>Needed to provide our services</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <div>Required by law or regulation</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <div>Necessary for legitimate business purposes</div>
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  When you delete your account, we will delete your personal information within 30 days, except where retention is required by law.
                </p>
              </div>
            </div>

            {/* International Data Transfers */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">7. International Data Transfers</h2>
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8">
                <p className="text-muted-foreground mb-4">
                  Autography operates globally. Your information may be transferred to and processed in countries other than your own. 
                  We ensure adequate protection through:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <div>Standard contractual clauses</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <div>Adequacy decisions by relevant authorities</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <div>Other appropriate safeguards</div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Additional Policies */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">8. Additional Policies</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">Children's Privacy</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Autography is not intended for children under 13. We do not knowingly collect personal information from children under 13. 
                    If we become aware that we have collected such information, we will delete it promptly.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">Changes to This Policy</h3>
                  <p className="text-muted-foreground mb-4">We may update this Privacy Policy from time to time. We will notify you of material changes by:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <div>Posting the updated policy on our website</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <div>Sending an email notification</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                      <div>Displaying a prominent notice in our app</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8 text-center">
              <Shield className="w-12 h-12 text-foreground mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Commitment to Privacy</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                At Autography, we believe your thoughts and reflections are deeply personal. 
                We're committed to protecting your privacy and giving you control over your data. 
                This isn't just a legal requirement—it's a fundamental part of who we are.
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p><strong className="text-foreground">Email:</strong> privacy@autography.ai</p>
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
