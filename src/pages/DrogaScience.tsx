import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FlaskConical, BookOpen, Award, Building2, Users } from "lucide-react";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import moleculesImg from "@/assets/Images/IMG_4543.jpg";
import labImg from "@/assets/Images/IMG_4528.jpg";
import facilityImg from "@/assets/Images/IMG_4514.jpg";
import plantsImg from "@/assets/Images/IMG_4565.jpg";

import seminarImg1 from "@/assets/Seminar/gfhf.png";
import seminarImg2 from "@/assets/Seminar/s.png";
import seminarImg3 from "@/assets/Seminar/sdfsdf.png";
import seminarImg4 from "@/assets/Seminar/sfd.png";

const pillars = [
  { icon: FlaskConical, title: "Drug Discovery", desc: "Natural and herbal pharmaceutical research with modern scientific methodologies." },
  { icon: BookOpen, title: "Food & Nutraceuticals", desc: "Nutrition-based products for health, wellness, and preventive care." },
  { icon: Award, title: "Cosmetic & Detergent", desc: "Scientific formulation of medicated and non-medicated personal care products." },
  { icon: Building2, title: "Bioequivalence", desc: "GCP-compliant studies for regulatory approval and quality assurance." },
];

const labs = [
  { title: "Research Laboratories", desc: "Drug discovery, food & nutrition, and cosmetic product development labs.", img: labImg },
  { title: "Bioequivalence Study Units", desc: "Clinical units, medical laboratories, and bioanalytical facilities.", img: facilityImg },
  { title: "Quality Control Units", desc: "HPLC, UV-Vis, FTIR and precision analytical instruments.", img: moleculesImg },
  { title: "Formulation & Development", desc: "Pilot-scale development for scaling innovations to market-ready products.", img: plantsImg },
];

function StickyLabCard({
  lab,
  index,
  total,
  containerRef,
}: {
  lab: { title: string; desc: string; img: string };
  index: number;
  total: number;
  containerRef: React.RefObject<HTMLDivElement>;
}) {
  const isLast = index === total - 1;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const segStart = index / total;
  const segEnd = (index + 1) / total;
  // Only start animating in the last 15% of this card's scroll segment
  const exitStart = segEnd - 0.15;

  const rotate = useTransform(
    scrollYProgress,
    [segStart, exitStart, segEnd],
    isLast ? [0, 0, 0] : [0, 0, -3.5]
  );
  const scale = useTransform(
    scrollYProgress,
    [segStart, exitStart, segEnd],
    isLast ? [1, 1, 1] : [1, 1, 0.92]
  );
  const textOpacity = useTransform(
    scrollYProgress,
    [segStart, exitStart, segEnd],
    isLast ? [1, 1, 1] : [1, 1, 0.4]
  );
  const y = useTransform(
    scrollYProgress,
    [segStart, exitStart, segEnd],
    isLast ? ["0%", "0%", "0%"] : ["0%", "0%", "-5%"]
  );

  const cardBg = index % 2 === 0 ? "#ffffff" : "#fffef5";

  return (
    <div
      className="sticky top-0 h-screen flex items-center justify-center px-4 md:px-12 bg-background"
      style={{ zIndex: index + 1, isolation: "isolate" }}
    >
      <motion.div
        style={{ rotate, scale, y, transformOrigin: "50% 110%", willChange: "auto" }}
        className="w-full max-w-6xl rounded-2xl overflow-hidden shadow-2xl border border-black/[0.06] flex flex-col lg:flex-row"
        transformTemplate={(_, generated) =>
          // Only apply transform when actually animating — avoids blurry text at rest
          generated === "none" || generated === "translateZ(0px) translateY(0%) scale(1) rotate(0deg)"
            ? "none"
            : generated
        }
      >
        {/* Left: text */}
        <motion.div
          style={{ opacity: textOpacity, background: cardBg, willChange: "auto" }}
          className="flex-1 flex flex-col justify-between p-10 md:p-14"
        >
          <span
            className="font-heading font-bold text-[6rem] md:text-[8rem] leading-none select-none"
            style={{ color: "rgba(0,0,0,0.06)" }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          <div className="mt-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-foreground rounded-sm mb-5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-highlight">Laboratory</span>
            </div>

            <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground leading-snug max-w-lg">
              {lab.title}
            </h3>

            <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-md">
              {lab.desc}
            </p>

            <div className="mt-8 h-px w-full bg-foreground/10">
              <div
                className="h-full bg-foreground"
                style={{ width: `${((index + 1) / total) * 100}%` }}
              />
            </div>
            <span className="mt-2 text-[10px] text-foreground/30 font-medium tracking-widest uppercase">
              {index + 1} of {total} facilities
            </span>
          </div>
        </motion.div>

        {/* Right: image — no opacity */}
        <div
          className="w-full lg:w-[48%] aspect-[4/3] lg:aspect-auto shrink-0 overflow-hidden"
          style={{ minHeight: "320px" }}
        >
          <img src={lab.img} alt={lab.title} className="w-full h-full object-cover" />
        </div>
      </motion.div>
    </div>
  );
}

const DrogaScience = () => {
  const statsRef = useRef<HTMLElement>(null);
  const labsContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const segments = gsap.utils.toArray<HTMLElement>('.stats-segment', statsRef.current!);
    const statCols = gsap.utils.toArray<HTMLElement>('.stat-col', statsRef.current!);
    
    if (segments.length === 5 && statCols.length === 5) {
      const getSegs = (indices: number[]) => indices.map(i => segments[i]);
      const getStatCols = (indices: number[]) => indices.map(i => statCols[i]);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 95%",
          end: "bottom 80%",
          scrub: 1.5,
        }
      });

      const updateText = (index: number, val: number) => {
        const col = statCols[index];
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
        .to(c2, { val: parseInt(statCols[2].dataset.end || "0"), duration: 1, ease: "none", onUpdate: () => updateText(2, c2.val) }, 0)

        .to(getSegs([1, 3]), { y: 0, duration: 0.65, ease: "none" }, 0.35)
        .to(c1, { val: parseInt(statCols[1].dataset.end || "0"), duration: 0.65, ease: "none", onUpdate: () => updateText(1, c1.val) }, 0.35)
        .to(c3, { val: parseInt(statCols[3].dataset.end || "0"), duration: 0.65, ease: "none", onUpdate: () => updateText(3, c3.val) }, 0.35)

        .to(getSegs([0, 4]), { y: 0, duration: 0.3, ease: "none" }, 0.7)
        .to(c0, { val: parseInt(statCols[0].dataset.end || "0"), duration: 0.3, ease: "none", onUpdate: () => updateText(0, c0.val) }, 0.7)
        .to(c4, { val: parseInt(statCols[4].dataset.end || "0"), duration: 0.3, ease: "none", onUpdate: () => updateText(4, c4.val) }, 0.7);
    }
  }, { scope: statsRef, dependencies: [] });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero with image matching Grants/Publications style */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <motion.img
          src={moleculesImg}
          alt="Seminar Hero"
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
                <Users className="w-10 h-10 text-highlight" strokeWidth={1.5} />
              </motion.div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-highlight">Knowledge Exchange</span>
            </div>
            <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tighter text-surface-dark-foreground mt-4">
              Droga Seminar
            </h1>
            <p className="mt-6 text-lg text-surface-dark-foreground/70 max-w-2xl mx-auto font-body leading-relaxed">
              Bringing together experts, partners, and researchers to exchange knowledge and discuss new findings in pharmaceutical science.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Droga Seminar section right below the hero */}
      <section id="seminar" className="section-padding">
        <div className="container-grid grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SectionReveal>
            <span className="overline-dark">Knowledge Exchange</span>
            <h2 className="font-heading text-4xl font-semibold tracking-tight mt-4 text-foreground">
              Droga Seminar
            </h2>
            <p className="mt-6 text-lg font-body text-muted-foreground leading-relaxed">
              The Droga Seminar is organized on a regular basis with the objective of bringing together Droga members, experts from various departments and units, as well as external partners to exchange knowledge and ideas through in-depth analysis of relevant topics.
            </p>
            <p className="mt-4 text-lg font-body text-muted-foreground leading-relaxed">
              It also serves as a platform for discussing new in house research developments and presenting findings from funded research projects.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              <img src={seminarImg1} alt="Seminar" className="w-full h-48 object-cover rounded-sm shadow-md" />
              <img src={seminarImg2} alt="Seminar" className="w-full h-48 object-cover rounded-sm shadow-md mt-8" />
              <img src={seminarImg3} alt="Seminar" className="w-full h-48 object-cover rounded-sm shadow-md -mt-8" />
              <img src={seminarImg4} alt="Seminar" className="w-full h-48 object-cover rounded-sm shadow-md" />
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Scientific Pillars */}
      <section className="section-padding bg-surface-subtle">
        <div className="container-grid">
          <SectionReveal>
            <span className="overline-dark">Our Pillars</span>
            <h2 className="font-heading text-4xl font-semibold tracking-tight mt-4 text-foreground">Scientific Pillars</h2>
          </SectionReveal>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group p-8 bg-card card-shadow hover:card-shadow-hover hover:bg-highlight border-t-4 border-transparent hover:border-foreground transition-all duration-300 rounded-sm"
              >
                <p.icon className="w-8 h-8 text-highlight group-hover:text-foreground mb-4 transition-colors duration-300" strokeWidth={1.5} />
                <h3 className="font-heading text-lg font-bold text-foreground">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground group-hover:text-foreground/70 leading-relaxed transition-colors duration-300">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Labs & Facilities — Sticky Scroll Cards */}
      <section id="labs" className="bg-background">
        <div className="container-grid py-20 border-b border-foreground/10">
          <SectionReveal>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-foreground/50">Facilities</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mt-4 text-foreground">
              Laboratory &<br />Facilities
            </h2>
            <p className="mt-4 text-muted-foreground font-body max-w-md">
              State-of-the-art infrastructure supporting every stage of pharmaceutical research and development.
            </p>
          </SectionReveal>
        </div>

        <div className="relative" ref={labsContainerRef}>
          {labs.map((lab, i) => (
            <StickyLabCard
              key={lab.title}
              lab={lab}
              index={i}
              total={labs.length}
              containerRef={labsContainerRef}
            />
          ))}
        </div>
      </section>

      {/* 5-Segment Animated Stats */}
      <section ref={statsRef} className="relative z-20 h-[40vh] md:h-[50vh] overflow-hidden bg-background">
        <div className="absolute inset-0 flex z-0">
          {[
            { end: 12, suffix: "+", label: "Projects" },
            { end: 17, suffix: "+", label: "Research Partners" },
            { end: 5, suffix: "", label: "Grant Funded" },
            { end: 300, suffix: " sq.m", label: "Analytical Lab" },
            { end: 9951, suffix: " sq.m", label: "R&D Center" }
          ].map((stat, i) => (
            <div key={i} className="w-1/5 h-full bg-foreground translate-y-full stats-segment relative border-r border-background/10 last:border-r-0">
              <div className="absolute inset-x-0 top-[30%] md:top-[40%] text-center px-1 md:px-4 stat-col text-surface-dark-foreground" data-end={stat.end} data-suffix={stat.suffix}>
                <div className="font-heading text-lg md:text-3xl lg:text-4xl font-bold count-text">0{stat.suffix}</div>
                <div className="mt-2 md:mt-4 text-[8px] md:text-xs font-body text-surface-dark-foreground/70 uppercase tracking-widest font-bold leading-tight">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DrogaScience;
