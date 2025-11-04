'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'SaaS Development', href: '/services/saas' },
    { name: 'E-commerce', href: '/services/ecommerce' },
    { name: 'UI/UX & Branding', href: '/services/design' },
    { name: 'Digital Marketing', href: '/services/marketing' },
    { name: 'Consulting', href: '/services/consulting' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0E0E0E]/95 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img 
              src="/logo.png" 
              alt="Lazlle Studio Logo"
              className="w-12 h-12 rounded-lg"
            />
            <span className="text-white font-bold text-xl">Lazlle Studio</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-blue-500 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-blue-500 transition-colors">
              About
            </Link>
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-white hover:text-blue-500 transition-colors flex items-center space-x-1 outline-none">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#1a1a1a] border border-white/10">
                {services.map((service) => (
                  <DropdownMenuItem key={service.href} asChild>
                    <Link 
                      href={service.href}
                      className="text-white hover:text-blue-500 hover:bg-white/5 transition-colors w-full"
                    >
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/pricing" className="text-white hover:text-blue-500 transition-colors">
              Pricing
            </Link>
            <Link href="/contact" className="text-white hover:text-blue-500 transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 text-white rounded-2xl px-6 py-2 transition-all hover:shadow-lg hover:shadow-blue-500/25"
              onClick={() => {
                const element = document.getElementById('contact-form');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#0E0E0E]/95 backdrop-blur-md border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                href="/" 
                className="block px-3 py-2 text-white hover:text-blue-500 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="block px-3 py-2 text-white hover:text-blue-500 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <div className="px-3 py-2 text-white">
                <div className="font-medium mb-2">Services</div>
                <div className="pl-4 space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block py-1 text-sm text-gray-300 hover:text-blue-500 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link 
                href="/pricing" 
                className="block px-3 py-2 text-white hover:text-blue-500 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                href="/contact" 
                className="block px-3 py-2 text-white hover:text-blue-500 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="px-3 py-2">
                <Button 
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 text-white rounded-2xl px-6 py-2 w-full transition-all hover:shadow-lg hover:shadow-blue-500/25"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    const element = document.getElementById('contact-form');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;