
import { Server, Database, Shield, Network } from "lucide-react";
import { FeatureLayout } from "./FeatureLayout";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const InfrastructureFeature = () => {
  const infraFeatures = [
    {
      icon: Database,
      title: "High Availability",
      description: "99.99% uptime guarantee"
    },
    {
      icon: Shield,
      title: "Security",
      description: "Enterprise-grade security"
    },
    {
      icon: Network,
      title: "Scalability",
      description: "Auto-scaling infrastructure"
    }
  ];

  return (
    <FeatureLayout
      title="Reliable Infrastructure"
      description="Enterprise-grade infrastructure built for scale and reliability."
      icon={<Server className="w-8 h-8" />}
      color="bg-violet-500"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {infraFeatures.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <feature.icon className="w-8 h-8 text-violet-500 mb-4" />
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
          <h2 className="text-2xl font-semibold mb-4">Infrastructure Stats</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-background rounded-lg text-center">
              <h4 className="font-semibold">Uptime</h4>
              <p className="text-3xl font-bold text-violet-500">99.99%</p>
              <p className="text-sm text-muted-foreground">Annual average</p>
            </div>
            <div className="p-4 bg-background rounded-lg text-center">
              <h4 className="font-semibold">Response Time</h4>
              <p className="text-3xl font-bold text-violet-500">&lt;100ms</p>
              <p className="text-sm text-muted-foreground">Average</p>
            </div>
          </div>
        </div>
        <div className="p-6 bg-card rounded-lg border">
          <h2 className="text-2xl font-semibold mb-4">Security Features</h2>
          <div className="space-y-4">
            <div className="p-4 bg-background rounded-lg">
              <h4 className="font-semibold">Data Encryption</h4>
              <p className="text-sm text-muted-foreground">256-bit AES encryption</p>
            </div>
            <div className="p-4 bg-background rounded-lg">
              <h4 className="font-semibold">DDoS Protection</h4>
              <p className="text-sm text-muted-foreground">Advanced mitigation</p>
            </div>
            <div className="p-4 bg-background rounded-lg">
              <h4 className="font-semibold">Backup Systems</h4>
              <p className="text-sm text-muted-foreground">Multi-region backups</p>
            </div>
          </div>
        </div>
      </motion.div>
    </FeatureLayout>
  );
};

export default InfrastructureFeature;
