import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, X, Github, ExternalLink as ExternalLinkIcon } from "lucide-react";

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      title: "Movieex",
      type: "Online Store",
      description: "Movieex is an online store specializing in selling movies and TV series, offering a wide range of classic and contemporary titles in high quality. It allows customers to easily browse and purchase their favorite content, with secure payment options and reliable delivery service. With its simple interface and convenient design, Movieex provides a seamless shopping experience for movie and TV fans.",
      tech: ["Flutter", "App Store", "Google Play"],
      image: "/image.png",
      demoUrl: "https://movieex-demo.com",
      githubUrl: "https://github.com/samalync/movieex",
      features: ["User Authentication", "Payment Integration", "Search & Filter", "Reviews & Ratings"]
    },
    {
      title: "Gangzol",
      type: "Online Clothing Store", 
      description: "Gangzol is an online clothing store specializing in high-quality, affordable fashion. It offers customers in Sudan a seamless online shopping experience with secure payment options and reliable delivery. With its user-friendly design and easy-to-use interface, Gangzol helps users explore the latest fashion trends and purchase products with ease.",
      tech: ["Flutter", "App Store", "Google Play"],
      image: "/public/image copy.png",
      demoUrl: "https://gangzol-demo.com",
      githubUrl: "https://github.com/samalync/gangzol",
      features: ["Product Catalog", "Shopping Cart", "Order Tracking", "Size Guide"]
    }
  ];

  const handleViewProject = (project: any) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of successful projects that showcase our expertise in mobile development, web applications, and graphic design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 rounded-2xl"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`
              }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 flex items-center justify-center overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
                />
                {/* Removed icon */}
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-4 py-2 text-sm font-medium bg-accent/20 text-accent rounded-full">
                    {project.type}
                  </span>
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-2 text-xs bg-muted rounded-xl text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 transform group-hover:scale-105 rounded-xl"
                  onClick={() => handleViewProject(project)}
                >
                  View Details
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
        
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-background rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Modal Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{selectedProject.title}</h3>
                  <p className="text-muted-foreground">{selectedProject.type}</p>
                </div>
                <button
                  onClick={closeModal}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Project Image */}
              <div className="mb-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>

              {/* Project Description */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-foreground mb-3">About This Project</h4>
                <p className="text-muted-foreground leading-relaxed">{selectedProject.description}</p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-foreground mb-3">Key Features</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedProject.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-foreground mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => window.open(selectedProject.demoUrl, '_blank')}
                  className="flex-1"
                >
                  <ExternalLinkIcon className="mr-2 h-4 w-4" />
                  View Live Demo
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                  className="flex-1"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View Source Code
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;