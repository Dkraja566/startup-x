
import { Brain, CircuitBoard, Bot, Code } from "lucide-react";
import { FeatureLayout } from "./FeatureLayout";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const AIPoweredFeature = () => {
  const aiFeatures = [
    {
      icon: Brain,
      title: "Smart Analytics",
      description: "AI-powered insights for better decisions"
    },
    {
      icon: Bot,
      title: "Automation",
      description: "Intelligent task automation"
    },
    {
      icon: Code,
      title: "Smart Coding",
      description: "AI-assisted development tools"
    }
  ];

  return (
    <FeatureLayout
      title="AI-Powered"
      description="Leverage advanced machine learning for smarter decisions."
      icon={<CircuitBoard className="w-8 h-8" />}
      color="bg-cyan-500"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {aiFeatures.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <feature.icon className="w-8 h-8 text-cyan-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="p-6 bg-card rounded-lg border">
          <h2 className="text-2xl font-semibold mb-4">AI Capabilities</h2>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Model Accuracy</h4>
              <p className="text-3xl font-bold text-cyan-500">98.5%</p>
              <p className="text-sm text-muted-foreground">Prediction accuracy</p>
            </div>
            <div>
              <h4 className="font-semibold">Processing Speed</h4>
              <p className="text-3xl font-bold text-cyan-500">10ms</p>
              <p className="text-sm text-muted-foreground">Average response time</p>
            </div>
          </div>
        </div>
        <div className="p-6 bg-card rounded-lg border">
          <h2 className="text-2xl font-semibold mb-4">AI Features</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-background rounded-lg text-center">
              <h4 className="font-semibold">NLP</h4>
              <p className="text-sm text-muted-foreground">Language Processing</p>
            </div>
            <div className="p-4 bg-background rounded-lg text-center">
              <h4 className="font-semibold">CV</h4>
              <p className="text-sm text-muted-foreground">Computer Vision</p>
            </div>
            <div className="p-4 bg-background rounded-lg text-center">
              <h4 className="font-semibold">ML</h4>
              <p className="text-sm text-muted-foreground">Machine Learning</p>
            </div>
            <div className="p-4 bg-background rounded-lg text-center">
              <h4 className="font-semibold">RL</h4>
              <p className="text-sm text-muted-foreground">Reinforcement Learning</p>
            </div>
          </div>
        </div>
      </motion.div>
    </FeatureLayout>
  );
};

export default AIPoweredFeature;
