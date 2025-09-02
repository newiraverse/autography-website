"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Upload, Bold, Italic, Underline, List, AlignLeft, AlignCenter, AlignRight, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Types
interface FormData {
  title: string;
  date: string;
  writtenBy: string;
  content: string;
}

// Constants
const TOOLBAR_BUTTONS = [
  { command: 'bold', icon: Bold, label: 'Bold' },
  { command: 'italic', icon: Italic, label: 'Italic' },
  { command: 'underline', icon: Underline, label: 'Underline' },
];

const ALIGNMENT_BUTTONS = [
  { command: 'justifyLeft', icon: AlignLeft, label: 'Align Left' },
  { command: 'justifyCenter', icon: AlignCenter, label: 'Align Center' },
  { command: 'justifyRight', icon: AlignRight, label: 'Align Right' },
];

const FONT_SIZES = [
  { value: '1', label: 'Small' },
  { value: '3', label: 'Normal' },
  { value: '5', label: 'Large' },
  { value: '7', label: 'Extra Large' },
];

const TEXT_FORMATS = [
  { value: 'div', label: 'Normal' },
  { value: 'h1', label: 'Heading 1' },
  { value: 'h2', label: 'Heading 2' },
  { value: 'h3', label: 'Heading 3' },
  { value: 'p', label: 'Paragraph' },
];

// Components
const PageHeader = () => (
  <motion.header
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="mb-12"
  >
    <Link 
      href="/blog"
      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-200 mb-8 font-medium"
    >
      <ArrowLeft className="w-4 h-4" />
      Back to Blog
    </Link>
    
    <div className="space-y-4">
      <h1 className="text-4xl font-bold tracking-tight text-foreground">
        Create New Article
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl">
        Share your insights and expertise with our community. Write engaging content that helps others grow.
      </p>
    </div>
  </motion.header>
);

const FormField = ({ 
  id, 
  label, 
  children, 
  required = false 
}: { 
  id: string; 
  label: string; 
  children: React.ReactNode; 
  required?: boolean; 
}) => (
  <div className="space-y-3">
    <Label htmlFor={id} className="text-base font-semibold text-foreground">
      {label}
      {required && <span className="text-red-500 ml-1">*</span>}
    </Label>
    {children}
  </div>
);

const MediaUploadZone = () => (
  <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-blue-500 transition-colors duration-200 bg-muted/20">
    <Upload className="mx-auto h-10 w-10 text-muted-foreground mb-4" />
    <h3 className="text-lg font-medium mb-2">Upload Media Files</h3>
    <p className="text-sm text-muted-foreground mb-4 max-w-sm mx-auto">
      Drag and drop images or videos here, or click to browse your files
    </p>
    <input
      type="file"
      multiple
      accept="image/*,video/*"
      className="hidden"
      id="media-upload"
    />
    <label
      htmlFor="media-upload"
      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white hover:from-blue-700 hover:to-blue-500 rounded-lg cursor-pointer transition-all duration-300 font-medium"
    >
      Choose Files
    </label>
  </div>
);

const ToolbarButton = ({ 
  onClick, 
  icon: Icon, 
  label, 
  isActive = false 
}: { 
  onClick: () => void; 
  icon: any; 
  label: string; 
  isActive?: boolean; 
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`p-2.5 rounded-lg transition-colors duration-200 ${
      isActive 
        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' 
        : 'hover:bg-muted text-muted-foreground hover:text-foreground'
    }`}
    title={label}
  >
    <Icon className="w-4 h-4" />
  </button>
);

const ToolbarDivider = () => (
  <div className="w-px h-6 bg-border" />
);

const RichTextEditor = ({ onContentChange }: { onContentChange: (content: string) => void }) => {
  const formatText = (command: string, value?: string) => {
    document.execCommand(command, false, value);
  };

  const insertLink = () => {
    const url = prompt('Enter URL:');
    if (url) formatText('createLink', url);
  };

  return (
    <div className="border border-border rounded-xl overflow-hidden bg-background">
      {/* Toolbar */}
      <div className="bg-muted/30 p-4 border-b border-border">
        <div className="flex flex-wrap items-center gap-2">
          {/* Text Formatting */}
          <div className="flex items-center gap-1">
            {TOOLBAR_BUTTONS.map(({ command, icon, label }) => (
              <ToolbarButton
                key={command}
                onClick={() => formatText(command)}
                icon={icon}
                label={label}
              />
            ))}
          </div>
          
          <ToolbarDivider />
          
          {/* Alignment */}
          <div className="flex items-center gap-1">
            {ALIGNMENT_BUTTONS.map(({ command, icon, label }) => (
              <ToolbarButton
                key={command}
                onClick={() => formatText(command)}
                icon={icon}
                label={label}
              />
            ))}
          </div>
          
          <ToolbarDivider />
          
          {/* List and Link */}
          <div className="flex items-center gap-1">
            <ToolbarButton
              onClick={() => formatText('insertUnorderedList')}
              icon={List}
              label="Bullet List"
            />
            <ToolbarButton
              onClick={insertLink}
              icon={LinkIcon}
              label="Insert Link"
            />
          </div>
          
          <ToolbarDivider />
          
          {/* Dropdowns */}
          <select
            onChange={(e) => formatText('fontSize', e.target.value)}
            className="px-3 py-2 bg-background border border-border rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue="3"
          >
            {FONT_SIZES.map(({ value, label }) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
          
          <select
            onChange={(e) => formatText('formatBlock', e.target.value)}
            className="px-3 py-2 bg-background border border-border rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue="div"
          >
            {TEXT_FORMATS.map(({ value, label }) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Content Editor */}
      <div
        contentEditable
        className="min-h-[400px] p-6 focus:outline-none prose prose-lg max-w-none dark:prose-invert"
        style={{ whiteSpace: 'pre-wrap' }}
        onInput={(e) => onContentChange(e.currentTarget.innerHTML)}
        suppressContentEditableWarning={true}
        data-placeholder="Start writing your article here..."
      />
    </div>
  );
};

const LoginModal = ({ 
  isOpen, 
  onClose 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-background rounded-2xl p-8 max-w-md w-full shadow-2xl border"
      >
        <div className="text-center space-y-6">
          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Authentication Required</h3>
            <p className="text-muted-foreground">
              Please sign in to publish your article. Your content will be saved as a draft.
            </p>
          </div>
          
          <div className="flex gap-3">
            <Button 
              onClick={onClose}
              variant="outline" 
              className="flex-1"
            >
              Cancel
            </Button>
            <Button 
              onClick={() => {
                onClose();
                // TODO: Implement authentication flow
                alert('Redirect to authentication');
              }}
              className="flex-1 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500"
            >
              Sign In
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function WriteBlogPage() {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    date: new Date().toISOString().split('T')[0],
    writtenBy: '',
    content: '',
  });
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowLoginModal(true);
  };

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <PageHeader />
          
          <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-card/50 backdrop-blur-sm shadow-xl border-0 ring-1 ring-border">
              <CardHeader className="pb-8">
                <CardTitle className="text-2xl font-bold">Article Details</CardTitle>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Title Field */}
                  <FormField id="title" label="Article Title" required>
                    <Input
                      id="title"
                      type="text"
                      placeholder="Enter a compelling title for your article..."
                      value={formData.title}
                      onChange={(e) => updateFormData('title', e.target.value)}
                      className="text-lg p-4 border-2 focus:border-blue-500 rounded-xl"
                      required
                    />
                  </FormField>

                  {/* Date and Author Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField id="date" label="Publication Date" required>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => updateFormData('date', e.target.value)}
                        className="p-4 border-2 focus:border-blue-500 rounded-xl"
                        required
                      />
                    </FormField>

                    <FormField id="writtenBy" label="Author Name" required>
                      <Input
                        id="writtenBy"
                        type="text"
                        placeholder="Your name or pen name..."
                        value={formData.writtenBy}
                        onChange={(e) => updateFormData('writtenBy', e.target.value)}
                        className="p-4 border-2 focus:border-blue-500 rounded-xl"
                        required
                      />
                    </FormField>
                  </div>

                  {/* Media Upload */}
                  <FormField id="media" label="Media Attachments">
                    <MediaUploadZone />
                  </FormField>

                  {/* Content Editor */}
                  <FormField id="content" label="Article Content" required>
                    <RichTextEditor 
                      onContentChange={(content) => updateFormData('content', content)} 
                    />
                  </FormField>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <Button 
                      type="submit" 
                      className="w-full py-4 text-lg bg-gradient-to-r from-blue-600 to-blue-400 text-white hover:from-blue-700 hover:to-blue-500 transition-all duration-300 rounded-xl font-semibold"
                    >
                      Publish Article
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.main>
        </div>
      </div>

      <LoginModal 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)} 
      />
    </div>
  );
}
