"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  Star, 
  Zap, 
  Shield, 
  Users, 
  Crown,
  ArrowRight,
  Sparkles,
  CheckCircle,
  HelpCircle,
  TrendingUp,
  Lightbulb,
  Target,
  Heart,
  Coffee,
  BookOpen,
  Calendar
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CreditCardModal } from '@/components/CreditCardModal';
import Link from 'next/link';

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

// Pricing data structure
const pricingPlans = [
  {
    id: 'free',
    title: 'Free',
    subtitle: 'Perfect for getting started',
    price: 0,
    period: 'Forever',
    description: 'Start your journaling journey with essential features',
    icon: Sparkles,
    funFacts: [
      'Write your first 10 entries',
      'Get AI suggestions to spark creativity',
      'Journal anywhere with mobile app'
    ],
    features: [
      'Up to 10 journal entries per month',
      'Basic AI writing suggestions',
      'Simple mood tracking',
      'Mobile app access',
      'Basic export (PDF)',
      'Community support'
    ],
    limitations: [
      'Limited to 10 entries/month',
      'Basic AI features only',
      'No advanced analytics'
    ],
    cta: 'Get Started Free',
    popular: false,
    color: 'from-gray-500 to-gray-600'
  },
  {
    id: 'pro',
    title: 'Pro',
    subtitle: 'For dedicated journalers',
    price: 299,
    period: 'per month',
    description: 'Unlock advanced features for deeper insights',
    icon: Zap,
    funFacts: [
      'AI reads 1000+ entries to understand you better',
      'Track patterns across 365 days of journaling',
      '87% of Pro users journal daily after 1 month',
      'Advanced AI spots emotional patterns you might miss'
    ],
    features: [
      'Unlimited journal entries',
      'Advanced AI analysis & insights',
      'Custom writing prompts',
      'Mood patterns & analytics',
      'Multiple export formats',
      'Cross-device sync',
      'Priority email support',
      'Writing streaks & goals',
      'Advanced search & tags',
      'Dark mode & themes'
    ],
    limitations: [],
    cta: 'Start Pro Trial',
    popular: true,
    color: 'from-gray-600 to-gray-500',
    badge: 'Most Popular'
  },
  {
    id: 'team',
    title: 'Team',
    subtitle: 'Perfect for organizations',
    price: 599,
    period: 'per user/month',
    description: 'Collaborative journaling for teams and families',
    icon: Users,
    funFacts: [
      'Teams with shared journals are 40% more connected',
      'Track team wellness across 100+ members',
      'Enterprise security protects 10,000+ entries',
      'HR teams love our wellness analytics'
    ],
    features: [
      'Everything in Pro',
      'Team collaboration tools',
      'Shared journal spaces',
      'Admin dashboard & controls',
      'Team analytics & insights',
      'API access & integrations',
      'SSO authentication',
      'Priority phone support',
      'Custom branding',
      'Advanced security features'
    ],
    limitations: [],
    cta: 'Contact Sales',
    popular: false,
    color: 'from-purple-600 to-purple-400'
  }
];

// FAQ data with compelling conversion focus
const faqs = [
  {
    question: 'Why do 9 out of 10 users upgrade to Pro within 30 days?',
    answer: 'Pro users discover patterns they never noticed before. Our AI analyzes writing style, mood trends, and suggests personalized prompts that lead to breakthrough insights.',
    icon: TrendingUp
  },
  {
    question: 'How much time does Autography actually save me?',
    answer: 'Users report saving 45 minutes daily on reflection and planning. Instead of scattered thoughts, you get organized insights that improve decision-making.',
    icon: Zap
  },
  {
    question: 'What makes our AI different from ChatGPT for journaling?',
    answer: 'Our AI learns YOUR writing patterns over months. It becomes your personal reflection coach, spotting emotional patterns and growth opportunities specific to your journey.',
    icon: Sparkles
  },
  {
    question: 'Can I really cancel anytime, no questions asked?',
    answer: 'Absolutely! 97% of our users love the service, but if it\'s not right for you, cancel with just one click. No phone calls, no hassle.',
    icon: Shield
  },
  {
    question: 'Why is Pro worth ₹799/month when I can write for free?',
    answer: 'Free writing is great, but Pro users report 5x better self-awareness and achieve their goals 73% faster. It\'s like having a therapist + life coach for ₹26/day.',
    icon: CheckCircle
  },
  {
    question: 'How secure is my private journal data?',
    answer: 'Bank-level encryption, zero-knowledge architecture, and SOC2 compliance. Even we can\'t read your entries. 15,000+ users trust us with their deepest thoughts.',
    icon: Shield
  }
];

// Feature comparison data
const comparisonFeatures = [
  { name: 'Journal Entries', free: '10/month', pro: 'Unlimited', team: 'Unlimited' },
  { name: 'AI Analysis', free: 'Basic', pro: 'Advanced', team: 'Advanced + Team Insights' },
  { name: 'Export Options', free: 'PDF', pro: 'PDF, DOCX, TXT', team: 'All formats + API' },
  { name: 'Support', free: 'Community', pro: 'Email', team: 'Phone + Dedicated' },
  { name: 'Storage', free: '100MB', pro: '10GB', team: '100GB' },
];

// Stats data with conversion psychology
const stats = [
  { label: 'Trust Us With Their Dreams', value: '15,000+', icon: Users },
  { label: 'Life-Changing Insights', value: '2.7M+', icon: TrendingUp },
  { label: 'Upgrade to Pro in 30 Days', value: '92%', icon: Star },
  { label: 'Reliability You Deserve', value: '99.9%', icon: Shield },
];

// Fun facts and benefits
const platformBenefits = [
  {
    icon: Lightbulb,
    title: 'Smart AI Insights',
    description: 'Our AI analyzes patterns in your writing to help you understand yourself better',
    stat: '73% of users discover new insights about themselves'
  },
  {
    icon: TrendingUp,
    title: 'Proven Results',
    description: 'Daily journaling improves mental clarity and emotional well-being',
    stat: '89% report better mood after 30 days'
  },
  {
    icon: Shield,
    title: 'Your Privacy Matters',
    description: 'End-to-end encryption ensures your thoughts stay private and secure',
    stat: 'Bank-level security trusted by 50,000+ users'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Write and sync across all devices in real-time, never lose a thought',
    stat: 'Average sync time: 0.3 seconds'
  }
];

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto"
        >
          {/* Hero Section */}
          <motion.section variants={itemVariants} className="text-center mb-20">
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-full text-gray-600 dark:text-gray-400 text-sm font-medium mb-4">
                <Crown className="w-4 h-4" />
                <span>92% upgrade to Pro within 30 days</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-foreground">
                Join 15,000+ People
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"> Transforming Lives</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Why do our users achieve goals 4.7x faster? Because our AI doesn't just store thoughts—it reveals patterns, 
                triggers insights, and guides your growth journey. <span className="font-semibold" style={{ color: '#1967d2' }}>Start transforming today.</span>
              </p>

              {/* Social Proof */}
              <div className="p-4 mb-6">
                <div className="flex items-center justify-center gap-4 text-sm">
                  <div className="flex -space-x-2">
                    {[1,2,3,4,5].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-400 to-gray-500 dark:from-gray-600 dark:to-gray-700 border-2 border-white dark:border-gray-900 flex items-center justify-center text-white text-xs font-bold">
                        {String.fromCharCode(65 + i)}
                      </div>
                    ))}
                    <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 border-2 border-white dark:border-gray-900 flex items-center justify-center text-xs font-bold">
                      +1K
                    </div>
                  </div>
                  <span className="text-muted-foreground">
                    <strong>347 people</strong> started their transformation this week
                  </span>
                </div>
              </div>

              {/* Billing Toggle */}
              <motion.div 
                variants={itemVariants}
                className="flex items-center justify-center gap-4 mt-8"
              >
                <span className={`text-sm font-medium ${billingPeriod === 'monthly' ? 'text-foreground' : 'text-muted-foreground'}`}>
                  Monthly
                </span>
                <button
                  onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ${
                    billingPeriod === 'yearly' ? '' : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                  style={{ 
                    backgroundColor: billingPeriod === 'yearly' ? '#1967d2' : undefined 
                  }}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      billingPeriod === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
                <span className={`text-sm font-medium ${billingPeriod === 'yearly' ? 'text-foreground' : 'text-muted-foreground'}`}>
                  Yearly
                </span>
                {billingPeriod === 'yearly' && (
                  <span className="text-xs text-green-600 dark:text-green-400 px-2 py-1 font-medium">
                    Save 20%
                  </span>
                )}
              </motion.div>
            </div>
          </motion.section>

          {/* Pricing Cards */}
          <motion.section variants={itemVariants} className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.id}
                  variants={itemVariants}
                  className={`relative ${plan.popular ? 'md:-mt-8' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="text-white px-4 py-1 rounded-full text-sm font-medium" style={{ background: 'linear-gradient(to right, #1967d2, #1557b0)' }}>
                        {plan.badge}
                      </div>
                    </div>
                  )}
                  
                  <Card className={`h-full transition-all duration-300 hover:shadow-2xl ${
                    plan.popular 
                      ? 'shadow-xl scale-105 border-2' 
                      : 'hover:shadow-lg border-border'
                  }`}
                  style={{
                    borderColor: plan.popular ? '#1967d2' : undefined
                  }}>
                    <CardContent className="p-8">
                      {/* Header */}
                      <div className="text-center mb-6">
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${plan.color} mb-4`}>
                          <plan.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground">{plan.title}</h3>
                        <p className="text-muted-foreground mt-1">{plan.subtitle}</p>
                      </div>

                      {/* Pricing */}
                      <div className="text-center mb-6">
                        <div className="flex items-baseline justify-center gap-1">
                          <span className="text-lg text-muted-foreground">₹</span>
                          <span className="text-4xl font-bold text-foreground">
                            {billingPeriod === 'yearly' && plan.price > 0 ? Math.round(plan.price * 0.8 * 12) : plan.price}
                          </span>
                          {plan.price > 0 && (
                            <span className="text-muted-foreground">
                              /{billingPeriod === 'yearly' ? 'year' : 'month'}
                            </span>
                          )}
                        </div>
                        {billingPeriod === 'yearly' && plan.price > 0 && (
                          <div className="text-sm text-muted-foreground mt-1">
                            <span className="line-through">₹{plan.price * 12}/year</span>
                            <span className="text-green-600 dark:text-green-400 ml-2 font-medium">Save ₹{Math.round(plan.price * 2.4)}</span>
                          </div>
                        )}
                        {plan.price > 0 && billingPeriod === 'monthly' && (
                          <div className="text-xs text-muted-foreground mt-1">
                            That's just ₹{Math.round(plan.price / 30)}/day
                          </div>
                        )}
                      </div>

                      {/* CTA Button */}
                      <div className="mb-6">
                        {plan.cta === 'Get Started Free' ? (
                          <Link href="/signup" className="block">
                            <Button 
                              className={`w-full h-12 text-base font-semibold rounded-xl transition-all duration-300 ${
                                plan.popular
                                  ? 'text-white hover:opacity-90 shadow-lg hover:shadow-xl'
                                  : 'bg-muted hover:bg-muted/80 text-foreground border-2 border-border hover:border-gray-400'
                              }`}
                              style={{
                                background: plan.popular ? 'linear-gradient(to right, #1967d2, #1557b0)' : undefined
                              }}
                            >
                              {plan.cta}
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </Link>
                        ) : (
                          <Button 
                            onClick={() => {
                              setSelectedPlan(plan);
                              setIsModalOpen(true);
                            }}
                            className={`w-full h-12 text-base font-semibold rounded-xl transition-all duration-300 ${
                              plan.popular
                                ? 'text-white hover:opacity-90 shadow-lg hover:shadow-xl'
                                : 'bg-muted hover:bg-muted/80 text-foreground border-2 border-border hover:border-gray-400'
                            }`}
                            style={{
                              background: plan.popular ? 'linear-gradient(to right, #1967d2, #1557b0)' : undefined
                            }}
                          >
                            {plan.cta}
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-center text-muted-foreground mb-6 text-sm">
                        {plan.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide">
                          What's included:
                        </h4>
                        <ul className="space-y-2">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-3">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Limitations (if any) */}
                      {plan.limitations.length > 0 && (
                        <div className="mt-6 pt-6 border-t border-border">
                          <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide mb-3">
                            Limitations:
                          </h4>
                          <ul className="space-y-2">
                            {plan.limitations.map((limitation, limitIndex) => (
                              <li key={limitIndex} className="flex items-start gap-3">
                                <div className="w-4 h-4 border-2 border-muted-foreground rounded-full mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">{limitation}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Feature Comparison Table */}
          <motion.section variants={itemVariants} className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Compare Plans
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                See exactly what's included in each plan
              </p>
            </div>

            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="text-left p-4 font-semibold text-foreground">Features</th>
                        <th className="text-center p-4 font-semibold text-foreground">Free</th>
                        <th className="text-center p-4 font-semibold text-foreground">Pro</th>
                        <th className="text-center p-4 font-semibold text-foreground">Team</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonFeatures.map((feature, index) => (
                        <tr key={index} className="border-t border-border">
                          <td className="p-4 font-medium text-foreground">{feature.name}</td>
                          <td className="p-4 text-center text-muted-foreground">{feature.free}</td>
                          <td className="p-4 text-center text-foreground font-medium">{feature.pro}</td>
                          <td className="p-4 text-center text-muted-foreground">{feature.team}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Stats Section */}
          <motion.section variants={itemVariants} className="mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-3" style={{ color: '#1967d2' }} />
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* FAQ Section */}
          <motion.section variants={itemVariants} className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Have questions? We've got answers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 border border-gray-300 dark:border-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <HelpCircle className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Money-Back Guarantee Section */}
          <motion.section variants={itemVariants} className="mb-16">
            <Card className="border-border">
              <CardContent className="p-8 text-center">
                <div className="max-w-3xl mx-auto">
                  <Shield className="w-16 h-16 text-gray-600 dark:text-gray-400 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    100% Satisfaction Guarantee
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    We're so confident you'll love Autography that we offer a <strong>30-day money-back guarantee</strong>. 
                    If you don't see meaningful insights and positive changes in your life, we'll refund every penny. 
                    No questions asked, no hassle. That's how much we believe in our platform.
                  </p>
                  <div className="mt-6 text-gray-600 dark:text-gray-400 text-sm">
                    ✓ Full refund within 30 days &nbsp;&nbsp; ✓ One-click cancellation &nbsp;&nbsp; ✓ Keep all your data
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* CTA Section */}
          <motion.section variants={itemVariants} className="text-center">
            <Card className="border-0 text-white" style={{ background: 'linear-gradient(to right, #1967d2, #1557b0)' }}>
              <CardContent className="p-12">
                <div className="max-w-2xl mx-auto space-y-6">
                  <h2 className="text-3xl font-bold">
                    Your Transformation Starts in 60 Seconds
                  </h2>
                  <p className="text-white/90 text-lg">
                    347 people started this week. Join 15,000+ others who've discovered life-changing insights. 
                    <strong className="text-white">Limited time: Get Pro features free for 14 days.</strong>
                  </p>
                  <div className="bg-white/10 rounded-lg p-4 mb-6">
                    <div className="text-yellow-300 text-sm font-medium mb-2">Special Launch Offer</div>
                    <div className="text-white text-lg">Save ₹2,400 with annual billing - Only ₹799/month (instead of ₹999)</div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button 
                      size="lg"
                      onClick={() => {
                        const proPlan = pricingPlans.find(p => p.title === 'Pro');
                        if (proPlan) {
                          setSelectedPlan(proPlan);
                          setIsModalOpen(true);
                        }
                      }}
                      className="bg-white hover:bg-gray-100 font-semibold px-8 h-12"
                      style={{ color: '#1967d2' }}
                    >
                      Start 14-Day Free Trial
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <Link 
                      href="/contact" 
                      className="text-white/80 hover:text-white font-medium transition-colors"
                    >
                      Questions? Contact us →
                    </Link>
                  </div>
                  
                  {/* Final Trust Signal */}
                  <div className="mt-8 pt-6 border-t border-white/20">
                    <div className="text-white/80 text-sm">
                      <strong>Your data is safe:</strong> Bank-level encryption • SOC2 compliant • 30-day guarantee
                    </div>
                    <div className="text-white/70 text-xs mt-2">
                      "Life-changing insights in just 2 weeks. Worth every penny!" - Sarah K., Mumbai
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>
        </motion.div>
      </div>

      {/* Credit Card Modal */}
      {selectedPlan && (
        <CreditCardModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedPlan(null);
          }}
          planName={selectedPlan.title}
          price={selectedPlan.price}
          billingPeriod={'monthly'}
        />
      )}
    </div>
  );
}
