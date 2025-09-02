"use client";

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Check } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  delay?: number;
}

export function PricingCard({
  title,
  price,
  description,
  features,
  isPopular,
  delay = 0,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="relative"
    >
      {isPopular && (
        <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-blue-500 px-3 py-1 text-sm font-medium text-white">
          Most Popular
        </div>
      )}
      <Card className={`h-full ${isPopular ? 'border-blue-500 shadow-lg' : ''}`}>
        <CardHeader>
          <CardTitle className="text-2xl">{title}</CardTitle>
          <CardDescription className="text-lg">{description}</CardDescription>
          <div className="mt-4">
            <span className="text-4xl font-bold">{price}</span>
            {price !== 'Free' && <span className="text-muted-foreground">/month</span>}
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-blue-500" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full" variant={isPopular ? 'default' : 'outline'}>
            Get Started
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
