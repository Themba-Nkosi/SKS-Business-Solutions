import React from 'react';
import { Heart, Handshake, Zap } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">About <span className="text-[#F37022]">SKS</span></h2>
          <p className="max-w-3xl mx-auto text-lg">Our legacy of excellence, family-owned values, and commitment to quality have made us a trusted partner in the construction industry.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
              alt="SKS team meeting" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold font-montserrat mb-4">Our Purpose</h3>
            <p className="text-lg mb-6 italic">"To inspire a more resilient world."</p>
            
            <h3 className="text-2xl font-bold font-montserrat mb-4">Our Legacy</h3>
            <p className="mb-6">
              From humble beginnings, SKS Business Solutions has grown into a trusted name in construction and maintenance services while maintaining our family-owned values and commitment to excellence.
            </p>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-montserrat mb-4">Our Core Values</h3>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-[#F37022] rounded-full p-2 text-white">
                  <Heart className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xl font-bold font-montserrat mb-1">Care</h4>
                  <p>Make Things Better</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-[#F37022] rounded-full p-2 text-white">
                  <Handshake className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xl font-bold font-montserrat mb-1">Honour</h4>
                  <p>Keep Your Word</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-[#F37022] rounded-full p-2 text-white">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xl font-bold font-montserrat mb-1">Impact</h4>
                  <p>Perform in the Best Way</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
