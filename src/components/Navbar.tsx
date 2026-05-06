import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import logo from "../assets/logo.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  {
    label: "Droga Science",
    path: "#",
    children: [
      { label: "Droga Seminar", path: "/droga-science" },
      { label: "Droga Research Grant", path: "/droga-science/grants" },
      { label: "Publications", path: "/droga-science/publications" },
    ],
  },
  { label: "News", path: "/news" },
];

// Middle item index (0-based) for stagger origin
const MID_IDX = Math.floor(navItems.length / 2); // index 2 = "Services"

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(true);

  const location = useLocation();
  const lastScrollY = useRef(0);
  const prevNavVisible = useRef(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const segmentRefs = useRef<(HTMLElement | null)[]>([]);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Mobile-specific refs
  const mobileOverlayRef = useRef<HTMLDivElement>(null);
  const mobilePanelRef = useRef<HTMLDivElement>(null);
  const mobileLinkRefs = useRef<(HTMLElement | null)[]>([]);
  const closeTopRef = useRef<HTMLSpanElement>(null);
  const closeBotRef = useRef<HTMLSpanElement>(null);

  // Custom hamburger line refs
  const hamTopRef = useRef<HTMLSpanElement>(null);
  const hamMidRef = useRef<HTMLSpanElement>(null);
  const hamBotRef = useRef<HTMLSpanElement>(null);

  // ── Scroll handler ─────────────────────────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setNavVisible(false);
      } else if (currentScrollY < lastScrollY.current || currentScrollY <= 100) {
        setNavVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // ── Hamburger entrance animation ────────────────────────────────────────────
  // Fires on mount AND whenever navVisible transitions false → true
  const runHamburgerEntrance = () => {
    const mid = hamMidRef.current;
    const top = hamTopRef.current;
    const bot = hamBotRef.current;
    if (!mid || !top || !bot) return;

    const tl = gsap.timeline();

    // Reset all lines to 0 width anchored on the right
    gsap.set([mid, top, bot], { scaleX: 0, transformOrigin: "right center" });

    // Middle line draws in first (Slower: 0.7s)
    tl.to(mid, { scaleX: 1, duration: 1, ease: "power3.out" })
      // Then top and bottom simultaneously, with a clear delay (Slower: 0.6s)
      .to([top, bot], { scaleX: 1, duration: 0.8, ease: "power3.out" }, "-=0.3");
  };

  // Entrance handled by useGSAP [mobileMenuOpen] and [navVisible] effects below
  const isFirstMount = useRef(true);

  // Run whenever navVisible comes back to true (after being hidden)
  useEffect(() => {
    if (navVisible && !prevNavVisible.current) {
      // Wait for the navbar slide-down tween to settle
      const timer = setTimeout(runHamburgerEntrance, 350);
      prevNavVisible.current = true;
      return () => clearTimeout(timer);
    }
    if (!navVisible) {
      prevNavVisible.current = false;
      setMobileMenuOpen(false);
    }
  }, [navVisible]);

  // ── Desktop navbar entrance & scroll hide/show ──────────────────────────────
  useGSAP(() => {
    const getEls = (indices: number[]) =>
      indices.map((i) => segmentRefs.current[i]).filter(Boolean);

    gsap.killTweensOf(segmentRefs.current);

    if (navVisible) {
      const tl = gsap.timeline();
      gsap.set(segmentRefs.current, { y: -100, opacity: 0 });

      tl.to(getEls([3]), { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" })
        .to(getEls([2, 4]), { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }, "-=0.35")
        .to(getEls([1, 5]), { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }, "-=0.35")
        .to(getEls([0, 6]), { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }, "-=0.35");
    } else {
      gsap.to(segmentRefs.current, {
        y: -100,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [navVisible]);

  // ── Desktop dropdown animations ─────────────────────────────────────────────
  useGSAP(() => {
    navItems.forEach((item) => {
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

  const runHamburgerExit = () => {
    const mid = hamMidRef.current;
    const top = hamTopRef.current;
    const bot = hamBotRef.current;
    if (!mid || !top || !bot) return;

    const tl = gsap.timeline();
    // Match the user's slower speed for exit too
    tl.to([top, bot], { scaleX: 0, duration: 0.6, ease: "power3.in" })
      .to(mid, { scaleX: 0, duration: 0.7, ease: "power3.in" }, "-=0.3");
  };

  // ── Mobile panel slide-in/out ────────────────────────────────────────────────
  useGSAP(() => {
    const overlay = mobileOverlayRef.current;
    const panel = mobilePanelRef.current;
    if (!overlay || !panel) return;

    if (mobileMenuOpen) {
      // 1. Prepare: Show containers immediately but invisible
      runHamburgerExit();
      gsap.set(overlay, { display: "block" });
      gsap.set(panel, { display: "flex", pointerEvents: "auto", opacity: 1 });

      // 2. Animate Overlay
      gsap.to(overlay, { opacity: 1, duration: 0.4, ease: "power2.out" });

      // 3. Animate Internal Segments
      const linkEls = mobileLinkRefs.current.filter(Boolean);
      const header = document.getElementById("mobile-menu-header");
      const footer = document.getElementById("mobile-menu-footer");

      if (linkEls.length) {
        // Pairs: (3,4), (2,5), (1,6), (0,7) for 8 items
        const pairs = [[3, 4], [2, 5], [1, 6], [0, 7]];

        // Reset all segments off-screen
        gsap.set([...linkEls, header, footer], { x: "100%", opacity: 0 });

        // Links animation sequence (Slower)
        pairs.forEach((pair, step) => {
          pair.forEach(idx => {
            const el = mobileLinkRefs.current[idx];
            if (el) {
              gsap.to(el, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.3 + step * 0.25 });
            }
          });
        });

        // Header and Footer come in last (Slower)
        gsap.to([header, footer], {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.3 + pairs.length * 0.25,
          onComplete: () => {
            // Restore Criss-Cross X animation after header is in place
            if (closeTopRef.current && closeBotRef.current) {
              gsap.set([closeTopRef.current, closeBotRef.current], { scaleX: 1, opacity: 1, rotate: 0 });
              gsap.timeline()
                .to(closeTopRef.current, { rotate: 45, duration: 0.5, ease: "back.out(1.7)" })
                .to(closeBotRef.current, { rotate: -45, duration: 0.5, ease: "back.out(1.7)" }, "<");
            }
          }
        });
      }
    } else {
      // Closing / Initial State
      if (!isFirstMount.current || navVisible) {
        runHamburgerEntrance();
      }
      isFirstMount.current = false;

      // Reverse Close Button
      if (closeTopRef.current && closeBotRef.current) {
        gsap.to([closeTopRef.current, closeBotRef.current], { scaleX: 0, opacity: 0, rotate: 0, duration: 0.3 });
      }

      // ── Closing Sequence (Reverse of Entrance) ──
      const header = document.getElementById("mobile-menu-header");
      const footer = document.getElementById("mobile-menu-footer");

      const closeTl = gsap.timeline({
        onComplete: () => {
          gsap.set(panel, { display: "none", pointerEvents: "none" });
        }
      });

      // 1. Header and Footer leave first
      closeTl.to([header, footer], {
        x: "100%",
        opacity: 0,
        duration: 0.6,
        ease: "power3.in"
      });

      // 2. Pairs leave in sequence (Outward to Inward)
      const exitPairs = [[0, 7], [1, 6], [2, 5], [3, 4]];
      exitPairs.forEach((pair, step) => {
        const els = pair.map(idx => mobileLinkRefs.current[idx]).filter(Boolean);
        closeTl.to(els, {
          x: "100%",
          opacity: 0,
          duration: 0.6,
          ease: "power3.in"
        }, "-=0.4");
      });

      // 3. Hide Overlay
      gsap.to(overlay, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
        onComplete: () => {
          if (overlay) gsap.set(overlay, { display: "none" });
        }
      });
    }
  }, [mobileMenuOpen]);

  // ── Mobile Menu Items Processing ──────────────────────────────────────────
  const mobileDisplayItems = navItems.flatMap(item => {
    if (item.label === "Droga Science" && item.children) {
      return item.children;
    }
    return [item];
  });

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none" ref={containerRef}>
      <header
        className={`transition-all duration-300 pointer-events-auto w-full h-20 ${scrolled ? "drop-shadow-md" : ""
          }`}
      >
        <div className="w-full flex items-center justify-between h-full">
          <div
            ref={(el) => { segmentRefs.current[0] = el; }}
            className="pointer-events-auto h-full bg-white flex items-center px-6 lg:pl-16 flex-1 justify-start"
          >
            <Link to="/" className="flex items-center gap-2 group h-full">
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
          </div>

          <nav className="hidden lg:flex items-center h-full">
            {navItems.map((item, index) => {
              const isActive =
                location.pathname === item.path ||
                (item.children &&
                  item.children.some(
                    (child) => location.pathname === child.path.split("#")[0]
                  ));
              return (
                <div
                  key={item.label}
                  className="pointer-events-auto relative h-full w-[140px] xl:w-[150px] bg-white flex justify-center"
                  ref={(el) => { segmentRefs.current[index + 1] = el; }}
                  onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.path}
                    className={`h-full w-full px-2 text-sm font-bold tracking-wide transition-colors duration-300 flex items-center justify-center whitespace-nowrap ${isActive
                      ? "text-black bg-[#FFF200]"
                      : "text-black hover:bg-[#FFF200] hover:text-black"
                      }`}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown
                        className={`ml-1 w-3 h-3 transition-transform duration-300 ${activeDropdown === item.label ? "rotate-180" : ""
                          }`}
                      />
                    )}
                  </Link>

                  {item.children && (
                    <div
                      ref={(el) => { dropdownRefs.current[item.label] = el; }}
                      className="absolute top-[calc(100%+0.5rem)] left-1/2 -translate-x-1/2 w-56 bg-white shadow-2xl overflow-hidden z-50 opacity-0 invisible rounded-xl"
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

          <div
            className="pointer-events-auto h-full bg-white flex items-center px-6 lg:pr-0 flex-1 justify-end"
            ref={(el) => { segmentRefs.current[6] = el; }}
          >
            <Link
              to="/contact"
              className={`hidden lg:inline-flex h-full items-center justify-center px-8 text-sm font-bold transition-colors duration-300 ${location.pathname === "/contact"
                ? "bg-[#FFF200] text-black"
                : "bg-black text-white hover:bg-[#FFF200] hover:text-black"
                }`}
            >
              Contact Us
            </Link>

            <button
              onClick={toggleMobileMenu}
              className="lg:hidden flex flex-col justify-center items-end gap-[5px] w-10 h-10 focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <span
                ref={hamTopRef}
                className="block h-[2px] w-6 bg-black rounded-full"
                style={{ transformOrigin: "right center" }}
              />
              <span
                ref={hamMidRef}
                className="block h-[2px] w-7 bg-black rounded-full"
                style={{ transformOrigin: "right center" }}
              />
              <span
                ref={hamBotRef}
                className="block h-[2px] w-6 bg-black rounded-full"
                style={{ transformOrigin: "right center" }}
              />
            </button>
          </div>
        </div>
      </header>

      <div
        ref={mobileOverlayRef}
        className="fixed inset-0 bg-black/20 backdrop-blur-md z-40 lg:hidden pointer-events-auto"
        style={{ display: "none", opacity: 0 }}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* ── Mobile Slide Panel (Floating Blocks) ──────────────────────────── */}
      <div
        ref={mobilePanelRef}
        className="fixed inset-y-0 right-0 z-50 lg:hidden flex flex-col items-end"
        style={{ display: "none", pointerEvents: "none" }}
      >
        {/* Coherent Box Container: 75% width, 100% height, NO GLOBAL BG */}
        <div className="w-[75vw] max-w-md h-full pointer-events-auto flex flex-col">

          {/* Panel header: close only - aligned with hamburger position */}
          <div
            id="mobile-menu-header"
            className="flex items-center justify-end px-6 h-20 bg-white border-b border-gray-100"
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="relative w-10 h-10 flex flex-col justify-center items-end"
              aria-label="Close menu"
            >
              <span ref={closeTopRef} className="absolute w-6 h-[2px] bg-black rounded-full" style={{ transform: "rotate(0deg)" }} />
              <span ref={closeBotRef} className="absolute w-6 h-[2px] bg-black rounded-full" style={{ transform: "rotate(0deg)" }} />
            </button>
          </div>

          {/* Nav links: distributed to fill height, individual white blocks */}
          <nav className="flex-1 flex flex-col">
            {mobileDisplayItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <div
                  key={item.label}
                  ref={(el) => { mobileLinkRefs.current[index] = el; }}
                  className="flex-1"
                >
                  <Link
                    to={item.path}
                    className={`flex items-center justify-center w-full h-full text-center text-lg font-bold transition-all duration-300 ${isActive
                      ? "bg-[#FFF200] text-black"
                      : "bg-white text-black border-b border-gray-50 hover:bg-[#FFF200]/20"
                      }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* Contact CTA Segment */}
          <div id="mobile-menu-footer" className="h-24">
            <Link
              to="/contact"
              className={`flex items-center justify-center w-full h-full text-center text-lg font-bold transition-all duration-300 ${location.pathname === "/contact"
                ? "bg-[#FFF200] text-black"
                : "bg-black text-white hover:bg-[#FFF200]/80 hover:text-black"
                }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;