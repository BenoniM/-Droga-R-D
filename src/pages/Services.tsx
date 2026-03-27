import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { FlaskConical, Lightbulb, Cpu, BarChart3, Microscope, Users, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import facilityImg from "@/assets/facility.jpg";
import labImg from "@/assets/lab-research.jpg";

const Spline = lazy(() => import("@splinetool/react-spline"));

const services = [
  {
    icon: Microscope,
    title: "Bioequivalence Studies",
    desc: "GCP-compliant bioequivalence and pharmacokinetic studies with independent clinical units, bioanalytical laboratories, and medical labs.",
  },
  {
    icon: FlaskConical,
    title: "Analytical Testing",
    desc: "Comprehensive physicochemical analysis including assay, dissolution, disintegration, hardness, friability, and stability studies.",
  },
  {
    icon: Lightbulb,
    title: "Drug Discovery & Formulation",
    desc: "Natural and herbal drug discovery, formulation development for solid oral, liquid, semi-solid, and injectable dosage forms.",
  },
  {
    icon: BarChart3,
    title: "Quality Control Testing",
    desc: "Advanced HPLC, UV-Vis, FTIR instrumentation for raw material identification, purity determination, and finished product testing.",
  },
  {
    icon: Cpu,
    title: "Food & Nutraceutical R&D",
    desc: "Development of dietary formulations, pediatric supplements, health support products, and volatile and fixed oils from natural sources.",
  },
  {
    icon: Users,
    title: "Research Collaboration",
    desc: "Partnership programs with pharmaceutical manufacturers, research institutions, academic organizations, and regulatory bodies.",
  },
];

const whyChooseUsItems = [
  "Segregated QC Facilities",
  "Accuracy & Reliability",
  "Regulatory-Ready Reports",
  "Fast Turnaround Times",
  "Advanced Infrastructure",
  "EFDA Compliance",
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero - Yellow with Spline */}
      <section className="pt-32 pb-20 px-6 bg-highlight relative overflow-hidden">
        <div className="container-grid grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-foreground/60">What We Offer</span>
            <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tighter text-foreground mt-4">
              Our Services
            </h1>
            <p className="mt-6 text-lg text-foreground/70 max-w-md font-body leading-relaxed">
              Comprehensive research, analytical, and quality testing services powered by advanced instrumentation and expert teams.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:block h-[320px] relative"
          >
            <Suspense fallback={<div className="w-full h-full" />}>
              <Spline scene="https://prod.spline.design/lS3etg9lRDaSsxx7/scene.splinecode" style={{ width: "100%", height: "100%" }} />
            </Suspense>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-grid">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group p-10 bg-card card-shadow hover:bg-highlight border-t-4 border-transparent hover:border-foreground transition-all duration-300 rounded-sm min-h-[320px] flex flex-col cursor-pointer"
              >
                <service.icon className="w-10 h-10 text-highlight group-hover:text-foreground mb-6 transition-colors duration-300" strokeWidth={1.5} />
                <h3 className="font-heading text-xl font-bold text-foreground">{service.title}</h3>
                <p className="mt-4 text-sm font-body text-muted-foreground group-hover:text-foreground/70 leading-relaxed flex-1 transition-colors duration-300">{service.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-sm font-heading font-medium text-foreground">
                  Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
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
              Advanced Infrastructure
            </h2>
            <p className="mt-4 text-surface-dark-foreground/70 font-body">
              Our laboratories are equipped with world-class analytical instrumentation for precise and reliable results.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Why Choose Us - Marquee Section */}
      <section className="section-padding bg-surface-subtle overflow-hidden">
        <div className="container-grid">
          <SectionReveal>
            <span className="overline-dark">Why Droga R&D</span>
            <h2 className="font-heading text-4xl font-semibold tracking-tight mt-4 text-foreground">Why Choose Us</h2>
          </SectionReveal>
          
          {/* Marquee Container */}
          <div className="mt-12 relative overflow-hidden">
            <motion.div
              className="flex gap-8 whitespace-nowrap"
              animate={{
                x: [0, -1000],
              }}
              transition={{
                x: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {/* Duplicate items for seamless loop */}
              {[...whyChooseUsItems, ...whyChooseUsItems].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  className="inline-flex items-center gap-4 px-6 py-4 bg-card rounded-sm shadow-sm hover:bg-highlight hover:text-black transition-all duration-300 cursor-pointer"
                >
                  <div className="w-2 h-2 bg-highlight rounded-full group-hover:bg-foreground" />
                  <span className="font-heading text-lg font-medium text-foreground hover:text-black transition-colors duration-300">
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lab image parallax */}
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
              Partner with Us
            </h2>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex mt-6 h-12 px-8 items-center text-sm font-heading font-bold tracking-wide bg-highlight text-foreground rounded-sm"
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