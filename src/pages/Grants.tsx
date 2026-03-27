import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Award, Medal, Trophy, Star, BadgeCheck, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import heroImg from "@/assets/hero-science.jpg";
import labImg from "@/assets/lab-research.jpg";
import facilityImg from "@/assets/facility.jpg";

const grantCategories = [
  { name: "API Discovery & Excipient Characterization", icon: FlaskIcon },
  { name: "Herbal Medicine", icon: LeafIcon },
  { name: "Food Supplements & Nutraceuticals", icon: HeartIcon },
  { name: "Formulation Development", icon: BeakerIcon },
  { name: "Cosmetics", icon: SparkleIcon },
];

const pastGrants = [
  { title: "Hypolipidemic effect of Lippia Adoensis var. Koseret leaf extract", amount: "71,984", year: "2022", icon: Award, image: labImg },
  { title: "Spirulina & Oyster Mushroom Nutraceutical Formulation", amount: "100,000", year: "2022", icon: Trophy, image: facilityImg },
  { title: "Wheat replacement with fava bean and black cumin bread formulation", amount: "62,800", year: "2023", icon: Medal, image: heroImg },
  { title: "Milk-based oral dispersible Griseofulvin tablets", amount: "90,750", year: "2023", icon: Star, image: labImg },
  { title: "Diabetic foot care emollient formulation design", amount: "89,400", year: "2024", icon: BadgeCheck, image: facilityImg },
];

function FlaskIcon({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/></svg>;
}
function LeafIcon({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 2 8 0 5.5-4.5 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>;
}
function HeartIcon({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>;
}
function BeakerIcon({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 3h15"/><path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"/><path d="M6 14h12"/></svg>;
}
function SparkleIcon({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>;
}

const Grants = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero with image */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <motion.img
          src={heroImg}
          alt="Research grants"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-foreground/70" />
        <div className="relative container-grid z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Crown className="w-10 h-10 text-highlight" strokeWidth={1.5} />
              </motion.div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-highlight">Excellence in Research</span>
            </div>
            <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tighter text-surface-dark-foreground mt-4">
              Droga Research Grant
            </h1>
            <p className="mt-6 text-lg text-surface-dark-foreground/70 max-w-2xl font-body leading-relaxed">
              Recognizing and funding outstanding pharmaceutical research that transforms healthcare outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About DRG - Award style */}
      <section className="section-padding">
        <div className="container-grid max-w-4xl text-center">
          <SectionReveal>
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block mb-6"
            >
              <Trophy className="w-16 h-16 text-highlight mx-auto" strokeWidth={1} />
            </motion.div>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight text-foreground">Our Commitment to Excellence</h2>
            <p className="mt-6 text-lg font-body text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              At Droga Research Grant (DRG), we believe that meaningful health solutions start with innovative research. Our mission is to support both junior and senior researchers who are dedicated to improving human health through pharmaceutical and related research.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Grant Categories */}
      <section className="section-padding bg-surface-subtle">
        <div className="container-grid">
          <SectionReveal>
            <span className="overline-dark">Categories</span>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight mt-4 text-foreground">Research Areas We Fund</h2>
          </SectionReveal>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {grantCategories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={cat.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  className="group p-8 bg-card card-shadow rounded-sm border-l-4 border-highlight hover:bg-highlight transition-all duration-300 cursor-pointer"
                >
                  <Icon className="w-8 h-8 text-highlight group-hover:text-foreground mb-4 transition-colors duration-300" />
                  <span className="font-heading text-lg font-bold text-foreground">{cat.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Past Achievements - Award style cards */}
      <section className="section-padding">
        <div className="container-grid">
          <SectionReveal>
            <span className="overline-dark">Track Record</span>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight mt-4 text-foreground">Funded Research Achievements</h2>
            <p className="mt-4 text-muted-foreground font-body">Over the past four years, DRG has proudly funded impactful pharmaceutical research.</p>
          </SectionReveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastGrants.map((grant, i) => {
              const Icon = grant.icon;
              return (
                <motion.div
                  key={grant.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group relative bg-card rounded-sm overflow-hidden card-shadow hover:shadow-2xl transition-all duration-500"
                >
                  {/* Image header */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img src={grant.image} alt={grant.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-foreground/40" />
                    {/* Award icon */}
                    <motion.div
                      className="absolute bottom-4 right-4"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                    >
                      <div className="w-12 h-12 rounded-full bg-highlight flex items-center justify-center">
                        <Icon className="w-6 h-6 text-foreground" strokeWidth={1.5} />
                      </div>
                    </motion.div>
                    {/* Year badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-highlight rounded-sm">
                      <span className="text-xs font-heading font-bold text-foreground">{grant.year}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 group-hover:bg-highlight transition-colors duration-300">
                    <h4 className="font-heading text-base font-bold text-foreground leading-snug">{grant.title}</h4>
                    <div className="mt-4 flex items-center gap-2">
                      <span className="font-heading text-xl font-bold text-foreground">{grant.amount}</span>
                      <span className="text-sm text-muted-foreground group-hover:text-foreground/60 transition-colors duration-300">ETB</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Parallax banner */}
      <section className="relative h-[40vh] overflow-hidden">
        <motion.img
          src={facilityImg}
          alt="Research facility"
          className="w-full h-[130%] object-cover absolute -top-[15%]"
          initial={{ y: 0 }}
          whileInView={{ y: -30 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-foreground/50 flex items-center justify-center">
          <SectionReveal className="text-center px-6">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-surface-dark-foreground tracking-tight">
              Funding Tomorrow's Breakthroughs
            </h2>
          </SectionReveal>
        </div>
      </section>

      {/* Application CTA */}
     {/* Decorative floating elements */}
<motion.div
  className="absolute top-10 left-10 opacity-10"
  animate={{ y: [0, -15, 0], rotate: [0, 180, 360] }}
  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
>
  <Award className="w-24 h-24 text-foreground" strokeWidth={0.5} />
</motion.div>
<motion.div
  className="absolute bottom-10 right-10 opacity-10"
  animate={{ y: [0, 10, 0], rotate: [360, 180, 0] }}
  transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
>
  <Medal className="w-20 h-20 text-foreground" strokeWidth={0.5} />
</motion.div>

<section className="section-padding bg-surface-subtle relative overflow-hidden">
  <div className="container-grid text-center relative z-10">
    <SectionReveal>
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="inline-block mb-6"
      >
        <Crown className="w-14 h-14 text-foreground mx-auto" strokeWidth={1} />
      </motion.div>
      <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-foreground">Apply for DRG</h2>
      <p className="mt-4 text-base md:text-lg font-body text-foreground/70 max-w-xl mx-auto">Applications open every January. Ethiopian healthcare professionals, researchers, and academicians are welcome.</p>
      <Button variant="default" size="lg" className="mt-8">
        Start Application
      </Button>
    </SectionReveal>
  </div>
</section>
      <Footer />
    </div>
  );
};

export default Grants;
