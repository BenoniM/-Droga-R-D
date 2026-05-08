import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Users, Target, Eye, FlaskConical, Droplet, Apple, Microscope, Leaf, TestTube, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import JourneySection from "@/components/JourneySection";
import { Button } from "@/components/ui/button";
import HexagonalBackground from "@/components/HexagonalBackground";

gsap.registerPlugin(ScrollTrigger);

// Import images
import facilityImg from "@/assets/Images/IMG_4514.jpg";
import labImg from "@/assets/Images/IMG_4528.jpg";
import heroImg from "@/assets/Images/IMG_4582.jpg";
import moleculesImg from "@/assets/Images/IMG_4543.jpg";
import plantsImg from "@/assets/Images/IMG_4565.jpg";
import nurseryImg from "@/assets/new-imgs/Plant Nursery.jpg";
import pillarVideo from "@/assets/pillar/MVI_4700.mp4";

import labVideo1 from "@/assets/labs/MVI_4536.mp4";
import labVideo2 from "@/assets/labs/MVI_4559.mp4";
import labVideo3 from "@/assets/labs/MVI_4697.mp4";
import labVideo4 from "@/assets/labs/MVI_4760.mp4";

import project1Img from "@/assets/Project/Droga Oil Manufacturing Plant.jpg";
import project2Img from "@/assets/Project/droga-manufacture.png";
import project3Img from "@/assets/new-imgs/Soap.jpg";
import project4Img from "@/assets/new-imgs/Rosmary.jpg";

import shimadzuLogo from "@/assets/Partners/Shimadzu.png";
import electroLabLogo from "@/assets/Partners/Electrolab.png";
import lotusLogo from "@/assets/Partners/Lotus.png";
import emiLogo from "@/assets/Partners/EMI.png";
import tekLogo from "@/assets/Partners/Tek.png";
import dbuLogo from "@/assets/Partners/Debre Berhan.png";
import aauLogo from "@/assets/Partners/AAU.png";
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
    icon: Microscope,
    title: "Drug Discovery",
    color: "#ffdf22",
    summary: "Research of natural, herbal food and drug discovery, development and formulation.",
    details: [
      {
        heading: "Formulation Development",
        content: "Develops drug products through formulation studies to maximize the effectiveness and safety of API, such as improving the solubility and stability, and controlling of drug release. This wing is responsible for establishing the quality of the drug products as a continuum, from development through clinical manufacturing to commercial manufacturing. The activities under this include, but not limited to the Formulations of pharmaceuticals and Herbal medicines in forms of Solid Oral dosage forms, Oral liquid dosage forms, Semi solids & Injectable."
      },
      {
        heading: "Research Laboratory",
        content: "Our Research Laboratory serves as the core of the Drug Discovery Wing within the R&D Department, dedicated to the systematic exploration and development of novel therapeutic agents. The laboratory focuses on plant based and animal derived pharmaceutical research, integrating traditional knowledge with modern scientific methodologies to identify, evaluate, and develop effective drug candidates for a wide range of diseases and health conditions. Equipped with advanced research infrastructure and operated by a multidisciplinary team of scientists, pharmacognosy, botanists, biotechnologists, and researchers, the laboratory conducts end to end drug discovery activities. \n\nThese include bioactive compound screening, extraction and characterization of natural products, preclinical evaluation, mechanism of action studies, and safety and efficacy assessments. Our research emphasizes innovation, scientific rigor, and regulatory compliance, ensuring that all discoveries meet international quality and ethical standards. By leveraging technologies and evidence-based research approaches, the laboratory aims to transform promising natural compounds into safe, effective, and affordable pharmaceutical solutions. Through continuous innovation and collaboration, the Research Laboratory plays a vital role in advancing therapeutic discoveries, addressing unmet medical needs, and contributing to improved healthcare outcomes."
      }
    ]
  },
  {
    icon: Apple,
    title: "Food & Nutraceutical Sciences Research",
    color: "#C7372F",
    summary: "Dedicated to the research and development of nutrition-based products aimed at supporting health, wellness, and preventive care.",
    details: [
      {
        content: "The Food and Nutritional Sciences Research Wing is dedicated to the research and development of nutrition-based products aimed at supporting health, wellness, and preventive care. This wing focuses on the development of specialized dietary formulations, pediatric food supplements, health support formulations, and volatile and fixed oils with recognized health benefits, primarily derived from natural sources.\n\nResearch activities are grounded in food science, nutrition, phytochemistry, and formulation science, ensuring scientifically sound and quality driven product development. The wing is supported by multidisciplinary teams composed of professionals with strong pharmacy backgrounds, working in close collaboration with partners and consultants from food science and nutrition backgrounds. This integrated approach ensures that all products are developed with both pharmaceutical rigor and food science expertise.\n\nThe team undertakes structured studies involving raw material evaluation, ingredient standardization, formulation development, stability assessment, and safety evaluation in alignment with applicable regulatory guidelines.\n\nThrough focused research, cross disciplinary collaboration, and rigorous quality practices, the Food and Nutritional Sciences Research Wing aim to deliver safe, effective, and evidence based nutritional solutions that contribute to improved health outcomes and overall wellbeing."
      }
    ]
  },
  {
    icon: Droplet,
    title: "Cosmetic & Detergent Research and Development",
    color: "#006994",
    summary: "Dedicated to the formulation, development, and optimization of medicated and non-medicated cosmetic, personal care, and hygiene products.",
    details: [
      {
        content: "The Cosmetic and Detergent Research and Development Wing is dedicated to the formulation, development, and optimization of medicated and non-medicated cosmetic, personal care, and hygiene products. This wing focuses on creating safe, effective, and high-quality products that meet consumer needs as well as applicable regulatory standards.\n\nThe research and development scope includes a wide range of products such as soaps, face washes, creams, lotions, serums, hair oils, hair growth serums, antiseptic formulations, and other cosmetic and detergent-based products. Emphasis is placed on scientific formulation design, ingredient compatibility, product stability, performance evaluation, and safety assessment.\n\nThe wing is supported by pilot scale development facilities, enabling formulation optimization, process standardization, and scale up studies for seamless transition from laboratory development to commercial manufacturing. Robust standard operating procedures (SOPs) are established to ensure product consistency, quality assurance, and reproducibility during scale-up and production.\n\nThrough structured research, formulation expertise, and pilot scale capabilities, the Cosmetic and Detergent Research and Development Wing plays a key role in delivering reliable, effective, and market-ready cosmetic, hair care, and hygiene products."
      }
    ]
  },
  {
    icon: FlaskConical,
    title: "Bioequivalence & Analytical Laboratory",
    color: "#507d2a",
    summary: "Providing bioequivalence (BE) studies, pharmacokinetic studies, and comprehensive analytical testing services.",
    details: [
      {
        heading: "Bioequivalence studies",
        content: "The center will provide BE studies under the following units:",
        items: [
          "Clinical unit: the center will have a GCP compliant an independent clinical unit with all necessary instruments and housing capacity for large number of volunteers. It will also include a well-equipped ICU facility and pharmacy for storing different investigational drugs at various temperature limits.",
          "Medical laboratory: focus on sample processing and analysis.",
          "Bioanalytical laboratory: It offers services including Analysis of biological matrix, Bioavailability studies, Pharmacokinetic studies, Method development and validation."
        ]
      },
      {
        heading: "Physicochemical analysis",
        content: "Analysis of pharmaceutical ingredients and products (including OSD, OLD and Semisolid products). It includes:",
        items: [
          "Raw Material Identification",
          "Purity Determination for API and excipients",
          "Assay",
          "Dissolution Testing",
          "Disintegration Testing",
          "Hardness Testing",
          "Friability Testing",
          "Particle size analysis",
          "Moisture Content Analysis",
          "Stability Studies"
        ]
      }
    ]
  }
];


const HexagonalPartnersGrid = () => {
  const [activePartner, setActivePartner] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 768);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
    <div className="w-full max-w-6xl mx-auto py-4 md:py-12 relative" ref={gridRef}>
      {activePartner !== null && (
        <div
          className="absolute inset-0 z-30 cursor-pointer"
          onClick={() => setActivePartner(null)}
        />
      )}
      <div className="flex flex-wrap justify-center items-center px-2 md:px-4 relative z-10">
        {partners.map((partner, index) => {
          const isActive = activePartner === index;
          const isCompressed = activePartner !== null && !isActive;

          return (
            <div
              key={index}
              className={`relative w-[100px] h-[115px] md:w-[160px] md:h-[184px] transition-all duration-500 ${isActive ? 'z-40' : 'z-10'} ${isCompressed ? 'scale-[0.8] opacity-20 blur-[1px]' : 'scale-100 opacity-100'}`}
              style={{
                margin: isMobile ? '1rem 0.25rem' : '-1rem 0.5rem', // Spread out vertically on mobile, interlocking on desktop
              }}
            >
              {/* The expanded container uses absolute positioning to overlay without moving siblings */}
              <div
                onClick={() => togglePartner(index)}
                className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isActive
                  ? 'w-[280px] h-[320px] md:w-[360px] md:h-[415px]'
                  : 'w-[100px] h-[115px] md:w-[160px] md:h-[184px]'
                  }`}
                style={{
                  filter: isActive
                    ? "drop-shadow(0 25px 35px rgba(0,0,0,0.02)) drop-shadow(0 10px 10px rgba(0,0,0,0.15))"
                    : "drop-shadow(0 10px 15px rgba(0,0,0,0.1)) drop-shadow(0 4px 6px rgba(0,0,0,0.05))"
                }}
              >
                <div
                  className={`w-full h-full group flex flex-col items-center justify-center transition-colors duration-300 relative ${isActive ? 'bg-white pt-2 pb-2 px-6 md:pt-4 md:pb-4 md:px-10' : 'bg-white p-0'
                    }`}
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                >
                  {/* Expanding circle on hover */}
                  {!isActive && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#FFF200] rounded-full scale-0 group-hover:scale-[20] transition-transform duration-700 ease-out z-0" />
                  )}

                  <div className={`flex items-center justify-center shrink-0 transition-all duration-500 relative z-10 ${isActive ? 'w-20 h-20 md:w-28 md:h-28 mb-4' : 'w-[70%] h-[70%]'}`}>
                    {partner.logo ? (
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className={`max-h-full max-w-full object-contain transition-all duration-300 grayscale-0`}
                      />
                    ) : (
                      <span className={`font-heading text-sm md:text-base font-bold text-center px-4 transition-colors duration-300 ${isActive ? 'text-black' : 'text-muted-foreground group-hover:text-black'}`}>{partner.name}</span>
                    )}
                  </div>

                  {/* We only render the text if active so it doesn't try to cram into the small hexagon */}
                  <div
                    className={`flex-1 text-center flex flex-col justify-start w-full transition-all duration-500 overflow-hidden relative z-10 ${isActive ? 'opacity-100 max-h-[200px]' : 'opacity-0 max-h-0'}`}
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
  const [hexActive, setHexActive] = useState(false);
  const [hexSpots, setHexSpots] = useState<any[]>([]);
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 768);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Randomize spots for the manufacturing section
    const generateSpots = () => {
      const spots: any[] = [];
      const numSpots = 4;
      const minDistance = 0.28;

      const section = document.querySelector('.mfg-section');
      const restrictedEls = section ? Array.from(section.querySelectorAll('.mfg-content h2, .mfg-content h3, .mfg-content p, .mfg-content img, .mfg-content button')) : [];
      const sectionRect = section?.getBoundingClientRect();

      const forbiddenZones = sectionRect ? restrictedEls.map(el => {
        const r = el.getBoundingClientRect();
        return {
          x: (r.left + r.width / 2 - sectionRect.left) / sectionRect.width,
          y: (r.top + r.height / 2 - sectionRect.top) / sectionRect.height,
          radiusX: (r.width / 2 + 40) / sectionRect.width,
          radiusY: (r.height / 2 + 40) / sectionRect.height
        };
      }) : [];

      for (let attempts = 0; attempts < 400 && spots.length < numSpots; attempts++) {
        const x = 0.02 + Math.random() * 0.96;
        const y = 0.02 + Math.random() * 0.96;

        let tooClose = false;
        for (const spot of spots) {
          if (Math.sqrt(Math.pow(spot.xFrac - x, 2) + Math.pow(spot.yFrac - y, 2)) < minDistance) {
            tooClose = true;
            break;
          }
        }
        if (tooClose) continue;

        let inForbiddenZone = false;
        for (const zone of forbiddenZones) {
          const dx = Math.abs(x - zone.x);
          const dy = Math.abs(y - zone.y);
          if (dx < zone.radiusX && dy < zone.radiusY) {
            inForbiddenZone = true;
            break;
          }
        }

        if (!inForbiddenZone) {
          spots.push({
            xFrac: x,
            yFrac: y,
            radius: 3.0 + Math.random() * 1.5,
            radiusY: 2.0 + Math.random() * 1.0,
          });
        }
      }
      return spots;
    };

    const timer = setTimeout(() => {
      setHexSpots(generateSpots());
    }, 500);
    return () => clearTimeout(timer);
  }, []);

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
        .to([".mfg-content", ".mfg-hex-canvas-wrapper"], {
          autoAlpha: 1,
          duration: 0.15,
          onComplete: () => setHexActive(true),
          onReverseComplete: () => setHexActive(false),
        }, "-=0.1")
        // Refresh ScrollTrigger after reveal so parallax calculates correct dimensions
        .call(() => ScrollTrigger.refresh(), [], "+=0.1");
    }

    // Pillar Section Scroll Flow
    const wrappers = gsap.utils.toArray<HTMLElement>('.pillar-wrapper');
    const videos = gsap.utils.toArray<HTMLElement>('.pillar-video');
    const video = videos[0];

    const pillarText = document.querySelector('.pillars-text-wrapper');

    if (wrappers.length === 4 && video && window.innerWidth >= 768) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".pillars-pin-target",
          start: "top 70%",
          end: "bottom 90%",
          scrub: true,
        }
      });

      tl.fromTo([video, pillarText], { y: 600 }, { y: 0, duration: 1, ease: "power2.out" })
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
            src={project2Img}
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
            <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mt-4 leading-none whitespace-normal md:whitespace-nowrap">
              Our Story
            </h1>
            <div className="w-24 h-1 bg-[#FFF200] mt-6 origin-left section-line" />
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-lg leading-relaxed">
              Advancing pharmaceutical research, innovation, and quality through scientific excellence since 2021.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button size="lg" asChild className="bg-[#FFF200] text-black hover:bg-white transition-all duration-300 font-bold w-full sm:w-auto h-auto py-3">
                <Link to="/droga-science">Explore Research</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-white/80 text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-300 font-bold w-full sm:w-auto h-auto py-3">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-16 mt-6 md:mt-12">
            <SectionReveal>
              <div className="space-y-6 text-lg text-muted-foreground font-body leading-relaxed">
                <p>
                  Established in 2021, the Droga Research and Development Department is one of the major wings of Droga Pharma PLC, a diversified private company operating mainly in healthcare services and agricultural exports. The company has evolved from a pharmaceutical wholesale and importing business into an integrated healthcare group with a strong national presence and expanding operations across multiple African markets.
                </p>
                <p className="hidden md:block">
                  This wing was established with the vision of becoming a state-of-the-art research center and providing quality research services that address challenges in conducting effective research in the country. It also focuses on identifying and addressing problems related to the nutritional and medicinal needs of society.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.15}>
              <div className="space-y-0 md:space-y-6 text-lg text-muted-foreground font-body leading-relaxed">
                <p className="hidden md:block">
                  The R&D division comprises four major units: the bioequivalence and analytical laboratory, drug discovery and development unit, food & nutraceutical unit, and cosmetic & detergent unit. Under these units, research activities such as drug discovery, characterization, food development, organic cosmetic development, and related research are undertaken. Furthermore, analytical services are also offered.
                </p>
                <div className="pt-0 md:pt-4">
                  <Button variant="outline" size="lg" asChild className="border-black text-black hover:bg-[#FFF200] hover:border-[#FFF200] hover:text-black transition-all duration-300 font-bold">
                    <Link to="/droga-science">Learn More <ArrowRight className="w-4 h-4 ml-2" /></Link>
                  </Button>
                </div>
              </div>
            </SectionReveal>
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
                <h3 className="font-heading tracking-wide text-3xl md:text-3xl font-base text-black leading-tight mb-8">
                  <span className="font-semibold"> Vision:</span> To be the leading integrated healthcare ecosystem provider in Ethiopia.
                </h3>
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
                <h3 className="font-heading tracking-wide text-3xl md:text-3xl font-base text-black leading-tight mb-8">
                  <span
                    className="font-semibold"> Mission:</span> We provide integrated, quality, and innovative healthcare products and services that enhance the health and well-being of every community we serve.
                </h3>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 02 Major Units — Pillar style like Home Page */}
      <section className="relative overflow-hidden bg-white pillars-section">
        <div className="section-padding relative w-full h-full pillars-pin-target">

          {/* Split layout: Text Left, Video Right, both absolute/moving together */}
          <div className="hidden md:flex absolute inset-x-0 top-0 mt-8 px-[10%] justify-between items-start pointer-events-none z-0">
            
            {/* Text (Left) - Moving with GSAP */}
            <div className="w-1/2 pillars-text-wrapper">
              <SectionReveal>
                <div className="flex flex-col items-start justify-center mb-2">
                  <span className="block text-sm md:text-base font-bold uppercase tracking-[0.2em] text-black">
                    Scientific Focus
                  </span>
                  <div className="w-60 h-px bg-black mt-4" />
                </div>
                <h2 className="font-heading text-4xl md:text-5xl lg:text-5xl font-semibold tracking-tight mt-6 text-black leading-tight">
                  Major Research <br className="hidden lg:block" /> Units
                </h2>
                <p className="mt-8 text-base text-black/70 max-w-xl leading-relaxed">
                  Our department is organized into four specialized units, each focusing on critical areas of pharmaceutical and nutritional research. We integrate traditional knowledge with modern science to deliver innovative solutions.
                </p>
              </SectionReveal>
            </div>

            {/* Thinner Video (Right) */}
            <div className="w-[60%] lg:w-[35%] h-[420px] relative rounded-[0.3rem] border border-black overflow-hidden opacity-90 pillar-video">
              <video src={pillarVideo} autoPlay loop muted playsInline className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Mobile video & text — in normal flow */}
          <div className="md:hidden flex flex-col items-center mb-8">
            <div className="w-[90%] h-[240px] relative rounded-[0.3rem] border border-black overflow-hidden opacity-90 mb-8">
              <video src={pillarVideo} autoPlay loop muted playsInline className="w-full h-full object-cover" />
            </div>
            <div className="px-4 text-center">
              <span className="block text-xs font-bold uppercase tracking-[0.2em] text-black">Scientific Focus</span>
              <h2 className="font-heading text-3xl font-semibold mt-2 text-black">Major Units</h2>
            </div>
          </div>

          <div className="w-full max-w-[96%] mx-auto px-4 relative z-10">
            <div className="grid grid-cols-2 md:flex md:flex-row md:flex-wrap lg:flex-nowrap gap-4 md:gap-6 mt-16 perspective-1000 pillar-card-container">
              {unitPillars.map((pillar, index) => {
                const isActive = activeUnit === index;
                const isCompressed = activeUnit !== null && !isActive && !isMobile;

                return (
                  <div
                    key={pillar.title}
                    className={`pillar-wrapper transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:w-[calc(50%-0.75rem)] lg:w-auto lg:min-w-0 ${isMobile ? (isActive ? 'col-span-2' : '') : (isActive ? 'pillar-flex-active' : isCompressed ? 'pillar-flex-compressed' : 'pillar-flex-default')}`}
                    style={{ transitionProperty: 'flex, width' }}
                  >
                    <div
                      className={`pillar-card relative rounded-[0.3rem] overflow-hidden border border-black/10 bg-white/70 backdrop-blur-md transition-all duration-700 flex flex-col items-center p-4 md:p-8
                        ${isMobile ? (isActive ? 'h-auto min-h-[260px]' : 'h-[200px]') : `h-[550px] ${isActive ? 'shadow-[0_20px_40px_rgb(0,0,0,0.08)]' : ''}`}`}
                    >
                      {/* Default State: Title & Icon */}
                      <div className={`w-full text-center transition-all duration-700 ${!isMobile && isActive ? '-translate-y-4' : ''} ${isCompressed ? 'opacity-0 scale-75 pointer-events-none' : 'opacity-100 scale-100'}`}>
                        <h3 className="font-heading text-sm md:text-xl lg:text-2xl font-bold text-black leading-tight flex items-center justify-center whitespace-pre-line min-h-[2.5rem] md:h-16">
                          {pillar.title}
                        </h3>
                      </div>

                      <div className={`${isMobile ? 'flex-1 flex' : 'absolute inset-0 flex'} items-center justify-center transition-all duration-700 ${!isMobile && isActive ? 'scale-75 -translate-y-8 opacity-20' : ''} ${isCompressed ? 'opacity-0 scale-50 pointer-events-none' : 'opacity-100'}`}>
                        <pillar.icon
                          className="w-10 h-10 md:w-20 md:h-20 lg:w-24 lg:h-24"
                          style={{ color: "#FFF200" }}
                          fill={pillar.title === "Drug Discovery" ? "none" : "#FFF200"}
                          strokeWidth={1}
                        />
                      </div>

                      {/* Compressed State: Vertical Title */}
                      <div className={`hidden md:flex absolute inset-0 items-center justify-center transition-all duration-700 pointer-events-none ${isCompressed ? 'opacity-100 delay-200' : 'opacity-0'}`}>
                        <h3 className="font-heading text-sm font-black text-black tracking-widest whitespace-nowrap -rotate-90">
                          {pillar.title}
                        </h3>
                      </div>

                      {/* Default Summary Text at the bottom */}
                      <div className={`hidden md:block absolute bottom-20 left-8 right-8 text-center transition-all duration-700 ${isActive || isCompressed ? 'opacity-0 translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
                        <p className="text-sm text-black/70 font-body">
                          {pillar.summary}
                        </p>
                      </div>

                      <div className={`${isMobile ? 'mt-2 flex justify-center' : 'absolute bottom-6 left-0 right-0 flex justify-center'} transition-all duration-700 z-10 opacity-100`}>
                        <Button
                          variant="outline"
                          className="rounded-full border-black/20 text-[10px] md:text-xs text-black uppercase tracking-wider bg-white/50 backdrop-blur hover:bg-[var(--pillar-color)] hover:text-[var(--pillar-text)] hover:border-[var(--pillar-color)] transition-colors px-3 py-1 md:px-4 md:py-2"
                          style={{
                            '--pillar-color': pillar.color,
                            '--pillar-text': pillar.title === "Drug Discovery" ? "black" : "white"
                          } as React.CSSProperties}
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveUnit(isActive ? null : index);
                          }}
                        >
                          {isActive ? 'Close' : 'Details'}
                        </Button>
                      </div>

                      {/* Details slide up */}
                      <div className={`${isMobile ? 'w-full mt-3 border-t border-black/10 pt-3 pb-20' : 'absolute inset-x-0 bottom-0 h-[75%] border-t border-black/5 pb-24'} transition-all duration-700 ease-in-out bg-white p-3 md:p-6 overflow-y-auto custom-scrollbar ${isMobile ? (isActive ? 'block' : 'hidden') : (isActive ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-full opacity-0 pointer-events-none')}`}>
                        <div className="flex flex-col gap-6">
                          {pillar.details.map((detail, i) => (
                            <div key={i}>
                              {detail.heading && <h4 className="font-heading text-xs font-bold text-black mb-2 uppercase tracking-wide border-b border-black/10 pb-1">{detail.heading}</h4>}
                              {detail.content && (
                                <div className="space-y-3 mb-3">
                                  {detail.content.split('\n\n').map((paragraph, k) => (
                                    <p key={k} className="text-[11px] text-black/80 font-medium leading-relaxed">{paragraph}</p>
                                  ))}
                                </div>
                              )}
                              {detail.items && detail.items.length > 0 && (
                                <ul className="space-y-2">
                                  {detail.items.map((item, j) => (
                                    <li key={j} className="flex items-start gap-2 text-[11px] text-black/80 font-medium leading-relaxed">
                                      <span className="text-[#FFF200] font-bold mt-0.5">•</span>
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                        {/* Bottom spacer to prevent button overlap */}
                        <div className="h-32 w-full" />
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
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mt-4 text-foreground leading-tight">Our Laboratories</h2>
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
                <div className="w-full lg:w-[70%] h-[250px] md:h-[400px] lg:h-[550px] relative overflow-hidden mt-12 lg:mt-0">
                  <video src={labVideo1} autoPlay loop muted playsInline className="w-full h-[130%] -top-[15%] absolute object-cover about-parallax-img" />
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
                  </SectionReveal>
                </div>

                {/* Image Container */}
                <div className="w-full lg:w-[70%] h-[250px] md:h-[400px] lg:h-[550px] relative overflow-hidden mt-12 lg:mt-0 order-1 lg:order-2">
                  <video src={labVideo2} autoPlay loop muted playsInline className="w-full h-[130%] -top-[15%] absolute object-cover about-parallax-img" />
                </div>
              </div>
            </div>

            {/* Quality Control Units */}
            <div className="relative pt-16 lg:pt-24 mb-32">
              <div className="flex flex-col lg:flex-row relative items-start lg:items-center">
                {/* Dark Top Title */}
                <div className="absolute -top-8 left-0 lg:left-[5%] z-20 bg-black px-6 py-4 md:px-10 md:py-6 shadow-md w-auto max-w-[90%]">
                  <h3 className="text-white font-heading text-lg md:text-2xl font-bold tracking-widest uppercase m-0">
                    3. Quality Control Units
                  </h3>
                </div>

                {/* Image Container */}
                <div className="w-full lg:w-[70%] h-[250px] md:h-[400px] lg:h-[550px] relative overflow-hidden mt-12 lg:mt-0">
                  <video src={labVideo3} autoPlay loop muted playsInline className="w-full h-[130%] -top-[15%] absolute object-cover about-parallax-img" />
                </div>

                {/* Content Box */}
                <div className="w-[90%] mx-auto lg:w-[45%] lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 z-10 bg-[#FFF200] p-8 md:p-12 shadow-xl -mt-16 lg:mt-0 relative facility-info-box">
                  <SectionReveal delay={0.2}>
                    <h4 className="font-heading text-2xl md:text-3xl font-black text-black mb-6 uppercase leading-tight tracking-tight">
                      Precision Analytical Instruments
                    </h4>
                    <div className="space-y-4 text-black/80 font-medium leading-relaxed text-sm md:text-base">
                      <p>
                        Our quality control units are outfitted with state-of-the-art analytical technologies including High-Performance Liquid Chromatography (HPLC), UV-Vis spectrophotometers, and FTIR systems.
                      </p>
                      <p>
                        These precision instruments ensure every compound and formulation meets the highest international regulatory standards for purity and safety.
                      </p>
                    </div>
                  </SectionReveal>
                </div>
              </div>
            </div>

            {/* Formulation & Development */}
            <div className="relative pt-16 lg:pt-24 mb-32">
              <div className="flex flex-col lg:flex-row relative items-start lg:items-center justify-end">
                {/* Dark Top Title */}
                <div className="absolute -top-8 right-0 lg:right-[5%] z-20 bg-black px-6 py-4 md:px-10 md:py-6 shadow-md w-auto max-w-[90%] text-right">
                  <h3 className="text-white font-heading text-lg md:text-2xl font-bold tracking-widest uppercase m-0">
                    4. Formulation & Development
                  </h3>
                </div>

                {/* Content Box */}
                <div className="w-[90%] mx-auto lg:w-[45%] lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 z-10 bg-[#FFF200] p-8 md:p-12 shadow-xl -mt-16 lg:mt-0 relative order-2 lg:order-1 facility-info-box">
                  <SectionReveal delay={0.2}>
                    <h4 className="font-heading text-2xl md:text-3xl font-black text-black mb-6 uppercase leading-tight tracking-tight">
                      Scaling Innovations to Market
                    </h4>
                    <div className="space-y-4 text-black/80 font-medium leading-relaxed text-sm md:text-base">
                      <p>
                        Our pilot-scale formulation facilities bridge the gap between bench-top discovery and commercial-scale manufacturing.
                      </p>
                      <p>
                        We specialize in developing robust manufacturing processes for natural and synthetic products, ensuring seamless tech transfer and market readiness.
                      </p>
                    </div>
                  </SectionReveal>
                </div>

                {/* Image Container */}
                <div className="w-full lg:w-[70%] h-[250px] md:h-[400px] lg:h-[550px] relative overflow-hidden mt-12 lg:mt-0 order-1 lg:order-2">
                  <video src={labVideo4} autoPlay loop muted playsInline className="w-full h-[130%] -top-[15%] absolute object-cover about-parallax-img" />
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
        {/* Hexagonal Background for Coming Soon section */}
        {/* <div className="absolute inset-0 z-[1] pointer-events-none mfg-hex-canvas-wrapper invisible opacity-0">
          <HexagonalBackground
            active={hexActive}
            flipCount={3}
            flipInterval={2200}
            hexSize={18}
            gap={0}
            spots={hexSpots}
          />
        </div> */}
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
            {/* 
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
            */}

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

            {/* Conservation & Nursery */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <SectionReveal>
                <div className="overflow-hidden rounded-sm shadow-xl aspect-[4/3] relative group">
                  <img src={nurseryImg} alt="Nursery" className="absolute inset-0 w-full h-[130%] -top-[15%] object-cover about-parallax-img" />
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
          </div>
        </div>
      </section>

      {/* Timeline */}
      <div id="milestones">
        <JourneySection timelineData={timelineData} />
      </div>


      {/* Partners */}
      <section id="partners" className="py-12 md:py-24 px-6 relative overflow-hidden bg-gray-50/50">
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