
import { Navbar } from "@/components/Navbar";
import { useAuth } from "@/contexts/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import { Activity, BarChart3, CreditCard, DollarSign, Users } from "lucide-react";

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  
  useEffect(() => {
    // Check for success parameter in URL
    const queryParams = new URLSearchParams(location.search);
    if (queryParams.get("success") === "true") {
      toast({
        title: "Payment successful!",
        description: "Your subscription has been activated. Thank you for your purchase!",
        variant: "default",
      });
      
      // Clear the query param after showing the toast
      navigate('/dashboard', { replace: true });
    }
  }, [location, navigate, toast]);

  const statsCards = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      description: "+20.1% from last month",
      icon: DollarSign,
      color: "bg-green-500",
    },
    {
      title: "Active Users",
      value: "2,350",
      description: "+10.5% from last month",
      icon: Users,
      color: "bg-blue-500",
    },
    {
      title: "Active Subscriptions",
      value: "1,420",
      description: "+12.2% from last month",
      icon: CreditCard,
      color: "bg-purple-500",
    },
    {
      title: "Conversion Rate",
      value: "3.2%",
      description: "+2.1% from last month",
      icon: Activity,
      color: "bg-orange-500",
    },
  ];

  const quickActions = [
    {
      title: "Billing",
      description: "Manage your subscription and payment methods",
      action: () => navigate("/dashboard/billing"),
    },
    {
      title: "Settings",
      description: "Customize your account preferences",
      action: () => navigate("/dashboard/settings"),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold mb-2">Welcome back{user?.user_metadata?.full_name ? `, ${user.user_metadata.full_name}` : ""}</h1>
            <p className="text-muted-foreground mb-8">Here's what's happening with your account today.</p>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {statsCards.map((card, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
                      <div className={`p-2 rounded-full ${card.color}/10`}>
                        <card.icon className={`h-4 w-4 ${card.color.replace('bg-', 'text-')}`} />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{card.value}</div>
                    <p className="text-xs text-muted-foreground">{card.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {quickActions.map((action, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer" onClick={action.action}>
                  <CardHeader>
                    <CardTitle>{action.title}</CardTitle>
                    <CardDescription>{action.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Your latest transactions and activity</CardDescription>
                </div>
                <BarChart3 className="h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Example activity items */}
                  <div className="flex justify-between items-center pb-4 border-b">
                    <div>
                      <p className="font-medium">Subscription payment</p>
                      <p className="text-sm text-muted-foreground">Professional Plan</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">$49.00</p>
                      <p className="text-sm text-muted-foreground">Today</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b">
                    <div>
                      <p className="font-medium">Account login</p>
                      <p className="text-sm text-muted-foreground">New device detected</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Yesterday, 8:29 PM</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Profile updated</p>
                      <p className="text-sm text-muted-foreground">Changed account settings</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Last week</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
