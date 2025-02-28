
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
  const [dragStartTime, setDragStartTime] = useState(0);
  const [isDragMomentum, setIsDragMomentum] = useState(false);
  const [lastDragPosition, setLastDragPosition] = useState(0);
  const [dragVelocity, setDragVelocity] = useState(0);

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

  // Effect for applying momentum scrolling
  useEffect(() => {
    if (isDragMomentum && dragVelocity !== 0 && scrollContainerRef.current) {
      let momentumScrollId: number;
      const startTime = performance.now();
      const initialVelocity = dragVelocity;
      const initialScrollLeft = scrollContainerRef.current.scrollLeft;
      
      const applyMomentum = (timestamp: number) => {
        const elapsed = timestamp - startTime;
        // Deceleration factor - higher values stop the momentum faster
        const deceleration = 0.95;
        // Calculate current velocity with exponential decay
        const currentVelocity = initialVelocity * Math.pow(deceleration, elapsed / 16);
        
        if (Math.abs(currentVelocity) < 0.5 || !scrollContainerRef.current) {
          setIsDragMomentum(false);
          return;
        }
        
        // Apply the velocity to scrollLeft
        scrollContainerRef.current.scrollLeft -= currentVelocity;
        
        // Continue momentum
        momentumScrollId = requestAnimationFrame(applyMomentum);
      };
      
      momentumScrollId = requestAnimationFrame(applyMomentum);
      
      return () => {
        cancelAnimationFrame(momentumScrollId);
      };
    }
  }, [isDragMomentum, dragVelocity]);

  const handleFeatureClick = (feature: typeof features[0]) => {
    // Only navigate if not dragging
    if (!isDragging && !isDragMomentum) {
      toast({
        title: `Exploring ${feature.title}`,
        description: "Taking you to feature details...",
        duration: 2000,
      });
      navigate(feature.link);
    }
  };

  // Improved smooth scroll function with adaptive scroll amount
  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      
      // Calculate the optimal scroll amount based on container width
      const containerWidth = container.clientWidth;
      const cardWidth = container.querySelector('div')?.clientWidth || 300;
      
      // Calculate how many cards can fit in the view
      const cardsInView = Math.floor(containerWidth / cardWidth);
      
      // Scroll by slightly less than a full page for better context
      const scrollAmount = direction === "left" 
        ? -cardWidth * Math.max(1, cardsInView - 0.5) 
        : cardWidth * Math.max(1, cardsInView - 0.5);
      
      // Smoother scroll with animation
      const currentScroll = container.scrollLeft;
      const targetScroll = currentScroll + scrollAmount;
      
      // Use enhanced smooth scrolling with better easing
      smoothScroll(container, currentScroll, targetScroll, 600);
    }
  };

  // Enhanced smooth scroll function with improved easing
  const smoothScroll = (element: HTMLElement, start: number, end: number, duration: number) => {
    const startTime = performance.now();
    let animationFrame: number;
    
    const animateScroll = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      
      if (elapsedTime > duration) {
        element.scrollLeft = end;
        checkScrollPosition();
        return;
      }
      
      // Use a more sophisticated easing curve for smoother acceleration/deceleration
      const progress = elapsedTime / duration;
      
      // Custom easing function - slightly modified for more responsive feel at start
      // Uses a custom bezier curve approximation
      let easeProgress: number;
      
      if (progress < 0.4) {
        // Faster acceleration at the beginning
        easeProgress = 2.5 * Math.pow(progress, 2);
      } else if (progress < 0.65) {
        // Maintain speed in the middle
        easeProgress = 0.7 + (progress - 0.4) * 0.75;
      } else {
        // Gentle deceleration at the end
        easeProgress = 0.89 + (1 - Math.pow(1 - progress, 3)) * 0.11;
      }
      
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
      setIsDragMomentum(false);
      setDragStartTime(performance.now());
      setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
      setScrollLeft(scrollContainerRef.current.scrollLeft);
      setLastDragPosition(e.pageX);
      
      // Change cursor style to indicate dragging
      document.body.style.cursor = 'grabbing';
      if (scrollContainerRef.current) {
        scrollContainerRef.current.style.cursor = 'grabbing';
      }
    }
  };

  // Enhanced mouse move event handler for drag scrolling with velocity tracking
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || touchEnabled) return;
    e.preventDefault();
    
    if (scrollContainerRef.current) {
      const x = e.pageX - scrollContainerRef.current.offsetLeft;
      
      // Calculate velocity for momentum scrolling
      const now = performance.now();
      const elapsed = now - dragStartTime;
      if (elapsed > 0) {
        const deltaX = e.pageX - lastDragPosition;
        // Adjust velocity by time elapsed for consistent experience across frame rates
        const newVelocity = deltaX * (16 / Math.max(10, elapsed)); // normalize to ~60fps equivalent
        
        // Use exponential moving average for smoother velocity changes
        setDragVelocity(prev => prev * 0.7 + newVelocity * 0.3);
        
        // Update tracking values
        setDragStartTime(now);
        setLastDragPosition(e.pageX);
      }
      
      // Use a dynamic multiplier for more responsive feeling
      // Slower for precision at low speeds, faster for long movements
      const deltaX = x - startX;
      const sensitivity = Math.min(2.5, 1 + Math.abs(deltaX) / 500);
      const walk = deltaX * sensitivity;
      
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  // Enhanced mouse up/leave event handler with momentum
  const handleMouseUp = () => {
    if (isDragging && Math.abs(dragVelocity) > 0.5) {
      // Apply momentum only if there was significant velocity
      setIsDragMomentum(true);
    } else {
      setIsDragMomentum(false);
    }
    
    setIsDragging(false);
    document.body.style.cursor = '';
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = '';
    }
  };

  // Enhanced touch event handlers with improved inertia
  const handleTouchStart = (e: React.TouchEvent) => {
    if (scrollContainerRef.current) {
      setIsDragging(true);
      setIsDragMomentum(false);
      setDragStartTime(performance.now());
      setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
      setScrollLeft(scrollContainerRef.current.scrollLeft);
      setLastDragPosition(e.touches[0].pageX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    
    if (scrollContainerRef.current) {
      const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
      
      // Calculate velocity for momentum scrolling
      const now = performance.now();
      const elapsed = now - dragStartTime;
      if (elapsed > 0) {
        const deltaX = e.touches[0].pageX - lastDragPosition;
        // Adjust velocity by time elapsed for consistent experience
        const newVelocity = deltaX * (16 / Math.max(10, elapsed));
        
        // Use exponential moving average for smoother velocity changes
        setDragVelocity(prev => prev * 0.7 + newVelocity * 0.3);
        
        // Update tracking values
        setDragStartTime(now);
        setLastDragPosition(e.touches[0].pageX);
      }
      
      // Use an adaptive sensitivity based on how far the finger has moved
      const deltaX = x - startX;
      // Lower base sensitivity for touch for better control
      // but scale up for longer movements for easier long-distance scrolling
      const sensitivity = Math.min(1.8, 1.2 + Math.abs(deltaX) / 800);
      const walk = deltaX * sensitivity;
      
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchEnd = () => {
    // On mobile, we rely more on the browser's native momentum scrolling
    // but we still apply a bit of our custom momentum for a consistent experience
    if (isDragging && Math.abs(dragVelocity) > 1.0) {
      setIsDragMomentum(true);
    } else {
      setIsDragMomentum(false);
    }
    
    setIsDragging(false);
  };

  // Responsive grid layout configuration
  const getCardWidth = () => {
    // Adjust card width based on viewport
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width < 640) return 'w-[260px]'; // Smaller on phones
      if (width < 768) return 'w-[280px]'; // Small tablets
      if (width < 1024) return 'w-[300px]'; // Larger tablets
      return 'w-[320px]'; // Desktops
    }
    return 'w-[280px]'; // Default
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
          {/* Scroll buttons with improved positioning and visibility */}
          <div className="hidden md:block">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              className={`absolute -left-2 top-1/2 -translate-y-1/2 z-20 rounded-full shadow-lg bg-background/90 backdrop-blur-sm hover:bg-accent transition-all duration-300 ${showLeftGradient ? 'opacity-90' : 'opacity-0'}`}
              aria-label="Scroll left"
            >
              ←
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              className={`absolute -right-2 top-1/2 -translate-y-1/2 z-20 rounded-full shadow-lg bg-background/90 backdrop-blur-sm hover:bg-accent transition-all duration-300 ${showRightGradient ? 'opacity-90' : 'opacity-0'}`}
              aria-label="Scroll right"
            >
              →
            </Button>
          </div>

          {/* Enhanced scrollable container with improved touch handling */}
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto no-scrollbar pb-8 -mx-4 px-4 snap-x snap-proximity lg:snap-mandatory"
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
                  transition={{ 
                    duration: 0.3,
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }}
                  viewport={{ once: true, margin: "-10%" }}
                  onClick={() => handleFeatureClick(feature)}
                  className={`relative flex-shrink-0 ${getCardWidth()} group p-4 md:p-6 bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-border hover:border-accent/60 snap-start`}
                >
                  {/* Improved gradient overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-accent/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Icon with improved hover effect */}
                  <div className="relative mb-4">
                    <feature.icon 
                      className={`h-8 w-8 md:h-12 md:w-12 ${feature.color} transition-all duration-300 group-hover:scale-110`} 
                    />
                  </div>
                  
                  {/* Title with improved hover effect */}
                  <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 group-hover:text-foreground transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  {/* Description with improved hover effect */}
                  <p className="text-sm md:text-base text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {feature.description}
                  </p>
                  
                  {/* Improved arrow indicator with better animation */}
                  <motion.div
                    className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    initial={{ x: -5, opacity: 0 }}
                    whileHover={{ scale: 1.2, x: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                  >
                    <span className="text-foreground text-lg">→</span>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Improved gradient overlays */}
          <div 
            className={`absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-background via-background/90 to-transparent pointer-events-none z-10 transition-opacity duration-300 ${showLeftGradient ? 'opacity-100' : 'opacity-0'}`} 
          />
          <div 
            className={`absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-background via-background/90 to-transparent pointer-events-none z-10 transition-opacity duration-300 ${showRightGradient ? 'opacity-100' : 'opacity-0'}`} 
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
