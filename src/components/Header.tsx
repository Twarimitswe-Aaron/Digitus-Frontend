import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOnLightBg, setIsOnLightBg] = useState(false);

  // Handle show/hide header on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      if (currentScrollY < lastScrollY) {
        setIsVisible(true); // scrolling up
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // scrolling down
        setIsMenuOpen(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Detect background brightness behind header
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bg = window.getComputedStyle(entry.target).backgroundColor;
            if (!bg) return;

            const rgb = bg.match(/\d+/g)?.map(Number) || [0, 0, 0];
            const brightness =
              (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;

            setIsOnLightBg(brightness > 200); // threshold: 0-255
          }
        });
      },
      { threshold: 0.6 } // detect when 60% of section is under header
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "How It Works", href: "#process" },
    { name: "Locations", href: "#locations" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Get Involved", href: "#cta" },
  ];

  return (
    <header
      className={`fixed top-6 py-3 flex justify-between mx-auto left-0 right-0 w-[90%] border z-50 rounded-full transition-all duration-500 ease-in-out transform
        ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
        ${isScrolled ? "backdrop-blur-sm shadow-lg" : "backdrop-blur-sm"}
        ${isOnLightBg ? "border-gray-300" : "border-gray-600"}
      `}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 group cursor-pointer">
          <span
            className={`text-xl font-bold transition-colors duration-300 ${
              isOnLightBg
                ? "text-gray-900"
                : "bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent"
            }`}
          >
            Digitus
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav
          className={`hidden md:flex items-center space-x-1 border rounded-full px-2 py-1 transition-colors duration-300 ${
            isOnLightBg ? "border-gray-300" : "border-gray-600"
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full
                ${
                  isOnLightBg
                    ? "text-gray-900 hover:bg-gray-100"
                    : "text-white hover:bg-white/10"
                }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
            isOnLightBg
              ? "bg-gray-900 text-white"
              : "bg-gradient-to-r from-gray-900 to-gray-600 text-white"
          }`}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className={`h-5 w-5 ${isOnLightBg ? "text-white" : "text-white"}`} />
          ) : (
            <Menu
              className={`h-5 w-5 ${isOnLightBg ? "text-white" : "text-white"}`}
            />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
