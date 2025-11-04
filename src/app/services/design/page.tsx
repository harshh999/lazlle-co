'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ArrowRight, 
  Palette, 
  Brush, 
  Eye, 
  Layers, 
  Sparkles, 
  PenTool,
  MessageCircle,
  CheckCircle,
  Rocket
} from 'lucide-react';
import Link from 'next/link';

const Design = () => {
  const services = [
    {
      icon: Brush,
      title: 'Brand Identity Design',
      description: 'Complete brand identity including logos, color schemes, and visual guidelines.'
    },
    {
      icon: Eye,
      title: 'UI/UX Design',
      description: 'User-centered design that creates intuitive and delightful digital experiences.'
    },
    {
      icon: Layers,
      title: 'Design Systems',
      description: 'Comprehensive design systems that ensure consistency across all platforms.'
    },
    {
      icon: Sparkles,
      title: 'Creative Graphics',
      description: 'Stunning graphics, illustrations, and visual content that captures attention.'
    }
  ];

  const deliverables = [
    'Logo Design & Brand Guidelines',
    'Website & App UI Design',
    'User Experience Research',
    'Wireframing & Prototyping',
    'Social Media Graphics',
    'Marketing Materials',
    'Presentation Design',
    'Icon & Illustration Design',
    'Motion Graphics',
    'Print Design Materials',
    'Brand Strategy Development',
    'Visual Content Creation'
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Research',
      description: 'Understanding your brand, audience, and design requirements.'
    },
    {
      step: '02',
      title: 'Concept Development',
      description: 'Creating initial concepts and design directions based on research.'
    },
    {
      step: '03',
      title: 'Design & Refinement',
      description: 'Developing detailed designs and refining based on feedback.'
    },
    {
      step: '04',
      title: 'Delivery & Support',
      description: 'Finalizing designs and providing ongoing design support.'
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
                <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center">
                  <Palette className="w-6 h-6 text-pink-400" />
                </div>
                <span className="text-pink-400 font-medium">UI/UX & Branding</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Design
                <span className="text-blue-500"> Experiences</span> That Matter
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Create memorable brand experiences that captivate your audience and drive engagement. From brand identity to user interface design, we craft visual solutions that tell your story and connect with users.
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
                    Transform Your Brand
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
                src="/uiux-branding.jpg" 
                alt="UI/UX & Branding"
                className="aspect-square w-full rounded-2xl object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Design Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive design solutions for your brand
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="bg-[#1a1a1a] border-white/10 hover:border-pink-500/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-pink-400" />
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

      {/* Deliverables */}
      <section className="py-20 bg-[#0E0E0E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              What We Deliver
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive design assets for your brand
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {deliverables.map((deliverable) => (
              <div key={deliverable} className="flex items-center space-x-3 p-4 bg-[#1a1a1a] rounded-lg border border-white/10">
                <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{deliverable}</span>
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
              Our Design Process
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A creative approach to exceptional design
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
                Why Choose Our Design Services?
              </h2>
              <div className="space-y-4">
                {[
                  'User-centered design approach',
                  'Consistent brand identity across all touchpoints',
                  'Modern, trend-aware design aesthetics',
                  'Focus on conversion and user engagement',
                  'Collaborative design process',
                  'Comprehensive design documentation'
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="bg-gradient-to-br from-blue-600/20 to-pink-500/20 border-white/10">
              <CardContent className="p-8">
                <div className="text-center">
                  <Rocket className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Create?</h3>
                  <p className="text-gray-300 mb-6">
                    Let's design experiences that your users will love and remember.
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
                      Start Your Design Project
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
            Design Your
            <span className="text-blue-500"> Success Story</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Transform your brand with design that stands out and connects with your audience.
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
              Get a Free Design Consultation
              <MessageCircle className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Design;