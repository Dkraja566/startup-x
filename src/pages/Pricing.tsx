
import { Pricing as PricingSection } from "@/components/Pricing";
import { Navbar } from "@/components/Navbar";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";

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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <PricingSection />
      </div>
    </div>
  );
};

export default Pricing;
