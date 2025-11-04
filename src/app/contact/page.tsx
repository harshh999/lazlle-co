'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock, 
  Phone,
  ArrowRight,
  CheckCircle,
  Zap,
  Users,
  Target
} from 'lucide-react';
import Link from 'next/link';

const Contact = () => {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Fast, personal, and hassle-free communication',
      action: 'Start Chat',
      href: 'https://wa.me/916351324531?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services%20and%20how%20Lazlle%20%26%20Co%20can%20help%20my%20business',
      color: 'bg-green-500/20 text-green-400',
      badge: 'Recommended'
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Detailed project discussions and proposals',
      action: 'Send Email',
      href: 'mailto:lazlleandco@gmail.com',
      color: 'bg-blue-500/20 text-blue-400'
    },
    {
      icon: Phone,
      title: 'Phone',
      description: 'Direct voice conversations for urgent matters',
      action: 'Call Now',
      href: 'tel:+916351324531',
      color: 'bg-purple-500/20 text-purple-400'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Quick Response',
      description: 'We respond within 1-2 hours during business hours'
    },
    {
      icon: Users,
      title: 'Expert Consultation',
      description: 'Free 30-minute consultation to discuss your project'
    },
    {
      icon: Target,
      title: 'Tailored Solutions',
      description: 'Custom proposals based on your specific needs'
    },
    {
      icon: CheckCircle,
      title: 'No Obligation',
      description: 'Free quotes with no commitment required'
    }
  ];

  const faqs = [
    {
      question: 'What information should I prepare for the consultation?',
      answer: 'It helps to have your project goals, timeline, budget range, and any specific requirements ready. But don\'t worry - we can guide you through the process.'
    },
    {
      question: 'How quickly can we start the project?',
      answer: 'Depending on our current workload and project complexity, we can typically start within 1-2 weeks after agreement. Urgent projects may be accommodated.'
    },
    {
      question: 'Do you work with international clients?',
      answer: 'Absolutely! We work with clients globally and are experienced in remote collaboration across different time zones.'
    },
    {
      question: 'What if I\'m not sure about my exact requirements?',
      answer: 'That\'s completely fine! We offer discovery sessions to help clarify your needs and define project scope together.'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-[#0E0E0E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Let's Build Something
              <span className="text-blue-500"> Extraordinary</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Have an idea or project in mind? Let's discuss it over WhatsApp — fast, personal, and hassle-free.
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
                Start on WhatsApp
                <MessageCircle className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the contact method that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method) => (
              <Card key={method.title} className="bg-[#1a1a1a] border-white/10 hover:border-blue-500/50 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 ${method.color} rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform`}>
                      <method.icon className="w-8 h-8" />
                    </div>
                    {method.badge && (
                      <div className="absolute -top-2 -right-2 bg-blue-600 text-gray-900 text-xs px-2 py-1 rounded-full">
                        {method.badge}
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {method.title}
                  </h3>
                  <p className="text-gray-400 mb-6">
                    {method.description}
                  </p>
                  <Button 
                    asChild
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 text-white rounded-xl transition-all"
                  >
                    <a 
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : '_self'}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    >
                      {method.action}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-[#0E0E0E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">WhatsApp</h3>
                    <p className="text-gray-300 mb-2">+91 63513 24531</p>
                    <a 
                      href="https://wa.me/916351324531?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services%20and%20how%20Lazlle%20%26%20Co%20can%20help%20my%20business"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-500/80 transition-colors"
                    >
                      Open WhatsApp Chat
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                    <p className="text-gray-300 mb-2">lazlleandco@gmail.com</p>
                    <a 
                      href="mailto:lazlleandco@gmail.com"
                      className="text-blue-500 hover:text-blue-500/80 transition-colors"
                    >
                      Send Email
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Location</h3>
                    <p className="text-gray-300">Ahmedabad, India</p>
                    <p className="text-gray-400 text-sm">Available for remote collaboration worldwide</p>
                  </div>
                </div>


              </div>
            </div>

            <Card className="bg-gradient-to-br from-blue-600/20 to-blue-500/20 border-white/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Why Contact Us?</h3>
                <div className="space-y-4">
                  {benefits.map((benefit) => (
                    <div key={benefit.title} className="flex items-start space-x-3">
                      <benefit.icon className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-white font-medium mb-1">{benefit.title}</h4>
                        <p className="text-gray-400 text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-400">
              Everything you need to know about getting started
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
      <section className="py-20 bg-[#0E0E0E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your
            <span className="text-blue-500"> Project?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Don't wait to bring your ideas to life. Reach out now and let's create something amazing together.
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
                Start on WhatsApp
                <MessageCircle className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 rounded-2xl px-8 py-4 text-lg transition-all"
            >
              <Link href="/pricing">
                View Pricing
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;