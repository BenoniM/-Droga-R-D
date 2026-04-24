import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useGSAP(() => {
    const footerSegments = gsap.utils.toArray<HTMLElement>('.footer-segment');
    if (footerSegments.length === 5) {
      const getFooterSegs = (indices: number[]) => indices.map(i => footerSegments[i]);
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".footer-section",
          start: "top 90%", // Start animating when footer enters screen
          end: "bottom 105%", // Finish slightly before actual bottom to guarantee perfect alignment
          scrub: 0.8,
        }
      });

      tl.to(getFooterSegs([2]), { y: 0, duration: 1, ease: "none" }, 0)
        .to(getFooterSegs([1, 3]), { y: 0, duration: 0.65, ease: "none" }, 0.35)
        .to(getFooterSegs([0, 4]), { y: 0, duration: 0.3, ease: "none" }, 0.7)
        .to(".footer-content", { autoAlpha: 1, duration: 0.15 }, 0.85);
    }
  }, []);

  return (
    <footer className="relative bg-white text-foreground overflow-hidden footer-section">
      {/* 5-segment background */}
      <div className="absolute inset-0 flex z-0">
        <div className="w-1/5 h-full bg-highlight translate-y-full footer-segment"></div>
        <div className="w-1/5 h-full bg-highlight translate-y-full footer-segment"></div>
        <div className="w-1/5 h-full bg-highlight translate-y-full footer-segment"></div>
        <div className="w-1/5 h-full bg-highlight translate-y-full footer-segment"></div>
        <div className="w-1/5 h-full bg-highlight translate-y-full footer-segment"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 py-12 md:py-16 footer-content invisible">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand with Logo - Centered on mobile, left on desktop */}
          <div className="text-center md:text-left">
            <div className="flex flex-col items-center md:items-start gap-3 mb-4">
              <img 
                src={logo} 
                alt="Droga R&D Logo" 
                className="w-14 h-14 object-contain"
                referrerPolicy="no-referrer"
              />
              <h3 className="font-heading text-2xl font-bold">
                Droga <span className="font-black">R&D</span>
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-foreground/70 font-medium text-center md:text-left max-w-xs mx-auto md:mx-0">
              Advancing pharmaceutical research and innovation through scientific excellence and collaboration.
            </p>
          </div>

          {/* Quick Links - Centered on mobile, left on desktop */}
          <div className="text-center md:text-left">
            <h4 className="font-heading text-xs font-black uppercase tracking-widest text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["About Us", "Services", "Droga Science", "News", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm font-medium text-foreground/70 hover:text-foreground transition-all duration-200 inline-block"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Research - Centered on mobile, left on desktop */}
          <div className="text-center md:text-left">
            <h4 className="font-heading text-xs font-black uppercase tracking-widest text-foreground mb-6">Research</h4>
            <ul className="space-y-3">
              {["Grants", "Projects", "Publications", "Labs & Facilities"].map((link) => (
                <li key={link}>
                  <Link
                    to="/droga-science"
                    className="text-sm font-medium text-foreground/70 hover:text-foreground transition-all duration-200 inline-block"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact - Centered on mobile, left on desktop */}
          <div className="text-center md:text-left">
            <h4 className="font-heading text-xs font-black uppercase tracking-widest text-foreground mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center justify-center md:justify-start gap-3 text-sm font-medium text-foreground/70">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                <span>rnd1@drogapharma.com</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3 text-sm font-medium text-foreground/70">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                <span>info@drogapharma.com</span>
              </li>
              <li className="flex items-start justify-center md:justify-start gap-3 text-sm font-medium text-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span className="text-left">Abuare, Woreda 07, Arada Sub City, Addis Ababa, Ethiopia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 md:mt-16 pt-8 border-t border-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-medium text-foreground/60 text-center md:text-left">
            © 2026 Droga Research and Development Center. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-xs font-medium text-foreground/60 hover:text-foreground cursor-pointer transition-opacity">
              Privacy Policy
            </span>
            <span className="text-xs font-medium text-foreground/60 hover:text-foreground cursor-pointer transition-opacity">
              Terms of Use
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;