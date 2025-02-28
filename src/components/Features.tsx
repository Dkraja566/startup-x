
import { Check, Zap, Shield, BarChart, Cloud, Code2, Globe, Smartphone, Target, Bot, Gift, Laptop, Server, Users, Headphones, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { useRef, useState, useEffect } from "react";
import { Button } from "./ui/button";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Process data in real-time with our optimized algorithms",
    color: "text-yellow-500",
    link: "/features/performance"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption and security protocols",
    color: "text-blue-500",
    link: "/features/security"
  },
  {
    icon: BarChart,
    title: "Advanced Analytics",
    description: "Get actionable insights from your data",
    color: "text-green-500",
    link: "/features/analytics"
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    description: "Seamlessly connect with your cloud services",
    color: "text-purple-500",
    link: "/features/cloud"
  },
  {
    icon: Code2,
    title: "API Access",
    description: "Full API access for custom integrations",
    color: "text-red-500",
    link: "/features/api"
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Deploy worldwide with edge computing",
    color: "text-indigo-500",
    link: "/features/global"
  },
  {
    icon: Smartphone,
    title: "Mobile Ready",
    description: "Access your data from any device",
    color: "text-pink-500",
    link: "/features/mobile"
  },
  {
    icon: Check,
    title: "Easy Integration",
    description: "Seamlessly integrate with your existing tools",
    color: "text-teal-500",
    link: "/features/integration"
  },
  {
    icon: Bot,
    title: "AI-Powered",
    description: "Leverage machine learning for smarter decisions",
    color: "text-cyan-500",
    link: "/features/ai"
  },
  {
    icon: Gift,
    title: "Rewards Program",
    description: "Earn points and unlock exclusive benefits",
    color: "text-orange-500",
    link: "/features/rewards"
  },
  {
    icon: Laptop,
    title: "Cross-Platform",
    description: "Work seamlessly across all your devices",
    color: "text-emerald-500",
    link: "/features/cross-platform"
  },
  {
    icon: Server,
    title: "Reliable Infrastructure",
    description: "99.99% uptime guarantee with redundant systems",
    color: "text-violet-500",
    link: "/features/infrastructure"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work together efficiently with built-in tools",
    color: "text-amber-500",
    link: "/features/collaboration"
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Get help anytime with our dedicated team",
    color: "text-lime-500",
    link: "/features/support"
  },
  {
    icon: Target,
    title: "Custom Goals",
    description: "Set and track your business objectives",
    color: "text-rose-500",
    link: "/features/goals"
  },
  {
    icon: Rocket,
    title: "Quick Setup",
    description: "Get started in minutes, not hours",
    color: "text-fuchsia-500",
    link: "/features/setup"
  }
];

export const Features = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftGradient, setShowLeftGradient] = useState(false);
  const [showRightGradient, setShowRightGradient] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);
  const [touchEnabled, setTouchEnabled] = useState(false);

  // Detect touch capability
  useEffect(() => {
    setTouchEnabled('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  // Initialize slider on first render
  useEffect(() => {
    if (!isInitialized && scrollContainerRef.current) {
      // Force a recalculation of layout
      setTimeout(() => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollLeft = 0;
          checkScrollPosition();
          setIsInitialized(true);
        }
      }, 100);
    }
  }, [isInitialized]);

  // Check scroll position to update gradient visibility
  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftGradient(scrollLeft > 20);
      setShowRightGradient(scrollLeft < scrollWidth - clientWidth - 20);
    }
  };

  // Add event listener to update gradients on scroll
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      // Use passive event listener for better performance
      scrollContainer.addEventListener('scroll', checkScrollPosition, { passive: true });
      
      // Initialize gradients
      checkScrollPosition();
      
      return () => {
        scrollContainer.removeEventListener('scroll', checkScrollPosition);
      };
    }
  }, []);

  // Enhanced fix for horizontal overflow on initial load
  useEffect(() => {
    const fixOverflowOnLoad = () => {
      // Apply to container elements
      document.documentElement.style.overflowX = 'hidden';
      document.body.style.overflowX = 'hidden';
      
      if (scrollContainerRef.current) {
        // Reset the scroll position to 0 initially
        scrollContainerRef.current.scrollLeft = 0;
      }
      
      // Set up delayed checks to ensure layout is complete
      const timeouts = [
        setTimeout(() => checkScrollPosition(), 200),
        setTimeout(() => checkScrollPosition(), 500),
        setTimeout(() => checkScrollPosition(), 1000),
        setTimeout(() => {
          document.documentElement.style.overflowX = '';
          document.body.style.overflowX = '';
          checkScrollPosition();
        }, 2000)
      ];
      
      return () => {
        timeouts.forEach(clearTimeout);
        document.documentElement.style.overflowX = '';
        document.body.style.overflowX = '';
      };
    };
    
    fixOverflowOnLoad();
  }, []);

  const handleFeatureClick = (feature: typeof features[0]) => {
    toast({
      title: `Exploring ${feature.title}`,
      description: "Taking you to feature details...",
      duration: 2000,
    });
    navigate(feature.link);
  };

  // Improved smooth scroll function
  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.querySelector('div')?.clientWidth || 300;
      const scrollAmount = direction === "left" ? -cardWidth * 1.5 : cardWidth * 1.5;
      
      // Smoother scroll with animation
      const currentScroll = container.scrollLeft;
      const targetScroll = currentScroll + scrollAmount;
      
      // Use enhanced smooth scrolling with better easing
      smoothScroll(container, currentScroll, targetScroll, 500);
    }
  };

  // Enhanced smooth scroll function with easing
  const smoothScroll = (element: HTMLElement, start: number, end: number, duration: number) => {
    const startTime = performance.now();
    let animationFrame: number;
    
    const animateScroll = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      
      if (elapsedTime > duration) {
        element.scrollLeft = end;
        return;
      }
      
      // Enhanced easing function for smoother motion
      const progress = elapsedTime / duration;
      
      // Use custom easing curve for more natural feel
      // This creates a smooth acceleration and deceleration
      const easeProgress = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      
      element.scrollLeft = start + (end - start) * easeProgress;
      animationFrame = requestAnimationFrame(animateScroll);
    };
    
    animationFrame = requestAnimationFrame(animateScroll);
    
    // Clean up function to cancel animation if needed
    return () => cancelAnimationFrame(animationFrame);
  };

  // Enhanced mouse down event handler for drag scrolling
  const handleMouseDown = (e: React.MouseEvent) => {
    if (touchEnabled) return; // Skip for touch devices to avoid conflicts
    if (scrollContainerRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
      setScrollLeft(scrollContainerRef.current.scrollLeft);
      
      // Change cursor style to indicate dragging
      document.body.style.cursor = 'grabbing';
      if (scrollContainerRef.current) {
        scrollContainerRef.current.style.cursor = 'grabbing';
      }
    }
  };

  // Enhanced mouse move event handler for drag scrolling
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || touchEnabled) return;
    e.preventDefault();
    
    if (scrollContainerRef.current) {
      const x = e.pageX - scrollContainerRef.current.offsetLeft;
      // Use a dynamic multiplier for more responsive feeling
      const sensitivity = 1.75;
      const walk = (x - startX) * sensitivity;
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  // Enhanced mouse up/leave event handler
  const handleMouseUp = () => {
    setIsDragging(false);
    document.body.style.cursor = '';
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = '';
    }
  };

  // Enhanced touch event handlers with better inertia
  const handleTouchStart = (e: React.TouchEvent) => {
    if (scrollContainerRef.current) {
      setIsDragging(true);
      setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
      setScrollLeft(scrollContainerRef.current.scrollLeft);
      
      // Prevent default for touch events to avoid page scrolling
      // but allow scrolling within the container
      if (e.cancelable) e.preventDefault();
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    
    // Prevent default to stop page scrolling while dragging
    if (e.cancelable) e.preventDefault();
    
    if (scrollContainerRef.current) {
      const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
      // Lower sensitivity for touch for better control
      const sensitivity = 1.5;
      const walk = (x - startX) * sensitivity;
      
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setIsDragging(false);
    
    // Add inertia effect on touch end
    if (scrollContainerRef.current && e.changedTouches && e.changedTouches.length) {
      // No additional inertia needed as native scroll momentum will take over
    }
  };

  return (
    <section className="py-12 md:py-24 bg-background overflow-hidden">
      <div className="container px-4 md:px-6 max-w-full md:max-w-[1200px] mx-auto">
        <div className="text-center space-y-4 mb-8 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-[800px] mx-auto px-4"
          >
            <h2 className="text-2xl md:text-4xl font-bold tracking-tighter">
              Features that set us apart
            </h2>
            <p className="mt-4 text-sm md:text-lg text-muted-foreground hover:text-foreground transition-colors duration-300">
              Discover how our platform can revolutionize your workflow with powerful features designed for modern businesses.
            </p>
          </motion.div>
        </div>

        <div className="relative mt-8 md:mt-16">
          {/* Scroll buttons - removed violet accents */}
          <div className="hidden md:block">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 rounded-full shadow-lg bg-background/90 backdrop-blur-sm hover:bg-accent transition-all duration-300 ${showLeftGradient ? 'opacity-90' : 'opacity-0'}`}
            >
              ←
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 rounded-full shadow-lg bg-background/90 backdrop-blur-sm hover:bg-accent transition-all duration-300 ${showRightGradient ? 'opacity-90' : 'opacity-0'}`}
            >
              →
            </Button>
          </div>

          {/* Enhanced scrollable container with better touch handling */}
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto no-scrollbar pb-8 -mx-4 px-4 snap-x snap-mandatory"
            style={{
              scrollBehavior: touchEnabled ? 'auto' : 'smooth', // Use native scroll for touch devices, smooth for mouse
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
              cursor: isDragging ? 'grabbing' : 'grab'
            }}
            onScroll={checkScrollPosition}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="flex gap-4 md:gap-6 px-4 min-w-max">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                  onClick={() => handleFeatureClick(feature)}
                  className="relative flex-shrink-0 w-[280px] md:w-[300px] group p-4 md:p-6 bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-border hover:border-accent/60 snap-start"
                >
                  {/* Removed violet gradient overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-accent/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Icon with simplified hover effect */}
                  <div className="relative">
                    <feature.icon 
                      className={`h-8 w-8 md:h-12 md:w-12 mb-4 ${feature.color} group-hover:scale-110 transition-transform duration-300`} 
                    />
                  </div>
                  
                  {/* Title with simplified hover */}
                  <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 group-hover:text-foreground transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-sm md:text-base text-muted-foreground group-hover:text-foreground transition-colors">
                    {feature.description}
                  </p>
                  
                  {/* Arrow indicator without violet */}
                  <motion.div
                    className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    whileHover={{ scale: 1.2, x: -2 }}
                  >
                    <span className="text-foreground text-lg">→</span>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Gradient overlays without violet tint */}
          <div 
            className={`absolute inset-y-0 left-0 w-12 md:w-20 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none z-10 transition-opacity duration-300 ${showLeftGradient ? 'opacity-100' : 'opacity-0'}`} 
          />
          <div 
            className={`absolute inset-y-0 right-0 w-12 md:w-20 bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none z-10 transition-opacity duration-300 ${showRightGradient ? 'opacity-100' : 'opacity-0'}`} 
          />
        </div>
      </div>
      
      <style>
        {`
        .no-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        `}
      </style>
    </section>
  );
};
