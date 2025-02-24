
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  LogIn, 
  LogOut,
  UserCircle,
  Settings,
  User,
  CreditCard
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/contexts/AuthContext";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user, signOut } = useAuth();

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
    toast({
      title: `Theme changed to ${isDark ? 'light' : 'dark'} mode`,
      duration: 2000,
    });
  };

  const handleLogin = () => {
    if (user) {
      signOut();
      toast({
        title: 'Successfully logged out',
        duration: 2000,
      });
      navigate('/');
    } else {
      navigate('/login');
    }
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  const menuItems = [
    { label: "Features", path: "/features" },
    { label: "Testimonials", path: "/testimonials" },
    { label: "Pricing", path: "/pricing" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a 
            href="/" 
            className="text-xl font-bold text-primary cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
            }}
          >
            YourSaaS
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => navigate(item.path)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-slate-900" />
              )}
            </Button>

            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative rounded-full h-10 w-10 p-0 hover:bg-accent/50"
                  >
                    <UserCircle className="h-6 w-6" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer" onClick={() => navigate('/dashboard')}>
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Billing
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer text-red-500" onClick={handleLogin}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button
                  variant="outline"
                  className="rounded-full"
                  onClick={handleLogin}
                >
                  <LogIn className="mr-2 h-4 w-4" />
                  Login
                </Button>
                <Button className="rounded-full" onClick={handleSignUp}>
                  Sign Up
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    navigate(item.path);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleTheme}
                  className="rounded-full"
                >
                  {isDark ? (
                    <Sun className="h-5 w-5 text-yellow-500" />
                  ) : (
                    <Moon className="h-5 w-5 text-slate-900" />
                  )}
                </Button>
                {user ? (
                  <Button
                    variant="outline"
                    className="rounded-full flex-1"
                    onClick={handleLogin}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </Button>
                ) : (
                  <>
                    <Button
                      variant="outline"
                      className="rounded-full flex-1"
                      onClick={handleLogin}
                    >
                      <LogIn className="mr-2 h-4 w-4" />
                      Login
                    </Button>
                    <Button className="rounded-full flex-1" onClick={handleSignUp}>
                      Sign Up
                    </Button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
