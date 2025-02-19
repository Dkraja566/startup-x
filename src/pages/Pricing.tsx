
import { Pricing as PricingSection } from "@/components/Pricing";
import { Navbar } from "@/components/Navbar";

const Pricing = () => {
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
