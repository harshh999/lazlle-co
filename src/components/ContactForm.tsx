'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { ArrowRight, MessageCircle, Mail } from 'lucide-react';

interface FormData {
  fullName: string;
  email: string;
  whatsappNumber: string;
  companyName: string;
  businessCategory: string;
  serviceInterested: string;
  projectBudget: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    whatsappNumber: '',
    companyName: '',
    businessCategory: '',
    serviceInterested: '',
    projectBudget: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [shouldHighlight, setShouldHighlight] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const sectionPosition = sectionRef.current?.offsetTop || 0;
      
      // Check if contact form is in view
      if (scrollPosition >= sectionPosition && scrollPosition <= sectionPosition + 500) {
        setShouldHighlight(true);
        // Remove highlight after animation completes
        setTimeout(() => setShouldHighlight(false), 1500);
      }
    };

    // Check for hash in URL
    if (window.location.hash === '#contact-form') {
      setTimeout(() => setShouldHighlight(true), 500);
      setTimeout(() => setShouldHighlight(false), 2000);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation
    if (!formData.fullName || !formData.email) {
      toast.error('Please fill in all required fields');
      setIsSubmitting(false);
      return;
    }

    // WhatsApp integration
    const whatsappMessage = `Hi Lazlle Studio, I'd like to discuss a new project about ${formData.serviceInterested || 'your services'}. My name is ${formData.fullName}.${formData.companyName ? ` I'm from ${formData.companyName}.` : ''}${formData.message ? ` Project details: ${formData.message}` : ''}`;
    
    const whatsappUrl = `https://wa.me/916351324531?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Show success message
    toast.success('Thanks for reaching out! Redirecting to WhatsApp...', {
      duration: 2000,
    });

    // Open WhatsApp after a short delay
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        whatsappNumber: '',
        companyName: '',
        businessCategory: '',
        serviceInterested: '',
        projectBudget: '',
        message: ''
      });
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section 
      ref={sectionRef}
      id="contact-form" 
      className={`relative py-24 px-4 overflow-hidden transition-all duration-300 ${
        shouldHighlight ? 'animate-highlight-on-scroll border-2 border-cyan-200/50' : ''
      }`}
    >
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/contact-banner.jpg)' }}
      />
      <div className="absolute inset-0 bg-[#0b0b0b]/90 backdrop-blur-sm" />
      
      {/* Subtle orange accent borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-200/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-200/20 to-transparent" />

      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Let's Build Something Amazing Together
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Tell us a bit about your project, and we'll get back within 24 hours.
          </motion.p>
        </motion.div>

        <motion.form
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          {/* Two column layout for desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <motion.div variants={itemVariants} className="space-y-2">
              <Label htmlFor="fullName" className="text-gray-300 text-sm font-medium">
                Full Name <span className="text-cyan-200">*</span>
              </Label>
              <Input
                id="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                className="bg-white/5 border-white/10 text-white placeholder-gray-500 rounded-xl focus:border-cyan-200 focus:ring-cyan-200/20 transition-all duration-300"
                placeholder="John Doe"
              />
            </motion.div>

            {/* Email Address */}
            <motion.div variants={itemVariants} className="space-y-2">
              <Label htmlFor="email" className="text-gray-300 text-sm font-medium">
                Email Address <span className="text-cyan-200">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="bg-white/5 border-white/10 text-white placeholder-gray-500 rounded-xl focus:border-cyan-200 focus:ring-cyan-200/20 transition-all duration-300"
                placeholder="john@example.com"
              />
            </motion.div>

            {/* WhatsApp Number */}
            <motion.div variants={itemVariants} className="space-y-2">
              <Label htmlFor="whatsappNumber" className="text-gray-300 text-sm font-medium">
                WhatsApp Number
              </Label>
              <Input
                id="whatsappNumber"
                type="text"
                value={formData.whatsappNumber}
                onChange={(e) => handleInputChange('whatsappNumber', e.target.value)}
                className="bg-white/5 border-white/10 text-white placeholder-gray-500 rounded-xl focus:border-cyan-200 focus:ring-cyan-200/20 transition-all duration-300"
                placeholder="+91 98765 43210"
              />
            </motion.div>

            {/* Company / Brand Name */}
            <motion.div variants={itemVariants} className="space-y-2">
              <Label htmlFor="companyName" className="text-gray-300 text-sm font-medium">
                Company / Brand Name
              </Label>
              <Input
                id="companyName"
                type="text"
                value={formData.companyName}
                onChange={(e) => handleInputChange('companyName', e.target.value)}
                className="bg-white/5 border-white/10 text-white placeholder-gray-500 rounded-xl focus:border-cyan-200 focus:ring-cyan-200/20 transition-all duration-300"
                placeholder="Your Company Ltd."
              />
            </motion.div>

            {/* Category of Business */}
            <motion.div variants={itemVariants} className="space-y-2">
              <Label htmlFor="businessCategory" className="text-gray-300 text-sm font-medium">
                Category of Business
              </Label>
              <Select value={formData.businessCategory} onValueChange={(value) => handleInputChange('businessCategory', value)}>
                <SelectTrigger className="bg-white/5 border-white/10 text-white rounded-xl focus:border-cyan-200 focus:ring-cyan-200/20 transition-all duration-300">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent className="bg-[#1a1a1a] border-white/10 text-white">
                  <SelectItem value="startup">Startup</SelectItem>
                  <SelectItem value="msme">MSME</SelectItem>
                  <SelectItem value="local-business">Local Business</SelectItem>
                  <SelectItem value="agency">Agency</SelectItem>
                  <SelectItem value="corporate">Corporate</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </motion.div>

            {/* Service Interested In */}
            <motion.div variants={itemVariants} className="space-y-2">
              <Label htmlFor="serviceInterested" className="text-gray-300 text-sm font-medium">
                Service Interested In
              </Label>
              <Select value={formData.serviceInterested} onValueChange={(value) => handleInputChange('serviceInterested', value)}>
                <SelectTrigger className="bg-white/5 border-white/10 text-white rounded-xl focus:border-cyan-200 focus:ring-cyan-200/20 transition-all duration-300">
                  <SelectValue placeholder="Select service" />
                </SelectTrigger>
                <SelectContent className="bg-[#1a1a1a] border-white/10 text-white">
                  <SelectItem value="web-development">Web Development</SelectItem>
                  <SelectItem value="saas">SaaS</SelectItem>
                  <SelectItem value="ecommerce">E-commerce</SelectItem>
                  <SelectItem value="ui-ux-branding">UI/UX & Branding</SelectItem>
                  <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                  <SelectItem value="consulting">Consulting</SelectItem>
                </SelectContent>
              </Select>
            </motion.div>

            {/* Project Budget */}
            <motion.div variants={itemVariants} className="space-y-2">
              <Label htmlFor="projectBudget" className="text-gray-300 text-sm font-medium">
                Project Budget (Optional)
              </Label>
              <Select value={formData.projectBudget} onValueChange={(value) => handleInputChange('projectBudget', value)}>
                <SelectTrigger className="bg-white/5 border-white/10 text-white rounded-xl focus:border-cyan-200 focus:ring-cyan-200/20 transition-all duration-300">
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent className="bg-[#1a1a1a] border-white/10 text-white">
                  <SelectItem value="0-10k">₹0–₹10k</SelectItem>
                  <SelectItem value="10k-50k">₹10k–₹50k</SelectItem>
                  <SelectItem value="50k+">₹50k+</SelectItem>
                </SelectContent>
              </Select>
            </motion.div>

            {/* Message / Project Details */}
            <motion.div variants={itemVariants} className="space-y-2 md:col-span-2">
              <Label htmlFor="message" className="text-gray-300 text-sm font-medium">
                Message / Project Details
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value.slice(0, 500))}
                className="bg-white/5 border-white/10 text-white placeholder-gray-500 rounded-xl focus:border-cyan-200 focus:ring-cyan-200/20 transition-all duration-300 min-h-[120px] resize-none"
                placeholder="Tell us about your project requirements, timeline, and any specific features you need..."
                maxLength={500}
              />
              <p className="text-xs text-gray-500 text-right">
                {formData.message.length}/500 characters
              </p>
            </motion.div>
          </div>

          {/* Submit Button */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center space-y-4 pt-8"
          >
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-gradient-to-r from-[#a8c9cd] to-[#cbdee2] hover:from-[#cbdee2] hover:to-[#a8c9cd] text-gray-900 font-semibold px-12 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#cbdee2]/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? (
                <span className="flex items-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Sending...</span>
                </span>
              ) : (
                <span className="flex items-center space-x-2">
                  <span>Send Message</span>
                  <ArrowRight className="w-5 h-5" />
                </span>
              )}
            </Button>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4 text-[#cbdee2]" />
                <span>WhatsApp Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#cbdee2]" />
                <span>Email Response</span>
              </div>
            </div>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
}