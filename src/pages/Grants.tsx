import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Award, Medal, Trophy, Star, BadgeCheck, Crown, FileCheck, Users, ShieldCheck, Clock } from "lucide-react";
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
  { title: "Evaluation of the hypolipidemic effect of leaf extract of Lippia Adoensis var. Koseret in hypercholesterolemic mice", amount: "71,984.00", icon: Award, image: labImg },
  { title: "Exploration Of Spirulina (Arthrospira Fusiformis) And Oyster Mushroom Formulation as Potential Nutraceuticals for improved Nutrition and Better Human Health", amount: "100,000.00", icon: Trophy, image: facilityImg },
  { title: "Effect of replacement of Wheat with fava bean and black cumin flours on nutritional properties and sensory attributes of bread", amount: "62,800.00", icon: Medal, image: heroImg },
  { title: "Formulation, In-Vitro evaluation & optimization of milk based oral dispersible Griseofulvin tablets prepared by direct compression method", amount: "90,750.00", icon: Star, image: labImg },
  { title: "Formulation design and physicochemical evaluation of Diabetic foot care emollient, A way to tackling diabetic foot xerosis (DFX)", amount: "89,400.00", icon: BadgeCheck, image: facilityImg },
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Grants = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero with image - Centered */}
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
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
            <p className="mt-6 text-lg text-surface-dark-foreground/70 max-w-2xl mx-auto font-body leading-relaxed">
              Recognizing and funding outstanding pharmaceutical research that transforms healthcare outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About DRG - already centered */}
      <section className="section-padding">
        <div className="container-grid max-w-4xl text-center mx-auto">
          <SectionReveal>
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block mb-6"
            >
              <Trophy className="w-16 h-16 text-highlight mx-auto" strokeWidth={1} />
            </motion.div>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight text-foreground">Our Commitment to Advancing Pharmaceutical Research</h2>
            <p className="mt-6 text-lg font-body text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              At Droga Research Grant (DRG), we believe that meaningful health solutions start with innovative research.
              Our mission is to support both junior and senior researchers who are dedicated to improving human health
              through pharmaceutical and related research. We are particularly interested in projects that address real
              challenges faced by our communities and country, and that have the potential to make a tangible impact on people’s lives.
            </p>
            <p className="mt-4 text-md font-body text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Our goal is to empower researchers to transform ideas into solutions that improve the quality of pharmaceuticals and healthcare products.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Eligibility & Requirements - Centered heading */}
      <section className="section-padding bg-surface-subtle">
        <div className="container-grid">
          <SectionReveal>
            <div className="text-center">
              <span className="overline-dark">Who Can Apply</span>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight mt-4 text-foreground">Eligibility & Requirements</h2>
            </div>
          </SectionReveal>
          <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              { icon: Users, title: "Eligible Applicants", desc: "Ethiopian healthcare professionals, researchers, and academicians committed to advancing knowledge in pharmaceutical and health sciences." },
              { icon: FileCheck, title: "Submission Limit", desc: "Each applicant can submit one proposal per year." },
              { icon: ShieldCheck, title: "IRB Approval", desc: "For projects involving human subjects or animals, Institutional Review Board (IRB) approval is required before funds are released." },
              { icon: Clock, title: "No-Cost Extensions", desc: "We consider requests for no-cost extensions only under special circumstances on a case-by-case basis." }
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group p-6 bg-card card-shadow rounded-sm border-t-4 border-highlight hover:bg-highlight transition-all duration-300 cursor-pointer"
              >
                <item.icon className="w-8 h-8 text-highlight group-hover:text-foreground mb-4 transition-colors duration-300" />
                <h3 className="font-heading font-bold text-lg text-foreground group-hover:text-foreground transition-colors duration-300">{item.title}</h3>
                <p className="mt-2 text-muted-foreground font-body text-sm group-hover:text-foreground/70 transition-colors duration-300">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Grant Categories - Centered heading */}
      <section className="section-padding">
        <div className="container-grid">
          <SectionReveal>
            <div className="text-center">
              <span className="overline-dark">Research Areas We Support</span>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight mt-4 text-foreground">Funded Research Areas</h2>
              <p className="mt-4 text-muted-foreground font-body max-w-2xl mx-auto">
                We fund research across key areas in pharmaceutical sciences and related fields.
              </p>
            </div>
          </SectionReveal>
          <motion.div
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {grantCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={cat.name}
                  variants={itemVariants}
                  whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.2 } }}
                  className="group p-8 bg-card card-shadow rounded-sm border-l-4 border-highlight hover:bg-highlight transition-all duration-300 cursor-pointer"
                >
                  <Icon className="w-8 h-8 text-highlight group-hover:text-foreground mb-4 transition-colors duration-300" />
                  <span className="font-heading text-lg font-bold text-foreground">{cat.name}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Past Achievements - Centered heading */}
      <section className="section-padding bg-surface-subtle">
        <div className="container-grid">
          <SectionReveal>
            <div className="text-center">
              <span className="overline-dark">Celebrating Past Research Achievements</span>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight mt-4 text-foreground">Funded Research Achievements</h2>
              <p className="mt-4 text-muted-foreground font-body max-w-2xl mx-auto">
                Over the past four years, DRG has proudly funded projects that showcase the diversity and impact of pharmaceutical research.
              </p>
            </div>
          </SectionReveal>
          <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {pastGrants.map((grant, i) => {
              const Icon = grant.icon;
              return (
                <motion.div
                  key={grant.title}
                  variants={itemVariants}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group relative bg-card rounded-sm overflow-hidden card-shadow hover:shadow-2xl transition-all duration-500"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={grant.image}
                      alt={grant.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <motion.div
                      className="absolute bottom-4 right-4"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                    >
                      <div className="w-12 h-12 rounded-full bg-highlight flex items-center justify-center shadow-lg">
                        <Icon className="w-6 h-6 text-foreground" strokeWidth={1.5} />
                      </div>
                    </motion.div>
                    <div className="absolute top-4 left-4 px-3 py-1 bg-highlight rounded-sm shadow-md">
                      <span className="text-xs font-heading font-bold text-foreground">GRANTED</span>
                    </div>
                  </div>
                  <div className="p-6 group-hover:bg-highlight transition-colors duration-300">
                    <h4 className="font-heading text-base font-bold text-foreground leading-snug line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                      {grant.title}
                    </h4>
                    <div className="mt-4 flex items-center gap-2">
                      <span className="font-heading text-xl font-bold text-foreground">{grant.amount}</span>
                      <span className="text-sm text-muted-foreground group-hover:text-foreground/60 transition-colors duration-300">ETB</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Parallax banner - already centered */}
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

      {/* Application CTA - already centered */}
      <section className="section-padding bg-surface-subtle relative overflow-hidden">
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
            <p className="mt-4 text-base md:text-lg font-body text-foreground/70 max-w-xl mx-auto">
              Applications open every January. Ethiopian healthcare professionals, researchers, and academicians are welcome to submit their proposals.
            </p>
            <Link to="/apply">
              <Button
                variant="default"
                size="lg"
                className="mt-8 transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
              >
                Start Application
              </Button>
            </Link>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Grants;