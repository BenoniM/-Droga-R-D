import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import labImg from "@/assets/lab-research.jpg";
import facilityImg from "@/assets/facility.jpg";
import plantsImg from "@/assets/herbal8.jpg";
import heroImg from "@/assets/hero-science.jpg";

const newsArticles = [
  {
    title: "New Bioequivalence Study Center Opens at Kilinto",
    date: "March 10, 2026",
    category: "Announcement",
    image: facilityImg,
    excerpt:
      "Droga R&D's state-of-the-art bioequivalence center at Kilinto Industrial Park officially begins operations, marking a milestone in pharmaceutical research capability.",
  },
  {
    title: "DRG Grant Applications Open for 2026",
    date: "January 15, 2026",
    category: "Grants",
    image: labImg,
    excerpt:
      "The annual Droga Research Grant application period is now open, inviting Ethiopian researchers to submit proposals across five key research areas.",
  },
  {
    title: "Medicinal Plant Nursery Established in Butajira",
    date: "December 5, 2025",
    category: "Research",
    image: plantsImg,
    excerpt:
      "A new dedicated nursery has been established for cultivating indigenous medicinal plants, strengthening the link between traditional knowledge and modern science.",
  },
  {
    title: "Oil Manufacturing Facility Nears Completion",
    date: "November 20, 2025",
    category: "Projects",
    image: facilityImg,
    excerpt:
      "The 1,000 sq.m processing facility for fixed and volatile oils is in its final stages of construction, set to begin production early next year.",
  },
  {
    title: "Successful Diabetic Foot Care Study Published",
    date: "October 8, 2025",
    category: "Publication",
    image: labImg,
    excerpt:
      "Research funded by DRG on diabetic foot care emollient formulation has been published in a peer-reviewed journal, validating years of collaborative effort.",
  },
  {
    title: "Partnership with Ethiopian FDA Strengthened",
    date: "September 15, 2025",
    category: "Partnership",
    image: heroImg,
    excerpt:
      "Droga R&D deepens collaboration with EFDA on regulatory compliance and quality standards, paving the way for faster approvals.",
  },
];

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const textVariants = {
  enter: (dir: number) => ({
    opacity: 0,
    y: dir > 0 ? 24 : -24,
  }),
  center: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE },
  },
  exit: (dir: number) => ({
    opacity: 0,
    y: dir > 0 ? -24 : 24,
    transition: { duration: 0.3, ease: "easeIn" as const },
  }),
};

const imageVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: EASE },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? "-30%" : "30%",
    opacity: 0,
    transition: { duration: 0.5, ease: "easeIn" as const },
  }),
};

const News = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % newsArticles.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + newsArticles.length) % newsArticles.length);
  }, []);

  const handleManualNav = (fn: () => void) => {
    fn();
    setPaused(true);
    setTimeout(() => setPaused(false), 8000); // resume after 8s
  };

  // Auto-advance every 5 seconds, pauses after manual interaction
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, paused]);

  const nextIndex = (current + 1) % newsArticles.length;
  const article = newsArticles[current];
  const nextArticle = newsArticles[nextIndex];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* Hero Slider */}
      <section className="flex-1 pt-20 bg-[#f5f5f3] overflow-hidden">
        <div className="h-[calc(100vh-5rem)] flex flex-col lg:flex-row">
          {/* ── Left: Text Content ── */}
          <div className="relative flex flex-col justify-between px-8 md:px-14 py-12 lg:py-16 w-full lg:w-[38%] shrink-0 overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="flex flex-col justify-center h-full"
              >
                {/* Category */}
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-foreground/50 mb-4">
                  {article.category}
                </span>

                {/* Title */}
                <h1 className="font-heading text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
                  {article.title}
                </h1>

                {/* Excerpt */}
                <p className="mt-5 text-sm md:text-base text-foreground/60 leading-relaxed max-w-sm font-body">
                  {article.excerpt}
                </p>

                {/* Date */}
                <span className="mt-4 text-xs text-foreground/40 font-medium tracking-wide">
                  {article.date}
                </span>

                {/* CTA */}
                <button className="mt-8 self-start inline-flex items-center gap-2 bg-foreground text-background text-sm font-bold px-6 py-3 rounded-sm hover:bg-foreground/80 transition-colors duration-300 group">
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </motion.div>
            </AnimatePresence>

            {/* Slide counter */}
            <div className="mt-auto pt-8 flex items-center gap-3">
              <span className="text-2xl font-bold font-heading text-foreground tabular-nums">
                {String(current + 1).padStart(2, "0")}
              </span>
              <div className="flex-1 h-px bg-foreground/20 max-w-[80px]">
                <motion.div
                  className="h-full bg-foreground"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  key={current}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              </div>
              <span className="text-sm text-foreground/40 tabular-nums">
                {String(newsArticles.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* ── Right: Images ── */}
          <div className="relative flex-1 flex items-center gap-4 px-4 lg:px-8 overflow-hidden">
            {/* Current image */}
            <div className="relative flex-[2] h-[55vh] lg:h-[75%] overflow-hidden rounded-2xl shadow-xl">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.img
                  key={current}
                  src={article.image}
                  alt={article.title}
                  custom={direction}
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>

            {/* Next card peek — entire card animates as one unit */}
            <div className="relative flex-[0.85] h-[45vh] lg:h-[60%]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={nextIndex}
                  custom={direction}
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  onClick={() => handleManualNav(next)}
                  className="absolute inset-0 overflow-hidden rounded-2xl shadow-md cursor-pointer opacity-70 hover:opacity-90 transition-opacity duration-300"
                >
                  {/* Image */}
                  <img
                    src={nextArticle.image}
                    alt={nextArticle.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/70">
                      {nextArticle.category}
                    </span>
                    <p className="text-white text-xs font-semibold mt-1 line-clamp-2 leading-snug">
                      {nextArticle.title}
                    </p>
                    <span className="text-[10px] text-white/50 mt-1 block">
                      {nextArticle.date}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Prev / Next arrows — bottom right */}
            <div className="absolute bottom-6 right-6 flex gap-2 z-10">
              <button
                onClick={() => handleManualNav(prev)}
                aria-label="Previous"
                className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center hover:bg-foreground/80 transition-colors duration-300 shadow-md"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleManualNav(next)}
                aria-label="Next"
                className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center hover:bg-foreground/80 transition-colors duration-300 shadow-md"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Dot indicators */}
      <div className="bg-[#f5f5f3] flex justify-center gap-2 pb-6">
        {newsArticles.map((_, i) => (
          <button
            key={i}
            onClick={() => handleManualNav(() => {
              setDirection(i > current ? 1 : -1);
              setCurrent(i);
            })}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-foreground" : "w-2 bg-foreground/25"
            }`}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default News;
