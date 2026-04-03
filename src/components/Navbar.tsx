import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
// Import logo from assets folder
import logo from "../assets/logo.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  {
    label: "Droga Science",
    path: "/droga-science",
    children: [
      { label: "Overview", path: "/droga-science" },
      { label: "Grants", path: "/droga-science/grants" },
      { label: "Research Projects", path: "/droga-science/projects" },
      { label: "Publications", path: "/droga-science#publications" },
      { label: "Labs & Facilities", path: "/droga-science#labs" },
    ],
  },
  { label: "News", path: "/news" },
];

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [imageError, setImageError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setActiveDropdown(null);
  }, [location]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar - Yellow Diagonal Background */}
      <AnimatePresence>
        {!scrolled && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 40, opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative hidden lg:block overflow-hidden bg-white"
          >
            {/* Yellow Background with Diagonal Cut (Left Side) */}
            <div 
              className="absolute inset-0 bg-highlight" 
              style={{ clipPath: 'polygon(0 0, 55% 0, 50% 100%, 0% 100%)' }}
            />
            
            <div className="container mx-auto relative h-full flex items-center justify-between px-4 md:px-6">
              {/* Left Side - Black Text on Yellow */}
              <div className="flex items-center gap-4 text-sm font-bold text-black">
                <div className="flex items-center gap-1.5">
                  <span>Welcome To Droga R&D</span>
                </div>
                <span className="text-black/20">|</span>
                <div className="flex items-center gap-1.5">
          
                </div>
              </div>

              {/* Right Side - Black Text on White */}
              <div className="flex items-center gap-6 text-black">
               
                <span className="text-gray-200">|</span>
                <div className="flex items-center gap-4">
                  <a href="#" className="hover:text-highlight transition-colors"><Facebook className="w-4 h-4" /></a>
                  <a href="#" className="hover:text-highlight transition-colors"><Twitter className="w-4 h-4" /></a>
                  <a href="#" className="hover:text-highlight transition-colors"><Instagram className="w-4 h-4" /></a>
                  <a href="#" className="hover:text-highlight transition-colors"><Linkedin className="w-4 h-4" /></a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Header - White Background */}
      <header className={`bg-white transition-all duration-300 ${scrolled ? "shadow-md py-2" : "py-4 md:py-6"}`}>
        <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
          {/* Logo with proper sizing - no stretch */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            {!imageError ? (
              <img 
                src={logo} 
                alt="Droga R&D Logo" 
                className="w-12 h-12 object-contain"
                onError={() => setImageError(true)}
              />
            ) : (
              /* Fallback to circle if image fails to load */
              <div className="w-12 h-12 rounded-full bg-highlight flex items-center justify-center text-black font-bold text-xs shrink-0">
                DRD
              </div>
            )}
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={`px-4 py-2 text-[15px] font-bold transition-all duration-300 flex items-center whitespace-nowrap ${
                    location.pathname === item.path
                      ? "text-highlight bg-black rounded-md"
                      : "text-black hover:bg-black hover:text-highlight rounded-md"
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDown className={`ml-1 w-3.5 h-3.5 transition-transform duration-300 shrink-0 ${activeDropdown === item.label ? "rotate-180" : ""}`} />}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-2xl border border-gray-100 overflow-hidden z-50"
                    >
                      <div className="py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.path}
                            className="block px-5 py-2.5 text-sm font-bold text-black hover:bg-black hover:text-highlight transition-all duration-200"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4 shrink-0">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="/contact"
                className="px-6 py-3 text-sm font-bold text-black bg-highlight hover:bg-black hover:text-highlight transition-all duration-300 rounded-md shadow-sm whitespace-nowrap"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;