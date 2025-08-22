'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Monitor, Smartphone, Users, TrendingUp, Shield, Star, ArrowRight, CheckCircle, Lightbulb, Zap, BarChart3, Cog, Database, Cloud, Globe, Building, Store, Factory, Utensils, Dumbbell, Briefcase, Heart } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function LearnMorePage() {
  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const coreFeatures = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Business Process Automation",
      description: "Streamline your business operations with our workflow automation tools",
      color: "from-blue-500 to-blue-600",
      details: [
        "Drag-and-drop workflow builder",
        "Document management system",
        "Basic CRM integration capabilities",
        "Process monitoring and notifications",
        "Customizable business rules"
      ]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Management",
      description: "Manage your business on the go with our mobile applications",
      color: "from-blue-500 to-[#053d5e]",
      details: [
        "iOS and Android mobile apps",
        "Real-time notifications",
        "Mobile dashboard access",
        "Basic task management",
        "Secure user authentication"
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer Management",
      description: "Simple tools to manage customer relationships and communications",
      color: "from-green-500 to-green-600",
      details: [
        "Customer contact management",
        "Email campaign templates",
        "Basic customer segmentation",
        "Feedback collection tools",
        "Simple communication tracking"
      ]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Basic Analytics",
      description: "Essential reporting and insights to understand your business performance",
      color: "from-orange-500 to-orange-600",
      details: [
        "Simple dashboard widgets",
        "Basic report generation",
        "Key performance indicators",
        "Data visualization charts",
        "Export capabilities"
      ]
    }
  ];

  const advancedFeatures = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Data Security",
      description: "Basic security features to protect your business information",
      color: "from-red-500 to-red-600",
      details: [
        "User authentication system",
        "Basic data encryption",
        "User permission controls",
        "Activity logging",
        "Regular security updates"
      ]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Storage",
      description: "Reliable cloud-based storage for your business data",
      color: "from-cyan-500 to-cyan-600",
      details: [
        "Secure cloud storage",
        "Data backup system",
        "File sharing capabilities",
        "Basic data sync",
        "Storage management tools"
      ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Management",
      description: "Simple tools to organize and manage your business data",
      color: "from-indigo-500 to-indigo-600",
      details: [
        "Data organization tools",
        "Basic import/export",
        "Data validation",
        "Simple reporting",
        "Data backup features"
      ]
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Customization Options",
      description: "Flexible features that can be adapted to your business needs",
      color: "from-pink-500 to-pink-600",
      details: [
        "Customizable workflows",
        "Basic API access",
        "Simple integrations",
        "Custom fields",
        "Basic branding options"
      ]
    }
  ];

  const industries = [
    {
      id: 'retail',
      name: 'Retail & E-commerce',
      icon: <Store className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-600',
      solutions: [
        "Basic inventory tracking",
        "Simple sales reporting",
        "Customer contact management",
        "Order processing tools",
        "Basic product catalog",
        "Sales trend analysis"
      ]
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing',
      icon: <Factory className="w-6 h-6" />,
      color: 'from-green-500 to-green-600',
      solutions: [
        "Production tracking",
        "Basic quality control",
        "Simple inventory management",
        "Equipment maintenance logs",
        "Basic scheduling tools",
        "Safety incident reporting"
      ]
    },
    {
      id: 'restaurant',
      name: 'Restaurant & Hospitality',
      icon: <Utensils className="w-6 h-6" />,
      color: 'from-orange-500 to-orange-600',
      solutions: [
        "Table reservation system",
        "Order management",
        "Basic inventory tracking",
        "Customer feedback collection",
        "Staff scheduling",
        "Menu management tools"
      ]
    },
    {
      id: 'healthcare',
      name: 'Healthcare',
      icon: <Heart className="w-6 h-6" />,
      color: 'from-red-500 to-red-600',
      solutions: [
        "Appointment scheduling",
        "Patient record management",
        "Basic billing tools",
        "Reminder system",
        "Simple reporting",
        "Communication tools"
      ]
    },
    {
      id: 'fitness',
      name: 'Fitness & Wellness',
      icon: <Dumbbell className="w-6 h-6" />,
      color: 'from-blue-500 to-[#053d5e]',
      solutions: [
        "Member management",
        "Class scheduling",
        "Basic booking system",
        "Equipment tracking",
        "Progress tracking",
        "Simple communication tools"
      ]
    },
    {
      id: 'corporate',
      name: 'Corporate & Enterprise',
      icon: <Building className="w-6 h-6" />,
      color: 'from-indigo-500 to-indigo-600',
      solutions: [
        "Basic HR tools",
        "Simple financial tracking",
        "Project management",
        "Document sharing",
        "Basic reporting",
        "Team communication"
      ]
    },
    {
      id: 'agency',
      name: 'Digital Agencies',
      icon: <Briefcase className="w-6 h-6" />,
      color: 'from-pink-500 to-pink-600',
      solutions: [
        "Client management",
        "Time tracking",
        "Basic project tools",
        "Team collaboration",
        "Simple invoicing",
        "Basic reporting"
      ]
    },
    {
      id: 'service',
      name: 'Service Businesses',
      icon: <Globe className="w-6 h-6" />,
      color: 'from-cyan-500 to-cyan-600',
      solutions: [
        "Appointment scheduling",
        "Customer management",
        "Service tracking",
        "Basic inventory",
        "Technician scheduling",
        "Feedback collection"
      ]
    }
  ];


  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-500 to-[#053d5e] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <Button 
              variant="outline" 
              className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-blue-600 mr-4 transition-all duration-300"
              onClick={() => router.push('/')}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">
              Business Automation
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
                Solutions
              </span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Explore our automation features and industry solutions designed to help streamline your business operations.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Core Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-gray-900 mb-4">
              Core Features
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential automation capabilities to help streamline your business processes
            </motion.p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {coreFeatures.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                      <div className="text-white">
                        {feature.icon}
                      </div>
                    </div>
                    <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {feature.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-gray-900 mb-4">
              Additional Features
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
              Extra capabilities to enhance your business automation experience
            </motion.p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {advancedFeatures.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-12 h-12 mx-auto rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mb-3`}>
                      <div className="text-white">
                        {feature.icon}
                      </div>
                    </div>
                    <CardTitle className="text-lg text-gray-900">{feature.title}</CardTitle>
                    <CardDescription className="text-gray-600 text-sm">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {feature.details.slice(0, 3).map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-xs">{detail}</span>
                        </div>
                      ))}
                      {feature.details.length > 3 && (
                        <div className="text-xs text-blue-600 font-medium mt-2">
                          +{feature.details.length - 3} more features
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-gray-900 mb-4">
              Industry Solutions
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
              Automation solutions tailored for different business types and industries
            </motion.p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {industries.map((industry, index) => (
              <motion.div key={industry.id} variants={itemVariants}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${industry.color} flex items-center justify-center mb-4`}>
                      <div className="text-white text-xl">
                        {industry.icon}
                      </div>
                    </div>
                    <CardTitle className="text-xl text-gray-900">{industry.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {industry.solutions.map((solution, solutionIndex) => (
                        <div key={solutionIndex} className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{solution}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-500 to-[#053d5e]">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8"
          >
            <h2 className="text-4xl lg:text-5xl font-bold">
              Interested in Learning More?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              We're a new startup working to build practical automation solutions for businesses like yours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4 rounded-full"
                onClick={() => router.push('/contact')}
              >
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-blue-600 text-lg px-8 py-4 rounded-full transition-all duration-300"
                onClick={() => window.location.href = 'tel:+916351324531'}
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}