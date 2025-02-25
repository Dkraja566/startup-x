
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

export const Hero = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleGetStarted = () => {
    navigate('/signup');
    toast({
      title: "Let's get started!",
      description: "Welcome to your journey with us.",
      duration: 2000,
    });
  };

  const handleWatchDemo = () => {
    navigate('/demo');
    toast({
      title: "Demo loading...",
      description: "Preparing your demo experience.",
      duration: 2000,
    });
  };

  return (
    <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/10 pointer-events-none" />
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center gap-8 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 font-medium bg-primary/10 text-primary rounded-full hover:bg-primary/20 hover:scale-105 transition-all duration-300"
          >
            Welcome in my company
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter"
          >
            Transform Your Business with
            <span className="text-primary block mt-2 hover:scale-105 transition-transform duration-300"> 
              AI-Powered Insights
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-[600px] text-muted-foreground md:text-xl hover:text-foreground transition-colors duration-300"
          >
            Harness the power of artificial intelligence to streamline your workflow and make data-driven decisions.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button 
              size="lg" 
              className="rounded-full group hover:scale-105 transition-all duration-300"
              onClick={handleGetStarted}
            >
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full group hover:scale-105 transition-all duration-300"
              onClick={handleWatchDemo}
            >
              <Play className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
              Watch Demo
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex items-center gap-4 text-sm text-muted-foreground mt-8 group"
          >
            <div className="flex -space-x-4">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=128&h=128&fit=crop"
                alt="Customer" 
                className="w-10 h-10 rounded-full border-2 border-background hover:scale-110 transition-transform duration-300"
              />
              <img 
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=128&h=128&fit=crop"
                alt="Customer" 
                className="w-10 h-10 rounded-full border-2 border-background hover:scale-110 transition-transform duration-300"
              />
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&fit=crop"
                alt="Customer" 
                className="w-10 h-10 rounded-full border-2 border-background hover:scale-110 transition-transform duration-300"
              />
              <img 
                src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=128&h=128&fit=crop"
                alt="Customer" 
                className="w-10 h-10 rounded-full border-2 border-background hover:scale-110 transition-transform duration-300"
              />
            </div>
            <p className="group-hover:text-foreground transition-colors duration-300">
              <span className="font-semibold text-foreground">2,000+</span> happy customers
            </p>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
      </div>
    </section>
  );
};
