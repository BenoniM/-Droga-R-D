import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import { Button } from "@/components/ui/button";
import moleculesImg from "@/assets/Images/IMG_4543.jpg";
import heroImg from "@/assets/Images/IMG_4713.jpg";
import seminarImg1 from "@/assets/Seminar/gfhf.png";
import seminarImg2 from "@/assets/Seminar/s.png";
import seminarImg3 from "@/assets/Seminar/sdfsdf.png";
import grantImg1 from "@/assets/Grant/hgfj.png";
import grantImg2 from "@/assets/Grant/jy.png";
import grantImg3 from "@/assets/Grant/tyte.png";

gsap.registerPlugin(ScrollTrigger);

const sciencePrograms = [
  {
    number: "1",
    label: "Droga Seminar",
    heading: "Knowledge Exchange & Collaboration",
    paragraphs: [
      "The Droga Seminar brings together Droga members, experts from various departments, and external partners to exchange knowledge through in-depth analysis of relevant topics.",
      "It serves as a platform for discussing new in-house research developments and presenting findings from funded research projects.",
    ],
    path: "/droga-science",
    buttonLabel: "Explore Seminar",
    alignRight: false,
    media: (
      <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-2 h-full w-full">
        <img src={seminarImg1} alt="" className="h-full w-full min-h-[200px] sm:min-h-0 object-cover about-parallax-img" />
        <img src={seminarImg2} alt="" className="h-full w-full min-h-[200px] sm:min-h-0 object-cover about-parallax-img" />
        <img src={seminarImg3} alt="" className="h-full w-full min-h-[200px] sm:min-h-0 object-cover about-parallax-img" />
      </motion.div>
    ),
  },
  {
    number: "2",
    label: "Droga Research Grant",
    heading: "Funding Innovative Research",
    paragraphs: [
      "The Droga Research Grant supports internal research initiatives across drug discovery, herbal medicine, nutraceuticals, formulation development, and cosmetics.",
      "Awarded projects advance scientific rigor, regulatory readiness, and translational impact for Ethiopia's pharmaceutical and health sectors.",
    ],
    path: "/droga-science/grants",
    buttonLabel: "View Grants",
    alignRight: true,
    media: (
      <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-2 h-full w-full">
        <img src={grantImg1} alt="" className="h-full w-full min-h-[200px] sm:min-h-0 object-cover about-parallax-img" />
        <img src={grantImg2} alt="" className="h-full w-full min-h-[200px] sm:min-h-0 object-cover about-parallax-img" />
        <img src={grantImg3} alt="" className="h-full w-full min-h-[200px] sm:min-h-0 object-cover about-parallax-img" />
      </motion.div>
    ),
  },
  {
    number: "3",
    label: "Publications",
    heading: "Research Outputs & Scientific Findings",
    paragraphs: [
      "Our publications showcase peer-reviewed and in-house research outputs from funded projects and collaborative studies across Droga Science programs.",
      "Browse articles, reports, and scientific communications that document our contributions to pharmaceutical research and development.",
    ],
    path: "/droga-science/publications",
    buttonLabel: "View Publications",
    alignRight: false,
    media: (
      <img
        src={heroImg}
        alt="Publications"
        className="absolute inset-0 w-full h-full object-cover about-parallax-img"
      />
    ),
  },
];

const DrogaScienceHome = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>(".about-parallax-img").forEach((img) => {
        gsap.fromTo(
          img,
          { yPercent: -15 },
          {
            yPercent: 15,
            ease: "none",
            scrollTrigger: {
              trigger: img.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>(".facility-info-box").forEach((box) => {
        gsap.fromTo(
          box,
          { y: 100 },
          {
            y: -100,
            ease: "none",
            scrollTrigger: {
              trigger: box.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      });
    },
    { scope: pageRef }
  );

  return (
    <motion.div
      ref={pageRef}
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Navbar />

      <section className="relative h-[70vh] md:h-[80vh] flex items-center overflow-hidden">
        <motion.img
          src={moleculesImg}
          alt="Droga Science"
          className="absolute inset-0 w-full h-[120%] -top-[10%] object-cover about-parallax-img"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        />
        <motion.div className="relative container-grid px-6 z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#FFF200]">
              Research & Innovation
            </span>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mt-4 leading-tight">
              Droga Science
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
              Advancing pharmaceutical research through seminars, funded grants, and published
              scientific outcomes.
            </p>
          </motion.div>
        </motion.div>
      </section>

      <section className="section-padding relative overflow-hidden bg-white">
        <motion.div className="container-grid relative">
          <div className="absolute -left-4 top-0 font-heading text-[10rem] md:text-[14rem] font-black text-black/[0.04] leading-none select-none pointer-events-none">
            01
          </div>
          <SectionReveal>
            <span className="text-lg font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Programs
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mt-4 text-foreground leading-tight">
              Science Programs
            </h2>
          </SectionReveal>

          <motion.div className="mt-20 space-y-32">
            {sciencePrograms.map((program, index) => {
              const isLast = index === sciencePrograms.length - 1;
              const titleBarClass = program.alignRight
                ? "absolute -top-8 right-0 lg:right-[5%] z-20 bg-black px-6 py-4 md:px-10 md:py-6 shadow-md w-auto max-w-[90%] text-right"
                : "absolute -top-8 left-0 lg:left-[5%] z-20 bg-black px-6 py-4 md:px-10 md:py-6 shadow-md w-auto max-w-[90%]";

              const contentBoxClass = program.alignRight
                ? "w-[90%] mx-auto lg:w-[45%] lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 z-10 bg-[#FFF200] p-8 md:p-12 shadow-xl -mt-16 lg:mt-0 relative order-2 lg:order-1 facility-info-box"
                : "w-[90%] mx-auto lg:w-[45%] lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 z-10 bg-[#FFF200] p-8 md:p-12 shadow-xl -mt-16 lg:mt-0 relative facility-info-box";

              const mediaBoxClass = program.alignRight
                ? "w-full lg:w-[70%] h-[250px] md:h-[400px] lg:h-[550px] relative overflow-hidden mt-12 lg:mt-0 order-1 lg:order-2"
                : "w-full lg:w-[70%] h-[250px] md:h-[400px] lg:h-[550px] relative overflow-hidden mt-12 lg:mt-0";

              return (
                <motion.div
                  key={program.label}
                  className={`relative pt-16 lg:pt-24 ${isLast ? "mb-8" : "mb-32"}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                  <motion.div
                    className={`flex flex-col lg:flex-row relative items-start lg:items-center ${program.alignRight ? "justify-end" : ""}`}
                  >
                    <motion.div className={titleBarClass}>
                      <h3 className="text-white font-heading text-lg md:text-2xl font-bold tracking-widest uppercase m-0">
                        {program.number}. {program.label}
                      </h3>
                    </motion.div>

                    <motion.div className={mediaBoxClass}>{program.media}</motion.div>

                    <motion.div className={contentBoxClass}>
                      <SectionReveal delay={0.2}>
                        <h4 className="font-heading text-2xl md:text-3xl font-black text-black mb-6 uppercase leading-tight tracking-tight">
                          {program.heading}
                        </h4>
                        <motion.div className="space-y-4 text-black/80 font-medium leading-relaxed text-sm md:text-base">
                          {program.paragraphs.map((text) => (
                            <p key={text.slice(0, 40)}>{text}</p>
                          ))}
                        </motion.div>
                        <Button
                          variant="default"
                          size="lg"
                          asChild
                          className="mt-8 bg-black text-white hover:bg-white hover:text-black border-none"
                        >
                          <Link to={program.path}>
                            {program.buttonLabel}
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      </SectionReveal>
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default DrogaScienceHome;
