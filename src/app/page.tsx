'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Menu, X, Smartphone, Monitor, Users, TrendingUp, Shield, Star, ArrowRight } from 'lucide-react';

export default function Home() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('pos');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const features = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Operational Excellence",
      subtitle: "Average 40% reduction in process costs",
      description: "Automate complex, cross-departmental workflows to eliminate bottlenecks and reduce operational costs.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Real-Time Command Center",
      subtitle: "85% faster decision-making cycles",
      description: "Govern your entire operation from anywhere with secure, role-based access and approval flows.",
      color: "from-blue-500 to-[#053d5e]"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Predictive Customer Insights",
      subtitle: "35% increase in customer lifetime value",
      description: "Leverage AI to anticipate customer needs, reduce churn, and maximize lifetime value.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Strategic Intelligence Engine",
      subtitle: "60% improvement in forecast accuracy",
      description: "Move beyond reporting to predictive analytics and prescriptive insights for data-driven decision making.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <img 
                src="/lazlle-logo-full.svg" 
                alt="Lazlle & Co Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <span className="text-2xl font-bold text-gray-800">Lazlle & Co</span>
                <span className="block text-sm text-gray-500 -mt-1">Your Growth Engine</span>
              </div>
            </motion.div>
            
            <div className="hidden md:flex items-center space-x-4 ml-auto">
              {['Features', 'Solutions', 'About', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={item === 'Contact' ? '/contact' : `#${item.toLowerCase()}`}
                  onClick={(e) => {
                    if (item === 'Contact') {
                      window.location.href = '/contact';
                    } else {
                      e.preventDefault();
                      scrollToSection(item.toLowerCase());
                    }
                  }}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                </motion.a>
              ))}
              <Button 
                className="bg-gradient-to-r from-blue-500 to-[#053d5e] hover:from-blue-600 hover:to-[#064d74]"
                onClick={() => scrollToSection('packages')}
              >
                View Packages
              </Button>
            </div>
            
            <button 
              className="md:hidden text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {['Features', 'Solutions', 'About', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={item === 'Contact' ? '/contact' : `#${item.toLowerCase()}`} 
                  onClick={(e) => {
                    if (item === 'Contact') {
                      e.preventDefault();
                      window.location.href = '/contact';
                    }
                  }}
                  className="block text-gray-600 hover:text-blue-600 py-2"
                >
                  {item}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button className="bg-gradient-to-r from-blue-500 to-[#053d5e]">
                  View Packages
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 to-[#e6f3f8]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <motion.div variants={itemVariants}>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Drive EBITDA Growth Through
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-[#053d5e]">
                    {' '}Intelligent Automation
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                  Maximize ROI and achieve sustainable competitive advantage with enterprise-grade automation solutions. 
                  Enhance operational efficiency, mitigate risks, and scale your business with SLA-backed performance that directly impacts your bottom line.
                </p>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-500 to-[#053d5e] hover:from-blue-600 hover:to-[#064d74] text-lg px-8 py-4 rounded-full"
                  onClick={() => scrollToSection('packages')}
                >
                  Maximize ROI
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 py-4 rounded-full border-gray-300 hover:border-blue-500"
                  onClick={() => window.location.href = '/learn-more'}
                >
                  Strategic Advantage
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-[#053d5e] rounded-2xl blur-3xl opacity-20"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl p-8">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-[#e6f3f8] rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <img 
                        src="/dashboard-analytics.png" 
                        alt="Enterprise Analytics Dashboard" 
                        className="w-full h-full object-cover rounded-xl"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling!.style.display = 'block';
                        }}
                        style={{ display: 'block' }}
                      />
                      <div style={{ display: 'none' }} className="text-center">
                        <Monitor className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                        <p className="text-gray-600 font-medium">Enterprise Analytics Dashboard</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-[#053d5e]">
                {' '}Succeed
              </span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic capabilities designed for enterprise leaders who demand competitive advantage, operational excellence, and measurable business impact
            </motion.p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                      <div className="text-white">
                        {feature.icon}
                      </div>
                    </div>
                    <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                    {feature.subtitle && (
                      <div className="text-lg font-bold text-blue-600 mt-2">
                        {feature.subtitle}
                      </div>
                    )}
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-gray-600">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product Demo Section */}
      <section id="packages" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex space-x-4 mb-8">
                {['starter', 'professional', 'enterprise'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                      activeTab === tab 
                        ? 'bg-gradient-to-r from-blue-500 to-[#053d5e] text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {tab === 'enterprise' ? 'Enterprise Suite' : tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900">
            Enterprise-Grade Solutions for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-[#053d5e]">
              {' '}Every Scale
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            From emerging businesses to global enterprises, our automation platform scales with your ambition. 
            Choose the solution that matches your strategic objectives and growth trajectory.
          </p>
          
          <div className="space-y-4">
            {activeTab === 'starter' && [
              "Perfect for small businesses and startups",
              "Quick setup and intuitive automation interface",
              "Essential automation features at affordable price",
              "Designed for small shops and local businesses"
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <Star className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
            
            {activeTab === 'professional' && [
              "Ideal for growing businesses and medium companies",
              "Advanced process automation and workflows",
              "Customer relationship automation",
              "Perfect for established businesses and chains"
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <Star className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
            
            {activeTab === 'enterprise' && [
              "Dedicated Solution Architect for custom implementation",
              "Custom API Integration with existing enterprise systems",
              "SLA Guarantee with 99.9% uptime and performance metrics",
              "Premium 24/7 Support with dedicated account management",
              "On-Premise Deployment Options for maximum security and compliance"
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <Star className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-500 to-[#053d5e] hover:from-blue-600 hover:to-[#064d74]"
            onClick={() => activeTab === 'enterprise' ? window.location.href = 'tel:+916351324531' : router.push('/contact')}
          >
            {activeTab === 'enterprise' ? 'Contact Sales' : 'Get Started Today'}
          </Button>
        </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <div className="text-center">
                    <img 
                      src="/automation-dashboard.png" 
                      alt="Business Automation Dashboard" 
                      className="w-full h-full object-cover rounded-xl"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling!.style.display = 'block';
                      }}
                      style={{ display: 'block' }}
                    />
                    <div style={{ display: 'none' }} className="text-center">
                      <div className="w-32 h-32 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-6 mx-auto">
                        <Monitor className="w-16 h-16 text-blue-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Business Automation Dashboard</h3>
                      <p className="text-gray-600">Real-time insights at your fingertips</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-gray-900 mb-4">
              Industry-Specific
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-[#053d5e]">
                {' '}Solutions
              </span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored automation solutions for every industry, designed to address unique challenges and opportunities
            </motion.p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                title: "Restaurant Management",
                description: "Complete POS, inventory, and customer management for food service businesses",
                image: "/restaurant-realistic.jpg"
              },
              {
                title: "Agency Automation",
                description: "Streamline client management, project tracking, and team collaboration",
                image: "/agency-realistic.jpg"
              },
              {
                title: "Corporate Solutions",
                description: "Enterprise-grade automation for large organizations and complex workflows",
                image: "/corporate-realistic.jpg"
              },
              {
                title: "Fitness & Wellness",
                description: "Member management, scheduling, and analytics for gyms and wellness centers",
                image: "/gym-realistic.jpg"
              }
            ].map((solution, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={solution.image} 
                      alt={solution.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-900">{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {solution.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-gray-900">
                About
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-[#053d5e]">
                  {' '}Lazlle & Co
                </span>
              </h2>
              
              <div className="bg-gradient-to-r from-blue-50 to-gray-50 p-6 rounded-lg border-l-4 border-blue-500 mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Harsh Gohil, Founder & CEO</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Harsh is the visionary builder behind Lazlle & Co. For over three years, he has been exclusively dedicated to architecting and developing SaaS solutions that solve core business inefficiencies. His journey began not in a corporate boardroom, but in the codebase—hands-on, identifying the critical pain points that stifle growth for modern businesses.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  This deep technical immersion, combined with direct conversations with hundreds of business leaders, revealed a universal need: a unified, intelligent, and accessible automation platform. Driven by this insight, he founded Lazlle & Co to transform business operations from a series of manual tasks into a connected, strategic advantage. Harsh's unique, product-first perspective ensures that Lazlle is built not just to meet market specifications, but to genuinely empower companies to achieve more.
                </p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">The Vision</h3>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    "For the past three years, I've been deep in the trenches—building, testing, and iterating on SaaS solutions. I've spoken with hundreds of business owners and operators. A constant, frustrating theme emerged: the immense gap between the complex, expensive enterprise automation tools and the simplistic, disconnected apps available to everyone else. Growing businesses are forced to hack together a 'stack' of 10+ tools, creating data silos, escalating costs, and overwhelming their teams. They are stuck managing their software instead of having their software manage their business."
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">The Mission</h3>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    "I founded Lazlle & Co to bridge this chasm. Our vision is to create a single, intelligent, and unified automation platform that is powerful enough for an enterprise but intuitive and affordable for a scaling business. We are building the operating system for modern companies—where every process, from customer onboarding to financial reporting, is connected, efficient, and data-driven. I've spent years building the foundational technology for this because I believe that every business, not just Fortune 500 companies, deserves access to tools that unleash their potential for innovation and growth."
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                {[
                  { label: "Founded", value: "2024", desc: "Strategic automation leadership" },
                  { label: "Focus", value: "B2B", desc: "Enterprise value creation" },
                  { label: "Expertise", value: "ROI-Driven", desc: "Measurable business impact" },
                  { label: "Commitment", value: "Excellence", desc: "SLA-backed performance" }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg border border-gray-100 hover:shadow-lg transition-all duration-300">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                    <div className="text-sm font-semibold text-gray-700 mb-1">{stat.label}</div>
                    <div className="text-xs text-gray-500">{stat.desc}</div>
                  </div>
                ))}
              </div>
              
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-[#053d5e] hover:from-blue-600 hover:to-[#064d74]" onClick={() => window.location.href = 'tel:+916351324531'}>
                Contact Us
              </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                <img 
                  src="/team-image.jpg" 
                  alt="Lazlle & Co Team"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-500 to-[#053d5e]">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8"
          >
            <h2 className="text-4xl lg:text-5xl font-bold">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Start your automation journey with Lazlle & Co and discover how our solutions can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-lg px-8 py-4 rounded-full"
                onClick={() => scrollToSection('packages')}
              >
                Start Free Trial
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-4 rounded-full border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-blue-600 transition-all duration-300"
                onClick={() => window.location.href = 'tel:+916351324531'}
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Column 1: Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img 
                  src="/lazlle-logo-full.svg" 
                  alt="Lazlle & Co Logo" 
                  className="w-10 h-10 object-contain"
                />
                <div>
                  <span className="text-xl font-bold">Lazlle & Co</span>
                  <span className="block text-sm text-gray-400 -mt-1">Your Growth Engine</span>
                </div>
              </div>
              <p className="text-gray-400">
                Intelligent automation solutions for enterprise growth.
              </p>
              <div className="space-y-2 pt-4">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-400">Founded by:</span>
                  <span className="text-sm font-medium text-white">Harsh Gohil</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-400">Contact:</span>
                  <a href="tel:+916351324531" className="text-sm font-medium text-white hover:text-blue-400 transition-colors">
                    +91 63513 24531
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: Solutions */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Solutions</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#features" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Operational Excellence
                  </a>
                </li>
                <li>
                  <a href="#features" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Real-Time Command Center
                  </a>
                </li>
                <li>
                  <a href="#features" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Predictive Customer Insights
                  </a>
                </li>
                <li>
                  <a href="#features" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Strategic Intelligence Engine
                  </a>
                </li>
                <li>
                  <a href="#solutions" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Enterprise Suite
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#packages" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Pricing Plans
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Contact Sales
                  </a>
                </li>
                <li>
                  <a href="/learn-more" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Learn More
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-gray-400">&copy; 2025 Lazlle & Co. All rights reserved.</p>
                <p className="mt-1 text-sm text-gray-400">Harsh Gohil | Founder & CEO</p>
              </div>
              <div className="flex space-x-6 text-center">
                <div>
                  <p className="text-sm text-gray-400">Version</p>
                  <p className="text-sm font-medium text-white">v2.1.0</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Status</p>
                  <p className="text-sm font-medium text-green-400">All Systems Operational</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}