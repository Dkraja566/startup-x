
import { Zap, Cpu, Clock, Gauge } from "lucide-react";
import { FeatureLayout } from "./FeatureLayout";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const Performance = () => {
  const metrics = [
    {
      icon: Cpu,
      title: "Optimized Processing",
      description: "Advanced algorithms for faster data processing"
    },
    {
      icon: Clock,
      title: "Real-time Updates",
      description: "Instant data synchronization across devices"
    },
    {
      icon: Gauge,
      title: "Performance Metrics",
      description: "Detailed insights into system performance"
    }
  ];

  return (
    <FeatureLayout
      title="Lightning Fast Performance"
      description="Experience blazing fast speeds with our optimized infrastructure and advanced caching mechanisms."
      icon={<Zap className="w-8 h-8" />}
      color="bg-yellow-500"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <metric.icon className="w-8 h-8 text-yellow-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">{metric.title}</h3>
              <p className="text-muted-foreground">{metric.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="mt-16 p-6 bg-card rounded-lg border"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Performance Benchmarks</h2>
        <p className="text-muted-foreground mb-4">
          Our platform consistently outperforms industry standards, delivering results up to 10x faster than traditional solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-background rounded-lg">
            <h4 className="font-semibold mb-2">Data Processing Speed</h4>
            <p className="text-3xl font-bold text-yellow-500">10ms</p>
            <p className="text-sm text-muted-foreground">Average response time</p>
          </div>
          <div className="p-4 bg-background rounded-lg">
            <h4 className="font-semibold mb-2">Uptime Guarantee</h4>
            <p className="text-3xl font-bold text-yellow-500">99.99%</p>
            <p className="text-sm text-muted-foreground">Service availability</p>
          </div>
        </div>
      </motion.div>
    </FeatureLayout>
  );
};

export default Performance;
