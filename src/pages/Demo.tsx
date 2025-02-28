
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Play, Pause, SkipBack, Volume2, VolumeX } from "lucide-react";
import { useState, useRef } from "react";
import { Navbar } from "@/components/Navbar";

const Demo = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleRestart = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Experience AI in Action</h1>
          <div className="aspect-video bg-muted rounded-lg mb-6 overflow-hidden relative">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              onEnded={() => setIsPlaying(false)}
              loop
            >
              <source
                src="https://youtu.be/ZK-rNEhJIDs?si=WrEvuZSa1qIN0jtu"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={handleRestart}
              className="rounded-full hover:scale-110 transition-transform"
            >
              <SkipBack className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              onClick={handlePlayPause}
              className="rounded-full hover:scale-110 transition-transform"
            >
              {isPlaying ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Play className="h-4 w-4" />
              )}
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={toggleMute}
              className="rounded-full hover:scale-110 transition-transform"
            >
              {isMuted ? (
                <VolumeX className="h-4 w-4" />
              ) : (
                <Volume2 className="h-4 w-4" />
              )}
            </Button>
          </div>
          <div className="mt-8 space-y-4">
            <p className="text-muted-foreground">
              Watch how our AI-powered platform transforms business operations
              and drives unprecedented growth.
            </p>
            <Button 
              onClick={() => navigate("/signup")}
              className="rounded-full hover:scale-105 transition-transform"
            >
              Get Started Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
