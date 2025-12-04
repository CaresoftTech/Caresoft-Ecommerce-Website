import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Package, Users, ShoppingCart, LayoutDashboard } from 'lucide-react';

export default function AdminDashboard() {
  const { isAdmin, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !isAdmin) {
      navigate('/signin');
    }
  }, [isAdmin, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAdmin) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#72c8fe] via-[#3c9edc] to-[#020608] bg-clip-text text-transparent flex items-center gap-3">
            <LayoutDashboard className="h-10 w-10 text-[#0e78ba]" />
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground mt-2">Manage your store efficiently</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/admin/products">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 border-[#3491cb]/20 hover:border-[#3491cb]/40">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#3491cb]">
                  <Package className="h-6 w-6" />
                  Products
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Manage products, add new items, update inventory</p>
                <Button className="mt-4 w-full bg-gradient-to-br from-[#4cb9fd] to-[#153f5b] hover:bg-[#2579ac]">
                  Manage Products
                </Button>
              </CardContent>
            </Card>
          </Link>

          <Link to="/admin/customers">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 border-[#3491cb]/20 hover:border-[#3491cb]/40">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#3491cb]">
                  <Users className="h-6 w-6" />
                  Customers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">View and manage customer information #############</p>
                <Button className="mt-4 w-full bg-gradient-to-br from-[#4cb9fd] to-[#153f5b] hover:bg-[#2579ac]">
                  View Customers
                </Button>
              </CardContent>
            </Card>
          </Link>

          <Link to="/admin/orders">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 border-[#3491cb]/20 hover:border-[#3491cb]/40">
              <CardHeader>
                <CardTitle className="flex items-center gap-2  text-[#3491cb]">
                  <ShoppingCart className="h-6 w-6" />
                  Orders
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Track and update order statuses for admin</p>
                <Button className="mt-4 w-full bg-gradient-to-br from-[#4cb9fd] to-[#153f5b] hover:bg-[#2579ac]">
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
