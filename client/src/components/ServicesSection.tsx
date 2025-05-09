import React from 'react';
import { TrafficCone, HardHat, Zap, Wrench, Leaf } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, image }) => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const y = contactSection.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      <div className="h-48 bg-[#1A1A1A] overflow-hidden relative">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6 relative">
        <div className="w-16 h-16 rounded-full bg-[#F37022] flex items-center justify-center -mt-14 mb-4 border-4 border-white shadow-md z-10 relative">
          {icon}
        </div>
        <h3 className="text-xl font-bold font-montserrat mb-2">{title}</h3>
        <p className="mb-4">{description}</p>
        <button 
          onClick={scrollToContact}
          className="text-[#F37022] font-medium hover:underline flex items-center"
        >
          Learn More <span className="ml-2">→</span>
        </button>
      </div>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Civil Works",
      description: "Comprehensive civil engineering solutions for infrastructure development and maintenance.",
      icon: <TrafficCone className="h-6 w-6 text-white" />,
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Construction",
      description: "Full-service construction capabilities from planning to execution with quality craftsmanship.",
      icon: <HardHat className="h-6 w-6 text-white" />,
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Electrical Works",
      description: "Professional electrical installation, maintenance, and repair services for all your needs.",
      icon: <Zap className="h-6 w-6 text-white" />,
      image: "https://images.unsplash.com/photo-1564182842519-8a3b2af3e228?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Building Maintenance",
      description: "Comprehensive maintenance and upgrade solutions to keep your facilities in optimal condition.",
      icon: <Wrench className="h-6 w-6 text-white" />,
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Vegetation Management",
      description: "Expert landscape and vegetation services to enhance and maintain your property's exterior.",
      icon: <Leaf className="h-6 w-6 text-white" />,
      image: "https://images.unsplash.com/photo-1605117882932-f9e32b03fea9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-[#D9D9D9] bg-opacity-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">Our <span className="text-[#F37022]">Services</span></h2>
          <p className="max-w-3xl mx-auto text-lg">Comprehensive turnkey solutions delivered with hands-on expertise and attention to detail.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
