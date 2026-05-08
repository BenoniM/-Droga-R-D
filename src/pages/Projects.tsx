import { useState } from "react";
import { motion } from "framer-motion";
import { Dna, Pill, Users, Cpu, FlaskConical, Sprout } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import labImg from "@/assets/Images/IMG_4528.jpg";
import moleculesImg from "@/assets/Images/IMG_4543.jpg";
import plantsImg from "@/assets/Images/IMG_4565.jpg";
import facilityImg from "@/assets/Images/IMG_4514.jpg";
import heroImg from "@/assets/Images/IMG_4582.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const filters = ["All", "Biotechnology", "Medicine", "Public Health", "AI"];

const projects = [
  { category: "Biotechnology", title: "Bioactive Compound Screening", desc: "Systematic screening of natural products for therapeutic potential using modern analytical techniques and high-throughput methodologies.", image: moleculesImg, icon: Dna },
  { category: "Medicine", title: "Oral Dispersible Tablet Formulation", desc: "Development of milk-based oral dispersible Griseofulvin tablets using direct compression for improved pediatric drug delivery.", image: labImg, icon: Pill },
  { category: "Public Health", title: "Nutraceutical Spirulina Research", desc: "Spirulina and Oyster Mushroom formulation as potential nutraceuticals for improved nutrition and public health outcomes.", image: plantsImg, icon: Users },
  { category: "Medicine", title: "Diabetic Foot Care Emollient", desc: "Formulation design and evaluation of diabetic foot care products to address foot xerosis and improve patient quality of life.", image: facilityImg, icon: Pill },
  { category: "Biotechnology", title: "Lippia Adoensis Extract Study", desc: "Evaluation of hypolipidemic effects of leaf extract in hypercholesterolemic subjects through rigorous clinical methodology.", image: heroImg, icon: FlaskConical },
  { category: "Public Health", title: "Fava Bean & Black Cumin Bread", desc: "Wheat replacement studies for improved nutritional properties in functional bread formulation for community nutrition.", image: plantsImg, icon: Sprout },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const filtered = activeFilter === "All" ? projects : projects.filter(p => p.category === activeFilter);

  useGSAP(() => {
    // Parallax on all about-parallax-img elements
    gsap.utils.toArray<HTMLElement>('.about-parallax-img').forEach((img) => {
      gsap.fromTo(img, { yPercent: -15 }, {
        yPercent: 15, ease: "none",
        scrollTrigger: { trigger: img.parentElement, start: "top bottom", end: "bottom top", scrub: true }
      });
    });
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section - Standardized Premium Hero */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.img
            src={heroImg}
            alt="Research Projects"
            className="absolute inset-0 w-full h-[120%] -top-[10%] object-cover about-parallax-img"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
        <div className="relative container-grid px-6 z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }}>
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#FFF200]">Scientific Innovation</span>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mt-4 leading-tight">
              Research Projects
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl font-body leading-relaxed">
              Explore our portfolio of innovative research spanning biotechnology, medicine, and public health.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Projects */}
      <section className="section-padding">
        <div className="container-grid">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-16">
            {filters.map((f) => (
              <motion.button
                key={f}
                onClick={() => setActiveFilter(f)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className={`px-6 py-2.5 text-sm font-heading font-medium rounded-sm transition-all duration-300 ${
                  activeFilter === f
                    ? "bg-foreground text-background"
                    : "bg-surface-subtle text-muted-foreground hover:bg-highlight hover:text-foreground"
                }`}
              >
                {f}
              </motion.button>
            ))}
          </div>

          {/* Project grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="group relative bg-card rounded-sm overflow-hidden card-shadow hover:shadow-2xl transition-all duration-500 cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-foreground/30" />
                    {/* Category badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-background/90 backdrop-blur-sm rounded-sm">
                      <Icon className="w-3.5 h-3.5 text-foreground" strokeWidth={2} />
                      <span className="text-xs font-heading font-bold uppercase tracking-wider text-foreground">{p.category}</span>
                    </div>
                    {/* Decorative vector element */}
                    <div className="absolute top-4 right-4 w-12 h-12 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                      <Icon className="w-full h-full text-surface-dark-foreground" strokeWidth={0.5} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 group-hover:bg-highlight transition-colors duration-300">
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground">{p.title}</h3>
                    <p className="mt-3 text-sm font-body text-muted-foreground group-hover:text-foreground/70 leading-relaxed transition-colors duration-300">{p.desc}</p>
                    <div className="mt-6 flex items-center gap-2 text-sm font-heading font-medium text-foreground">
                      <span>View Details</span>
                      <span className="group-hover:translate-x-2 transition-transform duration-300 inline-block">→</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Parallax banner */}
      <section className="relative h-[40vh] overflow-hidden">
        <motion.img
          src={heroImg}
          alt="Research innovation"
          className="w-full h-[130%] object-cover absolute -top-[15%]"
          initial={{ y: 0 }}
          whileInView={{ y: -30 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-foreground/50 flex items-center justify-center">
          <SectionReveal className="text-center px-6">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-surface-dark-foreground tracking-tight">
              Have a Research Proposal?
            </h2>
            <p className="mt-4 text-surface-dark-foreground/70 font-body">Submit your project idea and collaborate with our team.</p>
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

export default Projects;
