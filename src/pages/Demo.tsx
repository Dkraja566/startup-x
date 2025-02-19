
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Play, Pause, SkipBack } from "lucide-react";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";

const Demo = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Product Demo</h1>
          <div className="aspect-video bg-muted rounded-lg mb-6">
            {/* Add your video or demo content here */}
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-muted-foreground">Demo Content</p>
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsPlaying(false)}
            >
              <SkipBack className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Play className="h-4 w-4" />
              )}
            </Button>
          </div>
          <div className="mt-8">
            <Button onClick={() => navigate("/signup")}>
              Get Started Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
