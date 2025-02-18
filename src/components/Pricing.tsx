
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Pricing = () => {
  const tiers = [
    {
      name: "Starter",
      price: "$29",
      billing: "per month",
      description: "Perfect for small teams and startups",
      features: [
        "Up to 5 team members",
        "Basic analytics",
        "24/7 support",
        "1GB storage",
        "API access",
        "Weekly reports",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$99",
      billing: "per month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 20 team members",
        "Advanced analytics",
        "Priority support",
        "10GB storage",
        "Custom integrations",
        "Daily backups",
        "Custom reporting",
        "Team collaboration",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      billing: "contact us",
      description: "For large organizations",
      features: [
        "Unlimited team members",
        "Enterprise analytics",
        "Dedicated support",
        "Unlimited storage",
        "Custom integrations",
        "SLA guarantee",
        "24/7 phone support",
        "Custom AI models",
        "On-premise option",
      ],
      popular: false,
    },
  ];

  return (
    <section className="py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Simple, transparent pricing
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Choose the perfect plan for your business needs. All plans include a 14-day free trial.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative group rounded-2xl p-6 bg-background shadow-lg hover:shadow-xl transition-all duration-300 ${
                tier.popular ? "ring-2 ring-primary" : ""
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium flex items-center gap-1">
                  <Sparkles className="h-4 w-4" />
                  Most Popular
                </div>
              )}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">{tier.name}</h3>
                <div className="flex items-baseline gap-1">
                  <div className="text-4xl font-bold">{tier.price}</div>
                  <div className="text-sm text-muted-foreground">/{tier.billing}</div>
                </div>
                <p className="text-muted-foreground">{tier.description}</p>
                <Button
                  className={`w-full rounded-full ${
                    tier.popular ? "bg-primary" : ""
                  }`}
                >
                  Get Started
                </Button>
                <ul className="space-y-2 pt-4 border-t">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <Check className={`h-4 w-4 ${tier.popular ? "text-primary" : ""}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
