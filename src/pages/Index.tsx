import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, FlaskConical, Microscope, Brain, HeartPulse, Leaf, Newspaper, Dna, Beaker, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionReveal from "@/components/SectionReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/hero-science.jpg";
import labImg from "@/assets/lab-research.jpg";
import facilityImg from "@/assets/facility.jpg";
import moleculesImg from "@/assets/molecules.jpg";
import plantsImg from "@/assets/herbal8.jpg";

const heroSlides = [
  { image: heroImg, subtitle: "Droga Research & Development Center", title: "Engineering the Future of", highlight: "Human Health", desc: "Translating complex biological data into scalable pharmaceutical solutions through innovative research and scientific excellence." },
  { image: facilityImg, subtitle: "State-of-the-Art Infrastructure", title: "World-Class", highlight: "Research Facilities", desc: "9,951 sq.m of cutting-edge laboratories, bioequivalence units, and quality control centers at Kilinto Industrial Park." },
  { image: moleculesImg, subtitle: "Innovation & Discovery", title: "Pioneering", highlight: "Drug Discovery", desc: "Natural and herbal pharmaceutical research with modern scientific methodologies for a healthier tomorrow." },
  { image: plantsImg, subtitle: "Sustainable Science", title: "Harnessing Nature's", highlight: "Healing Power", desc: "Leveraging Ethiopia's indigenous medicinal plants and biodiversity for innovative health solutions." },
];

const focusAreas = [
  { icon: FlaskConical, title: "Bioequivalence & Analytics", desc: "GCP-compliant bioequivalence studies and comprehensive analytical testing services." },
  { icon: Microscope, title: "Drug Discovery", desc: "Natural and herbal drug discovery, formulation development, and preclinical evaluation." },
  { icon: Brain, title: "Food & Nutraceuticals", desc: "Nutrition-based product R&D for health, wellness, and preventive care." },
  { icon: HeartPulse, title: "Cosmetic & Detergent R&D", desc: "Formulation of medicated and non-medicated cosmetic and hygiene products." },
  { icon: Leaf, title: "Medicinal Plant Research", desc: "Sustainable cultivation and scientific study of indigenous medicinal plants." },
  { icon: Newspaper, title: "Quality Control Testing", desc: "Advanced analytical instrumentation for pharmaceutical quality assurance." },
];

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
        {/* Background Images with Crossfade Effect */}
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
        
        {/* Dark Overlay - Made darker for better white text visibility */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Content - Aligned with Logo (Left) */}
        <div className="relative w-full z-1">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl">
              {/* Subtitle - White color */}
              <span className="inline-block text-xs font-black uppercase tracking-[0.1em] text-white mb-1">
                {slide.subtitle}
              </span>
              {/* Title - Original colors */}
              <h1 className="font-heading text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-[0.95] text-white">
                {slide.title}
                <span className="text-highlight"> {slide.highlight}</span>
              </h1>
              {/* Description - White with opacity */}
              <p className="mt-6 md:mt-8 text-base md:text-xl font-body text-white/80 max-w-xl leading-relaxed">
                {slide.desc}
              </p>
              <div className="mt-8 md:mt-10 flex flex-wrap gap-4">
                <Button 
                  variant="default" 
                  size="lg" 
                  asChild 
                  className="bg-highlight text-black hover:bg-highlight/90 transition-all duration-300 border-none"
                >
                  <Link to="/droga-science">Explore Research</Link>
                </Button>
                
                <Button 
                  variant="default" 
                  size="lg" 
                  asChild 
                  className="bg-transparent border border-white text-white hover:bg-white hover:text-black transition-all duration-300"
                >
                  <Link to="/droga-science/projects">View Projects</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Slide indicators */}
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
            <span className="overline-dark">Research Impact</span>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight mt-4 text-foreground">
              Measurable Results
            </h2>
          </SectionReveal>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <AnimatedCounter end={42} suffix="+" label="Research Projects" />
            <AnimatedCounter end={5} suffix="+" label="Grants Funded" />
            <AnimatedCounter end={30} suffix="+" label="Research Partners" />
            <AnimatedCounter end={9951} suffix="" label="Sq.m R&D Facility" prefix="" />
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="section-padding">
        <div className="container-grid">
          <SectionReveal>
            <span className="overline-dark">What We Do</span>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight mt-4 text-foreground">
              Research Focus Areas
            </h2>
          </SectionReveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group p-8 bg-card card-shadow hover:bg-highlight border-t-4 border-transparent hover:border-foreground transition-all duration-300 rounded-sm cursor-pointer"
              >
                <area.icon className="w-8 h-8 text-highlight group-hover:text-foreground mb-6 transition-colors duration-300" strokeWidth={1.5} />
                <h3 className="font-heading text-xl font-bold text-foreground">{area.title}</h3>
                <p className="mt-3 text-sm font-body text-muted-foreground group-hover:text-foreground/70 leading-relaxed transition-colors duration-300">{area.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Active Projects - Visual Cards */}
      <section className="section-padding bg-surface-subtle">
        <div className="container-grid">
          <SectionReveal>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-black">Featured</span>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight mt-4 text-black">
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
                      <span className="text-xs font-heading font-bold uppercase tracking-wider text-black transition-colors duration-300">{project.category}</span>
                      <span className={`px-2 py-0.5 rounded-sm text-[10px] font-bold uppercase tracking-wider transition-colors duration-300 ${
                        project.status === "Active" 
                          ? "bg-black/10 text-black group-hover:bg-white group-hover:text-black" 
                          : "bg-black/5 text-black/60 group-hover:bg-white/20 group-hover:text-black"
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <h3 className="font-heading text-lg font-bold text-black transition-colors duration-300">{project.title}</h3>
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
              <span className="overline-dark">Stay Updated</span>
              <h2 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight mt-4 text-foreground">
                Latest News
              </h2>
            </SectionReveal>
            <Link to="/news" className="hidden md:flex items-center gap-2 text-sm font-heading font-medium text-foreground hover:text-highlight transition-colors">
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
                  <span className="text-xs font-body text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">{item.date}</span>
                  <h3 className="font-heading text-xl font-bold mt-2 text-foreground group-hover:text-black transition-colors duration-300">{item.title}</h3>
                  <p className="mt-2 text-sm font-body text-muted-foreground group-hover:text-foreground/70 leading-relaxed transition-colors duration-300">{item.excerpt}</p>
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
            <p className="mt-6 text-base md:text-lg font-body text-foreground/70 max-w-2xl mx-auto">
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