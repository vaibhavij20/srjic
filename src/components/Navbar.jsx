import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.webp";

const mainLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Academics", href: "/academics" },
];

const moreLinks = [
  { name: "Facilities", href: "/facilities" },
  { name: "Gallery", href: "/gallery" },
  { name: "Achievements", href: "/achievements" },
  { name: "Notices", href: "/notices" },
  { name: "Admissions", href: "/admissions" },
  { name: "Contact", href: "/contact" },
];

const allLinks = [...mainLinks, ...moreLinks];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isMoreActive = moreLinks.some((l) => l.href === location.pathname);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-white/90 backdrop-blur-md"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 gap-6">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img
              src={logo}
              alt="Salig Ram Jaiswal Inter College Logo"
              loading="eager"
              className="w-28 h-28 object-contain"
              style={{
                filter:
                  "drop-shadow(0 0 4px rgba(0,0,0,0.12)) drop-shadow(0 0 8px rgba(246,244,244,0.9))",
              }}
            />
            <div>
              <h2 className="font-bold text-gray-800 text-xl leading-tight">
                Salig Ram Jaiswal
              </h2>
              <p className="text-base text-yellow-600 text-l font-medium">
                Inter College
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center">
            {mainLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
               className={`text-xl font-semibold transition-colors duration-200 whitespace-nowrap ${
                  location.pathname === link.href
                    ? "text-yellow-500"
                    : "text-gray-700 hover:text-yellow-500"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* More Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`flex items-center gap-1 text-base font-medium transition-colors duration-200 ${
                  isMoreActive ? "text-yellow-500" : "text-gray-700 hover:text-yellow-500"
                }`}
              >
                More
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-10 left-0 bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-48 z-50"
                  >
                    {moreLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        className={`block px-5 py-2.5 text-base font-medium transition-colors duration-200 ${
                          location.pathname === link.href
                            ? "text-yellow-500 bg-yellow-50"
                            : "text-gray-700 hover:text-yellow-500 hover:bg-gray-50"
                        }`}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Admission CTA — Desktop */}
          <Link
            to="/admissions"
            className="hidden lg:block bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold px-5 py-2.5 rounded-xl transition-colors duration-200 text-base whitespace-nowrap flex-shrink-0"
          >
            Admissions Open
          </Link>

          {/* Hamburger — Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-yellow-500 hover:bg-gray-100 transition"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-lg overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-3">
              {allLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`py-3 border-b border-gray-100 text-base font-medium transition-colors duration-200 ${
                    location.pathname === link.href
                      ? "text-yellow-500"
                      : "text-gray-700 hover:text-yellow-500"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/admissions"
                className="mt-4 mb-2 bg-yellow-400 hover:bg-yellow-300 text-center py-3 rounded-xl font-semibold text-gray-900 text-base transition-colors duration-200"
              >
                Admissions Open
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}