"use client";

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function AuthenticSocialCirclePage() {
  return (
    <div className="container py-24 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-500 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
        
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Building an Authentic Social Circle
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8">
          Connect with like-minded individuals through genuine storytelling and shared growth
        </p>
        
        <div className="text-sm text-muted-foreground mb-8">
          Published on March 22, 2024 • 7 min read
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="prose prose-lg max-w-none dark:prose-invert"
      >
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl mb-8">
          <img
            src="/1.jpg"
            alt="Authentic social connections"
            className="w-full h-full object-cover"
          />
        </div>

        <h2>The Quest for Authentic Connection</h2>
        <p>
          In our hyper-connected digital age, finding genuine human connection has become both easier and more challenging. 
          While we can instantly communicate with people across the globe, building deep, meaningful relationships requires 
          something technology alone cannot provide: authenticity.
        </p>

        <p>
          An authentic social circle isn't about having the most friends or the most impressive network. 
          It's about cultivating relationships with people who see you, understand you, and support your journey of self-discovery and growth.
        </p>

        <h2>The Role of Storytelling in Connection</h2>
        <p>
          Stories are the bridges that connect our inner worlds. When we share our experiences, struggles, and insights 
          through journaling and storytelling, we create opportunities for others to recognize themselves in our narratives.
        </p>

        <p>
          The practice of reflective writing doesn't just help us understand ourselves better—it prepares us to share our truth 
          with others in meaningful ways. By becoming comfortable with our own story, we become better at listening to and 
          appreciating the stories of others.
        </p>

        <h2>Finding Your Tribe</h2>
        <p>
          Like-minded individuals aren't necessarily people who think exactly like you. Instead, they're people who share 
          your values, your commitment to growth, and your appreciation for depth and authenticity in relationships.
        </p>

        <p>
          These connections often form around shared interests in personal development, creativity, mindfulness, or other 
          practices that require introspection and self-awareness. They might be found in writing groups, meditation communities, 
          book clubs, or online forums dedicated to meaningful conversation.
        </p>

        <h2>Vulnerability as a Superpower</h2>
        <p>
          Building authentic relationships requires the courage to be vulnerable. This doesn't mean oversharing or 
          burdening others with your problems, but rather being willing to show up as your real self, 
          complete with imperfections and uncertainties.
        </p>

        <p>
          When you practice vulnerability in your journaling, you develop the emotional intelligence and self-awareness 
          necessary to navigate this delicate balance in your relationships. You learn to recognize what's worth sharing, 
          when to share it, and how to do so in a way that invites connection rather than creating distance.
        </p>

        <h2>Quality Over Quantity</h2>
        <p>
          An authentic social circle is typically smaller than the networks we see celebrated on social media. 
          It consists of people who truly know you and whom you truly know in return. These are the relationships 
          that sustain you during difficult times and celebrate with you during moments of joy.
        </p>

        <p>
          Investing in these deeper connections requires time, energy, and intentionality. It means prioritizing 
          meaningful conversations over small talk, shared experiences over casual encounters, and mutual support over 
          superficial networking.
        </p>

        <h2>Nurturing Growth Together</h2>
        <p>
          The most rewarding aspect of an authentic social circle is the mutual commitment to growth. 
          These relationships become laboratories for personal development, where you can safely explore new ideas, 
          challenge limiting beliefs, and receive honest feedback from people who care about your wellbeing.
        </p>

        <div className="bg-muted/30 p-6 rounded-2xl mt-8">
          <h3 className="text-xl font-semibold mb-4">Building Your Circle</h3>
          <p>
            Start by being the kind of friend you'd want to have. Practice active listening, share authentically 
            about your own journey, and show genuine interest in others' growth and wellbeing. 
            Look for opportunities to connect through shared values and interests rather than convenience or circumstance.
          </p>
          <p className="mt-4">
            Remember: authentic relationships take time to develop. Be patient with the process and trust that 
            quality connections will naturally emerge when you consistently show up as your genuine self.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
