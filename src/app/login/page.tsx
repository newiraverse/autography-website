"use client";

import { useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  ArrowRight, 
  Shield,
  Sparkles,
  CheckCircle,
  AlertCircle,
  CreditCard,
  Clock
} from "lucide-react";

// Social login icons (you would typically import these from a library)
const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

const AppleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  rememberMe: z.boolean(),
});

type LoginForm = z.infer<typeof loginSchema>;

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

const socialProviders = [
  {
    name: "Google",
    icon: GoogleIcon,
    color: "hover:bg-blue-50 dark:hover:bg-blue-950/20 border-blue-200 dark:border-blue-800",
    action: () => console.log("Google login"),
  },
  {
    name: "Apple",
    icon: AppleIcon,
    color: "hover:bg-gray-50 dark:hover:bg-gray-950/20 border-gray-200 dark:border-gray-800",
    action: () => console.log("Apple login"),
  },
];

const features = [
  { icon: Shield, text: "Enterprise-grade security" },
  { icon: Sparkles, text: "AI-powered insights" },
  { icon: CheckCircle, text: "Seamless sync across devices" },
];

// Component that uses useSearchParams
function LoginContent() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginType, setLoginType] = useState<'email' | 'social'>('email');
  const [showTrialMessage, setShowTrialMessage] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    // Check if user came from trial completion or payment flow
    const message = searchParams.get('message');
    const trial = searchParams.get('trial');
    const returnTo = searchParams.get('returnTo');
    
    if (message === 'complete-signup' && trial === 'started') {
      setShowTrialMessage(true);
    } else if (message === 'complete-payment' && returnTo === 'payment') {
      // Show different message for payment flow
      setShowTrialMessage(true);
    }
  }, [searchParams]);

  const form = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (data: LoginForm) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Login data:", data);
    setIsLoading(false);
  };

  const handleSocialLogin = (provider: string) => {
    setIsLoading(true);
    console.log(`${provider} login initiated`);
    // Simulate social login
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        {/* Left side - Branding & Features */}
        <motion.div variants={itemVariants} className="hidden lg:block space-y-8">
          <div className="space-y-6">
            <Link href="/" className="inline-block group">
              <h1 className="text-4xl font-bold tracking-tight text-foreground group-hover:text-blue-600 transition-colors duration-300">
                Autography
              </h1>
            </Link>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground leading-tight">
                Welcome back to your
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"> digital journal</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                Continue your journey of self-discovery and reflection with AI-powered insights 
                that help you understand your thoughts and emotions better.
              </p>
            </div>
          </div>

          {/* Feature highlights */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 border border-border"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950 flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-blue-600" />
                </div>
                <span className="font-medium text-foreground">{feature.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6 pt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">10k+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">1M+</div>
              <div className="text-sm text-muted-foreground">Journal Entries</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right side - Login Form */}
        <motion.div variants={itemVariants} className="w-full max-w-md mx-auto lg:mx-0">
          <Card className="shadow-2xl border-0 ring-1 ring-border bg-background/80 backdrop-blur-sm">
            <CardContent className="p-8">
              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Welcome Back
                </h3>
                <p className="text-muted-foreground">
                  Sign in to continue your journaling journey
                </p>
              </div>

              {/* Trial Success Message */}
              {showTrialMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div className="space-y-2">
                      {searchParams.get('returnTo') === 'payment' ? (
                        <>
                          <h4 className="font-semibold text-green-800 dark:text-green-200">
                            🔐 Complete Your Payment
                          </h4>
                          <p className="text-sm text-green-700 dark:text-green-300">
                            Please log in to complete your trial setup and payment verification.
                          </p>
                        </>
                      ) : (
                        <>
                          <h4 className="font-semibold text-green-800 dark:text-green-200">
                            🎉 Trial Started Successfully!
                          </h4>
                          <p className="text-sm text-green-700 dark:text-green-300">
                            Your 14-day free trial has started. Create your account now and start journaling.
                          </p>
                        </>
                      )}
                      <div className="flex items-center gap-4 mt-3 pt-3 border-t border-green-200 dark:border-green-700">
                        <div className="flex items-center gap-2 text-xs text-green-600 dark:text-green-400">
                          <CreditCard className="w-4 h-4" />
                          <span>Payment info saved</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-green-600 dark:text-green-400">
                          <Clock className="w-4 h-4" />
                          <span>14 days free</span>
                        </div>
                      </div>
                      <Button 
                        onClick={() => setShowTrialMessage(false)}
                        variant="ghost"
                        size="sm"
                        className="text-green-700 dark:text-green-300 hover:bg-green-100 dark:hover:bg-green-900/30 mt-2"
                      >
                        Got it, thanks!
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Social Login Buttons */}
              <div className="space-y-3 mb-6">
                {socialProviders.map((provider, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className={`w-full h-12 text-base font-medium transition-all duration-300 ${provider.color}`}
                    onClick={() => handleSocialLogin(provider.name)}
                    disabled={isLoading}
                  >
                    <provider.icon />
                    <span className="ml-3">Continue with {provider.name}</span>
                  </Button>
                ))}
              </div>

              {/* Divider */}
              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-background text-muted-foreground">or continue with email</span>
                </div>
              </div>

              {/* Email Login Form */}
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-medium text-foreground">
                          Email Address
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <Input 
                              placeholder="you@example.com" 
                              className="pl-12 h-12 text-base border-2 focus:border-blue-600 rounded-xl"
                              {...field} 
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center justify-between">
                          <FormLabel className="text-base font-medium text-foreground">
                            Password
                          </FormLabel>
                          <Link 
                            href="/forgot-password" 
                            className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
                          >
                            Forgot password?
                          </Link>
                        </div>
                        <FormControl>
                          <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <Input 
                              type={showPassword ? "text" : "password"}
                              placeholder="Enter your password" 
                              className="pl-12 pr-12 h-12 text-base border-2 focus:border-blue-600 rounded-xl"
                              {...field} 
                            />
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-transparent"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
                                <EyeOff className="w-4 h-4 text-muted-foreground" />
                              ) : (
                                <Eye className="w-4 h-4 text-muted-foreground" />
                              )}
                            </Button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Remember Me */}
                  <FormField
                    control={form.control}
                    name="rememberMe"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                        <FormControl>
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-background border-2 border-border rounded focus:ring-blue-600 focus:ring-2"
                            checked={field.value}
                            onChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel className="text-sm text-muted-foreground font-normal cursor-pointer">
                          Keep me signed in for 30 days
                        </FormLabel>
                      </FormItem>
                    )}
                  />

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full h-12 text-base bg-gradient-to-r from-gray-900 to-black hover:from-gray-800 hover:to-gray-900 dark:from-gray-100 dark:to-white dark:hover:from-gray-200 dark:hover:to-gray-100 text-white dark:text-black transition-all duration-300 rounded-xl font-semibold shadow-lg hover:shadow-xl disabled:opacity-50"
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Signing you in...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <span>Sign In</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    )}
                  </Button>
                </form>
              </Form>

              {/* Sign up link */}
              <div className="text-center mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  New to Autography?{" "}
                  <Link 
                    href="/signup" 
                    className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    Create an account
                  </Link>
                </p>
              </div>

              {/* Security notice */}
              <div className="mt-6 p-4 bg-muted/30 rounded-xl">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-muted-foreground">
                    <p className="font-medium text-foreground mb-1">Your privacy matters</p>
                    <p>We use industry-standard encryption to keep your data secure and never share your personal information.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginContent />
    </Suspense>
  );
}
