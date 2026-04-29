import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, BookOpen, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/Images/IMG_4582.jpg"; 

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
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <motion.img
          src={heroImg}
          alt="Publications"
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
                <BookOpen className="w-10 h-10 text-highlight" strokeWidth={1.5} />
              </motion.div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-highlight">Research Output</span>
            </div>
            <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tighter text-surface-dark-foreground mt-4">
              Publications
            </h1>
            <p className="mt-6 text-lg text-surface-dark-foreground/70 max-w-2xl mx-auto font-body leading-relaxed">
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
                    className="group bg-card rounded-md shadow-md border-t-4 border-transparent hover:border-highlight hover:shadow-xl transition-all duration-300 p-8 cursor-pointer flex flex-col h-full"
                  >
                    <BookOpen className="w-8 h-8 text-highlight mb-6 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                    <h3 className="font-heading text-lg font-bold text-foreground leading-snug line-clamp-3 mb-4 group-hover:text-black transition-colors duration-300">
                      {pub.title}
                    </h3>
                    <p className="text-muted-foreground font-body text-sm line-clamp-4 flex-grow">
                      {pub.shortDesc}
                    </p>
                    <div className="mt-6 flex items-center text-black font-bold text-sm transition-colors duration-300">
                      Read Full Details
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </motion.div>
                </DialogTrigger>
                
                <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="font-heading text-xl md:text-2xl font-bold leading-snug pr-6">
                      {pub.title}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="mt-6 space-y-6">
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-highlight/20 text-highlight hover:bg-highlight hover:text-black font-bold text-sm rounded-sm transition-colors duration-300"
                    >
                      {pub.linkText}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    
                    <div className="space-y-4">
                      {pub.sections.map((sec, sIdx) => (
                        <p key={sIdx} className="text-sm md:text-base text-muted-foreground font-body leading-relaxed">
                          <strong className="text-foreground">{sec.heading}:</strong> {sec.content}
                        </p>
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
