import { useAuth } from '@/contexts/AuthContext';
import { sampleOrders } from '@/data/sampleData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Package, Truck, CheckCircle, Clock, XCircle, RotateCcw } from 'lucide-react';
import { Navigate } from 'react-router-dom';

const statusConfig = {
  Pending: { color: 'bg-yellow-500', icon: Clock, label: 'Pending' },
  Processing: { color: 'bg-blue-500', icon: Package, label: 'Processing' },
  Shipped: { color: 'bg-purple-500', icon: Truck, label: 'Shipped' },
  Delivered: { color: 'bg-green-500', icon: CheckCircle, label: 'Delivered' },
  Cancelled: { color: 'bg-red-500', icon: XCircle, label: 'Cancelled' },
  Returned: { color: 'bg-orange-500', icon: RotateCcw, label: 'Returned' },
};

const OrderTracking = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/signin" replace />;
  }

  // For demo, show all sample orders as if they belong to the current user
  const userOrders = sampleOrders;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const getStatusSteps = (status: string) => {
    const steps = ['Pending', 'Processing', 'Shipped', 'Delivered'];
    const currentIndex = steps.indexOf(status);
    
    if (status === 'Cancelled' || status === 'Returned') {
      return { steps: [status], currentIndex: 0, isCancelled: true };
    }
    
    return { steps, currentIndex, isCancelled: false };
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-foreground mb-8">Order Tracking</h1>

        {userOrders.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <Package className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground text-lg">No orders found</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {userOrders.map((order) => {
              const { steps, currentIndex, isCancelled } = getStatusSteps(order.status);
              const StatusIcon = statusConfig[order.status].icon;

              return (
                <Card key={order.id} className="overflow-hidden">
                  <CardHeader className="bg-muted/50">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-lg">{order.order_number}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">
                          Placed on {formatDate(order.created_at)}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge className={`${statusConfig[order.status].color} text-white`}>
                          <StatusIcon className="w-3 h-3 mr-1" />
                          {statusConfig[order.status].label}
                        </Badge>
                        <span className="font-semibold text-lg">₹{order.total_amount.toLocaleString('en-IN')}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    {/* Tracking Progress */}
                    {!isCancelled && (
                      <div className="mb-6">
                        <div className="flex items-center justify-between relative">
                          {steps.map((step, index) => {
                            const isCompleted = index <= currentIndex;
                            const StepIcon = statusConfig[step as keyof typeof statusConfig]?.icon || Clock;
                            
                            return (
                              <div key={step} className="flex flex-col items-center relative z-10">
                                <div
                                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                                    isCompleted
                                      ? 'bg-primary text-primary-foreground'
                                      : 'bg-muted text-muted-foreground'
                                  }`}
                                >
                                  <StepIcon className="w-5 h-5" />
                                </div>
                                <span className={`text-xs mt-2 ${isCompleted ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
                                  {step}
                                </span>
                              </div>
                            );
                          })}
                          {/* Progress Line */}
                          <div className="absolute top-5 left-0 right-0 h-0.5 bg-muted -z-0">
                            <div
                              className="h-full bg-primary transition-all duration-500"
                              style={{ width: `${(currentIndex / (steps.length - 1)) * 100}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Order Items */}
                    <div className="border-t pt-4">
                      <h4 className="font-medium mb-3">Order Items</h4>
                      <div className="space-y-3">
                        {order.items.map((item) => (
                          <div key={item.id} className="flex items-center gap-4">
                            <img
                              src={item.product_image}
                              alt={item.product_name}
                              className="w-16 h-16 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                              <p className="font-medium">{item.product_name}</p>
                              <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                            </div>
                            <span className="font-medium">₹{item.price.toLocaleString('en-IN')}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderTracking;
