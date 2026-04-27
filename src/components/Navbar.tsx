import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  
  const location = useLocation();
  const lastScrollY = useRef(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const segmentRefs = useRef<(HTMLElement | null)[]>([]);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scrolling down
        setNavVisible(false);
      } else if (currentScrollY < lastScrollY.current || currentScrollY <= 100) {
        // Scrolling up
        setNavVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu and dropdowns on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  // Main Navbar Entrance & Scroll Animation
  useGSAP(() => {
    const getEls = (indices: number[]) => indices.map(i => segmentRefs.current[i]).filter(Boolean);

    // Stop any ongoing animations to prevent conflicts during rapid scrolling
    gsap.killTweensOf(segmentRefs.current);

    if (navVisible) {
      const tl = gsap.timeline();
      gsap.set(segmentRefs.current, { y: -100, opacity: 0 });

      tl.to(getEls([3]), { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" })
        .to(getEls([2, 4]), { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }, "-=0.35")
        .to(getEls([1, 5]), { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }, "-=0.35")
        .to(getEls([0, 6]), { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }, "-=0.35");
    } else {
      gsap.to(segmentRefs.current, { y: -100, opacity: 0, duration: 0.3, ease: "power2.in" });
      setMobileMenuOpen(false); // Close mobile menu if open when scrolling down
    }
  }, [navVisible]);

  // Dropdown Animations
  useGSAP(() => {
    navItems.forEach(item => {
      if (item.children) {
        const el = dropdownRefs.current[item.label];
        if (el) {
          if (activeDropdown === item.label) {
            gsap.to(el, { autoAlpha: 1, y: 0, duration: 0.25, ease: "power2.out", overwrite: "auto" });
          } else {
            gsap.to(el, { autoAlpha: 0, y: 10, duration: 0.2, ease: "power2.in", overwrite: "auto" });
          }
        }
      }
    });
  }, [activeDropdown]);

  // Mobile Menu Animation
  useGSAP(() => {
    if (mobileMenuRef.current) {
      if (mobileMenuOpen) {
        gsap.to(mobileMenuRef.current, { height: "auto", autoAlpha: 1, duration: 0.35, ease: "power2.out", overwrite: "auto" });
      } else {
        gsap.to(mobileMenuRef.current, { height: 0, autoAlpha: 0, duration: 0.3, ease: "power2.in", overwrite: "auto" });
      }
    }
  }, [mobileMenuOpen]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none" ref={containerRef}>
      <header className={`transition-all duration-300 pointer-events-auto w-full h-20 ${scrolled ? "drop-shadow-md" : ""}`}>
        <div className="w-full flex items-center justify-between h-full">
          {/* Logo (Index 0) */}
          <div
            ref={el => { segmentRefs.current[0] = el; }}
            className="pointer-events-auto h-full bg-white flex items-center px-4 md:px-6 flex-1 justify-start"
          >
            <Link 
              to="/" 
              className="flex items-center gap-2 group h-full"
            >
              {!imageError ? (
                <img
                  src={logo}
                  alt="Logo"
                  className="w-10 h-10 object-contain relative left-12"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-highlight flex items-center justify-center text-black font-bold text-xs">
                  DRD
                </div>
              )}
            </Link>
          </div>

          {/* Desktop Nav (Indices 1-5) */}
          <nav className="hidden lg:flex items-center h-full">
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.path || (item.children && item.children.some(child => location.pathname === child.path.split('#')[0]));
              return (
                <div
                  key={item.label}
                  className="pointer-events-auto relative h-full w-[140px] xl:w-[150px] bg-white flex justify-center"
                  ref={el => { segmentRefs.current[index + 1] = el; }}
                  onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.path}
                    className={`h-full w-full px-2 text-sm font-bold tracking-wide transition-colors duration-300 flex items-center justify-center whitespace-nowrap ${
                      isActive
                        ? "text-black bg-[#FFF200]"
                        : "text-black hover:bg-[#FFF200] hover:text-black"
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

                  {/* Desktop Dropdown */}
                  {item.children && (
                    <div
                      ref={el => { dropdownRefs.current[item.label] = el; }}
                      className="absolute top-[calc(100%+0.5rem)] left-1/2 -translate-x-1/2 w-56 bg-white shadow-2xl border border-gray-100 overflow-hidden z-50 opacity-0 invisible rounded-xl"
                    >
                      <div className="py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.path}
                            className="block px-5 py-2 text-xs font-bold tracking-wide text-black hover:bg-[#FFF200] hover:text-black transition-all duration-200"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Section: Contact button + Hamburger menu (Index 6) */}
          <div 
            className="pointer-events-auto h-full bg-white flex items-center flex-1 justify-end"
            ref={el => { segmentRefs.current[6] = el; }}
          >
            <Link
              to="/contact"
              className="hidden sm:inline-flex h-full items-center justify-center px-8 text-sm font-bold text-white bg-black hover:bg-[#FFF200] hover:text-black transition-colors duration-300"
            >
              Contact Us
            </Link>

            {/* Hamburger button (visible only on mobile) */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 mr-4 rounded-md text-black hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Yellow background, Black text, Active: Black bg + Yellow text */}
        <div
          ref={mobileMenuRef}
          className="pointer-events-auto lg:hidden absolute top-full left-4 right-4 mt-2 overflow-hidden bg-[#FFF200] rounded-xl shadow-2xl opacity-0 z-50"
          style={{ height: 0 }}
        >
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path || (item.children && item.children.some(child => location.pathname === child.path.split('#')[0]));
              return (
                <div key={item.label} className="space-y-2">
                  <Link
                    to={item.path}
                    className={`block text-base font-bold transition-all duration-200 rounded-lg px-3 py-2 ${
                      isActive
                        ? "bg-black text-[#FFF200]"   // Active: black bg, yellow text
                        : "text-black hover:bg-black/10" // Default: black text, subtle hover
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-4 space-y-2 border-l-2 border-black/20">
                      {item.children.map((child) => {
                        const isChildActive = location.pathname === child.path.split('#')[0];
                        return (
                          <Link
                            key={child.label}
                            to={child.path}
                            className={`block text-sm font-medium transition-all duration-200 rounded-lg px-3 py-1.5 ${
                              isChildActive
                                ? "bg-black text-[#FFF200]"
                                : "text-black/80 hover:bg-black/10 hover:text-black"
                            }`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
            <div className="pt-3 border-t border-black/20">
              <Link
                to="/contact"
                className={`block w-full py-2 text-center text-sm font-bold rounded-lg transition-all duration-200 ${
                  location.pathname === "/contact"
                    ? "bg-black text-[#FFF200]"
                    : "bg-black text-white hover:bg-[#FFF200] hover:text-black"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;