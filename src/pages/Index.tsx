import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  ArrowRight, FlaskConical, Microscope, Brain, HeartPulse, Leaf, Newspaper, 
  Dna, Beaker, Zap, Activity, Pill, Apple, Droplet, ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionReveal from "@/components/SectionReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/hero-science.jpg";
import labImg from "@/assets/lab-research.jpg";
import facilityImg from "@/assets/facility.jpg";
import moleculesImg from "@/assets/molecules.jpg";
import plantsImg from "@/assets/herbal8.jpg";

gsap.registerPlugin(ScrollTrigger);

// CountUp component (unchanged)
const CountUp = ({ end, suffix = "", label, prefix = "" }: { end: number; suffix?: string; label: string; prefix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ref.current,
      start: "top 90%",
      once: true,
      onEnter: () => {
        let start = 0;
        const duration = 2000;
        const step = Math.ceil(end / (duration / 16));
        const timer = setInterval(() => {
          start += step;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(start);
          }
        }, 16);
      }
    });
  }, { scope: ref });

  return (
    <div ref={ref} className="text-center">
      <div className="font-heading text-4xl md:text-5xl font-bold text-foreground">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="mt-2 text-sm font-body text-muted-foreground uppercase tracking-wider">{label}</div>
    </div>
  );
};

// Hero slides data
const heroSlides = [
  { image: heroImg, subtitle: "Droga Research & Development Center", title: "Engineering the Future of", highlight: "Human Health", desc: "Translating complex biological data into scalable pharmaceutical solutions through innovative research and scientific excellence." },
  { image: facilityImg, subtitle: "State-of-the-Art Infrastructure", title: "World-Class", highlight: "Research Facilities", desc: "9,951 sq.m of cutting-edge laboratories, bioequivalence units, and quality control centers at Kilinto Industrial Park." },
  { image: moleculesImg, subtitle: "Innovation & Discovery", title: "Pioneering", highlight: "Drug Discovery", desc: "Natural and herbal pharmaceutical research with modern scientific methodologies for a healthier tomorrow." },
  { image: plantsImg, subtitle: "Sustainable Science", title: "Harnessing Nature's", highlight: "Healing Power", desc: "Leveraging Ethiopia's indigenous medicinal plants and biodiversity for innovative health solutions." },
];

// Core Research Pillars data (unchanged)
const pillarCards = [
  {
    icon: FlaskConical,
    title: "Bioequivalence & Analytics",
    summary: "GCP-compliant bioequivalence studies and comprehensive analytical testing services.",
    details: [
      {
        heading: "Bioequivalence Studies",
        items: [
          "GCP‑compliant clinical unit with housing capacity & ICU",
          "Medical laboratory for sample processing",
          "Bioanalytical laboratory: biological matrix analysis, bioavailability, PK studies, method development"
        ]
      },
      {
        heading: "Physicochemical Analysis",
        items: [
          "Raw material identification", "Purity determination (API & excipients)", "Assay",
          "Dissolution testing", "Disintegration testing", "Hardness & friability",
          "Particle size analysis", "Moisture content", "Stability studies"
        ]
      }
    ]
  },
  {
    icon: Microscope,
    title: "Drug Discovery",
    summary: "Natural and herbal drug discovery, formulation development, and preclinical evaluation.",
    details: [
      {
        heading: "Formulation Development",
        items: [
          "Solid oral dosage forms", "Oral liquid dosage forms",
          "Semi‑solids & injectables", "Herbal medicine formulations",
          "Solubility & stability enhancement", "Controlled release technologies"
        ]
      },
      {
        heading: "Research Laboratory",
        items: [
          "Bioactive compound screening", "Extraction & characterization",
          "Preclinical evaluation", "Mechanism of action studies",
          "Safety & efficacy assessments", "End‑to‑end drug discovery"
        ]
      }
    ]
  },
  {
    icon: Apple,
    title: "Food & Nutraceuticals",
    summary: "Nutrition-based product R&D for health, wellness, and preventive care.",
    details: [
      {
        heading: "Key Activities",
        items: [
          "Raw material evaluation & ingredient standardization",
          "Formulation development for functional foods",
          "Stability & safety assessment",
          "Volatile & fixed oil processing",
          "Cross‑disciplinary collaboration (pharmacy + food science)"
        ]
      }
    ]
  },
  {
    icon: Droplet,
    title: "Cosmetic & Detergent R&D",
    summary: "Formulation of medicated and non-medicated cosmetic and hygiene products.",
    details: [
      {
        heading: "Product Range",
        items: [
          "Soaps & face washes", "Creams & lotions", "Serums & hair oils",
          "Hair growth serums", "Antiseptic formulations",
          "Pilot‑scale development & process standardization"
        ]
      }
    ]
  }
];

// Active Projects data
const activeProjects = [
  { icon: Dna, title: "Bioactive Compound Screening", category: "Biotechnology", status: "Active", image: moleculesImg },
  { icon: Beaker, title: "Oral Dispersible Tablet Formulation", category: "Medicine", status: "Active", image: labImg },
  { icon: Leaf, title: "Spirulina Nutraceutical Research", category: "Public Health", status: "Active", image: plantsImg },
  { icon: Zap, title: "Diabetic Foot Care Emollient", category: "Medicine", status: "Completed", image: facilityImg },
];

const newsItems = [
  { title: "New Bioequivalence Study Center Opens", date: "March 2026", excerpt: "State-of-the-art facility at Kilinto Industrial Park begins operations.", image: facilityImg },
  { title: "DRG Grant Applications Now Open", date: "January 2026", excerpt: "Droga Research Grant accepting proposals across pharmaceutical sciences.", image: labImg },
  { title: "Medicinal Plant Nursery Established", date: "December 2025", excerpt: "Butajira nursery to cultivate indigenous medicinal plant species.", image: plantsImg },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Hero Parallax
    gsap.to(".hero-img", {
      y: 300,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });

    // Facility Parallax
    gsap.to(".facility-parallax-img", {
      y: -150,
      ease: "none",
      scrollTrigger: {
        trigger: ".facility-parallax-section",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });

    // Pillar Cards Reveal
    gsap.utils.toArray<HTMLElement>('.pillar-card').forEach((card, i) => {
      gsap.fromTo(card, 
        { autoAlpha: 0, y: 30 },
        { 
          autoAlpha: 1, y: 0, duration: 0.7, delay: i % 2 === 0 ? 0 : 0.1, ease: "power2.out",
          scrollTrigger: { trigger: card, start: "top 85%", once: true }
        }
      );
    });

    // Projects Reveal
    gsap.utils.toArray<HTMLElement>('.project-card').forEach((card) => {
      gsap.fromTo(card,
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1, y: 0, duration: 0.8, ease: "power2.out",
          scrollTrigger: { trigger: card, start: "top 85%", once: true }
        }
      );
    });

    // News Reveal
    gsap.utils.toArray<HTMLElement>('.news-card').forEach((card, i) => {
      gsap.fromTo(card,
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1, y: 0, duration: 0.6, delay: i * 0.1, ease: "power2.out",
          scrollTrigger: { trigger: card, start: "top 90%", once: true }
        }
      );
    });
  }, { scope: containerRef });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <div className="min-h-screen bg-background" ref={containerRef}>
      <Navbar />

      {/* Hero Slideshow */}
      <section className="relative h-screen flex items-center overflow-hidden hero-section">
        <div className="absolute inset-0 bg-black">
          {heroSlides.map((s, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${idx === currentSlide ? "opacity-100" : "opacity-0"}`}
            >
              <img
                src={s.image}
                alt={`Slide ${idx + 1}`}
                className="w-full h-full object-cover hero-img"
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative w-full z-1">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl">
              <span className="inline-block text-sm md:text-base font-black uppercase tracking-[0.1em] text-white mb-1">
                {slide.subtitle}
              </span>
              <h1 className="font-heading text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-[0.95] text-white">
                {slide.title}
                <span className="text-highlight"> {slide.highlight}</span>
              </h1>
              <p className="mt-6 md:mt-8 text-lg md:text-xl font-body text-white/80 max-w-xl leading-relaxed">
                {slide.desc}
              </p>
              <div className="mt-8 md:mt-10 flex flex-wrap gap-4">
                <Button variant="default" size="lg" asChild className="bg-highlight text-black hover:bg-highlight/90 transition-all duration-300 border-none">
                  <Link to="/droga-science">Explore Research</Link>
                </Button>
                <Button variant="default" size="lg" asChild className="bg-transparent border border-white text-white hover:bg-white hover:text-black transition-all duration-300">
                  <Link to="/droga-science/projects">View Projects</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-6 md:left-1/2 md:-translate-x-1/2 flex gap-3 z-10">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === currentSlide ? "w-10 bg-highlight" : "w-4 bg-white/30"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Research Impact Stats */}
      <section className="section-padding bg-surface-subtle">
        <div className="container-grid">
          <SectionReveal>
            <span className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-muted-foreground">Research Impact</span>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight mt-4 text-foreground text-center">
              Measurable Results
            </h2>
          </SectionReveal>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10">
            <CountUp end={12} suffix="+" label="Projects" />
            <CountUp end={17} suffix="+" label="Research Partners" />
            <CountUp end={5} suffix="" label="Grant Funded" />
            <CountUp end={300} suffix=" sq.m" label="Analytical Lab Facility" />
            <CountUp end={9951} suffix=" sq.m" label="R&D Center Facility" />
          </div>
        </div>
      </section>

      {/* Our Core Research Pillars - Fully responsive timeline */}
      <section className="section-padding">
        <div className="container-grid">
          <SectionReveal>
            <span className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-muted-foreground">
              In‑Depth Capabilities
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight mt-4 text-foreground text-center">
              Our Core Research Pillars
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-center">
              End‑to‑end services spanning bioequivalence, drug discovery, nutraceuticals, and cosmetic science.
            </p>
          </SectionReveal>

          {/* Timeline container - responsive */}
          <div className="relative max-w-5xl mx-auto mt-16">
            {/* Vertical line - hidden on mobile */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300/30 hidden md:block"></div>
            
            {pillarCards.map((pillar, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={pillar.title}
                  className={`relative flex flex-col md:flex-row md:items-center md:justify-between mb-8 md:mb-10 pillar-card invisible ${isEven ? '' : 'md:flex-row-reverse'}`}
                >
                  {/* Side title - hidden on mobile, visible on desktop */}
                  <div className={`hidden md:flex w-5/12 ${isEven ? 'justify-end' : 'justify-start'}`}>
                    <div className="text-right md:text-left">
                      <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground">
                        {pillar.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Center dot - hidden on mobile */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-highlight rounded-full border-4 border-background shadow-md z-10 hidden md:block"></div>
                  
                  {/* Content card - full width on mobile, half on desktop */}
                  <div className="w-full md:w-5/12">
                    <div 
                      className="group bg-white/5 backdrop-blur-sm border border-white/10 p-5 rounded-xl shadow-md transition-all duration-300 hover:bg-highlight hover:-translate-y-1.5 cursor-pointer"
                    >
                      <pillar.icon className="w-8 h-8 text-highlight mb-3 transition-colors duration-300 group-hover:text-black" strokeWidth={1.5} />
                      {/* Title always visible on mobile, hidden on desktop (since side title shows) */}
                      <h3 className="font-heading text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-black md:hidden">
                        {pillar.title}
                      </h3>
                      <p className="mt-2 text-base text-muted-foreground transition-colors duration-300 group-hover:text-black">
                        {pillar.summary}
                      </p>
                      <div className="mt-4 space-y-3">
                        {pillar.details.map((detail, i) => (
                          <div key={i}>
                            <h4 className="font-heading text-base font-bold text-foreground mb-1 transition-colors duration-300 group-hover:text-black">
                              {detail.heading}
                            </h4>
                            <ul className="space-y-1">
                              {detail.items.map((item, j) => (
                                <li key={j} className="flex items-start gap-2 text-base text-muted-foreground transition-colors duration-300 group-hover:text-black">
                                  <span className="text-highlight group-hover:text-black">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section-padding bg-surface-subtle">
        <div className="container-grid">
          <SectionReveal>
            <span className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-black">Featured</span>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight mt-4 text-black text-center">
              Projects
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-4xl mx-auto text-center leading-relaxed">
              Our projects focus on the expansion and scale up of inhouse pharmaceutical and herbal product developments, as well as the expansion of research & development laboratories, ensuring a seamless transition from research to commercial manufacturing while maintaining quality and regulatory compliance.
            </p>
          </SectionReveal>

          <div className="mt-20 space-y-24 md:space-y-32">
            {/* Project 1 */}
            <div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center project-card invisible"
            >
              <div className="order-2 lg:order-1 space-y-6">
                <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                  Project 1. Droga Research and Development Center
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Situated on 9,951 sq.m of land in Kilinto Industrial Park, our state-of-the-art center is designed to advance research, development, and quality testing for the pharmaceutical, academic, research, cosmetic, and food & beverage industries.
                </p>
                <div>
                  <h4 className="font-heading text-xl font-bold text-foreground mb-2">Our Aim</h4>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    The center is dedicated to supporting local innovation and reducing dependence on imported APIs, excipients, formulations, and other raw materials by leveraging the country's indigenous knowledge and natural resources.
                  </p>
                </div>
                <div>
                  <h4 className="font-heading text-xl font-bold text-foreground mb-2">Our Facilities</h4>
                  <p className="text-base text-muted-foreground mb-3">The center will house:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-highlight mt-2 flex-shrink-0" />
                      <span className="text-base text-muted-foreground">Research Laboratories for drug discovery, food & nutrition, and cosmetic product development</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-highlight mt-2 flex-shrink-0" />
                      <span className="text-base text-muted-foreground">Bioequivalence Study Units to support preclinical and clinical evaluation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-highlight mt-2 flex-shrink-0" />
                      <span className="text-base text-muted-foreground">Quality Control Testing Units for reliable and regulatory-compliant analysis</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-highlight mt-2 flex-shrink-0" />
                      <span className="text-base text-muted-foreground">Formulation and Development Units for scaling innovations from concept to market-ready products</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-base text-muted-foreground leading-relaxed italic border-l-4 border-highlight pl-4">
                    With these integrated facilities, the center aims to be a hub of scientific excellence, innovation, and self-reliance in pharmaceuticals, nutraceuticals, cosmetics, and functional foods.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2 rounded-2xl overflow-hidden shadow-2xl relative aspect-[4/3] group">
                <img src={facilityImg} alt="Droga Research and Development Center" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            </div>

            {/* Project II */}
            <div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center project-card invisible"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl relative aspect-[4/3] group">
                <img src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=1200" alt="Droga Oil Manufacturing Plant" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="space-y-6">
                <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                  Project II. Droga Oil Manufacturing Plant
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A 1,000 sq.m processing facility is being established to harness the health promoting potential of fixed and volatile oils. The facility is designed to process these natural oils at scale, ensuring high-quality standards suitable for both local markets and export.
                </p>
                <div>
                  <h4 className="font-heading text-xl font-bold text-foreground mb-3">Purpose and Capacity</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-highlight mt-2 flex-shrink-0" />
                      <span className="text-base text-muted-foreground">Can process 792.064 ton per annum</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-highlight mt-2 flex-shrink-0" />
                      <span className="text-base text-muted-foreground">Processing of fixed and volatile oils with recognized health benefits</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-highlight mt-2 flex-shrink-0" />
                      <span className="text-base text-muted-foreground">Support for local and international distribution of natural health products</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-highlight mt-2 flex-shrink-0" />
                      <span className="text-base text-muted-foreground">Integration with the R&D wing to ensure quality, safety, and efficacy from raw material to finished product</span>
                    </li>
                  </ul>
                  <p className="mt-5 text-base text-muted-foreground leading-relaxed italic border-l-4 border-highlight pl-4">
                    This facility aligns with our mission to leverage indigenous resources, create value-added products, and contribute to both public health and economic growth.
                  </p>
                </div>
              </div>
            </div>

            {/* Project III */}
            <div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center project-card invisible"
            >
              <div className="order-2 lg:order-1 space-y-6">
                <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                  Project III. Droga Soap Manufacturing Plant
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The Droga Soap and Cosmetics Manufacturing Plant is an upcoming initiative designed to strengthen local production of 100% natural skincare solutions. The facility will serve as a hub for innovation in natural cosmetics, reducing reliance on imports while addressing common skin concerns with effective, botanically infused products.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  One branch of the initiative, the Droga Soap Manufacturing Plant, will occupy 200 m² and focus on producing two distinct soap varieties which are crafted from natural ingredients and are enriched with beneficial botanicals.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  With an annual production capacity of 51,840 pieces of each type, the project aims to supply for the local demand and promote healthier skin through sustainable, natural formulations. By combining modern manufacturing with traditional herbal wisdom, the Droga Soap Plant will contribute to community well-being, job creation, and the growth of Ethiopia's personal care industry.
                </p>
              </div>
              <div className="order-1 lg:order-2 rounded-2xl overflow-hidden shadow-2xl relative aspect-[4/3] group">
                <img src="https://images.unsplash.com/photo-1600857062241-98e5dba7f214?auto=format&fit=crop&q=80&w=1200" alt="Droga Soap Manufacturing Plant" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            </div>

            {/* Project IV */}
            <div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center project-card invisible"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl relative aspect-[4/3] group">
                <img src="https://images.unsplash.com/photo-1595826978160-c32f8319f395?auto=format&fit=crop&q=80&w=1200" alt="Butajira Rosemary Manufacturing Plant" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="space-y-6">
                <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                  Project IV. Butajira Rosmary Manufacturing Plant
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The Butajira Rosemary Processing Plant aims to improve the livelihood of farmers in Meskan Woreda, Eastern Gurage Zone, through sustainable rosemary cultivation and market integration. The initiative covers 20 hectares of investment land and 40 hectares of partner farms, engaging 160 local farmers in modern rosemary production supported by training, technology transfer, and cooperative formation.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  With a total investment of ETB 77.24 million, the project focuses on producing high-quality rosemary for essential oil extraction used in pharmaceutical, cosmetic, and food industries. It combines scientific cultivation practices with irrigation technology to yield over 20,000 quintals of rosemary twice a year, ensuring consistent supply and export potential.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed italic border-l-4 border-highlight pl-4">
                  Beyond its economic impact, the project promotes environmental sustainability, job creation (11 permanent and 60 temporary positions), and community empowerment. By linking farmers to formal markets and improving production standards, Droga Pharma PLC is positioning Meskan Woreda as a center of excellence for essential oil-bearing crops and contributing to Ethiopia's growing natural product industry.
                </p>
              </div>
            </div>
          </div>

          <div
            className="mt-16 text-center project-card invisible"
          >
            <Button variant="hero" size="lg" asChild>
              <Link to="/droga-science/projects">View All Projects <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Facility Parallax */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden facility-parallax-section">
        <img
          src={facilityImg}
          alt="Research facility"
          className="w-full h-[130%] object-cover absolute -top-[15%] facility-parallax-img"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <SectionReveal className="text-center max-w-2xl px-6">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-white tracking-tight">
              World-Class Facilities
            </h2>
            <p className="mt-6 text-base md:text-lg font-body text-white/70">
              Our integrated research campus houses laboratories, bioequivalence units, and quality control centers.
            </p>
            <Button variant="default" size="lg" className="mt-8 bg-white text-black hover:bg-white/90" asChild>
              <Link to="/about#labs">Explore Facilities</Link>
            </Button>
          </SectionReveal>
        </div>
      </section>

      {/* Latest News */}
      <section className="section-padding">
        <div className="container-grid">
          <div className="flex items-end justify-between">
            <SectionReveal>
              <span className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-muted-foreground">Stay Updated</span>
              <h2 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight mt-4 text-foreground">
                Latest News
              </h2>
            </SectionReveal>
            <Link to="/news" className="hidden md:flex items-center gap-2 text-sm md:text-base font-heading font-medium text-foreground hover:text-highlight transition-colors">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsItems.map((item, i) => (
              <article
                key={item.title}
                className="group cursor-pointer overflow-hidden rounded-sm bg-card transition-all duration-300 hover:bg-highlight hover:-translate-y-1.5 news-card invisible"
              >
                <div className="aspect-[16/10] bg-surface-subtle overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 group-hover:bg-highlight transition-colors duration-300">
                  <span className="text-sm md:text-base font-body text-muted-foreground group-hover:text-black/80 transition-colors duration-300">{item.date}</span>
                  <h3 className="font-heading text-xl font-bold mt-2 text-foreground group-hover:text-black transition-colors duration-300">{item.title}</h3>
                  <p className="mt-2 text-base font-body text-muted-foreground group-hover:text-black/80 leading-relaxed transition-colors duration-300">{item.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-surface-subtle">
        <div className="container-grid text-center">
          <SectionReveal>
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              Partner with Us in Research
            </h2>
            <p className="mt-6 text-lg font-body text-foreground/70 max-w-2xl mx-auto">
              Join our growing network of researchers and institutions. Apply for the Droga Research Grant or explore collaboration opportunities.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button variant="default" size="lg" asChild>
                <Link to="/droga-science/grants">Apply for Grant</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </SectionReveal>
        </div>
      </section>

      <Footer /> 
    </div>
  );
};

export default Index;