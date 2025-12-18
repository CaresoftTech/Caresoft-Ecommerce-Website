import { useAuth } from '@/contexts/AuthContext';
import { sampleOrders } from '@/data/sampleData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Package,
  Truck,
  CheckCircle,
  Clock,
  XCircle,
  RotateCcw,
  ArrowLeft,
} from 'lucide-react';
import { Navigate, useNavigate } from 'react-router-dom';

const statusConfig = {
  Pending: { color: 'from-yellow-400 to-yellow-600', icon: Clock, label: 'Pending' },
  Processing: { color: 'from-blue-400 to-blue-600', icon: Package, label: 'Processing' },
  Shipped: { color: 'from-purple-400 to-purple-600', icon: Truck, label: 'Shipped' },
  Delivered: { color: 'from-green-400 to-green-600', icon: CheckCircle, label: 'Delivered' },
  Cancelled: { color: 'from-red-400 to-red-600', icon: XCircle, label: 'Cancelled' },
  Returned: { color: 'from-orange-400 to-orange-600', icon: RotateCcw, label: 'Returned' },
};

const OrderTracking = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) return <Navigate to="/signin" replace />;

  const userOrders = sampleOrders;

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });

  const getStatusSteps = (status: string) => {
    const steps = ['Pending', 'Processing', 'Shipped', 'Delivered'];
    const currentIndex = steps.indexOf(status);

    if (status === 'Cancelled' || status === 'Returned') {
      return { steps: [status], currentIndex: 0, isCancelled: true };
    }

    return { steps, currentIndex, isCancelled: false };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f4f7fb] to-[#dfe7f6] py-8">
      <div className="container mx-auto px-16 py-4">

       
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow hover:bg-gray-100 transition "
            aria-label="Go back"
          >
            <ArrowLeft className="w-5 h-5 text-[#3491cb] hover:text-red-500" />
          </button>

          <h1 className="text-3xl font-bold text-[#3491cb]">
            Order Tracking
          </h1>
        </div>

        {userOrders.length === 0 ? (
          <Card className="backdrop-blur-xl bg-white/20 shadow-xl">
            <CardContent className="py-14 text-center">
              <Package className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <p className="text-gray-500 text-lg">No orders found</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-8">
            {userOrders.map((order) => {
              const { steps, currentIndex, isCancelled } = getStatusSteps(order.status);
              const StatusIcon = statusConfig[order.status].icon;

              return (
                <Card
                  key={order.id}
                  className="overflow-hidden border border-white/40 shadow-lg bg-white/70 backdrop-blur-xl rounded-3xl"
                >
                  <CardHeader className="bg-white/40 border-b">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl font-semibold">
                          {order.order_number}
                        </CardTitle>
                        <p className="text-sm text-gray-500">
                          Placed on {formatDate(order.created_at)}
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        <Badge
                          className={`bg-gradient-to-r ${statusConfig[order.status].color} text-white px-3 py-1 text-sm`}
                        >
                          <StatusIcon className="w-4 h-4 mr-1" />
                          {statusConfig[order.status].label}
                        </Badge>

                        <span className="font-bold text-lg text-gray-900">
                          ₹{order.total_amount.toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-6">
                    {!isCancelled && (
                      <div className="mb-8">
                        <div className="flex items-center justify-between relative">
                          {steps.map((step, index) => {
                            const isCompleted = index <= currentIndex;
                            const StepIcon =
                              statusConfig[step as keyof typeof statusConfig]?.icon || Clock;

                            return (
                              <div key={step} className="flex flex-col items-center relative z-10">
                                <div
                                  className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-all
                                    ${
                                      isCompleted
                                        ? 'bg-gradient-to-br from-[#3491cb] to-[#24689b] text-white scale-110'
                                        : 'bg-gray-200 text-gray-500'
                                    }
                                  `}
                                >
                                  <StepIcon className="w-5 h-5" />
                                </div>

                                <span
                                  className={`text-xs mt-2 ${
                                    isCompleted ? 'text-[#24689b] font-semibold' : 'text-gray-400'
                                  }`}
                                >
                                  {step}
                                </span>
                              </div>
                            );
                          })}

                          <div className="absolute top-6 left-0 right-0 h-1 bg-gray-200 rounded-full">
                            <div
                              className="h-full bg-[#3491cb] rounded-full transition-all duration-700"
                              style={{
                                width: `${(currentIndex / (steps.length - 1)) * 100}%`,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="border-t pt-4">
                      <h4 className="font-semibold text-[#3491cb] mb-4">
                        Order Items
                      </h4>

                      <div className="grid gap-4">
                        {order.items.map((item) => (
                          <div
                            key={item.id}
                            className="flex items-center gap-4 bg-white/60 rounded-xl p-3 shadow hover:shadow-[#3491cb] hover:shadow-md transition-all"
                          >
                            <img
                              src={item.product_image}
                              alt={item.product_name}
                              className="w-20 h-20 object-cover rounded-xl"
                            />

                            <div className="flex-1">
                              <p className="font-semibold text-gray-800">
                                {item.product_name}
                              </p>
                              <p className="text-sm text-gray-500">
                                Qty: {item.quantity}
                              </p>
                            </div>

                            <span className="font-semibold text-gray-900">
                              ₹{item.price.toLocaleString('en-IN')}
                            </span>
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
