
import { Check, Sparkles, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";

export const Pricing = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

  const { data: plans, isLoading } = useQuery({
    queryKey: ["plans"],
    queryFn: async () => {
      const { data, error } = await supabase.from("plans").select("*");
      if (error) throw error;
      return data;
    },
  });

  const handleSubscribe = async (planId: string) => {
    if (!user) {
      toast({
        title: "Please login first",
        description: "You need to be logged in to subscribe to a plan",
        variant: "default",
      });
      navigate("/login");
      return;
    }

    setLoadingPlan(planId);
    try {
      // Get the session first
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.access_token) {
        throw new Error("No access token available");
      }

      const response = await fetch(
        "https://mtbfvxjdgwdpsrgphkru.supabase.co/functions/v1/create-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session.access_token}`,
          },
          body: JSON.stringify({
            planId,
            successUrl: `${window.location.origin}/dashboard?success=true`,
            cancelUrl: `${window.location.origin}/pricing?canceled=true`,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create checkout session');
      }

      const { url } = await response.json();
      if (!url) {
        throw new Error("No checkout URL received");
      }
      
      window.location.href = url;
    } catch (error: any) {
      console.error("Checkout error:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to initiate checkout. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoadingPlan(null);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <section className="py-12 md:py-24 bg-muted/50">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-16">
          {plans?.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col group rounded-2xl p-6 bg-background shadow-lg hover:shadow-xl transition-all duration-300 ${
                tier.id === "professional" ? "ring-2 ring-primary" : ""
              }`}
            >
              {tier.id === "professional" && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium flex items-center gap-1">
                  <Sparkles className="h-4 w-4" />
                  Most Popular
                </div>
              )}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-bold">{tier.name}</h3>
                <div className="flex items-baseline gap-1">
                  <div className="text-4xl font-bold">${tier.price}</div>
                  <div className="text-sm text-muted-foreground">/{tier.billing_period}</div>
                </div>
                <Button
                  className={`w-full rounded-full ${
                    tier.id === "professional" ? "bg-primary" : ""
                  }`}
                  onClick={() => handleSubscribe(tier.id)}
                  disabled={loadingPlan === tier.id}
                >
                  {loadingPlan === tier.id ? (
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  ) : null}
                  {tier.id === "enterprise" ? "Contact Sales" : "Get Started"}
                </Button>
                <ul className="space-y-2 pt-4 border-t">
                  {(tier.features as string[]).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className={`h-4 w-4 mt-1 ${tier.id === "professional" ? "text-primary" : ""}`} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Need a custom plan? {" "}
            <a href="mailto:sales@example.com" className="text-primary hover:underline">
              Contact our sales team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
