import React from 'react';
import presentation1 from '../assets/branding/2.LOGO PRESENTATION._Page_1.jpg';
import presentation3 from '../assets/branding/2.LOGO PRESENTATION._Page_3.jpg';
import presentation4 from '../assets/branding/2.LOGO PRESENTATION._Page_4.jpg';
import presentation5 from '../assets/branding/2.LOGO PRESENTATION._Page_5.jpg';

const LogoMeaningSection: React.FC = () => {
  return (
    <section id="brand" className="py-16 md:py-24 bg-[#D9D9D9] bg-opacity-10 scaffold-pattern">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">Our <span className="text-[#F37022]">Brand Story</span></h2>
          <p className="max-w-3xl mx-auto text-lg">
            The inspiration behind our logo and the values it represents
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div className="bg-[#1A1A1A] rounded-lg overflow-hidden shadow-lg">
            <img 
              src={presentation3} 
              alt="Logo Inspiration" 
              className="w-full h-auto"
            />
          </div>
          
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold font-montserrat mb-6">Brand Inspiration</h3>
            <p className="mb-6 text-lg">
              SKS Business Solutions has successfully managed numerous construction, civil engineering, vegetation management and general building maintenance projects over time.
            </p>
            <p className="mb-6">
              The idea was to construct the logo from the elements of scaffolding. The "S" could be formed from the diagonal cross bars of the scaffold, symbolizing the construction expertise and structural stability that defines our brand.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12 lg:mt-24">
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <h3 className="text-2xl font-bold font-montserrat mb-6">Logo Construction</h3>
            <p className="mb-6">
              Our logo combines the essential elements of scaffolding with the letter "S", creating a powerful symbol that represents our core business. This visual identifier showcases our expertise in construction and structural solutions.
            </p>
            <p className="mb-6">
              The diagonal lines represent stability and progress, while the orange color conveys energy, enthusiasm, and action - all qualities that drive our service delivery.
            </p>
          </div>
          
          <div className="bg-[#1A1A1A] rounded-lg overflow-hidden shadow-lg order-1 lg:order-2">
            <img 
              src={presentation4} 
              alt="Logo Construction" 
              className="w-full h-auto"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:mt-24">
          <div className="bg-[#1A1A1A] rounded-lg overflow-hidden shadow-lg">
            <img 
              src={presentation5} 
              alt="Logo Meaning" 
              className="w-full h-auto"
            />
          </div>
          
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold font-montserrat mb-6">Logo Meaning</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-[#F37022] mb-2">Stability & Progress</h4>
                <p>The structural elements of our logo represent our commitment to creating stable foundations while always moving forward.</p>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-[#F37022] mb-2">Growth & Sustainability</h4>
                <p>The diagonal elements symbolize sustainable growth - our approach to business that ensures long-term success for our clients and communities.</p>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-[#F37022] mb-2">Acceleration & Elevation</h4>
                <p>The upward angles in our logo represent our drive to elevate standards and accelerate progress in every project we undertake.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoMeaningSection;