
import { Code2, Globe, Database, Key } from "lucide-react";
import { FeatureLayout } from "./FeatureLayout";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const ApiFeature = () => {
  const apiFeatures = [
    {
      icon: Globe,
      title: "RESTful APIs",
      description: "Modern, well-documented REST APIs for easy integration"
    },
    {
      icon: Database,
      title: "GraphQL Support",
      description: "Flexible data queries with GraphQL integration"
    },
    {
      icon: Key,
      title: "API Security",
      description: "Secure authentication and rate limiting"
    }
  ];

  return (
    <FeatureLayout
      title="API Access"
      description="Full API access for seamless integration with your existing systems."
      icon={<Code2 className="w-8 h-8" />}
      color="bg-red-500"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {apiFeatures.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <feature.icon className="w-8 h-8 text-red-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
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
        <h2 className="text-2xl font-semibold mb-4">API Documentation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-background rounded-lg">
            <h4 className="font-semibold mb-2">API Endpoints</h4>
            <p className="text-3xl font-bold text-red-500">100+</p>
            <p className="text-sm text-muted-foreground">Available endpoints</p>
          </div>
          <div className="p-4 bg-background rounded-lg">
            <h4 className="font-semibold mb-2">Response Time</h4>
            <p className="text-3xl font-bold text-red-500">50ms</p>
            <p className="text-sm text-muted-foreground">Average latency</p>
          </div>
        </div>
      </motion.div>
    </FeatureLayout>
  );
};

export default ApiFeature;
