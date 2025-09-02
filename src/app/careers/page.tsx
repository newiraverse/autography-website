'use client';

import { motion } from 'framer-motion';
import { 
  Search, 
  MapPin, 
  Clock, 
  Users, 
  ArrowRight, 
  Heart, 
  Zap, 
  Shield, 
  Upload,
  X,
  Filter,
  Briefcase,
  GraduationCap,
  Globe,
  Target,
  Coffee,
  Lightbulb,
  Cloud,
  HardDrive,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useState } from 'react';

const jobs = [
  {
    title: "Senior AI Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    experience: "5+ years",
    description: "Lead the development of our AI-powered journaling features and insights engine. Work with cutting-edge machine learning technologies to create meaningful user experiences.",
    requirements: ["5+ years experience with ML/AI", "Python expertise", "Experience with NLP", "TensorFlow or PyTorch", "Cloud platforms (AWS/GCP)"],
    tags: ["AI", "Machine Learning", "Python", "Remote"]
  },
  {
    title: "Senior Product Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    experience: "4+ years",
    description: "Design beautiful, intuitive experiences that help users express themselves through journaling. Lead design thinking across multiple product areas.",
    requirements: ["4+ years product design experience", "Figma expertise", "UX research skills", "Design systems experience", "Mobile design experience"],
    tags: ["Design", "UX", "Figma", "Remote"]
  },
  {
    title: "Growth Marketing Manager",
    department: "Marketing",
    location: "Himachal Pradesh, India",
    type: "Full-time",
    experience: "3+ years",
    description: "Drive growth and brand awareness for Autography in global markets. Lead performance marketing and user acquisition strategies.",
    requirements: ["3+ years marketing experience", "Content marketing expertise", "Analytics skills", "Growth hacking experience", "SEO/SEM knowledge"],
    tags: ["Marketing", "Growth", "Analytics", "Hybrid"]
  },
  {
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    experience: "3+ years",
    description: "Build and maintain scalable infrastructure for our AI-powered platform. Ensure high availability and performance.",
    requirements: ["3+ years DevOps experience", "Kubernetes expertise", "CI/CD pipelines", "Cloud infrastructure", "Monitoring tools"],
    tags: ["DevOps", "Kubernetes", "Cloud", "Remote"]
  },
  {
    title: "Data Scientist",
    department: "Data",
    location: "Remote",
    type: "Full-time",
    experience: "3+ years",
    description: "Analyze user behavior and journaling patterns to improve our AI recommendations and insights.",
    requirements: ["3+ years data science experience", "Python/R expertise", "Statistical analysis", "ML model development", "Data visualization"],
    tags: ["Data Science", "Python", "Analytics", "Remote"]
  },
  {
    title: "Frontend Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    experience: "3+ years",
    description: "Build responsive, performant user interfaces using modern web technologies. Create delightful user experiences.",
    requirements: ["3+ years frontend experience", "React/Next.js expertise", "TypeScript", "CSS frameworks", "Performance optimization"],
    tags: ["Frontend", "React", "TypeScript", "Remote"]
  }
];

const departments = ["All", "Engineering", "Design", "Marketing", "Data"];
const locations = ["All", "Remote", "Himachal Pradesh, India"];
const jobTypes = ["All", "Full-time", "Part-time", "Contract"];

const values = [
  { 
    icon: Heart, 
    title: "User-Centric", 
    description: "Everything we do is focused on helping people express themselves authentically and discover insights through journaling."
  },
  { 
    icon: Zap, 
    title: "Innovation", 
    description: "We push boundaries with AI technology while keeping human creativity and personal growth at the center of our mission."
  },
  { 
    icon: Shield, 
    title: "Privacy First", 
    description: "We believe personal thoughts deserve the highest level of privacy and security. Trust is fundamental to everything we build."
  },
  { 
    icon: Target, 
    title: "Impact Driven", 
    description: "We measure success by the positive impact we have on people's mental wellness and personal development journey."
  },
  { 
    icon: Coffee, 
    title: "Work-Life Balance", 
    description: "We practice what we preach about wellness. Sustainable work practices and personal growth are core to our culture."
  },
  { 
    icon: Lightbulb, 
    title: "Continuous Learning", 
    description: "We're curious, we experiment, and we learn from failures. Personal and professional growth is encouraged and supported."
  }
];

const benefits = [
  "Competitive salary and equity",
  "Comprehensive health coverage",
  "Flexible work arrangements",
  "Professional development budget",
  "Mental wellness support",
  "Latest tech equipment",
  "Quarterly team retreats",
  "Unlimited PTO policy"
];

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [applicationData, setApplicationData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    experience: '',
    portfolio: '',
    coverLetter: '',
    linkedIn: ''
  });

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.requirements.some(req => req.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'All' || job.location === selectedLocation;
    const matchesType = selectedType === 'All' || job.type === selectedType;
    
    return matchesSearch && matchesDepartment && matchesLocation && matchesType;
  });

  const handleResumeUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsUploading(true);
      setUploadProgress(0);
      setUploadComplete(false);
      
      // Simulate upload progress
      const uploadInterval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 100) {
            clearInterval(uploadInterval);
            setIsUploading(false);
            setUploadComplete(true);
            setResumeFile(file);
            // Auto-proceed to application form after 1 second
            setTimeout(() => {
              setShowResumeModal(false);
              setShowApplicationForm(true);
            }, 1000);
            return 100;
          }
          return prev + Math.random() * 15;
        });
      }, 200);
    }
  };

  const handleGoogleDriveUpload = () => {
    // Just show a message that backend integration is needed
    alert('Google Drive integration requires backend setup. Please use device upload or continue without resume for now.');
  };

  const handleContinueWithoutResume = () => {
    setShowResumeModal(false);
    setShowApplicationForm(true);
    setResumeFile(null);
  };

  const handleApplicationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Prepare application data
      const applicationPayload = {
        applicant: {
          firstName: applicationData.firstName,
          lastName: applicationData.lastName,
          email: applicationData.email,
          phone: applicationData.phone,
          location: applicationData.location,
          experience: applicationData.experience,
          portfolio: applicationData.portfolio,
          linkedIn: applicationData.linkedIn,
          coverLetter: applicationData.coverLetter
        },
        position: {
          title: selectedJob?.title || 'General Application',
          department: selectedJob?.department || 'General',
          location: selectedJob?.location || 'Remote'
        },
        resume: {
          name: resumeFile?.name || 'No resume uploaded',
          size: resumeFile?.size || 0,
          type: resumeFile?.type || 'application/pdf'
        },
        submissionDate: new Date().toISOString(),
        applicationId: `APP-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
      };

      console.log('📤 Sending application:', applicationPayload);

      // Send email to company (newiraverse@gmail.com)
      console.log('📧 Sending company notification...');
      const companyEmailResponse = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'newiraverse@gmail.com',
          subject: `New Job Application: ${applicationPayload.position.title} - ${applicationPayload.applicant.firstName} ${applicationPayload.applicant.lastName}`,
          type: 'company_notification',
          data: applicationPayload
        })
      });

      if (!companyEmailResponse.ok) {
        const errorData = await companyEmailResponse.json();
        console.error('❌ Company email failed:', errorData);
        throw new Error(`Company email failed: ${errorData.error || 'Unknown error'}`);
      }

      const companyResult = await companyEmailResponse.json();
      console.log('✅ Company email sent:', companyResult);

      // Send confirmation email to applicant
      console.log('📧 Sending applicant confirmation...');
      const applicantEmailResponse = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: applicationData.email,
          subject: `Application Confirmation: ${applicationPayload.position.title} at Autography`,
          type: 'applicant_confirmation',
          data: applicationPayload
        })
      });

      if (!applicantEmailResponse.ok) {
        const errorData = await applicantEmailResponse.json();
        console.error('❌ Applicant email failed:', errorData);
        throw new Error(`Applicant email failed: ${errorData.error || 'Unknown error'}`);
      }

      const applicantResult = await applicantEmailResponse.json();
      console.log('✅ Applicant email sent:', applicantResult);

      // Both emails sent successfully
      setSubmitSuccess(true);
      console.log('🎉 Application submitted successfully!');
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setShowApplicationForm(false);
        setApplicationData({
          firstName: '', lastName: '', email: '', phone: '', location: '',
          experience: '', portfolio: '', coverLetter: '', linkedIn: ''
        });
        setResumeFile(null);
        setUploadProgress(0);
        setIsUploading(false);
        setUploadComplete(false);
        setSelectedJob(null);
        setSubmitSuccess(false);
      }, 3000);

    } catch (error: any) {
      console.error('❌ Application submission failed:', error);
      
      // Set user-friendly error message
      let errorMessage = 'Failed to submit application. Please try again.';
      
      if (error.message?.includes('Failed to fetch')) {
        errorMessage = 'Connection error. Please check your internet connection and try again.';
      } else if (error.message?.includes('company email')) {
        errorMessage = 'Failed to notify company. Please try again or contact support.';
      } else if (error.message?.includes('applicant email')) {
        errorMessage = 'Application submitted but confirmation email failed. You may not receive a confirmation email.';
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      setSubmitError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleJobApplication = (job: any) => {
    setSelectedJob(job);
    setShowResumeModal(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-background via-background to-gray-50 dark:to-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-5xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-8">
              Build the future of
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"> AI wellness</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-4xl mx-auto">
              Join our mission to transform how people connect with themselves through intelligent journaling. 
              We're building technology that helps millions discover insights, growth, and wellbeing.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground mb-2">50K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground mb-2">25+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground mb-2">95%</div>
                <div className="text-sm text-muted-foreground">User Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground mb-2">Remote</div>
                <div className="text-sm text-muted-foreground">First Culture</div>
              </div>
            </div>

            <a 
              href="#"
              onClick={() => setShowResumeModal(true)}
              className="inline-flex items-center gap-2 text-lg font-normal text-blue-400 hover:text-blue-500 transition-colors group"
            >
              Apply Now
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 -rotate-45 text-blue-400" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-16 bg-white dark:bg-gray-900/30 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Find Your Perfect Role
            </h2>
            
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="w-5 h-5 text-muted-foreground absolute left-4 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search jobs by title, skills, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-lg border border-border rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept === 'All' ? 'All Departments' : dept}</option>
                ))}
              </select>
              
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {locations.map(location => (
                  <option key={location} value={location}>{location === 'All' ? 'All Locations' : location}</option>
                ))}
              </select>
              
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {jobTypes.map(type => (
                  <option key={type} value={type}>{type === 'All' ? 'All Job Types' : type}</option>
                ))}
              </select>
            </div>

            <div className="text-center text-muted-foreground">
              {filteredJobs.length} position{filteredJobs.length !== 1 ? 's' : ''} found
            </div>
          </motion.div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 hover:shadow-lg hover:scale-[1.01] transition-all duration-300 border-border">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <h3 className="text-2xl font-bold text-foreground">{job.title}</h3>
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm font-medium rounded-full">
                          {job.department}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed text-lg">{job.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Briefcase className="w-4 h-4" />
                          <span>{job.experience}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {job.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-3 lg:ml-6">
                      <a 
                        href="#"
                        onClick={() => handleJobApplication(job)}
                        className="inline-flex items-center gap-2 text-base font-normal text-blue-400 hover:text-blue-500 transition-colors group"
                      >
                        Apply Now
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 -rotate-45 text-blue-400" />
                      </a>
                      <Button variant="outline" className="px-6 py-3">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Values & Culture</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The principles that guide everything we do at Autography. We believe in creating 
              technology that serves humanity while building a workplace that nurtures growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 text-center h-full hover:shadow-md transition-shadow">
                  <value.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-6" />
                  <h3 className="text-xl font-bold mb-4 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-3xl font-bold text-foreground mb-8">Benefits & Perks</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mx-auto mb-3"></div>
                  <p className="text-muted-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-foreground mb-6">Don't See Your Role?</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We're always looking for talented people to join our team. 
              Send us your resume and let us know how you'd like to contribute to our mission.
            </p>
            <a 
              href="#"
              onClick={() => setShowResumeModal(true)}
              className="inline-flex items-center gap-2 text-lg font-normal text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors group"
            >
              Send Us Your Resume
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 -rotate-45 text-black dark:text-white" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Resume Upload Modal */}
      {showResumeModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-background rounded-2xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-foreground">Upload Resume</h3>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => {
                  setShowResumeModal(false);
                  setUploadProgress(0);
                  setIsUploading(false);
                  setUploadComplete(false);
                }}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            
            {!isUploading && !uploadComplete && (
              <div className="space-y-4">
                {/* Horizontal Upload Options */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Device Upload */}
                  <div className="border-2 border-dashed border-border rounded-xl p-4 text-center hover:border-blue-400 transition-colors">
                    <HardDrive className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground mb-3 font-medium text-sm">
                      Upload from Device
                    </p>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleResumeUpload}
                      className="hidden"
                      id="resume-upload"
                    />
                    <label htmlFor="resume-upload" className="cursor-pointer">
                      <Button 
                        type="button"
                        size="sm"
                        className="bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-black"
                      >
                        Choose File
                      </Button>
                    </label>
                    <p className="text-xs text-muted-foreground mt-2">
                      PDF, DOC, DOCX (max 10MB)
                    </p>
                  </div>

                  {/* Google Drive Upload */}
                  <div className="border-2 border-dashed border-border rounded-xl p-4 text-center hover:border-blue-400 transition-colors">
                    <Cloud className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground mb-3 font-medium text-sm">
                      Import from Google Drive
                    </p>
                    <Button 
                      type="button"
                      size="sm"
                      onClick={handleGoogleDriveUpload}
                      className="bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-black"
                    >
                      <Cloud className="w-3 h-3 mr-1" />
                      Connect
                    </Button>
                    <p className="text-xs text-muted-foreground mt-2">
                      Select from your drive
                    </p>
                  </div>
                </div>

                {/* Continue Without Resume Option */}
                <div className="text-center pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-3">
                    Don't have a resume ready?
                  </p>
                  <a 
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleContinueWithoutResume();
                    }}
                    className="inline-flex items-center gap-2 text-sm font-normal text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors group"
                  >
                    Continue without resume
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1 -rotate-45 text-black dark:text-white" />
                  </a>
                </div>
              </div>
            )}

            {/* Upload Progress */}
            {isUploading && (
              <div className="text-center py-6">
                <Upload className="w-10 h-10 text-green-500 mx-auto mb-3 animate-bounce" />
                <p className="text-lg font-medium text-foreground mb-3">
                  Uploading your resume...
                </p>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full transition-all duration-300 ease-out"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {Math.round(uploadProgress)}% complete
                </p>
              </div>
            )}

            {/* Upload Complete */}
            {uploadComplete && (
              <div className="text-center py-6">
                <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-3" />
                <p className="text-lg font-medium text-foreground mb-2">
                  Resume uploaded successfully!
                </p>
                <p className="text-sm text-muted-foreground">
                  Proceeding to application form...
                </p>
              </div>
            )}
          </motion.div>
        </div>
      )}

      {/* Application Form Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-background rounded-2xl p-6 w-full max-w-7xl my-4 max-h-[95vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6 sticky top-0 bg-background pb-4 border-b border-border">
              <h3 className="text-2xl font-bold text-foreground">
                Application Details
                {selectedJob && <span className="text-blue-600 dark:text-blue-400"> - {selectedJob.title}</span>}
              </h3>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setShowApplicationForm(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            <form onSubmit={handleApplicationSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                {submitError && (
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 lg:col-span-2">
                    <p className="text-red-600 dark:text-red-400 text-sm">{submitError}</p>
                  </div>
                )}

                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">Personal Information</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={applicationData.firstName}
                        onChange={(e) => setApplicationData({...applicationData, firstName: e.target.value})}
                        className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={applicationData.lastName}
                        onChange={(e) => setApplicationData({...applicationData, lastName: e.target.value})}
                        className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={applicationData.email}
                    onChange={(e) => setApplicationData({...applicationData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={applicationData.phone}
                      onChange={(e) => setApplicationData({...applicationData, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Current Location</label>
                    <input
                      type="text"
                      value={applicationData.location}
                      onChange={(e) => setApplicationData({...applicationData, location: e.target.value})}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="City, Country"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Years of Experience</label>
                  <select
                    value={applicationData.experience}
                    onChange={(e) => setApplicationData({...applicationData, experience: e.target.value})}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select experience level</option>
                    <option value="0-1 years">0-1 years</option>
                    <option value="2-3 years">2-3 years</option>
                    <option value="4-5 years">4-5 years</option>
                    <option value="6-8 years">6-8 years</option>
                    <option value="9+ years">9+ years</option>
                  </select>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">Professional Links</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">LinkedIn Profile</label>
                      <input
                        type="url"
                        value={applicationData.linkedIn}
                        onChange={(e) => setApplicationData({...applicationData, linkedIn: e.target.value})}
                        className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="https://linkedin.com/in/yourprofile"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Portfolio/Website</label>
                      <input
                        type="url"
                        value={applicationData.portfolio}
                        onChange={(e) => setApplicationData({...applicationData, portfolio: e.target.value})}
                        className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="https://yourportfolio.com"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Cover Letter</label>
                  <textarea
                    rows={8}
                    value={applicationData.coverLetter}
                    onChange={(e) => setApplicationData({...applicationData, coverLetter: e.target.value})}
                    placeholder="Tell us why you're interested in this role and what makes you a great fit for our team. Share your passion for AI wellness and how you'd contribute to our mission..."
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                    maxLength={2000}
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    {applicationData.coverLetter.length}/2000 characters
                  </p>
                </div>

                {resumeFile && (
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="text-sm font-medium text-green-800 dark:text-green-300">
                          Resume uploaded successfully
                        </p>
                        <p className="text-xs text-green-600 dark:text-green-400">
                          {resumeFile.name} ({(resumeFile.size / 1024 / 1024).toFixed(2)} MB)
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {!resumeFile && (
                  <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Upload className="w-5 h-5 text-yellow-600" />
                      <div>
                        <p className="text-sm font-medium text-yellow-800 dark:text-yellow-300">
                          No resume uploaded
                        </p>
                        <p className="text-xs text-yellow-600 dark:text-yellow-400">
                          You can upload a resume later or attach it to your email response
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Submit Section - Full Width */}
              <div className="lg:col-span-2 border-t border-border pt-6">
                {!isSubmitting && !submitSuccess && (
                  <div className="flex gap-4 justify-end">
                    <Button 
                      type="button"
                      variant="outline"
                      onClick={() => setShowApplicationForm(false)}
                      className="px-8 py-3"
                    >
                      Cancel
                    </Button>
                    <Button 
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                      disabled={!applicationData.firstName || !applicationData.lastName || !applicationData.email}
                    >
                      Submit Application
                    </Button>
                  </div>
                )}

                {isSubmitting && (
                  <div className="text-center py-6">
                    <div className="inline-flex items-center gap-3">
                      <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-blue-600 font-medium">Submitting application...</span>
                    </div>
                  </div>
                )}

                {submitSuccess && (
                  <div className="text-center py-8">
                    <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                    <p className="text-xl font-medium text-green-600 mb-3">Application submitted successfully!</p>
                    <p className="text-muted-foreground">
                      You'll receive a confirmation email shortly. We'll be in touch within 5-7 business days.
                    </p>
                  </div>
                )}

                {submitError && (
                  <div className="text-center py-4">
                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                      <p className="text-red-600 dark:text-red-400 font-medium">{submitError}</p>
                      <Button 
                        onClick={() => setSubmitError('')}
                        variant="outline"
                        size="sm"
                        className="mt-2"
                      >
                        Try Again
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}
