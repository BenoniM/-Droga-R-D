import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import labImg from "@/assets/lab-research.jpg";
import facilityImg from "@/assets/facility.jpg";
import plantsImg from "@/assets/herbal8.jpg";
import heroImg from "@/assets/hero-science.jpg";

// const Spline = lazy(() => import("@splinetool/react-spline"));

const newsArticles = [
  { title: "New Bioequivalence Study Center Opens at Kilinto", date: "March 10, 2026", category: "Announcement", image: facilityImg, excerpt: "Droga R&D's state-of-the-art bioequivalence center at Kilinto Industrial Park officially begins operations, marking a milestone in pharmaceutical research capability." },
  { title: "DRG Grant Applications Open for 2026", date: "January 15, 2026", category: "Grants", image: labImg, excerpt: "The annual Droga Research Grant application period is now open, inviting Ethiopian researchers to submit proposals across five key research areas." },
  { title: "Medicinal Plant Nursery Established in Butajira", date: "December 5, 2025", category: "Research", image: plantsImg, excerpt: "A new dedicated nursery has been established for cultivating indigenous medicinal plants, strengthening the link between traditional knowledge and modern science." },
  { title: "Oil Manufacturing Facility Nears Completion", date: "November 20, 2025", category: "Projects", image: facilityImg, excerpt: "The 1,000 sq.m processing facility for fixed and volatile oils is in its final stages of construction." },
  { title: "Successful Diabetic Foot Care Study Published", date: "October 8, 2025", category: "Publication", image: labImg, excerpt: "Research funded by DRG on diabetic foot care emollient formulation has been published in a peer-reviewed journal." },
  { title: "Partnership with Ethiopian FDA Strengthened", date: "September 15, 2025", category: "Partnership", image: facilityImg, excerpt: "Droga R&D deepens collaboration with EFDA on regulatory compliance and quality standards." },
];

const News = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 px-6 bg-highlight relative overflow-hidden">
        <div className="container-grid grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-foreground/60">Updates</span>
            <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tighter text-foreground mt-4">
              News & Events
            </h1>
            <p className="mt-6 text-lg text-foreground/70 max-w-md font-body leading-relaxed">
              Stay informed about our latest research, announcements, and partnerships.
            </p>
          </motion.div>
          {/* Spline 3D element commented out
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:block h-[320px] relative"
          >
            <Suspense fallback={<div className="w-full h-full" />}>
              <Spline scene="https://prod.spline.design/kIBCzEA26MbIqNPT/scene.splinecode" style={{ width: "100%", height: "100%" }} />
            </Suspense>
          </motion.div>
          */}
        </div>
      </section>

      <section className="section-padding">
        <div className="container-grid">
          {/* Featured */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          >
            <motion.div
              className="overflow-hidden rounded-sm"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <img src={newsArticles[0].image} alt={newsArticles[0].title} className="w-full h-[400px] object-cover" />
            </motion.div>
            <div className="flex flex-col justify-center">
              <span className="text-xs font-bold uppercase tracking-widest text-foreground/60">{newsArticles[0].category}</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mt-3 text-foreground">{newsArticles[0].title}</h2>
              <p className="mt-4 text-base font-body text-muted-foreground leading-relaxed">{newsArticles[0].excerpt}</p>
              <span className="mt-6 text-xs text-muted-foreground">{newsArticles[0].date}</span>
            </div>
          </motion.div>

          {/* Parallax banner */}
          <section className="relative h-[30vh] overflow-hidden rounded-sm mb-16">
            <motion.img
              src={heroImg}
              alt="Research"
              className="w-full h-[140%] object-cover absolute -top-[20%]"
              initial={{ y: 0 }}
              whileInView={{ y: -30 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
            />
            <div className="absolute inset-0 bg-foreground/50 flex items-center justify-center">
              <SectionReveal className="text-center px-6">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-surface-dark-foreground tracking-tight">
                  Advancing Pharmaceutical Innovation
                </h2>
              </SectionReveal>
            </div>
          </section>

          {/* Grid with Exact Hover Effects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.slice(1).map((article, i) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group cursor-pointer overflow-hidden rounded-sm bg-card transition-all duration-300 hover:bg-highlight"
              >
                <div className="aspect-[16/10] bg-surface-subtle overflow-hidden">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 group-hover:bg-highlight transition-colors duration-300">
                  <span className="text-xs font-bold uppercase tracking-widest text-foreground/60 group-hover:text-foreground/70 transition-colors duration-300">{article.category}</span>
                  <h3 className="font-heading text-xl font-bold mt-2 text-foreground group-hover:text-black transition-colors duration-300">{article.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground group-hover:text-foreground/70 leading-relaxed line-clamp-2 transition-colors duration-300">{article.excerpt}</p>
                  <span className="mt-3 text-xs text-muted-foreground group-hover:text-foreground/70 block transition-colors duration-300">{article.date}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;