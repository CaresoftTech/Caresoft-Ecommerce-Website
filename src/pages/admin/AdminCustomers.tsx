import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { sampleCustomers, Customer } from "@/data/sampleData";
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
import { Users } from "lucide-react";

export default function AdminCustomers() {
  const { isAdmin, loading } = useAuth();
  const navigate = useNavigate();
  const [customers] = useState<Customer[]>(sampleCustomers);

  useEffect(() => {
    if (!loading && !isAdmin) {
      navigate("/signin");
    }
  }, [isAdmin, loading, navigate]);

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
            Customer Management
          </h1>
          <p className="text-gray-600 text-lg mt-2">
            View and manage all registered customers.
          </p>
        </div>

  
        <Card className="backdrop-blur-xl bg-white/70 border border-white/40 shadow-2xl rounded-3xl animate-fadeIn">
          <CardHeader>
            <CardTitle className="text-2xl font-bold flex items-center gap-2">
              <Users className="h-7 w-7 text-[#2a9eed]" />
              Customer List
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className="overflow-x-auto rounded-xl shadow-lg">
              <Table className="min-w-full">
                
          
                <TableHeader className="bg-gradient-to-r from-[#43b2f6] via-[#1e85c7] to-[#0f425c]">
                  <TableRow>
                    <TableHead className="text-white">Name</TableHead>
                    <TableHead className="text-white">Email</TableHead>
                    <TableHead className="text-white">Phone</TableHead>
                    <TableHead className="text-white">Address</TableHead>
                    <TableHead className="text-white">Registered</TableHead>
                  </TableRow>
                </TableHeader>

           
                <TableBody>
                  {customers.length === 0 ? (
                    <TableRow>
                      <TableCell
                        colSpan={5}
                        className="text-center text-gray-500 py-6"
                      >
                        No customers found
                      </TableCell>
                    </TableRow>
                  ) : (
                    customers.map((customer) => (
                      <TableRow
                        key={customer.id}
                        className="hover:bg-[#e8f7ff] transition-all"
                      >
                        <TableCell className="font-semibold">
                          {customer.name}
                        </TableCell>
                        <TableCell>{customer.email}</TableCell>
                        <TableCell>{customer.phone || "N/A"}</TableCell>
                        <TableCell>{customer.address || "N/A"}</TableCell>
                        <TableCell>
                          {new Date(customer.created_at).toLocaleDateString()}
                        </TableCell>
                      </TableRow>
                    ))
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
