import React, { useCallback, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe2, Menu, X } from "lucide-react";
import { CONTACT_TARGET, headerNav, isNavItemActive, navTarget } from "@/config/navigation";
import { Language, useLanguage } from "@/i18n";
import { cn } from "@/lib/utils";

const Header: React.FC = React.memo(() => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { pathname } = useLocation();
  const header = t("header");

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const handleLanguageChange = useCallback((nextLanguage: Language) => {
    setLanguage(nextLanguage);
  }, [setLanguage]);

  const languageToggle = (
    <div
      className="inline-flex items-center rounded-full border border-gray-200 bg-white p-1 shadow-sm"
      role="group"
      aria-label={header.languageLabel}
    >
      <Globe2 className="mx-2 h-4 w-4 text-gray-500" aria-hidden="true" />
      {(["en", "ar"] as const).map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => handleLanguageChange(item)}
          aria-pressed={language === item}
          lang={item}
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

  const navLinks = (className: string) =>
    headerNav.map((item) => {
      const active = isNavItemActive(item, pathname);

      return (
        <Link
          key={item.key}
          to={navTarget(item)}
          onClick={closeMobileMenu}
          aria-current={active ? "page" : undefined}
          className={cn(
            className,
            "font-medium transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-md",
            active ? "text-primary" : "text-gray-800"
          )}
        >
          {header.nav[item.key]}
        </Link>
      );
    });

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* White background container */}
      <div className="bg-white/95 border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0" onClick={closeMobileMenu}>
            <img
              src="/Samalync.png"
              alt="SAMALYNC"
              className="h-32 w-auto"
              decoding="async"
              fetchPriority="high"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks("")}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            {languageToggle}
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 rounded-lg">
              <Link to={CONTACT_TARGET}>{header.getOffer}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className="text-gray-800 hover:text-primary"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden bg-white/95 border-t border-gray-200">
            <nav className="px-4 py-6 space-y-4">
              {navLinks("block w-full text-start")}
              {languageToggle}
              <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-4">
                <Link to={CONTACT_TARGET} onClick={closeMobileMenu}>
                  {header.getOffer}
                </Link>
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
