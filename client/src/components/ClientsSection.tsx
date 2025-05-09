import React, { useEffect, useRef } from 'react';

interface ClientLogoProps {
  name: string;
}

const ClientLogo: React.FC<ClientLogoProps> = ({ name }) => {
  return (
    <div className="flex-shrink-0 text-center">
      <div className="bg-white p-8 rounded-lg shadow-md min-w-[200px] h-24 flex items-center justify-center">
        <span className="text-xl font-bold text-[#1A1A1A] opacity-70">{name}</span>
      </div>
    </div>
  );
};

const ClientsSection: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!sliderRef.current) return;
    
    // Clone the items for infinite scroll effect
    const sliderTrack = sliderRef.current;
    const items = Array.from(sliderTrack.children);
    
    items.forEach(item => {
      const clone = item.cloneNode(true);
      sliderTrack.appendChild(clone);
    });
  }, []);
  
  const clients = [
    "AfriSam", "Eskom", "Telkom", "Prasa", "City of Joburg", "Growthpoint"
  ];

  return (
    <section id="clients" className="py-16 md:py-24 bg-[#D9D9D9] bg-opacity-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">Key <span className="text-[#F37022]">Clients</span></h2>
          <p className="max-w-3xl mx-auto text-lg">Trusted by leading organizations across South Africa.</p>
        </div>
        
        <div className="client-slider relative overflow-hidden py-10">
          <div ref={sliderRef} className="flex space-x-16 items-center client-slider-track">
            {clients.map((client, index) => (
              <ClientLogo key={index} name={client} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
