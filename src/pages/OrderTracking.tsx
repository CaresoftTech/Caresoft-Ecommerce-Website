import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Package, MapPin, Clock, CheckCircle2, XCircle, ArrowLeft } from 'lucide-react';

interface Order {
  id: string;
  order_number: string;
  total_amount: number;
  status: string;
  created_at: string;
}

interface OrderItem {
  id: string;
  product_name: string;
  product_image: string | null;
  quantity: number;
  price: number;
}

interface TrackingHistory {
  status: string;
  notes: string | null;
  created_at: string;
}

export default function OrderTracking() {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const orderNumber = searchParams.get('order');
  
  const [order, setOrder] = useState<Order | null>(null);
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [trackingHistory, setTrackingHistory] = useState<TrackingHistory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/signin');
      return;
    }

    if (user && orderNumber) {
      fetchOrderDetails();
    }
  }, [user, authLoading, orderNumber, navigate]);

  const fetchOrderDetails = async () => {
    try {
      // Fetch order
      const { data: orderData, error: orderError } = await supabase
        .from('orders')
        .select('*')
        .eq('order_number', orderNumber)
        .eq('user_id', user?.id)
        .maybeSingle();

      if (orderError) throw orderError;
      if (!orderData) {
        toast.error('Order not found');
        navigate('/customer');
        return;
      }
      setOrder(orderData);

      // Fetch order items
      const { data: itemsData, error: itemsError } = await supabase
        .from('order_items')
        .select('*')
        .eq('order_id', orderData.id);

      if (itemsError) throw itemsError;
      setOrderItems(itemsData || []);

      // Fetch tracking history
      const { data: trackingData, error: trackingError } = await supabase
        .from('order_tracking')
        .select('*')
        .eq('order_id', orderData.id)
        .order('created_at', { ascending: false });

      if (trackingError) throw trackingError;
      setTrackingHistory(trackingData || []);
    } catch (error: any) {
      console.error('Error fetching order details:', error);
      toast.error('Failed to load order details');
    } finally {
      setLoading(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'delivered':
        return <CheckCircle2 className="h-6 w-6 text-green-600" />;
      case 'cancelled':
      case 'returned':
        return <XCircle className="h-6 w-6 text-red-600" />;
      default:
        return <Clock className="h-6 w-6 text-primary" />;
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

  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!order) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background py-12">
      <div className="container mx-auto px-4">
        <Button
          variant="ghost"
          onClick={() => navigate('/customer')}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Orders
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Details */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-2 border-primary/20 shadow-xl">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent flex items-center gap-2">
                    <Package className="h-6 w-6 text-primary" />
                    Order {order.order_number}
                  </CardTitle>
                  <Badge variant="outline" className={`${getStatusColor(order.status)} text-sm px-3 py-1`}>
                    {order.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-4 rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">Order Date</p>
                    <p className="font-semibold">
                      {new Date(order.created_at).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-secondary/10 to-accent/10 p-4 rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">Total Amount</p>
                    <p className="font-semibold text-lg text-primary">
                      ₹{order.total_amount.toLocaleString('en-IN')}
                    </p>
                  </div>
                </div>

                {/* Order Items */}
                <div>
                  <h3 className="font-semibold text-lg mb-4">Order Items</h3>
                  <div className="space-y-3">
                    {orderItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg"
                      >
                        {item.product_image && (
                          <img
                            src={item.product_image}
                            alt={item.product_name}
                            className="h-16 w-16 object-cover rounded"
                          />
                        )}
                        <div className="flex-1">
                          <p className="font-semibold">{item.product_name}</p>
                          <p className="text-sm text-muted-foreground">
                            Quantity: {item.quantity}
                          </p>
                        </div>
                        <p className="font-semibold text-primary">
                          ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tracking History */}
          <div className="lg:col-span-1">
            <Card className="border-2 border-primary/20 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Tracking History
                </CardTitle>
              </CardHeader>
              <CardContent>
                {trackingHistory.length === 0 ? (
                  <div className="text-center py-8">
                    <Clock className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                    <p className="text-muted-foreground">No tracking updates yet</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {trackingHistory.map((track, index) => (
                      <div key={index} className="relative pl-8 pb-6 last:pb-0">
                        {index !== trackingHistory.length - 1 && (
                          <div className="absolute left-3 top-8 bottom-0 w-px bg-primary/20" />
                        )}
                        <div className="absolute left-0 top-0">
                          {getStatusIcon(track.status)}
                        </div>
                        <div className="bg-muted/30 p-3 rounded-lg">
                          <p className="font-semibold capitalize">{track.status}</p>
                          {track.notes && (
                            <p className="text-sm text-muted-foreground mt-1">{track.notes}</p>
                          )}
                          <p className="text-xs text-muted-foreground mt-2">
                            {new Date(track.created_at).toLocaleString('en-IN', {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit',
                            })}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
