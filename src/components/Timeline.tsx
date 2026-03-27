import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItem {
  date: string;
  title: string;
  description: string;
}

interface TimelineProps {
  data: TimelineItem[];
}

export const Timeline: React.FC<TimelineProps> = ({ data }) => {
  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Vertical line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200"></div>
      
      {data.map((item, index) => {
        const isEven = index % 2 === 0;
        return (
          <motion.div 
            key={index} 
            className={`relative flex items-center justify-between mb-12 ${isEven ? '' : 'flex-row-reverse'}`}
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Date marker */}
            <div className={`w-5/12 flex ${isEven ? 'justify-end' : 'justify-start'}`}>
              <div className="bg-highlight text-black px-4 py-2 rounded-full shadow-lg font-bold">
                {item.date}
              </div>
            </div>
            
            {/* Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-highlight rounded-full border-4 border-white shadow"></div>
            
            {/* Content card */}
            <div className={`w-5/12 ${isEven ? '' : 'text-right'}`}>
              <motion.div 
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:bg-highlight cursor-pointer"
              >
                <h2 className="text-xl font-bold text-gray-800 group-hover:text-black transition-colors duration-300">{item.title}</h2>
                <p className="text-gray-600 mt-4 group-hover:text-black/70 transition-colors duration-300">{item.description}</p>
              </motion.div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};