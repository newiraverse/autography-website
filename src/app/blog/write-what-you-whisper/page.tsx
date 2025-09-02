"use client";

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function WriteWhatYouWhisperPage() {
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
          Write What You Whisper
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8">
          Discover the art of capturing your inner voice through mindful journaling
        </p>
        
        <div className="text-sm text-muted-foreground mb-8">
          Published on March 20, 2024 • 5 min read
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="prose prose-lg max-w-none dark:prose-invert"
      >
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl mb-8">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/hero_section_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <h2>The Power of Inner Voice</h2>
        <p>
          In the quiet moments between thoughts, there exists a whisper—your authentic inner voice waiting to be heard. 
          This gentle murmur carries the essence of who you truly are, beyond the noise of daily life and external expectations.
        </p>

        <p>
          Learning to write what you whisper is about developing the sensitivity to catch these fleeting thoughts and 
          the courage to give them form on paper. It's an intimate practice that transforms the ephemeral into the eternal, 
          creating a bridge between your conscious and subconscious mind.
        </p>

        <h2>Capturing Fleeting Thoughts</h2>
        <p>
          Our minds are constantly generating ideas, emotions, and insights that often slip away before we can grasp them. 
          These thoughts are like butterflies—beautiful, delicate, and quick to disappear if not gently captured.
        </p>

        <p>
          The practice of mindful journaling creates a safe space for these thoughts to land. By keeping a journal nearby 
          and developing the habit of immediate capture, you begin to build a collection of your mind's most authentic expressions.
        </p>

        <h2>Transforming Thoughts into Expression</h2>
        <p>
          The journey from whisper to written word is magical. It requires patience, practice, and most importantly, 
          self-compassion. Not every thought needs to be profound; sometimes the most ordinary observations reveal 
          extraordinary truths about our inner landscape.
        </p>

        <p>
          Through regular practice, you'll discover that your subconscious mind becomes more willing to share its secrets. 
          The act of writing becomes a conversation with yourself, where questions lead to insights and insights lead to growth.
        </p>

        <h2>Creating Your Practice</h2>
        <p>
          Start small. Set aside just five minutes each day to sit quietly and listen to what your mind whispers. 
          Write without judgment, without editing, without concern for grammar or structure. 
          Let the words flow as naturally as breath.
        </p>

        <p>
          Over time, you'll notice patterns, themes, and revelations that might have otherwise remained hidden. 
          Your journal becomes a mirror, reflecting not just your thoughts, but your growth, your dreams, and your deepest truths.
        </p>

        <div className="bg-muted/30 p-6 rounded-2xl mt-8">
          <h3 className="text-xl font-semibold mb-4">Try This Exercise</h3>
          <p>
            For the next week, carry a small notebook or use your phone's notes app. 
            Whenever you notice a fleeting thought or feeling, pause and write it down exactly as it appears in your mind. 
            Don't analyze or judge—just capture. At the end of the week, read through your collection and notice what patterns emerge.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
