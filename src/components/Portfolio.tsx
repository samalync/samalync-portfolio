import React, { memo, useCallback, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { Card, CardContent } from "@/components/ui/card";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/i18n";

type ProjectCategory = "core" | "website" | "brand" | "team";

interface Project {
  title: string;
  type: string;
  description: string;
  tech: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
  screenshots?: string[];
  features: string[];
  category: ProjectCategory;
}

const PROJECT_IMAGE_CONTAIN_TITLES = new Set([
  "Ozone Restaurant & Cafe",
  "Khartoum Interfilm",
  "Mondo Wooden Utensils",
  "Mobily Saudi Telecom",
]);

// ─── Section Header ───────────────────────────────────────────────────────────
const SectionHeader: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <div className="mb-10 mt-6">
    <div className="flex items-center gap-4 mb-2">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
      <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-800 via-blue-700 to-cyan-700 bg-clip-text text-transparent whitespace-nowrap px-2">
        {title}
      </h3>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
    </div>
    {subtitle && (
      <p className="text-center text-sm text-gray-500 mt-1">{subtitle}</p>
    )}
  </div>
);

const ProjectGrid = memo(
  ({
    items,
    onSelect,
  }: {
    items: Project[];
    onSelect: (project: Project) => void;
  }) => (
    <div className="flex flex-wrap justify-center gap-6 pb-4 px-4">
      {items.map((project) => (
        <Card
          key={project.title}
          className="group overflow-hidden bg-slate-100 border border-slate-300 card-shadow hover:card-shadow-hover transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 rounded-2xl cursor-pointer w-full sm:w-80 md:w-96"
          onClick={() => onSelect(project)}
        >
          <div className="relative h-48 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 flex items-center justify-center overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className={`absolute inset-0 h-full w-full transition-all duration-500 ${
                PROJECT_IMAGE_CONTAIN_TITLES.has(project.title)
                  ? "object-contain p-4 opacity-90 group-hover:opacity-100 group-hover:scale-105"
                  : "object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110"
              }`}
              loading="lazy"
              decoding="async"
            />
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

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={`${project.title}-${tech}`}
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
  )
);

ProjectGrid.displayName = "ProjectGrid";

const Portfolio = memo(() => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [currentScreenshots, setCurrentScreenshots] = useState<string[]>([]);
  const { t } = useLanguage();
  const portfolioText = t("portfolio");

  // ─── Core Products ─────────────────────────────────────────────────────────
  const coreProducts = useMemo<Project[]>(() => [
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
      ],
      category: "core"
    },
    {
      title: "Hemola",
      type: "Connected Freight & Logistics Platform",
      description: "Hemola is a freight and logistics marketplace that connects shippers with drivers and carriers in one unified platform. It enables load posting, negotiation, delivery tracking, payment coordination, and trust-building through service ratings, helping transport operations move more efficiently and transparently.",
      tech: ["React", "Node.js", "PostgreSQL", "Google Maps", "Stripe", "Socket.io"],
      image: "/hemola.webp",
      demoUrl: "https://hemola-demo.com",
      githubUrl: "",
      features: [
        "Load Posting & Matching",
        "Driver and Carrier Coordination",
        "Real-time Delivery Tracking",
        "Negotiation & Rate Management",
        "Payment Workflow Support",
        "Service Ratings & Trust Signals",
        "Logistics Dashboard",
        "Transparent Operations"
      ],
      category: "core"
    },
    {
      title: "Sudan Mart",
      type: "On-demand Delivery & Last-mile Logistics",
      description: "Sudan Mart is a comprehensive on-demand delivery and last-mile logistics platform that connects customers with local businesses for instant delivery services. The platform offers real-time tracking, multiple payment options, and integrates with local vendors across Sudan. With advanced route optimization and driver management systems, Sudan Mart ensures fast, reliable delivery services while supporting local economies.",
      tech: ["React Native", "Node.js", "PostgreSQL", "Google Maps API", "Stripe", "Socket.io"],
      image: "/sudan-mart.png",
      demoUrl: "https://sudan-mart-demo.com",
      githubUrl: "https://github.com/samalync/sudan-mart",
      screenshots: [
        "/sudan-mart-app/1.png", "/sudan-mart-app/2.png", "/sudan-mart-app/3.png",
        "/sudan-mart-app/4.png", "/sudan-mart-app/5.png", "/sudan-mart-app/6.png",
        "/sudan-mart-app/7.png", "/sudan-mart-app/8.png", "/sudan-mart-app/9.png",
        "/sudan-mart-app/10.png", "/sudan-mart-app/11.png", "/sudan-mart-app/12.png",
        "/sudan-mart-app/13.png", "/sudan-mart-app/14.png", "/sudan-mart-app/15.png"
      ],
      features: [
        "Real-time Order Tracking",
        "Route Optimization",
        "Driver Management System",
        "Multiple Payment Options",
        "Local Vendor Integration",
        "Instant Delivery Services",
        "Customer Ratings & Reviews",
        "Mobile App Interface"
      ],
      category: "core"
    },
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
      ],
      category: "core"
    },
  ], []);

  // ─── Website Solutions ──────────────────────────────────────────────────────
  const websiteSolutions = useMemo<Project[]>(() => [
    {
      title: "Khartoum Interfilm",
      type: "Creative Marketing Agency",
      description: "Khartoum Interfilm is a creative marketing agency built around the power of storytelling, brand strategy, and impactful campaigns across digital platforms. We partnered with them to deliver a standout digital presence — combining bold visual identity, strategic messaging, and an immersive web experience that reflects their creative philosophy.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Node.js"],
      image: "/k.png",
      demoUrl: "https://khartoum-interfilm.com",
      githubUrl: "",
      screenshots: [
        "/kharoum-interfilm/1.png", "/kharoum-interfilm/2.png", "/kharoum-interfilm/3.png",
        "/kharoum-interfilm/4.png", "/kharoum-interfilm/5.png", "/kharoum-interfilm/6.png",
        "/kharoum-interfilm/7.png"
      ],
      features: [
        "Brand Strategy & Storytelling",
        "Digital Campaign Management",
        "Creative Direction",
        "Social Media Integration",
        "Responsive Web Design",
        "Visual Identity System",
        "Content Management",
        "Analytics & Reporting"
      ],
      category: "website"
    },
    {
      title: "Mondo Wooden Utensils",
      type: "E-Commerce Store",
      description: "Mondo is an artisan e-commerce store dedicated to handcrafted wooden kitchen utensils. We designed and built a warm, nature-inspired shopping experience that highlights the craftsmanship behind every product. The platform features a curated product catalogue, smooth checkout flow, and a brand aesthetic rooted in simplicity and quality.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Stripe", "Node.js", "MongoDB"],
      image: "/mondo.png",
      demoUrl: "https://mondo-wooden.com",
      githubUrl: "",
      screenshots: [
        "/mondo/1.png", "/mondo/2.png", "/mondo/3.png", "/mondo/4.png",
        "/mondo/5.png", "/mondo/6.png", "/mondo/7.png"
      ],
      features: [
        "Artisan Product Catalogue",
        "Secure Checkout & Stripe Payments",
        "Inventory Management",
        "Mobile-First Design",
        "Product Search & Filtering",
        "Order Tracking",
        "Customer Reviews",
        "Nature-Inspired UI"
      ],
      category: "website"
    }
  ], []);

  // ─── Brand Identity & Visual Design ────────────────────────────────────────
  const brandIdentityProjects = useMemo<Project[]>(() => [
    {
      title: "Viewesta Brand Identity",
      type: "Brand Identity System",
      description: "Full brand identity system crafted for Viewesta, Africa's emerging streaming platform. The identity was built to be bold, modern, and culturally resonant — covering the logo, colour language, typography, motion principles, and comprehensive brand guidelines that unify the product across mobile, web, and marketing surfaces.",
      tech: ["Adobe Illustrator", "Adobe Photoshop", "Figma", "After Effects"],
      image: "/viewesta-branding/1.png",
      demoUrl: "",
      githubUrl: "",
      screenshots: [
        "/viewesta-branding/1.png", "/viewesta-branding/2.png", "/viewesta-branding/3.png",
        "/viewesta-branding/4.png", "/viewesta-branding/5.png", "/viewesta-branding/6.png",
        "/viewesta-branding/7.png"
      ],
      features: [
        "Logo Design & Variations",
        "Colour Palette System",
        "Typography Selection",
        "Motion & Animation Guidelines",
        "Brand Guidelines Document",
        "Social Media Kit",
        "App Icon & Splash Screen",
        "Marketing Asset Templates"
      ],
      category: "brand"
    },
    {
      title: "Sudan Mart Brand Identity",
      type: "Brand Identity System",
      description: "Complete brand identity system designed for Sudan Mart — encompassing logo design, colour palette, typography, iconography, and brand guidelines. The identity reflects speed, trust, and local pride, giving the platform a bold and recognisable visual language across all digital and physical touchpoints.",
      tech: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
      image: "/sudan-mart-brand-identity/1.png",
      demoUrl: "",
      githubUrl: "",
      screenshots: [
        "/sudan-mart-brand-identity/0.png",
        "/sudan-mart-brand-identity/1.png",
        "/sudan-mart-brand-identity/2.png",
        "/sudan-mart-brand-identity/3.png",
        "/sudan-mart-brand-identity/4.png",
        "/sudan-mart-brand-identity/5.png",
        "/sudan-mart-brand-identity/6.png"
      ],
      features: [
        "Logo Design & Variations",
        "Colour Palette System",
        "Typography Selection",
        "Iconography Set",
        "Brand Guidelines Document",
        "Social Media Kit",
        "Packaging Concepts",
        "Digital Asset Library"
      ],
      category: "brand"
    },
    {
      title: "Mobily Saudi Telecom",
      type: "SIM Packaging & Die-Cut Design",
      description: "Packaging design work created for Mobily Saudi Arabia, covering SIM card pack concepts, bilingual activation layouts, and print-ready die-cut artwork for prepaid, roaming, and internal distribution variants. The system balances brand consistency with clear activation instructions and production accuracy for retail-ready output.",
      tech: ["Adobe Illustrator", "Adobe Photoshop", "Print Production", "Packaging Design"],
      image: "/mobily/mobily.png",
      demoUrl: "",
      githubUrl: "",
      screenshots: [
        "/mobily/screenshots/SIM-T12.png",
        "/mobily/screenshots/prepaid.JPG",
        "/mobily/screenshots/roaming.JPG",
        "/mobily/screenshots/internal.JPG"
      ],
      features: [
        "SIM Pack Layout Design",
        "Die-Cut Production Artwork",
        "Bilingual Arabic & English Packaging",
        "Prepaid, Roaming, and Internal Variants",
        "Activation Instruction Design",
        "QR Code & Information Panel Layouts",
        "Brand-Consistent Packaging System",
        "Print-Ready Delivery Files"
      ],
      category: "brand"
    }
  ], []);

  // ─── Projects by Team Members ───────────────────────────────────────────────
  const teamMemberProjects = useMemo<Project[]>(() => [
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
      ],
      category: "team"
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
      ],
      category: "team"
    },
    {
      title: "Movieex",
      type: "Online Store",
      description: "Movieex is an online store specializing in selling movies and TV series, offering a wide range of classic and contemporary titles in high quality. It allows customers to easily browse and purchase their favorite content, with secure payment options and reliable delivery service. With its simple interface and convenient design, Movieex provides a seamless shopping experience for movie and TV fans.",
      tech: ["Flutter", "Dart"],
      image: "/image.png",
      demoUrl: "https://movieex-demo.com",
      githubUrl: "https://github.com/samalync/movieex",
      features: ["User Authentication", "Payment Integration", "Search & Filter", "Reviews & Ratings"],
      category: "team"
    }
  ], []);

  const handleViewProject = useCallback((project: Project) => {
    setSelectedProject(project);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  const closeImageModal = useCallback(() => {
    setSelectedImage(null);
    setCurrentScreenshots([]);
    setCurrentImageIndex(0);
  }, []);

  const handleImageClick = useCallback((imageSrc: string, screenshots?: string[]) => {
    setSelectedImage(imageSrc);
    if (screenshots && screenshots.length > 0) {
      setCurrentScreenshots(screenshots);
      setCurrentImageIndex(screenshots.indexOf(imageSrc));
    } else {
      setCurrentScreenshots([imageSrc]);
      setCurrentImageIndex(0);
    }
  }, []);

  const goToPreviousImage = useCallback(() => {
    if (currentScreenshots.length > 0) {
      const newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : currentScreenshots.length - 1;
      setCurrentImageIndex(newIndex);
      setSelectedImage(currentScreenshots[newIndex]);
    }
  }, [currentImageIndex, currentScreenshots]);

  const goToNextImage = useCallback(() => {
    if (currentScreenshots.length > 0) {
      const newIndex = currentImageIndex < currentScreenshots.length - 1 ? currentImageIndex + 1 : 0;
      setCurrentImageIndex(newIndex);
      setSelectedImage(currentScreenshots[newIndex]);
    }
  }, [currentImageIndex, currentScreenshots]);

  const projectModal = selectedProject && typeof document !== "undefined"
    ? createPortal(
        <div
          className="fixed inset-0 z-[100] overflow-y-auto bg-black/65 p-4 md:p-6"
          onClick={closeModal}
        >
          <div className="flex min-h-full items-center justify-center">
            <div
              className="flex max-h-[95vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_32px_120px_-32px_rgba(15,23,42,0.55)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex-1 overflow-y-auto p-6">
                {/* Modal Header */}
                <div className="mb-6 flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{selectedProject.title}</h3>
                    <p className="text-muted-foreground">{selectedProject.type}</p>
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Project Image */}
                <div className="mb-6">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className={`mx-auto h-80 w-3/4 rounded-lg ${
                      PROJECT_IMAGE_CONTAIN_TITLES.has(selectedProject.title)
                        ? "object-contain"
                        : "object-cover"
                    }`}
                    decoding="async"
                  />
                </div>

                {/* Project Disclaimer — only shown for team member projects */}
                {selectedProject.category === "team" && (
                  <div className="mb-6 rounded-lg border-l-4 border-primary/20 bg-muted/50 p-4">
                    <p className="text-sm italic text-muted-foreground">
                      "{portfolioText.disclaimer}"
                    </p>
                  </div>
                )}

                {/* Project Description */}
                <div className="mb-6">
                  <h4 className="mb-3 text-lg font-semibold text-foreground">{portfolioText.aboutProject}</h4>
                  <p className="leading-relaxed text-muted-foreground">{selectedProject.description}</p>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="mb-3 text-lg font-semibold text-foreground">{portfolioText.features}</h4>
                  <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                    {selectedProject.features.map((feature: string, index: number) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="mb-3 text-lg font-semibold text-foreground">{portfolioText.technologies}</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech: string, index: number) => (
                      <span
                        key={index}
                        className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
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
                      <h4 className="mb-3 text-lg font-semibold text-foreground">{portfolioText.role}</h4>
                      <p className="leading-relaxed text-muted-foreground">
                        Mobile Developer – responsible for UI design integration, feature implementation, and app performance optimization.
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-3 text-lg font-semibold text-foreground">{portfolioText.outcome}</h4>
                      <p className="leading-relaxed text-muted-foreground">
                        Delivered a smooth, engaging entertainment experience that simplified content access and boosted user satisfaction.
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-8 text-lg font-semibold text-foreground">{portfolioText.screenshots}</h4>
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        <img
                          src="/Screenshots/1.png"
                          alt="Movieex Screenshot 1"
                          className="h-auto w-full cursor-pointer rounded-lg shadow-lg transition-opacity hover:opacity-80"
                          loading="lazy"
                          decoding="async"
                          onClick={() => handleImageClick("/Screenshots/1.png", ["/Screenshots/1.png", "/Screenshots/2.png", "/Screenshots/3.png", "/Screenshots/4.png", "/Screenshots/5.png", "/Screenshots/6.png", "/Screenshots/7.png"])}
                        />
                        <img
                          src="/Screenshots/2.png"
                          alt="Movieex Screenshot 2"
                          className="h-auto w-full cursor-pointer rounded-lg shadow-lg transition-opacity hover:opacity-80"
                          loading="lazy"
                          decoding="async"
                          onClick={() => handleImageClick("/Screenshots/2.png", ["/Screenshots/1.png", "/Screenshots/2.png", "/Screenshots/3.png", "/Screenshots/4.png", "/Screenshots/5.png", "/Screenshots/6.png", "/Screenshots/7.png"])}
                        />
                        <img
                          src="/Screenshots/3.png"
                          alt="Movieex Screenshot 3"
                          className="h-auto w-full cursor-pointer rounded-lg shadow-lg transition-opacity hover:opacity-80"
                          loading="lazy"
                          decoding="async"
                          onClick={() => handleImageClick("/Screenshots/3.png", ["/Screenshots/1.png", "/Screenshots/2.png", "/Screenshots/3.png", "/Screenshots/4.png", "/Screenshots/5.png", "/Screenshots/6.png", "/Screenshots/7.png"])}
                        />
                        <img
                          src="/Screenshots/4.png"
                          alt="Movieex Screenshot 4"
                          className="h-auto w-full cursor-pointer rounded-lg shadow-lg transition-opacity hover:opacity-80"
                          loading="lazy"
                          decoding="async"
                          onClick={() => handleImageClick("/Screenshots/4.png", ["/Screenshots/1.png", "/Screenshots/2.png", "/Screenshots/3.png", "/Screenshots/4.png", "/Screenshots/5.png", "/Screenshots/6.png", "/Screenshots/7.png"])}
                        />
                        <img
                          src="/Screenshots/5.png"
                          alt="Movieex Screenshot 5"
                          className="h-auto w-full cursor-pointer rounded-lg shadow-lg transition-opacity hover:opacity-80"
                          loading="lazy"
                          decoding="async"
                          onClick={() => handleImageClick("/Screenshots/5.png", ["/Screenshots/1.png", "/Screenshots/2.png", "/Screenshots/3.png", "/Screenshots/4.png", "/Screenshots/5.png", "/Screenshots/6.png", "/Screenshots/7.png"])}
                        />
                        <img
                          src="/Screenshots/6.png"
                          alt="Movieex Screenshot 6"
                          className="h-auto w-full cursor-pointer rounded-lg shadow-lg transition-opacity hover:opacity-80"
                          loading="lazy"
                          decoding="async"
                          onClick={() => handleImageClick("/Screenshots/6.png", ["/Screenshots/1.png", "/Screenshots/2.png", "/Screenshots/3.png", "/Screenshots/4.png", "/Screenshots/5.png", "/Screenshots/6.png", "/Screenshots/7.png"])}
                        />
                        <img
                          src="/Screenshots/7.png"
                          alt="Movieex Screenshot 7"
                          className="h-auto w-full cursor-pointer rounded-lg shadow-lg transition-opacity hover:opacity-80"
                          loading="lazy"
                          decoding="async"
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
                      <h4 className="mb-3 text-lg font-semibold text-foreground">Problem Solved</h4>
                      <ul className="space-y-1 leading-relaxed text-muted-foreground">
                        <li>• Language barriers in healthcare</li>
                        <li>• Limited access to medical specialists</li>
                        <li>• Lack of preliminary medical guidance</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-3 text-lg font-semibold text-foreground">Outcome</h4>
                      <p className="leading-relaxed text-muted-foreground">
                        Created an accessible telemedicine platform that bridges language barriers, improves medical consultation response times, and enables better healthcare delivery across Rwanda.
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-8 text-lg font-semibold text-foreground">Screenshots</h4>
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <img
                          src="/AI Voice File/Screen Shot 2025-10-13 at 12.47.54 PM.png"
                          alt="AI Voice Healthcare Assistant Screenshot 1"
                          className="h-auto w-full cursor-pointer rounded-lg shadow-lg transition-opacity hover:opacity-80"
                          loading="lazy"
                          decoding="async"
                          onClick={() => handleImageClick("/AI Voice File/Screen Shot 2025-10-13 at 12.47.54 PM.png", ["/AI Voice File/Screen Shot 2025-10-13 at 12.47.54 PM.png", "/AI Voice File/Screen Shot 2025-10-13 at 12.48.21 PM.png"])}
                        />
                        <img
                          src="/AI Voice File/Screen Shot 2025-10-13 at 12.48.21 PM.png"
                          alt="AI Voice Healthcare Assistant Screenshot 2"
                          className="h-auto w-full cursor-pointer rounded-lg shadow-lg transition-opacity hover:opacity-80"
                          loading="lazy"
                          decoding="async"
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
                      <h4 className="mb-3 text-lg font-semibold text-foreground">Role</h4>
                      <p className="leading-relaxed text-muted-foreground">
                        Mobile Developer – implemented geolocation features, survey logic, and multimedia submission functionalities.
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-3 text-lg font-semibold text-foreground">Outcome</h4>
                      <p className="leading-relaxed text-muted-foreground">
                        Delivered a reliable and intelligent survey platform that improved data accuracy and enhanced the feedback collection process for retail businesses.
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-8 text-lg font-semibold text-foreground">Screenshots</h4>
                      <div className="flex flex-col items-center justify-start gap-4 md:flex-row">
                        <img
                          src="/ehub screenshot.jpeg"
                          alt="eHub Screenshot"
                          className="h-auto w-72 cursor-pointer rounded-lg shadow-lg transition-opacity hover:opacity-80 md:w-80 lg:w-80"
                          loading="lazy"
                          decoding="async"
                          onClick={() => handleImageClick("/ehub screenshot.jpeg")}
                        />

                        <video
                          src="/ehub video.MP4"
                          controls
                          className="h-auto w-72 rounded-lg object-cover shadow-lg md:w-70 lg:w-80"
                          poster="/ehub screenshot.jpeg"
                          preload="none"
                          style={{ aspectRatio: "9/16" }}
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
                    <h4 className="mb-8 text-lg font-semibold text-foreground">Screenshots</h4>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {selectedProject.screenshots.map((screenshot: string, index: number) => (
                        <img
                          key={index}
                          src={screenshot}
                          alt={`${selectedProject.title} Screenshot ${index + 1}`}
                          className="h-auto w-full cursor-pointer rounded-lg shadow-lg transition-opacity hover:opacity-80"
                          loading="lazy"
                          decoding="async"
                          onClick={() => handleImageClick(screenshot, selectedProject.screenshots)}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Screenshots for Viewesta */}
                {selectedProject.title === "Viewesta" && selectedProject.screenshots && (
                  <div className="mb-6">
                    <h4 className="mb-8 text-lg font-semibold text-foreground">Screenshots</h4>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {selectedProject.screenshots.map((screenshot: string, index: number) => (
                        <img
                          key={index}
                          src={screenshot}
                          alt={`${selectedProject.title} Screenshot ${index + 1}`}
                          className="h-auto w-full cursor-pointer rounded-lg shadow-lg transition-opacity hover:opacity-80"
                          loading="lazy"
                          decoding="async"
                          onClick={() => handleImageClick(screenshot, selectedProject.screenshots)}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Screenshots for Sudan Mart */}
                {selectedProject.title === "Sudan Mart" && selectedProject.screenshots && (
                  <div className="mb-6">
                    <h4 className="mb-8 text-lg font-semibold text-foreground">Screenshots</h4>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {selectedProject.screenshots.map((screenshot: string, index: number) => (
                        <img
                          key={index}
                          src={screenshot}
                          alt={`${selectedProject.title} Screenshot ${index + 1}`}
                          className="h-auto w-full cursor-pointer rounded-lg shadow-lg transition-opacity hover:opacity-80"
                          loading="lazy"
                          decoding="async"
                          onClick={() => handleImageClick(screenshot, selectedProject.screenshots)}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Screenshots for Brand Identity projects */}
                {selectedProject.category === "brand" && selectedProject.screenshots && (
                  <div className="mb-6">
                    <h4 className="mb-8 text-lg font-semibold text-foreground">{portfolioText.brandVisuals}</h4>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {selectedProject.screenshots.map((screenshot: string, index: number) => (
                        <img
                          key={index}
                          src={screenshot}
                          alt={`${selectedProject.title} Visual ${index + 1}`}
                          className="h-auto w-full cursor-pointer rounded-lg shadow-lg transition-opacity hover:opacity-80"
                          loading="lazy"
                          decoding="async"
                          onClick={() => handleImageClick(screenshot, selectedProject.screenshots)}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Screenshots for Website Solutions projects */}
                {selectedProject.category === "website" && selectedProject.screenshots && (
                  <div className="mb-6">
                    <h4 className="mb-8 text-lg font-semibold text-foreground">{portfolioText.screenshots}</h4>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {selectedProject.screenshots.map((screenshot: string, index: number) => (
                        <img
                          key={index}
                          src={screenshot}
                          alt={`${selectedProject.title} Screenshot ${index + 1}`}
                          className="h-auto w-full cursor-pointer rounded-lg shadow-lg transition-opacity hover:opacity-80"
                          loading="lazy"
                          decoding="async"
                          onClick={() => handleImageClick(screenshot, selectedProject.screenshots)}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>,
        document.body
      )
    : null;

  const imageModal = selectedImage && typeof document !== "undefined"
    ? createPortal(
        <div
          className="fixed inset-0 z-[110] bg-black/80 p-4"
          onClick={closeImageModal}
        >
          <div
            className="relative flex min-h-full w-full items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex h-full max-h-[95vh] w-full max-w-7xl items-center justify-center">
              <button
                onClick={closeImageModal}
                className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white transition-colors hover:text-gray-300"
              >
                <X className="h-6 w-6" />
              </button>

              {currentScreenshots.length > 1 && (
                <>
                  <button
                    onClick={goToPreviousImage}
                    className="absolute left-4 z-10 rounded-full bg-black/50 p-3 text-white transition-colors hover:text-gray-300"
                    aria-label={portfolioText.previousImage}
                  >
                    <ChevronLeft className="h-8 w-8" />
                  </button>
                  <button
                    onClick={goToNextImage}
                    className="absolute right-4 z-10 rounded-full bg-black/50 p-3 text-white transition-colors hover:text-gray-300"
                    aria-label={portfolioText.nextImage}
                  >
                    <ChevronRight className="h-8 w-8" />
                  </button>

                  <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-full bg-black/50 px-4 py-2 text-sm text-white">
                    {currentImageIndex + 1} / {currentScreenshots.length}
                  </div>
                </>
              )}

              <img
                src={selectedImage}
                alt={portfolioText.expandedView}
                className="max-h-full max-w-full rounded-lg object-contain"
                decoding="async"
              />
            </div>
          </div>
        </div>,
        document.body
      )
    : null;

  return (
    <>
      <section id="portfolio" className="performance-section py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Page Header ─────────────────────────────────────────────────── */}
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full border border-purple-200/20 backdrop-blur-sm">
            <span className="text-sm font-medium text-purple-600 tracking-wide">{portfolioText.eyebrow}</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-cyan-800 bg-clip-text text-transparent leading-tight mb-4 pb-2">
            {portfolioText.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            {portfolioText.intro}
          </p>
        </div>

        {/* ── Section 1: Core Products ─────────────────────────────────────── */}
        <SectionHeader
          title={portfolioText.coreTitle}
          subtitle={portfolioText.coreSubtitle}
        />
        <ProjectGrid items={coreProducts} onSelect={handleViewProject} />

        {/* ── Section 2: Website Solutions ─────────────────────────────────── */}
        {websiteSolutions.length > 0 && (
          <>
            <SectionHeader
              title={portfolioText.websiteTitle}
              subtitle={portfolioText.websiteSubtitle}
            />
            <ProjectGrid items={websiteSolutions} onSelect={handleViewProject} />
          </>
        )}

        {/* ── Section 3: Brand Identity & Visual Design ────────────────────── */}
        {brandIdentityProjects.length > 0 && (
          <>
            <SectionHeader
              title={portfolioText.brandTitle}
              subtitle={portfolioText.brandSubtitle}
            />
            <ProjectGrid items={brandIdentityProjects} onSelect={handleViewProject} />
          </>
        )}

        {/* ── Section 4: Projects by Team Members ──────────────────────────── */}
        {teamMemberProjects.length > 0 && (
          <>
            <SectionHeader
              title={portfolioText.teamTitle}
              subtitle={portfolioText.teamSubtitle}
            />
            <ProjectGrid items={teamMemberProjects} onSelect={handleViewProject} />
          </>
        )}

        <div className="text-center mt-12" />
      </div>

      </section>
      {projectModal}
      {imageModal}
    </>
  );
});

Portfolio.displayName = "Portfolio";

export default Portfolio;
