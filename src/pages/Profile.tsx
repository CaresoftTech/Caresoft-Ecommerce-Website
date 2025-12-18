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
  ArrowLeft,
} from "lucide-react";

export default function Profile() {
  const { user, loading, logout, updateProfile } = useAuth();
  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    doorNo: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!loading && !user) navigate("/signin");

    if (user) {
      setProfile({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        doorNo: "",
        street: "",
        city: "",
        state: "",
        pincode: "",
      });
    }
  }, [user, loading, navigate]);

  const handleSave = async () => {
    setSaving(true);
    try {
      await updateProfile({
        name: profile.name,
        phone: profile.phone,
        address: `${profile.doorNo}, ${profile.street}, ${profile.city}, ${profile.state} - ${profile.pincode}`,
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

        {/* LEFT PROFILE CARD */}
        <Card className="lg:col-span-1 p-6 rounded-3xl shadow-md bg-[#f0f7ff]">
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="h-24 w-24 rounded-full bg-gradient-to-br from-[#43cbf5] to-[#122d3a] text-white flex items-center justify-center text-3xl font-semibold">
              {profile.name?.charAt(0)?.toUpperCase() || "U"}
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[#3491cb]">
                {profile.name || "User"}
              </h2>
              <p className="text-sm text-gray-500">{profile.email}</p>
            </div>

            <Button
              onClick={() => navigate("/order-tracking")}
              className="w-full bg-gradient-to-br from-[#4cb9fd] to-[#153f5b]"
            >
              <Package className="mr-2 h-4 w-4" />
              My Orders
            </Button>
            
            <Button
              variant="outline"
              onClick={handleLogout}
              className="border-red-500 w-full text-red-500  hover:bg-red-500 hover:text-white"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>

          </div>
        </Card>

        {/* RIGHT FORM */}
        <Card className="relative lg:col-span-3 p-6 md:p-10 rounded-3xl shadow-md bg-[#f0f7ff]">

          <button
            onClick={() => navigate(-1)}
            className="absolute top-5 left-5 text-[#3491cb] hover:opacity-70"
          >
            <ArrowLeft />
          </button>

          <div className="mb-8 mt-4">
            <h1 className="text-2xl font-semibold text-[#3491cb]">
              Account Details
            </h1>
            <p className="text-sm text-gray-500">
              Keep your personal information up to date
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label className="flex items-center gap-2 text-sm pb-3 text-[#3491cb]">
                <User className="h-4 w-4" /> Full Name
              </Label>
              <Input
                value={profile.name}
                onChange={(e) =>
                  setProfile({ ...profile, name: e.target.value })
                }
              />
            </div>

            {/* <div>
              <Label className="flex items-center gap-2 text-sm text-[#3491cb]">
                <Mail className="h-4 w-4" /> Email
              </Label>
              <Input value={profile.email} disabled />
            </div> */}

            <div>
              <Label className="flex items-center gap-2 text-sm pb-3 text-[#3491cb]">
                <Phone className="h-4 w-4" /> Phone
              </Label>
              <Input
                value={profile.phone}
                onChange={(e) =>
                  setProfile({ ...profile, phone: e.target.value })
                }
              />
            </div>
          </div>

          
          <div className="mt-8">
            <h3 className="flex items-center gap-2 text-sm font-semibold text-[#3491cb] mb-4">
              <MapPin className="h-4 w-4" /> Address Details
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <Input
                placeholder="Door / Flat No"
                value={profile.doorNo}
                onChange={(e) =>
                  setProfile({ ...profile, doorNo: e.target.value })
                }
              />

              <Input
                placeholder="Street / Area"
                value={profile.street}
                onChange={(e) =>
                  setProfile({ ...profile, street: e.target.value })
                }
              />

              <Input
                placeholder="City"
                value={profile.city}
                onChange={(e) =>
                  setProfile({ ...profile, city: e.target.value })
                }
              />

              <select
                value={profile.state}
                onChange={(e) =>
                  setProfile({ ...profile, state: e.target.value })
                }
                className="h-10 rounded-md   px-3 text-sm"
              >
                <option value="">Select State</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Kerala">Kerala</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Telangana">Telangana</option>
              </select>

              <Input
                placeholder="Pincode"
                value={profile.pincode}
                onChange={(e) =>
                  setProfile({ ...profile, pincode: e.target.value })
                }
              />
            </div>
          </div>


          <div className="flex flex-col md:flex-row gap-4 mt-10">
            <Button
              onClick={handleSave}
              disabled={saving}
              className="bg-gradient-to-br from-[#4cb9fd] to-[#153f5b]"
            >
              <Save className="mr-2 h-4 w-4" />
              {saving ? "Saving..." : "Save Changes"}
            </Button>

          </div>
        </Card>
      </div>
    </div>
  );
}
