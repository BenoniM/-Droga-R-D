import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
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
      <header className={`bg-white transition-all duration-300 ${scrolled ? "shadow-md py-2" : "py-3"}`}>
        <div className="container mx-auto flex items-center justify-between px-4 md:px-6">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            {!imageError ? (
              <img 
                src={logo} 
                alt="Logo" 
                className="w-10 h-10 object-contain"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-highlight flex items-center justify-center text-black font-bold text-xs">
                DRD
              </div>
            )}
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={`px-4 py-2 text-sm font-bold tracking-wide transition-all duration-300 flex items-center whitespace-nowrap rounded-md ${
                    location.pathname === item.path
                      ? "text-black bg-highlight"
                      : "text-black hover:bg-highlight hover:text-black"
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      className={`ml-1 w-3 h-3 transition-transform duration-300 ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-2xl border border-gray-100 overflow-hidden z-50"
                    >
                      <div className="py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.path}
                            className="block px-5 py-2 text-xs font-bold tracking-wide text-black hover:bg-highlight hover:text-black transition-all duration-200"
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

          {/* Contact Button */}
          <div className="flex items-center gap-3 shrink-0">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/contact"
                className="px-5 py-2 text-xs font-bold text-black bg-highlight hover:bg-black hover:text-highlight transition-all duration-300 rounded-md shadow-sm"
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