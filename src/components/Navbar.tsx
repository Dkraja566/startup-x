
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

  const handleNavigation = (path: string, label: string) => {
    navigate(path);
    toast({
      title: `Navigating to ${label}`,
      duration: 1500,
    });
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
          {/* Logo with updated gradient */}
          <a 
            href="/" 
            className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#7E69AB] to-[#9b87f5] hover:from-[#9b87f5] hover:to-[#7E69AB] transition-all duration-300 cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
            }}
          >
            StartupX
          </a>

          {/* Desktop Menu - updated with violet hover effects */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => navigate(item.path)}
                className="text-muted-foreground hover:text-[#9b87f5] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#9b87f5] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
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
              className="rounded-full hover:scale-110 hover:bg-[#E5DEFF] hover:text-[#9b87f5] transition-all duration-300"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-yellow-500 hover:text-[#9b87f5] hover:rotate-180 transition-all duration-500" />
              ) : (
                <Moon className="h-5 w-5 text-slate-900 hover:text-[#9b87f5] hover:rotate-180 transition-all duration-500" />
              )}
            </Button>

            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative rounded-full h-10 w-10 p-0 hover:bg-[#E5DEFF] hover:text-[#9b87f5] hover:scale-110 active:scale-95 transition-all duration-300"
                  >
                    <UserCircle className="h-6 w-6 hover:text-[#9b87f5] transition-colors duration-300" />
                    <span className="absolute top-0 right-0 h-2 w-2 bg-[#9b87f5] rounded-full" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 animate-in slide-in-from-top-1 duration-300">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    className="cursor-pointer group" 
                    onClick={() => handleNavigation('/dashboard', 'Profile')}
                  >
                    <User className="mr-2 h-4 w-4 group-hover:text-[#9b87f5] transition-colors" />
                    <span className="group-hover:translate-x-1 group-hover:text-[#9b87f5] transition-all">Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    className="cursor-pointer group" 
                    onClick={() => handleNavigation('/dashboard/billing', 'Billing')}
                  >
                    <CreditCard className="mr-2 h-4 w-4 group-hover:text-[#9b87f5] transition-colors" />
                    <span className="group-hover:translate-x-1 group-hover:text-[#9b87f5] transition-all">Billing</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    className="cursor-pointer group" 
                    onClick={() => handleNavigation('/dashboard/settings', 'Settings')}
                  >
                    <Settings className="mr-2 h-4 w-4 group-hover:text-[#9b87f5] transition-colors" />
                    <span className="group-hover:translate-x-1 group-hover:text-[#9b87f5] transition-all">Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    className="cursor-pointer text-red-500 group hover:bg-red-50 dark:hover:bg-red-950/50" 
                    onClick={handleLogin}
                  >
                    <LogOut className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    <span className="group-hover:translate-x-1 transition-transform">Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button
                  variant="outline"
                  className="rounded-full hover:scale-105 hover:border-[#9b87f5] hover:text-[#9b87f5] transition-all duration-300"
                  onClick={handleLogin}
                >
                  <LogIn className="mr-2 h-4 w-4" />
                  Login
                </Button>
                <Button 
                  className="rounded-full hover:scale-105 bg-gradient-to-r from-[#7E69AB] to-[#9b87f5] hover:from-[#9b87f5] hover:to-[#6E59A5] text-white transition-all duration-300" 
                  onClick={handleSignUp}
                >
                  Sign Up
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button with violet hover */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-[#E5DEFF] hover:text-[#9b87f5] transition-colors duration-300"
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

      {/* Mobile Menu with violet accents */}
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
                  className="block w-full text-left text-muted-foreground hover:text-[#9b87f5] transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
              {user && (
                <>
                  <div className="pt-4 border-t">
                    <button
                      onClick={() => {
                        handleNavigation('/dashboard', 'Profile');
                        setIsMenuOpen(false);
                      }}
                      className="flex items-center w-full p-2 rounded-md hover:bg-[#E5DEFF] hover:text-[#9b87f5] transition-colors duration-300"
                    >
                      <User className="h-4 w-4 mr-2" />
                      Profile
                    </button>
                    <button
                      onClick={() => {
                        handleNavigation('/dashboard/billing', 'Billing');
                        setIsMenuOpen(false);
                      }}
                      className="flex items-center w-full p-2 rounded-md hover:bg-[#E5DEFF] hover:text-[#9b87f5] transition-colors duration-300"
                    >
                      <CreditCard className="h-4 w-4 mr-2" />
                      Billing
                    </button>
                    <button
                      onClick={() => {
                        handleNavigation('/dashboard/settings', 'Settings');
                        setIsMenuOpen(false);
                      }}
                      className="flex items-center w-full p-2 rounded-md hover:bg-[#E5DEFF] hover:text-[#9b87f5] transition-colors duration-300"
                    >
                      <Settings className="h-4 w-4 mr-2" />
                      Settings
                    </button>
                  </div>
                </>
              )}
              <div className="flex items-center space-x-4 pt-4 border-t">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleTheme}
                  className="rounded-full hover:bg-[#E5DEFF] hover:text-[#9b87f5] transition-colors duration-300"
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
                    className="rounded-full flex-1 hover:border-[#9b87f5] hover:text-[#9b87f5] transition-colors duration-300"
                    onClick={handleLogin}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </Button>
                ) : (
                  <>
                    <Button
                      variant="outline"
                      className="rounded-full flex-1 hover:border-[#9b87f5] hover:text-[#9b87f5] transition-colors duration-300"
                      onClick={handleLogin}
                    >
                      <LogIn className="mr-2 h-4 w-4" />
                      Login
                    </Button>
                    <Button 
                      className="rounded-full flex-1 bg-gradient-to-r from-[#7E69AB] to-[#9b87f5] hover:from-[#9b87f5] hover:to-[#6E59A5] text-white transition-all duration-300" 
                      onClick={handleSignUp}
                    >
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
