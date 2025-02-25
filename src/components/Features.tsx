
import { Check, Zap, Shield, BarChart, Cloud, Code2, Globe, Smartphone, Target, Bot, Gift, Laptop, Server, Users, Headphones, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

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

  const handleFeatureClick = (feature: typeof features[0]) => {
    toast({
      title: feature.title,
      description: "Exploring feature details...",
      duration: 2000,
    });
    navigate(feature.link);
  };

  return (
    <section className="py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 hover:to-primary transition-all duration-300">
              Features that set us apart
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg mt-4 hover:text-foreground transition-colors duration-300">
              Discover how our platform can revolutionize your workflow with powerful features designed for modern businesses.
            </p>
          </motion.div>
        </div>
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background pointer-events-none z-10" />
          <div className="overflow-auto pb-8 -mx-4 px-4 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent hover:scrollbar-thumb-primary/40 transition-colors duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 min-w-[640px]">
              {features.map((feature, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => handleFeatureClick(feature)}
                  className="relative group p-6 bg-background rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-left cursor-pointer border border-transparent hover:border-primary/20"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <feature.icon className={`h-10 w-10 mb-4 ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {feature.description}
                  </p>
                  <motion.div
                    className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ scale: 1.2, x: -2 }}
                  >
                    <span className="text-primary">→</span>
                  </motion.div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
