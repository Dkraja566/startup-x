
import { Check, Zap, Shield, BarChart, Cloud, Code2, Globe, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Process data in real-time with our optimized algorithms",
    color: "text-yellow-500",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption and security protocols",
    color: "text-blue-500",
  },
  {
    icon: BarChart,
    title: "Advanced Analytics",
    description: "Get actionable insights from your data",
    color: "text-green-500",
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    description: "Seamlessly connect with your cloud services",
    color: "text-purple-500",
  },
  {
    icon: Code2,
    title: "API Access",
    description: "Full API access for custom integrations",
    color: "text-red-500",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Deploy worldwide with edge computing",
    color: "text-indigo-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Ready",
    description: "Access your data from any device",
    color: "text-pink-500",
  },
  {
    icon: Check,
    title: "Easy Integration",
    description: "Seamlessly integrate with your existing tools",
    color: "text-teal-500",
  },
];

export const Features = () => {
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Features that set us apart
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg mt-4">
              Discover how our platform can revolutionize your workflow with powerful features designed for modern businesses.
            </p>
          </motion.div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group p-6 bg-background rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <feature.icon className={`h-10 w-10 mb-4 ${feature.color}`} />
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
