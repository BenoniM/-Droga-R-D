import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { 
  FlaskConical, Lightbulb, Cpu, BarChart3, Microscope, Users, ArrowRight, 
  CheckCircle, Beaker, ClipboardCheck, Gauge, ShieldCheck, Clock, Building2,
  Droplets, Ruler, Weight, Thermometer, Scale, Wind
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import facilityImg from "@/assets/facility.jpg";
import labImg from "@/assets/lab-research.jpg";

// Main service cards - updated to match the lab's offerings
const services = [
  {
    icon: BarChart3,
    title: "Raw Material Testing",
    desc: "Identification of APIs, assay of APIs, excipient analysis, and moisture content determination (LOD).",
  },
  {
    icon: ClipboardCheck,
    title: "Finished Product Testing",
    desc: "Assay, identification, content uniformity, dissolution, disintegration, hardness, friability, and pH measurement.",
  },
  {
    icon: FlaskConical,
    title: "Method Development & Validation",
    desc: "Development and validation of analytical methods compliant with pharmacopoeial standards.",
  },
  {
    icon: ShieldCheck,
    title: "Stability Studies",
    desc: "Accelerated and long-term stability testing to support shelf-life determination.",
  },
  {
    icon: Microscope,
    title: "Bioanalytical Services",
    desc: "Support for bioequivalence studies with advanced HPLC and spectrophotometric analysis.",
  },
  {
    icon: Gauge,
    title: "Contract QC Testing",
    desc: "Outsourced quality control testing for pharmaceutical manufacturers and researchers.",
  },
];

// Instrumentation list
const instruments = [
  "High Performance Liquid Chromatography (HPLC)",
  "UV-Visible Spectrophotometers",
  "Fourier-Transform Infrared Spectrometer (FTIR)",
  "Dissolution and Disintegration Test Apparatus",
  "Analytical Balances and Precision Weighing Systems",
  "pH Meters",
  "Viscometers",
  "Hot Air Ovens and Water Baths",
  "Laboratory Scale Sample Processing Equipment",
];

// Quality commitment points
const qualityPoints = [
  "EFDA regulatory compliance in all applicable research, development, and analytical activities",
  "Conformity with recognized Pharmacopoeial standards and established quality guidelines",
  "Equipment qualification and regular calibration to ensure accuracy, reliability, and reproducibility",
  "Data integrity and full traceability, supported by controlled documentation and secure record management",
  "Impartial and confidential testing, ensuring objectivity and protection of proprietary information",
];

// Why choose us
const whyChooseUs = [
  { icon: Building2, title: "Segregated QC Facilities", desc: "Dedicated and controlled QC areas ensure secure, unbiased, and reliable testing." },
  { icon: CheckCircle, title: "Accuracy & Reliability", desc: "Analytical processes designed to deliver precise, consistent, and reproducible results." },
  { icon: ClipboardCheck, title: "Regulatory-Ready Reports", desc: "Comprehensive documentation prepared to meet applicable regulatory and compliance requirements." },
  { icon: Clock, title: "Fast Turnaround Times", desc: "Efficient workflows and skilled teams enable timely analysis without compromising quality." },
  { icon: Microscope, title: "Advanced Infrastructure", desc: "Modern, well-maintained laboratory equipment supports high-quality research and testing outcomes." },
];

// Client types
const clientTypes = [
  "Pharmaceutical Manufacturing Companies",
  "Research and Academic Institutions",
  "Regulatory Bodies",
  "Contract QC Service Seekers",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section - Centered */}
      <section className="pt-32 pb-20 px-6 bg-highlight relative overflow-hidden">
        <div className="container-grid text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <span className="text-sm md:text-base font-bold uppercase tracking-[0.3em] text-foreground/60">Our Services</span>
            <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tighter text-foreground mt-4">
              Droga Analytical (QC) Testing Laboratory
            </h1>
            <p className="mt-6 text-xl text-foreground/70 max-w-2xl mx-auto font-body leading-relaxed">
              Comprehensive analytical testing services under Phase I – delivering accuracy, compliance, and speed for pharmaceutical, academic, and regulatory clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid - Phase I Testing Categories */}
      <section className="section-padding">
        <div className="container-grid">
          <SectionReveal>
            <span className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-muted-foreground">Phase I Services</span>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight mt-4 text-foreground">Analytical Testing Services</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              The Droga Bioanalytical & Analytical Laboratory (DBAL) delivers specialized testing for raw materials and finished products.
            </p>
          </SectionReveal>
          <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group p-8 bg-card card-shadow hover:bg-highlight border-l-4 border-highlight hover:border-foreground transition-all duration-300 rounded-sm cursor-pointer"
              >
                <service.icon className="w-10 h-10 text-highlight group-hover:text-foreground mb-4 transition-colors duration-300" strokeWidth={1.5} />
                <h3 className="font-heading text-xl font-bold text-foreground">{service.title}</h3>
                <p className="mt-3 text-base font-body text-muted-foreground group-hover:text-foreground/70 leading-relaxed transition-colors duration-300">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Detailed Test Types - Raw Material & Finished Product with hover bg */}
      <section className="section-padding bg-surface-subtle">
        <div className="container-grid">
          <SectionReveal>
            <span className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-muted-foreground">Test Parameters</span>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight mt-4 text-foreground">Type of Tests in Phase I</h2>
          </SectionReveal>
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Raw Material Testing - with hover */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="group bg-card p-6 rounded-sm border-t-4 border-highlight hover:bg-highlight transition-all duration-300 shadow-sm cursor-pointer"
            >
              <h3 className="font-heading text-2xl font-bold text-foreground group-hover:text-foreground transition-colors duration-300 mb-4">Raw Material Testing</h3>
              <ul className="space-y-3">
                {["Identification of APIs", "Assay of APIs", "Excipient Analysis", "Moisture Content Determination (LOD)"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-base text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">
                    <CheckCircle className="w-5 h-5 text-highlight group-hover:text-foreground transition-colors duration-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            {/* Finished Product Testing - with hover */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -4 }}
              className="group bg-card p-6 rounded-sm border-t-4 border-highlight hover:bg-highlight transition-all duration-300 shadow-sm cursor-pointer"
            >
              <h3 className="font-heading text-2xl font-bold text-foreground group-hover:text-foreground transition-colors duration-300 mb-4">Finished Product Testing</h3>
              <div className="grid grid-cols-2 gap-3">
                {["Assay", "Identification", "Content Uniformity", "Dissolution", "Disintegration", "Hardness", "Friability", "pH Measurement"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-base text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">
                    <CheckCircle className="w-4 h-4 text-highlight group-hover:text-foreground transition-colors duration-300 flex-shrink-0" />
                    <span className="text-base">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Instrumentation - Our Analytical Capabilities */}
      <section className="section-padding">
        <div className="container-grid">
          <SectionReveal>
            <span className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-muted-foreground">Advanced Instrumentation</span>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight mt-4 text-foreground">Our Analytical Capabilities</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              Our laboratory is equipped with qualified and calibrated instruments to support accurate research, development, and quality evaluation activities.
            </p>
          </SectionReveal>
          <motion.div
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {instruments.map((inst, i) => (
              <motion.div
                key={inst}
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 4 }}
                className="group flex items-center gap-3 p-4 bg-surface-subtle rounded-sm hover:bg-highlight transition-colors duration-300 cursor-pointer"
              >
                <Beaker className="w-5 h-5 text-highlight group-hover:text-black transition-colors duration-300" />
                <span className="font-body text-base text-foreground group-hover:text-black transition-colors duration-300">{inst}</span>
              </motion.div>
            ))}
          </motion.div>
          <p className="mt-6 text-center text-muted-foreground text-base italic">
            All instruments are maintained, calibrated, and operated in accordance with established standard operating procedures (SOPs) to ensure data accuracy, reliability, and reproducibility.
          </p>
        </div>
      </section>

      {/* Quality & Compliance - with hover on QA card */}
      <section className="section-padding bg-surface-subtle">
        <div className="container-grid">
          <SectionReveal>
            <span className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-muted-foreground">Quality Commitment</span>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight mt-4 text-foreground">Quality & Compliance</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              Quality and compliance are integral to all our research, development, and testing activities. We maintain the highest standards of scientific integrity and regulatory adherence.
            </p>
          </SectionReveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Regulatory and Quality Framework */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="font-heading text-xl font-bold text-foreground">Regulatory and Quality Framework</h3>
              <ul className="space-y-3">
                {qualityPoints.map((point, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="group flex items-start gap-3 cursor-pointer"
                  >
                    <ShieldCheck className="w-5 h-5 text-highlight group-hover:text-black mt-0.5 flex-shrink-0 transition-colors duration-300" />
                    <span className="text-base text-muted-foreground group-hover:text-black/80 transition-colors duration-300">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            {/* Quality Assurance card with hover bg */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -4 }}
              className="group bg-card p-6 rounded-sm border-l-4 border-highlight hover:bg-highlight transition-all duration-300 cursor-pointer"
            >
              <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-foreground transition-colors duration-300 mb-3">Quality Assurance & Review Process</h3>
              <p className="text-base text-muted-foreground group-hover:text-foreground/70 leading-relaxed transition-colors duration-300">
                All analyses and evaluations are conducted by trained and authorized professionals following approved standard operating procedures. Test results are independently reviewed and approved by the Quality Assurance (QA) team prior to final release, ensuring accuracy, compliance, and consistency.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Cards */}
      <section className="section-padding">
        <div className="container-grid">
          <SectionReveal>
            <span className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-muted-foreground">Why Droga R&D</span>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight mt-4 text-foreground">Why Choose Us</h2>
          </SectionReveal>
          <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="group p-6 bg-card card-shadow rounded-sm hover:bg-highlight transition-all duration-300 cursor-pointer"
              >
                <item.icon className="w-8 h-8 text-highlight group-hover:text-foreground mb-4" />
                <h3 className="font-heading font-bold text-lg text-foreground">{item.title}</h3>
                <p className="mt-2 text-base text-muted-foreground group-hover:text-foreground/70">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Parallax facility banner */}
      <section className="relative h-[50vh] overflow-hidden">
        <motion.img
          src={facilityImg}
          alt="Research facility"
          className="w-full h-[130%] object-cover absolute -top-[15%]"
          initial={{ y: 0 }}
          whileInView={{ y: -40 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center">
          <SectionReveal className="text-center max-w-2xl px-6">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-surface-dark-foreground tracking-tight">
              Trusted by Industry Leaders
            </h2>
            <p className="mt-4 text-surface-dark-foreground/70 font-body text-lg">
              We provide specialized research, analytical, and quality testing services to a diverse range of clients.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Clients Section */}
      <section className="section-padding bg-surface-subtle">
        <div className="container-grid text-center">
          <SectionReveal>
            <span className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-muted-foreground">Our Clients</span>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight mt-4 text-foreground">Who We Serve</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We partner with organizations that demand precision, compliance, and reliability.
            </p>
          </SectionReveal>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {clientTypes.map((client, idx) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-4 bg-card rounded-sm shadow-sm hover:bg-highlight transition-all duration-300 cursor-pointer"
              >
                <span className="font-heading text-base font-medium text-foreground">{client}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding relative overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 opacity-10"
          animate={{ y: [0, -15, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <FlaskConical className="w-24 h-24 text-foreground" strokeWidth={0.5} />
        </motion.div>
        <motion.div
          className="absolute bottom-10 right-10 opacity-10"
          animate={{ y: [0, 10, 0], rotate: [360, 180, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          <Microscope className="w-20 h-20 text-foreground" strokeWidth={0.5} />
        </motion.div>
        <div className="container-grid text-center relative z-10">
          <SectionReveal>
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-foreground">Partner with Us</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Contact us to discuss your analytical testing, QC, or research collaboration needs.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex mt-8 h-12 px-8 items-center text-sm font-heading font-bold tracking-wide bg-highlight text-foreground rounded-sm hover:bg-foreground hover:text-surface-dark-foreground transition-colors duration-300"
            >
              Get in Touch
            </motion.a>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;