import React from 'react';

const FounderSection: React.FC = () => {
  return (
    <section id="founder" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">Our <span className="text-[#F37022]">Story</span></h2>
          <p className="max-w-3xl mx-auto text-lg">The vision and dedication behind SKS Business Solutions.</p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-[#D9D9D9] bg-opacity-10 p-8 md:p-12 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            <div className="mb-6 md:mb-0 md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80" 
                alt="SKS Founder" 
                className="rounded-full w-48 h-48 object-cover mx-auto shadow-lg border-4 border-white"
              />
            </div>
            
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold font-montserrat mb-4">A Story of Resilience</h3>
              <p className="text-lg mb-6 italic">
                "Business founded by a person living with disability who built the business with purpose, resilience, and commitment."
              </p>
              <p className="mb-6">
                Against all odds, our founder established SKS Business Solutions with a vision to create not just a construction company, but a vehicle for positive change in communities across South Africa. This commitment to purpose-driven business has guided our growth from day one.
              </p>
              <p className="font-bold text-[#F37022]">
                Our legacy continues as we build, grow, and inspire in every project we undertake.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
