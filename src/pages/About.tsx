import { useRef, useState, useEffect } from "react";
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
import pillarVideo from "@/assets/pillar/4909887-hd_1080_1920_30fps.mp4";

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
  { name: "Shimadzu", logo: shimadzuLogo, description: "Leading global provider of analytical and measuring instruments." },
  { name: "Electro Lab", logo: electroLabLogo, description: "Advanced pharmaceutical testing equipment and calibration." },
  { name: "Lotus", logo: lotusLogo, description: "Strategic partner in high-quality raw material sourcing." },
  { name: "Ethiopian Meteorology Institute", logo: emiLogo, description: "Collaborating on environmental data for agricultural research." },
  { name: "Tek Calibration and Services Center", logo: tekLogo, description: "Ensuring precision and compliance of all laboratory equipment." },
  { name: "Debere Berhan University", logo: dbuLogo, description: "Academic partner for joint botanical and pharmaceutical research." },
  { name: "Breeze Pharmaceutical Technologies PLC", logo: breezeLogo, description: "Technology partner for modern formulation techniques." },
  { name: "Addis Ababa University", logo: aauLogo, description: "Fostering academic excellence and collaborative clinical studies." },
  { name: "EMA cons & Trading", logo: emaLogo, description: "Consulting and trading partner for regulatory compliance." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
} as const;

const unitPillars = [
  {
    title: "Drug Discovery & Development",
    icon: FlaskConical,
    summary: "Researching natural, herbal food and drug discovery, development and formulation.",
    details: [
      {
        heading: "Formulation Development",
        items: [
          "Solubility and stability improvement",
          "Solid Oral, Oral liquid, Semi solids & Injectable",
          "Continuous quality process",
          "API effectiveness optimization"
        ]
      },
      {
        heading: "Research Laboratory",
        items: [
          "Bioactive compound screening",
          "Preclinical evaluation",
          "Traditional & modern integration",
          "Mechanism of action studies"
        ]
      }
    ]
  },
  {
    title: "Food & Nutraceutical Sciences",
    icon: Leaf,
    summary: "Developing nutrition-based products for health, wellness, and preventive care.",
    details: [
      {
        heading: "Product Focus",
        items: [
          "Specialized dietary formulations",
          "Pediatric food supplements",
          "Health support formulations",
          "Volatile and fixed oils"
        ]
      },
      {
        heading: "Scientific Rigor",
        items: [
          "Ingredient standardization",
          "Stability assessment",
          "Safety evaluation",
          "Regulatory compliance"
        ]
      }
    ]
  },
  {
    title: "Cosmetic & Detergent R&D",
    icon: Droplets,
    summary: "Formulating and optimizing personal care and hygiene products.",
    details: [
      {
        heading: "Scope of Work",
        items: [
          "Medicated skincare",
          "Natural soaps and creams",
          "Hair growth serums",
          "Antiseptic formulations"
        ]
      },
      {
        heading: "Development",
        items: [
          "Pilot scale optimization",
          "Process standardization",
          "Ingredient compatibility",
          "Performance evaluation"
        ]
      }
    ]
  },
  {
    title: "Bioequivalence & Analytical",
    icon: TestTube,
    summary: "Comprehensive analytical testing ensuring quality of pharmaceutical products.",
    details: [
      {
        heading: "BE Studies",
        items: [
          "GCP compliant clinical unit",
          "ICU facility integration",
          "Pharmacokinetic studies",
          "Method development"
        ]
      },
      {
        heading: "Physicochemical",
        items: [
          "Raw material identification",
          "Purity determination",
          "Stability studies",
          "Dissolution & assay"
        ]
      }
    ]
  }
];

const HexagonalPartnersGrid = () => {
  const [activePartner, setActivePartner] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const togglePartner = (index: number) => {
    setActivePartner(activePartner === index ? null : index);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (gridRef.current && !gridRef.current.contains(event.target as Node)) {
        setActivePartner(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto py-12" ref={gridRef}>
      <div className="flex flex-wrap justify-center items-center px-4">
        {partners.map((partner, index) => {
          const isActive = activePartner === index;

          return (
            <div
              key={index}
              className={`relative w-[140px] h-[160px] md:w-[160px] md:h-[184px] transition-all duration-300 ${isActive ? 'z-40' : 'z-10'}`}
              style={{
                margin: '-1rem 0.5rem', // Interlocking honeycomb negative margins
              }}
            >
              {/* The expanded container uses absolute positioning to overlay without moving siblings */}
              <div
                onClick={() => togglePartner(index)}
                className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isActive
                  ? 'w-[300px] h-[345px] md:w-[360px] md:h-[415px]'
                  : 'w-[140px] h-[160px] md:w-[160px] md:h-[184px]'
                  }`}
                style={{
                  filter: isActive
                    ? "drop-shadow(0 25px 35px rgba(0,0,0,0.02)) drop-shadow(0 10px 10px rgba(0,0,0,0.15))"
                    : "drop-shadow(0 10px 15px rgba(0,0,0,0.1)) drop-shadow(0 4px 6px rgba(0,0,0,0.05))"
                }}
              >
                <div
                  className={`w-full h-full group flex flex-col items-center justify-center transition-colors duration-300 relative ${isActive ? 'bg-white pt-2 pb-2 px-6 md:pt-4 md:pb-4 md:px-10' : 'bg-white hover:bg-gray-50 p-0'
                    }`}
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                >
                  <div className={`flex items-center justify-center shrink-0 transition-all duration-500 ${isActive ? 'w-20 h-20 md:w-28 md:h-28 mb-4' : 'w-[70%] h-[70%]'}`}>
                    {partner.logo ? (
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className={`max-h-full max-w-full object-contain filter transition-all duration-300 ${isActive ? 'grayscale-0' : 'grayscale group-hover:grayscale-0'}`}
                      />
                    ) : (
                      <span className={`font-heading text-sm md:text-base font-bold text-center px-4 transition-colors duration-300 text-muted-foreground group-hover:text-black`}>{partner.name}</span>
                    )}
                  </div>

                  {/* We only render the text if active so it doesn't try to cram into the small hexagon */}
                  <div
                    className={`flex-1 text-center flex flex-col justify-start w-full transition-all duration-500 overflow-hidden ${isActive ? 'opacity-100 max-h-[200px]' : 'opacity-0 max-h-0'}`}
                  >
                    <h4 className={`font-heading text-lg md:text-xl font-bold mb-1 line-clamp-2 mt-1 text-black`}>{partner.name}</h4>
                    <p className={`text-xs md:text-sm leading-tight line-clamp-4 px-2 text-black/70`}>{partner.description}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const About = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const [activeUnit, setActiveUnit] = useState<number | null>(null);

  // GSAP scroll animations
  useGSAP(() => {
    // Parallax on all about-parallax-img elements
    gsap.utils.toArray<HTMLElement>('.about-parallax-img').forEach((img) => {
      gsap.fromTo(img, { yPercent: -15 }, {
        yPercent: 15, ease: "none",
        scrollTrigger: { trigger: img.parentElement, start: "top bottom", end: "bottom top", scrub: true }
      });
    });

    // Parallax on facility info boxes
    gsap.utils.toArray<HTMLElement>('.facility-info-box').forEach((box) => {
      gsap.fromTo(box, { y: 150 }, {
        y: -150, ease: "none",
        scrollTrigger: {
          trigger: box.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
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
        .to(".mfg-content", { autoAlpha: 1, duration: 0.15 }, "-=0.1")
        // Refresh ScrollTrigger after reveal so parallax calculates correct dimensions
        .call(() => ScrollTrigger.refresh(), [], "+=0.1");
    }

    // Pillar Section Scroll Flow
    const wrappers = gsap.utils.toArray<HTMLElement>('.pillar-wrapper');
    const videos = gsap.utils.toArray<HTMLElement>('.pillar-video');
    const video = videos[0];

    if (wrappers.length === 4 && video) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".pillars-pin-target",
          start: "top 70%",
          end: "bottom 90%",
          scrub: true,
        }
      });

      tl.fromTo(video, { y: 600 }, { y: 0, duration: 1, ease: "power2.out" })
        .fromTo([wrappers[1], wrappers[2]], { y: 600 }, { y: 35, duration: 1, ease: "power2.out" }, "+=0.1")
        .fromTo([wrappers[0], wrappers[3]], { y: 600 }, { y: 35, duration: 1, ease: "power2.out" }, "-=0.1");
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
            <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mt-4 leading-none whitespace-nowrap">
              Our Story
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
        </div>
      </section>

      {/* 01 Overview — CRF numbered section */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-grid relative">
          <div className="absolute -left-4 top-0 font-heading text-[10rem] md:text-[14rem] font-black text-black/[0.04] leading-none select-none pointer-events-none section-number">01</div>
          <SectionReveal>
            <div className="flex items-center gap-4 mb-2">
              <span className="text-xl font-bold uppercase tracking-[0.2em] text-muted-foreground">Overview</span>
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
                  <Button variant="outline" size="lg" asChild className="border-black text-black hover:bg-[#FFF200] hover:border-[#FFF200] hover:text-black transition-all duration-300 font-bold">
                    <Link to="/droga-science">Learn More <ArrowRight className="w-4 h-4 ml-2" /></Link>
                  </Button>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
      {/* 02 Major Units — Pillar style like Home Page */}
      <section className="relative overflow-hidden bg-white pillars-section">
        <div className="section-padding relative w-full h-full pillars-pin-target">

          {/* Background Video */}
          <div className="absolute inset-x-0 top-0 mt-4 md:mt-8 flex justify-center pointer-events-none z-0 overflow-hidden">
            <div className="w-[90%] md:w-[45%] lg:w-[23%] h-[550px] relative rounded-[0.3rem] overflow-hidden opacity-90 pillar-video border border-black/10">
              <video
                src={pillarVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="w-full max-w-[96%] mx-auto px-4 relative z-10 mix-blend-difference pt-12">
            <SectionReveal>
              <div className="flex flex-col items-center justify-center mb-2">
                <span className="block text-center text-sm md:text-base font-bold uppercase tracking-[0.2em] text-white">
                  Scientific Focus
                </span>
                <div className="w-12 h-px bg-white mt-4" />
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight mt-4 text-white text-center">
                Major Units
              </h2>
            </SectionReveal>
          </div>

          <div className="w-full max-w-[96%] mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap gap-6 mt-16 perspective-1000 pillar-card-container">
              {unitPillars.map((pillar, index) => {
                const isActive = activeUnit === index;
                const isCompressed = activeUnit !== null && !isActive;

                return (
                  <div
                    key={pillar.title}
                    className={`pillar-wrapper duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] w-full md:w-[calc(50%-0.75rem)] lg:w-auto lg:min-w-0 ${isActive ? 'pillar-flex-active' : isCompressed ? 'pillar-flex-compressed' : 'pillar-flex-default'}`}
                    style={{ transitionProperty: 'flex, width' }}
                  >
                    <div
                      className={`pillar-card relative h-[550px] rounded-[0.3rem] overflow-hidden border border-black/10 bg-white/70 backdrop-blur-md transition-all duration-700 flex flex-col items-center p-8 ${isActive ? 'shadow-[0_20px_40px_rgb(0,0,0,0.08)] -translate-y-2' : ''}`}
                    >
                      {/* Default State: Title & Icon */}
                      <div className={`w-full text-center transition-all duration-700 ${isActive ? '-translate-y-4' : ''} ${isCompressed ? 'opacity-0 scale-75 pointer-events-none' : 'opacity-100 scale-100'}`}>
                        <h3 className="font-heading text-xl lg:text-2xl font-bold text-black leading-tight h-16 flex items-center justify-center whitespace-pre-line">
                          {pillar.title}
                        </h3>
                      </div>

                      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${isActive ? 'scale-75 -translate-y-8 opacity-20' : ''} ${isCompressed ? 'opacity-0 scale-50 pointer-events-none' : 'opacity-100'}`}>
                        <pillar.icon className="w-20 h-20 lg:w-24 lg:h-24 text-[#FFF200]" strokeWidth={1} />
                      </div>

                      {/* Compressed State: Vertical Title */}
                      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 pointer-events-none ${isCompressed ? 'opacity-100 delay-200' : 'opacity-0'}`}>
                        <h3 className="font-heading text-2xl font-bold text-black tracking-widest whitespace-nowrap -rotate-90">
                          {pillar.title}
                        </h3>
                      </div>

                      {/* Default Summary Text at the bottom */}
                      <div className={`absolute bottom-20 left-8 right-8 text-center transition-all duration-700 ${isActive || isCompressed ? 'opacity-0 translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
                        <p className="text-sm text-black/70 font-body">
                          {pillar.summary}
                        </p>
                      </div>

                      {/* Button to show detail */}
                      <div className={`absolute bottom-6 left-0 right-0 flex justify-center transition-all duration-700 z-10 ${isCompressed ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                        <Button
                          variant="outline"
                          className="rounded-full border-black/20 text-xs text-black uppercase tracking-wider bg-white/50 backdrop-blur hover:bg-[#FFF200] hover:text-black hover:border-[#FFF200] transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveUnit(isActive ? null : index);
                          }}
                        >
                          {isActive ? "Close Details" : "Touch for details"}
                        </Button>
                      </div>

                      {/* Details slide up */}
                      <div className={`absolute inset-x-0 bottom-0 transition-all duration-700 ease-in-out bg-white p-6 h-[75%] border-t border-black/5 overflow-y-auto custom-scrollbar ${isActive ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-full opacity-0 pointer-events-none'}`}>
                        <div className="space-y-8">
                          {pillar.details.map((detail, i) => (
                            <div key={i}>
                              <h4 className="font-heading text-sm font-bold text-black mb-4 uppercase tracking-wide border-b border-black/10 pb-1">
                                {detail.heading}
                              </h4>
                              <ul className="space-y-3">
                                {detail.items.map((item, j) => (
                                  <li key={j} className="flex items-start gap-3 text-xs md:text-sm text-black/80 font-medium">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#FFF200] mt-1.5 flex-shrink-0" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 03 Our Facilities — CRF overlapping layout */}
      <section className="section-padding relative overflow-hidden bg-white">
        <div className="container-grid relative">
          <div className="absolute -left-4 top-0 font-heading text-[10rem] md:text-[14rem] font-black text-black/[0.04] leading-none select-none pointer-events-none section-number">03</div>
          <SectionReveal>
            <div className="flex items-center gap-4 mb-2">
              <span className="text-lg font-bold uppercase tracking-[0.2em] text-muted-foreground">Infrastructure</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mt-4 text-foreground leading-tight">Our Facilities</h2>
          </SectionReveal>

          <div className="mt-20 space-y-32">
            {/* Bioanalytical Facility */}
            <div className="relative pt-16 lg:pt-24 mb-32">
              <div className="flex flex-col lg:flex-row relative items-start lg:items-center">
                {/* Dark Top Title */}
                <div className="absolute -top-8 left-0 lg:left-[5%] z-20 bg-black px-6 py-4 md:px-10 md:py-6 shadow-md w-auto max-w-[90%]">
                  <h3 className="text-white font-heading text-lg md:text-2xl font-bold tracking-widest uppercase m-0">
                    1. Bioanalytical & Analytical Laboratory
                  </h3>
                </div>

                {/* Image Container */}
                <div className="w-full lg:w-[70%] h-[400px] lg:h-[550px] relative overflow-hidden mt-12 lg:mt-0">
                  <img src={facilityImg} alt="Bioanalytical Lab" className="w-full h-[130%] -top-[15%] absolute object-cover about-parallax-img" />
                </div>

                {/* Content Box */}
                <div className="w-[90%] mx-auto lg:w-[45%] lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 z-10 bg-[#FFF200] p-8 md:p-12 shadow-xl -mt-16 lg:mt-0 relative facility-info-box">
                  <SectionReveal delay={0.2}>
                    <h4 className="font-heading text-2xl md:text-3xl font-black text-black mb-6 uppercase leading-tight tracking-tight">
                      Supporting Research & Development Excellence
                    </h4>
                    <div className="space-y-4 text-black/80 font-medium leading-relaxed text-sm md:text-base">
                      <p>
                        Operates in two niches. Analytical laboratory focuses on physicochemical analysis of pharmaceuticals which ensures the quality, safety, and efficacy of drug products.
                      </p>
                      <p>
                        Our bioanalytical laboratory focuses on studying drugs within biological systems to support research and development through analysis of biological matrices.
                      </p>
                    </div>
                    <div className="mt-8">
                      <Button className="bg-white text-black hover:bg-black hover:text-white transition-all font-bold rounded-none px-8 py-6 tracking-widest text-xs uppercase">
                        Learn More
                      </Button>
                    </div>
                  </SectionReveal>
                </div>
              </div>
            </div>

            {/* Research & Formulation Facility */}
            <div className="relative pt-16 lg:pt-24 mb-16">
              <div className="flex flex-col lg:flex-row relative items-start lg:items-center justify-end">
                {/* Dark Top Title */}
                <div className="absolute -top-8 right-0 lg:right-[5%] z-20 bg-black px-6 py-4 md:px-10 md:py-6 shadow-md w-auto max-w-[90%] text-right">
                  <h3 className="text-white font-heading text-lg md:text-2xl font-bold tracking-widest uppercase m-0">
                    2. Research & Formulation Laboratory
                  </h3>
                </div>

                {/* Content Box */}
                <div className="w-[90%] mx-auto lg:w-[45%] lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 z-10 bg-[#FFF200] p-8 md:p-12 shadow-xl -mt-16 lg:mt-0 relative order-2 lg:order-1 facility-info-box">
                  <SectionReveal delay={0.2}>
                    <h4 className="font-heading text-2xl md:text-3xl font-black text-black mb-6 uppercase leading-tight tracking-tight">
                      From Discovery to Commercial Production
                    </h4>
                    <div className="space-y-4 text-black/80 font-medium leading-relaxed text-sm md:text-base">
                      <p>
                        The drug development wing focuses on developing drug products through formulation studies to maximize the effectiveness and safety of APIs.
                      </p>
                      <p>
                        Equipped with advanced infrastructure and a multidisciplinary team, it transforms promising natural compounds into safe pharmaceutical solutions.
                      </p>
                    </div>
                    <div className="mt-8">
                      <Button className="bg-white text-black hover:bg-black hover:text-white transition-all font-bold rounded-none px-8 py-6 tracking-widest text-xs uppercase">
                        Learn More
                      </Button>
                    </div>
                  </SectionReveal>
                </div>

                {/* Image Container */}
                <div className="w-full lg:w-[70%] h-[400px] lg:h-[550px] relative overflow-hidden mt-12 lg:mt-0 order-1 lg:order-2">
                  <img src={labImg} alt="Research Lab" className="w-full h-[130%] -top-[15%] absolute object-cover about-parallax-img" />
                </div>
              </div>
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

      {/* 04 Manufacturing & Conservation — 5-segment reveal */}
      <section className="relative section-padding overflow-hidden mfg-section">
        <div className="absolute inset-0 flex z-0">
          {[0, 1, 2, 3, 4].map(i => <div key={i} className="w-1/5 h-full bg-[#FFF200] translate-y-full mfg-segment" />)}
        </div>
        <div className="container-grid relative z-10 mfg-content opacity-0">
          <div className="absolute -left-4 top-0 font-heading text-[10rem] md:text-[14rem] font-black text-black/[0.04] leading-none select-none pointer-events-none section-number">04</div>

          <SectionReveal className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-2">
              <span className="text-xl font-bold uppercase tracking-[0.2em] text-black">COMING SOON</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mt-4 text-black">Manufacturing & Conservation</h2>
          </SectionReveal>

          <div className="mt-20 space-y-32">
            {/* R&D Center */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <SectionReveal>
                <div className="overflow-hidden rounded-sm shadow-xl aspect-[4/3] relative group">
                  <img src={project2Img} alt="R&D Center" className="absolute inset-0 w-full h-[130%] -top-[15%] object-cover about-parallax-img" />
                </div>
              </SectionReveal>
              <SectionReveal delay={0.2}>
                <h3 className="font-heading text-3xl font-bold mb-6 text-black">Research & Development Center</h3>
                <div className="space-y-4 text-black font-medium leading-relaxed">
                  <p>
                    Situated on 9,951 sq.m of land in Kilinto Industrial Park, our state-of-the-art center is designed to advance research and development for the global healthcare industries.
                  </p>
                  <p>
                    The center is dedicated to supporting local innovation and reducing dependence on imported APIs by leveraging Ethiopia's indigenous knowledge and natural resources.
                  </p>
                </div>
              </SectionReveal>
            </div>

            {/* Oil Manufacturing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <SectionReveal className="lg:order-1">
                <h3 className="font-heading text-3xl font-bold mb-6 text-black">Droga Oil Manufacturing Plant</h3>
                <div className="space-y-4 text-black font-medium leading-relaxed">
                  <p>
                    A 1,000 sq.m processing facility is being established to harness the potential of fixed and volatile oils. The facility is designed to process natural oils at scale for both local and export markets.
                  </p>
                  <p>
                    This facility aligns with our mission to create value-added products and contribute to both public health and economic growth through indigenous resources.
                  </p>
                </div>
              </SectionReveal>
              <SectionReveal className="lg:order-2" delay={0.2}>
                <div className="overflow-hidden rounded-sm shadow-xl aspect-[4/3] relative group">
                  <img src={project1Img} alt="Oil Plant" className="absolute inset-0 w-full h-[130%] -top-[15%] object-cover about-parallax-img" />
                </div>
              </SectionReveal>
            </div>

            {/* Conservation & Nursery */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <SectionReveal>
                <div className="overflow-hidden rounded-sm shadow-xl aspect-[4/3] relative group">
                  <img src={plantsImg} alt="Nursery" className="absolute inset-0 w-full h-[130%] -top-[15%] object-cover about-parallax-img" />
                </div>
              </SectionReveal>
              <SectionReveal delay={0.2}>
                <h3 className="font-heading text-3xl font-bold mb-6 text-black">Droga Medicinal Plant Nursery</h3>
                <div className="space-y-4 text-black font-medium leading-relaxed">
                  <p>
                    Established in Butajira to cultivate and preserve Ethiopia's rich botanical heritage. The nursery strengthens the link between traditional wisdom and modern scientific research.
                  </p>
                  <p>
                    Focusing on sustainable conservation and large-scale cultivation of medicinal plants for pharmaceutical and nutraceutical applications.
                  </p>
                </div>
              </SectionReveal>
            </div>

            {/* Soap & Rosemary */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <SectionReveal className="lg:order-1">
                <h3 className="font-heading text-3xl font-bold mb-6 text-black">Natural Soap & Rosemary Processing</h3>
                <div className="space-y-4 text-black font-medium leading-relaxed">
                  <p>
                    The Droga Soap and Cosmetics Manufacturing Plant focuses on 100% natural skincare solutions, while the Rosemary project improves farmer livelihoods through sustainable essential oil extraction.
                  </p>
                  <p>
                    These initiatives combine modern manufacturing with traditional herbal wisdom to deliver consistent, high-quality natural products for the global market.
                  </p>
                </div>
              </SectionReveal>
              <SectionReveal className="lg:order-2" delay={0.2}>
                <div className="overflow-hidden rounded-sm shadow-xl aspect-[4/3] relative group">
                  <img src={project3Img} alt="Soap Plant" className="absolute inset-0 w-full h-[130%] -top-[15%] object-cover about-parallax-img" />
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission — Refined design with white bg */}
      <section id="vision" className="bg-white py-24 md:py-32 relative overflow-hidden border-t border-black/10">
        <div className="container-grid relative px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
            {/* Vision */}
            <div className="lg:col-span-5">
              <SectionReveal>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-px bg-black origin-left section-line" />
                  <span className="text-sm font-bold uppercase tracking-[0.2em] text-black/60">Our Vision</span>
                </div>
                <h3 className="font-heading text-4xl md:text-5xl font-black text-black leading-tight mb-8">
                  To become a premier<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2D3748] to-[#2D3748]/60">Research Center</span>
                </h3>
                <p className="text-lg text-black/70 font-medium leading-relaxed">
                  Providing quality research services that address challenges in conducting effective research, and addressing problems related to the nutritional and medicinal needs of the society.
                </p>
              </SectionReveal>
            </div>

            {/* Divider on large screens */}
            <div className="hidden lg:block lg:col-span-2 relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-black/10" />
            </div>

            {/* Mission */}
            <div className="lg:col-span-5">
              <SectionReveal delay={0.2}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-px bg-black origin-left section-line" />
                  <span className="text-sm font-bold uppercase tracking-[0.2em] text-black/60">Our Mission</span>
                </div>
                <div className="space-y-8">
                  <div className="flex gap-4 items-start">
                    <span className="font-heading text-xl font-bold text-[#FFF200] bg-black w-10 h-10 flex items-center justify-center shrink-0">01</span>
                    <p className="text-black/80 font-medium leading-relaxed">To conduct research primarily on identifying the potential of local herbs and formulating them into modern pharmaceutical products.</p>
                  </div>
                  <div className="flex gap-4 items-start">
                    <span className="font-heading text-xl font-bold text-[#FFF200] bg-black w-10 h-10 flex items-center justify-center shrink-0">02</span>
                    <p className="text-black/80 font-medium leading-relaxed">To serve as an incubator by accommodating different researchers with innovative ideas.</p>
                  </div>
                  <div className="flex gap-4 items-start">
                    <span className="font-heading text-xl font-bold text-[#FFF200] bg-black w-10 h-10 flex items-center justify-center shrink-0">03</span>
                    <p className="text-black/80 font-medium leading-relaxed">To conduct high-level research including new drug discovery and product development.</p>
                  </div>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <div id="milestones">
        <JourneySection timelineData={timelineData} />
      </div>


      {/* Partners */}
      <section id="partners" className="section-padding relative overflow-hidden bg-gray-50/50">
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
          <div className="mt-12">
            <HexagonalPartnersGrid />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;