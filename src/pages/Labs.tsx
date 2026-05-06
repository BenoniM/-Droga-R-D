import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Microscope } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

// Import images
import facilityImg from "@/assets/Images/IMG_4514.jpg";
import labImg from "@/assets/Images/IMG_4528.jpg";
import moleculesImg from "@/assets/Images/IMG_4543.jpg";
import plantsImg from "@/assets/Images/IMG_4565.jpg";
import plantsImg2 from "@/assets/new-imgs/Plant Nursery.jpg";


import project1Img from "@/assets/Project/droga-manufacture.png";
import project2Img from "@/assets/Project/Droga Oil Manufacturing Plant.jpg";
import project3Img from "@/assets/new-imgs/Soap.jpg";
import project4Img from "@/assets/new-imgs/Rosmary.jpg";

const Labs = () => {
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
  }, { scope: pageRef });

  return (
    <div className="min-h-screen bg-background" ref={pageRef}>
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <motion.img
          src={facilityImg}
          alt="Labs Hero"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-foreground/70" />
        <div className="relative container-grid z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Microscope className="w-10 h-10 text-highlight" strokeWidth={1.5} />
              </motion.div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-highlight">Infrastructure</span>
            </div>
            <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tighter text-surface-dark-foreground mt-4">
              Labs & Facilities
            </h1>
            <p className="mt-6 text-lg text-surface-dark-foreground/70 max-w-2xl mx-auto font-body leading-relaxed">
              Explore our state-of-the-art research campus, housing cutting-edge laboratories, bioequivalence units, and quality control centers designed to accelerate pharmaceutical innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Facilities Details */}
      <section className="section-padding relative overflow-hidden bg-white">
        <div className="container-grid relative">
          <div className="space-y-32">
            
            {/* 1. Bioanalytical Facility */}
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
                  </SectionReveal>
                </div>
              </div>
            </div>

            {/* 2. Research & Formulation Facility */}
            <div className="relative pt-16 lg:pt-24 mb-32">
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
                <div className="w-full lg:w-[70%] h-[400px] lg:h-[550px] relative overflow-hidden mt-12 lg:mt-0 order-1 lg:order-2">
                  <img src={labImg} alt="Research Lab" className="w-full h-[130%] -top-[15%] absolute object-cover about-parallax-img" />
                </div>
              </div>
            </div>

            {/* 3. Quality Control Units */}
            <div className="relative pt-16 lg:pt-24 mb-32">
              <div className="flex flex-col lg:flex-row relative items-start lg:items-center">
                {/* Dark Top Title */}
                <div className="absolute -top-8 left-0 lg:left-[5%] z-20 bg-black px-6 py-4 md:px-10 md:py-6 shadow-md w-auto max-w-[90%]">
                  <h3 className="text-white font-heading text-lg md:text-2xl font-bold tracking-widest uppercase m-0">
                    3. Quality Control Units
                  </h3>
                </div>

                {/* Image Container */}
                <div className="w-full lg:w-[70%] h-[400px] lg:h-[550px] relative overflow-hidden mt-12 lg:mt-0">
                  <img src={moleculesImg} alt="Quality Control Units" className="w-full h-[130%] -top-[15%] absolute object-cover about-parallax-img" />
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

            {/* 4. Pilot-Scale Formulation & Development */}
            <div className="relative pt-16 lg:pt-24">
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
                <div className="w-full lg:w-[70%] h-[400px] lg:h-[550px] relative overflow-hidden mt-12 lg:mt-0 order-1 lg:order-2">
                  <img src={plantsImg} alt="Pilot Formulation" className="w-full h-[130%] -top-[15%] absolute object-cover about-parallax-img" />
                </div>
              </div>
            </div>

            {/* 5. Research & Development Center */}
            <div className="relative pt-16 lg:pt-24 mb-32">
              <div className="flex flex-col lg:flex-row relative items-start lg:items-center">
                {/* Dark Top Title */}
                <div className="absolute -top-8 left-0 lg:left-[5%] z-20 bg-black px-6 py-4 md:px-10 md:py-6 shadow-md w-auto max-w-[90%]">
                  <h3 className="text-white font-heading text-lg md:text-2xl font-bold tracking-widest uppercase m-0">
                    5. Research & Development Center
                  </h3>
                </div>

                {/* Image Container */}
                <div className="w-full lg:w-[70%] h-[400px] lg:h-[550px] relative overflow-hidden mt-12 lg:mt-0">
                  <img src={project2Img} alt="R&D Center" className="w-full h-[130%] -top-[15%] absolute object-cover about-parallax-img" />
                </div>

                {/* Content Box */}
                <div className="w-[90%] mx-auto lg:w-[45%] lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 z-10 bg-[#FFF200] p-8 md:p-12 shadow-xl -mt-16 lg:mt-0 relative facility-info-box">
                  <SectionReveal delay={0.2}>
                    <h4 className="font-heading text-2xl md:text-3xl font-black text-black mb-6 uppercase leading-tight tracking-tight">
                      Advancing Global Healthcare
                    </h4>
                    <div className="space-y-4 text-black/80 font-medium leading-relaxed text-sm md:text-base">
                      <p>
                        Situated on 9,951 sq.m of land in Kilinto Industrial Park, our state-of-the-art center is designed to advance research and development for the global healthcare industries.
                      </p>
                      <p>
                        The center is dedicated to supporting local innovation and reducing dependence on imported APIs by leveraging Ethiopia's indigenous knowledge and natural resources.
                      </p>
                    </div>
                  </SectionReveal>
                </div>
              </div>
            </div>

            {/* 6. Droga Oil Manufacturing Plant */}
            <div className="relative pt-16 lg:pt-24 mb-32">
              <div className="flex flex-col lg:flex-row relative items-start lg:items-center justify-end">
                {/* Dark Top Title */}
                <div className="absolute -top-8 right-0 lg:right-[5%] z-20 bg-black px-6 py-4 md:px-10 md:py-6 shadow-md w-auto max-w-[90%] text-right">
                  <h3 className="text-white font-heading text-lg md:text-2xl font-bold tracking-widest uppercase m-0">
                    6. Droga Oil Manufacturing Plant
                  </h3>
                </div>

                {/* Content Box */}
                <div className="w-[90%] mx-auto lg:w-[45%] lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 z-10 bg-[#FFF200] p-8 md:p-12 shadow-xl -mt-16 lg:mt-0 relative order-2 lg:order-1 facility-info-box">
                  <SectionReveal delay={0.2}>
                    <h4 className="font-heading text-2xl md:text-3xl font-black text-black mb-6 uppercase leading-tight tracking-tight">
                      Harnessing Natural Oils
                    </h4>
                    <div className="space-y-4 text-black/80 font-medium leading-relaxed text-sm md:text-base">
                      <p>
                        A 1,000 sq.m processing facility is being established to harness the potential of fixed and volatile oils. The facility is designed to process natural oils at scale for both local and export markets.
                      </p>
                      <p>
                        This facility aligns with our mission to create value-added products and contribute to both public health and economic growth through indigenous resources.
                      </p>
                    </div>
                  </SectionReveal>
                </div>

                {/* Image Container */}
                <div className="w-full lg:w-[70%] h-[400px] lg:h-[550px] relative overflow-hidden mt-12 lg:mt-0 order-1 lg:order-2">
                  <img src={project1Img} alt="Oil Plant" className="w-full h-[130%] -top-[15%] absolute object-cover about-parallax-img" />
                </div>
              </div>
            </div>

            {/* 7. Droga Medicinal Plant Nursery */}
            <div className="relative pt-16 lg:pt-24 mb-32">
              <div className="flex flex-col lg:flex-row relative items-start lg:items-center">
                {/* Dark Top Title */}
                <div className="absolute -top-8 left-0 lg:left-[5%] z-20 bg-black px-6 py-4 md:px-10 md:py-6 shadow-md w-auto max-w-[90%]">
                  <h3 className="text-white font-heading text-lg md:text-2xl font-bold tracking-widest uppercase m-0">
                    7. Droga Medicinal Plant Nursery
                  </h3>
                </div>

                {/* Image Container */}
                <div className="w-full lg:w-[70%] h-[400px] lg:h-[550px] relative overflow-hidden mt-12 lg:mt-0">
                  <img src={plantsImg2} alt="Nursery" className="w-full h-[130%] -top-[15%] absolute object-cover about-parallax-img" />
                </div>

                {/* Content Box */}
                <div className="w-[90%] mx-auto lg:w-[45%] lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 z-10 bg-[#FFF200] p-8 md:p-12 shadow-xl -mt-16 lg:mt-0 relative facility-info-box">
                  <SectionReveal delay={0.2}>
                    <h4 className="font-heading text-2xl md:text-3xl font-black text-black mb-6 uppercase leading-tight tracking-tight">
                      Botanical Conservation
                    </h4>
                    <div className="space-y-4 text-black/80 font-medium leading-relaxed text-sm md:text-base">
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

            {/* 8. Natural Soap & Cosmetics */}
            <div className="relative pt-16 lg:pt-24">
              <div className="flex flex-col lg:flex-row relative items-start lg:items-center justify-end">
                {/* Dark Top Title */}
                <div className="absolute -top-8 right-0 lg:right-[5%] z-20 bg-black px-6 py-4 md:px-10 md:py-6 shadow-md w-auto max-w-[90%] text-right">
                  <h3 className="text-white font-heading text-lg md:text-2xl font-bold tracking-widest uppercase m-0">
                    8. Natural Soap & Cosmetics
                  </h3>
                </div>

                {/* Content Box */}
                <div className="w-[90%] mx-auto lg:w-[45%] lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 z-10 bg-[#FFF200] p-8 md:p-12 shadow-xl -mt-16 lg:mt-0 relative order-2 lg:order-1 facility-info-box">
                  <SectionReveal delay={0.2}>
                    <h4 className="font-heading text-2xl md:text-3xl font-black text-black mb-6 uppercase leading-tight tracking-tight">
                      100% Natural Formulations
                    </h4>
                    <div className="space-y-4 text-black/80 font-medium leading-relaxed text-sm md:text-base">
                      <p>
                        The Droga Soap and Cosmetics Manufacturing Plant focuses on 100% natural skincare solutions, while the Rosemary project improves farmer livelihoods through sustainable essential oil extraction.
                      </p>
                      <p>
                        These initiatives combine modern manufacturing with traditional herbal wisdom to deliver consistent, high-quality natural products for the global market.
                      </p>
                    </div>
                  </SectionReveal>
                </div>

                {/* Image Container */}
                <div className="w-full lg:w-[70%] h-[400px] lg:h-[550px] relative overflow-hidden mt-12 lg:mt-0 order-1 lg:order-2">
                  <img src={project3Img} alt="Soap Plant" className="w-full h-[130%] -top-[15%] absolute object-cover about-parallax-img" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-20 section-padding bg-surface-subtle">
        <div className="container-grid text-center">
          <SectionReveal>
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              Partner with Us in Research
            </h2>
            <p className="mt-6 text-lg font-body text-foreground/70 max-w-2xl mx-auto">
              Leverage our world-class facilities and expert scientists to bring your next pharmaceutical innovation to life.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button variant="default" size="lg" asChild className="bg-black text-white hover:bg-highlight hover:text-black transition-all">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Labs;
