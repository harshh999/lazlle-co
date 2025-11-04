'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ArrowRight, 
  Target, 
  Lightbulb, 
  Users, 
  Award, 
  Globe,
  Heart,
  Zap,
  CheckCircle,
  MessageCircle
} from 'lucide-react';
import Link from 'next/link';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion-Driven',
      description: 'We pour our hearts into every project, treating your vision as our own and going above and beyond to exceed expectations.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We stay ahead of the curve, embracing cutting-edge technologies and creative approaches to solve complex challenges.'
    },
    {
      icon: Users,
      title: 'Collaborative Spirit',
      description: 'We believe in the power of partnership, working closely with clients to create solutions that truly resonate with their audience.'
    },
    {
      icon: Target,
      title: 'Results-Oriented',
      description: 'Every decision we make is driven by data and focused on delivering measurable outcomes that drive your business forward.'
    }
  ];

  const whyChooseUs = [
    {
      title: 'Full-Service Capabilities',
      description: 'From strategy to execution, we handle every aspect of your digital presence under one roof.',
      icon: Globe
    },
    {
      title: 'Industry Expertise',
      description: 'Deep experience across startups, enterprises, and everything in between gives us unique insights.',
      icon: Award
    },
    {
      title: 'Agile Methodology',
      description: 'We adapt quickly to changes and deliver value incrementally, ensuring you always get the best results.',
      icon: Zap
    },
    {
      title: 'Long-Term Partnership',
      description: 'We don\'t just build and leave – we grow with you, providing ongoing support and optimization.',
      icon: Users
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Delivered' },
    { number: '30+', label: 'Happy Clients' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-[#0E0E0E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              About
              <span className="text-blue-500"> Lazlle Studio</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              We're a team of passionate creators, innovators, and problem-solvers dedicated to transforming ideas into powerful digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 text-white rounded-2xl px-6 py-3 transition-all hover:shadow-lg hover:shadow-blue-500/25"
              >
                <a 
                  href="https://wa.me/916351324531?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services%20and%20how%20Lazlle%20%26%20Co%20can%20help%20my%20business" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button 
                asChild
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 rounded-2xl px-6 py-3 transition-all"
              >
                <Link href="/services">
                  View Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Lazlle Studio was born from a simple realization: businesses need more than just services – they need partners who understand their vision and can bring it to life with creativity and technical excellence.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Founded in Ahmedabad, India, we started as a small team with big dreams. Today, we're a full-service digital studio that has helped dozens of businesses across various industries establish their digital presence, scale their operations, and achieve their goals.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Our journey has taught us that the best solutions come from understanding people – both our clients and their customers. This human-centered approach, combined with our technical expertise, is what sets us apart.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img 
                  src="/consulting.jpg" 
                  alt="Our Story - Lazlle Studio Journey"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#0E0E0E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="bg-[#1a1a1a] border-white/10">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and create lasting value. We're committed to turning ambitious ideas into reality through creativity, technology, and strategic thinking.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1a1a1a] border-white/10">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Lightbulb className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                  To be the most trusted digital partner for businesses worldwide, known for our innovative approach, exceptional quality, and unwavering commitment to client success. We envision a future where technology seamlessly enhances every business operation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={value.title} className="bg-[#1a1a1a] border-white/10 hover:border-blue-500/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-400">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-[#0E0E0E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Lazlle Studio
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We're not just another agency – we're your strategic growth partner
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={item.title} className="flex space-x-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0E0E0E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your
            <span className="text-blue-500"> Digital Presence?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help you achieve your goals and take your business to the next level.
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
              Start Your Project
              <MessageCircle className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;