'use client';

import { motion } from 'framer-motion';
import { Cookie, Shield, Clock, Mail, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-background via-background to-gray-50 dark:to-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-2xl mb-8">
              <Cookie className="w-8 h-8 text-foreground" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-8">
              Cookie Policy
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
              Learn how we use cookies and similar technologies to enhance your experience on Autography.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Last updated: September 1, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>privacy@autography.ai</span>
              </div>
            </div>

            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-lg font-normal text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors group"
            >
              Back to Homepage
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 -rotate-45 text-black dark:text-white" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >

            {/* What Are Cookies */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">What Are Cookies?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and analyzing how you use our service.
              </p>
            </div>

            {/* How We Use Cookies */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-foreground">How We Use Cookies</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We use cookies for several purposes:
              </p>

              {/* Essential Cookies */}
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Essential Cookies</h3>
                <p className="text-muted-foreground mb-6">
                  These cookies are necessary for the website to function properly and cannot be disabled:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <div><strong className="text-foreground">Authentication:</strong> Keep you logged in during your session</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <div><strong className="text-foreground">Security:</strong> Protect against cross-site request forgery attacks</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <div><strong className="text-foreground">Load Balancing:</strong> Distribute traffic across our servers</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <div><strong className="text-foreground">Feature Toggles:</strong> Enable or disable certain features based on your account</div>
                  </li>
                </ul>
              </div>

              {/* Functional Cookies */}
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Functional Cookies</h3>
                <p className="text-muted-foreground mb-6">
                  These cookies enhance your experience but are not strictly necessary:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <div><strong className="text-foreground">Preferences:</strong> Remember your theme settings (dark/light mode)</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <div><strong className="text-foreground">Language:</strong> Store your preferred language</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <div><strong className="text-foreground">Interface:</strong> Remember your dashboard layout preferences</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <div><strong className="text-foreground">Accessibility:</strong> Store accessibility settings like font size</div>
                  </li>
                </ul>
              </div>

              {/* Analytics Cookies */}
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Analytics Cookies</h3>
                <p className="text-muted-foreground mb-6">
                  We use these to understand how you interact with our service:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <div><strong className="text-foreground">Usage Analytics:</strong> Track which features are most popular</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <div><strong className="text-foreground">Performance Monitoring:</strong> Identify slow-loading pages</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <div><strong className="text-foreground">Error Tracking:</strong> Help us fix bugs and improve stability</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <div><strong className="text-foreground">A/B Testing:</strong> Test new features with a subset of users</div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Third-Party Cookies */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-foreground">Third-Party Cookies</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We work with trusted third-party services that may set their own cookies:
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-foreground mb-3">Google Analytics</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Helps us understand website traffic and user behavior</li>
                    <li>• Data is anonymized and aggregated</li>
                    <li>• You can opt out using the Google Analytics Opt-out Browser Add-on</li>
                  </ul>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-foreground mb-3">Intercom</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Powers our customer support chat widget</li>
                    <li>• Remembers your conversation history</li>
                    <li>• Helps us provide better customer service</li>
                  </ul>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-foreground mb-3">Stripe</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Processes payments securely</li>
                    <li>• Prevents fraud and unauthorized transactions</li>
                    <li>• Required for subscription management</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cookie Details Table */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Cookie Details</h2>
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8 overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 text-foreground font-semibold">Cookie Name</th>
                      <th className="text-left py-3 text-foreground font-semibold">Purpose</th>
                      <th className="text-left py-3 text-foreground font-semibold">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border">
                      <td className="py-3 font-mono text-sm">autography_session</td>
                      <td className="py-3">Authentication and session management</td>
                      <td className="py-3">30 days</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 font-mono text-sm">theme_preference</td>
                      <td className="py-3">Remember dark/light mode setting</td>
                      <td className="py-3">1 year</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 font-mono text-sm">csrf_token</td>
                      <td className="py-3">Security protection</td>
                      <td className="py-3">Session</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 font-mono text-sm">_ga</td>
                      <td className="py-3">Google Analytics - distinguish users</td>
                      <td className="py-3">2 years</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-mono text-sm">_gid</td>
                      <td className="py-3">Google Analytics - distinguish users</td>
                      <td className="py-3">24 hours</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Managing Cookies */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-foreground">Managing Cookies</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                You have several options for managing cookies:
              </p>

              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">Browser Settings</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Chrome</h4>
                    <p className="text-muted-foreground text-sm">Settings → Privacy and Security → Cookies and other site data</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Firefox</h4>
                    <p className="text-muted-foreground text-sm">Preferences → Privacy & Security → Cookies and Site Data</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Safari</h4>
                    <p className="text-muted-foreground text-sm">Preferences → Privacy → Manage Website Data</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Edge</h4>
                    <p className="text-muted-foreground text-sm">Settings → Cookies and site permissions → Cookies and site data</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Our Cookie Controls</h3>
                <p className="text-muted-foreground mb-4">
                  When you first visit our site, you'll see a cookie banner where you can:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <div>Accept all cookies</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <div>Customize your preferences</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <div>Reject non-essential cookies</div>
                  </li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  You can change these preferences at any time by clicking the "Cookie Settings" link in our footer.
                </p>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8 text-center">
              <Shield className="w-12 h-12 text-foreground mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Your Privacy Matters</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                We're committed to being transparent about how we use cookies and giving you control over your data. 
                Our goal is to provide you with a personalized experience while respecting your privacy choices.
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p><strong className="text-foreground">Questions?</strong> Contact us at privacy@autography.ai</p>
                <p>We typically respond within 48 hours</p>
              </div>
            </div>

            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
