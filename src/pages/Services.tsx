import { useRef, useState, useCallback, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import useEmblaCarousel from "embla-carousel-react";
import {
  FlaskConical, Microscope, ArrowRight,
  CheckCircle, Beaker, ClipboardCheck, Gauge, ShieldCheck, Clock, Building2,
  BarChart3, Activity, Waves, Timer, Scale, Droplets, Flame, Settings,
  ChevronLeft, ChevronRight, Gavel, BookOpen, Database, Lock
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import { Button } from "@/components/ui/button";

import facilityImg from "@/assets/Images/IMG_4514.jpg";
import labImg from "@/assets/Images/IMG_4528.jpg";
import logoImg from "@/assets/logo.png";

import shimadzuLogo from "@/assets/Partners/Shimadzu.png";
import electroLabLogo from "@/assets/Partners/Electrolab.png";
import lotusLogo from "@/assets/Partners/Lotus.png";
import emiLogo from "@/assets/Partners/EMI.png";
import tekLogo from "@/assets/Partners/Tek.png";
import dbuLogo from "@/assets/Partners/Debre Berhan.png";
import aauLogo from "@/assets/Partners/AAU.jpg";
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

const instruments = baseInstruments;

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
    img: "https://images.pexels.com/photos/18471462/pexels-photo-18471462.jpeg"
  },
  {
    icon: CheckCircle,
    title: "Accuracy & Reliability",
    desc: "Analytical processes designed to deliver precise, consistent, and reproducible results.",
    img: "https://images.unsplash.com/photo-1554475901-4538ddfbccc2?w=900&q=80"
  },
  {
    icon: ClipboardCheck,
    title: "Regulatory-Ready Reports",
    desc: "Comprehensive documentation prepared to meet applicable regulatory and compliance requirements.",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&q=80"
  },
  {
    icon: Clock,
    title: "Fast Turnaround Times",
    desc: "Efficient workflows and skilled teams enable timely analysis without compromising quality.",
    img: "https://images.pexels.com/photos/1178684/pexels-photo-1178684.jpeg"
  },
  {
    icon: Microscope,
    title: "Advanced Infrastructure",
    desc: "Modern, well-maintained laboratory equipment supports high-quality research and testing outcomes.",
    img: "https://images.pexels.com/photos/8940470/pexels-photo-8940470.jpeg"
  },
];



const Services = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [focusedInst, setFocusedInst] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'center', 
    startIndex: baseInstruments.length,
    skipSnaps: false,
    dragFree: false,
  });

  const updateCardsEffects = useCallback(() => {
    if (!emblaApi) return;
    const slideNodes = emblaApi.slideNodes();
    const viewportCenter = window.innerWidth / 2;

    slideNodes.forEach((slideNode) => {
      const rect = slideNode.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const distFromCenter = Math.abs(viewportCenter - cardCenter);
      const maxDist = window.innerWidth / 2;
      const normalizedDist = Math.min(distFromCenter / maxDist, 1);

      const scale = 1 - (normalizedDist * 0.15);
      const opacity = 1 - (normalizedDist * 0.8);
      const borderOpacity = 1 - (normalizedDist * 0.9);
      const cardBlur = normalizedDist * 4;

      const innerNode = slideNode.querySelector('.inst-card-inner');
      if (innerNode) {
        gsap.set(innerNode, {
          scale: scale,
          opacity: opacity,
          borderColor: `rgba(255, 255, 255, ${borderOpacity * 0.5})`,
          boxShadow: `0 ${8 - (normalizedDist * 8)}px ${30 - (normalizedDist * 20)}px rgba(0,0,0,${0.1 * (1 - normalizedDist)})`,
          filter: `blur(${cardBlur}px)`
        });
      }
    });
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    updateCardsEffects();
    emblaApi.on('scroll', updateCardsEffects);
    emblaApi.on('reInit', updateCardsEffects);
    
    const onSelect = () => {
      const selectedIndex = emblaApi.selectedScrollSnap();
      setFocusedInst(selectedIndex % baseInstruments.length);
    };
    
    emblaApi.on('select', onSelect);
    onSelect();

    return () => {
      emblaApi.off('scroll', updateCardsEffects);
      emblaApi.off('reInit', updateCardsEffects);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, updateCardsEffects]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

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

    // Cards initialization (transformOrigin)
    const cards = gsap.utils.toArray<HTMLElement>('.inst-card-inner');
    if (cards.length > 0) {
      gsap.set(cards, { transformOrigin: "center center" });
    }

    ScrollTrigger.refresh();
  }, { scope: pageRef });

  return (
    <div className="min-h-screen bg-background" ref={pageRef}>
      <Navbar />

      {/* Hero Section - Left aligned */}
      <section className="pt-32 pb-20 px-6 bg-highlight relative overflow-hidden">
        <div className="container-grid">
          <div className="max-w-3xl text-left hero-content opacity-0">
            <span className="text-sm md:text-base font-bold uppercase tracking-[0.3em] text-foreground/60">Our Services</span>
            <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tighter text-foreground mt-4">
              Droga Bioanalytical & Analytical Laboratory
            </h1>
            <p className="mt-6 text-xl text-foreground/70 max-w-2xl font-body leading-relaxed">
              Aimed at providing bioequivalence (BE) studies, pharmacokinetic studies and a comprehensive analytical testing services in compliance with national and international guidelines.
            </p>
          </div>
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

                {/* Image Container */}
                <div className="w-full lg:w-[70%] h-[250px] md:h-[400px] relative overflow-hidden mt-12 lg:mt-0 rounded-sm">
                  <img src={labImg} alt="Raw Material Testing" className="w-full h-[130%] -top-[15%] absolute object-cover svc-parallax-img" />
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

                {/* Image Container */}
                <div className="w-full lg:w-[70%] h-[250px] md:h-[400px] relative overflow-hidden mt-12 lg:mt-0 order-1 lg:order-2 rounded-sm">
                  <img src={facilityImg} alt="Finished Product Testing" className="w-full h-[130%] -top-[15%] absolute object-cover svc-parallax-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 Instrumentation - Our Analytical Capabilities */}
      <section className="relative overflow-hidden bg-surface-subtle min-h-[80vh] flex flex-col justify-center py-24">
        {/* Blurred background logo */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.15] z-0 pointer-events-none">
          <img src={logoImg} alt="Droga Logo" className="w-[500px] h-[500px] object-contain filter blur-[10px]" />
        </div>

        <div className="container-grid relative w-full mb-12 z-10 px-6">
          <div className="absolute -left-4 top-0 font-heading text-[10rem] md:text-[14rem] font-black text-black/[0.04] leading-none select-none pointer-events-none section-number">03</div>
          <div className="flex flex-col gap-8">
            <SectionReveal>
              <div className="flex items-center gap-4 mb-2">
                <span className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-muted-foreground">Advanced Instrumentation</span>
              </div>
              <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tight mt-4 text-foreground leading-tight">Our Analytical Capabilities</h2>
            </SectionReveal>

            {/* Carousel Navigation Buttons - Mobile Only */}
            <div className="flex md:hidden items-center justify-center gap-8 mt-4">
              <button onClick={scrollPrev} className="carousel-prev w-16 h-16 flex items-center justify-center rounded-full bg-[#FFF200] text-black hover:scale-110 transition-all duration-300 shadow-xl border-none">
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button onClick={scrollNext} className="carousel-next w-16 h-16 flex items-center justify-center rounded-full bg-[#FFF200] text-black hover:scale-110 transition-all duration-300 shadow-xl border-none">
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Drag Wrapper */}
        <div className="relative w-full h-[300px] md:h-[400px] flex items-center z-10 select-none">
          <div className="overflow-hidden w-full h-full" ref={emblaRef}>
            <div className="flex items-center h-full py-8 cursor-grab active:cursor-grabbing">
              {[...instruments, ...instruments, ...instruments].map((inst, index) => (
                <div
                  key={`${inst.name}-${index}`}
                  className="inst-card flex-[0_0_280px] md:flex-[0_0_380px] mx-3 md:mx-4"
                >
                  <div className="inst-card-inner relative w-full h-[180px] md:h-[280px] flex flex-col items-center justify-center p-6 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-2xl will-change-transform mt-12 md:mt-16">
                    <div className="absolute -top-10 md:-top-16 w-24 h-24 md:w-36 md:h-36 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-surface-subtle">
                      <inst.icon className="w-12 h-12 md:w-16 md:h-16 text-black" />
                    </div>
                    <div className="mt-8 md:mt-12 text-center">
                      <span className="font-body text-sm md:text-lg text-black font-bold leading-tight px-2">{inst.name}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container-grid w-full mt-8 md:mt-12 z-10 relative px-6">
          <SectionReveal delay={0.2}>
            <div className="flex items-center justify-center gap-6 md:gap-12 w-full max-w-5xl mx-auto">
              
              {/* Prev Button - Desktop Only */}
              <button onClick={scrollPrev} className="hidden md:flex carousel-prev w-16 h-16 md:w-20 md:h-20 items-center justify-center rounded-full bg-[#FFF200] text-black hover:scale-110 transition-all duration-300 shadow-xl border-none shrink-0">
                <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
              </button>

              {/* Center Info Box — dynamic per focused instrument */}
              <div className="w-full max-w-3xl p-6 md:p-8 bg-white border-l-4 border-highlight rounded-r-md shadow-md">
                <h4 className="font-heading text-lg md:text-xl font-bold text-foreground mb-3 transition-all duration-300">
                  {baseInstruments[focusedInst].name}
                </h4>
                <p className="text-foreground/80 text-sm md:text-base italic font-medium leading-relaxed transition-all duration-300">
                  {baseInstruments[focusedInst].desc}
                </p>
              </div>

              {/* Next Button - Desktop Only */}
              <button onClick={scrollNext} className="hidden md:flex carousel-next w-16 h-16 md:w-20 md:h-20 items-center justify-center rounded-full bg-[#FFF200] text-black hover:scale-110 transition-all duration-300 shadow-xl border-none shrink-0">
                <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
              </button>
              
            </div>
          </SectionReveal>
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
      <section className="relative overflow-hidden bg-white h-screen">
        <div className="h-full flex flex-col lg:flex-row">
          {/* LEFT — list of points (Anchored to top to prevent bumpy re-centering) */}
          <div className="w-full lg:w-[45%] h-full flex flex-col justify-start pt-[12vh] px-8 md:px-16 lg:px-20 pb-12 relative z-10 bg-white">
            {/* Section label */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">Why Droga R&D</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight mb-10">
              Why Choose Us
            </h2>

            {/* Items */}
            <ul className="space-y-0 divide-y divide-black/8 border-t border-black/8">
              {whyChooseUs.map((item, i) => (
                <li
                  key={item.title}
                  className="group cursor-pointer py-6 transition-all duration-300"
                  onMouseEnter={() => setActiveIndex(i)}
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
                        
                        {/* Mobile Image */}
                        <div className="lg:hidden w-full h-[200px] rounded-md overflow-hidden relative shadow-sm">
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
          <div className="hidden lg:flex w-full lg:w-[55%] h-full relative items-center justify-end bg-surface-subtle">
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