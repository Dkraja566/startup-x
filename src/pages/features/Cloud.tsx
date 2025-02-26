
import { Cloud, Database, Server, Globe } from "lucide-react";
import { FeatureLayout } from "./FeatureLayout";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const CloudFeature = () => {
  const cloudFeatures = [
    {
      icon: Database,
      title: "Cloud Storage",
      description: "Secure and scalable storage solutions for your data"
    },
    {
      icon: Server,
      title: "Cloud Computing",
      description: "Powerful computing resources on demand"
    },
    {
      icon: Globe,
      title: "Global CDN",
      description: "Lightning-fast content delivery worldwide"
    }
  ];

  return (
    <FeatureLayout
      title="Cloud Integration"
      description="Seamlessly integrate with leading cloud providers and services."
      icon={<Cloud className="w-8 h-8" />}
      color="bg-purple-500"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cloudFeatures.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <feature.icon className="w-8 h-8 text-purple-500 mb-4" />
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
          <h2 className="text-2xl font-semibold mb-4">Cloud Partners</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-background rounded-lg text-center">
              <h4 className="font-semibold">AWS</h4>
              <p className="text-sm text-muted-foreground">Amazon Web Services</p>
            </div>
            <div className="p-4 bg-background rounded-lg text-center">
              <h4 className="font-semibold">Azure</h4>
              <p className="text-sm text-muted-foreground">Microsoft Cloud</p>
            </div>
            <div className="p-4 bg-background rounded-lg text-center">
              <h4 className="font-semibold">GCP</h4>
              <p className="text-sm text-muted-foreground">Google Cloud</p>
            </div>
            <div className="p-4 bg-background rounded-lg text-center">
              <h4 className="font-semibold">IBM</h4>
              <p className="text-sm text-muted-foreground">IBM Cloud</p>
            </div>
          </div>
        </div>
        <div className="p-6 bg-card rounded-lg border">
          <h2 className="text-2xl font-semibold mb-4">Cloud Statistics</h2>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Storage Capacity</h4>
              <p className="text-3xl font-bold text-purple-500">100TB+</p>
              <p className="text-sm text-muted-foreground">Available storage</p>
            </div>
            <div>
              <h4 className="font-semibold">Global Regions</h4>
              <p className="text-3xl font-bold text-purple-500">25+</p>
              <p className="text-sm text-muted-foreground">Data centers worldwide</p>
            </div>
          </div>
        </div>
      </motion.div>
    </FeatureLayout>
  );
};

export default CloudFeature;
