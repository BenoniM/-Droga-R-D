import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center pt-32 pb-20 px-6">
        <div className="container-grid">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-bold text-black uppercase tracking-[0.3em] mb-4 block">Error 404</span>
              
              <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tighter text-foreground mb-8">
                Page Not Found
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed mb-12 max-w-lg mx-auto">
                The page you are looking for doesn't exist or has been moved. 
                Please check the URL or return to the homepage.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" asChild className="bg-black text-white hover:bg-highlight hover:text-black transition-all duration-300 font-bold px-10 py-6 text-sm uppercase tracking-widest rounded-none min-w-[220px]">
                  <Link to="/" className="flex items-center gap-2">
                    <Home className="w-4 h-4" />
                    Back to Home
                  </Link>
                </Button>
                
                <Button variant="outline" size="lg" onClick={() => window.history.back()} className="border-black/10 hover:bg-black hover:text-white transition-all duration-300 font-bold px-10 py-6 text-sm uppercase tracking-widest rounded-none min-w-[220px]">
                  <span className="flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    Go Back
                  </span>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
