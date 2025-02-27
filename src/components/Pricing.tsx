
import { Check, Sparkles, Loader2, CreditCard } from "lucide-react";
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
  const [isShareOpen, setIsShareOpen] = useState(false);

  // Default plans data to use when Supabase fetch fails
  const defaultPlans = [
    {
      id: "starter",
      name: "Starter",
      price: 19,
      billing_period: "month",
      features: [
        "Basic feature access",
        "2 team members",
        "5GB storage",
        "Community support",
        "Monthly reports"
      ]
    },
    {
      id: "professional",
      name: "Professional",
      price: 49,
      billing_period: "month",
      features: [
        "Full feature access",
        "10 team members",
        "50GB storage",
        "Priority support",
        "Weekly reports",
        "Advanced analytics"
      ]
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: 99,
      billing_period: "month",
      features: [
        "Unlimited feature access",
        "Unlimited team members",
        "500GB storage",
        "24/7 dedicated support",
        "Custom reporting",
        "Advanced analytics",
        "Custom integrations",
        "Dedicated account manager"
      ]
    }
  ];

  const { data: plans, isLoading } = useQuery({
    queryKey: ["plans"],
    queryFn: async () => {
      try {
        const { data, error } = await supabase.from("plans").select("*");
        if (error) throw error;
        return data;
      } catch (error) {
        console.error("Error fetching plans:", error);
        // Return default plans if the query fails
        return defaultPlans;
      }
    },
  });

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = "Check out these amazing plans!";
    let shareUrl = "";

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400");
      toast({
        title: "Sharing on " + platform,
        description: "Opening share dialog...",
        duration: 2000,
      });
    }
  };

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
      
      // For demo purposes, show a success message and redirect to dashboard instead of actual payment
      if (process.env.NODE_ENV === 'development') {
        toast({
          title: "Payment Simulation",
          description: "In development mode, we're simulating a successful payment. Redirecting to dashboard...",
          duration: 4000,
        });
        setTimeout(() => {
          navigate("/dashboard?success=true");
        }, 2000);
      } else {
        window.location.href = url;
      }
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

  const displayPlans = plans || defaultPlans;

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
        
        {/* Payment Methods Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center items-center gap-4 mt-8 flex-wrap"
        >
          <div className="text-sm font-medium text-muted-foreground">Secure payment methods:</div>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/visa.svg" className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity" alt="Visa" />
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/mastercard.svg" className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity" alt="Mastercard" />
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/paypal.svg" className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity" alt="PayPal" />
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/applepay.svg" className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity" alt="Apple Pay" />
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/googlepay.svg" className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity" alt="Google Pay" />
          </div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-16">
          {displayPlans.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col group rounded-2xl p-6 bg-background shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
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
                  ) : (
                    <CreditCard className="h-4 w-4 mr-2" />
                  )}
                  {tier.id === "enterprise" ? "Contact Sales" : "Get Started"}
                </Button>
                <ul className="space-y-2 pt-4 border-t">
                  {(tier.features as string[]).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className={`h-4 w-4 mt-1 text-green-500`} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Secure Payment Badge */}
              <div className="mt-6 pt-4 border-t border-muted flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                Secure payment
              </div>
            </motion.div>
          ))}
        </div>

        {/* Money-back guarantee section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 p-6 bg-background rounded-lg border text-center max-w-2xl mx-auto"
        >
          <div className="flex justify-center mb-4">
            <div className="bg-green-100 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
          </div>
          <h3 className="text-lg font-bold mb-2">30-Day Money-Back Guarantee</h3>
          <p className="text-muted-foreground text-sm">Not satisfied with our product? Get a full refund within 30 days, no questions asked.</p>
        </motion.div>

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
