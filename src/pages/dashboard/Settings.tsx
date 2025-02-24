
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Navbar } from "@/components/Navbar";
import { useAuth } from "@/contexts/AuthContext";
import { Bell, Key, User, Shield, Info } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Settings = () => {
  const { toast } = useToast();
  const { user } = useAuth();

  const handleSave = () => {
    toast({
      title: "Settings Saved",
      description: "Your preferences have been updated.",
      duration: 3000,
    });
  };

  const SettingItem = ({ 
    title, 
    description, 
    tooltip, 
    defaultChecked 
  }: { 
    title: string;
    description: string;
    tooltip: string;
    defaultChecked?: boolean;
  }) => (
    <div className="flex items-center justify-between space-x-4">
      <div className="flex-1 space-y-0.5">
        <div className="flex items-center gap-2">
          <Label className="text-base font-medium">{title}</Label>
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="h-4 w-4 text-muted-foreground cursor-help" />
            </TooltipTrigger>
            <TooltipContent>
              <p className="w-[200px] text-sm">{tooltip}</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <Switch 
        defaultChecked={defaultChecked}
        className="data-[state=checked]:bg-primary"
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8 pt-24">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold">Settings</h1>
              <p className="text-muted-foreground mt-1">
                Manage your account preferences and settings
              </p>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" className="w-full sm:w-auto">
                Cancel
              </Button>
              <Button onClick={handleSave} className="w-full sm:w-auto">
                Save Changes
              </Button>
            </div>
          </div>

          <div className="grid gap-6">
            {/* Account Settings */}
            <Card className="animate-fade-up">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  <CardTitle>Account Settings</CardTitle>
                </div>
                <CardDescription>
                  Manage your account preferences and security options
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <SettingItem
                  title="Two-Factor Authentication"
                  description="Add an extra layer of security to your account"
                  tooltip="2FA requires an additional verification step when logging in"
                />
                <SettingItem
                  title="Email Notifications"
                  description="Receive email updates about your account"
                  tooltip="Get important updates and notifications via email"
                  defaultChecked
                />
                <SettingItem
                  title="Account Activity Alerts"
                  description="Get notified about important account activities"
                  tooltip="Receive alerts for login attempts and security events"
                  defaultChecked
                />
              </CardContent>
            </Card>

            {/* Privacy Settings */}
            <Card className="animate-fade-up [animation-delay:200ms]">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  <CardTitle>Privacy Settings</CardTitle>
                </div>
                <CardDescription>
                  Control your privacy and data preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <SettingItem
                  title="Profile Visibility"
                  description="Control who can see your profile"
                  tooltip="Make your profile visible to other users"
                  defaultChecked
                />
                <SettingItem
                  title="Data Collection"
                  description="Allow us to collect usage data to improve our services"
                  tooltip="We collect anonymous usage data to enhance your experience"
                />
                <SettingItem
                  title="Personal Data Sharing"
                  description="Control how your personal data is shared"
                  tooltip="Manage how your information is shared with our services"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
