
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface FeatureLayoutProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  children: React.ReactNode;
}

export const FeatureLayout = ({ title, description, icon, color, children }: FeatureLayoutProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="container max-w-6xl mx-auto">
        <Button
          variant="ghost"
          className="mb-8 hover:bg-transparent"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className={`inline-block p-4 rounded-full ${color} bg-opacity-10 mb-6`}>
            {icon}
          </div>
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};
