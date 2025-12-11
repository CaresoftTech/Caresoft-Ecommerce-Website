import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import {
  User,
  Mail,
  Phone,
  MapPin,
  LogOut,
  Save,
  Edit,
  X,
  Package,
} from "lucide-react";

export default function Profile() {
  const { user, loading, logout, updateProfile } = useAuth();
  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      navigate("/signin");
      return;
    }

    if (user) {
      setProfile({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        address: user.address || "",
      });
    }
  }, [user, loading, navigate]);

  const handleSave = () => {
    setSaving(true);
    try {
      updateProfile({
        name: profile.name,
        phone: profile.phone,
        address: profile.address,
      });
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
    navigate("/");
  };

  const handleCancel = () => {
    navigate("/");
  };

  const handleTrackOrder = () => {
    navigate("/order-tracking");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black/10">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7faff] via-[#e2f0ff] to-[#f0f4f8] py-12 px-4">
      <div className="max-w-3xl mx-auto">

        {/* TOP PROFILE SECTION */}
        <div className="relative w-full mb-10">
          <div className="h-40 w-full rounded-3xl bg-gradient-to-r from-[#38aaf1] via-[#2077ac] to-[#0e202b] backdrop-blur-xl shadow-2xl"></div>

          <X
            className="absolute top-4 right-4 h-6 w-6 text-white cursor-pointer hover:text-red-400"
            onClick={handleCancel}
          />

          <div className="absolute left-1/2 -bottom-12 transform -translate-x-1/2">
          <h2 className="font-bold text-center text-2xl font-serif text-white mb-4">
            My Profile
          </h2>
            <div className="h-32 w-32 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 p-1 shadow-xl">

              <div className="h-full w-full rounded-full bg-black flex items-center justify-center text-white text-4xl font-bold">
                {profile.name?.charAt(0)?.toUpperCase() || "U"}
              </div>
            </div>
          </div>
        </div>

        {/* USER NAME */}
        <div className="mt-16 mb-8 text-center">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            {profile.name || "User Name"}
          </h1>
          <p className="text-gray-400">{profile.email}</p>
        </div>

        {/* FORM CARD */}
        <Card className="relative bg-white/5 bg-[#3491cb] border-white/10 shadow-2xl rounded-2xl p-6 space-y-6">

          {/* CANCEL ICON */}
          <X
            className="absolute top-4 right-4 h-6 w-6 text-white cursor-pointer hover:text-red-400"
            onClick={handleCancel}
          />

          {/* FORM GRID */}
          <div className="grid md:grid-cols-2 gap-6">

            {/* NAME */}
            <div>
              <Label className="text-white flex items-center gap-2 mb-2 ">
                <User className="h-4 w-4" /> Full Name
              </Label>
              <div className="relative">
                <Input
                  value={profile.name}
                  onChange={(e) =>
                    setProfile({ ...profile, name: e.target.value })
                  }
                  className="bg-white/10 text-white font-bold border-white/40 focus:border-purple-400 focus:ring-purple-400"
                  placeholder="Enter your name"
                />
                <Edit className="absolute right-3 top-3 h-4 w-4 text-white" />
              </div>
            </div>

            {/* EMAIL */}
            <div>
              <Label className="text-white flex items-center gap-2 mb-2">
                <Mail className="h-4 w-4" /> Email Address
              </Label>
              <Input
                value={profile.email}
                disabled
                className="bg-white/10 text-gray-900 border-white/80"
              />
            </div>

            {/* PHONE */}
            <div>
              <Label className="text-white flex items-center gap-2 mb-2">
                <Phone className="h-4 w-4" /> Phone
              </Label>
              <Input
                value={profile.phone}
                onChange={(e) =>
                  setProfile({ ...profile, phone: e.target.value })
                }
                placeholder="Enter phone number"
                className="bg-white/10 font-bold text-white border-white/20 focus:border-green-400"
              />
            </div>

            {/* ADDRESS */}
            <div>
              <Label className="text-white flex items-center gap-2 mb-2">
                <MapPin className="h-4 w-4" /> Address
              </Label>
              <Input
                value={profile.address}
                onChange={(e) =>
                  setProfile({ ...profile, address: e.target.value })
                }
                placeholder="Enter your address"
                className="bg-white/10 font-bold text-white border-white/20 focus:border-orange-400"
              />
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col md:flex-row gap-4 pt-4">
            <Button
              onClick={handleSave}
              disabled={saving}
              className="flex-1 bg-gradient-to-r from-[#c71dfb] to-blue-500 text-white font-semibold shadow-lg hover:opacity-90"
            >
              <Save className="mr-2 h-4 w-4" />
              {saving ? "Saving..." : "Save Changes"}
            </Button>

            <Button
              onClick={handleTrackOrder}
              className="flex-1 bg-green-500 text-white font-semibold shadow-lg hover:bg-green-600 flex items-center justify-center gap-2"
            >
              <Package className="h-4 w-4" />
              Track Your Order
            </Button>

            <Button
              onClick={handleLogout}
              variant="outline"
              className="flex-1 border-red-500/40 text-red-400 hover:bg-red-500 hover:text-white"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>


          </div>
        </Card>
      </div>
    </div>
  );
}
