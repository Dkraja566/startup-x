
import { Globe, Network, Clock, Wifi } from "lucide-react";
import { FeatureLayout } from "./FeatureLayout";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const GlobalFeature = () => {
  const globalFeatures = [
    {
      icon: Network,
      title: "Global CDN",
      description: "Lightning-fast content delivery worldwide"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Always online with zero downtime"
    },
    {
      icon: Wifi,
      title: "Edge Computing",
      description: "Process data closer to your users"
    }
  ];

  return (
    <FeatureLayout
      title="Global Scale"
      description="Deploy worldwide with edge computing and global infrastructure."
      icon={<Globe className="w-8 h-8" />}
      color="bg-indigo-500"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {globalFeatures.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <feature.icon className="w-8 h-8 text-indigo-500 mb-4" />
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
          <h2 className="text-2xl font-semibold mb-4">Global Presence</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-background rounded-lg text-center">
              <h4 className="font-semibold">Data Centers</h4>
              <p className="text-3xl font-bold text-indigo-500">50+</p>
              <p className="text-sm text-muted-foreground">Worldwide</p>
            </div>
            <div className="p-4 bg-background rounded-lg text-center">
              <h4 className="font-semibold">Edge Locations</h4>
              <p className="text-3xl font-bold text-indigo-500">200+</p>
              <p className="text-sm text-muted-foreground">Global Points</p>
            </div>
          </div>
        </div>
        <div className="p-6 bg-card rounded-lg border">
          <h2 className="text-2xl font-semibold mb-4">Performance Stats</h2>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Global Latency</h4>
              <p className="text-3xl font-bold text-indigo-500">&lt;50ms</p>
              <p className="text-sm text-muted-foreground">Average Response Time</p>
            </div>
            <div>
              <h4 className="font-semibold">Uptime</h4>
              <p className="text-3xl font-bold text-indigo-500">99.99%</p>
              <p className="text-sm text-muted-foreground">Service Availability</p>
            </div>
          </div>
        </div>
      </motion.div>
    </FeatureLayout>
  );
};

export default GlobalFeature;
