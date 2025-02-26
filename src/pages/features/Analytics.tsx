
import { BarChart, LineChart, PieChart, TrendingUp } from "lucide-react";
import { FeatureLayout } from "./FeatureLayout";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const Analytics = () => {
  const analyticsFeatures = [
    {
      icon: LineChart,
      title: "Real-time Analytics",
      description: "Monitor your data with live updates and instant insights"
    },
    {
      icon: PieChart,
      title: "Visual Reports",
      description: "Beautiful and intuitive data visualizations"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analysis",
      description: "AI-powered forecasting and trend analysis"
    }
  ];

  return (
    <FeatureLayout
      title="Advanced Analytics"
      description="Get actionable insights from your data with powerful analytics tools."
      icon={<BarChart className="w-8 h-8" />}
      color="bg-green-500"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {analyticsFeatures.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <feature.icon className="w-8 h-8 text-green-500 mb-4" />
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
        <h2 className="text-2xl font-semibold mb-4">Analytics Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-background rounded-lg">
            <h4 className="font-semibold mb-2">Active Users</h4>
            <p className="text-3xl font-bold text-green-500">2.5M+</p>
            <p className="text-sm text-muted-foreground">Daily average</p>
          </div>
          <div className="p-4 bg-background rounded-lg">
            <h4 className="font-semibold mb-2">Data Points</h4>
            <p className="text-3xl font-bold text-green-500">1B+</p>
            <p className="text-sm text-muted-foreground">Processed daily</p>
          </div>
          <div className="p-4 bg-background rounded-lg">
            <h4 className="font-semibold mb-2">Reports</h4>
            <p className="text-3xl font-bold text-green-500">500+</p>
            <p className="text-sm text-muted-foreground">Template library</p>
          </div>
          <div className="p-4 bg-background rounded-lg">
            <h4 className="font-semibold mb-2">Accuracy</h4>
            <p className="text-3xl font-bold text-green-500">99.9%</p>
            <p className="text-sm text-muted-foreground">Data precision</p>
          </div>
        </div>
      </motion.div>
    </FeatureLayout>
  );
};

export default Analytics;
