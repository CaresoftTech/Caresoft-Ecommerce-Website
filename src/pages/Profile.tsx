import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import {
  User,
  Mail,
  Phone,
  MapPin,
  LogOut,
  Save,
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
    if (!loading && !user) navigate("/signin");

    if (user) {
      setProfile({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        address: user.address || "",
      });
    }
  }, [user, loading, navigate]);

  const handleSave = async () => {
    setSaving(true);
    try {
      await updateProfile({
        name: profile.name,
        phone: profile.phone,
        address: profile.address,
      });
      toast.success("Profile updated");
    } catch {
      toast.error("Update failed");
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f6f8fc]">
        <div className="h-10 w-10 animate-spin rounded-full border-b-2 border-blue-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-4 gap-8">

        {/* LEFT PROFILE PANEL */}
        <Card className="lg:col-span-1 p-6 rounded-3xl shadow-md border border-gray-100 bg-[#f0f7ff]">
          <div className="flex flex-col items-center text-center gap-5">
            <div className="h-24 w-24 rounded-full bg-gradient-to-br from-[#43cbf5] via-[#41a4e2] to-[#122d3a] hover:bg-[#2579ac] text-white font-serif flex items-center justify-center text-3xl font-semibold shadow-lg">
              {profile.name?.charAt(0)?.toUpperCase() || "U"}
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[#3491cb]">
                {profile.name || "User Name"}
              </h2>
              <p className="text-sm text-gray-500 break-all">
                {profile.email}
              </p>
            </div>

            <Button
              onClick={() => navigate("/order-tracking")}
              className="w-full bg-gradient-to-br from-[#4cb9fd] to-[#153f5b] hover:bg-[#2579ac] rounded-xl"
            >
              <Package className="mr-2 h-4 w-4" />
              My Orders
            </Button>
          </div>
        </Card>

        {/* RIGHT CONTENT */}
        <Card className="lg:col-span-3 p-6 md:p-10 rounded-3xl shadow-md border border-gray-100 bg-[#f0f7ff]">
          <div className="mb-10">
            <h1 className="text-2xl font-semibold text-[#3491cb]">
              Account Details
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Keep your personal information up to date
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label className="text-[#3491cb] flex items-center gap-2 mb-1 text-sm">
                <User className="h-4 w-4" /> Full Name
              </Label>
              <Input
                value={profile.name}
                onChange={(e) =>
                  setProfile({ ...profile, name: e.target.value })
                }
                className="rounded-xl"
              />
            </div>

            <div>
              <Label className="text-[#3491cb] flex items-center gap-2 mb-1 text-sm">
                <Mail className="h-4 w-4" /> Email
              </Label>
              <Input
                value={profile.email}
                disabled
                className="rounded-xl "
              />
            </div>

            <div>
              <Label className="text-[#3491cb] flex items-center gap-2 mb-1 text-sm">
                <Phone className="h-4 w-4" /> Phone
              </Label>
              <Input
                value={profile.phone}
                onChange={(e) =>
                  setProfile({ ...profile, phone: e.target.value })
                }
                className="rounded-xl"
              />
            </div>

            <div>
              <Label className="text-[#3491cb] flex items-center gap-2 mb-1 text-sm">
                <MapPin className="h-4 w-4" /> Address
              </Label>
              <Input
                value={profile.address}
                onChange={(e) =>
                  setProfile({ ...profile, address: e.target.value })
                }
                className="rounded-xl"
              />
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex flex-col md:flex-row gap-4 mt-12">
            <Button
              onClick={handleSave}
              disabled={saving}
              className="bg-gradient-to-br from-[#4cb9fd] to-[#153f5b] hover:bg-[#2579ac] rounded-xl"
            >
              <Save className="mr-2 h-4 w-4" />
              {saving ? "Saving..." : "Save Changes"}
            </Button>

            <Button
              variant="outline"
              onClick={handleLogout}
              className="rounded-xl border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
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
