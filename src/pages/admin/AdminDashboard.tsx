import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Package,
  Users,
  ShoppingCart,
  BarChart3,
  LayoutDashboard,
} from "lucide-react";

export default function AdminDashboard() {
  const { isAdmin, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !isAdmin) {
      navigate("/signin");
    }
  }, [isAdmin, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-500"></div>
      </div>
    );
  }

  if (!isAdmin) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e6f3ff] via-[#f0f8ff] to-[#d6eaff] py-12">
      <div className="container mx-auto px-4">


        <div className="mb-10">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#0f84c9] via-[#2a9eed] to-[#153f5b] bg-clip-text text-transparent flex gap-3 items-center drop-shadow-sm">
            <LayoutDashboard className="h-10 w-10 text-[#007bff]" />
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground mt-2 text-lg">
            Monitor and manage your store with powerful tools
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            { label: "Total Products", value: "128", icon: Package },
            { label: "Total Customers", value: "560", icon: Users },
            { label: "Total Orders", value: "342", icon: ShoppingCart },
          ].map((item, index) => (
            <Card
              key={index}
              className="backdrop-blur-xl bg-white/40 shadow-md  hover:shadow-xl hover:shadow-[#3491cb] transition-all border border-white/40 rounded-2xl"
            >
              <CardContent className="p-6 flex justify-between items-center">
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <h2 className="text-3xl font-bold text-[#3491cb]">{item.value}</h2>
                </div>
                <item.icon className="h-10 w-10 text-[#3491cb]" />
              </CardContent>
            </Card>
          ))}
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">


          <Link to="/admin/products">
            <Card className="group bg-white/50 backdrop-blur-xl border border-white/40 shadow-md hover:shadow-xl hover:shadow-[#3491cb] transition-all hover:-translate-y-1 rounded-2xl cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#3491cb]">
                  <Package className="h-7 w-7 group-hover:scale-110 transition" />
                  Manage Products
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Add, edit, and organize your product inventory easily.
                </p>
                <Button className="mt-4 w-full bg-gradient-to-br from-[#4cb9fd] to-[#153f5b] hover:bg-[#2579ac] hover:opacity-90 rounded-xl">
                  Go to Products
                </Button>
              </CardContent>
            </Card>
          </Link>

          <Link to="/admin/customers">
            <Card className="group bg-white/50 backdrop-blur-xl border border-white/40 shadow-md hover:shadow-xl hover:shadow-[#3491cb] transition-all hover:-translate-y-1 rounded-2xl cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#3491cb]">
                  <Users className="h-7 w-7 group-hover:scale-110 transition" />
                  Customer List
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  View customer profiles, purchase history, and more.
                </p>
                <Button className="mt-4 w-full bg-gradient-to-br from-[#4cb9fd] to-[#153f5b] hover:bg-[#2579ac] hover:opacity-90 rounded-xl">
                  View Customers
                </Button>
              </CardContent>
            </Card>
          </Link>

  
          <Link to="/admin/orders">
            <Card className="group bg-white/50 backdrop-blur-xl border border-white/40 shadow-md hover:shadow-xl hover:shadow-[#3491cb] transition-all hover:-translate-y-1 rounded-2xl cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#3491cb]">
                  <ShoppingCart className="h-7 w-7 group-hover:scale-110 transition" />
                  Orders Panel
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Track orders, update statuses, and manage shipping.
                </p>
                <Button className="mt-4 w-full bg-gradient-to-br from-[#4cb9fd] to-[#153f5b] hover:bg-[#2579ac] hover:opacity-90 rounded-xl">
                  Manage Orders
                </Button>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}
