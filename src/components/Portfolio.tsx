import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { X } from "lucide-react";

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects = [
    {
      title: "AI Voice Healthcare Assistant",
      type: "Healthcare AI Platform",
      description: "AI-powered healthcare platform that provides medical consultation in Kinyarwanda and English. Patients can describe symptoms via voice or text, receive AI medical guidance, and get connected to appropriate doctors through automated SMS notifications.",
      tech: ["Flask", "Python", "Groq API", "Firebase", "Google Translate API", "Pindo.io APIs", "HTML", "CSS", "JavaScript"],
      image: "/AI Voice File/AI Voice.png",
      demoUrl: "https://ai-healthcare-assistant-demo.com",
      githubUrl: "https://github.com/samalync/ai-voice-healthcare",
      features: [
        "Multilingual Support (Kinyarwanda & English)",
        "AI Medical Analysis",
        "Smart Doctor Routing",
        "Voice Processing",
        "Translation Services",
        "Data Logging",
        "13 Medical Specialties",
        "Text & Voice Input"
      ]
    },
    {
      title: "eHub Surveys",
      type: "Location-Based Survey Platform",
      description: "Developed for Zain Telecom Saudi Arabia, eHUB Surveys is a modern application designed for retail stores to collect and analyze customer feedback through customized surveys. It enables store owners to create interactive questionnaires with ease, helping them measure customer satisfaction, understand needs, and improve service quality. With its simple interface and accurate analytics, eHUB Surveys provides a powerful tool to enhance customer experience and support data-driven decision-making.",
      tech: ["Flutter", "Dart"],
      image: "/Ehub image profile.jpeg",
      demoUrl: "https://ehub-surveys-demo.com",
      githubUrl: "https://github.com/samalync/ehub-surveys",
      features: [
        "Store-Based Access: Users can select a store via search or interactive map",
        "Location Verification: Surveys are only accessible when the user is inside the store's geofenced area",
        "Auto-End on Exit: Surveys automatically close if the user leaves the store",
        "Rich Media Responses: Support for attaching photos, videos, or documents depending on question type",
        "Dynamic Surveys: Flexible survey formats tailored for each retail branch"
      ]
    },
    {
      title: "Smart Attendance System",
      type: "Facial Recognition Platform",
      description: "Smart Attendance System is a comprehensive facial recognition-based attendance platform built with Next.js (frontend) and Django REST Framework (backend). It automates attendance tracking using face recognition, ensuring accuracy, security, and reducing manual errors. The system supports real-time recognition, dashboards for students and administrators, and flexible reporting.",
      tech: ["Next.js", "Django REST Framework", "Python", "OpenCV", "SQLite", "Tailwind CSS"],
      image: "/Smart attendance logo.jpg",
      demoUrl: "https://smart-attendance-demo.com",
      githubUrl: "https://github.com/samalync/smart-attendance",
      features: [
        "Real-time face recognition for attendance marking",
        "Student enrollment with face data",
        "Attendance tracking with timestamps",
        "Student & Admin dashboards with statistics",
        "Data export (CSV, JSON)",
        "Responsive web design (desktop and mobile)",
        "API-first architecture with RESTful endpoints",
        "Secure storage using face encodings only (not images)"
      ]
    },
    {
      title: "Movieex",
      type: "Online Store",
      description: "Movieex is an online store specializing in selling movies and TV series, offering a wide range of classic and contemporary titles in high quality. It allows customers to easily browse and purchase their favorite content, with secure payment options and reliable delivery service. With its simple interface and convenient design, Movieex provides a seamless shopping experience for movie and TV fans.",
      tech: ["Flutter", "Dart"],
      image: "/image.png",
      demoUrl: "https://movieex-demo.com",
      githubUrl: "https://github.com/samalync/movieex",
      features: ["User Authentication", "Payment Integration", "Search & Filter", "Reviews & Ratings"]
    }
  ];

  const handleViewProject = (project: any) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
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

        <div className="flex gap-6 overflow-x-auto pb-4 max-w-full mx-auto px-4 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent hover:scrollbar-thumb-primary/30">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 rounded-2xl cursor-pointer flex-shrink-0 w-80"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`
              }}
              onClick={() => handleViewProject(project)}
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

              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
        
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-background rounded-2xl max-w-6xl w-full max-h-[95vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 overflow-y-auto flex-1">
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
                  className="w-3/4 h-80 object-cover rounded-lg mx-auto"
                />
              </div>

              {/* Project Disclaimer */}
              <div className="mb-6 p-4 bg-muted/50 rounded-lg border-l-4 border-primary/20">
                <p className="text-sm text-muted-foreground italic">
                  "This project was completed by one of our team members before the founding of Samalync, and it now forms part of our collective experience"
                </p>
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

              {/* Screenshots - Only for Smart Attendance System */}
              {selectedProject.title === "Smart Attendance System" && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-8">Screenshots</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <img
                      src="/Attendance system screenshots/Screenshot 2025-10-12 192515.png"
                      alt="Smart Attendance Screenshot 1"
                      className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => handleImageClick("/Attendance system screenshots/Screenshot 2025-10-12 192515.png")}
                    />
                    <img
                      src="/Attendance system screenshots/Screenshot 2025-10-12 192724.png"
                      alt="Smart Attendance Screenshot 2"
                      className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => handleImageClick("/Attendance system screenshots/Screenshot 2025-10-12 192724.png")}
                    />
                    <img
                      src="/Attendance system screenshots/Screenshot 2025-10-12 193105.png"
                      alt="Smart Attendance Screenshot 3"
                      className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => handleImageClick("/Attendance system screenshots/Screenshot 2025-10-12 193105.png")}
                    />
                    <img
                      src="/Attendance system screenshots/Screenshot 2025-10-12 193428.png"
                      alt="Smart Attendance Screenshot 4"
                      className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => handleImageClick("/Attendance system screenshots/Screenshot 2025-10-12 193428.png")}
                    />
                  </div>
                </div>
              )}

              {/* Role and Outcome - Only for Movieex */}
              {selectedProject.title === "Movieex" && (
                <div className="mb-6 space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Role</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Mobile Developer – responsible for UI design integration, feature implementation, and app performance optimization.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Outcome</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Delivered a smooth, engaging entertainment experience that simplified content access and boosted user satisfaction.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-8">Screenshots</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <img
                        src="/Screenshots/1.png"
                        alt="Movieex Screenshot 1"
                        className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => handleImageClick("/Screenshots/1.png")}
                      />
                      <img
                        src="/Screenshots/2.png"
                        alt="Movieex Screenshot 2"
                        className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => handleImageClick("/Screenshots/2.png")}
                      />
                      <img
                        src="/Screenshots/3.png"
                        alt="Movieex Screenshot 3"
                        className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => handleImageClick("/Screenshots/3.png")}
                      />
                      <img
                        src="/Screenshots/4.png"
                        alt="Movieex Screenshot 4"
                        className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => handleImageClick("/Screenshots/4.png")}
                      />
                      <img
                        src="/Screenshots/5.png"
                        alt="Movieex Screenshot 5"
                        className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => handleImageClick("/Screenshots/5.png")}
                      />
                      <img
                        src="/Screenshots/6.png"
                        alt="Movieex Screenshot 6"
                        className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => handleImageClick("/Screenshots/6.png")}
                      />
                      <img
                        src="/Screenshots/7.png"
                        alt="Movieex Screenshot 7"
                        className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => handleImageClick("/Screenshots/7.png")}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Special Section - Only for AI Voice Healthcare Assistant */}
              {selectedProject.title === "AI Voice Healthcare Assistant" && (
                <div className="mb-6 space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Problem Solved</h4>
                    <ul className="text-muted-foreground leading-relaxed space-y-1">
                      <li>• Language barriers in healthcare</li>
                      <li>• Limited access to medical specialists</li>
                      <li>• Lack of preliminary medical guidance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Outcome</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Created an accessible telemedicine platform that bridges language barriers, improves medical consultation response times, and enables better healthcare delivery across Rwanda.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-8">Screenshots</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <img
                        src="/AI Voice File/Screen Shot 2025-10-13 at 12.47.54 PM.png"
                        alt="AI Voice Healthcare Assistant Screenshot 1"
                        className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => handleImageClick("/AI Voice File/Screen Shot 2025-10-13 at 12.47.54 PM.png")}
                      />
                      <img
                        src="/AI Voice File/Screen Shot 2025-10-13 at 12.48.21 PM.png"
                        alt="AI Voice Healthcare Assistant Screenshot 2"
                        className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => handleImageClick("/AI Voice File/Screen Shot 2025-10-13 at 12.48.21 PM.png")}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Role and Outcome - Only for eHub Surveys */}
              {selectedProject.title === "eHub Surveys" && (
                <div className="mb-6 space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Role</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Mobile Developer – implemented geolocation features, survey logic, and multimedia submission functionalities.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Outcome</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Delivered a reliable and intelligent survey platform that improved data accuracy and enhanced the feedback collection process for retail businesses.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-8">Screenshots</h4>
                    <div className="flex flex-col md:flex-row gap-4 justify-start items-center">
                      {/* Screenshot Image */}
                      <img
                        src="/ehub screenshot.jpeg"
                        alt="eHub Screenshot"
                        className="w-72 md:w-80 lg:w-80 h-auto rounded-lg shadow-lg cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => handleImageClick("/ehub screenshot.jpeg")}
                      />
                      
                      {/* Video */}
                      <video
                        src="/ehub video.MP4"
                        controls
                        className="w-72 md:w-70 lg:w-80 h-auto rounded-lg shadow-lg object-cover"
                        poster="/ehub screenshot.jpeg"
                        style={{ aspectRatio: '9/16' }}
                      >
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      )}

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={closeImageModal}
        >
          <div 
            className="relative max-w-7xl max-h-[95vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2"
            >
              <X className="h-6 w-6" />
            </button>
            <img
              src={selectedImage}
              alt="Expanded view"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;