import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-highlight text-foreground">
      <div className="container-grid px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand with Logo */}
          <div>
            <div className="flex flex-col items-center md:items-start gap-3 mb-4">
              <img 
                src={logo} 
                alt="Droga R&D Logo" 
                className="w-12 h-12 object-contain"
                referrerPolicy="no-referrer"
              />
              <h3 className="font-heading text-2xl font-bold">
                Droga <span className="font-black">R&D</span>
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-foreground/70 font-bold text-center md:text-left">
              Advancing pharmaceutical research and innovation through scientific excellence and collaboration.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xs font-black uppercase tracking-widest text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["About Us", "Services", "Droga Science", "News", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm font-bold text-foreground/70 hover:text-foreground transition-all duration-200"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Research */}
          <div>
            <h4 className="font-heading text-xs font-black uppercase tracking-widest text-foreground mb-6">Research</h4>
            <ul className="space-y-3">
              {["Grants", "Projects", "Publications", "Labs & Facilities"].map((link) => (
                <li key={link}>
                  <Link
                    to="/droga-science"
                    className="text-sm font-bold text-foreground/70 hover:text-foreground transition-all duration-200"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-xs font-black uppercase tracking-widest text-foreground mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm font-bold text-foreground/70">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                <span>rnd1@drogapharma.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm font-bold text-foreground/70">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                <span>info@drogapharma.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm font-bold text-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Abuare, Woreda 07, Arada Sub City, Addis Ababa, Ethiopia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-bold text-foreground/60">© 2026 Droga Research and Development Center. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="text-xs font-bold text-foreground/60 hover:text-foreground cursor-pointer transition-opacity">Privacy Policy</span>
            <span className="text-xs font-bold text-foreground/60 hover:text-foreground cursor-pointer transition-opacity">Terms of Use</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;