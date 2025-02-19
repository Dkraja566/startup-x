
import { Testimonials as TestimonialsSection } from "@/components/Testimonials";
import { Navbar } from "@/components/Navbar";

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <TestimonialsSection />
      </div>
    </div>
  );
};

export default Testimonials;
