
import { Pricing as PricingSection } from "@/components/Pricing";
import { Navbar } from "@/components/Navbar";
import { useSearchParams } from "react-router-dom";
import { Shield, CreditCard } from "lucide-react";
import { useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";

const Pricing = () => {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();

  useEffect(() => {
    if (searchParams.get("canceled")) {
      toast({
        title: "Payment canceled",
        description: "Your payment was canceled. Feel free to try again when you're ready.",
        variant: "default",
      });
    }
  }, [searchParams, toast]);

  const securityFeatures = [
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "256-bit SSL encryption for all payment data",
    },
    {
      icon: CreditCard,
      title: "Multiple Payment Options",
      description: "Credit card, PayPal, and more payment methods available",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <PricingSection />
        
        {/* Security Section */}
        <section className="py-12 bg-background">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl font-bold tracking-tight">Secure Payment Processing</h2>
              <p className="text-muted-foreground mt-2">Your security is our top priority</p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-6 bg-card rounded-lg border"
                >
                  <div className="p-2 bg-primary/10 rounded-full">
                    <feature.icon className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                Your payment information is processed securely. We do not store your credit card details.
                All transactions are encrypted and processed through our secure payment partners.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Pricing;
