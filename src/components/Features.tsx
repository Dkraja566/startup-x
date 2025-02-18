
import { Check, Zap, Shield, BarChart } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Process data in real-time with our optimized algorithms",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption and security protocols",
  },
  {
    icon: BarChart,
    title: "Advanced Analytics",
    description: "Get actionable insights from your data",
  },
  {
    icon: Check,
    title: "Easy Integration",
    description: "Seamlessly integrate with your existing tools",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Features that set us apart
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Discover how our platform can revolutionize your workflow with powerful features designed for modern businesses.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group p-6 bg-background rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <feature.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
