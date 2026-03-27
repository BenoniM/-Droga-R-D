import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Home", path: "/" },
  {
    label: "About",
    path: "/about",
  },
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Header style - Highlight/yellow background
  const getHeaderStyle = () => {
    if (scrolled) {
      return "bg-highlight";
    }
    return "bg-highlight";
  };

  // Nav container style - Transparent
  const getNavStyle = () => {
    if (scrolled) {
      return "bg-transparent backdrop-blur-md border border-highlight/30";
    }
    return "bg-transparent backdrop-blur-md border border-highlight/20";
  };

  // Mobile menu style - Highlight/yellow background
  const getMobileMenuStyle = () => {
    if (scrolled) {
      return "bg-highlight border-t border-black/20";
    }
    return "bg-highlight border-t border-black/20";
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${getHeaderStyle()} py-2 md:py-3`}>
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        {/* Logo with Image */}
        <Link to="/" className="flex flex-col items-center md:items-start gap-0 md:gap-0.5 group">
          <motion.img 
            src={logo} 
            alt="Droga R&D" 
            className="h-8 md:h-10 transition-all duration-300"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ duration: 0.3 }}
          />
        </Link>

        {/* Desktop Nav with Transparent Glass Effect */}
        <nav className={`hidden lg:flex items-center gap-1 px-3 py-2 transition-all duration-300 ${getNavStyle()}`}>
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  to={item.path}
                  className={`relative px-4 md:px-5 py-2 md:py-2.5 text-sm sm:text-base font-medium font-heading tracking-wide transition-all duration-300 flex items-center ${
                    location.pathname === item.path
                      ? "bg-black text-highlight shadow-lg"
                      : "text-black/80 hover:text-black hover:bg-white/20"
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDown className="inline w-3 h-3 sm:w-3.5 sm:h-3.5 ml-1.5" />}
                </Link>
              </motion.div>

              {/* Dropdown with Yellow Background and Black Text */}
              <AnimatePresence>
                {item.children && activeDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-highlight rounded-lg shadow-xl border border-black/20 overflow-hidden z-50"
                  >
                    <div className="py-2">
                      {item.children.map((child) => (
                        <motion.div
                          key={child.label}
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Link
                            to={child.path}
                            className="block px-5 py-2.5 text-sm font-body text-black hover:bg-black hover:text-highlight transition-all duration-200"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {child.label}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* Contact Button */}
        <motion.div 
          className="hidden lg:flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <Link
            to="/contact"
            className="px-4 py-1.5 text-sm font-heading font-bold tracking-wide text-black bg-highlight hover:bg-highlight/90 transition-all duration-300 shadow-md rounded-md"
          >
            Contact Us
          </Link>
        </motion.div>

        {/* Mobile Toggle */}
        <motion.button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-black lg:hidden p-1.5 hover:bg-black/10 transition-colors rounded-md"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          {mobileOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`lg:hidden overflow-hidden mt-1 transition-all duration-300 ${getMobileMenuStyle()}`}
          >
            <div className="px-4 py-3 space-y-2">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.3 }}
                >
                  <Link
                    to={item.path}
                    className="block py-1.5 text-base font-heading font-bold text-black/80 hover:text-black transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-3 space-y-1 mt-0.5 border-l-2 border-black/30 ml-2">
                      {item.children.map((child, childIdx) => (
                        <motion.div
                          key={child.label}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 + childIdx * 0.03, duration: 0.3 }}
                        >
                          <Link
                            to={child.path}
                            className="block py-1 text-sm font-body text-black/60 hover:text-black transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/contact"
                  className="block mt-2 py-2 text-center bg-black text-highlight font-heading font-bold text-sm rounded-md hover:bg-black/90 transition-all duration-200"
                  onClick={() => setMobileOpen(false)}
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;