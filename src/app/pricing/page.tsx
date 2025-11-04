'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  MessageCircle, 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  DollarSign,
  Sparkles,
  Target
} from 'lucide-react';
import Link from 'next/link';

const Pricing = () => {
  const factors = [
    {
      icon: Target,
      title: 'Project Scope',
      description: 'Complexity, features, and functionality requirements'
    },
    {
      icon: Clock,
      title: 'Timeline',
      description: 'Project duration and delivery schedule'
    },
    {
      icon: Sparkles,
      title: 'Expertise Level',
      description: 'Seniority and specialization required'
    },
    {
      icon: DollarSign,
      title: 'Long-term Value',
      description: 'ROI potential and ongoing support needs'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'Free 30-minute call to understand your needs'
    },
    {
      step: '02',
      title: 'Detailed Proposal',
      description: 'Comprehensive quote with project breakdown'
    },
    {
      step: '03',
      title: 'Agreement & Kickoff',
      description: 'Contract signing and project initiation'
    },
    {
      step: '04',
      title: 'Delivery & Support',
      description: 'Project completion and ongoing support'
    }
  ];

  const benefits = [
    'Transparent pricing with no hidden costs',
    'Flexible payment schedules available',
    'Detailed project scope documentation',
    'Regular progress updates and reports',
    'Post-launch support included',
    'Satisfaction guarantee on all projects'
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-[#0E0E0E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Investment in
              <span className="text-blue-500"> Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Every project is unique — we don't believe in one-size-fits-all pricing. 
              Get a custom quote tailored to your specific needs and goals.
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
                Contact for Quote
                <MessageCircle className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <p className="text-gray-400 mt-4">
              We respond within 1–2 hours
            </p>
          </div>
        </div>
      </section>

      {/* Why Custom Pricing */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Custom Pricing?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We believe in fair pricing that reflects the true value and complexity of your project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {factors.map((factor) => (
              <Card key={factor.title} className="bg-[#1a1a1a] border-white/10 hover:border-blue-500/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <factor.icon className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {factor.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {factor.description}
                  </p>
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
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Pricing Process
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Transparent and straightforward from start to finish
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

      {/* What's Included */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              What's Included in Every Project
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive services that ensure your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center space-x-3 p-4 bg-[#1a1a1a] rounded-lg border border-white/10">
                <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Range */}
      <section className="py-20 bg-[#0E0E0E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Investment Ranges
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              General pricing guidelines to help you plan your budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-[#1a1a1a] border-white/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Starter Projects</h3>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-4">
                  Starting from ₹7,999
                </div>
                <p className="text-gray-400 mb-4">
                  Simple websites, landing pages, basic e-commerce, or small consulting projects.
                </p>
                <ul className="space-y-2 text-sm text-gray-400 mb-6">
                  <li>• 2–6 weeks timeline</li>
                  <li>• Essential features</li>
                  <li>• Standard support</li>
                </ul>
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 text-white rounded-xl transition-all"
                >
                  <a 
                    href="https://wa.me/916351324531?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services%20and%20how%20Lazlle%20%26%20Co%20can%20help%20my%20business" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Get Quote
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-[#1a1a1a] border-white/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Growth Projects</h3>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-4">
                  Starting from ₹31,999
                </div>
                <p className="text-gray-400 mb-4">
                  Custom web apps, advanced e-commerce, or comprehensive marketing campaigns.
                </p>
                <ul className="space-y-2 text-sm text-gray-400 mb-6">
                  <li>• 1–3 months timeline</li>
                  <li>• Advanced features</li>
                  <li>• Priority support</li>
                </ul>
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 text-white rounded-xl transition-all"
                >
                  <a 
                    href="https://wa.me/916351324531?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services%20and%20how%20Lazlle%20%26%20Co%20can%20help%20my%20business" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Get Quote
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-[#1a1a1a] border-white/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Enterprise Solutions</h3>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-4">
                  Starting from ₹51,999
                </div>
                <p className="text-gray-400 mb-4">
                  SaaS platforms, enterprise systems, or complete digital transformation solutions.
                </p>
                <ul className="space-y-2 text-sm text-gray-400 mb-6">
                  <li>• 3+ months timeline</li>
                  <li>• Custom solutions</li>
                  <li>• Dedicated support</li>
                </ul>
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 text-white rounded-xl transition-all"
                >
                  <a 
                    href="https://wa.me/916351324531?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services%20and%20how%20Lazlle%20%26%20Co%20can%20help%20my%20business" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Get Quote
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="bg-gradient-to-br from-blue-600/20 to-blue-500/20 border-white/10">
            <CardContent className="p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss your project and create a custom proposal that fits your budget and exceeds your expectations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                    Get Your Custom Quote
                    <MessageCircle className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10 rounded-2xl px-8 py-4 text-lg transition-all"
                >
                  <Link href="/contact">
                    Schedule a Call
                  </Link>
                </Button>
              </div>
              <p className="text-gray-400 mt-6">
                <Clock className="inline w-4 h-4 mr-2" />
                Average response time: 1-2 hours
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Pricing;