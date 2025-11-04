'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ArrowRight, 
  Users, 
  Lightbulb, 
  Target, 
  TrendingUp, 
  Brain, 
  Shield,
  MessageCircle,
  CheckCircle,
  Rocket
} from 'lucide-react';
import Link from 'next/link';

const Consulting = () => {
  const services = [
    {
      icon: Lightbulb,
      title: 'Business Strategy',
      description: 'Strategic planning and business model optimization for sustainable growth.'
    },
    {
      icon: Brain,
      title: 'Technology Consulting',
      description: 'Expert guidance on technology stack selection and digital transformation.'
    },
    {
      icon: Target,
      title: 'Growth Strategy',
      description: 'Data-driven growth frameworks and scaling strategies for your business.'
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Comprehensive risk assessment and mitigation strategies for business stability.'
    }
  ];

  const offerings = [
    'Startup Advisory Services',
    'Product Strategy Development',
    'Market Entry Strategy',
    'Operational Excellence',
    'Digital Transformation',
    'Team Building & Structure',
    'Process Optimization',
    'Financial Planning & Analysis',
    'Investor Pitch Preparation',
    'Competitive Analysis',
    'Business Model Innovation',
    'Scaling Frameworks'
  ];

  const process = [
    {
      step: '01',
      title: 'Assessment & Analysis',
      description: 'Deep dive into your business challenges, opportunities, and current state.'
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Creating tailored strategies and actionable plans for your specific needs.'
    },
    {
      step: '03',
      title: 'Implementation Support',
      description: 'Hands-on support during strategy implementation and change management.'
    },
    {
      step: '04',
      title: 'Monitoring & Optimization',
      description: 'Continuous monitoring and optimization of implemented strategies.'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-[#0E0E0E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-cyan-400" />
                </div>
                <span className="text-cyan-400 font-medium">Business Consulting</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Strategic Guidance for
                <span className="text-blue-500"> Business Success</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your business with expert consulting services that drive growth, innovation, and operational excellence. Our experienced consultants provide strategic insights and actionable solutions to help you navigate complex business challenges.
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
                    Transform Your Business
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
                src="/consulting.jpg" 
                alt="Business Consulting"
                className="aspect-square w-full rounded-2xl object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Consulting Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Expert guidance across all aspects of your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="bg-[#1a1a1a] border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-cyan-400" />
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

      {/* Offerings */}
      <section className="py-20 bg-[#0E0E0E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive consulting solutions for your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {offerings.map((offering) => (
              <div key={offering} className="flex items-center space-x-3 p-4 bg-[#1a1a1a] rounded-lg border border-white/10">
                <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{offering}</span>
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
              Our Consulting Process
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A structured approach to business transformation
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
                Why Choose Our Consulting Services?
              </h2>
              <div className="space-y-4">
                {[
                  'Experienced consultants with proven track records',
                  'Customized solutions for your unique challenges',
                  'Data-driven decision making frameworks',
                  'Hands-on implementation support',
                  'Industry-specific expertise',
                  'Long-term partnership approach'
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="bg-gradient-to-br from-blue-600/20 to-cyan-500/20 border-white/10">
              <CardContent className="p-8">
                <div className="text-center">
                  <Rocket className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform?</h3>
                  <p className="text-gray-300 mb-6">
                    Let's work together to overcome challenges and unlock your business potential.
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
                      Start Your Consulting Journey
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
            Transform Your
            <span className="text-blue-500"> Business Today</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get expert guidance to navigate challenges and seize opportunities for growth and innovation.
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
              Get a Free Business Consultation
              <MessageCircle className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Consulting;