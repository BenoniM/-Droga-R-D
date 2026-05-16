import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { Target, Eye, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import JourneySection from "@/components/JourneySection";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import HexagonalBackground from "@/components/HexagonalBackground";

gsap.registerPlugin(ScrollTrigger);

// Import images
import facilityImg from "@/assets/Images/IMG_4514.jpg";
import labImg from "@/assets/Images/IMG_4528.jpg";
import heroImg from "@/assets/Images/IMG_4582.jpg";
import moleculesImg from "@/assets/Images/IMG_4543.jpg";
import plantsImg from "@/assets/Images/IMG_4565.jpg";
import nurseryImg from "@/assets/new-imgs/Plant Nursery.jpg";
import pillarImg1 from "@/assets/Hero/drug.jpg";
import pillarImg3 from "@/assets/new-imgs/Soap.jpg";
import pillarImg4 from "@/assets/Hero/analytical.jpg";
const pillarImg2 = nurseryImg;
import pillarFeatureImg from "@/assets/Hero/home2.jpg";

import bioanalyticalVideo1 from "@/assets/infrastructure/bioanalytical1.mp4";
import bioanalyticalVideo2 from "@/assets/infrastructure/bioanalytical2.mp4";
import bioanalyticalVideo3 from "@/assets/infrastructure/bioanalytical3.mp4";
import researchFormulationImg1 from "@/assets/research/research1.jpg";
import researchFormulationImg2 from "@/assets/research/research2.jpg";
import researchFormulationImg3 from "@/assets/research/research3.jpg";
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
// import aauLogo from "@/assets/Partners/AAU.png";
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
  // { name: "Addis Ababa University", logo: aauLogo, description: "Fostering academic excellence and collaborative clinical studies." },
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

const pillarCards = [
  {
    image: pillarImg1,
    title: "Drug Discovery and Development",
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
    image: pillarImg2,
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
    image: pillarImg3,
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
    image: pillarImg4,
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

const researchFormulationSlides = [
  { src: researchFormulationImg1, alt: "Research and formulation laboratory" },
  { src: researchFormulationImg2, alt: "Research laboratory" },
  { src: researchFormulationImg3, alt: "Formulation laboratory" },
];

const SlidingPartnersGrid = () => {
  return (
    <div className="flex items-start w-full overflow-hidden mb-20 gap-[2px] bg-white">
      {partners.map((partner, index) => {
        // Vary the heights slightly for the "trickle" look, but keep widths equal
        const heights = [
          'h-56 md:h-80',
          'h-48 md:h-72',
          'h-64 md:h-96',
          'h-40 md:h-64'
        ];
        const heightClass = heights[index % heights.length];

        return (
          <div
            key={index}
            className={`partner-segment flex-1 bg-[#FFF200] flex items-end justify-center shadow-sm pb-8 md:pb-12 ${heightClass}`}
          >
            <motion.div
              className="w-full h-24 md:h-32 flex items-center justify-center transition-all duration-500 cursor-pointer p-2 md:p-4"
              whileHover={{ scale: 1.1 }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-full max-w-full object-contain"
                title={partner.name}
              />
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};





const About = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const [modalUnit, setModalUnit] = useState<number | null>(null);
  const [hexActive, setHexActive] = useState(false);
  const [hexSpots, setHexSpots] = useState<any[]>([]);
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 768);

  const [researchEmblaRef, researchEmblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
  });
  const [researchSlideIndex, setResearchSlideIndex] = useState(0);

  useEffect(() => {
    if (!researchEmblaApi) return;
    const onSelect = () => setResearchSlideIndex(researchEmblaApi.selectedScrollSnap());
    researchEmblaApi.on("select", onSelect);
    onSelect();
    return () => {
      researchEmblaApi.off("select", onSelect);
    };
  }, [researchEmblaApi]);

  useEffect(() => {
    if (!researchEmblaApi) return;
    const id = window.setInterval(() => researchEmblaApi.scrollNext(), 5500);
    return () => window.clearInterval(id);
  }, [researchEmblaApi]);

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

    if (wrappers.length === 4 && window.innerWidth >= 768) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".pillars-pin-target",
          start: "top 70%",
          end: "bottom 90%",
          scrub: true,
        }
      });

      // Text and image are in normal flow — only animate cards up
      tl.fromTo([wrappers[1], wrappers[2]], { y: 200 }, { y: 0, duration: 1, ease: "power2.out" })
        .fromTo([wrappers[0], wrappers[3]], { y: 200 }, { y: 0, duration: 1, ease: "power2.out" }, "-=0.5");
    }

    // Vision & Mission Scroll Animations
    gsap.fromTo(".vision-divider", { scaleY: 0 }, {
      scaleY: 1, duration: 1.5, ease: "power4.inOut", scrollTrigger: { trigger: "#vision", start: "top 70%" }
    });

    // Hover Parallax for cards
    const cards = gsap.utils.toArray<HTMLElement>('.vision-card, .mission-card');
    cards.forEach(card => {
      const content = card.querySelector('.parallax-content');
      const bg = card.querySelector('.hover-bg');
      if (!content || !bg) return;

      const isVision = card.classList.contains('vision-card');
      // Set initial clip-path (hidden)
      gsap.set(bg, {
        clipPath: isVision ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)",
        opacity: 1
      });

      card.addEventListener('mouseenter', () => {
        gsap.to(bg, { clipPath: "inset(0 0% 0 0%)", duration: 0.8, ease: "power3.inOut" });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(bg, {
          clipPath: isVision ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)",
          duration: 0.6,
          ease: "power3.inOut"
        });
        gsap.to(content, { x: 0, y: 0, rotateX: 0, rotateY: 0, duration: 1, ease: "elastic.out(1, 0.3)" });
      });

      card.addEventListener('mousemove', (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        gsap.to(content, {
          x: x * 30,
          y: y * 30,
          rotateX: -y * 10,
          rotateY: x * 10,
          duration: 0.6,
          ease: "power2.out",
          transformPerspective: 1000
        });
      });
    });

    // Partners unified trickling & receding animation
    gsap.fromTo(".partner-segment",
      { y: -450 },
      {
        y: 0,
        ease: "power2.out",
        stagger: {
          amount: 1.2,
          from: "random"
        },
        scrollTrigger: {
          trigger: "#partners",
          start: "top 110%", // Start earlier
          end: "top 40%",   // End later but keep it scrubbed
          scrub: 1.5,       // Smoother but still responsive
        }
      }
    );
  }, { scope: pageRef });

  return (
    <div className="min-h-screen bg-background" ref={pageRef}>
      <Navbar />

      {/* Hero â€” CRF-inspired split with parallax */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center overflow-hidden">
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
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mt-4 leading-tight whitespace-normal md:whitespace-nowrap">
              Our Story
            </h1>
            <div className="w-24 h-1 bg-[#FFF200] mt-6 origin-left section-line" />
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-lg leading-relaxed">
              Advancing pharmaceutical research, innovation, and quality through scientific excellence since 2021.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button size="lg" asChild className="bg-[#FFF200] text-black hover:bg-white transition-all duration-300 font-bold w-full sm:w-auto h-auto py-3">
                <Link to="/about#major-research-units">Explore Our Scope</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-white/80 text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-300 font-bold w-full sm:w-auto h-auto py-3">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 01 Overview â€” CRF numbered section */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-grid relative">
          <div className="absolute -left-4 top-0 font-heading text-[10rem] md:text-[14rem] font-black text-black/[0.04] leading-none select-none pointer-events-none section-number">01</div>
          <SectionReveal>
            <div className="flex items-center gap-4 mb-2">
              <span className="text-xl font-bold uppercase tracking-[0.2em] text-muted-foreground">Overview</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mt-4 text-foreground leading-tight">
              Droga Research and<br className="hidden md:block" /> Development Center
            </h2>
          </SectionReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-16 mt-6 md:mt-12">
            <SectionReveal>
              <div className="space-y-6 text-lg text-muted-foreground font-body leading-relaxed">
                <p>
                  Established in 2021, the Droga Research and Development Center is one of the major wings of Droga Pharma PLC, a diversified private company operating mainly in healthcare services and agricultural exports. The company has evolved from a pharmaceutical wholesale and importing business into an integrated healthcare group with a strong national presence and expanding operations across multiple African markets.
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

      {/* Vision & Mission â€” Refined design with white bg */}
      <section id="vision" className="bg-white py-24 md:py-32 relative overflow-hidden border-t border-black/10">
        <div className="container-grid relative px-6 md:px-12 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-0 relative">
            {/* Vision */}
            <div className="lg:col-span-5 vision-card group relative py-4 transition-colors duration-500 cursor-pointer">
              {/* Sliding Yellow Background - Spans to central divider */}
              <div className="hover-bg absolute top-0 bottom-0 bg-[#FFF200] z-0"
                style={{ left: '-100vw', right: '-20%' }} />

              <div className="parallax-content relative z-10">
                <SectionReveal>
                  <div className="px-6 md:px-8 py-4">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-px bg-black origin-left section-line" />
                      <span className="text-xs font-bold uppercase tracking-[0.3em] text-black/40 group-hover:text-black transition-colors duration-500">Our Vision</span>
                    </div>
                    <div className="flex flex-col md:flex-row items-start gap-6">
                      <div className="shrink-0 p-4 bg-black/5 rounded-full group-hover:bg-white transition-all duration-500 shadow-sm">
                        <Eye className="w-8 h-8 text-black" strokeWidth={1.5} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-black leading-snug tracking-tight">
                          To be the leading integrated healthcare ecosystem provider in Ethiopia.
                        </h3>
                      </div>
                    </div>
                  </div>
                </SectionReveal>
              </div>
            </div>

            {/* Divider on large screens */}
            <div className="hidden lg:block lg:col-span-2 relative h-full">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-black/10 origin-top vision-divider scale-y-100" />
            </div>

            {/* Mission */}
            <div className="lg:col-span-5 mission-card group relative py-4 transition-colors duration-500 cursor-pointer">
              {/* Sliding Yellow Background - Spans to central divider */}
              <div className="hover-bg absolute top-0 bottom-0 bg-[#FFF200] z-0"
                style={{ left: '-20%', right: '-100vw' }} />

              <div className="parallax-content relative z-10">
                <SectionReveal delay={0.2}>
                  <div className="px-6 md:px-8 py-4">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-px bg-black origin-left section-line" />
                      <span className="text-xs font-bold uppercase tracking-[0.3em] text-black/40 group-hover:text-black transition-colors duration-500">Our Mission</span>
                    </div>
                    <div className="flex flex-col md:flex-row items-start gap-6">
                      <div className="shrink-0 p-4 bg-black/5 rounded-full group-hover:bg-white transition-all duration-500 shadow-sm">
                        <Target className="w-8 h-8 text-black" strokeWidth={1.5} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-black leading-snug tracking-tight">
                          We provide quality and innovative products that enhance the well-being of every community.
                        </h3>
                      </div>
                    </div>
                  </div>
                </SectionReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 Major Units â€” matches Home page */}
      <section id="major-research-units" className="relative overflow-hidden bg-white pillars-section scroll-mt-24">
        <div className="section-padding relative w-full h-full pillars-pin-target">

          {/* Desktop: Text Left + Image Right — normal flow, cards below */}
          <div className="hidden md:flex px-0 justify-between items-start mb-16 pillars-text-wrapper">
            {/* Text (Left) */}
            <div className="w-1/2">
              <SectionReveal>
                <span className="block text-sm md:text-base font-bold uppercase tracking-[0.2em] text-black">
                  InDepth Capabilities
                </span>
                <div className="w-60 h-[1.5px] bg-black mt-4" />
                <h2 className="font-heading text-4xl md:text-5xl lg:text-5xl font-semibold tracking-tight mt-6 text-black leading-tight">
                  Our Major <br className="hidden lg:block" /> Research Units
                </h2>
                <p className="mt-8 text-base text-black/60 max-w-xl leading-relaxed">
                  End to end services spanning bioequivalence, drug discovery, nutraceuticals, and cosmetic science. Our research center is dedicated to advancing pharmaceutical excellence through innovation.
                </p>
              </SectionReveal>
            </div>

            {/* Feature image (Right) */}
            <div className="w-[35%] h-[380px] relative rounded-[0.3rem] border border-black overflow-hidden opacity-90 pillar-video">
              <img src={pillarFeatureImg} alt="Droga research laboratory" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Mobile image & text â€” in normal flow */}
          <div className="md:hidden flex flex-col items-center mb-8">
            <div className="w-[90%] h-[240px] relative rounded-[0.3rem] border border-black overflow-hidden opacity-90 mb-8">
              <img src={pillarFeatureImg} alt="Droga research laboratory" className="w-full h-full object-cover" />
            </div>
            <div className="px-4 text-center">
              <span className="block text-xs font-bold uppercase tracking-[0.2em] text-black">InDepth Capabilities</span>
              <h2 className="font-heading text-3xl font-semibold mt-2 text-black">Our Major Units</h2>
            </div>
          </div>

          {/* Cards — always below the text/image */}
          <div className="grid grid-cols-2 md:flex md:flex-row md:flex-wrap lg:flex-nowrap gap-4 md:gap-6 perspective-1000 pillar-card-container relative z-0 -mt-10">
            {pillarCards.map((pillar, index) => (
                <div
                  key={pillar.title}
                  className="pillar-wrapper pillar-flex-default transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:w-[calc(50%-0.75rem)] lg:w-auto lg:min-w-0"
                >
                  <div className="pillar-card relative rounded-[0.3rem] overflow-hidden border border-[#DBDBDB] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col items-center p-4 md:p-8 h-[200px] md:h-[550px]">
                    {/* Title */}
                    <div className="w-full text-center">
                      <h3 className="font-heading text-sm md:text-xl lg:text-2xl font-bold text-black leading-tight flex items-center justify-center whitespace-pre-line min-h-[2.5rem] md:h-16">
                        {pillar.title}
                      </h3>
                    </div>

                    {/* Circle image */}
                    <div className={`${isMobile ? "flex-1 flex items-center justify-center" : "flex items-center justify-center mt-4 mb-4"}`}>
                      <img
                        src={pillar.image}
                        alt={pillar.title}
                        className="w-24 h-24 md:w-44 md:h-44 object-cover rounded-full shadow-md"
                      />
                    </div>

                    {/* Summary */}
                    <div className="hidden md:block text-center flex-1 flex items-start justify-center px-2">
                      <p className="text-sm text-black/70 font-body leading-relaxed">{pillar.summary}</p>
                    </div>

                    {/* Button */}
                    <div className={`${isMobile ? "mt-2" : "mt-auto pt-4"} flex justify-center`}>
                      <Button
                        variant="outline"
                        className="rounded-full border-black/20 text-[10px] md:text-xs text-black uppercase tracking-wider bg-white hover:bg-[#FFF200] hover:text-black hover:border-[#FFF200] transition-colors px-3 py-1 md:px-4 md:py-2"
                        onClick={() => setModalUnit(index)}
                      >
                        Details
                      </Button>
                    </div>
                  </div>
                </div>
            ))}

          {modalUnit !== null && (
            <Dialog open={modalUnit !== null} onOpenChange={(open) => { if (!open) setModalUnit(null); }}>
              <DialogContent className="max-w-3xl p-0 overflow-hidden bg-white border-black/10 flex flex-col !gap-0 max-h-[90vh] sm:rounded-2xl">
                <div className="p-6 md:p-8 shrink-0 border-b border-black/10" style={{ borderTopColor: pillarCards[modalUnit].color, borderTopWidth: 4 }}>
                  <DialogHeader>
                    <div className="flex items-start gap-4 pr-10">
                      <img
                        src={pillarCards[modalUnit].image}
                        alt=""
                        className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover shadow-md shrink-0"
                      />
                      <DialogTitle className="font-heading text-xl md:text-2xl font-bold leading-tight text-black text-left">
                        {pillarCards[modalUnit].title}
                      </DialogTitle>
                    </div>
                  </DialogHeader>
                  <p className="mt-3 text-sm text-black/60 font-body leading-relaxed pr-10">
                    {pillarCards[modalUnit].summary}
                  </p>
                </div>
                <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
                  <div className="flex flex-col gap-6">
                    {pillarCards[modalUnit].details.map((detail, i) => (
                      <div key={i}>
                        {detail.heading && (
                          <h4 className="font-heading text-sm font-bold text-black mb-2 uppercase tracking-wide border-b border-black/10 pb-1">
                            {detail.heading}
                          </h4>
                        )}
                        {detail.content && (
                          <div className="space-y-3 mb-3">
                            {detail.content.split("\n\n").map((paragraph, k) => (
                              <p key={k} className="text-sm text-black/80 font-body leading-relaxed">
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        )}
                        {detail.items && detail.items.length > 0 && (
                          <ul className="space-y-2">
                            {detail.items.map((item, j) => (
                              <li key={j} className="flex items-start gap-2 text-sm text-black/80 font-body leading-relaxed">
                                <span className="text-[#FFF200] font-bold mt-0.5">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          )}
            </div>
        </div>
      </section>

      {/* 03 Our Facilities â€” CRF overlapping layout */}
      <section id="our-laboratories" className="section-padding relative overflow-hidden bg-white scroll-mt-24">
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

                {/* Video strip â€” all three infrastructure clips */}
                <div className="w-full lg:w-[70%] h-[250px] md:h-[400px] lg:h-[550px] relative overflow-hidden mt-12 lg:mt-0 grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2">
                  <video src={bioanalyticalVideo1} autoPlay loop muted playsInline className="h-full w-full min-h-[200px] sm:min-h-0 object-cover about-parallax-img" />
                  <video src={bioanalyticalVideo2} autoPlay loop muted playsInline className="h-full w-full min-h-[200px] sm:min-h-0 object-cover about-parallax-img" />
                  {/* <video src={bioanalyticalVideo3} autoPlay loop muted playsInline className="h-full w-full min-h-[200px] sm:min-h-0 object-cover about-parallax-img" /> */}
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
                  <div className="overflow-hidden h-full w-full cursor-grab active:cursor-grabbing" ref={researchEmblaRef}>
                    <div className="flex h-full">
                      {researchFormulationSlides.map((slide, i) => (
                        <div key={i} className="min-w-0 shrink-0 grow-0 basis-full h-full relative">
                          <img
                            src={slide.src}
                            alt={slide.alt}
                            className="absolute inset-0 w-full h-full object-cover about-parallax-img select-none pointer-events-none"
                            draggable={false}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-0 right-0 z-20 flex justify-center gap-2" aria-label="Carousel slides">
                    {researchFormulationSlides.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        aria-label={`Go to image ${i + 1}`}
                        aria-current={researchSlideIndex === i}
                        onClick={() => researchEmblaApi?.scrollTo(i)}
                        className={`h-2 rounded-full transition-all duration-300 ${researchSlideIndex === i ? "w-8 bg-white" : "w-2 bg-white/45 hover:bg-white/70"}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quality Control Units */}
            {/* <div className="relative pt-16 lg:pt-24 mb-32">
              <div className="flex flex-col lg:flex-row relative items-start lg:items-center"> */}
                {/* Dark Top Title */}
                {/* <div className="absolute -top-8 left-0 lg:left-[5%] z-20 bg-black px-6 py-4 md:px-10 md:py-6 shadow-md w-auto max-w-[90%]">
                  <h3 className="text-white font-heading text-lg md:text-2xl font-bold tracking-widest uppercase m-0">
                    3. Quality Control Units
                  </h3>
                </div> */}

                {/* Image Container */}
                {/* <div className="w-full lg:w-[70%] h-[250px] md:h-[400px] lg:h-[550px] relative overflow-hidden mt-12 lg:mt-0">
                  <video src={labVideo3} autoPlay loop muted playsInline className="w-full h-[130%] -top-[15%] absolute object-cover about-parallax-img" />
                </div> */}

                {/* Content Box */}
                {/* <div className="w-[90%] mx-auto lg:w-[45%] lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 z-10 bg-[#FFF200] p-8 md:p-12 shadow-xl -mt-16 lg:mt-0 relative facility-info-box">
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
            </div> */}

            {/* Formulation & Development */}
            {/* <div className="relative pt-16 lg:pt-24 mb-32">
              <div className="flex flex-col lg:flex-row relative items-start lg:items-center justify-end"> */}
                {/* Dark Top Title */}
                {/* <div className="absolute -top-8 right-0 lg:right-[5%] z-20 bg-black px-6 py-4 md:px-10 md:py-6 shadow-md w-auto max-w-[90%] text-right">
                  <h3 className="text-white font-heading text-lg md:text-2xl font-bold tracking-widest uppercase m-0">
                    4. Formulation & Development
                  </h3>
                </div> */}

                {/* Content Box */}
                {/* <div className="w-[90%] mx-auto lg:w-[45%] lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 z-10 bg-[#FFF200] p-8 md:p-12 shadow-xl -mt-16 lg:mt-0 relative order-2 lg:order-1 facility-info-box">
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
                </div> */}

                {/* Image Container */}
                {/* <div className="w-full lg:w-[70%] h-[250px] md:h-[400px] lg:h-[550px] relative overflow-hidden mt-12 lg:mt-0 order-1 lg:order-2">
                  <video src={labVideo4} autoPlay loop muted playsInline className="w-full h-[130%] -top-[15%] absolute object-cover about-parallax-img" />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Full-width parallax image break */}
      {/* <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img src={facilityImg} alt="Facility" className="absolute inset-0 w-full h-[140%] -top-[20%] object-cover about-parallax-img" />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <SectionReveal className="text-center max-w-2xl px-6">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-white tracking-tight">World-Class Facilities</h2>
            <p className="mt-4 text-lg text-white/70">Our integrated research campus houses laboratories, bioequivalence units, and quality control centers.</p>
          </SectionReveal>
        </div>
      </section> */}

      {/* 04 Manufacturing & Conservation â€” 5-segment reveal */}
      {/* <section className="relative section-padding overflow-hidden mfg-section"> */}
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
        {/* <div className="absolute inset-0 flex z-0">
          {[0, 1, 2, 3, 4].map(i => <div key={i} className="w-1/5 h-full bg-[#FFF200] translate-y-full mfg-segment" />)}
        </div>
        <div className="container-grid relative z-10 mfg-content opacity-0">
          <div className="absolute -left-4 top-0 font-heading text-[10rem] md:text-[14rem] font-black text-black/[0.04] leading-none select-none pointer-events-none section-number">04</div> */}
{/* 
          <SectionReveal className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-2">
              <span className="text-xl font-bold uppercase tracking-[0.2em] text-black">COMING SOON</span>
            </div> */}
            {/* <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mt-4 text-black">Manufacturing & Conservation</h2> */}
          {/* </SectionReveal> */}

          {/* <div className="mt-20 space-y-32"> */}
            {/* R&D Center */}
            {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
            </div> */}

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
            {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <SectionReveal className="lg:order-1">
                <h3 className="font-heading text-3xl font-bold mb-6 text-black">Natural Soap & Rosemary Processing</h3>
                <div className="space-y-4 text-black font-medium leading-relaxed">
                  <p>
                    The Droga Soap and Cosmetics Manufacturing Plant focuses on 100% natural skincare solutions, while the Rosemary project improves farmer livelihoods through sustainable essential oil extraction.
                  </p>
                  <p>
                    These initiatives combine modern manufacturing with traditional herbal wisdom to deliver consistent, high-quality natural products for the global market.
                  </p>
                </div> */}
              {/* </SectionReveal>
              <SectionReveal className="lg:order-2" delay={0.2}>
                <div className="overflow-hidden rounded-sm shadow-xl aspect-[4/3] relative group">
                  <img src={project3Img} alt="Soap Plant" className="absolute inset-0 w-full h-[130%] -top-[15%] object-cover about-parallax-img" />
                </div>
              </SectionReveal>
            </div> */}

            {/* Conservation & Nursery */}
            {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
            </div> */}
          {/* </div> */}
        {/* </div>
      </section> */}

      {/* Timeline */}
      <div id="milestones">
        <JourneySection timelineData={timelineData} />
      </div>


      {/* Partners */}
      <section id="partners" className="relative overflow-hidden bg-white">
        <div className="w-full relative">
          <SlidingPartnersGrid />

          {/* Titles second */}
          <div className="text-center pb-24 px-6">
            <SectionReveal>
              <div className="flex items-center justify-center gap-4 mb-2">
                <div className="w-12 h-px bg-[#FFF200] origin-left section-line" />
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground">Collaboration</span>
                <div className="w-12 h-px bg-[#FFF200] origin-right section-line" />
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mt-4 text-foreground">Our Partners</h2>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                We collaborate with pharmaceutical companies, research institutes, academic organizations, and regulatory bodies to advance the frontiers of healthcare.
              </p>
            </SectionReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
