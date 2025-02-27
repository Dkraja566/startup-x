
import { Gift, Award, Star, Trophy } from "lucide-react";
import { FeatureLayout } from "./FeatureLayout";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const RewardsFeature = () => {
  const rewardFeatures = [
    {
      icon: Award,
      title: "Points System",
      description: "Earn points for every action"
    },
    {
      icon: Star,
      title: "Exclusive Benefits",
      description: "Access premium features and perks"
    },
    {
      icon: Trophy,
      title: "Achievement Badges",
      description: "Unlock special milestones"
    }
  ];

  return (
    <FeatureLayout
      title="Rewards Program"
      description="Earn points and unlock exclusive benefits with our rewards system."
      icon={<Gift className="w-8 h-8" />}
      color="bg-orange-500"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {rewardFeatures.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <feature.icon className="w-8 h-8 text-orange-500 mb-4" />
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
          <h2 className="text-2xl font-semibold mb-4">Rewards Tiers</h2>
          <div className="space-y-4">
            <div className="p-4 bg-background rounded-lg">
              <h4 className="font-semibold text-orange-500">Gold Tier</h4>
              <p className="text-sm text-muted-foreground">50,000+ points</p>
              <p className="mt-2">Premium features & priority support</p>
            </div>
            <div className="p-4 bg-background rounded-lg">
              <h4 className="font-semibold text-zinc-400">Silver Tier</h4>
              <p className="text-sm text-muted-foreground">25,000+ points</p>
              <p className="mt-2">Advanced features & fast support</p>
            </div>
            <div className="p-4 bg-background rounded-lg">
              <h4 className="font-semibold text-amber-600">Bronze Tier</h4>
              <p className="text-sm text-muted-foreground">5,000+ points</p>
              <p className="mt-2">Basic features & standard support</p>
            </div>
          </div>
        </div>
        <div className="p-6 bg-card rounded-lg border">
          <h2 className="text-2xl font-semibold mb-4">Point System</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-background rounded-lg">
              <span>Daily Login</span>
              <span className="font-bold text-orange-500">+50 points</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-background rounded-lg">
              <span>Complete Task</span>
              <span className="font-bold text-orange-500">+100 points</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-background rounded-lg">
              <span>Invite Friend</span>
              <span className="font-bold text-orange-500">+500 points</span>
            </div>
          </div>
        </div>
      </motion.div>
    </FeatureLayout>
  );
};

export default RewardsFeature;
