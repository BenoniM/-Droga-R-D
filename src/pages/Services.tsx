import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import {
  FlaskConical, Microscope, ArrowRight,
  CheckCircle, Beaker, ClipboardCheck, Gauge, ShieldCheck, Clock, Building2,
  BarChart3, Activity, Waves, Timer, Scale, Droplets, Flame, Settings,
  Gavel, BookOpen, Database, Lock
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import { Button } from "@/components/ui/button";

import labImg from "@/assets/Images/IMG_4555.jpg";
import logoImg from "@/assets/logo.png";

import chooseAccuracy from "@/assets/choose/Accuracy.jpg";
import chooseAdvanced from "@/assets/choose/Advanced.jpg";
import chooseFast from "@/assets/choose/Fast.jpg";
import chooseQC from "@/assets/choose/QC.jpg";
import chooseRegulatory from "@/assets/choose/Regulatory.jpg";

import whyChooseUs1 from "@/assets/whychooseus/why1.jpg";
import whyChooseUs2 from "@/assets/whychooseus/why2.jpg";
import whyChooseUs3 from "@/assets/whychooseus/why3.jpg";
import whyChooseUs4 from "@/assets/whychooseus/why4.png";

import raw1 from "@/assets/raw/raw1.mp4";
import raw2 from "@/assets/raw/raw2.mp4";

import finished1 from "@/assets/finished/finished1.mp4";
import finished2 from "@/assets/finished/finished2.mp4";
import finished3 from "@/assets/finished/finished3.mp4";

import highperformance from "@/assets/instrument/highperformance.jpg";
import uvvisible from "@/assets/instrument/uv1.jpg";
// import uvvisible2 from "@/assets/instrument/uv2.jpg";
import fourier from "@/assets/instrument/fourier.jpg";
import dissolution1 from "@/assets/instrument/dissolution1.jpg";
import dissolution2 from "@/assets/instrument/dissolution2.jpg";
import analyticalbalance from "@/assets/instrument/analytical.jpg";
import phmeter from "@/assets/instrument/ph1.jpg";
import phmeter2 from "@/assets/instrument/ph2.jpg";
import laboratoryscale from "@/assets/instrument/laboratory1.jpg";
import laboratoryscale2 from "@/assets/instrument/laboratory2.jpg";
import laboratoryscale3 from "@/assets/instrument/laboratory3.jpg";


import shimadzuLogo from "@/assets/Partners/Shimadzu.png";
import electroLabLogo from "@/assets/Partners/Electrolab.png";
import lotusLogo from "@/assets/Partners/Lotus.png";
import emiLogo from "@/assets/Partners/EMI.png";
import tekLogo from "@/assets/Partners/Tek.png";
import dbuLogo from "@/assets/Partners/Debre Berhan.png";
import aauLogo from "@/assets/Partners/AAU.png";
import emaLogo from "@/assets/Partners/EMA.png";
import breezeLogo from "@/assets/Partners/Breeze.png";

gsap.registerPlugin(ScrollTrigger);

// Main service cards
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
const baseInstruments = [
  { name: "High Performance Liquid Chromatography (HPLC)", icon: Activity, desc: "Separates, identifies, and quantifies active pharmaceutical ingredients and impurities with high precision and sensitivity." },
  { name: "UV-Visible Spectrophotometers", icon: Waves, desc: "Measures absorbance and transmittance of compounds across UV and visible wavelengths for quantitative and qualitative analysis." },
  { name: "Fourier-Transform Infrared Spectrometer (FTIR)", icon: Microscope, desc: "Identifies molecular structures and functional groups through characteristic infrared absorption patterns." },
  { name: "Dissolution and Disintegration Test Apparatus", icon: Timer, desc: "Evaluates the rate and extent of drug release from solid dosage forms under controlled physiological conditions." },
  { name: "Analytical Balances and Precision Weighing Systems", icon: Scale, desc: "Provides accurate mass measurements critical for formulation, assay preparation, and quality control testing." },
  { name: "pH Meters", icon: Droplets, desc: "Measures hydrogen ion concentration in solutions to ensure formulations meet required acidity or alkalinity specifications." },
  { name: "Viscometers", icon: Beaker, desc: "Determines the viscosity of liquid and semi-solid formulations to ensure consistency and optimal flow properties." },
  { name: "Hot Air Ovens and Water Baths", icon: Flame, desc: "Supports thermal processing including drying, sterilization, and temperature-controlled reactions for sample preparation." },
  { name: "Laboratory Scale Sample Processing Equipment", icon: Settings, desc: "Facilitates grinding, mixing, filtration, and other preparation steps essential for reproducible analytical results." },
];

/** Photos shown below the description in each instrument card (index aligns with baseInstruments). */
const instrumentCardPhotos: (string[] | null)[] = [
  [highperformance],
  [uvvisible],
  [fourier],
  [dissolution2],
  [analyticalbalance],
  [phmeter, phmeter2],
  null,
  null,
  [laboratoryscale, laboratoryscale2, laboratoryscale3],
];

// Quality commitment points
const qualityPoints = [
  { text: "EFDA regulatory compliance in all applicable research, development, and analytical activities", icon: Gavel },
  { text: "Conformity with recognized Pharmacopoeial standards and established quality guidelines", icon: BookOpen },
  { text: "Equipment qualification and regular calibration to ensure accuracy, reliability, and reproducibility", icon: Settings },
  { text: "Data integrity and full traceability, supported by controlled documentation and secure record management", icon: Database },
  { text: "Impartial and confidential testing, ensuring objectivity and protection of proprietary information", icon: Lock },
];

// Why choose us
const whyChooseUs = [
  {
    icon: Building2,
    title: "Segregated QC Facilities",
    desc: "Dedicated and controlled QC areas ensure secure, unbiased, and reliable testing.",
    img: whyChooseUs1
  },
  {
    icon: CheckCircle,
    title: "Accuracy & Reliability",
    desc: "Analytical processes designed to deliver precise, consistent, and reproducible results.",
    img: whyChooseUs2
  },
  {
    icon: ClipboardCheck,
    title: "Regulatory-Ready Reports",
    desc: "Comprehensive documentation prepared to meet applicable regulatory and compliance requirements.",
    img: chooseRegulatory
  },
  {
    icon: Clock,
    title: "Fast Turnaround Times",
    desc: "Efficient workflows and skilled teams enable timely analysis without compromising quality.",
    img: whyChooseUs4
  },
  {
    icon: Microscope,
    title: "Advanced Infrastructure",
    desc: "Modern, well-maintained laboratory equipment supports high-quality research and testing outcomes.",
    img: whyChooseUs3
  },
];



const Services = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(() => {
    // Hero Animation
    gsap.fromTo('.hero-content',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    );

    // Staggered Cards (Services, Instruments, Why Choose Us, Clients)
    gsap.utils.toArray<HTMLElement>('.stagger-container').forEach(container => {
      const cards = container.querySelectorAll('.stagger-item');
      gsap.fromTo(cards,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', stagger: 0.1,
          scrollTrigger: {
            trigger: container,
            start: "top 85%",
            once: true
          }
        }
      );
    });

    // Simple Fade/Slide Up Items (Quality points)
    gsap.utils.toArray<HTMLElement>('.fade-up-item').forEach((item, index) => {
      gsap.fromTo(item,
        { opacity: 0, x: -10 },
        {
          opacity: 1, x: 0, duration: 0.5, delay: index * 0.1, ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            once: true
          }
        }
      );
    });

    // Parallax on facility info boxes (About style)
    gsap.utils.toArray<HTMLElement>('.facility-info-box').forEach((box) => {
      gsap.fromTo(box, { y: 100 }, {
        y: -100, ease: "none",
        scrollTrigger: {
          trigger: box.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });
    });

    // Parallax on all about-parallax-img elements
    gsap.utils.toArray<HTMLElement>('.about-parallax-img').forEach((img) => {
      gsap.fromTo(img, { yPercent: -15 }, {
        yPercent: 15, ease: "none",
        scrollTrigger: { trigger: img.parentElement, start: "top bottom", end: "bottom top", scrub: true }
      });
    });

    // Parallax on images
    gsap.utils.toArray<HTMLElement>('.svc-parallax-img').forEach((img) => {
      gsap.fromTo(img, { yPercent: -15 }, {
        yPercent: 15, ease: "none",
        scrollTrigger: {
          trigger: img.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
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
        opacity: 0.04, x: 0, duration: 1, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: "top 85%", once: true }
      });
    });

    ScrollTrigger.refresh();
  }, { scope: pageRef });

  return (
    <div className="min-h-screen bg-background" ref={pageRef}>
      <Navbar />

      {/* Hero Section - Standardized Premium Hero */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.img
            src={labImg}
            alt="Services Hero"
            className="absolute inset-0 w-full h-[120%] -top-[10%] object-cover about-parallax-img"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
        <div className="relative container-grid px-6 z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }}>
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#FFF200]">Comprehensive Solutions</span>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mt-4 leading-tight">
              Our Services
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
              Aimed at providing bioequivalence (BE) studies, pharmacokinetic studies and comprehensive analytical testing services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 01 Analytical Testing Services Grid */}
      <section className="section-padding relative overflow-hidden bg-white">
        <div className="container-grid relative">
          <div className="absolute -left-4 top-0 font-heading text-[10rem] md:text-[14rem] font-black text-black/[0.04] leading-none select-none pointer-events-none section-number">01</div>
     

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-container">
            {services.map((service) => (
              <div
                key={service.title}
                className="stagger-item opacity-0 group p-8 bg-card shadow-sm border border-black/5 hover:bg-highlight hover:shadow-xl transition-all duration-300 rounded-sm cursor-pointer hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-surface-subtle group-hover:bg-white/50 rounded-full flex items-center justify-center mb-6 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-base font-body text-muted-foreground group-hover:text-foreground/80 leading-relaxed transition-colors duration-300">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 02 Test Parameters - Overlapping layout style */}
      <section className="section-padding relative overflow-hidden bg-surface-subtle">
        <div className="container-grid relative">
          <div className="absolute -left-4 top-0 font-heading text-[10rem] md:text-[14rem] font-black text-black/[0.04] leading-none select-none pointer-events-none section-number">02</div>
          <SectionReveal>
                 
            <div className="flex items-center gap-4 mb-2">
              <span className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-muted-foreground">Phase I Services</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mt-4 text-foreground leading-tight">Analytical Testing Services</h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Droga bioanalytical & analytical laboratory in phase I offers diversified quality control testing.
            </p>
          
          </SectionReveal>

          <div className="mt-12 md:mt-20 space-y-16 md:space-y-32">
            {/* Raw Material Testing */}
            <div className="relative pt-16 lg:pt-24 mb-16 md:mb-32">
              <div className="flex flex-col lg:flex-row relative items-start lg:items-center">
                {/* Dark Top Title */}
                <div className="absolute -top-8 left-0 lg:left-[5%] z-20 bg-black px-6 py-4 md:px-10 md:py-6 shadow-md w-auto max-w-[90%]">
                  <h3 className="text-white font-heading text-lg md:text-2xl font-bold tracking-widest uppercase m-0">
                    Raw Material Testing
                  </h3>
                </div>

                {/* Video strip — raw material testing (matches bioanalytical layout) */}
                <div className="w-full lg:w-[70%] h-[250px] md:h-[400px] lg:h-[550px] relative overflow-hidden mt-12 lg:mt-0 grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2 rounded-sm">
                  <video src={raw1} autoPlay loop muted playsInline className="h-full w-full min-h-[200px] sm:min-h-0 object-cover svc-parallax-img" />
                  <video src={raw2} autoPlay loop muted playsInline className="h-full w-full min-h-[200px] sm:min-h-0 object-cover svc-parallax-img" />
                </div>

                {/* Content Box */}
                <div className="w-[90%] mx-auto lg:w-[45%] lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 z-10 bg-[#FFF200] p-8 md:p-12 shadow-xl -mt-8 md:-mt-16 lg:mt-0 relative facility-info-box">
                  <SectionReveal delay={0.2}>
                    <h4 className="font-heading text-2xl md:text-3xl font-black text-black mb-6 uppercase leading-tight tracking-tight">
                      Ensuring Quality at the Source
                    </h4>
                    <ul className="space-y-4">
                      {["Identification of APIs", "Assay of APIs", "Excipient Analysis", "Moisture Content Determination (LOD)"].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-base text-black/80 font-medium">
                          <CheckCircle className="w-5 h-5 text-black" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </SectionReveal>
                </div>
              </div>
            </div>

            {/* Finished Product Testing */}
            <div className="relative pt-16 lg:pt-24 mb-8 md:mb-16">
              <div className="flex flex-col lg:flex-row relative items-start lg:items-center justify-end">
                {/* Dark Top Title */}
                <div className="absolute -top-8 right-0 lg:right-[5%] z-20 bg-black px-6 py-4 md:px-10 md:py-6 shadow-md w-auto max-w-[90%] text-right">
                  <h3 className="text-white font-heading text-lg md:text-2xl font-bold tracking-widest uppercase m-0">
                    Finished Product Testing
                  </h3>
                </div>

                {/* Content Box */}
                <div className="w-[90%] mx-auto lg:w-[45%] lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 z-10 bg-white p-8 md:p-12 shadow-xl border border-black/5 -mt-8 md:-mt-16 lg:mt-0 relative order-2 lg:order-1 facility-info-box">
                  <SectionReveal delay={0.2}>
                  
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {["Assay", "Identification", "Content Uniformity", "Dissolution", "Disintegration", "Hardness", "Friability", "pH Measurement"].map((item) => (
                        <div key={item} className="flex items-center gap-2 text-base text-black/80 font-medium">
                          <CheckCircle className="w-4 h-4 text-[#FFF200] flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </SectionReveal>
                </div>

                {/* Video strip — finished product testing */}
                <div className="w-full lg:w-[70%] h-[250px] md:h-[400px] lg:h-[550px] relative overflow-hidden mt-12 lg:mt-0 order-1 lg:order-2 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-2 rounded-sm">
                  <video src={finished1} autoPlay loop muted playsInline className="h-full w-full min-h-[200px] sm:min-h-0 object-cover svc-parallax-img" />
                  <video src={finished2} autoPlay loop muted playsInline className="h-full w-full min-h-[200px] sm:min-h-0 object-cover svc-parallax-img" />
                  <video src={finished3} autoPlay loop muted playsInline className="h-full w-full min-h-[200px] sm:min-h-0 object-cover svc-parallax-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 Instrumentation - Our Analytical Capabilities */}
      <section className="relative bg-surface-subtle py-24">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.15] z-0 pointer-events-none">
          <img src={logoImg} alt="Droga Logo" className="w-[500px] h-[500px] object-contain filter blur-[10px]" />
        </div>

        <div className="container-grid relative z-10 px-6">
          <div className="absolute -left-4 top-0 font-heading text-[10rem] md:text-[14rem] font-black text-black/[0.04] leading-none select-none pointer-events-none section-number">03</div>
          <div className="flex items-center gap-4 mb-2">
            <span className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-muted-foreground">Advanced Instrumentation</span>
          </div>
          <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tight mt-4 text-foreground leading-tight">Our Analytical Capabilities</h2>

          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 md:gap-8">
            {baseInstruments.map((inst, index) => {
              const photos = instrumentCardPhotos[index];
              const Icon = inst.icon;
              return (
                <article
                  key={inst.name}
                  className="flex flex-col p-6 md:p-8 bg-white border-l-4 border-highlight rounded-r-md shadow-md"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-surface-subtle rounded-full flex items-center justify-center shrink-0 border border-black/5">
                      <Icon className="w-7 h-7 md:w-8 md:h-8 text-black" />
                    </div>
                    <h3 className="font-heading text-lg md:text-xl font-bold text-foreground leading-tight pt-1">
                      {inst.name}
                    </h3>
                  </div>
                  <p className="text-foreground/80 text-sm md:text-base leading-relaxed flex-1">
                    {inst.desc}
                  </p>
                  {photos && photos.length > 0 && (
                    <div
                      className={
                        photos.length >= 3
                          ? "mt-5 grid grid-cols-1 sm:grid-cols-3 gap-2"
                          : photos.length === 2
                            ? "mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2"
                            : "mt-5"
                      }
                    >
                      {photos.map((src, i) => (
                        <img
                          key={i}
                          src={src}
                          alt={`${inst.name} — photo ${i + 1}`}
                          className="w-full h-48 sm:h-64 object-cover rounded-md border border-black/5"
                        />
                      ))}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 04 Quality & Compliance */}
      <section className="section-padding relative overflow-hidden bg-surface-subtle">
        <div className="container-grid relative">
          <div className="absolute -left-4 top-0 font-heading text-[10rem] md:text-[14rem] font-black text-black/[0.04] leading-none select-none pointer-events-none section-number">04</div>
          <SectionReveal>
            <div className="flex items-center gap-4 mb-2">
              <span className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-muted-foreground">Quality Commitment</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mt-4 text-foreground leading-tight">Quality & Compliance</h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Quality and compliance are integral to all our research, development, and testing activities. We maintain the highest standards of scientific integrity and regulatory adherence.
            </p>
          </SectionReveal>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Regulatory and Quality Framework */}
            <div className="space-y-8">
              <SectionReveal delay={0.1}>
                <h3 className="font-heading text-3xl font-bold text-foreground">Regulatory and Quality Framework</h3>
              </SectionReveal>
              <ul className="space-y-6">
                {qualityPoints.map((point, idx) => (
                  <li key={idx} className="fade-up-item opacity-0 group flex items-start gap-4">
                    <point.icon className="w-6 h-6 text-highlight group-hover:text-foreground mt-0.5 flex-shrink-0 transition-colors duration-300" />
                    <span className="text-lg text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed font-medium">{point.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quality Assurance card */}
            <div className="relative">
              <SectionReveal delay={0.3}>
                <div className="bg-card p-10 rounded-sm shadow-xl border border-black/5 hover:border-highlight transition-all duration-300 h-full relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-highlight group-hover:w-full transition-all duration-500 z-0 opacity-10 group-hover:opacity-100" />
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-highlight rounded-full flex items-center justify-center mb-8">
                      <ClipboardCheck className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">Quality Assurance & Review Process</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed group-hover:text-black/80 transition-colors duration-300">
                      All analyses and evaluations are conducted by trained and authorized professionals following approved standard operating procedures. Test results are independently reviewed and approved by the Quality Assurance (QA) team prior to final release, ensuring accuracy, compliance, and consistency.
                    </p>
                  </div>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Break */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img
          src={labImg}
          alt="Research facility"
          className="w-full h-[140%] object-cover absolute -top-[20%] svc-parallax-img"
        />
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
          <SectionReveal className="text-center max-w-2xl px-6">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-white tracking-tight">
              Trusted by Industry Leaders
            </h2>
            <div className="w-24 h-1 bg-[#FFF200] mx-auto mt-8 section-line origin-center" />
            <p className="mt-8 text-white/80 font-body text-lg md:text-xl leading-relaxed">
              We provide specialized research, analytical, and quality testing services to a diverse range of clients.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* 05 Why Choose Us - Split layout */}
      <section className="relative overflow-x-hidden bg-white">
        <div className="flex flex-col lg:flex-row lg:min-h-screen">
          {/* LEFT — list of points */}
          <div className="w-full lg:w-[45%] flex flex-col justify-start pt-16 md:pt-20 lg:pt-[12vh] px-8 md:px-16 lg:px-20 pb-16 lg:pb-12 relative z-10 bg-white lg:min-h-screen lg:max-h-screen lg:overflow-y-auto">
            {/* Section label */}
            <div className="flex items-center gap-4 mb-6 md:mb-8 shrink-0">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">Why Droga R&D</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight mb-6 md:mb-10 shrink-0">
              Why Choose Us
            </h2>

            {/* Items */}
            <ul className="space-y-0 divide-y divide-black/8 border-t border-black/8 pb-4">
              {whyChooseUs.map((item, i) => (
                <li
                  key={item.title}
                  className="group cursor-pointer py-4 md:py-6 transition-all duration-300"
                  onMouseEnter={() => setActiveIndex(i)}
                  onClick={() => setActiveIndex(i)}
                >
                  <div className="flex items-start gap-5">
                    {/* Number */}
                    <span className={`font-heading text-sm font-bold tabular-nums transition-all duration-300 mt-1.5 flex-shrink-0 ${activeIndex === i ? "text-foreground" : "text-muted-foreground/40"}`}>
                      0{i + 1}
                    </span>

                    <div className="flex-1">
                      {/* Title */}
                      <h3 className={`font-heading text-xl md:text-2xl font-bold tracking-tight transition-all duration-300 ${activeIndex === i ? "text-foreground" : "text-foreground/50"}`}>
                        {item.title}
                      </h3>

                      {/* Description — expands on active */}
                      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === i ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
                        <p className="text-base text-muted-foreground leading-relaxed max-w-md mb-4">{item.desc}</p>
                        
                        {/* Mobile / tablet image */}
                        <div className="lg:hidden w-full h-[180px] sm:h-[200px] rounded-md overflow-hidden relative shadow-sm">
                          <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                        </div>
                      </div>
                    </div>

                    {/* Active indicator bar */}
                    <div className={`w-2 self-stretch flex-shrink-0 transition-all duration-300 ${activeIndex === i ? "bg-[#FFF200]" : "bg-transparent"}`} />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — stacked image slider */}
          <div className="hidden lg:flex w-full lg:w-[55%] lg:min-h-screen lg:sticky lg:top-0 relative items-center justify-end bg-surface-subtle">
            {/* Extremely Wide Yellow accent pillar — right edge */}
            <div className="absolute top-0 right-0 w-[36rem] h-full bg-[#FFF200] z-20" />

            {/* Image container — stuck to right, reduced height */}
            <div className="relative w-[92%] h-[75%] shadow-2xl overflow-hidden z-30 rounded-l-md bg-black">
              {whyChooseUs.map((item, i) => (
                <div
                  key={item.title}
                  className="absolute inset-0 transition-transform duration-700 ease-in-out will-change-transform"
                  style={{
                    transform: i <= activeIndex ? "translateX(0%)" : "translateX(100%)",
                    zIndex: i + 1,
                  }}
                >
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  {/* Caption */}
                  <div className={`absolute bottom-8 left-8 right-8 z-20 transition-all duration-700 ${activeIndex === i ? "translate-y-0 opacity-100 delay-300" : "translate-y-4 opacity-0"}`}>
                    <p className="font-heading text-white text-2xl font-bold leading-snug">{item.title}</p>
                    <div className="w-12 h-1 bg-[#FFF200] mt-3" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* Final CTA */}
      <section className="section-padding relative overflow-hidden bg-white border-t border-black/10">
        <div className="container-grid text-center relative z-10">
          <SectionReveal>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-foreground">Partner with Us</h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Contact us to discuss your analytical testing, QC, or research collaboration needs.
            </p>
            <div className="mt-10">
              <Button size="lg" asChild className="bg-black text-white hover:bg-highlight hover:text-black transition-all duration-300 font-bold px-10 py-6 text-sm uppercase tracking-widest rounded-none">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
