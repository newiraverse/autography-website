'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Shuffle } from 'lucide-react';
import Image from 'next/image';

interface Review {
  id: number;
  name: string;
  job: string;
  image: string;
  text: string;
}

// Dummy data - can be replaced with database data later
const reviewsData: Review[] = [
  {
    id: 1,
    name: 'Susan Smith',
    job: 'Web Developer',
    image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    text: "Autography has transformed my daily reflection practice. The AI insights help me understand patterns in my thinking that I never noticed before. It's like having a personal coach available 24/7."
  },
  {
    id: 2,
    name: 'Anna Johnson',
    job: 'UX Designer',
    image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
    text: 'The interface is beautifully designed and intuitive. As a designer myself, I appreciate the attention to detail and the seamless user experience. My journaling has become a joy rather than a chore.'
  },
  {
    id: 3,
    name: 'Peter Jones',
    job: 'Marketing Intern',
    image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    text: 'As someone new to journaling, Autography made it easy to get started. The prompts are thoughtful and the AI analysis helps me reflect deeper on my daily experiences.'
  },
  {
    id: 4,
    name: 'Bill Anderson',
    job: 'CEO',
    image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    text: 'Managing a team is stressful, but Autography helps me process my thoughts and make better decisions. The insights into my leadership patterns have been invaluable for my growth.'
  },
  {
    id: 5,
    name: 'Emily Chen',
    job: 'Product Manager',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=150&h=150&fit=crop&crop=face',
    text: 'The data visualization features are incredible. Being able to see my mood patterns and writing trends over time has given me insights I never had before. Highly recommend!'
  }
];

export default function ReviewCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const currentReview = reviewsData[currentIndex];

  // Utility function to handle index bounds
  const checkNumber = (number: number): number => {
    if (number > reviewsData.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviewsData.length - 1;
    }
    return number;
  };

  // Navigation functions
  const nextPerson = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return checkNumber(newIndex);
    });
  };

  // Random review function
  const getRandomPerson = () => {
    const getRandomIntInclusive = (min: number, max: number): number => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    let randomIndex = getRandomIntInclusive(0, reviewsData.length - 1);
    
    // Ensure we don't get the same review
    if (randomIndex === currentIndex) {
      randomIndex = currentIndex + 1;
    }
    
    setCurrentIndex(checkNumber(randomIndex));
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Customer Reviews
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our users have to say about their Autography experience
          </p>
        </motion.div>

        <div className="flex justify-center">
          <motion.article
            key={currentReview.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-2xl p-8 shadow-lg border border-border max-w-2xl w-full text-center hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image Container */}
            <div className="relative w-36 h-36 mx-auto mb-6">
              <div className="relative w-full h-full">
                <Image
                  src={currentReview.image}
                  alt={currentReview.name}
                  fill
                  className="rounded-full object-cover"
                  sizes="144px"
                />
                {/* Quote Icon */}
                <div className="absolute -top-2 -left-2 w-10 h-10 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center">
                  <Quote className="w-5 h-5 text-white" />
                </div>
              </div>
              
              {/* Background Circle */}
              <div className="absolute inset-0 bg-blue-600 dark:bg-blue-500 rounded-full -z-10 transform translate-x-2 translate-y-2" />
            </div>

            {/* Author Info */}
            <motion.h4 
              className="text-xl font-semibold text-foreground mb-1"
              layout
            >
              {currentReview.name}
            </motion.h4>
            <motion.p 
              className="text-blue-600 dark:text-blue-400 text-sm font-medium uppercase tracking-wide mb-6"
              layout
            >
              {currentReview.job}
            </motion.p>

            {/* Review Text */}
            <motion.p 
              className="text-muted-foreground leading-relaxed mb-8 text-base"
              layout
            >
              "{currentReview.text}"
            </motion.p>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <motion.button
                onClick={prevPerson}
                className="p-3 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-full transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                onClick={nextPerson}
                className="p-3 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-full transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Random Button */}
            <motion.button
              onClick={getRandomPerson}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50 rounded-lg font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Shuffle className="w-4 h-4" />
              Get Random Review
            </motion.button>

            {/* Review Counter */}
            <div className="flex justify-center gap-2 mt-6">
              {reviewsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex 
                      ? 'bg-blue-600 dark:bg-blue-400' 
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
