import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { sampleOrders, sampleCustomers, Order } from "@/data/sampleData";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { ShoppingCart } from "lucide-react";

export default function AdminOrders() {
  const { isAdmin, loading } = useAuth();
  const navigate = useNavigate();
  const [orders, setOrders] = useState<Order[]>(sampleOrders);

  useEffect(() => {
    if (!loading && !isAdmin) {
      navigate("/signin");
    }
  }, [isAdmin, loading, navigate]);

  const getCustomerInfo = (customerId: string) => {
    const customer = sampleCustomers.find((c) => c.id === customerId);
    return customer || { name: "N/A", email: "N/A" };
  };

  const updateOrderStatus = (orderId: string, newStatus: string) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === orderId
          ? { ...order, status: newStatus as Order["status"] }
          : order
      )
    );
    toast.success("Order status updated successfully (demo only)");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
      </div>
    );
  }

  if (!isAdmin) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#dff2ff] via-[#ecf9ff] to-white py-12">
      <div className="container mx-auto px-4 max-w-7xl">

        <div className="mb-10 animate-slideUp">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#0f84c9] via-[#2a9eed] to-[#153f5b] bg-clip-text text-transparent">
            Admin Orders Dashboard
          </h1>
          <p className="text-gray-600 text-lg mt-2">
            Manage & track all customer orders in one place.
          </p>
        </div>

        <Card className="backdrop-blur-xl bg-white/70 border border-white/40 shadow-2xl rounded-3xl animate-fadeIn">
          <CardHeader>
            <CardTitle className="text-2xl font-bold flex items-center gap-2">
              <ShoppingCart className="h-7 w-7 text-[#2a9eed]" />
              Orders Overview
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className="overflow-x-auto rounded-xl shadow-lg">
              <Table className="min-w-full">
                <TableHeader className="bg-gradient-to-r from-[#43b2f6] via-[#1e85c7] to-[#0f425c]">
                  <TableRow>
                    <TableHead className="text-white">Order #</TableHead>
                    <TableHead className="text-white">Customer</TableHead>
                    <TableHead className="text-white">Email</TableHead>

                    {/* ✅ NEW COLUMN */}
                    <TableHead className="text-white">Products</TableHead>

                    <TableHead className="text-white">Amount</TableHead>
                    <TableHead className="text-white">Status</TableHead>
                    <TableHead className="text-white">Date</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {orders.length === 0 ? (
                    <TableRow>
                      <TableCell
                        colSpan={7}
                        className="text-center text-gray-500 py-6"
                      >
                        No orders found
                      </TableCell>
                    </TableRow>
                  ) : (
                    orders.map((order) => {
                      const customer = getCustomerInfo(order.customer_id);

                      return (
                        <TableRow
                          key={order.id}
                          className="hover:bg-[#e8f7ff] transition-all"
                        >
                          <TableCell className="font-semibold">
                            {order.order_number}
                          </TableCell>

                          <TableCell>{customer.name}</TableCell>
                          <TableCell>{customer.email}</TableCell>

                          {/* ✅ PRODUCT NAMES */}
                          <TableCell className="max-w-[260px] text-sm text-gray-700">
                            {order.product_names}
                          </TableCell>

                          <TableCell className="font-semibold text-[#0f84c9]">
                            ₹{order.total_amount}
                          </TableCell>

                          <TableCell>
                            <Select
                              value={order.status}
                              onValueChange={(value) =>
                                updateOrderStatus(order.id, value)
                              }
                            >
                              <SelectTrigger className="w-[150px] bg-white shadow-sm">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Pending">Pending</SelectItem>
                                <SelectItem value="Processing">
                                  Processing
                                </SelectItem>
                                <SelectItem value="Shipped">Shipped</SelectItem>
                                <SelectItem value="Delivered">
                                  Delivered
                                </SelectItem>
                                <SelectItem value="Cancelled">
                                  Cancelled
                                </SelectItem>
                                <SelectItem value="Returned">
                                  Returned
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </TableCell>

                          <TableCell>
                            {new Date(order.created_at).toLocaleDateString()}
                          </TableCell>
                        </TableRow>
                      );
                    })
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        <style>
          {`
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animate-fadeIn { animation: fadeIn .8s ease-out forwards; }

            @keyframes slideUp {
              from { opacity: 0; transform: translateY(40px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animate-slideUp { animation: slideUp .7s ease-out forwards; }
          `}
        </style>
      </div>
    </div>
  );
}
