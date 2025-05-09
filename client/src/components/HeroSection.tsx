import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80')",
          filter: "brightness(0.6)"
        }}
      />
      
      <div className="absolute inset-0 z-0 diagonal-box"></div>
      <div className="absolute inset-0 z-0 diagonal-stripe"></div>
      <div className="absolute inset-0 z-0 scaffold-pattern"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold font-montserrat mb-6 animate-fade-in">
            Build. Grow. Inspire.
          </h1>
          <p className="text-lg md:text-xl mb-10 animate-fade-in-delay-300">
            SKS Business Solutions delivers turnkey construction and maintenance services with a commitment to excellence and community impact.
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 animate-fade-in-delay-600">
            <Button 
              onClick={() => scrollToSection('services')}
              className="px-6 py-3 bg-[#F37022] hover:bg-[#F37022]/90 text-white"
            >
              Explore Services
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="px-6 py-3 bg-white text-[#1A1A1A] hover:bg-white/90"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
