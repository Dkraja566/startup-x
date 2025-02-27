
import { Laptop, Smartphone, Monitor, TabletSmartphone } from "lucide-react";
import { FeatureLayout } from "./FeatureLayout";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const CrossPlatformFeature = () => {
  const platformFeatures = [
    {
      icon: Monitor,
      title: "Desktop Apps",
      description: "Native apps for Windows and Mac"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "iOS and Android support"
    },
    {
      icon: TabletSmartphone,
      title: "Tablet Support",
      description: "Optimized for all screen sizes"
    }
  ];

  return (
    <FeatureLayout
      title="Cross Platform"
      description="Work seamlessly across all your devices with native apps."
      icon={<Laptop className="w-8 h-8" />}
      color="bg-emerald-500"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {platformFeatures.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <feature.icon className="w-8 h-8 text-emerald-500 mb-4" />
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
          <h2 className="text-2xl font-semibold mb-4">Platform Support</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-background rounded-lg text-center">
              <h4 className="font-semibold">Windows</h4>
              <p className="text-sm text-muted-foreground">Windows 10/11</p>
            </div>
            <div className="p-4 bg-background rounded-lg text-center">
              <h4 className="font-semibold">macOS</h4>
              <p className="text-sm text-muted-foreground">10.15+</p>
            </div>
            <div className="p-4 bg-background rounded-lg text-center">
              <h4 className="font-semibold">iOS</h4>
              <p className="text-sm text-muted-foreground">iOS 14+</p>
            </div>
            <div className="p-4 bg-background rounded-lg text-center">
              <h4 className="font-semibold">Android</h4>
              <p className="text-sm text-muted-foreground">Android 9+</p>
            </div>
          </div>
        </div>
        <div className="p-6 bg-card rounded-lg border">
          <h2 className="text-2xl font-semibold mb-4">Sync Features</h2>
          <div className="space-y-4">
            <div className="p-4 bg-background rounded-lg">
              <h4 className="font-semibold">Real-time Sync</h4>
              <p className="text-sm text-muted-foreground">Instant data synchronization across devices</p>
            </div>
            <div className="p-4 bg-background rounded-lg">
              <h4 className="font-semibold">Offline Support</h4>
              <p className="text-sm text-muted-foreground">Work offline, sync when connected</p>
            </div>
            <div className="p-4 bg-background rounded-lg">
              <h4 className="font-semibold">Cloud Backup</h4>
              <p className="text-sm text-muted-foreground">Automatic cloud backup and restore</p>
            </div>
          </div>
        </div>
      </motion.div>
    </FeatureLayout>
  );
};

export default CrossPlatformFeature;
