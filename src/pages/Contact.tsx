import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", company: "", email: "", phone: "", industry: "", requirements: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section - Left aligned */}
      <section className="pt-32 pb-20 px-6 bg-highlight relative overflow-hidden">
        <div className="container-grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-left"
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-foreground/60">Get in Touch</span>
            <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tighter text-foreground mt-4">
              Contact Us
            </h1>
            <p className="mt-6 text-lg text-foreground/70 max-w-md font-body leading-relaxed">
              Tell us your requirements and we'll craft a custom solution.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-grid grid grid-cols-1 lg:grid-cols-2 gap-16">
          <SectionReveal>
            <span className="overline-dark">Reach Out</span>
            <h2 className="font-heading text-3xl font-semibold tracking-tight mt-4 text-foreground">
              Need a Quote for Our Services?
            </h2>
            <p className="mt-6 text-lg font-body text-muted-foreground leading-relaxed">
              Tell us your requirements, and we'll get back to you with a custom solution tailored to your research and analytical needs.
            </p>

            <div className="mt-12 space-y-8">
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-highlight mt-1 shrink-0" />
                <div>
                  <h4 className="font-heading text-sm font-bold text-foreground">Email</h4>
                  <p className="text-sm text-muted-foreground mt-1">rnd1@drogapharma.com</p>
                  <p className="text-sm text-muted-foreground">info@drogapharma.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-highlight mt-1 shrink-0" />
                <div>
                  <h4 className="font-heading text-sm font-bold text-foreground">Location</h4>
                  <p className="text-sm text-muted-foreground mt-1">Abuare, Woreda 07, Infront of Woreda 08 Youth Center</p>
                  <p className="text-sm text-muted-foreground">Arada Sub City, Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>

            <div className="mt-12 aspect-[16/9] bg-surface-subtle rounded-sm overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5!2d38.74!3d9.03!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDInMDAuMCJOIDM4wrA0NCcwMC4wIkU!5e0!3m2!1sen!2set!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Droga R&D Location"
              />
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="p-8 md:p-10 bg-surface-subtle rounded-sm">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-8">Send Us a Message</h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs font-heading font-bold uppercase tracking-widest text-muted-foreground mb-2">Full Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full h-12 px-4 bg-background border border-border rounded-sm text-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-highlight transition-all" placeholder="Your full name" />
                </div>
                <div>
                  <label className="block text-xs font-heading font-bold uppercase tracking-widest text-muted-foreground mb-2">Company</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full h-12 px-4 bg-background border border-border rounded-sm text-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-highlight transition-all" placeholder="Your company" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-widest text-muted-foreground mb-2">Your Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full h-12 px-4 bg-background border border-border rounded-sm text-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-highlight transition-all" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-widest text-muted-foreground mb-2">Your Phone</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full h-12 px-4 bg-background border border-border rounded-sm text-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-highlight transition-all" placeholder="+251..." />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-heading font-bold uppercase tracking-widest text-muted-foreground mb-2">Your Industry</label>
                  <select name="industry" value={formData.industry} onChange={handleChange} className="w-full h-12 px-4 bg-background border border-border rounded-sm text-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-highlight transition-all">
                    <option value="">Select your industry</option>
                    <option value="pharmaceutical">Pharmaceutical</option>
                    <option value="academic">Academic/Research</option>
                    <option value="regulatory">Regulatory</option>
                    <option value="food">Food & Beverage</option>
                    <option value="cosmetics">Cosmetics</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-heading font-bold uppercase tracking-widest text-muted-foreground mb-2">Share detailed Requirements</label>
                  <textarea name="requirements" value={formData.requirements} onChange={handleChange} rows={5} className="w-full px-4 py-3 bg-background border border-border rounded-sm text-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-highlight transition-all resize-none" placeholder="Share your detailed requirements..." />
                </div>
                <Button variant="hero" size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;