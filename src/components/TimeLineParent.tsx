import React from 'react';
import { motion } from 'motion/react';

const timelineData = [
  { date: '2020', title: 'Droga R&D Center established', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { date: '2021', title: 'First Droga Research Grant awarded', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
  { date: '2022', title: 'Drug Discovery wing launched', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse.' },
  { date: '2023', title: 'Bioequivalence Center announced', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.' },
  { date: '2024', title: 'Kilinto facility construction begins', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.' },
  { date: '2025', title: 'Medicinal Plant Nursery in Butajira', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.' },
  { date: '2026', title: 'Oil Manufacturing Plant operational', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.' },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-grow p-8">
        <h1 className="text-3xl font-semibold text-center text-gray-700 mb-12">OUR JOURNEY</h1>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200"></div>
          
          {timelineData.map((item, index) => {
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
                  <div className="bg-[#FFEB00] text-black px-4 py-2 rounded-full shadow-lg font-bold">
                    {item.date}
                  </div>
                </div>
                
                {/* Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#FFEB00] rounded-full border-4 border-white shadow"></div>
                
                {/* Content card */}
                <div className={`w-5/12 ${isEven ? '' : 'text-right'}`}>
                  <motion.div 
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="group p-6 rounded-lg shadow-md transition-all duration-300 hover:bg-[#FFEB00] cursor-pointer"
                  >
                    <h2 className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">{item.title}</h2>
                    <p className="text-gray-600 mt-4 group-hover:text-gray-800 transition-colors duration-300">{item.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </main>
      
     
    </div>
  );
}
