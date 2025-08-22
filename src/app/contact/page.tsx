'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Mail, Phone, Building, User, Briefcase, Loader2 } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    businessType: '',
    message: ''
  });

  const businessTypes = [
    'Restaurant',
    'Retail Store',
    'Manufacturing',
    'Service Business',
    'E-commerce',
    'Healthcare',
    'Education',
    'Real Estate',
    'Technology',
    'Consulting',
    'Other'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        // Open the user's email client with pre-filled content
        window.location.href = result.mailtoLink;
        
        // Show success message after a short delay
        setTimeout(() => {
          alert('Please send the email from your email client to complete your submission.');
          // Reset form
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            businessType: '',
            message: ''
          });
        }, 1000);
      } else {
        alert(result.error || 'Failed to submit form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-[#e6f3f8]">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-3">
            <Button 
              variant="ghost" 
              onClick={() => window.history.back()}
              className="text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <div className="flex items-center space-x-3">
              <img 
                src="/lazlle-logo-short.svg" 
                alt="Lazlle & Co Logo" 
                className="w-8 h-8 object-contain"
              />
              <div>
                <span className="text-lg font-bold text-gray-800">Lazlle & Co</span>
                <span className="block text-xs text-gray-500 -mt-1">Your Growth Engine</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get Started with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-[#053d5e]">
              {' '}Business Automation
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're a new startup building practical automation solutions for businesses. Fill out the form below and we'll open your email client with a pre-filled message to send directly to our team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div>
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700 font-medium">
                      Full Name *
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        id="name"
                        type="text"
                        required
                        className="pl-10"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 font-medium">
                      Email Address *
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        id="email"
                        type="email"
                        required
                        className="pl-10"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-700 font-medium">
                      Phone Number *
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        id="phone"
                        type="tel"
                        required
                        className="pl-10"
                        placeholder="+91 63513 24531"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-gray-700 font-medium">
                      Company Name *
                    </Label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        id="company"
                        type="text"
                        required
                        className="pl-10"
                        placeholder="Your Company Ltd."
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="businessType" className="text-gray-700 font-medium">
                      Business Type *
                    </Label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 z-10" />
                      <Select value={formData.businessType} onValueChange={(value) => handleInputChange('businessType', value)}>
                        <SelectTrigger className="pl-10">
                          <SelectValue placeholder="Select your business type" />
                        </SelectTrigger>
                        <SelectContent>
                          {businessTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-700 font-medium">
                      Message (Optional)
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your business automation needs..."
                      className="min-h-[100px]"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                    />
                  </div>

                  <div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-500 to-[#053d5e] hover:from-blue-600 hover:to-[#064d74] text-lg py-3"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        'Get Started Today'
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <Card className="bg-gradient-to-br from-blue-500 to-[#053d5e] text-white">
                <CardHeader>
                  <CardTitle className="text-2xl">Why Choose Lazlle & Co?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-blue-100">Practical automation solutions for real business needs</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-blue-100">Focused on small and medium business requirements</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-blue-100">Personalized support and attention</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-blue-100">Simple, affordable solutions that grow with you</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">Direct Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <a href="tel:+916351324531" className="text-blue-600 hover:text-blue-700">
                        +91 63513 24531
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-[#e6f3f8] rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-[#053d5e]" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a href="mailto:lazlleandco@gmail.com" className="text-blue-600 hover:text-blue-700">
                        lazlleandco@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Founded by</p>
                      <p className="text-gray-600">Harsh Gohil</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}