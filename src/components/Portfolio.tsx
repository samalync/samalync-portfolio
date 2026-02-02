import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [currentScreenshots, setCurrentScreenshots] = useState<string[]>([]);

  const projects = [
    {
      title: "Ozone Restaurant & Cafe",
      type: "Restaurant Website & Digital Menu",
      description: "A modern, responsive website for Ozone Restaurant & Cafe featuring an interactive digital menu, online reservations, and seamless customer experience. The platform showcases the restaurant's diverse culinary offerings, ambiance, and services while providing customers with easy access to menus, location details, and reservation capabilities.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
      image: "/ozone.png",
      demoUrl: "https://ozone-restaurant-demo.com",
      githubUrl: "https://github.com/samalync/ozone-restaurant",
      screenshots: ["/ozone/1.png", "/ozone/2.png", "/ozone/3.png", "/ozone/4.png", "/ozone/5.png", "/ozone/6.png", "/ozone/7.png", "/ozone/8.png", "/ozone/9.png", "/ozone/10.png"],
      features: [
        "Interactive Digital Menu",
        "Online Reservation System",
        "Mobile-Responsive Design",
        "Photo Gallery",
        "Location & Contact Information",
        "Social Media Integration",
        "Customer Reviews & Ratings",
        "Multi-language Support"
      ]
    },
    {
      title: "Viewesta",
      type: "African Streaming Platform",
      description: "Viewesta is a cutting-edge streaming platform designed specifically for African audiences, offering a diverse range of content including movies, TV shows, documentaries, and original African productions. The platform features adaptive streaming technology, multi-language subtitles, offline viewing capabilities, and personalized content recommendations. Built to serve the unique needs of African viewers, Viewesta provides high-quality entertainment with affordable pricing.",
      tech: ["React", "Node.js", "MongoDB", "AWS S3", "FFmpeg", "Stripe"],
      image: "/viewesta-logo.png",
      demoUrl: "https://viewesta-demo.com",
      githubUrl: "https://github.com/samalync/viewesta",
      screenshots: [
        "/viewesta-mobile/1.png", "/viewesta-mobile/2.png", "/viewesta-mobile/3.png", "/viewesta-mobile/4.png", "/viewesta-mobile/5.png", "/viewesta-mobile/6.png", "/viewesta-mobile/7.png", "/viewesta-mobile/8.png", "/viewesta-mobile/9.png", "/viewesta-mobile/10.png", "/viewesta-mobile/11.png", "/viewesta-mobile/12.png",
        "/viewesta-admin-dashboard/1.png", "/viewesta-admin-dashboard/2.png", "/viewesta-admin-dashboard/3.png", "/viewesta-admin-dashboard/4.png", "/viewesta-admin-dashboard/5.png", "/viewesta-admin-dashboard/6.png", "/viewesta-admin-dashboard/7.png"
      ],
      features: [
        "Adaptive Streaming Technology",
        "Multi-language Subtitles",
        "Offline Viewing",
        "Personalized Recommendations",
        "African Content Focus",
        "Mobile-First Design",
        "Secure Payment Processing",
        "High-quality Video Playback"
      ]
    },
    {
      title: "Sudan Mart",
      type: "On-demand Delivery & Last-mile Logistics",
      description: "Sudan Mart is a comprehensive on-demand delivery and last-mile logistics platform that connects customers with local businesses for instant delivery services. The platform offers real-time tracking, multiple payment options, and integrates with local vendors across Sudan. With advanced route optimization and driver management systems, Sudan Mart ensures fast, reliable delivery services while supporting local economies.",
      tech: ["React Native", "Node.js", "PostgreSQL", "Google Maps API", "Stripe", "Socket.io"],
      image: "/sudan-mart.png",
      demoUrl: "https://sudan-mart-demo.com",
      githubUrl: "https://github.com/samalync/sudan-mart",
      screenshots: ["/sudan-mart-brand-identity/0.png", "/sudan-mart-brand-identity/1.png", "/sudan-mart-brand-identity/2.png", "/sudan-mart-brand-identity/3.png", "/sudan-mart-brand-identity/4.png", "/sudan-mart-brand-identity/5.png", "/sudan-mart-brand-identity/6.png"],
      features: [
        "Real-time Order Tracking",
        "Route Optimization",
        "Driver Management System",
        "Multiple Payment Options",
        "Local Vendor Integration",
        "Instant Delivery Services",
        "Customer Ratings & Reviews",
        "Mobile App Interface"
      ]
    },
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
    setCurrentScreenshots([]);
    setCurrentImageIndex(0);
  };

  const handleImageClick = (imageSrc: string, screenshots?: string[]) => {
    setSelectedImage(imageSrc);
    if (screenshots && screenshots.length > 0) {
      setCurrentScreenshots(screenshots);
      setCurrentImageIndex(screenshots.indexOf(imageSrc));
    } else {
      setCurrentScreenshots([imageSrc]);
      setCurrentImageIndex(0);
    }
  };

  const goToPreviousImage = () => {
    if (currentScreenshots.length > 0) {
      const newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : currentScreenshots.length - 1;
      setCurrentImageIndex(newIndex);
      setSelectedImage(currentScreenshots[newIndex]);
    }
  };

  const goToNextImage = () => {
    if (currentScreenshots.length > 0) {
      const newIndex = currentImageIndex < currentScreenshots.length - 1 ? currentImageIndex + 1 : 0;
      setCurrentImageIndex(newIndex);
      setSelectedImage(currentScreenshots[newIndex]);
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full border border-purple-200/20 backdrop-blur-sm">
            <span className="text-sm font-medium text-purple-600 tracking-wide">OUR WORK</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-cyan-800 bg-clip-text text-transparent leading-tight mb-4 pb-2">
            Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Explore our portfolio of successful projects that showcase our expertise in mobile development, web applications, and graphic design.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-6 md:overflow-x-auto pb-4 max-w-full mx-auto px-4 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent hover:scrollbar-thumb-primary/30">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden bg-slate-100 border border-slate-300 card-shadow hover:card-shadow-hover transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 rounded-2xl cursor-pointer md:flex-shrink-0 w-full md:w-96"
              onClick={() => handleViewProject(project)}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 flex items-center justify-center overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`absolute inset-0 w-full h-full ${project.title === "Ozone Restaurant & Cafe" ? "object-contain" : "object-cover"} opacity-70 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110`}
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
                  className={`w-3/4 h-80 ${selectedProject.title === "Ozone Restaurant & Cafe" ? "object-contain" : "object-cover"} rounded-lg mx-auto`}
                />
              </div>

              {/* Project Disclaimer */}
              <div className="mb-6 p-4 bg-muted/50 rounded-lg border-l-4 border-primary/20">
                <p className="text-sm text-muted-foreground italic">
                  "This project was completed by one of our company members before the founding of Samalync, and it now forms part of our collective experience"
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
                        onClick={() => handleImageClick("/Screenshots/1.png", ["/Screenshots/1.png", "/Screenshots/2.png", "/Screenshots/3.png", "/Screenshots/4.png", "/Screenshots/5.png", "/Screenshots/6.png", "/Screenshots/7.png"])}
                      />
                      <img
                        src="/Screenshots/2.png"
                        alt="Movieex Screenshot 2"
                        className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => handleImageClick("/Screenshots/2.png", ["/Screenshots/1.png", "/Screenshots/2.png", "/Screenshots/3.png", "/Screenshots/4.png", "/Screenshots/5.png", "/Screenshots/6.png", "/Screenshots/7.png"])}
                      />
                      <img
                        src="/Screenshots/3.png"
                        alt="Movieex Screenshot 3"
                        className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => handleImageClick("/Screenshots/3.png", ["/Screenshots/1.png", "/Screenshots/2.png", "/Screenshots/3.png", "/Screenshots/4.png", "/Screenshots/5.png", "/Screenshots/6.png", "/Screenshots/7.png"])}
                      />
                      <img
                        src="/Screenshots/4.png"
                        alt="Movieex Screenshot 4"
                        className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => handleImageClick("/Screenshots/4.png", ["/Screenshots/1.png", "/Screenshots/2.png", "/Screenshots/3.png", "/Screenshots/4.png", "/Screenshots/5.png", "/Screenshots/6.png", "/Screenshots/7.png"])}
                      />
                      <img
                        src="/Screenshots/5.png"
                        alt="Movieex Screenshot 5"
                        className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => handleImageClick("/Screenshots/5.png", ["/Screenshots/1.png", "/Screenshots/2.png", "/Screenshots/3.png", "/Screenshots/4.png", "/Screenshots/5.png", "/Screenshots/6.png", "/Screenshots/7.png"])}
                      />
                      <img
                        src="/Screenshots/6.png"
                        alt="Movieex Screenshot 6"
                        className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => handleImageClick("/Screenshots/6.png", ["/Screenshots/1.png", "/Screenshots/2.png", "/Screenshots/3.png", "/Screenshots/4.png", "/Screenshots/5.png", "/Screenshots/6.png", "/Screenshots/7.png"])}
                      />
                      <img
                        src="/Screenshots/7.png"
                        alt="Movieex Screenshot 7"
                        className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => handleImageClick("/Screenshots/7.png", ["/Screenshots/1.png", "/Screenshots/2.png", "/Screenshots/3.png", "/Screenshots/4.png", "/Screenshots/5.png", "/Screenshots/6.png", "/Screenshots/7.png"])}
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
                        onClick={() => handleImageClick("/AI Voice File/Screen Shot 2025-10-13 at 12.47.54 PM.png", ["/AI Voice File/Screen Shot 2025-10-13 at 12.47.54 PM.png", "/AI Voice File/Screen Shot 2025-10-13 at 12.48.21 PM.png"])}
                      />
                      <img
                        src="/AI Voice File/Screen Shot 2025-10-13 at 12.48.21 PM.png"
                        alt="AI Voice Healthcare Assistant Screenshot 2"
                        className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => handleImageClick("/AI Voice File/Screen Shot 2025-10-13 at 12.48.21 PM.png", ["/AI Voice File/Screen Shot 2025-10-13 at 12.47.54 PM.png", "/AI Voice File/Screen Shot 2025-10-13 at 12.48.21 PM.png"])}
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

              {/* Screenshots for Ozone Restaurant */}
              {selectedProject.title === "Ozone Restaurant & Cafe" && selectedProject.screenshots && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-8">Screenshots</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {selectedProject.screenshots.map((screenshot: string, index: number) => (
                      <img
                        key={index}
                        src={screenshot}
                        alt={`${selectedProject.title} Screenshot ${index + 1}`}
                        className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => handleImageClick(screenshot, selectedProject.screenshots)}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Screenshots for Viewesta */}
              {selectedProject.title === "Viewesta" && selectedProject.screenshots && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-8">Screenshots</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {selectedProject.screenshots.map((screenshot: string, index: number) => (
                      <img
                        key={index}
                        src={screenshot}
                        alt={`${selectedProject.title} Screenshot ${index + 1}`}
                        className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => handleImageClick(screenshot, selectedProject.screenshots)}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Screenshots for Sudan Mart */}
              {selectedProject.title === "Sudan Mart" && selectedProject.screenshots && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-8">Screenshots</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {selectedProject.screenshots.map((screenshot: string, index: number) => (
                      <img
                        key={index}
                        src={screenshot}
                        alt={`${selectedProject.title} Screenshot ${index + 1}`}
                        className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => handleImageClick(screenshot, selectedProject.screenshots)}
                      />
                    ))}
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
            
            {/* Navigation buttons - only show if there are multiple screenshots */}
            {currentScreenshots.length > 1 && (
              <>
                <button
                  onClick={goToPreviousImage}
                  className="absolute left-4 z-10 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-3"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-8 w-8" />
                </button>
                <button
                  onClick={goToNextImage}
                  className="absolute right-4 z-10 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-3"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-8 w-8" />
                </button>
                
                {/* Image counter */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
                  {currentImageIndex + 1} / {currentScreenshots.length}
                </div>
              </>
            )}
            
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
