import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
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

// CountUp component (unchanged)
const CountUp = ({ end, suffix = "", label, prefix = "" }: { end: number; suffix?: string; label: string; prefix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
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
      return () => clearInterval(timer);
    }
  }, [isInView, end]);

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
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 800], [0, 300]);
  const facilityY = useTransform(scrollY, [2000, 3500], [0, -150]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Slideshow */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          {heroSlides.map((s, idx) => (
            <motion.div
              key={idx}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: idx === currentSlide ? 1 : 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <img
                src={s.image}
                alt={`Slide ${idx + 1}`}
                className="w-full h-full object-cover"
                style={{ y: heroY }}
              />
            </motion.div>
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
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <CountUp end={42} suffix="+" label="Research Projects" />
            <CountUp end={5} suffix="+" label="Grants Funded" />
            <CountUp end={30} suffix="+" label="Research Partners" />
            <CountUp end={9951} suffix="" label="Sq.m R&D Facility" prefix="" />
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
                <motion.div 
                  key={pillar.title}
                  className={`relative flex flex-col md:flex-row md:items-center md:justify-between mb-8 md:mb-10 ${isEven ? '' : 'md:flex-row-reverse'}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
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
                    <motion.div 
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.3 }}
                      className="group bg-white/5 backdrop-blur-sm border border-white/10 p-5 rounded-xl shadow-md transition-all duration-300 hover:bg-highlight cursor-pointer"
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
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Active Projects */}
      <section className="section-padding bg-surface-subtle">
        <div className="container-grid">
          <SectionReveal>
            <span className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-black">Featured</span>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight mt-4 text-black text-center">
              Active Projects
            </h2>
          </SectionReveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeProjects.map((project, i) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  className="group grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-0 bg-card rounded-sm overflow-hidden cursor-pointer hover:bg-highlight transition-all duration-300"
                >
                  <div className="relative aspect-video sm:aspect-auto overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm md:text-base font-heading font-bold uppercase tracking-wider text-black transition-colors duration-300 group-hover:text-black">
                        {project.category}
                      </span>
                      <span className={`px-2 py-0.5 rounded-sm text-[10px] md:text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${
                        project.status === "Active" 
                          ? "bg-black/10 text-black group-hover:bg-white group-hover:text-black" 
                          : "bg-black/5 text-black/60 group-hover:bg-white/20 group-hover:text-black"
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <h3 className="font-heading text-lg font-bold text-black transition-colors duration-300 group-hover:text-black">
                      {project.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <Button variant="hero" size="lg" asChild>
              <Link to="/droga-science/projects">View All Projects <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Facility Parallax */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <motion.img
          src={facilityImg}
          alt="Research facility"
          className="w-full h-[130%] object-cover absolute -top-[15%]"
          style={{ y: facilityY }}
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
              <Link to="/droga-science#labs">Explore Facilities</Link>
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
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group cursor-pointer overflow-hidden rounded-sm bg-card transition-all duration-300 hover:bg-highlight"
              >
                <div className="aspect-[16/10] bg-surface-subtle overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 group-hover:bg-highlight transition-colors duration-300">
                  <span className="text-sm md:text-base font-body text-muted-foreground group-hover:text-black/80 transition-colors duration-300">{item.date}</span>
                  <h3 className="font-heading text-xl font-bold mt-2 text-foreground group-hover:text-black transition-colors duration-300">{item.title}</h3>
                  <p className="mt-2 text-base font-body text-muted-foreground group-hover:text-black/80 leading-relaxed transition-colors duration-300">{item.excerpt}</p>
                </div>
              </motion.article>
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