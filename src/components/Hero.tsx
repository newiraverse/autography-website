"use client";

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full bg-gradient-to-b from-background to-muted/20 relative overflow-hidden"
    >
      {/* Background Image - Right Side */}
      <div className="absolute inset-0 flex justify-start items-start -mt-24 pl-[70%]">
        <div className="relative w-3/4 h-[300px] opacity-60 dark:opacity-50" style={{ transform: 'rotate(-15deg)' }}>
          <Image
            src="/hand_shake.avif"
            alt="Handshake"
            fill
            className="object-contain filter brightness-25 contrast-150 dark:brightness-125 dark:contrast-75"
            priority
          />
        </div>
      </div>

      {/* Background Image - Left Side (Mirrored) */}
      <div className="absolute inset-0 flex justify-end items-start -mt-24 pr-[70%]">
        <div className="relative w-3/4 h-[300px] opacity-60 dark:opacity-50" style={{ transform: 'rotate(15deg) scaleX(-1)' }}>
          <Image
            src="/hand_shake_left.avif"
            alt="Handshake Left"
            fill
            className="object-contain filter brightness-25 contrast-150 dark:brightness-125 dark:contrast-75"
            priority
          />
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-start min-h-[calc(100vh-4rem)] pt-24 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl max-w-[800px]"
        >
          Transform Your{' '}
          <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Journaling
          </span>
          <br />
          Experience with{' '}
          <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            AI
          </span>
        </motion.h1>
      </div>
    </motion.section>
  );
}
