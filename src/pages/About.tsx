import { motion } from "framer-motion";
import { Users, Target, Eye } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import TimeLineParent from "@/components/TimeLineParent";
import facilityImg from "@/assets/facility.jpg";
import labImg from "@/assets/lab-research.jpg";
import heroImg from "@/assets/hero-science.jpg";

const leaders = [
  { name: "Muluken Nigatu", role: " R&D Director", area: "Pharmaceutical Sciences" },
  { name: "Fortuna Kidane ", role: "Head of Drug Discovery", area: "Natural Products Chemistry" },
  { name: "Dr. Yonas Tadesse", role: "Head of Bioequivalence", area: "Clinical Pharmacology" },
  { name: "Dr. Helen Getachew", role: "Head of Food Sciences", area: "Nutritional Sciences" },
];

const timeline = [
  { year: "2020", event: "Droga R&D Center established" },
  { year: "2021", event: "First Droga Researc h Grant awarded" },
  { year: "2022", event: "Drug Discovery wing launched" },
  { year: "2023", event: "Bioequivalence Center announced" },
  { year: "2024", event: "Kilinto facility construction begins" },
  { year: "2025", event: "Medicinal Plant Nursery in Butajira" },
  { year: "2026", event: "Oil Manufacturing Plant operational" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero with image - Title moved to top and centered */}
      <section className="relative h-[70vh] flex items-start justify-center overflow-hidden">
        <motion.img
          src={facilityImg}
          alt="Droga R&D facility"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="relative container-grid px-6 pt-32 md:pt-40 z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-highlight">About Us</span>
            <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tighter text-surface-dark-foreground mt-4">Our Story</h1>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding">
        <div className="container-grid grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SectionReveal>
            <span className="overline-dark">Who We Are</span>
            <h2 className="font-heading text-4xl font-semibold tracking-tight mt-4 text-foreground">
              Droga Research and Development Center
            </h2>
            <p className="mt-6 text-lg font-body text-muted-foreground leading-relaxed">
              The Droga Research and Development Center is dedicated to advancing pharmaceutical research, innovation, and quality through scientific excellence. Situated on 9,951 sq.m of land in Kilinto Industrial Park, our state-of-the-art center supports local innovation and reduces dependence on imported pharmaceutical materials.
            </p>
            <p className="mt-4 text-lg font-body text-muted-foreground leading-relaxed">
              We leverage Ethiopia's indigenous knowledge and natural resources to develop affordable, effective health solutions for our communities.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <motion.div
              className="overflow-hidden rounded-sm"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <img src={labImg} alt="Research laboratory" className="w-full h-[400px] object-cover" />
            </motion.div>
          </SectionReveal>
        </div>
      </section>

      {/* Parallax divider */}
      <section className="relative h-[40vh] overflow-hidden">
        <motion.img
          src={heroImg}
          alt="Scientific research"
          className="w-full h-[130%] object-cover absolute -top-[15%]"
          initial={{ y: 0 }}
          whileInView={{ y: -40 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-foreground/50 flex items-center justify-center">
          <SectionReveal className="text-center max-w-2xl px-6">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-surface-dark-foreground tracking-tight">
              Advancing Science for a Healthier Tomorrow
            </h2>
          </SectionReveal>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="section-padding bg-surface-subtle">
        <div className="container-grid grid grid-cols-1 md:grid-cols-2 gap-12">
          <SectionReveal>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group p-10 bg-card card-shadow hover:bg-highlight rounded-sm h-full transition-all duration-300 cursor-pointer"
            >
              <Eye className="w-8 h-8 text-highlight group-hover:text-foreground mb-6 transition-colors duration-300" />
              <h3 className="font-heading text-2xl font-bold text-foreground">Our Vision</h3>
              <p className="mt-4 text-base font-body text-muted-foreground group-hover:text-foreground/70 leading-relaxed transition-colors duration-300">
                To be a hub of scientific excellence, innovation, and self-reliance in pharmaceuticals, nutraceuticals, cosmetics, and functional foods — transforming Ethiopia's botanical wealth into world-class health solutions.
              </p>
            </motion.div>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group p-10 bg-card card-shadow hover:bg-highlight rounded-sm h-full transition-all duration-300 cursor-pointer"
            >
              <Target className="w-8 h-8 text-highlight group-hover:text-foreground mb-6 transition-colors duration-300" />
              <h3 className="font-heading text-2xl font-bold text-foreground">Our Mission</h3>
              <p className="mt-4 text-base font-body text-muted-foreground group-hover:text-foreground/70 leading-relaxed transition-colors duration-300">
                To support local innovation, reduce dependence on imported APIs and excipients, and advance therapeutic discoveries through rigorous research, regulatory compliance, and cross-disciplinary collaboration.
              </p>
            </motion.div>
          </SectionReveal>
        </div>
      </section>
      
      {/* Timeline */}
      <section className="section-padding">
        <div className="container-grid">
          <SectionReveal>
            <span className="overline-dark">Our Journey</span>
            <h2 className="font-heading text-4xl font-semibold tracking-tight mt-4 text-foreground">Timeline</h2>
          </SectionReveal>
          <TimeLineParent />
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="section-padding bg-surface-subtle">
        <div className="container-grid">
          <SectionReveal>
            <span className="overline-dark">Team</span>
            <h2 className="font-heading text-4xl font-semibold tracking-tight mt-4 text-foreground">Leadership</h2>
          </SectionReveal>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leaders.map((leader, i) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group p-8 bg-card card-shadow hover:bg-highlight rounded-sm text-center transition-all duration-300 cursor-pointer"
              >
                <div className="w-20 h-20 mx-auto bg-surface-subtle rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
                </div>
                <h4 className="font-heading text-lg font-bold text-foreground">{leader.name}</h4>
                <p className="text-sm text-foreground/60 font-heading font-medium mt-1">{leader.role}</p>
                <p className="text-xs text-muted-foreground group-hover:text-foreground/60 mt-2 transition-colors duration-300">{leader.area}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax divider */}
      <section className="relative h-[40vh] overflow-hidden">
        <motion.img
          src={labImg}
          alt="Laboratory"
          className="w-full h-[130%] object-cover absolute -top-[15%]"
          initial={{ y: 0 }}
          whileInView={{ y: -30 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-foreground/50 flex items-center justify-center">
          <SectionReveal className="text-center px-6">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-surface-dark-foreground tracking-tight">
              Building Tomorrow's Health Solutions
            </h2>
          </SectionReveal>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="section-padding">
        <div className="container-grid text-center">
          <SectionReveal>
            <span className="overline-dark">Collaboration</span>
            <h2 className="font-heading text-4xl font-semibold tracking-tight mt-4 text-foreground">Our Partners</h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              We collaborate with pharmaceutical companies, research institutions, academic organizations, and regulatory bodies.
            </p>
          </SectionReveal>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            {["Pharmaceutical Companies", "Academic Institutions", "Regulatory Bodies", "Contract QC Seekers"].map((p, i) => (
              <motion.div
                key={p}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-6 bg-surface-subtle rounded-sm flex items-center justify-center min-h-[120px] hover:bg-highlight transition-colors duration-300 cursor-pointer"
              >
                <span className="font-heading text-sm font-bold text-muted-foreground hover:text-foreground transition-colors duration-300 text-center">{p}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;