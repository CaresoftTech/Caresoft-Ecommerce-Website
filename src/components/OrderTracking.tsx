import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Package, Search, CheckCircle, Truck, Box } from 'lucide-react';
import { toast } from 'sonner';

interface OrderStatus {
  id: string;
  status: 'Processing' | 'Shipped' | 'Out for Delivery' | 'Delivered';
  date: string;
  product: string;
}

export const OrderTracking = () => {
  const [orderId, setOrderId] = useState('');
  const [orderStatus, setOrderStatus] = useState<OrderStatus | null>(null);

  // Mock order data - in real app, this would come from backend
  const mockOrders: Record<string, OrderStatus> = {
    'ORD001': { id: 'ORD001', status: 'Delivered', date: '2024-01-15', product: 'Gaming Laptop Pro X1' },
    'ORD002': { id: 'ORD002', status: 'Out for Delivery', date: '2024-01-18', product: 'Wireless Headphones' },
    'ORD003': { id: 'ORD003', status: 'Shipped', date: '2024-01-19', product: 'Mechanical Keyboard' },
    'ORD004': { id: 'ORD004', status: 'Processing', date: '2024-01-20', product: 'Smartphone Pro Max' },
  };

  const handleTrackOrder = () => {
    const order = mockOrders[orderId.toUpperCase()];
    if (order) {
      setOrderStatus(order);
      toast.success('Order found!');
    } else {
      setOrderStatus(null);
      toast.error('Order not found. Please check your order ID.');
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Processing':
        return <Box className="h-8 w-8 text-vibrant-orange" />;
      case 'Shipped':
        return <Package className="h-8 w-8 text-vibrant-blue" />;
      case 'Out for Delivery':
        return <Truck className="h-8 w-8 text-vibrant-purple" />;
      case 'Delivered':
        return <CheckCircle className="h-8 w-8 text-vibrant-green" />;
      default:
        return <Package className="h-8 w-8" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Processing':
        return 'from-vibrant-orange/20 to-vibrant-yellow/20 border-vibrant-orange/30';
      case 'Shipped':
        return 'from-vibrant-blue/20 to-vibrant-teal/20 border-vibrant-blue/30';
      case 'Out for Delivery':
        return 'from-vibrant-purple/20 to-vibrant-pink/20 border-vibrant-purple/30';
      case 'Delivered':
        return 'from-vibrant-green/20 to-vibrant-teal/20 border-vibrant-green/30';
      default:
        return 'from-muted/20 to-muted/10 border-muted/30';
    }
  };

  return (
    <Card className="bg-gradient-to-br from-background to-muted/30 border-2 border-primary/20 shadow-xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl bg-gradient-to-r from-vibrant-purple via-vibrant-pink to-vibrant-blue bg-clip-text text-transparent">
          <Package className="h-6 w-6 text-vibrant-purple" />
          Track Your Order
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Search Input */}
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Enter Order ID (e.g., ORD001)"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              className="pl-10 border-vibrant-purple/30 focus:border-vibrant-purple"
              onKeyPress={(e) => e.key === 'Enter' && handleTrackOrder()}
            />
          </div>
          <Button 
            onClick={handleTrackOrder}
            className="bg-gradient-to-r from-vibrant-purple to-vibrant-pink hover:from-vibrant-pink hover:to-vibrant-blue"
          >
            Track
          </Button>
        </div>

        {/* Order Status Display */}
        {orderStatus && (
          <div className={`bg-gradient-to-br ${getStatusColor(orderStatus.status)} border-2 p-6 rounded-xl animate-fade-in`}>
            <div className="flex items-start gap-4">
              <div className="bg-white/50 p-3 rounded-full backdrop-blur-sm">
                {getStatusIcon(orderStatus.status)}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-1">{orderStatus.product}</h3>
                <p className="text-sm text-muted-foreground mb-2">Order ID: {orderStatus.id}</p>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg font-semibold text-foreground">Status:</span>
                  <span className="text-lg font-bold bg-gradient-to-r from-vibrant-purple to-vibrant-pink bg-clip-text text-transparent">
                    {orderStatus.status}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">Order Date: {orderStatus.date}</p>
              </div>
            </div>

            {/* Progress Steps */}
            <div className="mt-6 grid grid-cols-4 gap-2">
              <div className={`flex flex-col items-center ${orderStatus.status === 'Processing' || orderStatus.status === 'Shipped' || orderStatus.status === 'Out for Delivery' || orderStatus.status === 'Delivered' ? 'opacity-100' : 'opacity-30'}`}>
                <div className="bg-vibrant-orange/20 p-2 rounded-full mb-1">
                  <Box className="h-5 w-5 text-vibrant-orange" />
                </div>
                <p className="text-xs text-center">Processing</p>
              </div>
              <div className={`flex flex-col items-center ${orderStatus.status === 'Shipped' || orderStatus.status === 'Out for Delivery' || orderStatus.status === 'Delivered' ? 'opacity-100' : 'opacity-30'}`}>
                <div className="bg-vibrant-blue/20 p-2 rounded-full mb-1">
                  <Package className="h-5 w-5 text-vibrant-blue" />
                </div>
                <p className="text-xs text-center">Shipped</p>
              </div>
              <div className={`flex flex-col items-center ${orderStatus.status === 'Out for Delivery' || orderStatus.status === 'Delivered' ? 'opacity-100' : 'opacity-30'}`}>
                <div className="bg-vibrant-purple/20 p-2 rounded-full mb-1">
                  <Truck className="h-5 w-5 text-vibrant-purple" />
                </div>
                <p className="text-xs text-center">Out for Delivery</p>
              </div>
              <div className={`flex flex-col items-center ${orderStatus.status === 'Delivered' ? 'opacity-100' : 'opacity-30'}`}>
                <div className="bg-vibrant-green/20 p-2 rounded-full mb-1">
                  <CheckCircle className="h-5 w-5 text-vibrant-green" />
                </div>
                <p className="text-xs text-center">Delivered</p>
              </div>
            </div>
          </div>
        )}

        {/* Demo Order IDs */}
        <div className="bg-muted/30 p-4 rounded-lg">
          <p className="text-xs text-muted-foreground mb-2">Try these demo order IDs:</p>
          <div className="flex flex-wrap gap-2">
            {Object.keys(mockOrders).map((id) => (
              <button
                key={id}
                onClick={() => {
                  setOrderId(id);
                  setOrderStatus(mockOrders[id]);
                }}
                className="text-xs bg-primary/10 hover:bg-primary/20 text-primary px-3 py-1 rounded-full transition-colors"
              >
                {id}
              </button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
