import { Features as FeaturesSection } from "@/components/Features";
import { Navbar } from "@/components/Navbar";
import { useEffect } from "react";

const Features = () => {
  // Add component-level fix for initial horizontal scroll
  useEffect(() => {
    // Immediately set overflow hidden on mount
    document.documentElement.style.overflowX = 'hidden';
    document.body.style.overflowX = 'hidden';
    
    // Keep it hidden for a longer period on the features page to ensure layout is complete
    const timeout = setTimeout(() => {
      document.documentElement.style.overflowX = '';
      document.body.style.overflowX = '';
    }, 2000);
    
    return () => {
      clearTimeout(timeout);
      document.documentElement.style.overflowX = '';
      document.body.style.overflowX = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <div className="pt-16 overflow-x-hidden">
        <FeaturesSection />
      </div>
    </div>
  );
};

export default Features;
