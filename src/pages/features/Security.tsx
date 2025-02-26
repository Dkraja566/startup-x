
import { Shield, Lock, UserCheck, Shield2 } from "lucide-react";
import { FeatureLayout } from "./FeatureLayout";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const Security = () => {
  const securityFeatures = [
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "Military-grade encryption for all your data in transit and at rest"
    },
    {
      icon: UserCheck,
      title: "Advanced Authentication",
      description: "Multi-factor authentication and biometric security options"
    },
    {
      icon: Shield2,
      title: "Compliance & Auditing",
      description: "Full compliance with industry standards and detailed audit logs"
    }
  ];

  return (
    <FeatureLayout
      title="Enterprise Security"
      description="Protect your data with bank-grade security features and advanced encryption protocols."
      icon={<Shield className="w-8 h-8" />}
      color="bg-blue-500"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {securityFeatures.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <feature.icon className="w-8 h-8 text-blue-500 mb-4" />
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
        <h2 className="text-2xl font-semibold mb-4">Security Certifications</h2>
        <p className="text-muted-foreground mb-4">
          Our platform maintains the highest security standards with industry-leading certifications and regular security audits.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-background rounded-lg">
            <h4 className="font-semibold mb-2">Data Protection</h4>
            <p className="text-3xl font-bold text-blue-500">256-bit</p>
            <p className="text-sm text-muted-foreground">AES Encryption</p>
          </div>
          <div className="p-4 bg-background rounded-lg">
            <h4 className="font-semibold mb-2">Security Score</h4>
            <p className="text-3xl font-bold text-blue-500">A+</p>
            <p className="text-sm text-muted-foreground">SSL Labs Rating</p>
          </div>
        </div>
      </motion.div>
    </FeatureLayout>
  );
};

export default Security;
