import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import labImg from "@/assets/Images/IMG_4528.jpg";
import facilityImg from "@/assets/Images/IMG_4514.jpg";
import plantsImg from "@/assets/Images/IMG_4565.jpg";
import heroImg from "@/assets/Images/IMG_4582.jpg";

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

const imageVariants = {};

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

  const prevIndex = (current - 1 + newsArticles.length) % newsArticles.length;
  const nextIndex = (current + 1) % newsArticles.length;
  const article = newsArticles[current];
  const nextArticle = newsArticles[nextIndex];
  const prevArticle = newsArticles[prevIndex];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* Hero Slider */}
      <section className="flex-1 pt-[72px] lg:pt-[80px] bg-[#f5f5f3] overflow-hidden relative">
        <div className="min-h-[calc(100vh-5rem)] lg:h-[calc(100vh-5rem)] flex flex-col lg:flex-row w-full max-w-[1600px] mx-auto pb-8 lg:pb-0">
          {/* ── Left: Text Content ── */}
          <div className="relative flex flex-col justify-between px-6 md:px-14 py-8 lg:py-16 w-full lg:w-[42%] shrink-0 z-10 lg:h-full">
            <div className="flex flex-col justify-center flex-1">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="flex flex-col"
                >
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-foreground/50 mb-3 md:mb-4">
                    {article.category}
                  </span>
                  <h1 className="font-heading text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
                    {article.title}
                  </h1>
                  <p className="mt-4 md:mt-5 text-sm md:text-base text-foreground/60 leading-relaxed max-w-sm font-body">
                    {article.excerpt}
                  </p>
                  <span className="mt-4 text-xs text-foreground/40 font-medium tracking-wide">
                    {article.date}
                  </span>
                </motion.div>
              </AnimatePresence>

              <button className="mt-8 self-start inline-flex items-center gap-2 bg-foreground text-background text-sm font-bold px-6 py-3 rounded-sm hover:bg-foreground/80 transition-colors duration-300 group">
                Read More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {/* Desktop Slide counter */}
            <div className="hidden lg:flex mt-auto pt-12 items-center gap-3">
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
          <div className="relative flex-1 flex flex-col justify-center px-4 md:px-8 py-4 lg:py-0 w-full min-h-[45vh] lg:min-h-0 lg:h-full">
            <div className="relative w-full h-[38vh] md:h-[50vh] lg:h-[80%] flex items-center justify-start lg:justify-center mt-4 lg:mt-0" style={{ perspective: "1000px" }}>
              {/* Big Main (Current Article) */}
              <div className="relative w-[85%] lg:w-[75%] h-full pr-4 lg:pr-8 z-[5]">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.div
                    key={article.title}
                    layoutId={`card-${article.title}`}
                    className="absolute inset-0 overflow-hidden rounded-2xl lg:rounded-3xl shadow-2xl"
                    style={{ 
                      transformStyle: "preserve-3d",
                      transform: "translateZ(10px)"
                    }}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ 
                      opacity: 0,
                      zIndex: 0,
                      transform: "translateZ(0px)",
                      transition: { duration: 0.3 }
                    }}
                    transition={{
                      layout: { type: "spring", stiffness: 200, damping: 25 }
                    }}
                  >
                    <img
                      src={article.image}
                      alt={article.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Small Peek (Next Article) */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 lg:relative lg:top-0 lg:translate-y-0 w-[35%] lg:w-[28%] h-[65%] lg:h-[60%] lg:-ml-12 shadow-2xl rounded-xl lg:rounded-2xl border-[6px] border-[#f5f5f3]" style={{ zIndex: 10000 }}>
                <motion.div
                  key={nextArticle.title}
                  layoutId={`card-${nextArticle.title}`}
                  onClick={() => handleManualNav(next)}
                  className="absolute inset-0 overflow-hidden rounded-lg lg:rounded-xl cursor-pointer group"
                  style={{ 
                    transformStyle: "preserve-3d",
                    transform: "translateZ(30px)"
                  }}
                >
                  <img
                    src={nextArticle.image}
                    alt={nextArticle.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex flex-col justify-end p-3 lg:p-4">
                    <p className="text-white text-[10px] font-bold uppercase tracking-widest opacity-90 drop-shadow-md">Next</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Mobile Controls & Counter */}
            <div className="flex lg:hidden items-center justify-between mt-8 px-2 w-[85%]">
              <div className="flex items-center gap-3">
                <span className="text-xl font-bold font-heading text-foreground tabular-nums">
                  {String(current + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-foreground/40 tabular-nums">
                  / {String(newsArticles.length).padStart(2, "0")}
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleManualNav(prev)}
                  aria-label="Previous"
                  className="w-10 h-10 rounded-full bg-white text-foreground border border-foreground/10 flex items-center justify-center active:scale-95 transition-all shadow-sm"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleManualNav(next)}
                  aria-label="Next"
                  className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center active:scale-95 transition-all shadow-md"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Desktop Prev / Next arrows — bottom right */}
          <div className="hidden lg:flex absolute bottom-8 right-8 gap-2 z-20">
            <button
              onClick={() => handleManualNav(prev)}
              aria-label="Previous"
              className="w-12 h-12 rounded-full bg-white text-foreground border border-foreground/10 flex items-center justify-center hover:bg-foreground hover:text-white hover:border-transparent transition-all duration-300 shadow-md group"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={() => handleManualNav(next)}
              aria-label="Next"
              className="w-12 h-12 rounded-full bg-foreground text-white flex items-center justify-center hover:bg-highlight hover:text-black transition-all duration-300 shadow-xl group"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
            </button>
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
