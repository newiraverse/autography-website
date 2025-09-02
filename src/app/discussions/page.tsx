'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Heart, 
  Share2, 
  Search,
  Filter,
  TrendingUp,
  Clock,
  Users,
  Plus,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

interface Discussion {
  id: string;
  title: string;
  content: string;
  author: {
    name: string;
    verified: boolean;
  };
  timestamp: string;
  category: string;
  likes: number;
  comments: number;
  shares: number;
  isLiked: boolean;
  tags: string[];
  featured: boolean;
}

const discussions: Discussion[] = [
  {
    id: '1',
    title: 'How journaling helped me overcome anxiety',
    content: 'After months of feeling overwhelmed, I started using guided prompts to process my thoughts. The difference has been incredible and I want to share what worked for me.',
    author: {
      name: 'Sarah Chen',
      verified: true
    },
    timestamp: '2 hours ago',
    category: 'Mental Health',
    likes: 147,
    comments: 23,
    shares: 8,
    isLiked: false,
    tags: ['anxiety', 'mental-health', 'self-care'],
    featured: true
  },
  {
    id: '2',
    title: 'Daily gratitude practice: Small changes, big impact',
    content: 'Starting each morning with three things I\'m grateful for has shifted my entire perspective on life. Here\'s what I\'ve learned after 90 days of consistent practice.',
    author: {
      name: 'Marcus Thompson',
      verified: false
    },
    timestamp: '4 hours ago',
    category: 'Growth',
    likes: 89,
    comments: 15,
    shares: 12,
    isLiked: true,
    tags: ['gratitude', 'mindfulness', 'daily-habits'],
    featured: true
  },
  {
    id: '3',
    title: 'Finding your authentic voice through writing',
    content: 'Struggling to express yourself authentically? Here are the journaling techniques that helped me discover my true voice and communicate more effectively.',
    author: {
      name: 'Elena Rodriguez',
      verified: true
    },
    timestamp: '6 hours ago',
    category: 'Self-Discovery',
    likes: 234,
    comments: 41,
    shares: 19,
    isLiked: false,
    tags: ['authenticity', 'writing', 'self-expression'],
    featured: false
  },
  {
    id: '4',
    title: 'Building emotional resilience through reflection',
    content: 'Life throws curveballs, but journaling has become my anchor. Sharing the framework that\'s helped me bounce back stronger from challenges.',
    author: {
      name: 'David Kim',
      verified: false
    },
    timestamp: '8 hours ago',
    category: 'Resilience',
    likes: 156,
    comments: 28,
    shares: 14,
    isLiked: true,
    tags: ['resilience', 'emotional-health', 'reflection'],
    featured: false
  },
  {
    id: '5',
    title: 'The power of morning pages for clarity',
    content: 'Three pages of stream-of-consciousness writing every morning has transformed my mental clarity and decision-making process.',
    author: {
      name: 'Jordan Wright',
      verified: false
    },
    timestamp: '12 hours ago',
    category: 'Techniques',
    likes: 78,
    comments: 19,
    shares: 6,
    isLiked: false,
    tags: ['morning-pages', 'clarity', 'routine'],
    featured: false
  },
  {
    id: '6',
    title: 'Overcoming perfectionism in personal writing',
    content: 'I used to edit every sentence before moving on. Learning to embrace imperfect first drafts changed everything about my journaling practice.',
    author: {
      name: 'Alex Martinez',
      verified: true
    },
    timestamp: '1 day ago',
    category: 'Growth',
    likes: 92,
    comments: 17,
    shares: 5,
    isLiked: false,
    tags: ['perfectionism', 'writing', 'self-acceptance'],
    featured: false
  },
  {
    id: '7',
    title: 'Using journaling to process grief and loss',
    content: 'After losing my father, words felt impossible. But slowly, journaling became my way to honor his memory and work through the pain.',
    author: {
      name: 'Maya Patel',
      verified: false
    },
    timestamp: '1 day ago',
    category: 'Mental Health',
    likes: 203,
    comments: 34,
    shares: 11,
    isLiked: true,
    tags: ['grief', 'loss', 'healing', 'memory'],
    featured: false
  },
  {
    id: '8',
    title: 'Building confidence through self-reflection',
    content: 'Documenting small wins and learning from setbacks has gradually built my confidence in ways I never expected.',
    author: {
      name: 'Chris Johnson',
      verified: false
    },
    timestamp: '2 days ago',
    category: 'Self-Discovery',
    likes: 67,
    comments: 12,
    shares: 4,
    isLiked: false,
    tags: ['confidence', 'self-reflection', 'growth'],
    featured: false
  },
  {
    id: '9',
    title: 'The art of asking better questions in journaling',
    content: 'Moving beyond "How was my day?" to deeper, more meaningful prompts that unlock genuine insights about yourself.',
    author: {
      name: 'Taylor Brown',
      verified: true
    },
    timestamp: '2 days ago',
    category: 'Techniques',
    likes: 124,
    comments: 22,
    shares: 9,
    isLiked: false,
    tags: ['questions', 'prompts', 'self-inquiry'],
    featured: false
  },
  {
    id: '10',
    title: 'Creating boundaries through journaling',
    content: 'Writing helped me identify where I was saying yes when I meant no. Here\'s how I used journaling to establish healthier boundaries.',
    author: {
      name: 'Sam Wilson',
      verified: false
    },
    timestamp: '3 days ago',
    category: 'Relationships',
    likes: 89,
    comments: 16,
    shares: 7,
    isLiked: true,
    tags: ['boundaries', 'relationships', 'self-care'],
    featured: false
  },
  {
    id: '11',
    title: 'Breaking free from comparison through writing',
    content: 'Social media was destroying my self-worth until I started journaling about my own unique journey and progress.',
    author: {
      name: 'Riley Davis',
      verified: false
    },
    timestamp: '3 days ago',
    category: 'Mental Health',
    likes: 178,
    comments: 29,
    shares: 13,
    isLiked: false,
    tags: ['comparison', 'social-media', 'self-worth'],
    featured: false
  },
  {
    id: '12',
    title: 'Finding peace through forgiveness journaling',
    content: 'Writing letters I\'ll never send has helped me forgive others and, more importantly, forgive myself.',
    author: {
      name: 'Casey Lee',
      verified: true
    },
    timestamp: '4 days ago',
    category: 'Healing',
    likes: 156,
    comments: 25,
    shares: 8,
    isLiked: false,
    tags: ['forgiveness', 'healing', 'peace'],
    featured: false
  }
];

const categories = ['All', 'Mental Health', 'Growth', 'Self-Discovery', 'Resilience', 'Techniques', 'Relationships'];

export default function DiscussionsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const discussionsPerPage = 10;

  const filteredDiscussions = discussions.filter(discussion => {
    const matchesCategory = selectedCategory === 'All' || discussion.category === selectedCategory;
    const matchesSearch = discussion.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         discussion.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         discussion.author.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         discussion.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Calculate pagination for all discussions together
  const totalPages = Math.ceil(filteredDiscussions.length / discussionsPerPage);
  const startIndex = (currentPage - 1) * discussionsPerPage;
  const endIndex = startIndex + discussionsPerPage;
  const currentDiscussions = filteredDiscussions.slice(startIndex, endIndex);

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 7;
    
    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show smart pagination
      if (currentPage <= 4) {
        // Show first 5, then ... then last
        for (let i = 1; i <= 5; i++) pages.push(i);
        if (totalPages > 6) pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        // Show first, then ... then last 5
        pages.push(1);
        if (totalPages > 6) pages.push('...');
        for (let i = totalPages - 4; i <= totalPages; i++) pages.push(i);
      } else {
        // Show first, ... current-1, current, current+1, ... last
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      }
    }
    return pages;
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when changing category
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 relative"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Community Discussions</h1>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
            Connect with like-minded individuals, share your journey, and discover insights from our growing community of mindful writers.
          </p>
          
          {/* Start Discussion Button - Top Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute top-0 right-0"
          >
            <Link 
              href="/discussions/new"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-500 transition-all duration-300 font-medium group cursor-pointer"
            >
              Start discussion
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search discussions, authors, or tags..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="pl-10 pr-12 py-3 text-base"
              />
              {searchTerm && (
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setCurrentPage(1);
                  }}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-muted rounded-full transition-colors"
                >
                  <X className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                </button>
              )}
            </div>
            
            {/* Search Results Info */}
            {searchTerm && (
              <div className="mt-2 text-center">
                <p className="text-sm text-muted-foreground">
                  {filteredDiscussions.length === 0 
                    ? `No results found for "${searchTerm}"`
                    : `Found ${filteredDiscussions.length} result${filteredDiscussions.length === 1 ? '' : 's'} for "${searchTerm}"`
                  }
                </p>
              </div>
            )}
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-500 text-white'
                    : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* All Discussions */}
        {currentDiscussions.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Discussions</h2>
            
            <div className="space-y-6 max-w-4xl mx-auto">
              {currentDiscussions.map((discussion, index) => (
                <motion.div
                  key={discussion.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link href={`/discussions/${discussion.id}`}>
                    <Card className={`transition-all duration-300 hover:bg-muted/50 hover:shadow-lg cursor-pointer ${
                      discussion.featured ? 'ring-2 ring-blue-400/20' : ''
                    }`}>
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-sm text-blue-400 font-medium">
                            {discussion.category}
                          </div>
                          {discussion.featured && (
                            <div className="text-xs bg-blue-400/10 text-blue-400 px-2 py-1 rounded-full">
                              Featured
                            </div>
                          )}
                        </div>
                        <CardTitle className="text-xl leading-tight">{discussion.title}</CardTitle>
                        <CardDescription className="flex items-center gap-2">
                          <Clock className="w-3 h-3" />
                          {discussion.timestamp} • by {discussion.author.name}
                          {discussion.author.verified && <span className="text-blue-500">✓</span>}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground leading-relaxed">
                          {discussion.content}
                        </p>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {discussion.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 text-xs rounded-full"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                        
                        {/* Stats */}
                        <div className="flex items-center justify-between pt-4 border-t border-border/50">
                          <div className="flex items-center gap-6 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Heart className="w-4 h-4" />
                              {discussion.likes}
                            </span>
                            <span className="flex items-center gap-1">
                              <MessageCircle className="w-4 h-4" />
                              {discussion.comments}
                            </span>
                            <span className="flex items-center gap-1">
                              <Share2 className="w-4 h-4" />
                              {discussion.shares}
                            </span>
                          </div>
                          <span className="text-blue-500 text-sm font-medium">
                            Read more →
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* No Results */}
        {filteredDiscussions.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center py-16"
          >
            <p className="text-muted-foreground text-lg mb-4">No discussions found matching your criteria.</p>
            <Link 
              href="/discussions/new"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-500 transition-colors"
            >
              Start the first discussion
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        )}

        {/* Pagination */}
        {filteredDiscussions.length > 0 && totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-16"
          >
            <div className="flex flex-col items-center space-y-6">
              {/* Load More Button */}
              {currentPage < totalPages && (
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="px-8"
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  Load More Discussions
                </Button>
              )}
              
              {/* Page Numbers */}
              <div className="flex items-center space-x-2">
                {/* Previous Button */}
                <button
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    currentPage === 1
                      ? 'text-muted-foreground cursor-not-allowed'
                      : 'text-blue-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/30'
                  }`}
                >
                  Previous
                </button>

                {/* Page Numbers */}
                {getPageNumbers().map((page, index) => (
                  <div key={index}>
                    {page === '...' ? (
                      <span className="px-3 py-2 text-muted-foreground">...</span>
                    ) : (
                      <button
                        onClick={() => handlePageChange(page as number)}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                          currentPage === page
                            ? 'bg-blue-500 text-white shadow-sm'
                            : 'text-muted-foreground hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/30'
                        }`}
                      >
                        {page}
                      </button>
                    )}
                  </div>
                ))}

                {/* Next Button */}
                <button
                  onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    currentPage === totalPages
                      ? 'text-muted-foreground cursor-not-allowed'
                      : 'text-blue-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/30'
                  }`}
                >
                  Next
                </button>
              </div>

              {/* Page Info */}
              <p className="text-sm text-muted-foreground">
                Showing {startIndex + 1}-{Math.min(endIndex, filteredDiscussions.length)} of {filteredDiscussions.length} discussions
              </p>
            </div>
          </motion.div>
        )}

        {/* Static message for single page */}
        {filteredDiscussions.length > 0 && totalPages <= 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="text-muted-foreground">
              Showing all {filteredDiscussions.length} discussions
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
