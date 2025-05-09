import React from 'react';
import { Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';
import verticalLogo from '../assets/VERTICAL ORANGE.png';

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#303030] scaffold-pattern text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <img 
                src={verticalLogo} 
                alt="SKS Business Solutions" 
                className="h-32 w-auto" 
              />
            </div>
            <p className="mb-4">Build. Grow. Inspire.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold font-montserrat mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="hover:text-[#F37022] transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="hover:text-[#F37022] transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-[#F37022] transition-colors text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="hover:text-[#F37022] transition-colors text-left"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('impact')}
                  className="hover:text-[#F37022] transition-colors text-left"
                >
                  Our Impact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold font-montserrat mb-4">Our Office</h3>
            <ul className="space-y-2 text-sm">
              <li>1163 Frans Venter Street, Eternia Avenue, Roodepoort 1709</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold font-montserrat mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>011 674 0922</li>
              <li>info@sksbusiness.co.za</li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white hover:text-[#F37022] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-[#F37022] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-[#F37022] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-[#F37022] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white border-opacity-20 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-70">© {new Date().getFullYear()} SKS Business Solutions. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm opacity-70">
            <a href="#" className="hover:text-[#F37022] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#F37022] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
