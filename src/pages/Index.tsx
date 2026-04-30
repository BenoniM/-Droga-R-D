import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight, FlaskConical, Microscope, Brain, HeartPulse, Leaf, Newspaper,
  Dna, Beaker, Zap, Activity, Pill, Apple, Droplet, ChevronDown, X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionReveal from "@/components/SectionReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HexagonalBackground from "@/components/HexagonalBackground";
import heroImg from "@/assets/Images/IMG_4582.jpg";
import labImg from "@/assets/Images/IMG_4528.jpg";
import facilityImg from "@/assets/Images/IMG_4514.jpg";
import moleculesImg from "@/assets/Images/IMG_4543.jpg";
import plantsImg from "@/assets/Images/IMG_4565.jpg";
import pillarVideo from "@/assets/pillar/4909887-hd_1080_1920_30fps.mp4";

import project1Img from "@/assets/Project/Droga Oil Manufacturing Plant.jpg";
import project2Img from "@/assets/Project/droga-manufacture.png";
import project3Img from "@/assets/Project/Soap Manufacturing.jpg";
import project4Img from "@/assets/Project/Rosmary Manufacturing Plant.jpg";

import heroImg1 from "@/assets/Images/IMG_4565.jpg";
import heroImg2 from "@/assets/Images/IMG_4582.jpg";
import heroImg3 from "@/assets/Images/IMG_4644.jpg";
import heroImg4 from "@/assets/Images/IMG_4543.jpg";
import heroImg5 from "@/assets/Images/IMG_4514.jpg";

const heroStackImages = [heroImg1, heroImg2, heroImg3, heroImg4, heroImg5];

gsap.registerPlugin(ScrollTrigger);

// CountUp component (unchanged)
const CountUp = ({ end, suffix = "", label, prefix = "" }: { end: number; suffix?: string; label: string; prefix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ref.current,
      start: "top 90%",
      once: true,
      onEnter: () => {
        let start = 0;
        const duration = 2000;
        const step = Math.ceil(end / (duration / 16));
        const timer = setInterval(() => {
          start += step;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(start);
          }
        }, 16);
      }
    });
  }, { scope: ref });

  return (
    <div ref={ref} className="text-center">
      <div className="font-heading text-4xl md:text-5xl font-bold text-foreground">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="mt-2 text-sm font-body text-muted-foreground uppercase tracking-wider">{label}</div>
    </div>
  );
};

// Hero slides data
const heroSlidesData = [
  {
    image: heroImg1,
    subtitle: "State-of-the-Art Infrastructure",
    desc: "Translating complex biological data into scalable pharmaceutical solutions through innovative research and scientific excellence."
  },
  {
    image: heroImg2,
    subtitle: "Pioneering Drug Discovery",
    desc: "Natural and herbal pharmaceutical research with modern scientific methodologies for a healthier tomorrow."
  },
  {
    image: heroImg3,
    subtitle: "Advanced Bioequivalence",
    desc: "GCP-compliant clinical unit with comprehensive analytical testing services for reliable evaluation."
  },
  {
    image: heroImg4,
    subtitle: "Formulation Excellence",
    desc: "Scaling innovations from concept to market-ready products with cutting-edge technology."
  },
  {
    image: heroImg5,
    subtitle: "Sustainable Science",
    desc: "Leveraging indigenous medicinal plants and biodiversity for innovative health solutions."
  },
];

// Core Research Pillars data (unchanged)
const pillarCards = [
  {
    icon: FlaskConical,
    title: "Bioequivalence & Analytics",
    summary: "GCP-compliant bioequivalence studies and comprehensive analytical testing services.",
    details: [
      {
        heading: "Bioequivalence Studies",
        items: [
          "GCP‑compliant clinical unit with housing capacity & ICU",
          "Medical laboratory for sample processing",
          "Bioanalytical laboratory: biological matrix analysis, bioavailability, PK studies, method development"
        ]
      },
      {
        heading: "Physicochemical Analysis",
        items: [
          "Raw material identification", "Purity determination (API & excipients)", "Assay",
          "Dissolution testing", "Disintegration testing", "Hardness & friability",
          "Particle size analysis", "Moisture content", "Stability studies"
        ]
      }
    ]
  },
  {
    icon: Microscope,
    title: "Drug Discovery",
    summary: "Natural and herbal drug discovery, formulation development, and preclinical evaluation.",
    details: [
      {
        heading: "Formulation Development",
        items: [
          "Solid oral dosage forms", "Oral liquid dosage forms",
          "Semi‑solids & injectables", "Herbal medicine formulations",
          "Solubility & stability enhancement", "Controlled release technologies"
        ]
      },
      {
        heading: "Research Laboratory",
        items: [
          "Bioactive compound screening", "Extraction & characterization",
          "Preclinical evaluation", "Mechanism of action studies",
          "Safety & efficacy assessments", "End‑to‑end drug discovery"
        ]
      }
    ]
  },
  {
    icon: Apple,
    title: "Food & Nutraceuticals",
    summary: "Nutrition-based product R&D for health, wellness, and preventive care.",
    details: [
      {
        heading: "Key Activities",
        items: [
          "Raw material evaluation & ingredient standardization",
          "Formulation development for functional foods",
          "Stability & safety assessment",
          "Volatile & fixed oil processing",
          "Cross‑disciplinary collaboration (pharmacy + food science)"
        ]
      }
    ]
  },
  {
    icon: Droplet,
    title: "Cosmetic & Detergent R&D",
    summary: "Formulation of medicated and non-medicated cosmetic and hygiene products.",
    details: [
      {
        heading: "Product Range",
        items: [
          "Soaps & face washes", "Creams & lotions", "Serums & hair oils",
          "Hair growth serums", "Antiseptic formulations",
          "Pilot‑scale development & process standardization"
        ]
      }
    ]
  }
];

// Active Projects data
const activeProjects = [
  { icon: Dna, title: "Bioactive Compound Screening", category: "Biotechnology", status: "Active", image: moleculesImg },
  { icon: Beaker, title: "Oral Dispersible Tablet Formulation", category: "Medicine", status: "Active", image: labImg },
  { icon: Leaf, title: "Spirulina Nutraceutical Research", category: "Public Health", status: "Active", image: plantsImg },
  { icon: Zap, title: "Diabetic Foot Care Emollient", category: "Medicine", status: "Completed", image: facilityImg },
];

const newsItems = [
  { title: "New Bioequivalence Study Center Opens", date: "March 2026", excerpt: "State-of-the-art facility at Kilinto Industrial Park begins operations.", image: facilityImg },
  { title: "DRG Grant Applications Now Open", date: "January 2026", excerpt: "Droga Research Grant accepting proposals across pharmaceutical sciences.", image: labImg },
  { title: "Medicinal Plant Nursery Established", date: "December 2025", excerpt: "Butajira nursery to cultivate indigenous medicinal plant species.", image: plantsImg },
];

// Featured Projects Detail Data
const featuredProjectsData = [
  {
    id: 1,
    title: "Project I: Droga Research and Development Center",
    image: project2Img,
    description: "Situated on 9,951 sq.m of land in Kilinto Industrial Park, our state-of-the-art center is designed to advance research, development, and quality testing for the pharmaceutical, academic, research, cosmetic, and food & beverage industries.",
    sections: [
      {
        heading: "Our Aim",
        content: "The center is dedicated to supporting local innovation and reducing dependence on imported APIs, excipients, formulations, and other raw materials by leveraging the country's indigenous knowledge and natural resources.",
      },
      {
        heading: "Our Facilities",
        content: "The center will house:",
        list: [
          "Research Laboratories for drug discovery, food & nutrition, and cosmetic product development",
          "Bioequivalence Study Units to support preclinical and clinical evaluation",
          "Quality Control Testing Units for reliable and regulatory-compliant analysis",
          "Formulation and Development Units for scaling innovations from concept to market-ready products"
        ],
        footer: "With these integrated facilities, the center aims to be a hub of scientific excellence, innovation, and self-reliance in pharmaceuticals, nutraceuticals, cosmetics, and functional foods."
      }
    ],
    imageFirst: false, // Right image by default
  },
  {
    id: 2,
    title: "Project II: Droga Oil Manufacturing Plant",
    image: project1Img,
    description: "A 1,000 sq.m processing facility is being established to harness the health promoting potential of fixed and volatile oils. The facility is designed to process these natural oils at scale, ensuring high-quality standards suitable for both local markets and export.",
    sections: [
      {
        heading: "Purpose and Capacity",
        list: [
          "Can process 792.064 ton per annum",
          "Processing of fixed and volatile oils with recognized health benefits",
          "Support for local and international distribution of natural health products",
          "Integration with the R&D wing to ensure quality, safety, and efficacy from raw material to finished product"
        ],
        footer: "This facility aligns with our mission to leverage indigenous resources, create value-added products, and contribute to both public health and economic growth."
      }
    ],
    imageFirst: true, // Left image
  },
  {
    id: 3,
    title: "Project III: Droga Soap Manufacturing Plant",
    image: project3Img,
    description: "The Droga Soap and Cosmetics Manufacturing Plant is an upcoming initiative designed to strengthen local production of 100% natural skincare solutions. The facility will serve as a hub for innovation in natural cosmetics, reducing reliance on imports while addressing common skin concerns with effective, botanically infused products.",
    paragraphs: [
      "One branch of the initiative, the Droga Soap Manufacturing Plant, will occupy 200 m² and focus on producing two distinct soap varieties which are crafted from natural ingredients and are enriched with beneficial botanicals.",
      "With an annual production capacity of 51,840 pieces of each type, the project aims to supply for the local demand and promote healthier skin through sustainable, natural formulations. By combining modern manufacturing with traditional herbal wisdom, the Droga Soap Plant will contribute to community well-being, job creation, and the growth of Ethiopia's personal care industry."
    ],
    imageFirst: false,
  },
  {
    id: 4,
    title: "Project IV: Butajira Rosmary Manufacturing Plant",
    image: project4Img,
    description: "The Butajira Rosemary Processing Plant aims to improve the livelihood of farmers in Meskan Woreda, Eastern Gurage Zone, through sustainable rosemary cultivation and market integration. The initiative covers 20 hectares of investment land and 40 hectares of partner farms, engaging 160 local farmers in modern rosemary production supported by training, technology transfer, and cooperative formation.",
    paragraphs: [
      "With a total investment of ETB 77.24 million, the project focuses on producing high-quality rosemary for essential oil extraction used in pharmaceutical, cosmetic, and food industries. It combines scientific cultivation practices with irrigation technology to yield over 20,000 quintals of rosemary twice a year, ensuring consistent supply and export potential."
    ],
    footer: "Beyond its economic impact, the project promotes environmental sustainability, job creation (11 permanent and 60 temporary positions), and community empowerment. By linking farmers to formal markets and improving production standards, Droga Pharma PLC is positioning Meskan Woreda as a center of excellence for essential oil-bearing crops and contributing to Ethiopia's growing natural product industry.",
    imageFirst: true,
  }
];

const RevealText = ({ text, className = "", showCovers = true }: { text: string, className?: string, showCovers?: boolean }) => {
  const words = text.split(" ");
  // Identify if it's a project title (starts with "Project")
  const isProjectTitle = words[0] === "Project";

  return (
    <span className={`inline-flex flex-wrap ${showCovers ? 'justify-center gap-x-3 gap-y-5' : 'gap-x-[0.3em] gap-y-[0.1em]'} ${className}`}>
      {words.map((word, i) => {
        // Bold the first two words if it's a project title ("Project X."), otherwise bold all if it's not a project title (like "Projects")
        const isBold = !isProjectTitle || i < 2;

        return (
          <span key={i} className={`relative inline-block ${isBold ? 'font-bold' : 'font-light opacity-90'}`}>
            <span className={`relative z-0 ${showCovers ? 'opacity-0 text-reveal-word-inner' : 'opacity-100'}`}>{word}</span>
            {showCovers && (
              <span
                className="absolute -inset-y-2 -inset-x-[0.25rem] z-10 project-word-cover transform-gpu"
                style={{
                  background: '#000000ff',
                  borderRadius: '8px',
                  willChange: 'transform, opacity',
                }}
              />
            )}
          </span>
        );
      })}
    </span>
  );
};



const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(heroSlidesData.length - 1);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [activePillar, setActivePillar] = useState<number | null>(null);
  const [activeProjectDetail, setActiveProjectDetail] = useState<number | null>(null);
  const [hexActive, setHexActive] = useState(false);
  const [hexSpots, setHexSpots] = useState<any[]>([]);
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 768);

  useEffect(() => {
    // Randomize spots per segment on refresh
    const generateSpots = () => {
      const spots: any[] = [];
      const numSpots = 8;
      const minDistance = 0.35; // Min distance between cluster centers

      // Query for restricted zones to avoid them entirely
      const section = document.querySelector('.featured-projects-section');
      const restrictedEls = section ? Array.from(section.querySelectorAll('.projects-content h2, .projects-content p, .projects-content button, .project-img-container')) : [];
      const sectionRect = section?.getBoundingClientRect();

      const forbiddenZones = sectionRect ? restrictedEls.map(el => {
        const r = el.getBoundingClientRect();
        return {
          x: (r.left + r.width / 2 - sectionRect.left) / sectionRect.width,
          y: (r.top + r.height / 2 - sectionRect.top) / sectionRect.height,
          radiusX: (r.width / 2 + 100) / sectionRect.width, // Padding for avoidance
          radiusY: (r.height / 2 + 100) / sectionRect.height
        };
      }) : [];

      for (let attempts = 0; attempts < 100 && spots.length < numSpots; attempts++) {
        const x = 0.05 + Math.random() * 0.9;
        const y = 0.05 + Math.random() * 0.9;
        
        // 1. Check distance from other spots
        let tooClose = false;
        for (const spot of spots) {
          if (Math.sqrt(Math.pow(spot.xFrac - x, 2) + Math.pow(spot.yFrac - y, 2)) < minDistance) {
            tooClose = true;
            break;
          }
        }
        if (tooClose) continue;

        // 2. Check avoidance zones (don't generate near text/images)
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
            radius: 3.5 + Math.random() * 2.0,
            radiusY: 2.5 + Math.random() * 1.0,
          });
        }
      }
      return spots;
    };

    // Use a small timeout to ensure DOM is ready for getBoundingClientRect
    const timer = setTimeout(() => {
      setHexSpots(generateSpots());
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => {
        setPrevSlide(prev);
        return (prev + 1) % heroSlidesData.length;
      });
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  // Close project details on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (activeProjectDetail !== null) {
        setActiveProjectDetail(null);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeProjectDetail]);

  // Yellow Box Reveal Animation
  useEffect(() => {
    if (currentSlide !== displayIndex && textRef.current) {
      const subtitleBlocks = gsap.utils.toArray<HTMLElement>(textRef.current.querySelectorAll('.subtitle-reveal-container .reveal-block'));
      const descBoxes = gsap.utils.toArray<HTMLElement>(textRef.current.querySelectorAll('.desc-reveal-box')).reverse();
      const mob = window.innerWidth < 768;
      const coverOrigin = mob ? 'top' : 'bottom';
      const revealOrigin = mob ? 'bottom' : 'top';

      const tl = gsap.timeline();
      tl.addLabel("startCover");
      tl.to(subtitleBlocks, { scaleY: 1, transformOrigin: coverOrigin, duration: 0.5, ease: "power2.inOut" }, "startCover");
      tl.to(descBoxes, { scaleY: 1, transformOrigin: coverOrigin, duration: 0.5, ease: "power2.inOut", stagger: 0.15 }, "startCover");
      tl.call(() => { setDisplayIndex(currentSlide); });
      tl.addLabel("startReveal");
      tl.to(subtitleBlocks, { scaleY: 0, transformOrigin: revealOrigin, duration: 0.5, ease: "power2.inOut" }, "startReveal");
      tl.to(descBoxes, { scaleY: 0, transformOrigin: revealOrigin, duration: 0.5, ease: "power2.inOut", stagger: 0.15 }, "startReveal");
    }
  }, [currentSlide, displayIndex]);

  // Clean up unused textRef and GSAP effect

  useGSAP(() => {
    // Hero Section Pinning (allows next section to scroll over it)
    ScrollTrigger.create({
      trigger: ".hero-section",
      start: "top top",
      end: "+=200%", // Keep it pinned long enough for subsequent sections to cover it
      pin: true,
      pinSpacing: false,
    });

    // Research Impact 5-Segment Reveal
    const segments = gsap.utils.toArray<HTMLElement>('.section-segment');
    const impactCols = gsap.utils.toArray<HTMLElement>('.impact-col');
    if (segments.length === 5 && impactCols.length === 5 && window.innerWidth >= 768) {
      const getSegs = (indices: number[]) => indices.map(i => segments[i]);
      const getImpactCols = (indices: number[]) => indices.map(i => impactCols[i]);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".research-impact-section",
          start: "top 85%",
          end: "top 15%",
          scrub: 1.5,
        }
      });

      const updateText = (index: number, val: number) => {
        const col = impactCols[index];
        const textEl = col.querySelector('.count-text');
        const suffix = col.dataset.suffix || "";
        if (textEl) textEl.innerHTML = Math.round(val).toLocaleString() + suffix;
      };

      const c0 = { val: 0 };
      const c1 = { val: 0 };
      const c2 = { val: 0 };
      const c3 = { val: 0 };
      const c4 = { val: 0 };

      tl.to(getSegs([2]), { y: 0, duration: 1, ease: "none" }, 0)
        .to(c2, { val: parseInt(impactCols[2].dataset.end || "0"), duration: 1, ease: "none", onUpdate: () => updateText(2, c2.val) }, 0)

        .to(getSegs([1, 3]), { y: 0, duration: 0.65, ease: "none" }, 0.35)
        .to(c1, { val: parseInt(impactCols[1].dataset.end || "0"), duration: 0.65, ease: "none", onUpdate: () => updateText(1, c1.val) }, 0.35)
        .to(c3, { val: parseInt(impactCols[3].dataset.end || "0"), duration: 0.65, ease: "none", onUpdate: () => updateText(3, c3.val) }, 0.35)

        .to(getSegs([0, 4]), { y: 0, duration: 0.3, ease: "none" }, 0.7)
        .to(c0, { val: parseInt(impactCols[0].dataset.end || "0"), duration: 0.3, ease: "none", onUpdate: () => updateText(0, c0.val) }, 0.7)
        .to(c4, { val: parseInt(impactCols[4].dataset.end || "0"), duration: 0.3, ease: "none", onUpdate: () => updateText(4, c4.val) }, 0.7)

        .to(".impact-header", { autoAlpha: 1, duration: 0.15 }, 0.80);
    }

    // Mobile Impact Stats Scrub
    const mobileImpactCols = gsap.utils.toArray<HTMLElement>('.mobile-impact-col');
    if (mobileImpactCols.length > 0 && window.innerWidth < 768) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".mobile-impact-section",
          start: "top 80%",
          end: "bottom 80%",
          scrub: 1.5,
        }
      });
      
      const updateTextMob = (index: number, val: number) => {
        const col = mobileImpactCols[index];
        const textEl = col.querySelector('.count-text');
        const suffix = col.dataset.suffix || "";
        if (textEl) textEl.innerHTML = Math.round(val).toLocaleString() + suffix;
      };

      mobileImpactCols.forEach((col, i) => {
        const c = { val: 0 };
        tl.to(c, { 
          val: parseInt(col.dataset.end || "0"), 
          duration: 1, 
          ease: "none", 
          onUpdate: () => updateTextMob(i, c.val) 
        }, 0);
      });
    }

    // Pillar Section Scroll Flow
    const wrappers = gsap.utils.toArray<HTMLElement>('.pillar-wrapper');
    const videos = gsap.utils.toArray<HTMLElement>('.pillar-video');
    const video = videos[0];

    if (wrappers.length === 4 && video && window.innerWidth >= 768) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".pillars-pin-target",
          start: "top 60%",
          end: "bottom 90%",
          scrub: true,
        }
      });
      tl.fromTo(video, { y: 600 }, { y: 0, duration: 1, ease: "power2.out" })
        .fromTo([wrappers[1], wrappers[2]], { y: 600 }, { y: 35, duration: 1, ease: "power2.out" }, "+=0.1")
        .fromTo([wrappers[0], wrappers[3]], { y: 600 }, { y: 35, duration: 1, ease: "power2.out" }, "-=0.1");
    }

    // Featured Projects 5-Segment Reveal (white covers slide away to reveal hex canvas)
    const projectCovers = gsap.utils.toArray<HTMLElement>('.project-cover');
    if (projectCovers.length === 5) {
      const getCovers = (indices: number[]) => indices.map(i => projectCovers[i]);
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".featured-projects-section",
          start: "top 95%",
          end: "+=700",
          scrub: 0.8,
        }
      });

      tl.to(getCovers([2]), {
        yPercent: -100,
        duration: 0.3,
        ease: "power4.out"
      })
        .to(getCovers([1, 3]), {
          yPercent: -100,
          duration: 0.4,
          ease: "power3.out"
        }, "-=0.15")
        .to(getCovers([0, 4]), {
          yPercent: -100,
          duration: 0.3,
          ease: "power3.out"
        }, "-=0.3")
        .to([".projects-content", ".hex-canvas-wrapper"], {
          autoAlpha: 1,
          duration: 0.15,
          onComplete: () => setHexActive(true),
          onReverseComplete: () => setHexActive(false),
        }, "-=0.1");
    }

    // Collect ALL covers across the entire projects section for a single section-level reset
    const allProjectCovers: HTMLElement[] = [];

    // Helper: trigger fall for a set of covers
    const triggerFall = (coversArr: HTMLElement[]) => {
      coversArr.forEach((cover, i) => {
        const direction = Math.random() > 0.5 ? 1 : -1;
        const delay = i * 0.10 + Math.random() * 0.06;
        const fallDistance = window.innerHeight * 1.2;
        const rotAngle = direction * (15 + Math.random() * 25);
        const driftX = direction * (20 + Math.random() * 60);

        gsap.to(cover, {
          y: fallDistance,
          x: driftX,
          rotation: rotAngle,
          opacity: 0,
          duration: 0.8 + Math.random() * 0.4,
          delay: delay,
          ease: "power2.in",
        });
      });
    };

    // Main Projects heading reveal — physics-based tumble
    gsap.utils.toArray<HTMLElement>('.projects-content').forEach((content) => {
      gsap.set(content.querySelectorAll('.text-reveal-word-inner'), { opacity: 1 });

      const mainHeadingCovers = gsap.utils.toArray<HTMLElement>(content.querySelectorAll('h2 .project-word-cover'));
      if (mainHeadingCovers.length > 0) {
        gsap.set(mainHeadingCovers, { rotation: 0, x: 0, y: 0, opacity: 1 });
        allProjectCovers.push(...mainHeadingCovers);

        ScrollTrigger.create({
          trigger: content,
          start: "top 30%",
          onEnter: () => triggerFall(mainHeadingCovers),
        });
      }
    });

    // Facility Parallax (using safe yPercent to ensure image bounds are never breached)
    gsap.fromTo(".facility-parallax-img",
      { yPercent: -18 },
      {
        yPercent: 18,
        ease: "none",
        scrollTrigger: {
          trigger: ".facility-parallax-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      }
    );

    // Freeze the entire main content (Featured Projects + Facility) when Facility hits bottom
    if (window.innerWidth >= 768) {
      ScrollTrigger.create({
        trigger: ".main-content-wrapper",
        start: "bottom bottom",
        pin: true,
        pinSpacing: false,
      });
    }

    // Latest News 3-Segment Reveal
    const newsSegments = gsap.utils.toArray<HTMLElement>('.news-segment');
    const newsCols = gsap.utils.toArray<HTMLElement>('.news-content-col');
    if (newsSegments.length === 3 && newsCols.length === 3 && window.innerWidth >= 768) {
      const getNewsSegs = (indices: number[]) => indices.map(i => newsSegments[i]);
      const getNewsCols = (indices: number[]) => indices.map(i => newsCols[i]);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".latest-news-section",
          start: "top bottom", // Starts as soon as it begins scrolling over the frozen page
          end: "+=800",
          scrub: 1.5,
        }
      });

      tl.to([...getNewsSegs([1]), ...getNewsCols([1])], { y: 0, duration: 1, ease: "none" }, 0)
        .to([...getNewsSegs([0, 2]), ...getNewsCols([0, 2])], { y: 0, duration: 0.5, ease: "none" }, 0.5);
    }


    // Projects Reveal — physics-based tumble for each project card title
    gsap.utils.toArray<HTMLElement>('.project-card').forEach((card) => {
      gsap.set(card.querySelectorAll('.text-reveal-word-inner'), { opacity: 1 });
      const covers = gsap.utils.toArray<HTMLElement>(card.querySelectorAll('.project-word-cover'));
      const titleElement = card.querySelector('.font-heading');
      if (covers.length > 0 && titleElement) {
        gsap.set(covers, { rotation: 0, x: 0, y: 0, opacity: 1 });
        allProjectCovers.push(...covers);

        ScrollTrigger.create({
          trigger: titleElement,
          start: "top 50%",
          onEnter: () => triggerFall(covers),
        });
      }
    });

    // Section-level reset: when leaving the ENTIRE projects section, reset all boxes
    if (allProjectCovers.length > 0) {
      ScrollTrigger.create({
        trigger: ".featured-projects-section",
        start: "top bottom",
        end: "bottom top",
        onLeaveBack: () => {
          gsap.killTweensOf(allProjectCovers);
          gsap.set(allProjectCovers, { rotation: 0, x: 0, y: 0, opacity: 1 });
          setHexActive(false);
        },
      });
    }

    // News Reveal
    gsap.utils.toArray<HTMLElement>('.news-card').forEach((card, i) => {
      gsap.fromTo(card,
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1, y: 0, duration: 0.6, delay: i * 0.1, ease: "power2.out",
          scrollTrigger: { trigger: card, start: "top 90%", once: true }
        }
      );
    });

    // Project Images Parallax
    gsap.utils.toArray<HTMLElement>('.project-img-container').forEach((container) => {
      const wrapper = container.querySelector('.project-parallax-wrapper');
      if (wrapper) {
        gsap.fromTo(wrapper,
          { yPercent: -18 },
          {
            yPercent: 18,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            }
          }
        );
      }
    });
  }, { scope: containerRef, dependencies: [] });

  return (
    <div className="min-h-screen bg-background" ref={containerRef}>
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col md:flex-row overflow-hidden hero-section z-10 bg-background">

        {/* Text — bottom on mobile, left on desktop */}
        <div
          className="order-last md:order-none w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center px-6 md:px-12 lg:px-20 z-20 relative"
          ref={textRef}
        >
          <div className="mb-4 md:mb-6">
            <div className="subtitle-reveal-container relative overflow-hidden inline-grid">
              <div className="reveal-block absolute inset-0 bg-black z-10" style={{ transformOrigin: 'bottom', transform: 'scaleY(0)' }}></div>

              {/* Invisible spacers to make container width the longest of current or previous */}
              <span className="block text-xs md:text-lg font-black uppercase tracking-[0.1em] col-start-1 row-start-1 opacity-0 pointer-events-none whitespace-nowrap">
                {heroSlidesData[currentSlide].subtitle}
              </span>
              <span className="block text-xs md:text-lg font-black uppercase tracking-[0.1em] col-start-1 row-start-1 opacity-0 pointer-events-none whitespace-nowrap">
                {heroSlidesData[prevSlide].subtitle}
              </span>

              <span className="block text-xs md:text-lg font-black uppercase tracking-[0.1em] text-black col-start-1 row-start-1 z-0 whitespace-nowrap">
                {heroSlidesData[displayIndex].subtitle}
              </span>
            </div>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.05] text-foreground">
            Droga Research And <br className="hidden lg:block" /> Development Center
          </h1>
          <div className="mt-6 md:mt-8 min-h-[100px] md:min-h-[120px] relative w-full overflow-hidden">
            <p className="block text-base md:text-lg font-body text-muted-foreground max-w-xl leading-relaxed">
              {heroSlidesData[displayIndex].desc}
            </p>
            {/* 3 Fixed Yellow Bar Overlays aligned to line-height */}
            <div className="absolute inset-x-0 top-0 bottom-0 pointer-events-none z-10 flex flex-col text-base md:text-lg leading-relaxed font-body max-w-xl">
              {[0, 1, 2].map((i) => (
                <div key={i} className="desc-reveal-box w-full bg-black" style={{ height: 'calc(1.625em - 4px)', marginBottom: '4px', transformOrigin: 'bottom', transform: 'scaleY(0)' }}></div>
              ))}
            </div>
          </div>
          <div className="flex gap-2 md:flex-wrap md:gap-4">
            <Button variant="default" size="lg" asChild className="flex-1 md:flex-none bg-black text-white hover:bg-[#FFF200] hover:text-black transition-all duration-300 border-none text-xs md:text-base px-3 md:px-6">
              <Link to="/droga-science">Explore Research</Link>
            </Button>
            <Button variant="default" size="lg" asChild className="flex-1 md:flex-none bg-transparent border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300 text-xs md:text-base px-3 md:px-6">
              <Link to="/droga-science/projects">View Projects</Link>
            </Button>
          </div>
        </div>

        {/* Image — top on mobile, right on desktop */}
        <div className="order-first md:order-none w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden bg-muted">
          {heroSlidesData.map((slide, i) => {
            const isCurrent = i === currentSlide;
            const isPrev = i === prevSlide;

            let transform: string;
            let zIndex = 0;
            let transition = 'none';

            if (isCurrent) {
              transform = 'translateY(0) scale(1)';
              zIndex = 2;
              transition = 'transform 1.2s cubic-bezier(0.77, 0, 0.175, 1)';
            } else if (isPrev) {
              transform = isMobile ? 'translateY(15%) scale(0.95)' : 'translateY(-15%) scale(0.95)';
              zIndex = 1;
              transition = 'transform 1.2s cubic-bezier(0.77, 0, 0.175, 1)';
            } else {
              transform = isMobile ? 'translateY(-100%) scale(1)' : 'translateY(100%) scale(1)';
            }

            return (
              <div key={i} className="absolute inset-0 w-full h-full overflow-hidden" style={{ transform, zIndex, transition }}>
                <img src={slide.image} className="w-full h-full object-cover" alt={slide.subtitle} />
                <div className="absolute inset-0 bg-black/10" />
              </div>
            );
          })}
          {/* Gradient for navbar clearance on mobile */}
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/25 to-transparent md:hidden pointer-events-none z-10" />
        </div>
      </section>

      {/* Research Impact Stats */}
      <section className="relative z-20 research-impact-section overflow-hidden h-auto md:h-[60vh]">

        {/* MOBILE: Simple static stats grid (with scrub) */}
        <div className="md:hidden bg-white py-14 px-6 mobile-impact-section">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground block">Research Impact</span>
            <h2 className="font-heading text-3xl font-semibold tracking-tight mt-2 text-foreground">Measurable Results</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
            <div className="text-center border border-black/5 rounded-lg py-6 px-3 bg-white shadow-sm mobile-impact-col" data-end="12" data-suffix="+">
              <div className="font-heading text-3xl font-bold text-foreground count-text">0+</div>
              <div className="mt-2 text-[10px] font-body text-muted-foreground uppercase tracking-wider">Projects</div>
            </div>
            <div className="text-center border border-black/5 rounded-lg py-6 px-3 bg-white shadow-sm mobile-impact-col" data-end="17" data-suffix="+">
              <div className="font-heading text-3xl font-bold text-foreground count-text">0+</div>
              <div className="mt-2 text-[10px] font-body text-muted-foreground uppercase tracking-wider">Research Partners</div>
            </div>
            <div className="text-center border border-black/5 rounded-lg py-6 px-3 bg-white shadow-sm mobile-impact-col" data-end="5" data-suffix="">
              <div className="font-heading text-3xl font-bold text-foreground count-text">0</div>
              <div className="mt-2 text-[10px] font-body text-muted-foreground uppercase tracking-wider">Grant Funded</div>
            </div>
            <div className="text-center border border-black/5 rounded-lg py-6 px-3 bg-white shadow-sm mobile-impact-col" data-end="300" data-suffix=" sq.m">
              <div className="font-heading text-3xl font-bold text-foreground count-text">0 sq.m</div>
              <div className="mt-2 text-[10px] font-body text-muted-foreground uppercase tracking-wider">Analytical Lab</div>
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <div className="text-center border border-black/5 rounded-lg py-6 px-3 bg-white shadow-sm mobile-impact-col min-w-[140px]" data-end="9951" data-suffix=" sq.m">
              <div className="font-heading text-3xl font-bold text-foreground count-text">0 sq.m</div>
              <div className="mt-2 text-[10px] font-body text-muted-foreground uppercase tracking-wider">R&D Center</div>
            </div>
          </div>
        </div>

        {/* DESKTOP: Header - Static, invisible until GSAP reveals it */}
        <div className="hidden md:block absolute inset-x-0 top-0 pt-8 md:pt-20 pointer-events-none z-20">
          <div className="text-center impact-header invisible">
            <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground block text-center w-full">Research Impact</span>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight mt-2 text-foreground text-center">Measurable Results</h2>
          </div>
        </div>

        {/* DESKTOP: 5-segment animated background */}
        <div className="hidden md:flex absolute inset-0 z-0">
          <div className="w-1/5 h-full bg-white translate-y-full section-segment relative">
            <div className="absolute inset-x-0 top-[220px] text-center px-4 impact-col" data-end="12" data-suffix="+">
              <div className="font-heading text-4xl font-bold text-foreground count-text">0+</div>
              <div className="mt-2 text-xs font-body text-muted-foreground uppercase tracking-wider leading-tight">Projects</div>
            </div>
          </div>
          <div className="w-1/5 h-full bg-white translate-y-full section-segment relative">
            <div className="absolute inset-x-0 top-[220px] text-center px-4 impact-col" data-end="17" data-suffix="+">
              <div className="font-heading text-4xl font-bold text-foreground count-text">0+</div>
              <div className="mt-2 text-xs font-body text-muted-foreground uppercase tracking-wider leading-tight">Research Partners</div>
            </div>
          </div>
          <div className="w-1/5 h-full bg-white translate-y-full section-segment relative">
            <div className="absolute inset-x-0 top-[220px] text-center px-4 impact-col" data-end="5" data-suffix="">
              <div className="font-heading text-4xl font-bold text-foreground count-text">0</div>
              <div className="mt-2 text-xs font-body text-muted-foreground uppercase tracking-wider leading-tight">Grant Funded</div>
            </div>
          </div>
          <div className="w-1/5 h-full bg-white translate-y-full section-segment relative">
            <div className="absolute inset-x-0 top-[220px] text-center px-4 impact-col" data-end="300" data-suffix=" sq.m">
              <div className="font-heading text-4xl font-bold text-foreground count-text">0 sq.m</div>
              <div className="mt-2 text-xs font-body text-muted-foreground uppercase tracking-wider leading-tight">Analytical Lab</div>
            </div>
          </div>
          <div className="w-1/5 h-full bg-white translate-y-full section-segment relative">
            <div className="absolute inset-x-0 top-[220px] text-center px-4 impact-col" data-end="9951" data-suffix=" sq.m">
              <div className="font-heading text-4xl font-bold text-foreground count-text">0 sq.m</div>
              <div className="mt-2 text-xs font-body text-muted-foreground uppercase tracking-wider leading-tight">R&D Center</div>
            </div>
          </div>
        </div>
      </section>

      {/* Wrapping the rest of the page to perfectly cover the pinned hero */}
      <div className="relative z-20 bg-white main-content-wrapper">
        {/* Our Core Research Pillars - Glassmorphism Grid */}
        <section className="relative overflow-hidden bg-background pillars-section">
          <div className="section-padding relative w-full h-full pillars-pin-target">
            {/* Background Video — normal flow on mobile (above cards), absolute on desktop */}
            <div className="hidden md:flex absolute inset-x-0 top-0 mt-8 justify-center pointer-events-none z-0 overflow-hidden">
              <div className="w-[45%] lg:w-[23%] h-[550px] relative rounded-[0.3rem] border border-black overflow-hidden opacity-90 pillar-video">
                <video src={pillarVideo} autoPlay loop muted playsInline className="w-full h-full object-cover" />
              </div>
            </div>
            {/* Mobile video — in normal flow, above cards */}
            <div className="md:hidden flex justify-center pointer-events-none mb-8">
              <div className="w-[90%] h-[240px] relative rounded-[0.3rem] border border-black overflow-hidden opacity-90 pillar-video">
                <video src={pillarVideo} autoPlay loop muted playsInline className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="w-full max-w-[96%] mx-auto px-4 relative z-10 mix-blend-difference">
              <SectionReveal>
                <span className="block text-center text-sm md:text-base font-bold uppercase tracking-[0.2em] text-white">
                  In‑Depth Capabilities
                </span>
                <h2 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight mt-4 text-white text-center">
                  Our Core Research Pillars
                </h2>
                <p className="mt-4 text-lg text-white max-w-2xl mx-auto text-center">
                  End‑to‑end services spanning bioequivalence, drug discovery, nutraceuticals, and cosmetic science.
                </p>
              </SectionReveal>
            </div>

            <div className="grid grid-cols-2 md:flex md:flex-row md:flex-wrap lg:flex-nowrap gap-4 md:gap-6 md:mt-16 perspective-1000 pillar-card-container">
              {pillarCards.map((pillar, index) => {
                const isActive = activePillar === index;
                const isCompressed = activePillar !== null && !isActive && !isMobile;

                return (
                  <div
                    key={pillar.title}
                    className={`pillar-wrapper transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:w-[calc(50%-0.75rem)] lg:w-auto lg:min-w-0 ${isMobile ? (isActive ? 'col-span-2' : '') : (isActive ? 'pillar-flex-active' : isCompressed ? 'pillar-flex-compressed' : 'pillar-flex-default')}`}
                    style={{ transitionProperty: 'flex, width' }}
                  >
                    <div
                      className={`pillar-card relative rounded-[0.3rem] overflow-hidden border border-[#DBDBDB] bg-white/50 backdrop-blur-lg shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-700 flex flex-col items-center p-4 md:p-8
                        ${isMobile ? (isActive ? 'h-auto min-h-[260px]' : 'h-[200px]') : `h-[550px] ${isActive ? 'shadow-[0_20px_40px_rgb(0,0,0,0.08)] -translate-y-2' : ''}`}`}
                    >
                      {/* Title */}
                      <div className={`w-full text-center transition-all duration-700 ${!isMobile && isActive ? '-translate-y-4' : ''} ${isCompressed ? 'opacity-0 scale-75 pointer-events-none' : 'opacity-100 scale-100'}`}>
                        <h3 className="font-heading text-sm md:text-xl lg:text-2xl font-bold text-black leading-tight flex items-center justify-center whitespace-pre-line min-h-[2.5rem] md:h-16">
                          {pillar.title}
                        </h3>
                      </div>

                      {/* Icon */}
                      <div className={`${isMobile ? 'flex-1 flex' : 'absolute inset-0 flex'} items-center justify-center transition-all duration-700 ${!isMobile && isActive ? 'scale-75 -translate-y-8 opacity-20' : ''} ${isCompressed ? 'opacity-0 scale-50 pointer-events-none' : 'opacity-100'}`}>
                        <pillar.icon className="w-10 h-10 md:w-24 md:h-24 text-[#FFF200]" strokeWidth={1} />
                      </div>

                      {/* Compressed State: Vertical Title (desktop only) */}
                      <div className={`hidden md:flex absolute inset-0 items-center justify-center transition-all duration-700 pointer-events-none ${isCompressed ? 'opacity-100 delay-200' : 'opacity-0'}`}>
                        <h3 className="font-heading text-2xl font-bold text-black tracking-widest whitespace-nowrap -rotate-90">
                          {pillar.title}
                        </h3>
                      </div>

                      {/* Summary (desktop only) */}
                      <div className={`hidden md:block absolute bottom-20 left-8 right-8 text-center transition-all duration-700 ${isActive || isCompressed ? 'opacity-0 translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
                        <p className="text-sm text-black/70 font-body">{pillar.summary}</p>
                      </div>

                      {/* Button */}
                      <div className={`${isMobile ? 'mt-2 flex justify-center' : 'absolute bottom-6 left-0 right-0 flex justify-center'} transition-all duration-700 z-10 ${isCompressed ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                        <Button
                          variant="outline"
                          className="rounded-full border-black/20 text-[10px] md:text-xs text-black uppercase tracking-wider bg-white/50 backdrop-blur hover:bg-[#FFF200] hover:text-black hover:border-[#FFF200] transition-colors px-3 py-1 md:px-4 md:py-2"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActivePillar(isActive ? null : index);
                          }}
                        >
                          {isActive ? 'Close' : 'Details'}
                        </Button>
                      </div>

                      {/* Details panel */}
                      <div className={`${isMobile ? 'w-full mt-3 border-t border-black/10 pt-3' : 'absolute inset-x-0 bottom-0 h-[75%] border-t border-white/30'} transition-all duration-700 ease-in-out bg-white/95 backdrop-blur-2xl p-3 md:p-6 overflow-y-auto custom-scrollbar ${isMobile ? (isActive ? 'block' : 'hidden') : (isActive ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-full opacity-0 pointer-events-none')}`}>
                        <div className="grid grid-cols-1 gap-3">
                          {pillar.details.map((detail, i) => (
                            <div key={i}>
                              <h4 className="font-heading text-xs font-bold text-black mb-2 uppercase tracking-wide border-b border-black/10 pb-1">{detail.heading}</h4>
                              <ul className="space-y-1">
                                {detail.items.map((item, j) => (
                                  <li key={j} className="flex items-start gap-2 text-[11px] text-black/80 font-medium">
                                    <span className="text-[#FFF200] font-bold mt-0.5">•</span>
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
        </section>

        {/* Projects */}
        <section className="relative section-padding overflow-hidden featured-projects-section bg-[#FFF200]">
          {/* Sparse hexagonal clusters */}
          <div className="absolute inset-0 z-[2] pointer-events-none hex-canvas-wrapper invisible opacity-0">
            <HexagonalBackground
              active={hexActive}
              flipCount={3}
              flipInterval={2200}
              hexSize={18}
              gap={0}
              spots={hexSpots}
            />
          </div>
          {/* 5 white cover panels for reveal animation */}
          <div className="absolute inset-0 flex z-[1]">
            <div className="w-1/5 h-full bg-white project-cover" />
            <div className="w-1/5 h-full bg-white project-cover" />
            <div className="w-1/5 h-full bg-white project-cover" />
            <div className="w-1/5 h-full bg-white project-cover" />
            <div className="w-1/5 h-full bg-white project-cover" />
          </div>

          <div className="container-grid relative z-10 projects-content invisible">
            <SectionReveal>
              <span className="block text-center w-full text-sm md:text-base font-bold uppercase tracking-[0.2em] text-black">Featured</span>
              <h2 className="font-heading text-4xl md:text-5xl font-normal tracking-tight mt-4 text-black text-center flex justify-center">
                <RevealText text="Projects" />
              </h2>
              <p className="mt-6 text-lg max-w-4xl mx-auto text-center leading-relaxed text-muted-foreground">
                Our projects focus on the expansion and scale up of inhouse pharmaceutical and herbal product developments, as well as the expansion of research & development laboratories, ensuring a seamless transition from research to commercial manufacturing while maintaining quality and regulatory compliance.
              </p>
            </SectionReveal>

            <div className="mt-20 space-y-24 md:space-y-32 relative">
              {featuredProjectsData.map((project, index) => {
                const isActive = activeProjectDetail === index;

                return (
                  <div key={project.id} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center project-card relative">
                    {/* Content Column */}
                    <div className={`space-y-6 flex flex-col justify-center items-center text-center px-4 lg:px-12 ${project.imageFirst ? 'order-2' : 'order-2 lg:order-1'}`}>
                      <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl font-normal text-foreground leading-relaxed text-center flex justify-center">
                        <RevealText text={project.title} />
                      </h3>
                      <div>
                        <Button
                          onClick={() => setActiveProjectDetail(isActive ? null : index)}
                          size="lg"
                          className="mt-4 px-8 py-6 text-sm font-bold uppercase bg-white text-black tracking-widest hover:bg-black hover:text-white transition-all duration-300"
                        >
                          Learn More
                        </Button>
                      </div>
                    </div>

                    {/* Image Column */}
                    <div className={`order-1 ${project.imageFirst ? '' : 'lg:order-2'} rounded-[0.2rem] overflow-hidden relative aspect-[4/3] group project-img-container`}>
                      <div className="w-full h-[160%] absolute -top-[30%] project-parallax-wrapper">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      </div>
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                    </div>

                    {/* Overlay Details Box */}
                    <div
                      className={`absolute top-0 lg:top-8 bottom-0 lg:-bottom-8 z-20 
                                  bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] rounded-xl border border-black/5 overflow-hidden
                                  transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                                  ${project.imageFirst ? 'left-0 lg:left-[35%] right-0 lg:-right-8' : 'left-0 lg:-left-8 right-0 lg:right-[35%]'}
                                  ${isActive ? 'translate-x-0 pointer-events-auto' : `pointer-events-none ${project.imageFirst ? 'translate-x-[150%]' : '-translate-x-[150%]'}`}`}
                    >
                      <div className="absolute top-6 right-6 z-30">
                        <button
                          onClick={() => setActiveProjectDetail(null)}
                          className="p-3 bg-black/5 hover:bg-[#FFF200] rounded-full transition-colors group"
                        >
                          <X className="w-6 h-6 text-black group-hover:scale-110 transition-transform" />
                        </button>
                      </div>
                      <div className="p-8 md:p-16 h-full overflow-y-auto custom-scrollbar relative z-20 bg-white">
                        <h4 className="font-heading text-3xl md:text-4xl font-normal text-black mb-10 pb-6 border-b border-black/10 pr-12 leading-tight">
                          <RevealText text={project.title} showCovers={false} />
                        </h4>
                        <div className="space-y-8 font-body">
                          {project.description && (
                            <p className="text-lg text-black/80 leading-loose">{project.description}</p>
                          )}
                          {project.paragraphs?.map((p, i) => (
                            <p key={i} className="text-lg text-black/80 leading-loose">{p}</p>
                          ))}
                          {project.sections?.map((sec, i) => (
                            <div key={i} className="pt-2">
                              <h5 className="font-heading text-2xl font-bold text-black mb-4">{sec.heading}</h5>
                              {sec.content && <p className="text-lg text-black/80 leading-loose mb-4">{sec.content}</p>}
                              {sec.list && (
                                <ul className="space-y-4 mb-4">
                                  {sec.list.map((item, j) => (
                                    <li key={j} className="flex items-start gap-4">
                                      <div className="w-2 h-2 rounded-full bg-[#FFF200] mt-2.5 flex-shrink-0" />
                                      <span className="text-lg text-black/80 leading-relaxed">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                              {sec.footer && (
                                <div className="mt-6 p-6 bg-muted/50 rounded-lg border-l-4 border-[#FFF200]">
                                  <p className="text-lg text-black/90 leading-relaxed italic">
                                    {sec.footer}
                                  </p>
                                </div>
                              )}
                            </div>
                          ))}
                          {project.footer && (
                            <div className="mt-10 p-6 bg-muted/50 rounded-lg border-l-4 border-[#FFF200]">
                              <p className="text-lg text-black/90 leading-relaxed italic">
                                {project.footer}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div
              className="mt-16 text-center"
            >
              <Button variant="hero" size="lg" asChild className="bg-black text-white hover:bg-white hover:text-black">
                <Link to="/droga-science/projects">View All Projects <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Facility Parallax */}
        <section className="relative h-[50vh] md:h-[60vh] overflow-hidden facility-parallax-section">
          <img
            src={facilityImg}
            alt="Research facility"
            className="w-full h-[160%] object-cover absolute -top-[30%] facility-parallax-img"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <SectionReveal className="text-center max-w-2xl px-6">
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-white tracking-tight">
                World-Class Facilities
              </h2>
              <p className="mt-6 text-base md:text-lg font-body text-white/70">
                Our integrated research campus houses laboratories, bioequivalence units, and quality control centers.
              </p>
              <Button variant="default" size="lg" className="mt-8 bg-white text-black hover:bg-[#FFF200] hover:text-black" asChild>
                <Link to="/droga-science/labs">Explore Facilities</Link>
              </Button>
            </SectionReveal>
          </div>
        </section>
      </div> {/* End main-content-wrapper */}

      <div className="relative z-30">

        {/* MOBILE: Latest News — simple stacked layout */}
        <section className="md:hidden bg-white py-14 px-5">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground block">Latest News</span>
              <h2 className="font-heading text-3xl font-semibold tracking-tight mt-1 text-foreground">Recent Updates</h2>
            </div>
            <Link to="/news" className="flex items-center gap-1 text-sm font-heading font-medium border-2 rounded-full px-4 py-2 border-black hover:bg-[#FFF200] transition-colors">
              All <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="flex flex-col gap-5">
            {newsItems.map((item, i) => (
              <article key={i} className="group cursor-pointer overflow-hidden rounded-lg bg-white border border-black/5 shadow-sm transition-all duration-300 active:scale-[0.98]">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <span className="text-[11px] font-body text-muted-foreground">{item.date}</span>
                  <h3 className="font-heading text-base font-bold mt-1 text-foreground line-clamp-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{item.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* DESKTOP: Latest News — complex wipe animation */}
        <section className="hidden md:block relative z-20 min-h-screen section-padding latest-news-section overflow-hidden">
          {/* Solid grey for anything below the 100vh overlap to prevent white gaps! */}
          <div className="absolute inset-x-0 bottom-0 top-[100vh] bg-white z-0"></div>

          {/* 3-segment wipe over the frozen 100vh page */}
          <div className="absolute inset-x-0 top-0 h-[100vh] flex z-0">
            <div className="w-1/3 h-full bg-white translate-y-full news-segment"></div>
            <div className="w-1/3 h-full bg-white translate-y-full news-segment"></div>
            <div className="w-1/3 h-full bg-white translate-y-full news-segment"></div>
          </div>

          {/* 100vh Window that clips the content while translated down */}
          <div className="absolute inset-x-0 top-0 h-[100vh] overflow-hidden pointer-events-none z-10">
            <div className="w-[94%] mx-auto h-full pt-[20vh] pb-[10vh] flex gap-10 pointer-events-auto">

              {/* Left Column */}
              <div className="flex-1 flex flex-col justify-between translate-y-[100vh] news-content-col h-full">
                <div className="pt-2">
                  <span className="text-base font-bold uppercase tracking-[0.2em] text-black">Latest News</span>
                </div>
                <div className="mt-auto">
                  <article className="group cursor-pointer overflow-hidden rounded-sm bg-card transition-all duration-300 hover:bg-highlight hover:-translate-y-1.5 shadow-sm">
                    <div className="aspect-[16/10] bg-surface-subtle overflow-hidden">
                      <img src={newsItems[0].image} alt={newsItems[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6 group-hover:bg-highlight transition-colors duration-300">
                      <span className="text-sm font-body text-muted-foreground group-hover:text-black/80 transition-colors duration-300">{newsItems[0].date}</span>
                      <h3 className="font-heading text-xl font-bold mt-1 text-foreground group-hover:text-black transition-colors duration-300 line-clamp-2">{newsItems[0].title}</h3>
                    </div>
                  </article>
                </div>
              </div>

              {/* Middle Column */}
              <div className="flex-1 flex flex-col justify-end translate-y-[100vh] news-content-col h-full">
                <div className="mt-auto">
                  <article className="group cursor-pointer overflow-hidden rounded-sm bg-card transition-all duration-300 hover:bg-highlight hover:-translate-y-1.5 shadow-sm">
                    <div className="aspect-[16/10] bg-surface-subtle overflow-hidden">
                      <img src={newsItems[1].image} alt={newsItems[1].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6 group-hover:bg-highlight transition-colors duration-300">
                      <span className="text-sm font-body text-muted-foreground group-hover:text-black/80 transition-colors duration-300">{newsItems[1].date}</span>
                      <h3 className="font-heading text-xl font-bold mt-1 text-foreground group-hover:text-black transition-colors duration-300 line-clamp-2">{newsItems[1].title}</h3>
                    </div>
                  </article>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex-1 flex flex-col justify-between translate-y-[100vh] news-content-col h-full">
                <div className="flex justify-end pt-2">
                  <Link to="/news" className="flex items-center gap-2 text-base font-heading font-medium text-foreground transition-colors border-2 rounded-full px-6 py-3 border-black hover:bg-highlight hover:text-black">
                    View All <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="mt-auto">
                  <article className="group cursor-pointer overflow-hidden rounded-sm bg-card transition-all duration-300 hover:bg-highlight hover:-translate-y-1.5 shadow-sm">
                    <div className="aspect-[16/10] bg-surface-subtle overflow-hidden">
                      <img src={newsItems[2].image} alt={newsItems[2].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6 group-hover:bg-highlight transition-colors duration-300">
                      <span className="text-sm font-body text-muted-foreground group-hover:text-black/80 transition-colors duration-300">{newsItems[2].date}</span>
                      <h3 className="font-heading text-xl font-bold mt-1 text-foreground group-hover:text-black transition-colors duration-300 line-clamp-2">{newsItems[2].title}</h3>
                    </div>
                  </article>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative z-20 section-padding bg-white">
          <div className="container-grid text-center">
            <SectionReveal>
              <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                Partner with Us in Research
              </h2>
              <p className="mt-6 text-lg font-body text-foreground/70 max-w-2xl mx-auto">
                Join our growing network of researchers and institutions. Apply for the Droga Research Grant or explore collaboration opportunities.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Button variant="default" size="lg" asChild>
                  <Link to="/droga-science/grants">Apply for Grant</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </SectionReveal>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
};

export default Index;