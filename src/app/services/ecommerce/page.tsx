'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ArrowRight, 
  ShoppingCart, 
  CreditCard, 
  Package, 
  BarChart, 
  Users, 
  Globe,
  MessageCircle,
  CheckCircle,
  Rocket
} from 'lucide-react';
import Link from 'next/link';

const Ecommerce = () => {
  const services = [
    {
      icon: Globe,
      title: 'Online Store Development',
      description: 'Custom e-commerce websites built for conversion and user experience.'
    },
    {
      icon: CreditCard,
      title: 'Payment Integration',
      description: 'Secure payment gateway integration with multiple payment options.'
    },
    {
      icon: Package,
      title: 'Inventory Management',
      description: 'Real-time inventory tracking and automated stock management systems.'
    },
    {
      icon: BarChart,
      title: 'Analytics & Reporting',
      description: 'Comprehensive analytics to track sales, customers, and performance.'
    }
  ];

  const platforms = [
    'Shopify Development',
    'WooCommerce Solutions',
    'Magento Development',
    'Custom E-commerce Platforms',
    'BigCommerce Development',
    'Mobile Commerce Apps'
  ];

  const features = [
    'Responsive Mobile-First Design',
    'Secure Payment Processing',
    'Product Catalog Management',
    'Shopping Cart & Checkout',
    'Order Management System',
    'Customer Account Portals',
    'Shipping & Tax Calculations',
    'SEO Optimization',
    'Email Marketing Integration',
    'Social Media Integration',
    'Multi-currency Support',
    'Performance Optimization'
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-[#0E0E0E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <ShoppingCart className="w-6 h-6 text-purple-400" />
                </div>
                <span className="text-purple-400 font-medium">E-commerce Solutions</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Build Thriving
                <span className="text-blue-500"> Online Stores</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Create powerful e-commerce experiences that drive sales and delight customers. From custom platforms to optimized Shopify stores, we build solutions that convert visitors into loyal customers.
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
                    Build Your Store
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
                src="/ecommerce.jpg" 
                alt="E-commerce"
                className="aspect-square w-full rounded-2xl object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              E-commerce Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Complete e-commerce solutions for online success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="bg-[#1a1a1a] border-white/10 hover:border-purple-500/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-purple-400" />
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

      {/* Platforms */}
      <section className="py-20 bg-[#0E0E0E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              E-commerce Platforms
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Expertise across all major e-commerce platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform) => (
              <Card key={platform} className="bg-[#1a1a1a] border-white/10 hover:border-blue-500/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-white">{platform}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Essential E-commerce Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to run a successful online store
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature) => (
              <div key={feature} className="flex items-center space-x-3 p-4 bg-[#1a1a1a] rounded-lg border border-white/10">
                <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{feature}</span>
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
                Why Choose Our E-commerce Solutions?
              </h2>
              <div className="space-y-4">
                {[
                  'Conversion-focused design that increases sales',
                  'Mobile-optimized for shopping on any device',
                  'Fast loading times for better user experience',
                  'Secure payment processing and data protection',
                  'SEO-friendly structure for better visibility',
                  'Scalable to grow with your business'
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="bg-gradient-to-br from-blue-600/20 to-purple-500/20 border-white/10">
              <CardContent className="p-8">
                <div className="text-center">
                  <Rocket className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Sell?</h3>
                  <p className="text-gray-300 mb-6">
                    Let's build an e-commerce store that drives sales and grows your business.
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
                      Start Your E-commerce Project
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
            Start Selling
            <span className="text-blue-500"> Online Today</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Transform your business with a powerful e-commerce solution that drives growth and customer satisfaction.
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
              Get a Free E-commerce Consultation
              <MessageCircle className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Ecommerce;