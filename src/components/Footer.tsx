import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  MessageCircle, 
  Mail, 
  MapPin, 
  Globe, 
  Code, 
  ShoppingCart, 
  Palette, 
  TrendingUp, 
  Users,
  Lightbulb
} from 'lucide-react';

const Footer = () => {
  const services = [
    { icon: Code, name: 'Web Development', href: '/services/web-development' },
    { icon: Globe, name: 'SaaS Development', href: '/services/saas' },
    { icon: ShoppingCart, name: 'E-commerce', href: '/services/ecommerce' },
    { icon: Palette, name: 'UI/UX & Branding', href: '/services/design' },
    { icon: TrendingUp, name: 'Digital Marketing', href: '/services/marketing' },
    { icon: Users, name: 'Consulting', href: '/services/consulting' },
  ];

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Brand Name */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/logo.png" 
                alt="Lazlle Studio Logo"
                className="w-12 h-12 rounded-lg"
              />
              <span className="text-white font-bold text-xl">Lazlle Studio</span>
            </div>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Full-service 360° digital studio. From idea to execution — we build what the future needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Top Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Top Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link 
                    href={service.href}
                    className="flex items-center space-x-2 text-gray-400 hover:text-blue-500 transition-colors text-sm group"
                  >
                    <service.icon className="w-3 h-3" />
                    <span className="group-hover:underline">{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-gray-400 text-sm">
                <Users className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Founder & CEO</p>
                  <p>Harsh Gohil</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Ahmedabad, India</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4" />
                <span>lazlleandco@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: +91 63513 24531</span>
              </div>
            </div>
            
            {/* WhatsApp CTA Button */}
            <div className="mt-6">
              <Button 
                asChild
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 text-white rounded-2xl w-full transition-all hover:shadow-lg hover:shadow-blue-500/25"
              >
                <a 
                  href="https://wa.me/916351324531?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services%20and%20how%20Lazlle%20%26%20Co%20can%20help%20my%20business" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Chat
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Lazlle Studio. All Rights Reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center space-x-2">
              <span>Founded by Harsh Gohil.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;