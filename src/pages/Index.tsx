import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight, FlaskConical, Microscope, Brain, HeartPulse, Leaf, Newspaper,
  Dna, Beaker, Zap, Activity, Pill, Apple, Droplet, ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionReveal from "@/components/SectionReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/hero-science.jpg";
import labImg from "@/assets/lab-research.jpg";
import facilityImg from "@/assets/facility.jpg";
import moleculesImg from "@/assets/molecules.jpg";
import plantsImg from "@/assets/herbal8.jpg";
import pillarVideo from "@/assets/pillar/4909887-hd_1080_1920_30fps.mp4";

import heroImg1 from "@/assets/Hero/pexels-jess-vide-9259992.jpg";
import heroImg2 from "@/assets/Hero/pexels-mart-production-8450360.jpg";
import heroImg3 from "@/assets/Hero/pexels-mikhail-nilov-8851633.jpg";
import heroImg4 from "@/assets/Hero/habesha_scientist.png";
import heroImg5 from "@/assets/Hero/pexels-yaroslav-shuraev-8514588.jpg";

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

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(heroSlidesData.length - 1);
  const [displayIndex, setDisplayIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => {
        setPrevSlide(prev);
        return (prev + 1) % heroSlidesData.length;
      });
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  // Yellow Box Reveal Animation
  useEffect(() => {
    if (currentSlide !== displayIndex && textRef.current) {
      const subtitleBlocks = gsap.utils.toArray<HTMLElement>(textRef.current.querySelectorAll('.subtitle-reveal-container .reveal-block'));

      // Grab the fixed horizontal bars and reverse them so index 0 is the BOTTOM bar
      const descBoxes = gsap.utils.toArray<HTMLElement>(textRef.current.querySelectorAll('.desc-reveal-box')).reverse();

      const tl = gsap.timeline();

      tl.addLabel("startCover");

      // Wipe UP to cover (scaleY 0 -> 1, origin bottom)
      tl.to(subtitleBlocks, {
        scaleY: 1,
        transformOrigin: "bottom",
        duration: 0.5,
        ease: "power2.inOut"
      }, "startCover");

      tl.to(descBoxes, {
        scaleY: 1,
        transformOrigin: "bottom",
        duration: 0.5,
        ease: "power2.inOut",
        stagger: 0.15 // Stagger bottom-to-top
      }, "startCover");

      // Change text while safely covered
      tl.call(() => {
        setDisplayIndex(currentSlide);
      });

      tl.addLabel("startReveal");

      // Wipe UP to reveal (scaleY 1 -> 0, origin top)
      tl.to(subtitleBlocks, {
        scaleY: 0,
        transformOrigin: "top",
        duration: 0.5,
        ease: "power2.inOut"
      }, "startReveal");

      tl.to(descBoxes, {
        scaleY: 0,
        transformOrigin: "top",
        duration: 0.5,
        ease: "power2.inOut",
        stagger: 0.15 // Reveal bottom-to-top
      }, "startReveal");
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
    if (segments.length === 5 && impactCols.length === 5) {
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

    // Pillar Section Scroll Flow
    const wrappers = gsap.utils.toArray<HTMLElement>('.pillar-wrapper');
    const videos = gsap.utils.toArray<HTMLElement>('.pillar-video');
    const video = videos[0];

    if (wrappers.length === 4 && video) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".pillars-pin-target",
          start: "top 60%",
          end: "bottom 90%",
          scrub: true,
        }
      });

      tl.fromTo(video, { y: 600 }, { y: 0, duration: 1, ease: "power2.out" })
        .fromTo([wrappers[1], wrappers[2]], { y: 600 }, { y: 0, duration: 1, ease: "power2.out" }, "+=0.5") // Wait for 0.5 units of scroll before center pillars
        .fromTo([wrappers[0], wrappers[3]], { y: 600 }, { y: 0, duration: 1, ease: "power2.out" }, "-=0.5");
    }

    // Featured Projects 5-Segment Reveal
    const projectSegments = gsap.utils.toArray<HTMLElement>('.project-segment');
    if (projectSegments.length === 5) {
      const getProjSegs = (indices: number[]) => indices.map(i => projectSegments[i]);
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".featured-projects-section",
          start: "top 95%",
          end: "+=700",
          scrub: 0.8,
        }
      });

      tl.to(getProjSegs([2]), {
        y: 0,
        duration: 0.3, // Reduced from 0.5
        ease: "power4.out"
      })
        .to(getProjSegs([1, 3]), {
          y: 0,
          duration: 0.4,
          ease: "power3.out"
        }, "-=0.15") // Adjusted overlap to follow the faster middle piece
        .to(getProjSegs([0, 4]), {
          y: 0,
          duration: 0.3,
          ease: "power3.out"
        }, "-=0.3")
        .to(".projects-content", {
          autoAlpha: 1,
          duration: 0.15
        }, "-=0.1");
    }

    // Facility Parallax (using safe yPercent to ensure image bounds are never breached)
    gsap.fromTo(".facility-parallax-img",
      { yPercent: -10 },
      {
        yPercent: 10,
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
    ScrollTrigger.create({
      trigger: ".main-content-wrapper",
      start: "bottom bottom",
      pin: true,
      pinSpacing: false, // Allows News section to scroll OVER the frozen page!
    });

    // Latest News 3-Segment Reveal
    const newsSegments = gsap.utils.toArray<HTMLElement>('.news-segment');
    const newsCols = gsap.utils.toArray<HTMLElement>('.news-content-col');
    if (newsSegments.length === 3 && newsCols.length === 3) {
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


    // Projects Reveal
    gsap.utils.toArray<HTMLElement>('.project-card').forEach((card) => {
      gsap.fromTo(card,
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1, y: 0, duration: 0.8, ease: "power2.out",
          scrollTrigger: { trigger: card, start: "top 85%", once: true }
        }
      );
    });

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
  }, { scope: containerRef, dependencies: [] });

  return (
    <div className="min-h-screen bg-background" ref={containerRef}>
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col md:flex-row overflow-hidden hero-section z-10 bg-background">

        {/* Left Segment: Texts and Links */}
        <div
          className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center px-6 md:px-12 lg:px-20 z-20 relative pt-20 md:pt-0"
          ref={textRef}
        >
          <div className="mb-4 md:mb-6">
            <div className="subtitle-reveal-container relative overflow-hidden inline-grid">
              <div className="reveal-block absolute inset-0 bg-black z-10" style={{ transformOrigin: 'bottom', transform: 'scaleY(0)' }}></div>

              {/* Invisible spacers to make container width the longest of current or previous */}
              <span className="block text-xs md:text-sm font-black uppercase tracking-[0.1em] col-start-1 row-start-1 opacity-0 pointer-events-none whitespace-nowrap">
                {heroSlidesData[currentSlide].subtitle}
              </span>
              <span className="block text-xs md:text-sm font-black uppercase tracking-[0.1em] col-start-1 row-start-1 opacity-0 pointer-events-none whitespace-nowrap">
                {heroSlidesData[prevSlide].subtitle}
              </span>

              <span className="block text-xs md:text-sm font-black uppercase tracking-[0.1em] text-black col-start-1 row-start-1 z-0 whitespace-nowrap">
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
          <div className="flex flex-wrap gap-4">
            <Button variant="default" size="lg" asChild className="bg-black text-white hover:bg-[#FFF200] hover:text-black transition-all duration-300 border-none">
              <Link to="/droga-science">Explore Research</Link>
            </Button>
            <Button variant="default" size="lg" asChild className="bg-transparent border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300">
              <Link to="/droga-science/projects">View Projects</Link>
            </Button>
          </div>
        </div>

        {/* Right Segment: Full Height Stacking Images */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden bg-muted">
          {heroSlidesData.map((slide, i) => {
            const isCurrent = i === currentSlide;
            const isPrev = i === prevSlide;

            let transform = 'translateY(100%) scale(1)';
            let zIndex = 0;
            let transition = 'none';

            if (isCurrent) {
              transform = 'translateY(0) scale(1)';
              zIndex = 2;
              transition = 'transform 1.2s cubic-bezier(0.77, 0, 0.175, 1)';
            } else if (isPrev) {
              transform = 'translateY(-15%) scale(0.95)';
              zIndex = 1;
              transition = 'transform 1.2s cubic-bezier(0.77, 0, 0.175, 1)';
            }

            return (
              <div
                key={i}
                className="absolute inset-0 w-full h-full overflow-hidden"
                style={{
                  transform,
                  zIndex,
                  transition,
                }}
              >
                <img src={slide.image} className="w-full h-full object-cover" alt={slide.subtitle} />
                <div className="absolute inset-0 bg-black/10" />
              </div>
            );
          })}
        </div>
      </section>

      {/* Research Impact Stats */}
      <section className="relative z-20 h-[60vh] md:h-[60vh] research-impact-section overflow-hidden">

        {/* Header - Static, invisible until end */}
        <div className="absolute inset-x-0 top-0 pt-8 md:pt-20 pointer-events-none z-20">
          <div className="text-center impact-header invisible">
            <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground block text-center w-full">Research Impact</span>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight mt-2 text-foreground text-center">
              Measurable Results
            </h2>
          </div>
        </div>

        {/* 5-segment background with content perfectly pinned inside */}
        <div className="absolute inset-0 flex  z-0">
          <div className="w-1/5 h-full bg-white translate-y-full section-segment relative">
            <div className="absolute inset-x-0 top-[140px] md:top-[220px] text-center px-1 md:px-4 impact-col" data-end="12" data-suffix="+">
              <div className="font-heading text-lg md:text-4xl font-bold text-foreground count-text">0+</div>
              <div className="mt-1 md:mt-2 text-[8px] md:text-xs font-body text-muted-foreground uppercase tracking-wider leading-tight">Projects</div>
            </div>
          </div>
          <div className="w-1/5 h-full bg-white translate-y-full section-segment relative">
            <div className="absolute inset-x-0 top-[140px] md:top-[220px] text-center px-1 md:px-4 impact-col" data-end="17" data-suffix="+">
              <div className="font-heading text-lg md:text-4xl font-bold text-foreground count-text">0+</div>
              <div className="mt-1 md:mt-2 text-[8px] md:text-xs font-body text-muted-foreground uppercase tracking-wider leading-tight">Research Partners</div>
            </div>
          </div>
          <div className="w-1/5 h-full bg-white translate-y-full section-segment relative">
            <div className="absolute inset-x-0 top-[140px] md:top-[220px] text-center px-1 md:px-4 impact-col" data-end="5" data-suffix="">
              <div className="font-heading text-lg md:text-4xl font-bold text-foreground count-text">0</div>
              <div className="mt-1 md:mt-2 text-[8px] md:text-xs font-body text-muted-foreground uppercase tracking-wider leading-tight">Grant Funded</div>
            </div>
          </div>
          <div className="w-1/5 h-full bg-white translate-y-full section-segment relative">
            <div className="absolute inset-x-0 top-[140px] md:top-[220px] text-center px-1 md:px-4 impact-col" data-end="300" data-suffix=" sq.m">
              <div className="font-heading text-lg md:text-4xl font-bold text-foreground count-text">0 sq.m</div>
              <div className="mt-1 md:mt-2 text-[8px] md:text-xs font-body text-muted-foreground uppercase tracking-wider leading-tight">Analytical Lab</div>
            </div>
          </div>
          <div className="w-1/5 h-full bg-white translate-y-full section-segment relative">
            <div className="absolute inset-x-0 top-[140px] md:top-[220px] text-center px-1 md:px-4 impact-col" data-end="9951" data-suffix=" sq.m">
              <div className="font-heading text-lg md:text-4xl font-bold text-foreground count-text">0 sq.m</div>
              <div className="mt-1 md:mt-2 text-[8px] md:text-xs font-body text-muted-foreground uppercase tracking-wider leading-tight">R&D Center</div>
            </div>
          </div>
        </div>
      </section>

      {/* Wrapping the rest of the page to perfectly cover the pinned hero */}
      <div className="relative z-20 bg-white main-content-wrapper">
        {/* Our Core Research Pillars - Glassmorphism Grid */}
        <section className="relative overflow-hidden bg-background pillars-section">
          <div className="section-padding relative w-full h-full pillars-pin-target">
            {/* Background Video */}
            <div className="absolute inset-x-0 top-0 mt-4 md:mt-8 flex justify-center pointer-events-none z-0 overflow-hidden">
              <div className="w-[90%] md:w-[45%] lg:w-[23%] h-[550px] relative rounded-[0.3rem] border border-black overflow-hidden opacity-90 pillar-video">
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 perspective-1000 pillar-card-container">
              {pillarCards.map((pillar) => {
                return (
                  <div key={pillar.title} className="pillar-wrapper">
                    <div
                      className="pillar-card group relative h-[550px] rounded-[0.3rem] overflow-hidden border border-[#DBDBDB] bg-white/50 backdrop-blur-lg shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 flex flex-col items-center p-8 cursor-pointer"
                    >
                      {/* Default State: Title & Icon */}
                      <div className="w-full text-center transition-transform duration-500 group-hover:-translate-y-4">
                        <h3 className="font-heading text-xl lg:text-2xl font-bold text-black leading-tight h-16 flex items-center justify-center">
                          {pillar.title}
                        </h3>
                      </div>

                      <div className="flex-1 flex items-center justify-center transition-all duration-500 group-hover:scale-75 group-hover:-translate-y-8 group-hover:opacity-20">
                        <pillar.icon className="w-20 h-20 lg:w-24 lg:h-24 text-[#FFF200]" strokeWidth={1} />
                      </div>

                      {/* Default Summary Text at the bottom */}
                      <div className="absolute bottom-8 left-8 right-8 text-center transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
                        <p className="text-sm text-black/70 font-body">
                          {pillar.summary}
                        </p>
                      </div>

                      {/* Hover State: Details slide up */}
                      <div className="absolute inset-x-0 bottom-0 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out bg-white/95 backdrop-blur-2xl p-6 h-[75%] border-t border-white/30 overflow-y-auto custom-scrollbar">
                        <div className="space-y-4">
                          {pillar.details.map((detail, i) => (
                            <div key={i}>
                              <h4 className="font-heading text-sm font-bold text-black mb-2 uppercase tracking-wide border-b border-black/10 pb-1">
                                {detail.heading}
                              </h4>
                              <ul className="space-y-1.5">
                                {detail.items.map((item, j) => (
                                  <li key={j} className="flex items-start gap-2 text-xs text-black/80 font-medium">
                                    <span className="text-highlight font-bold mt-0.5">•</span>
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
        <section className="relative section-padding overflow-hidden featured-projects-section">
          {/* 5-segment background */}
          <div className="absolute inset-0 flex z-0">
            <div className="w-1/5 h-full bg-[#FFF200] translate-y-full project-segment"></div>
            <div className="w-1/5 h-full bg-[#FFF200] translate-y-full project-segment"></div>
            <div className="w-1/5 h-full bg-[#FFF200] translate-y-full project-segment"></div>
            <div className="w-1/5 h-full bg-[#FFF200] translate-y-full project-segment"></div>
            <div className="w-1/5 h-full bg-[#FFF200] translate-y-full project-segment"></div>
          </div>

          <div className="container-grid relative z-10 projects-content invisible">
            <SectionReveal>
              <span className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-black">Featured</span>
              <h2 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight mt-4 text-black text-center">
                Projects
              </h2>
              <p className="mt-6 text-lg text-muted-foreground max-w-4xl mx-auto text-center leading-relaxed">
                Our projects focus on the expansion and scale up of inhouse pharmaceutical and herbal product developments, as well as the expansion of research & development laboratories, ensuring a seamless transition from research to commercial manufacturing while maintaining quality and regulatory compliance.
              </p>
            </SectionReveal>

            <div className="mt-20 space-y-24 md:space-y-32">
              {/* Project 1 */}
              <div
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center project-card invisible"
              >
                <div className="order-2 lg:order-1 space-y-6">
                  <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                    Project 1. Droga Research and Development Center
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Situated on 9,951 sq.m of land in Kilinto Industrial Park, our state-of-the-art center is designed to advance research, development, and quality testing for the pharmaceutical, academic, research, cosmetic, and food & beverage industries.
                  </p>
                  <div>
                    <h4 className="font-heading text-xl font-bold text-foreground mb-2">Our Aim</h4>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      The center is dedicated to supporting local innovation and reducing dependence on imported APIs, excipients, formulations, and other raw materials by leveraging the country's indigenous knowledge and natural resources.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-heading text-xl font-bold text-foreground mb-2">Our Facilities</h4>
                    <p className="text-base text-muted-foreground mb-3">The center will house:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-highlight mt-2 flex-shrink-0" />
                        <span className="text-base text-muted-foreground">Research Laboratories for drug discovery, food & nutrition, and cosmetic product development</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-highlight mt-2 flex-shrink-0" />
                        <span className="text-base text-muted-foreground">Bioequivalence Study Units to support preclinical and clinical evaluation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-highlight mt-2 flex-shrink-0" />
                        <span className="text-base text-muted-foreground">Quality Control Testing Units for reliable and regulatory-compliant analysis</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-highlight mt-2 flex-shrink-0" />
                        <span className="text-base text-muted-foreground">Formulation and Development Units for scaling innovations from concept to market-ready products</span>
                      </li>
                    </ul>
                    <p className="mt-4 text-base text-muted-foreground leading-relaxed italic border-l-4 border-highlight pl-4">
                      With these integrated facilities, the center aims to be a hub of scientific excellence, innovation, and self-reliance in pharmaceuticals, nutraceuticals, cosmetics, and functional foods.
                    </p>
                  </div>
                </div>
                <div className="order-1 lg:order-2 rounded-2xl overflow-hidden shadow-2xl relative aspect-[4/3] group">
                  <img src={facilityImg} alt="Droga Research and Development Center" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </div>

              {/* Project II */}
              <div
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center project-card invisible"
              >
                <div className="rounded-2xl overflow-hidden shadow-2xl relative aspect-[4/3] group">
                  <img src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=1200" alt="Droga Oil Manufacturing Plant" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="space-y-6">
                  <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                    Project II. Droga Oil Manufacturing Plant
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    A 1,000 sq.m processing facility is being established to harness the health promoting potential of fixed and volatile oils. The facility is designed to process these natural oils at scale, ensuring high-quality standards suitable for both local markets and export.
                  </p>
                  <div>
                    <h4 className="font-heading text-xl font-bold text-foreground mb-3">Purpose and Capacity</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-highlight mt-2 flex-shrink-0" />
                        <span className="text-base text-muted-foreground">Can process 792.064 ton per annum</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-highlight mt-2 flex-shrink-0" />
                        <span className="text-base text-muted-foreground">Processing of fixed and volatile oils with recognized health benefits</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-highlight mt-2 flex-shrink-0" />
                        <span className="text-base text-muted-foreground">Support for local and international distribution of natural health products</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-highlight mt-2 flex-shrink-0" />
                        <span className="text-base text-muted-foreground">Integration with the R&D wing to ensure quality, safety, and efficacy from raw material to finished product</span>
                      </li>
                    </ul>
                    <p className="mt-5 text-base text-muted-foreground leading-relaxed italic border-l-4 border-highlight pl-4">
                      This facility aligns with our mission to leverage indigenous resources, create value-added products, and contribute to both public health and economic growth.
                    </p>
                  </div>
                </div>
              </div>

              {/* Project III */}
              <div
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center project-card invisible"
              >
                <div className="order-2 lg:order-1 space-y-6">
                  <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                    Project III. Droga Soap Manufacturing Plant
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    The Droga Soap and Cosmetics Manufacturing Plant is an upcoming initiative designed to strengthen local production of 100% natural skincare solutions. The facility will serve as a hub for innovation in natural cosmetics, reducing reliance on imports while addressing common skin concerns with effective, botanically infused products.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    One branch of the initiative, the Droga Soap Manufacturing Plant, will occupy 200 m² and focus on producing two distinct soap varieties which are crafted from natural ingredients and are enriched with beneficial botanicals.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    With an annual production capacity of 51,840 pieces of each type, the project aims to supply for the local demand and promote healthier skin through sustainable, natural formulations. By combining modern manufacturing with traditional herbal wisdom, the Droga Soap Plant will contribute to community well-being, job creation, and the growth of Ethiopia's personal care industry.
                  </p>
                </div>
                <div className="order-1 lg:order-2 rounded-2xl overflow-hidden shadow-2xl relative aspect-[4/3] group">
                  <img src="https://images.unsplash.com/photo-1600857062241-98e5dba7f214?auto=format&fit=crop&q=80&w=1200" alt="Droga Soap Manufacturing Plant" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </div>

              {/* Project IV */}
              <div
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center project-card invisible"
              >
                <div className="rounded-2xl overflow-hidden shadow-2xl relative aspect-[4/3] group">
                  <img src="https://images.unsplash.com/photo-1595826978160-c32f8319f395?auto=format&fit=crop&q=80&w=1200" alt="Butajira Rosemary Manufacturing Plant" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="space-y-6">
                  <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                    Project IV. Butajira Rosmary Manufacturing Plant
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    The Butajira Rosemary Processing Plant aims to improve the livelihood of farmers in Meskan Woreda, Eastern Gurage Zone, through sustainable rosemary cultivation and market integration. The initiative covers 20 hectares of investment land and 40 hectares of partner farms, engaging 160 local farmers in modern rosemary production supported by training, technology transfer, and cooperative formation.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    With a total investment of ETB 77.24 million, the project focuses on producing high-quality rosemary for essential oil extraction used in pharmaceutical, cosmetic, and food industries. It combines scientific cultivation practices with irrigation technology to yield over 20,000 quintals of rosemary twice a year, ensuring consistent supply and export potential.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed italic border-l-4 border-highlight pl-4">
                    Beyond its economic impact, the project promotes environmental sustainability, job creation (11 permanent and 60 temporary positions), and community empowerment. By linking farmers to formal markets and improving production standards, Droga Pharma PLC is positioning Meskan Woreda as a center of excellence for essential oil-bearing crops and contributing to Ethiopia's growing natural product industry.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="mt-16 text-center project-card invisible"
            >
              <Button variant="hero" size="lg" asChild className="bg-black text-white hover:bg-black/90">
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
            className="w-full h-[130%] object-cover absolute -top-[15%] facility-parallax-img"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <SectionReveal className="text-center max-w-2xl px-6">
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-white tracking-tight">
                World-Class Facilities
              </h2>
              <p className="mt-6 text-base md:text-lg font-body text-white/70">
                Our integrated research campus houses laboratories, bioequivalence units, and quality control centers.
              </p>
              <Button variant="default" size="lg" className="mt-8 bg-white text-black hover:bg-white/90" asChild>
                <Link to="/about#labs">Explore Facilities</Link>
              </Button>
            </SectionReveal>
          </div>
        </section>
      </div> {/* End main-content-wrapper */}

      <div className="relative z-30">
        {/* Latest News */}
        <section className="relative z-20 min-h-screen section-padding latest-news-section overflow-hidden">
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
            <div className="container-grid h-full pt-[15vh] md:pt-[20vh] pb-[5vh] md:pb-[10vh] flex gap-4 md:gap-6 pointer-events-auto">

              {/* Left Column */}
              <div className="flex-1 flex flex-col justify-between translate-y-[100vh] news-content-col h-full">
                <div className="pt-2">
                  <span className="text-xs md:text-base font-bold uppercase tracking-[0.2em] text-muted-foreground">Stay Updated</span>
                  <h2 className="font-heading text-2xl md:text-5xl font-semibold tracking-tight mt-2 md:mt-4 text-foreground">
                    Latest News
                  </h2>
                </div>
                <div className="mt-auto">
                  <article className="group cursor-pointer overflow-hidden rounded-sm bg-card transition-all duration-300 hover:bg-highlight hover:-translate-y-1.5 shadow-sm">
                    <div className="aspect-[16/10] bg-surface-subtle overflow-hidden">
                      <img src={newsItems[0].image} alt={newsItems[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-3 md:p-6 group-hover:bg-highlight transition-colors duration-300">
                      <span className="text-[10px] md:text-sm font-body text-muted-foreground group-hover:text-black/80 transition-colors duration-300">{newsItems[0].date}</span>
                      <h3 className="font-heading text-sm md:text-xl font-bold mt-1 text-foreground group-hover:text-black transition-colors duration-300 line-clamp-2">{newsItems[0].title}</h3>
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
                    <div className="p-3 md:p-6 group-hover:bg-highlight transition-colors duration-300">
                      <span className="text-[10px] md:text-sm font-body text-muted-foreground group-hover:text-black/80 transition-colors duration-300">{newsItems[1].date}</span>
                      <h3 className="font-heading text-sm md:text-xl font-bold mt-1 text-foreground group-hover:text-black transition-colors duration-300 line-clamp-2">{newsItems[1].title}</h3>
                    </div>
                  </article>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex-1 flex flex-col justify-between translate-y-[100vh] news-content-col h-full">
                <div className="flex justify-end pt-2">
                  <Link to="/news" className="flex items-center gap-1 md:gap-2 text-xs md:text-base font-heading font-medium text-foreground hover:text-highlight transition-colors">
                    View All <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                  </Link>
                </div>
                <div className="mt-auto">
                  <article className="group cursor-pointer overflow-hidden rounded-sm bg-card transition-all duration-300 hover:bg-highlight hover:-translate-y-1.5 shadow-sm">
                    <div className="aspect-[16/10] bg-surface-subtle overflow-hidden">
                      <img src={newsItems[2].image} alt={newsItems[2].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-3 md:p-6 group-hover:bg-highlight transition-colors duration-300">
                      <span className="text-[10px] md:text-sm font-body text-muted-foreground group-hover:text-black/80 transition-colors duration-300">{newsItems[2].date}</span>
                      <h3 className="font-heading text-sm md:text-xl font-bold mt-1 text-foreground group-hover:text-black transition-colors duration-300 line-clamp-2">{newsItems[2].title}</h3>
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