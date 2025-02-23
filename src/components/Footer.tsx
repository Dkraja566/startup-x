
import { Facebook, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export const Footer = () => {
  const { toast } = useToast();

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = "Check out this amazing platform!";
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

  return (
    <footer className="py-12 border-t relative">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Documentation
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Partners
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  License
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Buttons */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="absolute top-12 right-4 md:right-12 flex flex-col gap-4"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="group"
          >
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-blue-500/10 text-blue-500 transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-500/25"
              onClick={() => handleShare("facebook")}
            >
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Share on Facebook</span>
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="group"
          >
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-sky-500/10 text-sky-500 transition-all duration-300 hover:bg-sky-500 hover:text-white hover:shadow-lg hover:shadow-sky-500/25"
              onClick={() => handleShare("twitter")}
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Share on Twitter</span>
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="group"
          >
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-blue-600/10 text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-600/25"
              onClick={() => handleShare("linkedin")}
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">Share on LinkedIn</span>
            </Button>
          </motion.div>
        </motion.div>

        <div className="mt-12 text-center text-muted-foreground">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
