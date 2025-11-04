'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ArrowRight, 
  Code, 
  Zap, 
  Smartphone, 
  Database, 
  Shield, 
  Globe,
  MessageCircle,
  CheckCircle,
  Rocket
} from 'lucide-react';
import Link from 'next/link';

const WebDevelopment = () => {
  const services = [
    {
      icon: Globe,
      title: 'Custom Websites',
      description: 'Tailored websites that reflect your brand and engage your audience with stunning design and seamless functionality.'
    },
    {
      icon: Smartphone,
      title: 'Progressive Web Apps',
      description: 'Modern web applications that work offline, load instantly, and provide native app-like experiences.'
    },
    {
      icon: Database,
      title: 'Web Applications',
      description: 'Complex, data-driven applications with robust backend systems and intuitive user interfaces.'
    },
    {
      icon: Zap,
      title: 'API Development',
      description: 'RESTful APIs and GraphQL solutions that enable seamless integration between systems.'
    }
  ];

  const technologies = [
    'React.js', 'Next.js', 'Node.js', 'TypeScript', 
    'PostgreSQL', 'MongoDB', 'AWS', 'Docker',
    'Tailwind CSS', 'Framer Motion', 'Prisma', 'Vercel'
  ];

  const process = [
    {
      step: '01',
      title: 'Requirements Analysis',
      description: 'We dive deep into your business needs, target audience, and technical requirements.'
    },
    {
      step: '02',
      title: 'Architecture Design',
      description: 'Our team designs scalable, secure, and performant system architecture.'
    },
    {
      step: '03',
      title: 'Agile Development',
      description: 'We build your solution using iterative development with regular feedback loops.'
    },
    {
      step: '04',
      title: 'Testing & Deployment',
      description: 'Comprehensive testing and seamless deployment to ensure smooth launch.'
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
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-blue-400" />
                </div>
                <span className="text-blue-400 font-medium">Web Development</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Build Powerful
                <span className="text-blue-500"> Digital Experiences</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                From stunning websites to complex web applications, we create digital solutions that drive engagement, conversion, and growth. Our expert team combines cutting-edge technology with user-centric design to deliver exceptional results.
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
                    Let's Build Your Website
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
                src="/web-development.jpg" 
                alt="Web Development"
                className="aspect-square w-full rounded-2xl object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive web development solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="bg-[#1a1a1a] border-white/10 hover:border-blue-500/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-blue-400" />
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

      {/* Technologies */}
      <section className="py-20 bg-[#0E0E0E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Cutting-edge tools and frameworks to build modern, scalable solutions
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <div 
                key={tech}
                className="px-4 py-2 bg-[#1a1a1a] border border-white/10 rounded-lg text-white hover:border-blue-500/50 transition-colors"
              >
                {tech}
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
              Our Development Process
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A structured approach to ensure successful project delivery
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
                Why Choose Our Web Development Services?
              </h2>
              <div className="space-y-4">
                {[
                  'Performance-optimized solutions that load in seconds',
                  'SEO-friendly architecture for better search rankings',
                  'Responsive design that works on all devices',
                  'Scalable codebase that grows with your business',
                  'Security-first approach to protect your data',
                  'Ongoing support and maintenance'
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="bg-gradient-to-br from-blue-600/20 to-blue-500/20 border-white/10">
              <CardContent className="p-8">
                <div className="text-center">
                  <Rocket className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Launch?</h3>
                  <p className="text-gray-300 mb-6">
                    Let's discuss your project and create a web solution that drives real results for your business.
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
                      Start Your Project
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
            Transform Your Ideas into
            <span className="text-blue-500"> Reality</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Whether you need a simple website or a complex web application, we have the expertise to bring your vision to life.
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
              Get a Free Consultation
              <MessageCircle className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;