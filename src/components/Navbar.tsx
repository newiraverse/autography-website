"use client";

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { 
  NavigationMenu, 
  NavigationMenuItem, 
  NavigationMenuList, 
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle 
} from './ui/navigation-menu';
import { Button } from './ui/button';
import { ThemeToggle } from './ThemeToggle';
import { cn } from "@/lib/utils";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <Link
        href={props.href || "#"}
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:text-blue-500 focus:text-blue-500",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </Link>
    </li>
  )
});
ListItem.displayName = "ListItem";

const featuresItems = [
  {
    title: "AI-Powered Analysis",
    href: "/features#ai-analysis",
    description: "Get deep insights from your journal entries with advanced AI"
  },
  {
    title: "Smart Organization", 
    href: "/features#organization",
    description: "Automatically categorize and tag your entries"
  },
  {
    title: "Mood Tracking",
    href: "/features#mood-tracking", 
    description: "Track your emotional well-being over time"
  },
  {
    title: "Secure Privacy",
    href: "/features#privacy",
    description: "Enterprise-grade encryption for your personal thoughts"
  },
  {
    title: "Community Groups",
    href: "/features#community-groups",
    description: "Connect with like-minded journalers in safe spaces"
  },
  {
    title: "Growth Insights",
    href: "/features#growth-insights", 
    description: "Visualize your personal development journey"
  },
  {
    title: "Cloud Sync",
    href: "/features#cloud-sync",
    description: "Access your journals across all devices seamlessly"
  }
];

const navItems = [
  { href: '/about', label: 'About' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

// Custom Features Navigation Component
const FeaturesNavigation = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);
  
  const handleFeaturesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push('/features');
  };

  return (
    <NavigationMenuItem>
      <Link 
        href="/features"
        className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:text-blue-500 focus:text-blue-500 h-10 px-3 py-2"
        onClick={handleFeaturesClick}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        Features
      </Link>
      {isOpen && (
        <NavigationMenuContent>
          <ul className="grid w-[500px] gap-3 p-4 md:w-[600px] md:grid-cols-2">
            {featuresItems.map((feature) => (
              <ListItem
                key={feature.title}
                title={feature.title}
                href={feature.href}
              >
                {feature.description}
              </ListItem>
            ))}
          </ul>
        </NavigationMenuContent>
      )}
    </NavigationMenuItem>
  );
};

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 mr-8">
              <span className="font-bold text-xl">Autography</span>
            </Link>
            
            {/* Main Navigation - Left Aligned */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList className="flex space-x-1">
                <FeaturesNavigation />

                {navItems.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <Link 
                      href={item.href} 
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:text-blue-500 focus:text-blue-500 h-10 px-3 py-2"
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          {/* Right Side - Auth & Theme */}
          <div className="flex items-center space-x-4">
            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <Link href="/login">
                <Button variant="ghost" size="sm" className="text-sm hover:text-blue-500">
                  Login
                </Button>
              </Link>
              <Link href="/signup">
                <Button size="sm" className="bg-gradient-to-r from-blue-600 to-blue-400 text-white hover:from-blue-700 hover:to-blue-500 text-sm">
                  Get Started
                </Button>
              </Link>
            </div>
            
            {/* Theme Toggle */}
            <ThemeToggle />
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden border-t border-border mt-4 pt-4 pb-4"
          >
            <div className="flex flex-col space-y-4">
              {/* Features Link for Mobile */}
              <Link 
                href="/features" 
                className="text-sm font-medium transition-colors hover:text-blue-500 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              
              {navItems.map((item) => (
                <Link 
                  key={item.href}
                  href={item.href} 
                  className="text-sm font-medium transition-colors hover:text-blue-500 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile Auth Buttons */}
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" size="sm" className="w-full justify-start hover:text-blue-500">
                    Login
                  </Button>
                </Link>
                <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
                  <Button size="sm" className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white hover:from-blue-700 hover:to-blue-500">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
