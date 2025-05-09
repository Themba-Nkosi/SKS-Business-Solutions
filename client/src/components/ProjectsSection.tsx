import React from 'react';
import { Building, Droplet, TrafficCone, Zap, Umbrella, Leaf } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-[#D9D9D9] bg-opacity-20 p-4 rounded-lg flex items-start">
      <div className="mr-3 bg-[#F37022] rounded-full p-2 text-white mt-1 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h4 className="font-bold mb-1">{title}</h4>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "General Building Construction",
      description: "Complete construction services for commercial and industrial facilities.",
      icon: <Building className="h-4 w-4" />
    },
    {
      title: "Plumbing Maintenance",
      description: "Expert plumbing solutions for residential and commercial properties.",
      icon: <Droplet className="h-4 w-4" />
    },
    {
      title: "Civil Maintenance",
      description: "Infrastructure repair and maintenance services.",
      icon: <TrafficCone className="h-4 w-4" />
    },
    {
      title: "Electrical Maintenance",
      description: "Comprehensive electrical systems maintenance and installation.",
      icon: <Zap className="h-4 w-4" />
    },
    {
      title: "Waterproofing, Fencing, Paving",
      description: "Specialized services for property enhancement and protection.",
      icon: <Umbrella className="h-4 w-4" />
    },
    {
      title: "Horticulture & Vegetation",
      description: "Professional landscaping and vegetation management.",
      icon: <Leaf className="h-4 w-4" />
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">Project <span className="text-[#F37022]">Experience</span></h2>
          <p className="max-w-3xl mx-auto text-lg">Over 33 projects completed worth R30M+ across various sectors.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
              alt="Project Experience" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-montserrat mb-6">Our Completed Projects Include:</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((project, index) => (
                <ProjectCard 
                  key={index}
                  title={project.title}
                  description={project.description}
                  icon={project.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
