import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", company: "", email: "", phone: "", industry: "", requirements: "" });
  const [activeInput, setActiveInput] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-highlight selection:text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 md:px-12 lg:px-20 bg-surface-dark text-white relative overflow-hidden flex flex-col justify-center min-h-[50vh]">
        {/* Abstract background element */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-highlight rounded-full opacity-[0.03] blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-highlight rounded-full opacity-[0.02] blur-3xl -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
        
        <div className="container-grid relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-highlight"></span>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/70">Get in Touch</span>
            </div>
            <h1 className="font-heading text-7xl font-bold tracking-tighter leading-[0.9] text-white">
              Let's Build <br/><span className="text-highlight">Something</span> Together.
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 lg:px-20">
        <div className="container-grid max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Contact Information (Left) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <SectionReveal>
                <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-8">
                  We'd love to hear from you.
                </h2>
                <p className="text-lg font-body text-muted-foreground leading-relaxed mb-16 max-w-md">
                  Whether you have a question about our services, need a custom quote, or want to explore a partnership, our team is ready to answer all your questions.
                </p>

                <div className="space-y-12">
                  <div className="group flex items-start gap-6">
                    <div className="w-12 h-12 rounded-full bg-surface-subtle flex items-center justify-center shrink-0 group-hover:bg-highlight group-hover:text-black transition-colors duration-500">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading text-sm font-bold uppercase tracking-widest text-foreground mb-2">Email Us</h4>
                      <a href="mailto:rnd1@drogapharma.com" className="block text-lg hover:text-highlight transition-colors">rnd1@drogapharma.com</a>
                      <a href="mailto:info@drogapharma.com" className="block text-lg hover:text-highlight transition-colors">info@drogapharma.com</a>
                    </div>
                  </div>

                  <div className="group flex items-start gap-6">
                    <div className="w-12 h-12 rounded-full bg-surface-subtle flex items-center justify-center shrink-0 group-hover:bg-highlight group-hover:text-black transition-colors duration-500">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading text-sm font-bold uppercase tracking-widest text-foreground mb-2">Call Us</h4>
                      <a href="tel:+251111234567" className="block text-lg hover:text-highlight transition-colors">+251 11 123 4567</a>
                    </div>
                  </div>

                  <div className="group flex items-start gap-6">
                    <div className="w-12 h-12 rounded-full bg-surface-subtle flex items-center justify-center shrink-0 group-hover:bg-highlight group-hover:text-black transition-colors duration-500">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading text-sm font-bold uppercase tracking-widest text-foreground mb-2">Visit Us</h4>
                      <p className="text-lg leading-relaxed text-muted-foreground">
                        Abuare, Woreda 07,<br />
                        Infront of Woreda 08 Youth Center<br />
                        Arada Sub City, Addis Ababa, Ethiopia
                      </p>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            </div>

            {/* Form (Right) */}
            <div className="lg:col-span-7">
              <SectionReveal delay={0.2}>
                <div className="bg-white p-8 md:p-12 lg:p-16 border border-border/50 rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden">
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-highlight/10 rounded-bl-[100px] -z-10 pointer-events-none"></div>
                  
                  <h3 className="font-heading text-3xl font-bold mb-10">Send a Message</h3>
                  
                  <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Name */}
                      <div className="relative">
                        <input 
                          type="text" 
                          name="name" 
                          id="name"
                          value={formData.name} 
                          onChange={handleChange} 
                          onFocus={() => setActiveInput('name')}
                          onBlur={() => setActiveInput(null)}
                          className="peer w-full bg-transparent border-0 border-b-2 border-border py-3 text-base text-foreground focus:ring-0 focus:outline-none focus:border-black transition-colors" 
                          placeholder=" " 
                        />
                        <label htmlFor="name" className="absolute left-0 top-3 text-muted-foreground text-base transition-all peer-focus:-top-5 peer-focus:text-xs peer-focus:text-black peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-[:not(:placeholder-shown)]:-top-5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:font-bold peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-widest cursor-text">
                          Full Name
                        </label>
                        <motion.span 
                          className="absolute bottom-0 left-0 h-[2px] bg-highlight z-10" 
                          initial={{ width: '0%' }}
                          animate={{ width: activeInput === 'name' ? '100%' : '0%' }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>

                      {/* Company */}
                      <div className="relative">
                        <input 
                          type="text" 
                          name="company" 
                          id="company"
                          value={formData.company} 
                          onChange={handleChange} 
                          onFocus={() => setActiveInput('company')}
                          onBlur={() => setActiveInput(null)}
                          className="peer w-full bg-transparent border-0 border-b-2 border-border py-3 text-base text-foreground focus:ring-0 focus:outline-none focus:border-black transition-colors" 
                          placeholder=" " 
                        />
                        <label htmlFor="company" className="absolute left-0 top-3 text-muted-foreground text-base transition-all peer-focus:-top-5 peer-focus:text-xs peer-focus:text-black peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-[:not(:placeholder-shown)]:-top-5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:font-bold peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-widest cursor-text">
                          Company
                        </label>
                        <motion.span 
                          className="absolute bottom-0 left-0 h-[2px] bg-highlight z-10" 
                          initial={{ width: '0%' }}
                          animate={{ width: activeInput === 'company' ? '100%' : '0%' }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Email */}
                      <div className="relative">
                        <input 
                          type="email" 
                          name="email" 
                          id="email"
                          value={formData.email} 
                          onChange={handleChange} 
                          onFocus={() => setActiveInput('email')}
                          onBlur={() => setActiveInput(null)}
                          className="peer w-full bg-transparent border-0 border-b-2 border-border py-3 text-base text-foreground focus:ring-0 focus:outline-none focus:border-black transition-colors" 
                          placeholder=" " 
                        />
                        <label htmlFor="email" className="absolute left-0 top-3 text-muted-foreground text-base transition-all peer-focus:-top-5 peer-focus:text-xs peer-focus:text-black peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-[:not(:placeholder-shown)]:-top-5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:font-bold peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-widest cursor-text">
                          Email Address
                        </label>
                        <motion.span 
                          className="absolute bottom-0 left-0 h-[2px] bg-highlight z-10" 
                          initial={{ width: '0%' }}
                          animate={{ width: activeInput === 'email' ? '100%' : '0%' }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>

                      {/* Phone */}
                      <div className="relative">
                        <input 
                          type="tel" 
                          name="phone" 
                          id="phone"
                          value={formData.phone} 
                          onChange={handleChange} 
                          onFocus={() => setActiveInput('phone')}
                          onBlur={() => setActiveInput(null)}
                          className="peer w-full bg-transparent border-0 border-b-2 border-border py-3 text-base text-foreground focus:ring-0 focus:outline-none focus:border-black transition-colors" 
                          placeholder=" " 
                        />
                        <label htmlFor="phone" className="absolute left-0 top-3 text-muted-foreground text-base transition-all peer-focus:-top-5 peer-focus:text-xs peer-focus:text-black peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-[:not(:placeholder-shown)]:-top-5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:font-bold peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-widest cursor-text">
                          Phone Number
                        </label>
                        <motion.span 
                          className="absolute bottom-0 left-0 h-[2px] bg-highlight z-10" 
                          initial={{ width: '0%' }}
                          animate={{ width: activeInput === 'phone' ? '100%' : '0%' }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </div>

                    {/* Industry */}
                    <div className="relative pt-2">
                      <label htmlFor="industry" className="block text-xs font-heading font-bold uppercase tracking-widest text-black mb-2">Industry</label>
                      <select 
                        name="industry" 
                        id="industry"
                        value={formData.industry} 
                        onChange={handleChange} 
                        className="w-full bg-transparent border-0 border-b-2 border-border py-3 text-base text-foreground focus:ring-0 focus:outline-none focus:border-black transition-colors appearance-none cursor-pointer"
                      >
                        <option value="" disabled hidden>Select your industry</option>
                        <option value="pharmaceutical">Pharmaceutical</option>
                        <option value="academic">Academic/Research</option>
                        <option value="regulatory">Regulatory</option>
                        <option value="food">Food & Beverage</option>
                        <option value="cosmetics">Cosmetics</option>
                        <option value="other">Other</option>
                      </select>
                      {/* Custom dropdown arrow */}
                      <div className="absolute right-0 top-10 pointer-events-none">
                        <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>

                    {/* Requirements */}
                    <div className="relative pt-4">
                      <textarea 
                        name="requirements" 
                        id="requirements"
                        value={formData.requirements} 
                        onChange={handleChange} 
                        onFocus={() => setActiveInput('requirements')}
                        onBlur={() => setActiveInput(null)}
                        rows={4} 
                        className="peer w-full bg-transparent border-0 border-b-2 border-border py-3 text-base text-foreground focus:ring-0 focus:outline-none focus:border-black transition-colors resize-none" 
                        placeholder=" " 
                      />
                      <label htmlFor="requirements" className="absolute left-0 top-7 text-muted-foreground text-base transition-all peer-focus:top-0 peer-focus:text-xs peer-focus:text-black peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:font-bold peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-widest cursor-text">
                        How can we help?
                      </label>
                      <motion.span 
                        className="absolute bottom-[4px] left-0 h-[2px] bg-highlight z-10" 
                        initial={{ width: '0%' }}
                        animate={{ width: activeInput === 'requirements' ? '100%' : '0%' }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>

                    <div className="pt-4">
                      <Button 
                        variant="default" 
                        size="lg" 
                        className="w-full md:w-auto px-8 py-6 text-base group bg-black text-white hover:bg-highlight hover:text-black transition-all duration-300 rounded-full"
                      >
                        Send Message
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </form>
                </div>
              </SectionReveal>
            </div>
            
          </div>
        </div>
      </section>

      {/* Full width map section */}
      <section className="relative h-[60vh] w-full mt-10">
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_20px_40px_rgba(0,0,0,0.05)] z-10"></div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5!2d38.74!3d9.03!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDInMDAuMCJOIDM4wrA0NCcwMC4wIkU!5e0!3m2!1sen!2set!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(0.8) contrast(1.2)' }}
          allowFullScreen
          loading="lazy"
          title="Droga R&D Location"
          className="w-full h-full object-cover"
        />
        {/* Overlay map badge */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:left-20 md:translate-x-0 bg-white p-6 rounded-2xl shadow-2xl z-20 max-w-sm w-[calc(100%-4rem)] md:w-auto">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-10 h-10 rounded-full bg-highlight flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-black" />
            </div>
            <h4 className="font-heading font-bold text-lg">Headquarters</h4>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Abuare, Woreda 07, Infront of Woreda 08 Youth Center, Arada Sub City, Addis Ababa.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;