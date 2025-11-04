'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ArrowRight, 
  TrendingUp, 
  Search, 
  Mail, 
  Share2, 
  BarChart, 
  Target,
  MessageCircle,
  CheckCircle,
  Rocket
} from 'lucide-react';
import Link from 'next/link';

const Marketing = () => {
  const services = [
    {
      icon: Search,
      title: 'Search Engine Optimization',
      description: 'Improve your search rankings and drive organic traffic with proven SEO strategies.'
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Build brand awareness and engagement across all social media platforms.'
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Create targeted email campaigns that nurture leads and drive conversions.'
    },
    {
      icon: BarChart,
      title: 'Analytics & Reporting',
      description: 'Data-driven insights to optimize your marketing performance and ROI.'
    }
  ];

  const strategies = [
    'Content Marketing Strategy',
    'Pay-Per-Click Advertising (PPC)',
    'Influencer Marketing',
    'Conversion Rate Optimization',
    'Brand Strategy Development',
    'Video Marketing',
    'Local SEO Optimization',
    'Reputation Management',
    'Marketing Automation',
    'A/B Testing & Optimization',
    'Competitor Analysis',
    'Growth Hacking Strategies'
  ];

  const process = [
    {
      step: '01',
      title: 'Market Research',
      description: 'Analyzing your market, competitors, and target audience.'
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Creating comprehensive marketing strategies tailored to your goals.'
    },
    {
      step: '03',
      title: 'Campaign Execution',
      description: 'Implementing marketing campaigns across multiple channels.'
    },
    {
      step: '04',
      title: 'Optimization & Growth',
      description: 'Continuously optimizing campaigns for better performance and results.'
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
                <div className="w-12 h-12 bg-cyan-200/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-cyan-300" />
                </div>
                <span className="text-cyan-300 font-medium">Digital Marketing</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Drive Growth with
                <span className="text-blue-500"> Smart Marketing</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your digital presence with data-driven marketing strategies that deliver measurable results. From SEO to social media, we create comprehensive campaigns that increase visibility, engagement, and conversions.
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
                    Grow Your Business
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
                src="/digital-marketing.jpg" 
                alt="Digital Marketing"
                className="aspect-square w-full rounded-2xl object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-200/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Marketing Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="bg-[#1a1a1a] border-white/10 hover:border-cyan-200/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-cyan-200/20 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-cyan-300" />
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

      {/* Strategies */}
      <section className="py-20 bg-[#0E0E0E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Marketing Strategies
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Proven strategies to accelerate your growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {strategies.map((strategy) => (
              <div key={strategy} className="flex items-center space-x-3 p-4 bg-[#1a1a1a] rounded-lg border border-white/10">
                <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{strategy}</span>
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
              Our Marketing Process
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Strategic approach to marketing success
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
                Why Choose Our Marketing Services?
              </h2>
              <div className="space-y-4">
                {[
                  'Data-driven marketing strategies',
                  'Proven ROI and performance tracking',
                  'Multi-channel marketing expertise',
                  'Customized solutions for your industry',
                  'Continuous optimization and improvement',
                  'Transparent reporting and analytics'
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="bg-gradient-to-br from-blue-600/20 to-cyan-200/20 border-white/10">
              <CardContent className="p-8">
                <div className="text-center">
                  <Rocket className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Grow?</h3>
                  <p className="text-gray-300 mb-6">
                    Let's create marketing campaigns that drive real results for your business.
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
                      Start Your Marketing Campaign
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
            Accelerate Your
            <span className="text-blue-500"> Digital Growth</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Transform your online presence with marketing strategies that deliver measurable results and sustainable growth.
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
              Get a Free Marketing Audit
              <MessageCircle className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Marketing;