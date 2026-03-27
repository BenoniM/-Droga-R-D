import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ResearchCardProps {
  category: string;
  title: string;
  description: string;
  index?: number;
}

const ResearchCard = ({ category, title, description, index = 0 }: ResearchCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="group relative bg-card p-8 md:p-10 min-h-[360px] flex flex-col justify-between card-shadow hover:bg-highlight border-t-4 border-transparent hover:border-foreground transition-all duration-300 rounded-sm cursor-pointer overflow-hidden"
    >
      <div>
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground group-hover:text-foreground/60 transition-colors duration-300">{category}</span>
        <h3 className="font-heading text-2xl md:text-3xl font-bold mt-4 text-foreground">{title}</h3>
        <p className="mt-4 text-base font-body text-muted-foreground group-hover:text-foreground/70 leading-relaxed line-clamp-3 transition-colors duration-300">{description}</p>
      </div>
      <div className="mt-8 flex items-center gap-2 font-heading font-medium text-sm text-foreground">
        Learn More
        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
      </div>
      {/* Subtle shine on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-tr from-transparent via-background/5 to-transparent" />
    </motion.div>
  );
};

export default ResearchCard;
