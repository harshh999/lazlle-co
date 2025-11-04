'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ArrowRight, 
  Code, 
  Globe, 
  ShoppingCart, 
  Palette, 
  TrendingUp, 
  Users,
  Lightbulb,
  Target,
  Zap,
  CheckCircle,
  MessageCircle
} from 'lucide-react';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

const Home = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites, web apps, and performance-optimized solutions',
      href: '/services/web-development',
      color: 'bg-blue-500/20 text-blue-400'
    },
    {
      icon: Globe,
      title: 'SaaS Development',
      description: 'Scalable SaaS platforms, dashboards, and automation solutions',
      href: '/services/saas',
      color: 'bg-green-500/20 text-green-400'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce',
      description: 'Online stores, payment systems, and conversion optimization',
      href: '/services/ecommerce',
      color: 'bg-purple-500/20 text-purple-400'
    },
    {
      icon: Palette,
      title: 'UI/UX & Branding',
      description: 'Design systems, brand identity, and user experience optimization',
      href: '/services/design',
      color: 'bg-pink-500/20 text-pink-400'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'SEO, social media, campaigns, and growth strategies',
      href: '/services/marketing',
      color: 'bg-cyan-200/20 text-cyan-300'
    },
    {
      icon: Users,
      title: 'Consulting',
      description: 'Business strategy, tech consulting, and scaling frameworks',
      href: '/services/consulting',
      color: 'bg-cyan-500/20 text-cyan-400'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discover',
      description: 'We dive deep into your vision, goals, and challenges to understand what makes your business unique.',
      icon: Lightbulb
    },
    {
      step: '02',
      title: 'Design',
      description: 'Our creative team crafts beautiful, functional designs that align with your brand and resonate with your audience.',
      icon: Palette
    },
    {
      step: '03',
      title: 'Develop',
      description: 'We bring designs to life with clean, scalable code using cutting-edge technologies and best practices.',
      icon: Code
    },
    {
      step: '04',
      title: 'Deliver',
      description: 'We launch your solution with comprehensive support, ensuring smooth operation and continued growth.',
      icon: Target
    }
  ];

  const faqs = [
    {
      question: 'How long does a project take?',
      answer: 'Project timelines vary based on complexity. A standard website typically takes 1–2 weeks, while a full-scale SaaS platform may take 3–6 weeks. We share a detailed timeline during the discovery and planning phase.'
    },
    {
      question: 'Do you work with startups and small businesses?',
      answer: 'Absolutely! We love working with startups and small businesses. We offer flexible solutions that scale with your growth and budget-friendly options for emerging companies.'
    },
    {
      question: 'Do you offer post-launch support?',
      answer: 'Yes, we provide comprehensive post-launch support including maintenance, updates, and ongoing optimization. We offer various support packages to fit your needs.'
    },
    {
      question: 'Can you sign an NDA?',
      answer: 'Absolutely. We understand the importance of confidentiality and are happy to sign NDAs to protect your intellectual property and business information.'
    },
    {
      question: 'What is your pricing model?',
      answer: 'We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. Pricing depends on project scope, complexity, and timeline.'
    },
    {
      question: 'What if I already have a website or app?',
      answer: 'We can help redesign, optimize, or extend your existing digital assets. We also provide audits and recommendations to improve performance and user experience.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/hero-banner.jpg" 
            alt="Lazlle Studio Hero Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0E0E0E]/90 via-[#0E0E0E]/80 to-[#0E0E0E]/95" />
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Built to lead.
              <span className="text-blue-500"> Engineered</span>
              <br />
              to last.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              We're a full-service 360° digital studio delivering design, development, marketing, and consulting solutions for startups, MSMEs, local businesses, corporates, and agencies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 text-white rounded-2xl px-8 py-4 text-lg transition-all hover:shadow-lg hover:shadow-blue-500/25 group"
                onClick={() => {
                  const element = document.getElementById('contact-form');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact for Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 rounded-2xl px-8 py-4 text-lg transition-all"
              >
                <Link href="/services">
                  View Our Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to your unique needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={service.title}
                className={`bg-[#1a1a1a] border-white/10 hover:border-blue-500/50 transition-all duration-300 group hover:shadow-lg hover:shadow-blue-500/10 animate-fade-in-up animate-stagger-${(index % 4) + 1}`}
              >
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-500 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {service.description}
                  </p>
                  <Link 
                    href={service.href}
                    className="inline-flex items-center text-blue-500 hover:text-blue-500/80 transition-colors duration-300 group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-[#0E0E0E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A proven methodology that delivers exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={step.title} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-[#1a1a1a] border-2 border-blue-500/30 rounded-full flex items-center justify-center mx-auto group-hover:border-blue-500 transition-colors">
                    <step.icon className="w-8 h-8 text-blue-500" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About Lazlle Studio
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                We're more than just a digital agency — we're your strategic partner in innovation. Based in Ahmedabad, India, Lazlle Studio brings together creative minds and technical expertise to transform ideas into powerful digital experiences.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Our team of passionate designers, developers, marketers, and consultants work collaboratively to deliver end-to-end solutions that drive growth, enhance user experiences, and build lasting brand value.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-300">Results-Driven</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-300">End-to-End Solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-300">Creative-First Approach</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-300">Scalable Architecture</span>
                </div>
              </div>
              <Button 
                asChild
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 text-white rounded-2xl px-6 py-3 transition-all hover:shadow-lg hover:shadow-blue-500/25"
              >
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img 
                  src="/homepageimage.jpg" 
                  alt="Lazlle Studio Workspace"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#cbdee2]/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#0E0E0E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-400">
              Everything you need to know about working with us
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-[#1a1a1a] border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-400">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Build Something
            <span className="text-blue-500"> Extraordinary</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Ready to transform your ideas into reality? Let's start the conversation.
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 text-white rounded-2xl px-8 py-4 text-lg transition-all hover:shadow-lg hover:shadow-blue-500/25 group"
            onClick={() => {
              const element = document.getElementById('contact-form');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Start Your Project
            <MessageCircle className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />
    </div>
  );
};

export default Home;