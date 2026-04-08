import { motion } from "framer-motion";
import { Users, Target, Eye, FlaskConical, Factory, Sprout, Microscope, Beaker, ClipboardCheck, FlaskRound, Droplets, Leaf, Building2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import facilityImg from "@/assets/facility.jpg";
import labImg from "@/assets/lab-research.jpg";
import heroImg from "@/assets/hero-science.jpg";

const leaders = [
  { name: "Muluken Nigatu", role: "R&D Director", area: "Pharmaceutical Sciences" },
  { name: "Fortuna Kidane", role: "Head of Drug Discovery", area: "Natural Products Chemistry" },
  { name: "Dr. Yonas Tadesse", role: "Head of Bioequivalence", area: "Clinical Pharmacology" },
  { name: "Dr. Helen Getachew", role: "Head of Food Sciences", area: "Nutritional Sciences" },
];

// Timeline data
const timelineData = [
  { date: "2020", title: "Droga R&D Center established", description: "Foundation of the research center to advance pharmaceutical innovation." },
  { date: "2021", title: "First Droga Research Grant awarded", description: "Initial grant funding for pioneering pharmaceutical research projects." },
  { date: "2022", title: "Drug Discovery wing launched", description: "Dedicated wing for natural and herbal drug discovery initiatives." },
  { date: "2023", title: "Bioequivalence Center announced", description: "State-of-the-art bioequivalence and analytical center announced." },
  { date: "2024", title: "Kilinto facility construction begins", description: "Construction of the 9,951 sq.m R&D center at Kilinto Industrial Park." },
  { date: "2025", title: "Medicinal Plant Nursery in Butajira", description: "Establishing a nursery to cultivate indigenous medicinal plants." },
  { date: "2026", title: "Oil Manufacturing Plant operational", description: "1,000 sq.m facility for fixed and volatile oil processing." },
];

// Facility data for R&D center
const facilities = [
  { icon: Microscope, title: "Research Laboratories", desc: "Drug discovery, food & nutrition, and cosmetic product development" },
  { icon: Beaker, title: "Bioequivalence Study Units", desc: "Support preclinical and clinical evaluation" },
  { icon: ClipboardCheck, title: "Quality Control Testing Units", desc: "Reliable and regulatory-compliant analysis" },
  { icon: FlaskRound, title: "Formulation and Development Units", desc: "Scale innovations from concept to market-ready products" },
];

// Nursery objectives
const nurseryObjectives = [
  "Sustainable cultivation of identified medicinal plant species for research and product development",
  "Preservation of indigenous plant resources to support long-term availability",
  "Integration with R&D activities in pharmaceuticals, nutraceuticals, and functional foods",
  "Provide a reliable, locally-sourced supply of raw materials for processing, formulation, and export",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[70vh] flex items-start justify-center overflow-hidden">
        <motion.img
          src={facilityImg}
          alt="Droga R&D facility"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container-grid px-6 pt-32 md:pt-40 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm md:text-base font-bold uppercase tracking-[0.3em] text-highlight">About Us</span>
            <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tighter text-white mt-4">Our Story</h1>
            <p className="mt-6 text-xl text-white/80 max-w-2xl mx-auto">
              Advancing pharmaceutical research, innovation, and quality through scientific excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview - Droga Research and Development Center */}
      <section className="section-padding">
        <div className="container-grid grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SectionReveal>
            <span className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-muted-foreground">Flagship Facility</span>
            <h2 className="font-heading text-4xl font-semibold tracking-tight mt-4 text-foreground">
              Droga Research and Development Center
            </h2>
            <p className="mt-4 text-lg text-muted-foreground font-body">
              Situated on <span className="font-bold text-foreground">9,951 sq.m of land in Kilinto Industrial Park</span>, our state-of-the-art center is designed to advance research, development, and quality testing for the pharmaceutical, academic, research, cosmetic, and food & beverage industries.
            </p>
            <p className="mt-4 text-lg text-muted-foreground font-body">
              The center is dedicated to supporting local innovation and reducing dependence on imported APIs, excipients, formulations, and other raw materials by leveraging the country's indigenous knowledge and natural resources.
            </p>
            <p className="mt-4 text-lg text-muted-foreground font-body">
              With these integrated facilities, the center aims to be a hub of scientific excellence, innovation, and self-reliance in pharmaceuticals, nutraceuticals, cosmetics, and functional foods.
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

      {/* Facilities Grid */}
      <section className="section-padding bg-surface-subtle">
        <div className="container-grid">
          <SectionReveal>
            <span className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-muted-foreground">Our Facilities</span>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight mt-4 text-foreground">Integrated Research Infrastructure</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              The center will house specialized units to drive innovation from discovery to market.
            </p>
          </SectionReveal>
          <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {facilities.map((facility, idx) => (
              <motion.div
                key={facility.title}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group p-6 bg-card card-shadow rounded-sm border-t-4 border-highlight hover:bg-highlight transition-all duration-300 cursor-pointer"
              >
                <facility.icon className="w-10 h-10 text-black group-hover:text-black mb-4 transition-colors duration-300" />
                <h3 className="font-heading font-bold text-xl text-foreground group-hover:text-black transition-colors duration-300">{facility.title}</h3>
                <p className="mt-2 text-base text-muted-foreground leading-relaxed group-hover:text-black/80 transition-colors duration-300">{facility.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Oil Manufacturing Plant */}
      <section className="section-padding">
        <div className="container-grid grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SectionReveal order={1}>
            <motion.div
              className="overflow-hidden rounded-sm"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <img src={heroImg} alt="Oil processing facility" className="w-full h-[350px] object-cover" />
            </motion.div>
          </SectionReveal>
          <SectionReveal delay={0.2} order={2}>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Factory className="w-6 h-6 text-black" />
                <span className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-muted-foreground">Manufacturing</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                Droga Oil Manufacturing Plant
              </h2>
              <p className="mt-4 text-lg text-muted-foreground font-body">
                A <span className="font-bold text-foreground">1,000 sq.m processing facility</span> is being established to harness the health-promoting potential of fixed and volatile oils. The facility is designed to process these natural oils at scale, ensuring high-quality standards suitable for both local markets and export.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <Droplets className="w-5 h-5 text-black mt-0.5" />
                  <p className="text-lg text-muted-foreground">Processing of fixed and volatile oils with recognized health benefits</p>
                </div>
                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-black mt-0.5" />
                  <p className="text-lg text-muted-foreground">Support for local and international distribution of natural health products</p>
                </div>
                <div className="flex items-start gap-3">
                  <FlaskConical className="w-5 h-5 text-black mt-0.5" />
                  <p className="text-lg text-muted-foreground">Integration with the R&D wing to ensure quality, safety, and efficacy from raw material to finished product</p>
                </div>
              </div>
              <p className="mt-6 text-lg text-muted-foreground font-body italic border-l-4 border-highlight pl-4">
                This facility aligns with our mission to leverage indigenous resources, create value-added products, and contribute to both public health and economic growth.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Medicinal Plant Nursery */}
      <section className="section-padding bg-surface-subtle">
        <div className="container-grid">
          <SectionReveal className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-4">
              <Sprout className="w-12 h-12 text-black" />
            </div>
            <span className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-muted-foreground">Conservation & Cultivation</span>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight mt-4 text-foreground">
              Droga Medicinal Plant Nursery
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A dedicated Medicinal Plant Nursery is being established in <span className="font-bold text-foreground">Butajira</span> to cultivate and preserve a wide range of medicinal plants as well as food-based plants with recognized medicinal properties.
            </p>
          </SectionReveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <SectionReveal>
              <img
                src={facilityImg}
                alt="Medicinal plant nursery"
                className="w-full h-[300px] object-cover rounded-sm shadow-md"
              />
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Purpose and Objectives</h3>
              <motion.ul
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {nurseryObjectives.map((obj, idx) => (
                  <motion.li
                    key={idx}
                    variants={itemVariants}
                    className="flex items-start gap-3"
                  >
                    <Leaf className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                    <span className="text-lg text-muted-foreground">{obj}</span>
                  </motion.li>
                ))}
              </motion.ul>
              <p className="mt-6 text-lg text-muted-foreground font-body border-l-4 border-highlight pl-4">
                This nursery aims to strengthen the link between traditional knowledge and modern scientific research, ensuring that Ethiopia's botanical wealth contributes to health, wellness, and innovation.
              </p>
            </SectionReveal>
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
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <SectionReveal className="text-center px-6">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white tracking-tight">
              Building Tomorrow's Health Solutions
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
              <Eye className="w-8 h-8 text-highlight group-hover:text-black mb-6 transition-colors duration-300" />
              <h3 className="font-heading text-2xl font-bold text-foreground">Our Vision</h3>
              <p className="mt-4 text-lg font-body text-muted-foreground group-hover:text-black/80 leading-relaxed transition-colors duration-300">
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
              <Target className="w-8 h-8 text-highlight group-hover:text-black mb-6 transition-colors duration-300" />
              <h3 className="font-heading text-2xl font-bold text-foreground">Our Mission</h3>
              <p className="mt-4 text-lg font-body text-muted-foreground group-hover:text-black/80 leading-relaxed transition-colors duration-300">
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
            <span className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-muted-foreground">Our Journey</span>
            <h2 className="font-heading text-4xl font-semibold tracking-tight mt-4 text-foreground">Timeline</h2>
          </SectionReveal>

          <div className="relative max-w-4xl mx-auto mt-16">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200"></div>
            
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={index} 
                  className={`relative flex items-center justify-between mb-12 ${isEven ? '' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`w-5/12 flex ${isEven ? 'justify-end' : 'justify-start'}`}>
                    <div className="bg-highlight text-black px-4 py-2 rounded-full shadow-lg font-bold">
                      {item.date}
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-highlight rounded-full border-4 border-white shadow"></div>
                  <div className={`w-5/12 ${isEven ? '' : 'text-right'}`}>
                    <motion.div 
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.3 }}
                      className="group p-6 rounded-lg shadow-md transition-all duration-300 hover:bg-highlight cursor-pointer bg-card"
                    >
                      <h3 className="text-xl font-bold text-foreground group-hover:text-black transition-colors duration-300">{item.title}</h3>
                      <p className="text-lg text-muted-foreground mt-4 group-hover:text-black/80 transition-colors duration-300">{item.description}</p>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="section-padding bg-surface-subtle">
        <div className="container-grid">
          <SectionReveal>
            <span className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-muted-foreground">Team</span>
            <h2 className="font-heading text-4xl font-semibold tracking-tight mt-4 text-foreground">Leadership</h2>
          </SectionReveal>
          <motion.div
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {leaders.map((leader, i) => (
              <motion.div
                key={leader.name}
                variants={itemVariants}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group p-8 bg-card card-shadow hover:bg-highlight rounded-sm text-center transition-all duration-300 cursor-pointer"
              >
                <div className="w-20 h-20 mx-auto bg-surface-subtle rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-black group-hover:text-black transition-colors duration-300" />
                </div>
                <h4 className="font-heading text-lg font-bold text-foreground">{leader.name}</h4>
                <p className="text-sm md:text-base text-foreground/60 font-heading font-medium mt-1">{leader.role}</p>
                <p className="text-sm text-muted-foreground group-hover:text-black/60 mt-2 transition-colors duration-300">{leader.area}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="section-padding">
        <div className="container-grid text-center">
          <SectionReveal>
            <span className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-muted-foreground">Collaboration</span>
            <h2 className="font-heading text-4xl font-semibold tracking-tight mt-4 text-foreground">Our Partners</h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              We collaborate with pharmaceutical companies, research institutions, academic organizations, and regulatory bodies.
            </p>
          </SectionReveal>
          <motion.div
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {["Pharmaceutical Companies", "Academic Institutions", "Regulatory Bodies", "Contract QC Seekers"].map((p, i) => (
              <motion.div
                key={p}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-6 bg-surface-subtle rounded-sm flex items-center justify-center min-h-[120px] hover:bg-highlight transition-colors duration-300 cursor-pointer"
              >
                <span className="font-heading text-sm md:text-base font-bold text-muted-foreground hover:text-black transition-colors duration-300 text-center">{p}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;