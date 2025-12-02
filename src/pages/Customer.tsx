import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { User, Package, MapPin, Phone, Mail, ShoppingBag, TrendingUp } from 'lucide-react';

interface Profile {
  name: string;
  email: string;
  phone: string | null;
  address: string | null;
}

interface Order {
  id: string;
  order_number: string;
  total_amount: number;
  status: string;
  created_at: string;
}

interface OrderTracking {
  status: string;
  notes: string | null;
  created_at: string;
}

export default function Customer() {
  const { user, loading: authLoading, signOut } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/signin');
      return;
    }

    if (user) {
      fetchData();
    }
  }, [user, authLoading, navigate]);

  const fetchData = async () => {
    try {
      // Fetch profile
      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user?.id)
        .maybeSingle();

      if (profileError) throw profileError;
      setProfile(profileData);

      // Fetch orders
      const { data: ordersData, error: ordersError } = await supabase
        .from('orders')
        .select('*')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false });

      if (ordersError) throw ordersError;
      setOrders(ordersData || []);
    } catch (error: any) {
      console.error('Error fetching data:', error);
      toast.error('Failed to load data');
    } finally {
      setLoadingData(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'pending':
        return 'bg-yellow-500/10 text-yellow-700 border-yellow-500/20';
      case 'processing':
        return 'bg-blue-500/10 text-blue-700 border-blue-500/20';
      case 'shipped':
        return 'bg-purple-500/10 text-purple-700 border-purple-500/20';
      case 'delivered':
        return 'bg-green-500/10 text-green-700 border-green-500/20';
      case 'cancelled':
        return 'bg-red-500/10 text-red-700 border-red-500/20';
      case 'returned':
        return 'bg-orange-500/10 text-orange-700 border-orange-500/20';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const handleLogout = async () => {
    await signOut();
    toast.success('Logged out successfully');
    navigate('/');
  };

  if (authLoading || loadingData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user || !profile) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background py-12">
      <div className="container mx-auto px-4 space-y-8">
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-primary via-secondary to-accent p-8 rounded-2xl shadow-2xl">
          <h1 className="text-4xl font-bold text-primary-foreground flex items-center gap-3">
            <TrendingUp className="h-10 w-10 animate-pulse" />
            Welcome back, {profile.name}!
          </h1>
          <p className="text-primary-foreground/80 mt-2">Manage your orders and profile</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Section */}
          <div className="lg:col-span-1">
            <Card className="border-2 border-primary/20 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent flex items-center gap-2">
                  <User className="h-6 w-6 text-primary" />
                  My Profile
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-muted-foreground mb-1">
                    <User className="h-4 w-4" />
                    <p className="text-xs">Name</p>
                  </div>
                  <p className="font-semibold text-foreground">{profile.name}</p>
                </div>

                <div className="bg-gradient-to-br from-secondary/10 to-accent/10 p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-muted-foreground mb-1">
                    <Mail className="h-4 w-4" />
                    <p className="text-xs">Email</p>
                  </div>
                  <p className="font-semibold text-foreground">{profile.email}</p>
                </div>

                <div className="bg-gradient-to-br from-accent/10 to-primary/10 p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-muted-foreground mb-1">
                    <Phone className="h-4 w-4" />
                    <p className="text-xs">Phone</p>
                  </div>
                  <p className="font-semibold text-foreground">{profile.phone || 'Not provided'}</p>
                </div>

                <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-muted-foreground mb-1">
                    <MapPin className="h-4 w-4" />
                    <p className="text-xs">Address</p>
                  </div>
                  <p className="font-semibold text-foreground">{profile.address || 'Not provided'}</p>
                </div>

                <div className="space-y-2 pt-4">
                  <Link to="/profile">
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary">
                      Edit Profile
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    onClick={handleLogout}
                    className="w-full border-destructive/30 text-destructive hover:bg-destructive hover:text-destructive-foreground"
                  >
                    Logout
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Orders Section */}
          <div className="lg:col-span-2">
            <Card className="border-2 border-primary/20 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent flex items-center gap-2">
                  <ShoppingBag className="h-6 w-6 text-primary" />
                  My Orders
                </CardTitle>
              </CardHeader>
              <CardContent>
                {orders.length === 0 ? (
                  <div className="text-center py-12">
                    <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground text-lg">No orders yet</p>
                    <p className="text-muted-foreground text-sm mt-2">
                      Start shopping to see your orders here
                    </p>
                    <Link to="/">
                      <Button className="mt-4 bg-gradient-to-r from-primary to-secondary">
                        Browse Products
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {orders.map((order) => (
                      <Card
                        key={order.id}
                        className="border-2 border-muted hover:border-primary/40 transition-colors"
                      >
                        <CardContent className="pt-6">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <Package className="h-5 w-5 text-primary" />
                                <p className="font-bold text-lg">{order.order_number}</p>
                              </div>
                              <p className="text-sm text-muted-foreground">
                                Placed on {new Date(order.created_at).toLocaleDateString('en-IN', {
                                  day: 'numeric',
                                  month: 'long',
                                  year: 'numeric',
                                })}
                              </p>
                              <p className="text-xl font-bold text-primary">
                                ₹{order.total_amount.toLocaleString('en-IN')}
                              </p>
                            </div>
                            <div className="flex flex-col items-start md:items-end gap-2">
                              <Badge
                                variant="outline"
                                className={`${getStatusColor(order.status)} text-sm px-3 py-1`}
                              >
                                {order.status}
                              </Badge>
                              <Link to={`/order-tracking?order=${order.order_number}`}>
                                <Button size="sm" variant="outline">
                                  Track Order
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Order Statistics */}
        {orders.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="border-2 border-primary/20">
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">{orders.length}</p>
                  <p className="text-sm text-muted-foreground mt-1">Total Orders</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20">
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-secondary">
                    {orders.filter(o => o.status.toLowerCase() === 'pending').length}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">Pending</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20">
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-accent">
                    {orders.filter(o => ['processing', 'shipped'].includes(o.status.toLowerCase())).length}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">In Progress</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-500/20">
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-600">
                    {orders.filter(o => o.status.toLowerCase() === 'delivered').length}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">Delivered</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
