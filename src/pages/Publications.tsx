import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, BookOpen, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/Images/IMG_4582.jpg"; 
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const publications = [
  {
    title: "Local pharmaceutical research and development capacity in a developing country: a qualitative exploration of perspectives from key stakeholders in Ethiopia.",
    link: "https://pubmed.ncbi.nlm.nih.gov/36434670/",
    linkText: "View on PubMed",
    shortDesc: "A qualitative study assessing the R&D capacity of local pharmaceutical manufacturers from the perspectives of key informants working in the companies and supporting government offices.",
    sections: [
      { heading: "Purpose", content: "Despite its importance in ensuring sustainable healthcare, there are huge challenges with pharmaceutical research and development (R&D) especially for developing countries mainly due to the high investment costs naturally associated with such activities. In this regard, the pharmaceutical sector in Ethiopia, the most populous nation in East Africa, faces numerous challenges. The current study aimed at assessing the R&D capacity of the local pharmaceutical manufacturers from the perspectives of key informants working in the companies and supporting government offices and education institutions." },
      { heading: "Methods", content: "A qualitative study design employing in-depth interviews using semi-structured interview guides with flexible probing techniques was used for data collection. The study involved purposively selected participants who represented major stakeholders such as managers in the R&D departments of pharmaceutical manufacturers, officers and leaders in concerned government agencies and researchers in a local university. All transcribed interviews were subjected to thematic analysis and the Qualitative Data Analysis software in family R (RQDA) was used for data analysis." },
      { heading: "Results", content: "A total of 14 participants were involved in the study and three major themes were identified from the interviews. Current R&D capacity, opportunities and challenges for involvement in R&D were the major themes. Under current R&D capacity, the weak R&D status of local pharmaceutical plants and minimal university-industry linkage were identified. The challenges of pharmaceutical R&D in Ethiopia included weak governmental and managerial support; difficult procurement processes for R&D input; and the high cost of R&D. Availability of trainable human power and planned government incentives were identified as the opportunities." },
      { heading: "Conclusion", content: "Overall, there is a low level of R&D capacity in local pharmaceutical industries and timely interventional strategies should be implemented through collaboration of academia, research institutions and pharmaceutical industries." }
    ]
  },
  {
    title: "Exploration Of Spirulina (Arthrospira Fusiformis) And Oyster Mushroom Formulation as Potential Nutraceuticals for improved Nutrition and Better Human Health.",
    link: "https://doi.org/10.1155/jfpp/2271018",
    linkText: "View on Hindawi",
    shortDesc: "This study evaluates the impact of adding spirulina and oyster mushrooms in the stages of injera fermentation to improve its nutritional content.",
    sections: [
      { heading: "Abstract", content: "For most Ethiopians, injera is a staple diet, and it is a soft, circular, sour, fermented flat bread that resembles a pancake and is mostly made from teff (Eragrostis tef) and other grains. This study is aimed at evaluating the impact of adding spirulina (Arthrospira fusiformis) and oyster mushrooms (Pleurotus ostreatus) in the three stages of injera fermentation. After baking, the proximate composition, fatty acid profile, mineral analysis, and antioxidant properties were determined. The sensory evaluation of the injera was performed via a 5-point hedonic measurement. Compared with the 7-day fermented and unfermented injera, the 2-day fermented injera with algae and mushrooms contained more protein (119% to 142% increase) and total lipids (30% to 77% increase). Compared with their unfermented and 7-day fermented counterparts, the mushrooms and algae fermented for 2 days presented greater concentrations of methyl esters of pentadecanoic acid, 14-methyl-, 9-octadecenoic acid (Z)-, and 9,12-octadecadienoic acid (Z, Z)-. The percentage of inhibition of DPPH (2,2-diphenyl-1-picrylhydrazyl) radical was lower in the methanol extracts of the injera that contained unfermented supplements (39%–43%) than in the methanol extracts of the injera that contained 2- or 7-day fermented supplements (73–77%). The injeras that contained only algae (E4, E7, and E10) were selected as their primary choice by the panelists. Adding supplements such as algae and oysters to the injera increased the nutritional content of the injera." }
    ]
  },
  {
    title: "Effect of replacement of Wheat with fava bean and black cumin flours on nutritional properties and sensory attributes of bread.",
    link: "https://www.mdpi.com/2673-4591/87/1/8",
    linkText: "View on MDPI",
    shortDesc: "Investigating the effects of flour blending ratios of wheat, germinated fava bean, and black cumin on the physicochemical and sensory attributes of bread.",
    sections: [
      { heading: "Abstract", content: "Blending wheat with fava bean and black cumin flours can improve the nutritional content of wheat-based bread. The current study investigated the effects of flour blending ratios of wheat, germinated fava bean, and black cumin on the physicochemical and sensory attributes of bread. A total of sixteen bread formulations were produced using the Design Expert software version 13.0.5.0: mixtures of wheat (64–100%), fava bean (0–30%), and black cumin (0–6%). The findings showed that the mixed fraction of composite flours affected the sensory attributes and nutritional value of bread. The mineral contents [Fe, Zn, and Ca] and proximate compositions [ash, fiber, fat, and crude protein] increased with an increase in fava bean and black cumin flour content and decreased with an increase in wheat flour content. The carbohydrate content and crumb lightness (L* value) increased with a decrease in black cumin and germinated fava bean flour proportion. The sensory attributes were significantly affected by the blend proportion (p < 0.05). Sensory scores increased with an increase in the level of germinated fava bean flour and decreased with an increase in the level of black cumin. Generally, the best bread blending ratio was found to be 72.5% wheat, 25.6% germinated fava bean, and 1.9% black cumin, in terms of overall qualitative attributes. This could lead to healthier and more appealing bread options." }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
} as const;

const Publications = () => {
  useGSAP(() => {
    // Parallax on all about-parallax-img elements
    gsap.utils.toArray<HTMLElement>('.about-parallax-img').forEach((img) => {
      gsap.fromTo(img, { yPercent: -15 }, {
        yPercent: 15, ease: "none",
        scrollTrigger: { trigger: img.parentElement, start: "top bottom", end: "bottom top", scrub: true }
      });
    });
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section - Standardized Premium Hero */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.img
            src={heroImg}
            alt="Publications"
            className="absolute inset-0 w-full h-[120%] -top-[10%] object-cover about-parallax-img"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
        <div className="relative container-grid px-6 z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <BookOpen className="w-10 h-10 text-[#FFF200]" strokeWidth={1.5} />
              </motion.div>
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#FFF200]">Research Output</span>
            </div>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mt-4 leading-tight">
              Publications
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto md:ml-0 font-body leading-relaxed">
              Explore our latest scientific findings, contributions to pharmaceutical research, and peer-reviewed publications.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-grid">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {publications.map((pub, idx) => (
              <Dialog key={idx}>
                <DialogTrigger asChild>
                  <motion.div 
                    variants={itemVariants}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className="group bg-card hover:bg-[#FFF200] rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-foreground/5 hover:border-highlight/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 p-8 cursor-pointer flex flex-col h-full relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-highlight/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-highlight/20 transition-colors duration-500" />
                    
                    <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
                      <BookOpen className="w-5 h-5 text-highlight" strokeWidth={2} />
                    </div>
                    
                    <h3 className="font-heading text-xl font-bold text-foreground leading-snug line-clamp-3 mb-4 group-hover:text-black transition-colors duration-300 relative z-10">
                      {pub.title}
                    </h3>
                    
                    <p className="text-muted-foreground font-body text-base line-clamp-4 flex-grow relative z-10">
                      {pub.shortDesc}
                    </p>
                    
                    <div className="mt-8 pt-6 border-t border-foreground/5 flex items-center justify-between relative z-10">
                      <span className="text-foreground font-bold text-sm tracking-wide uppercase">
                        Read Publication
                      </span>
                      <div className="w-8 h-8 rounded-full bg-foreground/5 flex items-center justify-center group-hover:bg-highlight group-hover:text-black transition-colors duration-300">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </motion.div>
                </DialogTrigger>
                
                <DialogContent className="max-w-4xl p-0 overflow-hidden bg-background border-foreground/10 flex flex-col !gap-0 max-h-[90vh] sm:rounded-2xl">
                  {/* Sticky Header Area */}
                  <div className="p-8 md:p-10 pb-8 bg-surface-subtle shrink-0 relative border-b border-foreground/5">
                    <DialogHeader>
                      <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6 pr-8">
                        <div className="w-14 h-14 rounded-2xl bg-highlight/20 flex items-center justify-center shrink-0">
                          <BookOpen className="w-7 h-7 text-highlight" />
                        </div>
                        <div>
                          <DialogTitle className="font-heading text-xl md:text-2xl font-bold leading-tight text-foreground text-left">
                            {pub.title}
                          </DialogTitle>
                        </div>
                      </div>
                    </DialogHeader>
                    <div className="mt-8 md:ml-20">
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-highlight text-black hover:bg-highlight/90 font-bold text-sm rounded-md transition-transform duration-300 hover:-translate-y-0.5 shadow-sm"
                      >
                        {pub.linkText}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Scrollable Content Area */}
                  <div className="p-8 md:p-10 overflow-y-auto">
                    <div className="space-y-8 max-w-3xl mx-auto md:ml-10">
                      {pub.sections.map((sec, sIdx) => (
                        <div key={sIdx} className="group">
                          <h4 className="font-heading text-lg font-bold text-foreground mb-3 flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-highlight shrink-0" />
                            {sec.heading}
                          </h4>
                          <p className="text-base md:text-lg text-muted-foreground font-body leading-relaxed">
                            {sec.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Publications;
