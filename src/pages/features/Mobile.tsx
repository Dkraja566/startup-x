
import { Smartphone, Laptop, TabletSmartphone, Wifi } from "lucide-react";
import { FeatureLayout } from "./FeatureLayout";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const MobileFeature = () => {
  const mobileFeatures = [
    {
      icon: TabletSmartphone,
      title: "Cross-Platform",
      description: "Native apps for iOS and Android platforms"
    },
    {
      icon: Wifi,
      title: "Offline Support",
      description: "Work seamlessly without internet connection"
    },
    {
      icon: Laptop,
      title: "Responsive Design",
      description: "Perfect experience on any device"
    }
  ];

  return (
    <FeatureLayout
      title="Mobile Ready"
      description="Access your data from any device with our mobile-first approach."
      icon={<Smartphone className="w-8 h-8" />}
      color="bg-pink-500"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {mobileFeatures.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <feature.icon className="w-8 h-8 text-pink-500 mb-4" />
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
          <h2 className="text-2xl font-semibold mb-4">Mobile Stats</h2>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">App Rating</h4>
              <p className="text-3xl font-bold text-pink-500">4.9/5</p>
              <p className="text-sm text-muted-foreground">Average user rating</p>
            </div>
            <div>
              <h4 className="font-semibold">Downloads</h4>
              <p className="text-3xl font-bold text-pink-500">1M+</p>
              <p className="text-sm text-muted-foreground">Active installations</p>
            </div>
          </div>
        </div>
        <div className="p-6 bg-card rounded-lg border">
          <h2 className="text-2xl font-semibold mb-4">Platform Support</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-background rounded-lg text-center">
              <h4 className="font-semibold">iOS</h4>
              <p className="text-sm text-muted-foreground">iPhone & iPad</p>
            </div>
            <div className="p-4 bg-background rounded-lg text-center">
              <h4 className="font-semibold">Android</h4>
              <p className="text-sm text-muted-foreground">Phone & Tablet</p>
            </div>
            <div className="p-4 bg-background rounded-lg text-center">
              <h4 className="font-semibold">Web</h4>
              <p className="text-sm text-muted-foreground">All browsers</p>
            </div>
            <div className="p-4 bg-background rounded-lg text-center">
              <h4 className="font-semibold">Desktop</h4>
              <p className="text-sm text-muted-foreground">Windows & Mac</p>
            </div>
          </div>
        </div>
      </motion.div>
    </FeatureLayout>
  );
};

export default MobileFeature;
