import React, { useCallback, useState } from "react";
import { Button } from "@/components/ui/button";
import { Globe2, Menu, X } from "lucide-react";
import { Language, useLanguage } from "@/i18n";

interface HeaderProps {
  onGetOfferClick: () => void;
}

const navItems = [
  { key: "home", id: "hero" },
  { key: "services", id: "services" },
  { key: "projects", id: "portfolio" },
  { key: "about", id: "about" },
  { key: "partnerships", id: "partnerships" },
  { key: "clients", id: "selected-clients" },
  { key: "contact", id: "contact" },
] as const;

const Header: React.FC<HeaderProps> = React.memo(({ onGetOfferClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const header = t("header");

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  }, []);

  const handleGetOfferClick = useCallback(() => {
    setIsMobileMenuOpen(false);
    onGetOfferClick();
  }, [onGetOfferClick]);

  const handleLanguageChange = useCallback((nextLanguage: Language) => {
    setLanguage(nextLanguage);
  }, [setLanguage]);

  const languageToggle = (
    <div
      className="inline-flex items-center rounded-full border border-gray-200 bg-white p-1 shadow-sm"
      aria-label={header.languageLabel}
    >
      <Globe2 className="mx-2 h-4 w-4 text-gray-500" aria-hidden="true" />
      {(["en", "ar"] as const).map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => handleLanguageChange(item)}
          className={`rounded-full px-3 py-1 text-xs font-bold transition-colors ${
            language === item
              ? "bg-primary text-primary-foreground"
              : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
          }`}
        >
          {item === "en" ? header.english : header.arabic}
        </button>
      ))}
    </div>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* White background container */}
      <div className="bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex-shrink-0 cursor-pointer" 
            onClick={() => scrollToSection("hero")}
          >
            <img
              src="/Samalync.png" 
              alt="Company Logo" 
              className="h-32 w-auto"
              decoding="async"
              fetchPriority="high"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-800 hover:text-primary transition-colors duration-200 font-medium"
              >
                {header.nav[item.key]}
              </button>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            {languageToggle}
            <Button 
              onClick={handleGetOfferClick}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 rounded-lg"
            >
              {header.getOffer}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className="text-gray-800 hover:text-primary"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200">
            <nav className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-start text-gray-800 hover:text-primary transition-colors duration-200 font-medium"
                >
                  {header.nav[item.key]}
                </button>
              ))}
              {languageToggle}
              <Button 
                onClick={handleGetOfferClick}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-4"
              >
                {header.getOffer}
              </Button>
            </nav>
          </div>
        )}
        </div>
      </div>
    </header>
  );
});

Header.displayName = "Header";

export default Header;
