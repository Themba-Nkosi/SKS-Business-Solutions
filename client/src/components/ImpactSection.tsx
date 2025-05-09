import React, { useEffect, useRef } from 'react';
import { GraduationCap, Users, CheckCircle } from 'lucide-react';

const ImpactSection: React.FC = () => {
  const counterRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef<boolean>(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateValue(0, 500, 2000);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  // Animation function for the counter
  const animateValue = (start: number, end: number, duration: number) => {
    let startTimestamp: number | null = null;
    const element = counterRef.current;
    if (!element) return;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      element.textContent = value.toString();
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        element.textContent = end.toString();
      }
    };

    window.requestAnimationFrame(step);
  };

  return (
    <section id="impact" className="py-16 md:py-24 relative diagonal-box scaffold-pattern overflow-visible bg-[#303030] text-white">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">Our <span className="text-white">Impact</span></h2>
          <p className="max-w-3xl mx-auto text-lg">Creating opportunities and building communities through sustainable employment and skills development.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white bg-opacity-10 p-8 rounded-lg text-center transition-transform hover:scale-105">
            <div ref={counterRef} className="text-[#F37022] text-5xl font-bold mb-4">0</div>
            <h3 className="text-xl font-bold font-montserrat mb-2">Jobs Created</h3>
            <p>Providing employment opportunities across South Africa</p>
          </div>
          
          <div className="bg-white bg-opacity-10 p-8 rounded-lg text-center transition-transform hover:scale-105">
            <div className="text-white text-5xl mb-4 flex justify-center">
              <GraduationCap className="text-[#F37022] h-12 w-12" />
            </div>
            <h3 className="text-xl font-bold font-montserrat mb-2">Skills Upliftment</h3>
            <p>Training programs to develop technical and professional skills</p>
          </div>
          
          <div className="bg-white bg-opacity-10 p-8 rounded-lg text-center transition-transform hover:scale-105">
            <div className="text-white text-5xl mb-4 flex justify-center">
              <Users className="text-[#F37022] h-12 w-12" />
            </div>
            <h3 className="text-xl font-bold font-montserrat mb-2">Inclusive Workforce</h3>
            <p>Prioritizing women, youth, and persons with disabilities</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-bold font-montserrat mb-4">Township & Rural Revitalization</h3>
            <p className="mb-6 text-lg">
              "We believe in building local economies by employing locals, sourcing from local hardware stores, and subcontracting local businesses."
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mr-3 text-[#F37022]">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <p>Creating sustainable employment in underdeveloped areas</p>
              </div>
              <div className="flex items-start">
                <div className="mr-3 text-[#F37022]">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <p>Supporting small businesses within local communities</p>
              </div>
              <div className="flex items-start">
                <div className="mr-3 text-[#F37022]">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <p>Developing skills that remain in the community</p>
              </div>
            </div>
          </div>
          
          <div>
            <img 
              src="https://images.unsplash.com/photo-1512187849-463fdb898f21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
              alt="Community Impact" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
