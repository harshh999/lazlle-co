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
  MessageCircle
} from 'lucide-react';
import Link from 'next/link';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites, web applications, and performance-optimized solutions built with cutting-edge technologies.',
      features: [
        'Responsive & Mobile-First Design',
        'Progressive Web Apps (PWA)',
        'Content Management Systems',
        'Custom Web Applications',
        'API Development & Integration',
        'Performance Optimization'
      ],
      href: '/services/web-development',
      color: 'bg-blue-500/20 text-blue-400',
      gradient: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      icon: Globe,
      title: 'SaaS Development',
      description: 'Scalable SaaS platforms, dashboards, and automation solutions designed for growth and user engagement.',
      features: [
        'Multi-Tenant Architecture',
        'Subscription Management',
        'Analytics & Reporting',
        'Third-Party Integrations',
        'Scalable Infrastructure',
        'Data Security & Compliance'
      ],
      href: '/services/saas',
      color: 'bg-green-500/20 text-green-400',
      gradient: 'from-green-500/20 to-emerald-500/20'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce',
      description: 'Complete e-commerce solutions with payment systems, inventory management, and conversion optimization.',
      features: [
        'Online Store Development',
        'Payment Gateway Integration',
        'Inventory Management',
        'Order Processing Systems',
        'Customer Experience Design',
        'Analytics & Conversion Tracking'
      ],
      href: '/services/ecommerce',
      color: 'bg-purple-500/20 text-purple-400',
      gradient: 'from-purple-500/20 to-pink-500/20'
    },
    {
      icon: Palette,
      title: 'UI/UX & Branding',
      description: 'Design systems, brand identity, and user experience optimization that creates memorable digital interactions.',
      features: [
        'Brand Identity Design',
        'UI/UX Design Systems',
        'User Research & Testing',
        'Wireframing & Prototyping',
        'Design Systems Documentation',
        'Creative Direction'
      ],
      href: '/services/design',
      color: 'bg-pink-500/20 text-pink-400',
      gradient: 'from-pink-500/20 to-rose-500/20'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies including SEO, social media, and growth hacking for maximum impact.',
      features: [
        'Search Engine Optimization (SEO)',
        'Social Media Marketing',
        'Content Marketing Strategy',
        'Email Marketing Campaigns',
        'Paid Advertising (PPC)',
        'Analytics & Performance Tracking'
      ],
      href: '/services/marketing',
      color: 'bg-cyan-200/20 text-cyan-300',
      gradient: 'from-cyan-200/20 to-amber-500/20'
    },
    {
      icon: Users,
      title: 'Consulting',
      description: 'Strategic business consulting, technology advisory, and growth frameworks to scale your operations effectively.',
      features: [
        'Business Strategy Development',
        'Technology Consulting',
        'Growth Hacking Frameworks',
        'Process Optimization',
        'Team as a Service',
        'Startup Advisory'
      ],
      href: '/services/consulting',
      color: 'bg-cyan-500/20 text-cyan-400',
      gradient: 'from-cyan-500/20 to-blue-500/20'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-[#0E0E0E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Our
              <span className="text-blue-500"> Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive digital solutions designed to transform your business and accelerate your growth.
            </p>
            <Button 
              asChild
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 text-white rounded-2xl px-6 py-3 transition-all hover:shadow-lg hover:shadow-blue-500/25"
            >
              <a 
                href="https://wa.me/916351324531?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services%20and%20how%20Lazlle%20%26%20Co%20can%20help%20my%20business" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Get Custom Quote
                <MessageCircle className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title}
                className={`bg-gradient-to-br ${service.gradient} border-white/10 hover:border-blue-500/50 transition-all duration-300 group hover:shadow-xl hover:shadow-blue-500/10 overflow-hidden`}
              >
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <service.icon className="w-8 h-8" />
                    </div>
                    <div className="text-3xl font-bold text-white/20">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-500 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">What we offer:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-gray-400 text-sm">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link 
                    href={service.href}
                    className="inline-flex items-center text-blue-500 hover:text-blue-500/80 transition-colors font-medium"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-[#0E0E0E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              How We Work
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our proven process ensures exceptional results for every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your vision and requirements' },
              { step: '02', title: 'Strategy', desc: 'Planning the perfect solution' },
              { step: '03', title: 'Execution', desc: 'Building with excellence' },
              { step: '04', title: 'Delivery', desc: 'Launching and supporting' }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-500 font-bold text-xl">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your project and create a tailored solution that meets your specific needs.
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
                Start Your Project
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
                Schedule a Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;