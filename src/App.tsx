
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import Features from "./pages/Features";
import Performance from "./pages/features/Performance";
import Security from "./pages/features/Security";
import Analytics from "./pages/features/Analytics";
import Cloud from "./pages/features/Cloud";
import Api from "./pages/features/Api";
import Mobile from "./pages/features/Mobile";
import Global from "./pages/features/Global";
import Integration from "./pages/features/Integration";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Testimonials from "./pages/Testimonials";
import Pricing from "./pages/Pricing";
import Demo from "./pages/Demo";
import Dashboard from "./pages/Dashboard";
import Billing from "./pages/dashboard/Billing";
import Settings from "./pages/dashboard/Settings";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <AuthProvider>
            <Toaster />
            <Sonner />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/features" element={<Features />} />
              <Route path="/features/performance" element={<Performance />} />
              <Route path="/features/security" element={<Security />} />
              <Route path="/features/analytics" element={<Analytics />} />
              <Route path="/features/cloud" element={<Cloud />} />
              <Route path="/features/api" element={<Api />} />
              <Route path="/features/mobile" element={<Mobile />} />
              <Route path="/features/global" element={<Global />} />
              <Route path="/features/integration" element={<Integration />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/demo" element={<Demo />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/dashboard/billing"
                element={
                  <ProtectedRoute>
                    <Billing />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/dashboard/settings"
                element={
                  <ProtectedRoute>
                    <Settings />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
