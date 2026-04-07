import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FlaskConical, BookOpen, Award, Building2, Beaker, Dna, Microscope, Leaf, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import moleculesImg from "@/assets/molecules.jpg";
import labImg from "@/assets/lab-research.jpg";
import facilityImg from "@/assets/facility.jpg";
import plantsImg from "@/assets/herbal8.jpg";

const pillars = [
  { icon: FlaskConical, title: "Drug Discovery", desc: "Natural and herbal pharmaceutical research with modern scientific methodologies." },
  { icon: BookOpen, title: "Food & Nutraceuticals", desc: "Nutrition-based products for health, wellness, and preventive care." },
  { icon: Award, title: "Cosmetic & Detergent", desc: "Scientific formulation of medicated and non-medicated personal care products." },
  { icon: Building2, title: "Bioequivalence", desc: "GCP-compliant studies for regulatory approval and quality assurance." },
];

const researchWings = [
  { icon: Dna, title: "Drug Discovery Wing", desc: "Focused on API identification, excipient characterization, and herbal medicine formulation from Ethiopia's rich botanical heritage.", image: moleculesImg, projects: 12 },
  { icon: Beaker, title: "Food & Nutrition Wing", desc: "Developing nutraceuticals, dietary supplements, and functional food products for improved public health outcomes.", image: plantsImg, projects: 8 },
  { icon: Microscope, title: "Cosmetics & Detergent Wing", desc: "Formulating medicated skincare, personal care, and hygiene products using natural and synthetic ingredients.", image: labImg, projects: 6 },
  { icon: Leaf, title: "Medicinal Plants Wing", desc: "Cultivating, studying, and extracting bioactive compounds from indigenous Ethiopian medicinal plants.", image: plantsImg, projects: 9 },
  { icon: Zap, title: "Quality Control Wing", desc: "Advanced analytical testing with HPLC, UV-Vis, FTIR for pharmaceutical and food product quality assurance.", image: facilityImg, projects: 7 },
];

const DrogaScience = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero with image */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <img src={moleculesImg} alt="Molecular research" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/70" />
        <div className="relative container-grid px-6 pb-20 z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-highlight">Innovation Hub</span>
            <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tighter text-surface-dark-foreground mt-4">
              Droga Science
            </h1>
            <p className="mt-6 text-lg text-surface-dark-foreground/70 max-w-xl font-body">
              Our integrated R&D ecosystem advancing pharmaceutical innovation through scientific rigor and collaboration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Scientific Pillars */}
      <section className="section-padding">
        <div className="container-grid">
          <SectionReveal>
            <span className="overline-dark">Our Pillars</span>
            <h2 className="font-heading text-4xl font-semibold tracking-tight mt-4 text-foreground">Scientific Pillars</h2>
          </SectionReveal>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group p-8 bg-card card-shadow hover:card-shadow-hover hover:bg-highlight border-t-4 border-transparent hover:border-foreground transition-all duration-300 rounded-sm"
              >
                <p.icon className="w-8 h-8 text-highlight group-hover:text-foreground mb-4 transition-colors duration-300" strokeWidth={1.5} />
                <h3 className="font-heading text-lg font-bold text-foreground">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground group-hover:text-foreground/70 leading-relaxed transition-colors duration-300">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Wings - Visually Rich */}
<section className="section-padding bg-surface-subtle">
  <div className="container-grid">
    <SectionReveal>
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-highlight">Research Ecosystem</span>
      <h2 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight mt-4 text-foreground">
        Research Wings
      </h2>
      <p className="mt-4 text-foreground/60 font-body max-w-2xl">
        Five specialized research divisions driving innovation across pharmaceutical, food, and cosmetic sciences.
      </p>
    </SectionReveal>

    <div className="mt-16 space-y-6">
      {researchWings.map((wing, i) => {
        const Icon = wing.icon;
        return (
          <motion.div
            key={wing.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            whileHover={{ y: -4, transition: { duration: 0.3 } }}
            className="group grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-0 bg-card rounded-sm overflow-hidden cursor-pointer hover:bg-highlight transition-all duration-300"
          >
            <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden">
              <img src={wing.image} alt={wing.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/20" />
              <motion.div
                className="absolute top-4 left-4 w-12 h-12 rounded-full bg-highlight flex items-center justify-center"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
              >
                <Icon className="w-6 h-6 text-black" strokeWidth={1.5} />
              </motion.div>
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center group-hover:bg-highlight transition-colors duration-300">
              <div className="flex items-center gap-3 mb-3">
                <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground group-hover:text-black transition-colors duration-300">{wing.title}</h3>
                <span className="px-3 py-1 bg-highlight/20 rounded-sm text-xs font-heading font-bold text-highlight group-hover:bg-black/20 group-hover:text-black transition-colors duration-300">{wing.projects} Projects</span>
              </div>
              <p className="text-sm font-body text-foreground/60 leading-relaxed max-w-lg group-hover:text-black/70 transition-colors duration-300">{wing.desc}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>

      {/* Stats */}
      <section className="section-padding bg-highlight">
        <div className="container-grid">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div className="text-left">
              <div className="font-heading text-5xl md:text-6xl font-bold tabular-nums text-foreground">5</div>
              <div className="mt-2 text-sm font-body text-foreground/60 uppercase tracking-widest font-bold">Research Wings</div>
            </div>
            <div className="text-left">
              <div className="font-heading text-5xl md:text-6xl font-bold tabular-nums text-foreground">42+</div>
              <div className="mt-2 text-sm font-body text-foreground/60 uppercase tracking-widest font-bold">Active Projects</div>
            </div>
            <div className="text-left">
              <div className="font-heading text-5xl md:text-6xl font-bold tabular-nums text-foreground">414K</div>
              <div className="mt-2 text-sm font-body text-foreground/60 uppercase tracking-widest font-bold">ETB Grants Awarded</div>
            </div>
            <div className="text-left">
              <div className="font-heading text-5xl md:text-6xl font-bold tabular-nums text-foreground">3</div>
              <div className="mt-2 text-sm font-body text-foreground/60 uppercase tracking-widest font-bold">Major Facilities</div>
            </div>
          </div>
        </div>
      </section>

      {/* Grant Opportunities */}
      <section className="section-padding bg-surface-subtle">
        <div className="container-grid grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SectionReveal>
            <span className="overline-dark">Funding</span>
            <h2 className="font-heading text-4xl font-semibold tracking-tight mt-4 text-foreground">
              Droga Research Grant
            </h2>
            <p className="mt-6 text-lg font-body text-muted-foreground leading-relaxed">
              DRG supports junior and senior researchers dedicated to improving human health through pharmaceutical research. We fund projects addressing real challenges with tangible impact potential.
            </p>
            <h4 className="font-heading text-sm font-bold uppercase tracking-widest text-foreground/60 mt-8 mb-4">Research Areas</h4>
            <ul className="space-y-2">
              {["API Discovery & Excipient Characterization", "Herbal Medicine", "Food Supplements & Nutraceuticals", "Formulation Development", "Cosmetics"].map((area) => (
                <li key={area} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-highlight rounded-full" />
                  <span className="text-sm font-body text-muted-foreground">{area}</span>
                </li>
              ))}
            </ul>
            <Button variant="hero" size="lg" className="mt-8" asChild>
              <Link to="/droga-science/grants">Apply for Grant</Link>
            </Button>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <div className="overflow-hidden rounded-sm">
              <img src={labImg} alt="Research in progress" className="w-full h-[450px] object-cover" />
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Labs & Facilities */}
      <section id="labs" className="section-padding">
        <div className="container-grid">
          <SectionReveal>
            <span className="overline-dark">Infrastructure</span>
            <h2 className="font-heading text-4xl font-semibold tracking-tight mt-4 text-foreground">Labs & Facilities</h2>
          </SectionReveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Research Laboratories", desc: "Drug discovery, food & nutrition, and cosmetic product development labs." },
              { title: "Bioequivalence Study Units", desc: "Clinical units, medical laboratories, and bioanalytical facilities." },
              { title: "Quality Control Units", desc: "HPLC, UV-Vis, FTIR and precision analytical instruments." },
              { title: "Formulation & Development", desc: "Pilot-scale development for scaling innovations to market-ready products." },
            ].map((lab, i) => (
              <SectionReveal key={lab.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  className="group p-8 bg-surface-subtle rounded-sm hover:bg-highlight transition-all duration-300 cursor-pointer"
                >
                  <h4 className="font-heading text-xl font-bold text-foreground">{lab.title}</h4>
                  <p className="mt-3 text-sm text-muted-foreground group-hover:text-foreground/70 leading-relaxed transition-colors duration-300">{lab.desc}</p>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DrogaScience;
