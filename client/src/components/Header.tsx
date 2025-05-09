import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import sksIcon from '../assets/sksicon.png';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  // Add scroll event listener to detect when the user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    closeMenu();
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed w-full bg-[#303030] scaffold-pattern z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <a className="focus:outline-none flex items-center">
              <img 
                src={sksIcon} 
                alt="SKS Business Solutions" 
                className="h-12 w-auto" 
              />
              <span className="ml-3 text-[#F37022] font-bold text-xl font-montserrat">SKS Business Solutions</span>
            </a>
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <div className="block lg:hidden">
          <Button 
            variant="outline"
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="border-[#F37022] text-[#F37022] hover:bg-[#F37022] hover:text-white"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
        
        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium font-montserrat">
          <button onClick={() => scrollToSection('home')} className="text-[#F37022] hover:text-white transition-colors">Home</button>
          <button onClick={() => scrollToSection('about')} className="text-[#F37022] hover:text-white transition-colors">About Us</button>
          <button onClick={() => scrollToSection('services')} className="text-[#F37022] hover:text-white transition-colors">Our Services</button>
          <button onClick={() => scrollToSection('projects')} className="text-[#F37022] hover:text-white transition-colors">Projects</button>
          <button onClick={() => scrollToSection('impact')} className="text-[#F37022] hover:text-white transition-colors">Our Impact</button>
          <button onClick={() => scrollToSection('clients')} className="text-[#F37022] hover:text-white transition-colors">Key Clients</button>
          <Button onClick={() => scrollToSection('contact')} className="bg-[#F37022] hover:bg-[#F37022]/90 text-white">
            Contact Us
          </Button>
        </nav>
      </div>
      
      {/* Mobile navigation menu */}
      <div className={`lg:hidden bg-[#303030] scaffold-pattern w-full shadow-md ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto px-4 py-3">
          <nav className="flex flex-col space-y-3 font-montserrat text-sm">
            <button onClick={() => scrollToSection('home')} className="py-2 text-[#F37022] hover:text-white transition-colors text-left">Home</button>
            <button onClick={() => scrollToSection('about')} className="py-2 text-[#F37022] hover:text-white transition-colors text-left">About Us</button>
            <button onClick={() => scrollToSection('services')} className="py-2 text-[#F37022] hover:text-white transition-colors text-left">Our Services</button>
            <button onClick={() => scrollToSection('projects')} className="py-2 text-[#F37022] hover:text-white transition-colors text-left">Projects</button>
            <button onClick={() => scrollToSection('impact')} className="py-2 text-[#F37022] hover:text-white transition-colors text-left">Our Impact</button>
            <button onClick={() => scrollToSection('clients')} className="py-2 text-[#F37022] hover:text-white transition-colors text-left">Key Clients</button>
            <Button onClick={() => scrollToSection('contact')} className="py-2 bg-[#F37022] hover:bg-[#F37022]/90 text-white w-full">
              Contact Us
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
