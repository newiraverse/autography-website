"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

export function FeatureCard({ title, description, icon: Icon, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="w-full"
    >
      <Card className="h-full transition-colors hover:bg-muted/50 flex flex-col">
        <CardHeader className="flex-1 text-center sm:text-left">
          <div className="mb-4 flex justify-center sm:justify-start">
            <Icon className="h-10 w-10 text-blue-500" />
          </div>
          <CardTitle className="text-xl md:text-2xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base md:text-lg">{description}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
}
