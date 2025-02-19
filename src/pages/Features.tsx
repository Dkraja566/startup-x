
import { Features as FeaturesSection } from "@/components/Features";
import { Navbar } from "@/components/Navbar";

const Features = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <FeaturesSection />
      </div>
    </div>
  );
};

export default Features;
