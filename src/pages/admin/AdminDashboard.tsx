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
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent flex items-center gap-3">
            <LayoutDashboard className="h-10 w-10 text-primary" />
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground mt-2">Manage your store efficiently</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/admin/products">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 border-primary/20 hover:border-primary/40">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Package className="h-6 w-6" />
                  Products
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Manage products, add new items, update inventory</p>
                <Button className="mt-4 w-full bg-gradient-to-r from-primary to-secondary">
                  Manage Products
                </Button>
              </CardContent>
            </Card>
          </Link>

          <Link to="/admin/customers">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 border-secondary/20 hover:border-secondary/40">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-secondary">
                  <Users className="h-6 w-6" />
                  Customers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">View and manage customer information</p>
                <Button className="mt-4 w-full bg-gradient-to-r from-secondary to-accent">
                  View Customers
                </Button>
              </CardContent>
            </Card>
          </Link>

          <Link to="/admin/orders">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 border-accent/20 hover:border-accent/40">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-accent">
                  <ShoppingCart className="h-6 w-6" />
                  Orders
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Track and update order statuses</p>
                <Button className="mt-4 w-full bg-gradient-to-r from-accent to-primary">
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
