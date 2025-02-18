
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/10 pointer-events-none" />
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center gap-8 text-center">
          <span className="inline-block px-4 py-1.5 font-medium bg-primary/10 text-primary rounded-full animate-fade-in">
            Introducing Your SaaS Solution
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter animate-fade-up">
            Transform Your Business with
            <span className="text-primary"> AI-Powered Insights</span>
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl animate-fade-up">
            Harness the power of artificial intelligence to streamline your workflow and make data-driven decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up">
            <Button size="lg" className="rounded-full">
              Get Started
            </Button>
            <Button variant="outline" size="lg" className="rounded-full">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
    </section>
  );
};
