
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Pricing = () => {
  const tiers = [
    {
      name: "Starter",
      price: "$29",
      description: "Perfect for small teams and startups",
      features: [
        "Up to 5 team members",
        "Basic analytics",
        "24/7 support",
        "1GB storage",
      ],
    },
    {
      name: "Professional",
      price: "$99",
      description: "Ideal for growing businesses",
      features: [
        "Up to 20 team members",
        "Advanced analytics",
        "Priority support",
        "10GB storage",
        "Custom integrations",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        "Unlimited team members",
        "Enterprise analytics",
        "Dedicated support",
        "Unlimited storage",
        "Custom integrations",
        "SLA guarantee",
      ],
    },
  ];

  return (
    <section className="py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Simple, transparent pricing
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Choose the perfect plan for your business needs
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className="relative group rounded-2xl p-6 bg-background shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">{tier.name}</h3>
                <div className="text-4xl font-bold">{tier.price}</div>
                <p className="text-muted-foreground">{tier.description}</p>
                <Button className="w-full rounded-full">Get Started</Button>
                <ul className="space-y-2">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
