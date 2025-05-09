import React from 'react';

interface DiagonalBannerProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  bottomContent?: React.ReactNode; // Added option for bottom content
}

const DiagonalBanner: React.FC<DiagonalBannerProps> = ({ 
  title, 
  subtitle, 
  children,
  bottomContent
}) => {
  return (
    <section className="diagonal-banner-container">
      {/* Top charcoal banner with diagonal bottom edge */}
      <div className="diagonal-banner-top scaffold-pattern">
        <div className="container mx-auto px-4 py-16 md:py-24 text-white">
          {title && (
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#F37022]">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-2xl font-light">
              {subtitle}
            </p>
          )}
          {children && (
            <div className="max-w-3xl">
              {children}
            </div>
          )}
        </div>
      </div>
      
      {/* Bottom orange-and-dark striped section */}
      <div className="diagonal-banner-bottom">
        <div className="container mx-auto px-4 py-8 text-white">
          {bottomContent}
        </div>
      </div>
    </section>
  );
};

export default DiagonalBanner;