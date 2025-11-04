'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ArrowRight, 
  Globe, 
  Users, 
  BarChart, 
  Shield, 
  Zap, 
  Database,
  MessageCircle,
  CheckCircle,
  Rocket
} from 'lucide-react';
import Link from 'next/link';

const SaaS = () => {
  const services = [
    {
      icon: Users,
      title: 'Multi-Tenant Architecture',
      description: 'Scalable SaaS platforms that serve multiple customers with secure data isolation.'
    },
    {
      icon: BarChart,
      title: 'Analytics & Dashboards',
      description: 'Real-time analytics and intuitive dashboards for data-driven decision making.'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with GDPR, SOC2, and industry compliance standards.'
    },
    {
      icon: Zap,
      title: 'Automation Workflows',
      description: 'Intelligent automation that streamlines operations and enhances user experience.'
    }
  ];

  const features = [
    'Subscription Management',
    'User Authentication & Authorization',
    'Payment Integration (Stripe, PayPal)',
    'Email Notifications & Communication',
    'API Development & Documentation',
    'Performance Monitoring',
    'Backup & Disaster Recovery',
    'Scalable Cloud Infrastructure'
  ];

  const process = [
    {
      step: '01',
      title: 'Product Strategy',
      description: 'Define your SaaS product vision, target market, and competitive advantage.'
    },
    {
      step: '02',
      title: 'MVP Development',
      description: 'Build a minimum viable product that validates your core assumptions.'
    },
    {
      step: '03',
      title: 'Iterative Scaling',
      description: 'Continuously improve and scale based on user feedback and market demands.'
    },
    {
      step: '04',
      title: 'Growth Optimization',
      description: 'Optimize for user acquisition, retention, and revenue growth.'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-[#0E0E0E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-green-400" />
                </div>
                <span className="text-green-400 font-medium">SaaS Development</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Build Scalable
                <span className="text-blue-500"> SaaS Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your ideas into successful SaaS products. We specialize in building scalable, secure, and user-friendly software-as-a-service solutions that drive recurring revenue and delight users.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 text-white rounded-2xl px-6 py-3 transition-all hover:shadow-lg hover:shadow-blue-500/25"
                >
                  <a 
                    href="https://wa.me/916351324531?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services%20and%20how%20Lazlle%20%26%20Co%20can%20help%20my%20business" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Build Your SaaS
                    <MessageCircle className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 rounded-2xl px-6 py-3 transition-all"
                >
                  <Link href="/services">
                    View All Services
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <img 
                src="/saas-development.jpg" 
                alt="SaaS Development"
                className="aspect-square w-full rounded-2xl object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              SaaS Development Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              End-to-end SaaS solutions from concept to scale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="bg-[#1a1a1a] border-white/10 hover:border-green-500/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-400">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-[#0E0E0E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Essential SaaS Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to launch and scale your SaaS product
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature) => (
              <div key={feature} className="flex items-center space-x-3 p-4 bg-[#1a1a1a] rounded-lg border border-white/10">
                <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              SaaS Development Process
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From idea to successful SaaS product
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-500 font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#0E0E0E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Our SaaS Development?
              </h2>
              <div className="space-y-4">
                {[
                  'Proven experience with successful SaaS launches',
                  'Scalable architecture that grows with your user base',
                  'Built-in analytics and performance monitoring',
                  'Comprehensive security and data protection',
                  'Agile development for rapid iteration',
                  'Post-launch support and optimization'
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="bg-gradient-to-br from-blue-600/20 to-green-500/20 border-white/10">
              <CardContent className="p-8">
                <div className="text-center">
                  <Rocket className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Launch?</h3>
                  <p className="text-gray-300 mb-6">
                    Let's build a SaaS product that users love and that drives sustainable growth.
                  </p>
                  <Button 
                    asChild
                    className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 text-white rounded-2xl w-full"
                  >
                    <a 
                      href="https://wa.me/916351324531?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services%20and%20how%20Lazlle%20%26%20Co%20can%20help%20my%20business" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Start Your SaaS Project
                      <MessageCircle className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Build Your Next
            <span className="text-blue-500"> SaaS Success</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the successful SaaS companies that trust us with their product development.
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 text-white rounded-2xl px-8 py-4 text-lg transition-all hover:shadow-lg hover:shadow-blue-500/25"
          >
            <a 
              href="https://wa.me/916351324531?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services%20and%20how%20Lazlle%20%26%20Co%20can%20help%20my%20business" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Get a Free SaaS Consultation
              <MessageCircle className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SaaS;