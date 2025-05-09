import React from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import ImpactSection from '@/components/ImpactSection';
import FounderSection from '@/components/FounderSection';
import ClientsSection from '@/components/ClientsSection';
import ContactSection from '@/components/ContactSection';
import DiagonalBanner from '@/components/DiagonalBanner';
import { Helmet } from 'react-helmet';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>SKS Business Solutions | Build. Grow. Inspire.</title>
        <meta name="description" content="SKS Business Solutions delivers turnkey construction and maintenance services with a commitment to excellence and community impact." />
      </Helmet>
      <main>
        <HeroSection />
        <div className="mt-16"></div>
        <DiagonalBanner 
          title="Building Excellence" 
          subtitle="Innovative solutions for construction and maintenance"
          bottomContent={
            <div className="flex items-center justify-center">
              <div className="h-1 w-20 bg-white opacity-40 rounded-full"></div>
            </div>
          }
        >
          <p className="text-lg md:text-xl opacity-80">
            Our commitment to quality and integrity drives everything we do.
          </p>
        </DiagonalBanner>
        <AboutSection />
        <div className="diagonal-divider-reverse"></div>
        <ServicesSection />
        <div className="mt-16"></div>
        <DiagonalBanner 
          title="Our Projects" 
          subtitle="Transforming visions into reality through quality craftsmanship"
          bottomContent={
            <div className="flex items-center justify-center">
              <div className="h-1 w-20 bg-white opacity-40 rounded-full"></div>
            </div>
          }
        >
          <p className="text-lg md:text-xl opacity-80">
            Browse our portfolio of completed projects across residential, commercial, and industrial sectors.
          </p>
        </DiagonalBanner>
        <ProjectsSection />
        <div className="diagonal-divider"></div>
        <ImpactSection />
        <div className="diagonal-divider-reverse"></div>
        <FounderSection />
        <div className="diagonal-divider-center"></div>
        <ClientsSection />
        <div className="diagonal-divider"></div>
        <ContactSection />
      </main>
    </>
  );
};

export default Home;
