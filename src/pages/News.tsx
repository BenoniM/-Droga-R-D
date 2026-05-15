import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Newspaper } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// News images — cover shots
import n2 from "@/assets/news/News 2 April 2023.png";
import n3_1 from "@/assets/news/News 3 May 6 2023 - 1.jpg";
import n3_2 from "@/assets/news/News 3 May 6 2023 - 2.png";
import n3_3 from "@/assets/news/News 3 May 6 2023 - 3.png";
import n4 from "@/assets/news/News 4 May 2023.png";
import n5_1 from "@/assets/news/News 5  June 7 2023 - 1.jpg";
import n5_2 from "@/assets/news/News 5 June 7 2023 - 2.png";
import n5_3 from "@/assets/news/News 5  June 7 2023 - 3.png";
import n5_4 from "@/assets/news/News 5  June 7 2023 - 4.png";
import n5_5 from "@/assets/news/News 5  June 7 2023 - 5.png";
import n5_6 from "@/assets/news/News 5  June 7 2023 - 6.png";
import n5_7 from "@/assets/news/News 5  June 7 2023 - 7.png";
import n5_8 from "@/assets/news/News 5  June 7 2023 - 8.png";
import n5_9 from "@/assets/news/News 5  June 7 2023 - 9.png";
import n5_10 from "@/assets/news/News 5  June 7 2023 - 10.png";
import n5_11 from "@/assets/news/News 5  June 7 2023 - 11.png";
import n6_1 from "@/assets/news/News 6 Dec 21 2023 - 1.png";
import n6_2 from "@/assets/news/News 6 Dec 21 2023 - 2.png";
import n6_3 from "@/assets/news/News 6 Dec 21 2023 - 3.png";
import n6_4 from "@/assets/news/News 6 Dec 21 2023 - 4.png";
import n7_1 from "@/assets/news/News 7 Dec 28 2023 - 1.png";
import n7_2 from "@/assets/news/News 7 Dec 28 2023 - 2.png";
import n7_3 from "@/assets/news/News 7 Dec 28 2023 - 3.png";
import n8_1 from "@/assets/news/News 8 - 1.png";
import n8_2 from "@/assets/news/News 8 - 2.png";
import n8_3 from "@/assets/news/News 8 - 3.png";
import n9 from "@/assets/news/News 9 January 15 2024.png";
import n10 from "@/assets/news/News 10 May 2 2024.png";
import n11_1 from "@/assets/news/News 11 May 27 2024 - 1.png";
import n11_2 from "@/assets/news/News 11 May 27 2024 - 2.png";
import n11_3 from "@/assets/news/News 11 May 27 2024 - 3.png";
import n11_4 from "@/assets/news/News 11 May 27 2024 - 4.png";
import n11_5 from "@/assets/news/News 11 May 27 2024 - 5.png";
import n11_6 from "@/assets/news/News 11 May 27 2024 - 6.png";
import n11_7 from "@/assets/news/News 11 May 27 2024 - 7.png";
import n12 from "@/assets/news/News 12 June 8 2024.jpg";
import n13 from "@/assets/news/News 13 Feb 10 2025.png";
import n14_1 from "@/assets/news/News 14 June 7 2025 - 1.png";
import n14_2 from "@/assets/news/News 14 June 7 2025 - 2.jpg";
import n14_3 from "@/assets/news/News 14 June 7 2025 - 3.png";
import n14_4 from "@/assets/news/News 14 June 7 2025 - 4.png";
import n15 from "@/assets/news/News 15 February 20 2026.png";

interface NewsArticle {
  title: string;
  date: string;
  category: string;
  image: string;       // slider cover image
  images: string[];    // all images shown in modal gallery
  excerpt: string;
  full: string;
}

const newsArticles: NewsArticle[] = [
  {
    title: "Droga Pharma Plc announces Droga Orthopedic Research Grant 2022",
    date: "Dec 2022",
    category: "Grants",
    image: "https://images.pexels.com/photos/7722873/pexels-photo-7722873.jpeg",
    images: [
      "https://images.unsplash.com/photo-1630959302862-82cec6653d60?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UmVzZWFyY2glMjBHcmFudHxlbnwwfHwwfHx8Mg%3D%3D",
      "https://images.unsplash.com/photo-1582719366767-dbbb6c6bf4aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFJlc2VhcmNoJTIwR3JhbnR8ZW58MHx8MHx8fDI%3D",
    ],
    excerpt:
      "Announced at the Ethiopian Orthopedics Association Annual Conference. Applications open October 1 – December 1, 2022.",
    full: "Droga Pharma Plc announces Droga Orthopedic Research grant 2022 at the Ethiopian orthopedics association annual conference. Application for the grant will be opened on October 1st 2022 and will continue till December 1st 2022. Droga Pharma PLC will like to invite all those who are eligible to apply.",
  },
  {
    title: "Winners of the 2022 Droga Orthopedic Research Grant Announced",
    date: "April 2023",
    category: "Grants",
    image: n2,
    images: [n2],
    excerpt:
      "Droga Pharma PLC awards Dr. Eyoel Tesfaye, Dr. Habtewold Mulat, and Dr. Sintayehu Tekle grants of 81,230.00 ETB & 100,000.00 ETB.",
    full: "Droga Pharma PLC has awarded Dr. Eyoel Tesfaye (MD, Orthopedics and Trauma surgery Resident at St Paul's Hospital Millennium Medical College), Dr. Habtewold Mulat (MD,MPH, Assistant professor, Orthopedics and Trauma Surgeon at St. Paul Hospital Millennium Medical College, Aabet hospital) and Dr. Sintayehu Tekle (MD, Orthopedic surgeon at Adama Comprehensive Specialized Hospital Medical College) winners of the 2022 Droga Orthopedic Research Grant with 81,230.00 ETB & 100,000.00 ETB.\n\nThe company held an orthopedic research grant competition from October of 2022 to December of 2022 on the thematic areas of Femur Nail, Proximal Femur Nail & Proximal Femur Anti-Rotation Augmentation Nail. Proposals of the applicants were reviewed from the periods of January 2023 to February 2023.\n\n🎉🎉 Congratulation to both! 🎉🎉\n\nThe next round of applications to Droga Orthopedics Research Grant will be opened in October of 2023.",
  },
  {
    title: "Droga Signs MOU to Join Kilinto Industrial Park for R&D Center",
    date: "May 6, 2023",
    category: "Partnership",
    image: n3_1,
    images: [n3_1, n3_2, n3_3],
    excerpt:
      "Droga Pharma Pvt Ltd joins various industrial parks from the Industrial Parks Development Corporation, registering capital of over 8.2 billion birr.",
    full: "ድሮጋ ፋርማ ኃላ.የተ.የግ.ማህ ከኢንዱስትሪ ፓርኮች ልማት ኮርፖሬሽን ወደ ተለያዩ ኢንዱስትሪ ፓርኮች ከሚገቡና ከ8.2 ቢሊዮን ብር በላይ ካፒታል ካስመዘገቡ አገር በቀል ኩባንያዎች አንዱ በመሆኑ ታላቅ ደስታ ይሰማዋል።\n\nDroga Pharma Pvt Ltd is very happy to be one of the indigenous companies entering various industrial parks from the Industrial Parks Development Corporation and registering a capital of more than 8.2 billion birr.",
  },
  {
    title: "Announcing Droga Research Grant 2023 Winner",
    date: "May 2023",
    category: "Grants",
    image: n4,
    images: [n4],
    excerpt:
      "After thorough review of submitted proposals, the Droga Research Grant 2023 has been awarded. Next grant cycle starts January 2024.",
    full: "Droga research grant is organized annually with the aim of encouraging & supporting junior & senior researchers that are engaged in, nutrition, food & pharmaceutical related problem solving, researches.\n\nThe grant is awarded in five thematic areas; Medicinal and herbal plants, API & Excipient characterization, Formulation development, Nutraceutical, and Food supplement as well as Cosmetics.\n\nWe are happy to announce that, after a thorough review of submitted proposals, Droga Research Grant 2023 has been awarded to one winning research proposal.\n\n🎉 Congratulations 🎉\n\nNext grant cycle starts in January of 2024.",
  },
  {
    title: "Droga Research Day 2023",
    date: "June 7, 2023",
    category: "Events",
    image: n5_1,
    images: [n5_1, n5_2, n5_3, n5_4, n5_5, n5_6, n5_7, n5_8, n5_9, n5_10, n5_11],
    excerpt:
      "Droga celebrates Research Day 2023 with presentations from DRG 2022 awardees, grant award ceremony for DRG 2023 winner, and stakeholder discussions.",
    full: "Droga Celebrates Droga Research Day 2023. The event included presentations from DRG 2022 awardees and discussions on their research findings. DRG 2023 winner was also awarded his grant during the event. Stakeholder discussions regarding the findings and ways forward was also conducted.",
  },
  {
    title: "R&D Holds Internal Consultative Discussion on Droga Black Seed Oil",
    date: "Dec 21, 2023",
    category: "Research",
    image: n6_1,
    images: [n6_1, n6_2, n6_3, n6_4],
    excerpt:
      "Droga Pharma PLC's R&D held a consultative discussion with internal stakeholders regarding Droga Black Seed Oil at Droga Group HQ.",
    full: "R&D Holds Internal Consultative Discussion on Droga Black Seed Oil.\n\nDroga Pharma PLC's R&D held a consultative discussion with internal stakeholders, regarding Droga Black Seed Oil on Dec 21/2023 at Droga Group HQ. During the event a presentation was made regarding the product: Which included the history, traditional use, benefits and the pilot scale production process of black cumin (seed) oil and discussions made. Direction for the way forward were set and the event concluded.",
  },
  {
    title: "Droga Pharma PLC Signs MOU with Debre Birhan University",
    date: "Dec 28, 2023",
    category: "Partnership",
    image: n7_1,
    images: [n7_1, n7_2, n7_3],
    excerpt:
      "MOU signed to collaborate on scientific research in Pharmaceuticals, Herbal Medicines, Nutraceuticals, Food Supplements and Cosmeceuticals.",
    full: "Droga Pharma PLC has signed an MOU with Debre Birhan University to Collaborate on Scientific Researchers in the areas of Pharmaceuticals, Herbal Medicines, Nutraceuticals, Food Supplements and Cosmeceuticals.",
  },
  {
    title: "Droga Elected to Advisory Committee for University Industry Linkage",
    date: "2023",
    category: "Recognition",
    image: n8_1,
    images: [n8_1, n8_2, n8_3],
    excerpt:
      "Droga Pharma PLC has been elected as a member of the Advisory Committee for University Industry Linkage at a forum organized by Debre Birhan University.",
    full: "Droga Pharma PLC has been elected as a member of the Advisory Committee for University Industry Linkage at a consultative forum organized by Debre Birhan University. Droga would like to thank all those that recommended it and promises to promote, support and strengthen University-Industry linkages.",
  },
  {
    title: "Droga Research Grant 2024 Announced",
    date: "January 15, 2024",
    category: "Grants",
    image: n9,
    images: [n9],
    excerpt:
      "Droga Pharma PLC invites all eligible applicants to apply for the 2024 Droga Research Grant. Details available at drogapharma.com/r-d.",
    full: "Droga Pharma PLC would like to invite all eligible and interested applicants to apply for the 2024 Droga Research Grant. Details of the application process along with eligibility criteria and application form can be accessed at https://drogapharma.com/r-d",
  },
  {
    title: "Droga Research Grant 2024 Winner Announced",
    date: "May 2, 2024",
    category: "Grants",
    image: n10,
    images: [n10],
    excerpt:
      "🎉 Droga Research Grant 2024 awarded 90,750.00 ETB to Mr. Kbrom Tewele on milk-based oral dispersible Griseofulvin tablets.",
    full: "🎉 Congratulations 🎉\n\nDroga Research Grant 2024 Awarded 90,750.00ETB to Mr. Kbrom Tewele.\n\nOn the title: \"Formulation, In-Vitro evaluation & Optimization of milk based oral dispersible Griseofulvin tablets prepared by direct compression method.\"\n\nNext Grant cycle starts January 2025.",
  },
  {
    title: "Droga Research Day 2024",
    date: "May 27, 2024",
    category: "Events",
    image: n11_1,
    images: [n11_1, n11_2, n11_3, n11_4, n11_5, n11_6, n11_7],
    excerpt:
      "Droga R&D celebrated the 3rd Droga Research Day with presentations of grant-funded research and stakeholder consultative discussions.",
    full: "Droga R&D celebrated the 3rd Droga Research Day on May 27, 2024. At the event findings of researches that were funded by the Droga Research Grant Platform as well as researches conducted by Droga R&D were presented and the way forward discussed upon.\n\nFurthermore, a consultative discussion was held with stakeholders, regarding research capabilities, challenges and opportunities towards translational researches in Ethiopia.",
  },
  {
    title: "Droga R&D Attends Local Medical Product Manufacturing Exhibition",
    date: "June 8, 2024",
    category: "Events",
    image: n12,
    images: [n12],
    excerpt:
      "Droga R&D attends the Local Medical Product Manufacturing and Innovation Exhibition organized by the Ministry of Health Ethiopia, June 17–28, 2024.",
    full: "Droga Research & Development attends Local Medical Product Manufacturing and Innovation Exhibition organized by Ministry of Health Ethiopia from June 17 to 28, 2024.",
  },
  {
    title: "DROGA RESEARCH GRANT 2025 Announced",
    date: "Feb 10, 2025",
    category: "Grants",
    image: n13,
    images: [n13],
    excerpt:
      "Droga Pharma PLC announces the 2025 Droga Research Grant focusing on Food Supplements & Nutraceuticals and Formulation Development.",
    full: "Droga research grant is an annual research grant organized by Droga Pharma PLC in the thematic areas of:\n✔️ API Discovery & Excipient characterization\n✔️ Herbal Medicine\n✔️ Food Supplements & Nutraceuticals\n✔️ Formulation Development\n✔️ Cosmetics\n\nNow, Droga Pharma PLC announces the 2025 Droga Research Grant in the following selected thematic areas:\n✔️ Food Supplements & Nutraceuticals\n✔️ Formulation Development for Pharmaceuticals & Cosmetics\n\nPlease visit https://lnkd.in/etau9ubG for details regarding eligibility criteria and how to apply to the DRG-2025.",
  },
  {
    title: "Droga Research Day 2025",
    date: "June 7, 2025",
    category: "Events",
    image: n14_1,
    images: [n14_1, n14_2, n14_3, n14_4],
    excerpt:
      "🎉 DRG 2025 awarded 89,400 ETB to Mr. Minychel Wale for his research on Diabetic Foot Care emollient formulation.",
    full: "🎉 Congratulations 🎉\n\nDroga Research Grant 2025 Awarded 89,400ETB to Mr. Minychel Wale.\n\nOn the title: \"Formulation design and Physicochemical Evaluation of Diabetic foot care (DFC) emollient: A way to Tackling Diabetic Foot Xerosis (DFX).\"\n\nNext Grant cycle starts January 2026.\n\nDroga Pharma PLC",
  },
  {
    title: "📋 Call for Droga Research Grant 2026",
    date: "February 20, 2026",
    category: "Grants",
    image: n15,
    images: [n15],
    excerpt:
      "Droga Pharma PLC is now accepting applications for the 2026 Droga Research Grant focusing on Formulation Development for Dermatological Products.",
    full: "Droga Pharma PLC is now accepting applications for the 2026 Droga Research Grant (DRG-2026).\n\nThis year's focus area:\n🔘 Formulation Development for Dermatological Products\n\nReady to take your research further?\n\nApply now: https://lnkd.in/dW7VxxWY\n\nContact us: rnd1@drogapharma.com",
  },
];

/** Parse display dates like "June 7, 2025", "Feb 10, 2025", or "2023" for sorting. */
const parseNewsDate = (dateStr: string): number => {
  const s = dateStr.trim();
  if (/^\d{4}$/.test(s)) {
    return new Date(Number(s), 11, 31).getTime();
  }
  const direct = Date.parse(s);
  if (!Number.isNaN(direct)) return direct;
  const withDay = s.replace(/^([A-Za-z]+)\s+(\d{4})$/, "$1 1, $2");
  return Date.parse(withDay) || 0;
};

const sortedNewsArticles = [...newsArticles].sort(
  (a, b) => parseNewsDate(b.date) - parseNewsDate(a.date)
);

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

const News = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const [modalArticle, setModalArticle] = useState<NewsArticle | null>(null);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % sortedNewsArticles.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + sortedNewsArticles.length) % sortedNewsArticles.length);
  }, []);

  const handleManualNav = (fn: () => void) => {
    fn();
    setPaused(true);
    setTimeout(() => setPaused(false), 8000);
  };

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, paused]);

  // Pause auto-advance when modal is open
  useEffect(() => {
    if (modalArticle) setPaused(true);
    else setTimeout(() => setPaused(false), 2000);
  }, [modalArticle]);

  const nextIndex = (current + 1) % sortedNewsArticles.length;
  const article = sortedNewsArticles[current];
  const nextArticle = sortedNewsArticles[nextIndex];

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

              <button
                onClick={() => setModalArticle(article)}
                className="mt-8 self-start inline-flex items-center gap-2 bg-foreground text-background text-sm font-bold px-6 py-3 rounded-sm hover:bg-highlight/80 hover:text-black transition-colors duration-300 group"
              >
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
                {String(sortedNewsArticles.length).padStart(2, "0")}
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
                  / {String(sortedNewsArticles.length).padStart(2, "0")}
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
        {sortedNewsArticles.map((_, i) => (
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

      {/* Read More Modal — Publications-style via Dialog */}
      {modalArticle && (
        <Dialog open={!!modalArticle} onOpenChange={(open) => { if (!open) setModalArticle(null); }}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden bg-background border-foreground/10 flex flex-col !gap-0 max-h-[90vh] sm:rounded-2xl">
            {/* Sticky Header */}
            <div className="p-8 md:p-10 pb-8 bg-surface-subtle shrink-0 relative border-b border-foreground/5">
              <DialogHeader>
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6 pr-8">
                  <div className="w-14 h-14 rounded-2xl bg-black/20 flex items-center justify-center shrink-0">
                    <Newspaper className="w-7 h-7 text-black" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-foreground/50 mb-2 block">
                      {modalArticle.category} · {modalArticle.date}
                    </span>
                    <DialogTitle className="font-heading text-xl md:text-2xl font-bold leading-tight text-foreground text-left">
                      {modalArticle.title}
                    </DialogTitle>
                  </div>
                </div>
              </DialogHeader>
            </div>

            {/* Scrollable Body */}
            <div className="p-8 md:p-10 overflow-y-auto">
              <div className="space-y-8 max-w-3xl mx-auto">
                {/* Full text */}
                <div>
                  <h4 className="font-heading text-lg font-bold text-foreground mb-3 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-highlight shrink-0" />
                    Details
                  </h4>
                  <p className="text-base text-muted-foreground font-body leading-relaxed whitespace-pre-line">
                    {modalArticle.full}
                  </p>
                </div>

                {/* Image gallery — only if more than 1 image */}
                {modalArticle.images.length > 1 && (
                  <div>
                    <h4 className="font-heading text-lg font-bold text-foreground mb-4 flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-highlight shrink-0" />
                      Gallery
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {modalArticle.images.map((src, i) => (
                        <div key={i} className="overflow-hidden rounded-xl aspect-[4/3] bg-foreground/5">
                          <img
                            src={src}
                            alt={`${modalArticle.title} – image ${i + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Single image — show full width */}
                {modalArticle.images.length === 1 && (
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={modalArticle.images[0]}
                      alt={modalArticle.title}
                      className="w-full object-cover rounded-xl"
                    />
                  </div>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      <Footer />
    </div>
  );
};

export default News;
