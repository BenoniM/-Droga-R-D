import { useRef } from "react";
import { motion } from "framer-motion";
import { Users, Target, Eye, FlaskConical, Droplets, Leaf, TestTube, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import JourneySection from "@/components/JourneySection";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

// Import images
import facilityImg from "@/assets/facility.jpg";
import labImg from "@/assets/lab-research.jpg";
import heroImg from "@/assets/hero-science.jpg";
import plantsImg from "@/assets/herbal8.jpg";

import project1Img from "@/assets/Project/droga-manufacture.png";
import project2Img from "@/assets/Project/Droga Oil Manufacturing Plant.jpg";
import project3Img from "@/assets/Project/Soap Manufacturing.jpg";
import project4Img from "@/assets/Project/Rosmary Manufacturing Plant.jpg";

import shimadzuLogo from "@/assets/Partners/Shimadzu.png";
import electroLabLogo from "@/assets/Partners/Electrolab.png";
import lotusLogo from "@/assets/Partners/Lotus.png";
import emiLogo from "@/assets/Partners/EMI.png";
import tekLogo from "@/assets/Partners/Tek.png";
import dbuLogo from "@/assets/Partners/Debre Berhan.png";
import aauLogo from "@/assets/Partners/AAU.jpg";
import emaLogo from "@/assets/Partners/EMA.png";
import breezeLogo from "@/assets/Partners/Breeze.png";

const leaders = [
  { name: "Muluken Nigatu", role: "R&D Director", area: "Pharmaceutical Sciences" },
  { name: "Fortuna Kidane", role: "Head of Drug Discovery", area: "Natural Products Chemistry" },
  { name: "Dr. Yonas Tadesse", role: "Head of Bioequivalence", area: "Clinical Pharmacology" },
  { name: "Dr. Helen Getachew", role: "Head of Food Sciences", area: "Nutritional Sciences" },
];

const timelineData = [
  { date: "2021", title: "Droga R&D Department Established", description: "Droga Research and Development (R&D) Department was established." },
  { date: "2021", title: "Drug Discovery and Development Wing", description: "The Drug Discovery and Development Wing was established, initiating in-house herbal drug extraction and development activities." },
  { date: "2022", title: "First Droga Research Grant", description: "The first Droga Research Grant (DRG) was awarded following the establishment of the internal research funding framework." },
  { date: "2023", title: "Droga R&D Center at KIP", description: "The Droga R&D Center at KIP was inaugurated following land acquisition and formal agreement signings." },
  { date: "2023", title: "Analytical Testing Laboratory Inaugurated", description: "The Analytical Testing Laboratory was inaugurated, with a new facility secured and renovation works initiated." },
  { date: "2024", title: "Bioequivalence and Analytical Center", description: "The Bioequivalence and Analytical Center was inaugurated, with integration of the BE center and completion of feasibility studies and site allocations." },
  { date: "2025", title: "Kilinto Facility Construction", description: "Construction of the initial phase of the Kilinto Research and Development Facility commenced." },
  { date: "2026", title: "Analytical Testing Laboratory Fully Operational", description: "The Analytical Testing Laboratory at Abuare became fully operational, marking full functionality of the facility." },
];

const partners = [
  { name: "Shimadzu", logo: shimadzuLogo },
  { name: "Electro Lab", logo: electroLabLogo },
  { name: "Lotus", logo: lotusLogo },
  { name: "Ethiopian Meteorology Institute", logo: emiLogo },
  { name: "Tek Calibration and Services Center", logo: tekLogo },
  { name: "Debere Berhan University", logo: dbuLogo },
  { name: "Breeze Pharmaceutical Technologies PLC", logo: breezeLogo },
  { name: "Addis Ababa University", logo: aauLogo },
  { name: "EMA cons & Trading", logo: emaLogo },
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
  const pageRef = useRef<HTMLDivElement>(null);

  // GSAP scroll animations
  useGSAP(() => {
    // Parallax on all about-parallax-img elements
    gsap.utils.toArray<HTMLElement>('.about-parallax-img').forEach((img) => {
      gsap.fromTo(img, { yPercent: -15 }, {
        yPercent: 15, ease: "none",
        scrollTrigger: { trigger: img.parentElement, start: "top bottom", end: "bottom top", scrub: true }
      });
    });

    // Horizontal yellow line grow animations
    gsap.utils.toArray<HTMLElement>('.section-line').forEach((line) => {
      gsap.fromTo(line, { scaleX: 0 }, {
        scaleX: 1, duration: 1, ease: "power2.out",
        scrollTrigger: { trigger: line, start: "top 85%", once: true }
      });
    });

    // Large number fade-in
    gsap.utils.toArray<HTMLElement>('.section-number').forEach((el) => {
      gsap.fromTo(el, { opacity: 0, x: -30 }, {
        opacity: 0.07, x: 0, duration: 1, ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 85%", once: true }
      });
    });

    // Manufacturing 5-segment reveal
    const mfgSegments = gsap.utils.toArray<HTMLElement>('.mfg-segment');
    if (mfgSegments.length === 5) {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: ".mfg-section", start: "top 90%", end: "+=600", scrub: 0.8 }
      });
      tl.to([mfgSegments[2]], { y: 0, duration: 0.4, ease: "power4.out" })
        .to([mfgSegments[1], mfgSegments[3]], { y: 0, duration: 0.4, ease: "power3.out" }, "-=0.2")
        .to([mfgSegments[0], mfgSegments[4]], { y: 0, duration: 0.3, ease: "power3.out" }, "-=0.2")
        .to(".mfg-content", { autoAlpha: 1, duration: 0.15 }, "-=0.1");
    }
  }, { scope: pageRef });

  return (
    <div className="min-h-screen bg-background" ref={pageRef}>
      <Navbar />

      {/* Hero — CRF-inspired split with parallax */}
      <section className="relative h-[85vh] md:h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.img
            src={project1Img}
            alt="Droga R&D"
            className="absolute inset-0 w-full h-[120%] -top-[10%] object-cover about-parallax-img"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
        <div className="relative container-grid px-6 z-10 flex flex-col md:flex-row items-center gap-12 pt-20">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#FFF200]">About Us</span>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mt-4 leading-[0.95]">
              Our<br />Story
            </h1>
            <div className="w-24 h-1 bg-[#FFF200] mt-6 origin-left section-line" />
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-lg leading-relaxed">
              Advancing pharmaceutical research, innovation, and quality through scientific excellence since 2021.
            </p>
            <div className="flex gap-4 mt-8">
              <Button size="lg" asChild className="bg-[#FFF200] text-black hover:bg-white transition-all duration-300 font-bold">
                <Link to="/droga-science">Explore Research</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-white/80 text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-300 font-bold">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="hidden md:block w-px h-48 bg-white/20"
            initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.div
            className="hidden md:flex flex-col gap-8 text-right"
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            {[{ n: "12+", l: "Projects" }, { n: "9", l: "Partners" }, { n: "4", l: "Research Units" }].map((s) => (
              <div key={s.l}>
                <div className="font-heading text-3xl font-bold text-[#FFF200]">{s.n}</div>
                <div className="text-xs uppercase tracking-widest text-white/60 mt-1">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 01 Overview — CRF numbered section */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-grid relative">
          <div className="absolute -left-4 top-0 font-heading text-[10rem] md:text-[14rem] font-black text-black/[0.04] leading-none select-none pointer-events-none section-number">01</div>
          <SectionReveal>
            <div className="flex items-center gap-4 mb-2">
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-muted-foreground">01</span>
              <div className="w-12 h-px bg-[#FFF200] origin-left section-line" />
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground">Overview</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mt-4 text-foreground leading-tight">
              Droga Research and<br className="hidden md:block" /> Development Department
            </h2>
          </SectionReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
            <SectionReveal>
              <div className="space-y-6 text-lg text-muted-foreground font-body leading-relaxed">
                <p>
                  Established in 2021, the Droga Research and Development Department is one of the major wings of Droga Pharma PLC, a diversified private company operating mainly in healthcare services and agricultural exports. The company has evolved from a pharmaceutical wholesale and importing business into an integrated healthcare group with a strong national presence and expanding operations across multiple African markets.
                </p>
                <p>
                  This wing was established with the vision of becoming a state-of-the-art research center and providing quality research services that address challenges in conducting effective research in the country. It also focuses on identifying and addressing problems related to the nutritional and medicinal needs of society.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.15}>
              <div className="space-y-6 text-lg text-muted-foreground font-body leading-relaxed">
                <p>
                  The R&D division comprises four major units: the bioequivalence and analytical laboratory, drug discovery and development unit, food & nutraceutical unit, and cosmetic & detergent unit. Under these units, research activities such as drug discovery, characterization, food development, organic cosmetic development, and related research are undertaken. Furthermore, analytical services are also offered.
                </p>
                <div className="pt-4">
                  <Button variant="outline" size="lg" asChild className="border-black text-black hover:bg-[#FFF200] hover:border-[#FFF200] transition-all duration-300 font-bold">
                    <Link to="/droga-science">Learn More <ArrowRight className="w-4 h-4 ml-2" /></Link>
                  </Button>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
      {/* 02 Major Units — CRF numbered section */}
      <section className="section-padding bg-surface-subtle relative overflow-hidden">
        <div className="container-grid relative">
          <div className="absolute -left-4 top-0 font-heading text-[10rem] md:text-[14rem] font-black text-black/[0.04] leading-none select-none pointer-events-none section-number">02</div>
          <SectionReveal>
            <div className="flex items-center gap-4 mb-2">
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-muted-foreground">02</span>
              <div className="w-12 h-px bg-[#FFF200] origin-left section-line" />
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground">Scientific Focus</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mt-4 text-foreground">Major Units</h2>
          </SectionReveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Unit 1 */}
            <SectionReveal>
              <div className="p-8 bg-card rounded-sm card-shadow border-t-4 border-highlight h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-highlight/20 flex items-center justify-center">
                    <FlaskConical className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground">1. Drug Discovery and Development Unit</h3>
                </div>
                <p className="text-muted-foreground mb-6">The Drug Discovery and Development wing is involved in the research of natural, herbal food and drug discovery, development and formulation.</p>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-foreground mb-2">1.1. Formulation Development</h4>
                    <p className="text-sm text-muted-foreground">Develops drug products through formulation studies to maximize effectiveness and safety, improving solubility and stability. Responsible for establishing quality from development through clinical to commercial manufacturing. Includes Formulations of pharmaceuticals and Herbal medicines in forms of Solid Oral, Oral liquid, Semi solids & Injectable.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">1.2. Research Laboratory</h4>
                    <p className="text-sm text-muted-foreground">Serves as the core of the Drug Discovery Wing. Focuses on plant-based and animal-derived pharmaceutical research, integrating traditional knowledge with modern scientific methodologies. Conducts end-to-end drug discovery: bioactive compound screening, extraction, preclinical evaluation, mechanism of action studies, and safety assessments.</p>
                  </div>
                </div>
              </div>
            </SectionReveal>

            {/* Unit 2 */}
            <SectionReveal delay={0.2}>
              <div className="p-8 bg-card rounded-sm card-shadow border-t-4 border-highlight h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-highlight/20 flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground">2. Food and Nutraceutical Sciences Research</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Dedicated to the R&D of nutrition-based products aimed at supporting health, wellness, and preventive care. Focuses on specialized dietary formulations, pediatric food supplements, health support formulations, and volatile/fixed oils derived from natural sources.</p>
                <p className="text-sm text-muted-foreground mb-4">Grounded in food science, nutrition, phytochemistry, and formulation science. Supported by multidisciplinary teams ensuring products are developed with both pharmaceutical rigor and food science expertise.</p>
                <p className="text-sm text-muted-foreground">The team undertakes raw material evaluation, ingredient standardization, formulation development, stability assessment, and safety evaluation in alignment with regulatory guidelines.</p>
              </div>
            </SectionReveal>

            {/* Unit 3 */}
            <SectionReveal>
              <div className="p-8 bg-card rounded-sm card-shadow border-t-4 border-highlight h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-highlight/20 flex items-center justify-center">
                    <Droplets className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground">3. Cosmetic and Detergent R&D</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Dedicated to the formulation, development, and optimization of medicated and non-medicated cosmetic, personal care, and hygiene products.</p>
                <p className="text-sm text-muted-foreground mb-4">Scope includes soaps, face washes, creams, lotions, serums, hair oils, hair growth serums, and antiseptic formulations. Emphasis is placed on scientific formulation design, ingredient compatibility, product stability, and performance evaluation.</p>
                <p className="text-sm text-muted-foreground">Supported by pilot scale development facilities, enabling formulation optimization, process standardization, and scale-up studies with robust standard operating procedures (SOPs).</p>
              </div>
            </SectionReveal>

            {/* Unit 4 */}
            <SectionReveal delay={0.2}>
              <div className="p-8 bg-card rounded-sm card-shadow border-t-4 border-highlight h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-highlight/20 flex items-center justify-center">
                    <TestTube className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground">4. Bioequivalence and Analytical Laboratory</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Droga Bioequivalence and Analytical Center (DBEAC) provides bioequivalence (BE) studies and comprehensive analytical testing services ensuring the quality of pharmaceutical products.</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-foreground text-sm">4.1. Bioequivalence studies</h4>
                    <ul className="text-sm text-muted-foreground list-disc pl-4 mt-1 space-y-1">
                      <li>Clinical unit: GCP compliant with ICU facility.</li>
                      <li>Medical laboratory: sample processing and analysis.</li>
                      <li>Bioanalytical laboratory: Analysis of biological matrix, bioavailability, pharmacokinetic studies, method development.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-sm">4.2. Physicochemical analysis</h4>
                    <p className="text-sm text-muted-foreground mt-1">Includes raw material identification, purity determination, assay, dissolution, disintegration, hardness, friability, particle size, moisture content, and stability studies.</p>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* 03 Our Facilities */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-grid relative">
          <div className="absolute -left-4 top-0 font-heading text-[10rem] md:text-[14rem] font-black text-black/[0.04] leading-none select-none pointer-events-none section-number">03</div>
          <SectionReveal>
            <div className="flex items-center gap-4 mb-2">
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-muted-foreground">03</span>
              <div className="w-12 h-px bg-[#FFF200] origin-left section-line" />
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground">Infrastructure</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mt-4 text-foreground">Our Facilities</h2>
          </SectionReveal>

          <div className="mt-12 space-y-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <SectionReveal>
                <h3 className="font-heading text-3xl font-bold mb-4">1. Bioanalytical & Analytical Laboratory</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Operates in two niches. Analytical laboratory focuses on physicochemical analysis of pharmaceuticals which ensures the quality, safety, and efficacy of drug products. It includes evaluation of oral solid, liquid, and semisolid dosage forms through tests such as raw material identification, purity determination, and assay.
                </p>
                <p className="text-lg text-muted-foreground">
                  Our bioanalytical laboratory focuses on studying drugs within biological systems to support research and development. It performs analysis of biological matrices such as blood, plasma, and urine, along with bioavailability and pharmacokinetic studies.
                </p>
              </SectionReveal>
              <SectionReveal delay={0.2}>
                <div className="rounded-sm overflow-hidden shadow-xl aspect-[4/3] relative">
                  <img src={labImg} alt="Analytical Laboratory" className="absolute inset-0 w-full h-[130%] -top-[15%] object-cover about-parallax-img" />
                </div>
              </SectionReveal>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <SectionReveal className="lg:order-1">
                <div className="rounded-sm overflow-hidden shadow-xl aspect-[4/3] relative">
                  <img src={heroImg} alt="Research & Formulation Laboratory" className="absolute inset-0 w-full h-[130%] -top-[15%] object-cover about-parallax-img" />
                </div>
              </SectionReveal>
              <SectionReveal className="lg:order-2" delay={0.2}>
                <h3 className="font-heading text-3xl font-bold mb-4">2. Research & Formulation Development Laboratory</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  The drug development wing focuses on developing drug products through formulation studies to maximize the effectiveness and safety of APIs. It establishes the quality of drug products as a continuous process from development to commercial production.
                </p>
                <p className="text-lg text-muted-foreground">
                  The Research Laboratory serves as the core of the Drug Discovery Wing. It integrates traditional knowledge with modern scientific methodologies. Equipped with advanced infrastructure and a multidisciplinary team, it transforms promising natural compounds into safe pharmaceutical solutions.
                </p>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width parallax image break */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img src={facilityImg} alt="Facility" className="absolute inset-0 w-full h-[140%] -top-[20%] object-cover about-parallax-img" />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <SectionReveal className="text-center max-w-2xl px-6">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-white tracking-tight">World-Class Facilities</h2>
            <p className="mt-4 text-lg text-white/70">Our integrated research campus houses laboratories, bioequivalence units, and quality control centers.</p>
          </SectionReveal>
        </div>
      </section>

      {/* 04 Manufacturing — 5-segment reveal */}
      <section className="relative section-padding overflow-hidden mfg-section">
        <div className="absolute inset-0 flex z-0">
          {[0,1,2,3,4].map(i => <div key={i} className="w-1/5 h-full bg-[#FFF200] translate-y-full mfg-segment" />)}
        </div>
        <div className="container-grid relative z-10 mfg-content invisible">
          <SectionReveal className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-2">
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-black/60">04</span>
              <div className="w-12 h-px bg-black origin-left section-line" />
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-black/60">Coming Soon</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mt-4 text-black">Manufacturing</h2>
          </SectionReveal>

          <div className="space-y-16">
            {/* R&D Center */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <SectionReveal>
                <div className="overflow-hidden rounded-sm shadow-lg aspect-[4/3] relative">
                  <img src={project2Img} alt="Research & Development Center" className="absolute inset-0 w-full h-[130%] -top-[15%] object-cover about-parallax-img" />
                </div>
              </SectionReveal>
              <SectionReveal delay={0.2}>
                <h3 className="font-heading text-2xl font-bold mb-4">Research & Development Center</h3>
                <p className="text-muted-foreground">
                  Situated on 9,951 sq.m of land in Kilinto Industrial Park, our state-of-the-art center is designed to advance research, development, and quality testing for the pharmaceutical, academic, research, cosmetic, and food & beverage industries.
                </p>
                <p className="mt-4 text-muted-foreground">
                  The center is dedicated to supporting local innovation and reducing dependence on imported APIs, excipients, formulations, and other raw materials by leveraging the country's indigenous knowledge and natural resources.
                </p>
              </SectionReveal>
            </div>

            {/* Oil Manufacturing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <SectionReveal className="lg:order-1">
                <h3 className="font-heading text-2xl font-bold mb-4">Droga Oil Manufacturing Plant</h3>
                <p className="text-muted-foreground">
                  A 1,000 sq.m processing facility is being established to harness the health promoting potential of fixed and volatile oils. The facility is designed to process these natural oils at scale, ensuring high-quality standards suitable for both local markets and export.
                </p>
                <p className="mt-4 text-muted-foreground">
                  This facility aligns with our mission to leverage indigenous resources, create value-added products, and contribute to both public health and economic growth.
                </p>
              </SectionReveal>
              <SectionReveal className="lg:order-2" delay={0.2}>
                <div className="overflow-hidden rounded-sm shadow-lg aspect-[4/3] relative">
                  <img src={project1Img} alt="Oil Manufacturing Plant" className="absolute inset-0 w-full h-[130%] -top-[15%] object-cover about-parallax-img" />
                </div>
              </SectionReveal>
            </div>

            {/* Soap Manufacturing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <SectionReveal>
                <div className="overflow-hidden rounded-sm shadow-lg aspect-[4/3] relative">
                  <img src={project3Img} alt="Soap Manufacturing Plant" className="absolute inset-0 w-full h-[130%] -top-[15%] object-cover about-parallax-img" />
                </div>
              </SectionReveal>
              <SectionReveal delay={0.2}>
                <h3 className="font-heading text-2xl font-bold mb-4">Soap Manufacturing Plant</h3>
                <p className="text-muted-foreground">
                  The Droga Soap and Cosmetics Manufacturing Plant is an upcoming initiative designed to strengthen local production of 100% natural skincare solutions. The facility will serve as a hub for innovation in natural cosmetics.
                </p>
                <p className="mt-4 text-muted-foreground">
                  It will focus on producing distinct soap varieties crafted from natural ingredients and enriched with beneficial botanicals, combining modern manufacturing with traditional herbal wisdom.
                </p>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 05 Conservation & Cultivation */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-grid relative">
          <div className="absolute -left-4 top-0 font-heading text-[10rem] md:text-[14rem] font-black text-black/[0.04] leading-none select-none pointer-events-none section-number">05</div>
          <SectionReveal className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-2">
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-muted-foreground">05</span>
              <div className="w-12 h-px bg-[#FFF200] origin-left section-line" />
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground">Coming Soon</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mt-4 text-foreground">Conservation & Cultivation</h2>
          </SectionReveal>

          <div className="space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <SectionReveal>
                <div className="overflow-hidden rounded-sm shadow-lg aspect-[4/3] relative">
                  <img src={plantsImg} alt="Medicinal Plant Nursery" className="absolute inset-0 w-full h-[130%] -top-[15%] object-cover about-parallax-img" />
                </div>
              </SectionReveal>
              <SectionReveal delay={0.2}>
                <h3 className="font-heading text-2xl font-bold mb-4">Droga Medicinal Plant Nursery</h3>
                <p className="text-muted-foreground">
                  A dedicated Medicinal Plant Nursery is being established in Butajira to cultivate and preserve a wide range of medicinal plants as well as food-based plants with recognized medicinal properties.
                </p>
                <p className="mt-4 text-muted-foreground">
                  This nursery aims to strengthen the link between traditional knowledge and modern scientific research, ensuring that Ethiopia's botanical wealth contributes to health, wellness, and innovation.
                </p>
              </SectionReveal>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <SectionReveal className="lg:order-1">
                <h3 className="font-heading text-2xl font-bold mb-4">Butajira Rosemary Processing Plant</h3>
                <p className="text-muted-foreground">
                  The Butajira Rosemary Processing Plant aims to improve the livelihood of farmers through sustainable rosemary cultivation and market integration. The initiative covers investment land and partner farms, engaging local farmers in modern rosemary production.
                </p>
                <p className="mt-4 text-muted-foreground">
                  The project focuses on producing high-quality rosemary for essential oil extraction used in pharmaceutical, cosmetic, and food industries. It combines scientific cultivation practices with irrigation technology to yield a consistent supply.
                </p>
              </SectionReveal>
              <SectionReveal className="lg:order-2" delay={0.2}>
                <div className="overflow-hidden rounded-sm shadow-lg aspect-[4/3] relative">
                  <img src={project4Img} alt="Rosemary Processing Plant" className="absolute inset-0 w-full h-[130%] -top-[15%] object-cover about-parallax-img" />
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission — CRF bold statement block */}
      <section id="vision" className="bg-[#FFF200] py-24 md:py-32 relative overflow-hidden">
        <div className="container-grid px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <SectionReveal>
              <div className="flex items-center gap-3 mb-6">
                <Eye className="w-6 h-6 text-black" />
                <span className="text-sm font-bold uppercase tracking-[0.3em] text-black/60">Our Vision</span>
              </div>
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-black leading-tight">
                To be a hub of scientific excellence, innovation, and self-reliance in pharmaceuticals, nutraceuticals, cosmetics, and functional foods.
              </h3>
              <p className="mt-6 text-lg text-black/70 leading-relaxed">
                Transforming Ethiopia's botanical wealth into world-class health solutions.
              </p>
            </SectionReveal>
            <SectionReveal delay={0.15}>
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-6 h-6 text-black" />
                <span className="text-sm font-bold uppercase tracking-[0.3em] text-black/60">Our Mission</span>
              </div>
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-black leading-tight">
                To support local innovation, reduce dependence on imported APIs and excipients, and advance therapeutic discoveries.
              </h3>
              <p className="mt-6 text-lg text-black/70 leading-relaxed">
                Through rigorous research, regulatory compliance, and cross-disciplinary collaboration.
              </p>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <div id="milestones">
        <JourneySection timelineData={timelineData} />
      </div>

      {/* Leadership */}
      <section id="leadership" className="section-padding bg-surface-subtle relative overflow-hidden">
        <div className="container-grid relative">
          <SectionReveal>
            <div className="flex items-center gap-4 mb-2">
              <div className="w-12 h-px bg-[#FFF200] origin-left section-line" />
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground">Team</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mt-4 text-foreground">Leadership</h2>
          </SectionReveal>
          <motion.div
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {leaders.map((leader) => (
              <motion.div
                key={leader.name}
                variants={itemVariants}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group p-8 bg-card card-shadow hover:bg-highlight rounded-sm text-center transition-all duration-300 cursor-pointer border-t-2 border-transparent hover:border-[#FFF200]"
              >
                <div className="w-20 h-20 mx-auto bg-surface-subtle rounded-full flex items-center justify-center mb-4 group-hover:bg-black/5 transition-colors duration-300">
                  <Users className="w-8 h-8 text-black" />
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
      <section id="partners" className="section-padding relative overflow-hidden">
        <div className="container-grid text-center relative">
          <SectionReveal>
            <div className="flex items-center justify-center gap-4 mb-2">
              <div className="w-12 h-px bg-[#FFF200] origin-left section-line" />
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground">Collaboration</span>
              <div className="w-12 h-px bg-[#FFF200] origin-right section-line" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mt-4 text-foreground">Our Partners</h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              We collaborate with pharmaceutical companies, research institutes, academic organizations, and regulatory bodies.
            </p>
          </SectionReveal>
          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-8 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {partners.map((partner, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-6 bg-surface-subtle rounded-sm flex items-center justify-center h-[120px] hover:bg-highlight transition-colors duration-300 cursor-pointer min-w-[200px]"
              >
                {partner.logo ? (
                  <img src={partner.logo} alt={partner.name} className="max-h-[80px] max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
                ) : (
                  <span className="font-heading text-sm md:text-base font-bold text-muted-foreground hover:text-black transition-colors duration-300 text-center">{partner.name}</span>
                )}
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