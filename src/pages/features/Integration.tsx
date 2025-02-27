
import { Plug, Link, Code, Wrench } from "lucide-react";
import { FeatureLayout } from "./FeatureLayout";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const IntegrationFeature = () => {
  const integrationFeatures = [
    {
      icon: Link,
      title: "Easy Connect",
      description: "One-click integration with popular services"
    },
    {
      icon: Code,
      title: "Developer Tools",
      description: "Comprehensive SDK and API support"
    },
    {
      icon: Wrench,
      title: "Custom Solutions",
      description: "Build your own integrations easily"
    }
  ];

  return (
    <FeatureLayout
      title="Easy Integration"
      description="Seamlessly integrate with your existing tools and workflows."
      icon={<Plug className="w-8 h-8" />}
      color="bg-teal-500"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {integrationFeatures.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <feature.icon className="w-8 h-8 text-teal-500 mb-4" />
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
        <h2 className="text-2xl font-semibold mb-4">Integration Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-background rounded-lg text-center">
            <h4 className="font-semibold">Slack</h4>
            <p className="text-sm text-muted-foreground">Chat Integration</p>
          </div>
          <div className="p-4 bg-background rounded-lg text-center">
            <h4 className="font-semibold">GitHub</h4>
            <p className="text-sm text-muted-foreground">Version Control</p>
          </div>
          <div className="p-4 bg-background rounded-lg text-center">
            <h4 className="font-semibold">Jira</h4>
            <p className="text-sm text-muted-foreground">Project Management</p>
          </div>
          <div className="p-4 bg-background rounded-lg text-center">
            <h4 className="font-semibold">Salesforce</h4>
            <p className="text-sm text-muted-foreground">CRM Integration</p>
          </div>
        </div>
      </motion.div>
    </FeatureLayout>
  );
};

export default IntegrationFeature;
